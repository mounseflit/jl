"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import JabbLogo from "./JabbLogo";
import { useTranslation } from "@/lib/I18nProvider";
import type { TranslationKey } from "@/lib/i18n";

const ORBIT_ITEMS = [
  {
    key: "web",
    label: "WEB",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    key: "location",
    label: "LOCATION",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    key: "product",
    label: "PRODUCT",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    key: "app",
    label: "APP",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    key: "calls",
    label: "CALLS",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    key: "data",
    label: "DATA",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    key: "audit",
    label: "AUDIT",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    key: "store",
    label: "STORE",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 7l2-3h16l2 3" /><path d="M2 7h20v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H9a2 2 0 0 1-2-2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M10 22v-6h4v6" />
      </svg>
    ),
  },
];

export default function OrbitVisual() {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const orbitRef = useRef<HTMLDivElement>(null);

  /* ── Swipe / drag state ── */
  const dragRef = useRef({
    active: false,
    startX: 0,
    lastX: 0,
    offset: 0,        // accumulated manual angle offset (radians)
    velocity: 0,       // momentum velocity (radians/frame)
    lastTime: 0,
    paused: false,     // pause auto-rotation while dragging
    pauseBase: 0,      // elapsed time snapshot when drag started
  });

  const handleClick = (key: string) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  /* ── Pointer / touch handlers for revolver swipe ── */
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const d = dragRef.current;
    d.active = true;
    d.startX = e.clientX;
    d.lastX = e.clientX;
    d.velocity = 0;
    d.lastTime = performance.now();
    d.paused = true;
    // Snapshot current auto-rotation progress so we can freeze it
    const elapsed = startRef.current ? (performance.now() - startRef.current) / 1000 : 0;
    d.pauseBase = elapsed;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.active) return;

    const now = performance.now();
    const dx = e.clientX - d.lastX;
    const dt = now - d.lastTime;

    // Convert pixel delta to radians (sensitivity: ~300px = full circle)
    const sensitivity = 0.008;
    const deltaAngle = dx * sensitivity;

    d.offset += deltaAngle;
    d.velocity = dt > 0 ? deltaAngle / (dt / 16.67) : 0; // normalize to ~60fps frame
    d.lastX = e.clientX;
    d.lastTime = now;
  }, []);

  const onPointerUp = useCallback(() => {
    const d = dragRef.current;
    if (!d.active) return;
    d.active = false;

    // Apply momentum with friction decay
    const applyMomentum = () => {
      if (Math.abs(d.velocity) < 0.0005) {
        // Momentum exhausted — resume auto-rotation from current offset
        d.paused = false;
        // Adjust startRef so auto-rotation continues seamlessly from current position
        const inner = itemRefs.current[0]?.parentElement;
        if (inner) {
          const style = getComputedStyle(inner);
          const speed = parseFloat(style.getPropertyValue("--orbit-speed")) || 28;
          // offset is in radians; convert to equivalent elapsed time
          const offsetAsTime = (d.offset / (Math.PI * 2)) * speed;
          startRef.current = performance.now() - (d.pauseBase + offsetAsTime) * 1000;
        }
        d.offset = 0;
        d.velocity = 0;
        return;
      }
      d.offset += d.velocity;
      d.velocity *= 0.92; // friction
      requestAnimationFrame(applyMomentum);
    };
    requestAnimationFrame(applyMomentum);
  }, []);

  /* JS-driven orbit: position each item on an elliptical path,
     dynamically setting transform, opacity, scale AND z-index.
     Items in the bottom half (front) get z-index: 10 (above globe).
     Items in the top half (back) get z-index: 1 (behind globe). */
  const animate = useCallback((time: number) => {
    if (!startRef.current) startRef.current = time;
    const d = dragRef.current;

    const inner = itemRefs.current[0]?.parentElement;
    if (!inner) { rafRef.current = requestAnimationFrame(animate); return; }
    const style = getComputedStyle(inner);
    const rx = parseFloat(style.getPropertyValue("--orbit-rx")) || 180;
    const ry = parseFloat(style.getPropertyValue("--orbit-ry")) || 70;
    const speed = parseFloat(style.getPropertyValue("--orbit-speed")) || 28;

    // Base rotation from auto-animation
    let baseAngle: number;
    if (d.paused) {
      // While dragging, freeze auto-rotation and apply manual offset
      baseAngle = (d.pauseBase / speed) * Math.PI * 2 + d.offset;
    } else {
      const elapsed = (time - startRef.current) / 1000;
      baseAngle = (elapsed / speed) * Math.PI * 2;
    }

    const count = ORBIT_ITEMS.length;
    for (let i = 0; i < count; i++) {
      const el = itemRefs.current[i];
      if (!el) continue;

      // Angle: each item offset by (i/count) of the full circle
      const angle = baseAngle + (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * rx;
      const y = Math.sin(angle) * ry;

      // sin(angle) > 0 means bottom half → in front of globe
      const inFront = Math.sin(angle) > 0;

      // Depth simulation: items at top (back) are smaller + faded
      const depthT = (Math.sin(angle) + 1) / 2; // 0 = back, 1 = front
      const s = 0.65 + depthT * 0.4;  // scale: 0.65 → 1.05
      const o = 0.12 + depthT * 0.88; // opacity: 0.12 → 1.0

      el.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
      el.style.opacity = `${o}`;
      el.style.zIndex = inFront ? "10" : "1";
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <section id="section-omnichannel" className="orbit-section">
      {/* Section header */}
      <div className="orbit-section__header">
        <span className="orbit-section__badge">{t("orbit.badge")}</span>
        <h2 className="orbit-section__title">{t("orbit.title")}</h2>
        <p className="orbit-section__subtitle">{t("orbit.subtitle")}</p>
      </div>

      <div className="orbit-split">
        {/* LEFT: Globe + orbit — swipeable revolver */}
        <div
          className="orbit-split__globe"
          ref={orbitRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{ touchAction: "pan-y", cursor: "grab" }}
        >
          <div className="orbit-section__inner">
            <div className="orbit-ellipse orbit-ellipse--1" />
            <div className="orbit-ellipse orbit-ellipse--2" />

            {/* Orbit items — JS-driven position + z-index */}
            {ORBIT_ITEMS.map((item, i) => (
              <div
                key={item.key}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="orbit-item"
                onClick={() => handleClick(item.key)}
              >
                <div className={`orbit-pill ${activeKey === item.key ? "orbit-pill--active" : ""}`}>
                  <span className="orbit-pill__icon">{item.icon}</span>
                  <span className="orbit-pill__label">{item.label}</span>
                </div>
              </div>
            ))}

            <div className="orbit-globe">
              <div className="orbit-globe__glow" />
              {/* Atmosphere ring */}
              <div className="orbit-globe__atmo" />
              <div className="orbit-globe__sphere">
                {/* Specular highlight overlay */}
                <div className="orbit-globe__specular" />
                {/* Rim light — backlight crescent */}
                <div className="orbit-globe__rim" />
                <svg className="orbit-globe__grid" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    {/* Fade grid at edges for 3D depth */}
                    <radialGradient id="gridFade" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="white" stopOpacity="1" />
                      <stop offset="60%" stopColor="white" stopOpacity="0.9" />
                      <stop offset="85%" stopColor="white" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <mask id="sphereMask">
                      <circle cx="100" cy="100" r="94" fill="url(#gridFade)" />
                    </mask>
                  </defs>
                  <g mask="url(#sphereMask)">
                    {/* Outer circle */}
                    <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
                    {/* Latitudes */}
                    <ellipse cx="100" cy="100" rx="94" ry="12" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                    <ellipse cx="100" cy="100" rx="94" ry="30" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
                    <ellipse cx="100" cy="100" rx="94" ry="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <ellipse cx="100" cy="100" rx="94" ry="70" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
                    <ellipse cx="100" cy="100" rx="94" ry="85" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
                    {/* Longitudes */}
                    <ellipse cx="100" cy="100" rx="12" ry="94" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                    <ellipse cx="100" cy="100" rx="30" ry="94" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
                    <ellipse cx="100" cy="100" rx="50" ry="94" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <ellipse cx="100" cy="100" rx="70" ry="94" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
                    <ellipse cx="100" cy="100" rx="85" ry="94" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
                    {/* Equator (bold) + prime meridian */}
                    <ellipse cx="100" cy="100" rx="94" ry="1" stroke="currentColor" strokeWidth="1.5" opacity="0.65" />
                    <ellipse cx="100" cy="100" rx="1" ry="94" stroke="currentColor" strokeWidth="1.5" opacity="0.65" />
                  </g>
                </svg>
                <div className="orbit-globe__logo">
                  <JabbLogo size={52} />
                </div>
              </div>
              {/* Shadow underneath */}
              <div className="orbit-globe__shadow" />
            </div>
          </div>
        </div>

        {/* RIGHT: Cards grid — shows explanation when clicked */}
        <div className="orbit-split__cards">
          {activeKey ? (
            /* Active card — full detail */
            (() => {
              const item = ORBIT_ITEMS.find((i) => i.key === activeKey)!;
              return (
                <div className="orbit-card orbit-card--detail" key={activeKey}>
                  <button
                    className="orbit-card__close"
                    onClick={() => setActiveKey(null)}
                    aria-label="Close"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                    </svg>
                    <span>{t("orbit.badge")}</span>
                  </button>
                  <div className="orbit-card__icon-lg">
                    {item.icon}
                  </div>
                  <h4 className="orbit-card__title">
                    {t(`orbit.item.${item.key}.title` as TranslationKey)}
                  </h4>
                  <p className="orbit-card__desc">
                    {t(`orbit.item.${item.key}.desc` as TranslationKey)}
                  </p>
                </div>
              );
            })()
          ) : (
            /* Default: mini cards grid */
            <div className="orbit-cards-grid">
              {ORBIT_ITEMS.map((item) => (
                <button
                  key={item.key}
                  className="orbit-minicard"
                  onClick={() => handleClick(item.key)}
                >
                  <span className="orbit-minicard__icon">{item.icon}</span>
                  <span className="orbit-minicard__label">
                    {t(`orbit.item.${item.key}.title` as TranslationKey)}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
