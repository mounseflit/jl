"use client";

import Link from "next/link";
import JabbLogo from "@/components/JabbLogo";
export default function NotFound() {

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0C0C18] text-white px-6">
      {/* ── Animated background orbs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span
          className="absolute top-[10%] left-[15%] h-[340px] w-[340px] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, #6C63FF 0%, transparent 70%)",
            animation: "notfound-orb-1 12s ease-in-out infinite",
          }}
        />
        <span
          className="absolute bottom-[10%] right-[10%] h-[420px] w-[420px] rounded-full opacity-25 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, #3028C0 0%, transparent 70%)",
            animation: "notfound-orb-2 15s ease-in-out infinite",
          }}
        />
        <span
          className="absolute top-[50%] left-[60%] h-[260px] w-[260px] rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, #1d1597 0%, transparent 70%)",
            animation: "notfound-orb-3 10s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Back to homepage"
          className="mb-10 transition-opacity hover:opacity-80"
        >
          <JabbLogo size={48} gradient />
        </Link>

        {/* 404 heading */}
        <h1
          className="text-[8rem] sm:text-[10rem] font-extrabold leading-none tracking-tighter select-none"
          style={{
            background:
              "linear-gradient(135deg, #6C63FF 0%, #3028C0 50%, #1d1597 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white/90">
          Page not found
        </p>

        <p className="mt-3 text-base sm:text-lg text-white/50 leading-relaxed max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.03]"
            style={{
              background:
                "linear-gradient(135deg, #3028C0 0%, #1d1597 100%)",
            }}
          >
            Back to Home
          </Link>

          <Link
            href="/#section-services"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white hover:scale-[1.03] bg-white/5 backdrop-blur-sm"
          >
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}
