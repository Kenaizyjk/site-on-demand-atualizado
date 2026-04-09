"use client"

// ─── Best practices applied ───────────────────────────────────────────────────
// rendering-animate-svg-wrapper : CSS animation runs on a <div> wrapper, not
//   the SVG element itself, so browsers can GPU-accelerate the transform.
// rendering-svg-precision        : All computed coordinates use toFixed(1) — one
//   decimal place is ample for a 240-unit viewBox.
// rendering-hoist-jsx            : Every polygon that does NOT depend on hover
//   state is pre-computed at module level and referenced as a constant string,
//   so React never re-creates those large attribute values on re-render.
// rerender-memo                  : Static side-wall arrays are computed once at
//   module level; the component only reads them.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react"

// ─── Projection constants ─────────────────────────────────────────────────────
// Cabinet-oblique projection:  screenX = x + z·cos30,  screenY = y − z·sin30·ks
// This gives a convincing "block letter" appearance without full isometric math.
const DEPTH   = 20                           // extrusion thickness (SVG units)
const COS30   = Math.cos(Math.PI / 6)        // ≈ 0.866
const SIN30_K = Math.sin(Math.PI / 6) * 0.55 // ≈ 0.275  (foreshortened)

function screenXY(x: number, y: number, z: number): [number, number] {
  return [x + z * COS30, y - z * SIN30_K]
}

// Format a single 3-D point as "x,y" for SVG `points` attributes
function fmtPt(x: number, y: number, z: number): string {
  const [sx, sy] = screenXY(x, y, z)
  return `${sx.toFixed(1)},${sy.toFixed(1)}`  // rendering-svg-precision: 1 dp
}

// Build a polygon `points` string from a list of [x,y,z] triples
function polyStr(pts: ReadonlyArray<readonly [number, number, number]>): string {
  return pts.map(([x, y, z]) => fmtPt(x, y, z)).join(" ")
}

// ─── Arc sampling ─────────────────────────────────────────────────────────────
// Returns `steps+1` equally-spaced points on the arc from startDeg to endDeg.
// When clockwise=true the arc sweeps in the positive-angle (SVG y-down) direction.
function arcPts(
  cx: number, cy: number, r: number,
  startDeg: number, endDeg: number,
  steps: number,
  clockwise = true,
): [number, number][] {
  const s   = (startDeg * Math.PI) / 180
  const e   = (endDeg   * Math.PI) / 180
  let delta = e - s
  if (clockwise  && delta < 0) delta += 2 * Math.PI
  if (!clockwise && delta > 0) delta -= 2 * Math.PI
  const out: [number, number][] = []
  for (let i = 0; i <= steps; i++) {
    const a = s + delta * (i / steps)
    out.push([cx + r * Math.cos(a), cy + r * Math.sin(a)])
  }
  return out
}

// ─── Google G geometry ────────────────────────────────────────────────────────
// ViewBox: 240 × 240, centre at (120, 120).
// Outer radius 96, inner radius 57 → ring thickness 39 px (matches Google's ratio).
// The G opens on the LEFT side. Gap from 145° to 215° (SVG convention: 0° = right).
// Horizontal bar occupies centre-right from inner edge to outer edge, ±19 px tall.

const CX = 120
const CY = 120
const RO = 96   // outer radius
const RI = 57   // inner radius
const BAR_HALF = 19  // half-height of horizontal bar

const GAP_OPEN  = 215   // gap bottom (outer arc starts here, going CW)
const GAP_CLOSE = 325   // gap top   (outer arc ends here  = −35°)

// ── Colour sector boundaries (standard Google G colour split) ─────────────────
// Angles in SVG degrees (0 = right, increasing CW in screen space):
//   Blue   : top-right quadrant + horizontal bar  →  270° → 325° (with bar)
//   Red    : top & top-left                       →  145° → 270°
//   Yellow : bottom-left                          →  215° → 145°  (small CW wrap)
//   Green  : bottom-right                         →   90° → 215°

