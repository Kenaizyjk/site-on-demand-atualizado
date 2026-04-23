"use client"

import Image from "next/image"

const FLOAT_CSS = `
  @keyframes g3dFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    30%      { transform: translateY(-14px) rotate(2deg); }
    65%      { transform: translateY(-7px) rotate(-1.2deg); }
  }
  @keyframes g3dGlow {
    0%, 100% { filter: drop-shadow(0 10px 28px rgba(66,133,244,0.4)) drop-shadow(0 0 14px rgba(234,67,53,0.25)); }
    33%      { filter: drop-shadow(0 18px 36px rgba(52,168,83,0.35)) drop-shadow(0 0 18px rgba(66,133,244,0.3)); }
    66%      { filter: drop-shadow(0 14px 30px rgba(251,188,5,0.3)) drop-shadow(0 0 16px rgba(234,67,53,0.25)); }
  }
  @media (prefers-reduced-motion: reduce) {
    .g3d-anim { animation: none !important; transform: none !important; }
    .g3d-glow { animation: none !important; filter: drop-shadow(0 8px 22px rgba(66,133,244,0.3)) !important; }
  }
`

export default function GoogleLogo3DIso({ size = 240 }: { size?: number }) {
  return (
    <div style={{ display: "inline-block", lineHeight: 0 }}>
      <style>{FLOAT_CSS}</style>
      <div
        className="g3d-anim"
        style={{
          animation: "g3dFloat 4.2s ease-in-out infinite",
          transformOrigin: "center bottom",
          willChange: "transform",
        }}
      >
        <div
          className="g3d-glow"
          style={{ animation: "g3dGlow 4.2s ease-in-out infinite" }}
        >
          <Image
            src="/google-3d.avif"
            alt="Google G logo 3D"
            width={size}
            height={size}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}
