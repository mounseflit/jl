"use client";

import { useEffect, useState } from "react";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=pro.jabb.mobile";
const APP_STORE = "https://apps.apple.com/ma/app/jabb-mobile/id6760529816";
const WEB_APP = "https://app.jabb.pro/";

type Platform = "android" | "ios" | "desktop" | "detecting";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "detecting";
  const ua = navigator.userAgent.toLowerCase();
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  if (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return "ios";
  return "desktop";
}

function getRedirectUrl(p: Platform): string {
  if (p === "android") return PLAY_STORE;
  if (p === "ios") return APP_STORE;
  return WEB_APP;
}

function getPlatformLabel(p: Platform): string {
  if (p === "android") return "Google Play Store";
  if (p === "ios") return "Apple App Store";
  return "Web App";
}

export default function GoPage() {
  const [platform, setPlatform] = useState<Platform>("detecting");
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const detected = detectPlatform();
    setPlatform(detected);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = getRedirectUrl(detected);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#1E3498]">
      {/* Logo */}
      <div className="w-24 h-24 rounded-[1.75rem] bg-white flex items-center justify-center mb-10 shadow-xl shadow-black/10">
        <svg viewBox="252 196.9 195.9 291.1" className="w-12 h-12" fill="#1E3498">
          <path d="M403.5,390.7c0,18.4-3.8,33-11.5,43.9c-7.6,10.9-21.6,16.4-41.8,16.4c-10.9,0-19.9-1.6-26.9-4.9s-12.5-7.9-16.4-13.8c-3.9-5.9-6.6-12.9-8.2-21c-1.6-8.1-2.3-17-2.3-26.6v-14h-44.4v20.6c0,31.8,8.4,55.9,25.2,72.2c16.8,16.4,40.8,24.5,72,24.5c18.7,0,34.4-2.6,47-7.7c12.6-5.1,22.7-12,30.4-20.6c7.6-8.6,13.1-18.3,16.4-29.2c3.3-10.9,4.9-22,4.9-33.2v-27.1h-44.4V390.7z" />
          <polygon points="403.5,223.9 403.5,346.2 447.9,346.2 447.9,196.9" />
          <circle cx="284.7" cy="248.9" r="25" />
        </svg>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 text-center font-display">
        Taking you to JABB
      </h1>

      <p className="text-white/70 text-center mb-10 max-w-md">
        Redirecting you to the{" "}
        <span className="text-white font-semibold">{getPlatformLabel(platform)}</span>{" "}
        in {countdown}...
      </p>

      {/* Progress ring */}
      <div className="relative w-16 h-16 mb-12">
        <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="28" fill="none" stroke="white" strokeWidth="3" opacity="0.2" />
          <circle
            cx="32" cy="32" r="28" fill="none" stroke="white" strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={175.93}
            strokeDashoffset={175.93 * (countdown / 3)}
            style={{ transition: "stroke-dashoffset 1s linear" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
          {countdown}
        </span>
      </div>

      {/* Manual links */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
        <a href={APP_STORE} className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-[#1E3498] font-semibold text-sm hover:bg-white/90 transition-colors shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          App Store
        </a>
        <a href={PLAY_STORE} className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-[#1E3498] font-semibold text-sm hover:bg-white/90 transition-colors shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c-.36-.17-.57-.51-.57-.93V1.17c0-.35.15-.66.41-.85l11.1 11.1L3.18 23.76zm.74-23.4L15.6 11.68l-2.6 2.6L4.18.72c.02-.12.04-.24.04-.36zm16.73 10.18l-3.34-1.93-3.26 3.26 3.26 3.26 3.34-1.93c.6-.35.6-1.24 0-2.66zm-4.28 4.12l-3.26-3.26-10.6 10.6c.11.02.22.04.34.04.17 0 .34-.04.5-.13l13-7.25z"/></svg>
          Google Play
        </a>
        <a href={WEB_APP} className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-[#1E3498] font-semibold text-sm hover:bg-white/90 transition-colors shadow-lg">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg>
          Web App
        </a>
      </div>

      <p className="mt-14 text-white/40 text-xs">JABB — Just A Better Business</p>
    </div>
  );
}
