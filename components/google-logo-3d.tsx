"use client"

import { useState, useEffect, useId } from "react"

// ─── colour palette ───────────────────────────────────────────────────────────
const FRONT = { blue: "#4285F4", red: "#EA4335", yellow: "#FBBC05", green: "#34A853" }
const SIDE  = { blue: "#1a4fa8", red: "#7a1a10", yellow: "#7a5e00", green: "#1a5c2a" }
const BG    = "#09090b" // page background colour (used for inner cutout)

// ─── geometry constants (100 × 100 viewBox) ──────────────────────────────────
const CX = 50, CY = 50
const R_OUTER = 46  // outer radius
const R_INNER = 28  // inner radius (cutout)
// Google G horizontal bar
const BAR_Y   = CY - 5.8
const BAR_H   = 11.6
const BAR_X   = CX + R_INNER - 1   // starts just inside inner circle
const BAR_W   = R_OUTER - R_INNER + 14 // extends slightly past outer edge

// ─── helpers ─────────────────────────────────────────────────────────────────
/** Polar → Cartesian, angle measured clockwise from top (12 o'clock = 0°). */
function polar(r: number, deg: number): { x: number; y: number } {
  const rad = ((deg - 90) * Math.PI) / 180
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) }
}

/**
 * Build an SVG path for a ring-sector (donut slice) between two angles.
 * Handles the wrap-around case where endDeg < startDeg (crosses 360°).
 */
function sectorPath(startDeg: number, endDeg: number): string {
  // Normalise so we always go clockwise
  let end = endDeg
  if (end <= startDeg) end += 360
  const span  = end - startDeg
  const large = span > 180 ? 1 : 0

  const o1 = polar(R_OUTER, startDeg)
  const o2 = polar(R_OUTER, end)
  const i1 = polar(R_INNER, end)
  const i2 = polar(R_INNER, startDeg)

  return [
    `M ${o1.x} ${o1.y}`,
    `A ${R_OUTER} ${R_OUTER} 0 ${large} 1 ${o2.x} ${o2.y}`,
    `L ${i1.x} ${i1.y}`,
    `A ${R_INNER} ${R_INNER} 0 ${large} 0 ${i2.x} ${i2.y}`,
    "Z",
  ].join(" ")
}

// ─── Google G segment component ───────────────────────────────────────────────
/**
 * Renders the four coloured arc-sectors + horizontal bar that form the
 * Google "G" letter.  The inner circle is punched out by drawing it in
 * the page background colour, then the bar is re-drawn on top.
 *
 * Colour regions (clockwise from top-right, standard Google spec):
 *   Blue   : 315° → 90°   (top, crossing 0°)
 *   Red    : 90°  → 195°  (left-top)
 *   Yellow : 195° → 285°  (bottom)
 *   Green  : 285° → 315°  (bottom-right)
 */
function GoogleGSegments({ palette }: { palette: typeof FRONT }) {
  return (
    <>
      {/* four coloured ring sectors */}
      <path d={sectorPath(315, 90)}  fill={palette.blue}   />
      <path d={sectorPath(90,  195)} fill={palette.red}    />
      <path d={sectorPath(195, 285)} fill={palette.yellow} />
      <path d={sectorPath(285, 315)} fill={palette.green}  />

      {/* inner circle cutout (paint in bg colour) */}
      <circle cx={CX} cy={CY} r={R_INNER} fill={BG} />

      {/* horizontal bar on top — re-paints over the cutout */}
      <rect x={BAR_X} y={BAR_Y} width={BAR_W} height={BAR_H}
            fill={palette.blue} rx={1} />
    </>
  )
}

