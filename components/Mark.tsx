export function Mark({ size = 44 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
      <rect width="120" height="120" rx="26" fill="#1E6F50" />
      <path
        d="M35,20 h50 v66 l-5,6 -5,-6 -5,6 -5,-6 -5,6 -5,-6 -5,6 -5,-6 -5,6 -5,-6 z"
        fill="#F6F2E7"
      />
      <rect x="44" y="29" width="32" height="3" rx="1.5" fill="#10221C" opacity="0.35" />
      <rect x="44" y="36" width="20" height="3" rx="1.5" fill="#10221C" opacity="0.35" />
      <text
        x="60"
        y="71"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="36"
        fontWeight="700"
        fill="#10221C"
      >
        $
      </text>
      <rect x="44" y="78" width="32" height="3" rx="1.5" fill="#E8A13D" />
    </svg>
  );
}
