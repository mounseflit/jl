/** Reusable JABB logo SVG — extracted to avoid duplication across Hero, Nav, Footer */
export default function JabbLogo({ size = 28 }: { size?: number }) {
  // Aspect ratio from viewBox: 195.9 / 291.1 = 0.6729
  const width = Math.round(size * 0.6729);
  return (
    <svg
      viewBox="252 196.9 195.9 291.1"
      width={width}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M403.5,390.7c0,18.4-3.8,33-11.5,43.9c-7.6,10.9-21.6,16.4-41.8,16.4c-10.9,0-19.9-1.6-26.9-4.9s-12.5-7.9-16.4-13.8c-3.9-5.9-6.6-12.9-8.2-21c-1.6-8.1-2.3-17-2.3-26.6v-14h-44.4v20.6c0,31.8,8.4,55.9,25.2,72.2c16.8,16.4,40.8,24.5,72,24.5c18.7,0,34.4-2.6,47-7.7c12.6-5.1,22.7-12,30.4-20.6c7.6-8.6,13.1-18.3,16.4-29.2c3.3-10.9,4.9-22,4.9-33.2v-27.1h-44.4V390.7z" />
      <polygon points="403.5,223.9 403.5,346.2 447.9,346.2 447.9,196.9" />
      <circle cx="284.7" cy="248.9" r="25" />
    </svg>
  );
}
