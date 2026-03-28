"use client";

import Image from "next/image";

interface IPhoneFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

/**
 * Realistic iPhone 15 Pro-style frame with Dynamic Island,
 * side buttons, bezel, and subtle reflections.
 */
export default function IPhoneFrame({ src, alt, priority, className = "" }: IPhoneFrameProps) {
  return (
    <div className={`iphone-frame ${className}`}>
      {/* Outer chassis */}
      <div className="iphone-frame__chassis">
        {/* Left side buttons */}
        <div className="iphone-frame__btn iphone-frame__btn--silent" />
        <div className="iphone-frame__btn iphone-frame__btn--vol-up" />
        <div className="iphone-frame__btn iphone-frame__btn--vol-down" />
        {/* Right side button */}
        <div className="iphone-frame__btn iphone-frame__btn--power" />

        {/* Screen bezel area */}
        <div className="iphone-frame__bezel">
          {/* Dynamic Island */}
          <div className="iphone-frame__island">
            <div className="iphone-frame__island-cam" />
          </div>

          {/* Screen */}
          <div className="iphone-frame__screen">
            <Image
              src={src}
              alt={alt}
              width={280}
              height={606}
              className="iphone-frame__screen-img"
              priority={priority}
            />
          </div>

          {/* Home indicator */}
          <div className="iphone-frame__home-bar" />
        </div>

        {/* Edge reflection */}
        <div className="iphone-frame__reflection" />
      </div>
    </div>
  );
}
