interface Props {
  className?: string;
  size?: number;
}

export default function Logo({ className, size = 40 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BM logo"
    >
      <rect x="1.5" y="1.5" width="61" height="61" rx="16" fill="#0A0A0A" stroke="#FF4FA3" strokeWidth="1.2" opacity="0.95" />
      <path
        d="M19 16 L19 48 M19 16 L30 16 Q37 16 37 23 Q37 30 30 30 L19 30 M19 30 L31 30 Q38 30 38 39 Q38 48 31 48 L19 48"
        stroke="#FF4FA3"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M38 48 L38 16 L45 30 L52 16 L52 48"
        stroke="#FFFFFF"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="45" cy="30" r="2" fill="#FF4FA3" />
    </svg>
  );
}