// Helper: build a ring sector as [x,y][] (outer CW + inner CCW = closed polygon)
function ringSlice(
  startDeg: number, endDeg: number,
  steps: number, clockwise = true,
): [number, number][] {
  const outer = arcPts(CX, CY, RO, startDeg, endDeg, steps, clockwise)
  const inner = arcPts(CX, CY, RI, startDeg, endDeg, steps, clockwise).reverse()
  return [...outer, ...inner]
}

// BLUE sector: arc from 270° to GAP_CLOSE(325°) plus the horizontal bar
const blueOuterArc = arcPts(CX, CY, RO, 270, GAP_CLOSE, 18, true)
const blueInnerArc = arcPts(CX, CY, RI, 270, 0,         10, true).reverse()
// Bar corners (right side of the G at angle 0°)
const barRX = CX + RO              // outer right X
const barIX = CX + RI              // inner right X
const barTY = CY - BAR_HALF        // bar top Y
const barBY = CY + BAR_HALF        // bar bottom Y

const BLUE_PTS: [number, number][] = [
  ...blueOuterArc,
  // Drop to bar outer-right-top, across bar, to inner-right-bottom, then inner arc
  [barRX, barTY],
  [barIX, barTY],
  [barIX, barBY],
  [CX + RI, CY],   // inner right at 0° (connects back to inner arc)
  ...blueInnerArc,
]

// RED sector: 145° → 270° (top-left, through left, up to top)
const RED_PTS    = ringSlice(145, 270, 36, true)
// YELLOW sector: GAP_OPEN(215°) → 145°
const YELLOW_PTS = ringSlice(GAP_OPEN, 145, 24, false)
// GREEN sector: 90° → GAP_OPEN(215°)
const GREEN_PTS  = ringSlice(90, GAP_OPEN, 28, true)

// ─── Colour palette ───────────────────────────────────────────────────────────
const BLUE   = "#4285F4"
const RED    = "#EA4335"
const YELLOW = "#FBBC05"
const GREEN  = "#34A853"

