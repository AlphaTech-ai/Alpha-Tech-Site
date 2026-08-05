export default function RobotIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="robot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B2CFF" />
          <stop offset="100%" stopColor="#FF2DAA" />
        </linearGradient>
      </defs>
      <path
        d="M12 7V4"
        stroke="url(#robot-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect
        x="9"
        y="1.5"
        width="6"
        height="3"
        rx="1.5"
        fill="url(#robot-grad)"
      />
      <path d="M7 7.5v3M17 7.5v3" stroke="url(#robot-grad)" strokeWidth="1.8" strokeLinecap="round" />
      <rect
        x="3.5"
        y="7.5"
        width="17"
        height="12.5"
        rx="3.5"
        fill="url(#robot-grad)"
      />
      <circle cx="9" cy="13" r="1.3" fill="#fff" />
      <circle cx="15" cy="13" r="1.3" fill="#fff" />
      <path d="M10.5 17h3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9.5 20v1.5M14.5 20v1.5" stroke="url(#robot-grad)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