// ─── main component ───────────────────────────────────────────────────────────
export default function GoogleLogo3D({ size = 200 }: { size?: number }) {
  const [isHovered, setIsHovered]     = useState(false)
  const [prefersReduced, setReduced]  = useState(false)
  const uid = useId().replace(/:/g, "")

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const paused = prefersReduced || isHovered

  // Scale extrusion depth with component size so it looks right at any size.
  // At size=200 we want ~18 slices × 1.4 px = 25 px total depth.
  const DEPTH      = 18
  const SLICE_STEP = (size * 0.125) / DEPTH   // total depth ≈ 12.5% of size

  return (
    <>
      {/* ── CSS keyframes + utility classes ───────────────────────────── */}
      <style>{`
        @keyframes g3d-spin {
          from { transform: rotateX(-14deg) rotateY(  0deg); }
          to   { transform: rotateX(-14deg) rotateY(360deg); }
        }
        @keyframes g3d-float {
          0%, 100% { transform: translateY(0);     }
          50%       { transform: translateY(-10px); }
        }
        @keyframes g3d-glow {
          0%, 100% { opacity: 0.55; transform: translateX(-50%) scaleX(1)    scaleY(1);    }
          50%       { opacity: 0.28; transform: translateX(-50%) scaleX(0.88) scaleY(0.55); }
        }
        @keyframes g3d-spec {
          0%, 100% { opacity: 0.70; }
          50%       { opacity: 0.25; }
        }

        .g3d-scene   { perspective: 1100px; perspective-origin: 50% 44%; }

        .g3d-floater {
          animation: g3d-float 4.2s ease-in-out infinite;
          animation-play-state: ${paused ? "paused" : "running"};
        }

        .g3d-object {
          transform-style: preserve-3d;
          animation: g3d-spin 9s linear infinite;
          animation-play-state: ${paused ? "paused" : "running"};
          will-change: transform;
        }

        /* When hovered we freeze the spin but tilt slightly via CSS.
           The tilt is handled by the JS state (animPaused stops the keyframe). */

        .g3d-face    { position: absolute; inset: 0; backface-visibility: hidden; }

        .g3d-spec-el {
          animation: g3d-spec 3s ease-in-out infinite;
          animation-play-state: ${paused ? "paused" : "running"};
        }
        .g3d-glow-el {
          animation: g3d-glow 4.2s ease-in-out infinite;
          animation-play-state: ${paused ? "paused" : "running"};
        }
      `}</style>

      {/* ── scene root ─────────────────────────────────────────────────── */}
      <div
        className="g3d-scene inline-flex items-center justify-center select-none"
        style={{ width: size, height: size }}
        role="img"
        aria-label="Google logo 3D"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* float wrapper */}
        <div className="g3d-floater" style={{ width: size, height: size, position: "relative" }}>

          {/* ── ground glow ──────────────────────────────────────────── */}
          <div
            className="g3d-glow-el"
            style={{
              position: "absolute",
              bottom: -size * 0.05,
              left: "50%",
              // translateX handled in keyframe
              width:  size * 0.76,
              height: size * 0.13,
              borderRadius: "50%",
              background: "radial-gradient(ellipse at center, #4285F455 0%, #EA433530 45%, transparent 75%)",
              filter: `blur(${size * 0.042}px)`,
              pointerEvents: "none",
            }}
          />

          {/* ── shared SVG defs (0×0, just for ids) ─────────────────── */}
          <svg width={0} height={0} style={{ position: "absolute", overflow: "visible" }} aria-hidden>
            <defs>
              {/* ambient light overlay – top-left source */}
              <radialGradient id={`${uid}fg`} cx="32%" cy="28%" r="62%">
                <stop offset="0%"   stopColor="#fff" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#000" stopOpacity="0.00" />
              </radialGradient>

              {/* bright specular dot */}
              <radialGradient id={`${uid}spec`} cx="26%" cy="20%" r="26%">
                <stop offset="0%"   stopColor="#fff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0.00" />
              </radialGradient>

              {/* darker rim-light on the right edge */}
              <radialGradient id={`${uid}rim`} cx="78%" cy="60%" r="40%">
                <stop offset="0%"   stopColor="#fff" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0.00" />
              </radialGradient>

              {/* drop shadow for front face */}
              <filter id={`${uid}drop`} x="-25%" y="-25%" width="150%" height="150%">
                <feDropShadow
                  dx="0" dy={size * 0.018}
                  stdDeviation={size * 0.022}
                  floodColor="#000" floodOpacity="0.55"
                />
              </filter>

              {/* SVG inner-bevel illusion */}
              <filter id={`${uid}bevel`} x="-5%" y="-5%" width="110%" height="110%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" result="blur" />
                <feOffset dx="-2" dy="-2" in="blur" result="shifted" />
                <feComposite in="shifted" in2="SourceAlpha" operator="in" result="inner" />
                <feFlood floodColor="#fff" floodOpacity="0.40" result="white" />
                <feComposite in="white" in2="inner" operator="in" result="highlight" />
                <feMerge>
                  <feMergeNode in="SourceGraphic" />
                  <feMergeNode in="highlight" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* ── spinning 3D object ───────────────────────────────────── */}
          <div
            className="g3d-object"
            style={{ width: size, height: size, position: "relative" }}
          >
            {/* EXTRUSION SLICES — back to front, side-face colours */}
            {Array.from({ length: DEPTH }).map((_, i) => {
              const z          = -((DEPTH - 1 - i) * SLICE_STEP)
              const t          = i / (DEPTH - 1)          // 0=back → 1=front
              const brightness = 0.32 + 0.38 * t           // darkest at back

              return (
                <div
                  key={i}
                  className="g3d-face"
                  style={{
                    transform: `translateZ(${z}px)`,
                    filter: `brightness(${brightness})`,
                  }}
                >
                  <svg viewBox="0 0 100 100" width={size} height={size}
                       style={{ display: "block" }}>
                    <GoogleGSegments palette={SIDE} />
                  </svg>
                </div>
              )
            })}

            {/* FRONT FACE — full colour + drop-shadow */}
            <div className="g3d-face" style={{ transform: "translateZ(0.8px)" }}>
              <svg
                viewBox="0 0 100 100"
                width={size}
                height={size}
                style={{ display: "block", filter: `url(#${uid}drop)` }}
              >
                <GoogleGSegments palette={FRONT} />

                {/* ambient light overlay */}
                <circle cx={CX} cy={CY} r={R_OUTER}
                        fill={`url(#${uid}fg)`} style={{ mixBlendMode: "screen" }} />
                {/* rim light (right side) */}
                <circle cx={CX} cy={CY} r={R_OUTER}
                        fill={`url(#${uid}rim)`} style={{ mixBlendMode: "screen" }} />
                {/* inner-bevel stroke */}
                <path
                  d={sectorPath(0, 359.99)}
                  fill="none"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1.0"
                  style={{ filter: `url(#${uid}bevel)` }}
                />
              </svg>
            </div>

            {/* SPECULAR HIGHLIGHT — animated bright dot, floats above front */}
            <div
              className="g3d-face g3d-spec-el"
              style={{ transform: "translateZ(1.6px)", pointerEvents: "none" }}
            >
              <svg viewBox="0 0 100 100" width={size} height={size}
                   style={{ display: "block" }}>
                {/* clip to the G shape so specular doesn't bleed outside */}
                <defs>
                  <clipPath id={`${uid}gclip`}>
                    {/* outer ring */}
                    <circle cx={CX} cy={CY} r={R_OUTER} />
                  </clipPath>
                </defs>
                <g clipPath={`url(#${uid}gclip)`}>
                  {/* mask out inner hole and re-add bar */}
                  <circle cx={CX} cy={CY} r={R_OUTER} fill={`url(#${uid}spec)`} />
                  <circle cx={CX} cy={CY} r={R_INNER} fill="transparent" />
                </g>
              </svg>
            </div>

            {/* FLOOR REFLECTION — flipped, fades out downward */}
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: size,
                height: size * 0.30,
                transform: "translateZ(0) scaleY(-1)",
                transformOrigin: "top center",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 85%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 85%)",
                pointerEvents: "none",
              }}
            >
              <svg viewBox="0 0 100 100" width={size} height={size * 0.30}
                   style={{ display: "block" }}>
                <GoogleGSegments palette={FRONT} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