function adjustHex(hex: string, delta: number): string {
  const n = parseInt(hex.slice(1), 16)
  const clamp = (v: number) => Math.max(0, Math.min(255, v))
  const r = clamp((n >> 16) + delta)
  const g = clamp(((n >> 8) & 0xff) + delta)
  const b = clamp((n & 0xff) + delta)
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`
}

const BLUE_LITE   = adjustHex(BLUE,   55)
const RED_LITE    = adjustHex(RED,    55)
const YELLOW_LITE = adjustHex(YELLOW, 55)
const GREEN_LITE  = adjustHex(GREEN,  55)

const BLUE_DARK   = adjustHex(BLUE,   -55)
const RED_DARK    = adjustHex(RED,    -55)
const YELLOW_DARK = adjustHex(YELLOW, -55)
const GREEN_DARK  = adjustHex(GREEN,  -55)

// ─── Side-wall builder ────────────────────────────────────────────────────────
// For each polygon edge, we test whether it faces toward the viewer (visible side).
// In cabinet-oblique the extrusion direction is upper-right (+cos30, −sin30·ks).
// A face is visible when its outward normal has a positive component along that
// direction, i.e. normal·(cos30, sin30·ks) > 0  →  nx·cos30 + ny·sin30·ks > 0
// where (nx, ny) = perpendicular to the edge in the 2-D front plane.

type SideQuad = { pts: string; fill: string }

function buildSideWalls(poly2D: [number, number][], baseColor: string): SideQuad[] {
  const quads: SideQuad[] = []
  const n = poly2D.length
  for (let i = 0; i < n; i++) {
    const [ax, ay] = poly2D[i]
    const [bx, by] = poly2D[(i + 1) % n]
    const dx = bx - ax
    const dy = by - ay
    // For CW winding, outward normal is (dy, -dx)
    const nx = dy
    const ny = -dx
    // Visibility: dot with extrusion direction (COS30, SIN30_K going upward = negative screen-y)
    const vis = nx * COS30 + ny * (-SIN30_K)
    if (vis > 0.5) {
      // Brighter for top-facing, darker for right-facing
      const shade = (ny < -0.5) ? -35 : -75
      quads.push({
        pts: [
          fmtPt(ax, ay, 0),
          fmtPt(bx, by, 0),
          fmtPt(bx, by, DEPTH),
          fmtPt(ax, ay, DEPTH),
        ].join(" "),
        fill: adjustHex(baseColor, shade),
      })
    }
  }
  return quads
}

// ─── Pre-compute all static geometry at MODULE LEVEL ─────────────────────────
// rendering-hoist-jsx: these strings are computed once; the component just reads them.

function pts2DStr(pts: [number, number][]): string {
  return pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ")
}
function topStr(pts: [number, number][]): string {
  return pts.map(([x, y]) => fmtPt(x, y, DEPTH)).join(" ")
}

// Front face strings (z = 0)
const BLUE_FRONT_STR   = pts2DStr(BLUE_PTS)
const RED_FRONT_STR    = pts2DStr(RED_PTS)
const YELLOW_FRONT_STR = pts2DStr(YELLOW_PTS)
const GREEN_FRONT_STR  = pts2DStr(GREEN_PTS)

// Top face strings (z = DEPTH)
const BLUE_TOP_STR   = topStr(BLUE_PTS)
const RED_TOP_STR    = topStr(RED_PTS)
const YELLOW_TOP_STR = topStr(YELLOW_PTS)
const GREEN_TOP_STR  = topStr(GREEN_PTS)

// Back face (z = DEPTH) with slightly reduced base colours (peeks from behind)
const BLUE_BACK_STR   = BLUE_TOP_STR
const RED_BACK_STR    = RED_TOP_STR
const YELLOW_BACK_STR = YELLOW_TOP_STR
const GREEN_BACK_STR  = GREEN_TOP_STR

// Side walls (static geometry)
const BLUE_SIDES   = buildSideWalls(BLUE_PTS,   BLUE)
const RED_SIDES    = buildSideWalls(RED_PTS,    RED)
const YELLOW_SIDES = buildSideWalls(YELLOW_PTS, YELLOW)
const GREEN_SIDES  = buildSideWalls(GREEN_PTS,  GREEN)

// Reflection polygon strings (flat 2D, drawn below the logo)
const BLUE_REFL_STR   = BLUE_FRONT_STR
const RED_REFL_STR    = RED_FRONT_STR
const YELLOW_REFL_STR = YELLOW_FRONT_STR
const GREEN_REFL_STR  = GREEN_FRONT_STR

// ViewBox dimensions (extra room for oblique extrusion + padding)
const VB_PAD = 30
const VB_W   = +(240 + DEPTH * COS30 + VB_PAD * 2).toFixed(1)
const VB_H   = +(240 + VB_PAD * 2).toFixed(1)
const VB_STR = `${-VB_PAD} ${-VB_PAD} ${VB_W} ${VB_H}`

// Edge stroke colours (pre-computed)
const BLUE_EDGE   = adjustHex(BLUE,   -45)
const RED_EDGE    = adjustHex(RED,    -45)
const YELLOW_EDGE = adjustHex(YELLOW, -45)
const GREEN_EDGE  = adjustHex(GREEN,  -45)

// ─── CSS (static string, defined once outside component) ─────────────────────
const KEYFRAMES_CSS = `
  @keyframes g3dFloat {
    0%,100% { transform: translateY(0px)   rotate(0deg);   }
    30%     { transform: translateY(-14px) rotate(2deg);   }
    65%     { transform: translateY(-7px)  rotate(-1.2deg);}
  }
  @keyframes g3dGlow {
    0%,100% { filter: drop-shadow(0 10px 28px #4285F47a) drop-shadow(0 0 14px #EA433540); }
    33%     { filter: drop-shadow(0 18px 36px #34A85370) drop-shadow(0 0 18px #4285F450); }
    66%     { filter: drop-shadow(0 14px 30px #FBBC0565) drop-shadow(0 0 16px #EA433545); }
  }
  @keyframes g3dRefl {
    0%,100% { opacity: 0.20; }
    50%     { opacity: 0.09; }
  }
  @media (prefers-reduced-motion: reduce) {
    .g3d-anim { animation: none !important; transform: none !important; }
    .g3d-glow { animation: none !important; filter: drop-shadow(0 8px 22px #4285F455) !important; }
    .g3d-refl { animation: none !important; opacity: 0.12 !important; }
  }
`

// ─── Component ────────────────────────────────────────────────────────────────
export default function GoogleLogo3DIso({ size = 240 }: { size?: number }) {
  const [hovered, setHovered] = useState(false)

  // Only the opacity of the top-highlight face changes on hover — everything
  // else is hoisted static strings, so re-renders are near zero-cost.
  const topOpacity = hovered ? "0.95" : "0.80"

  // rendering-animate-svg-wrapper: the float animation lives on a <div>, not
  // on the <svg>, so the browser can GPU-accelerate the transform.
  return (
    <div
      style={{ display: "inline-block", lineHeight: 0, cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Wrapper div carries the float animation — hardware-accelerated */}
      <div
        className="g3d-anim"
        style={{
          animation: "g3dFloat 4.2s ease-in-out infinite",
          transformOrigin: "center bottom",
          // Subtle scale on hover (CSS transition for smoothness)
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.25s ease",
          willChange: "transform",
        }}
      >
        {/* Glow wrapper — drop-shadow filter animates colour-cycle */}
        <div
          className="g3d-glow"
          style={{ animation: "g3dGlow 4.2s ease-in-out infinite" }}
        >
          <svg
            width={size}
            height={size}
            viewBox={VB_STR}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Google G logo rendered as a 3D isometric block"
            role="img"
            style={{ display: "block", background: "transparent", overflow: "visible" }}
          >
            <style>{KEYFRAMES_CSS}</style>

            {/* ── Reflection ────────────────────────────────────────────── */}
            {/* Mirrored flat 2-D silhouette below the logo, blurred & faded */}
            <g
              className="g3d-refl"
              style={{
                animation: "g3dRefl 4.2s ease-in-out infinite",
                transform: `translateY(${(CY + 130).toFixed(1)}px) scaleY(-0.18)`,
                transformOrigin: `${CX}px 0px`,
                filter: "blur(7px)",
                opacity: 0.18,
              }}
            >
              <polygon points={BLUE_REFL_STR}   fill={BLUE}   />
              <polygon points={RED_REFL_STR}    fill={RED}    />
              <polygon points={YELLOW_REFL_STR} fill={YELLOW} />
              <polygon points={GREEN_REFL_STR}  fill={GREEN}  />
            </g>

            {/* ── Painter's algorithm: draw back → sides → front → tops ── */}

            {/* 1 ▸ Back faces  (z = DEPTH, slightly darker, peeking behind) */}
            <polygon points={BLUE_BACK_STR}   fill={BLUE_DARK}   opacity="0.75" />
            <polygon points={RED_BACK_STR}    fill={RED_DARK}    opacity="0.75" />
            <polygon points={YELLOW_BACK_STR} fill={YELLOW_DARK} opacity="0.75" />
            <polygon points={GREEN_BACK_STR}  fill={GREEN_DARK}  opacity="0.75" />

            {/* 2 ▸ Side walls (oblique extrusion faces, per-edge quads) */}
            {BLUE_SIDES.map((q, i) => (
              <polygon key={`b${i}`} points={q.pts} fill={q.fill} />
            ))}
            {RED_SIDES.map((q, i) => (
              <polygon key={`r${i}`} points={q.pts} fill={q.fill} />
            ))}
            {YELLOW_SIDES.map((q, i) => (
              <polygon key={`y${i}`} points={q.pts} fill={q.fill} />
            ))}
            {GREEN_SIDES.map((q, i) => (
              <polygon key={`g${i}`} points={q.pts} fill={q.fill} />
            ))}

            {/* 3 ▸ Front faces (z = 0) — full brand colours */}
            <polygon points={BLUE_FRONT_STR}   fill={BLUE}   />
            <polygon points={RED_FRONT_STR}    fill={RED}    />
            <polygon points={YELLOW_FRONT_STR} fill={YELLOW} />
            <polygon points={GREEN_FRONT_STR}  fill={GREEN}  />

            {/* 4 ▸ Top highlight faces (z = DEPTH, light-from-above tint) */}
            {/* Only opacity varies with hover state — all other attrs are static */}
            <polygon points={BLUE_TOP_STR}   fill={BLUE_LITE}   opacity={topOpacity} />
            <polygon points={RED_TOP_STR}    fill={RED_LITE}    opacity={topOpacity} />
            <polygon points={YELLOW_TOP_STR} fill={YELLOW_LITE} opacity={topOpacity} />
            <polygon points={GREEN_TOP_STR}  fill={GREEN_LITE}  opacity={topOpacity} />

            {/* 5 ▸ Specular edge lines on top faces (white rim highlight) */}
            <polygon
              points={BLUE_TOP_STR}
              fill="none"
              stroke="rgba(255,255,255,0.60)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <polygon
              points={RED_TOP_STR}
              fill="none"
              stroke="rgba(255,255,255,0.40)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            <polygon
              points={YELLOW_TOP_STR}
              fill="none"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            <polygon
              points={GREEN_TOP_STR}
              fill="none"
              stroke="rgba(255,255,255,0.40)"
              strokeWidth="1"
              strokeLinejoin="round"
            />

            {/* 6 ▸ Front-face edge strokes (crisp sector boundaries) */}
            <polygon points={BLUE_FRONT_STR}   fill="none" stroke={BLUE_EDGE}   strokeWidth="0.8" opacity="0.55" />
            <polygon points={RED_FRONT_STR}    fill="none" stroke={RED_EDGE}    strokeWidth="0.8" opacity="0.55" />
            <polygon points={YELLOW_FRONT_STR} fill="none" stroke={YELLOW_EDGE} strokeWidth="0.8" opacity="0.55" />
            <polygon points={GREEN_FRONT_STR}  fill="none" stroke={GREEN_EDGE}  strokeWidth="0.8" opacity="0.55" />

            {/* 7 ▸ Inner-ring ghost highlight (soft white circle at hole edge) */}
            <circle
              cx={CX.toFixed(1)}
              cy={CY.toFixed(1)}
              r={RI}
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.2"
            />

            {/* 8 ▸ Ambient inner glow (radial gradient overlay on front face) */}
            <defs>
              <radialGradient id="innerGlow" cx="60%" cy="38%" r="55%">
                <stop offset="0%"   stopColor="white" stopOpacity="0.18" />
                <stop offset="100%" stopColor="white" stopOpacity="0"    />
              </radialGradient>
              <radialGradient id="shadowGrad" cx="50%" cy="100%" r="50%">
                <stop offset="0%"   stopColor="rgba(0,0,0,0.22)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)"    />
              </radialGradient>
            </defs>
            {/* Ambient highlight on front face */}
            <polygon points={BLUE_FRONT_STR}   fill="url(#innerGlow)" />
            <polygon points={RED_FRONT_STR}    fill="url(#innerGlow)" />
            <polygon points={YELLOW_FRONT_STR} fill="url(#innerGlow)" />
            <polygon points={GREEN_FRONT_STR}  fill="url(#innerGlow)" />
            {/* Subtle bottom shadow on front face */}
            <polygon points={BLUE_FRONT_STR}   fill="url(#shadowGrad)" opacity="0.4" />
            <polygon points={GREEN_FRONT_STR}  fill="url(#shadowGrad)" opacity="0.4" />
          </svg>
        </div>
      </div>
    </div>
  )
}
