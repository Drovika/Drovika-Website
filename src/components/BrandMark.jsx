// Drovika logo mark — same drawing as the app icon.
export default function BrandMark({ size = 40, ring = true, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} role="img" aria-label="Drovika">
      <circle cx="50" cy="50" r="50" fill="#C6E66B" />
      {ring ? <circle cx="50" cy="50" r="44.5" fill="none" stroke="#0F4A2C" strokeOpacity="0.14" strokeWidth="2" /> : null}
      <path fill="#0F4A2C" fillRule="evenodd" d="M41 18h15a32 32 0 0 1 0 64H41zM54 33v34h2a17 17 0 0 0 0-34z" />
      <path stroke="#0F4A2C" strokeWidth="3.6" strokeLinecap="round" d="M11 47h9M14 54h8M17 61h6" />
      <path fill="#FFFFFF" stroke="#0F4A2C" strokeWidth="2.6" strokeLinejoin="round" d="M24 41h22v20H24z" />
      <path fill="#FFFFFF" stroke="#0F4A2C" strokeWidth="2.6" strokeLinejoin="round" d="M46 47h7l5 6v8H46z" />
      <path fill="#0F4A2C" d="M48.5 49.2h4l2.6 3.3h-6.6z" />
      <circle cx="31" cy="62.5" r="4.6" fill="#0F4A2C" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="51" cy="62.5" r="4.6" fill="#0F4A2C" stroke="#FFFFFF" strokeWidth="2" />
    </svg>
  );
}

export function Logo({ light = false, size = 38 }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <BrandMark size={size} />
      <span className="logo__word">Dro<span>vika</span></span>
    </span>
  );
}
