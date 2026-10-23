import { site } from '@/config/site';

// Google Play button. Until the apps are live it shows "Coming soon".
export function PlayIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#34A853" d="M3.6 1.8 13.4 12l-9.8 10.2c-.4-.2-.6-.7-.6-1.2V3c0-.5.2-1 .6-1.2Z" />
      <path fill="#FBBC04" d="m16.8 8.6-3.4 3.4 3.4 3.4 3.8-2.2c1.1-.6 1.1-1.8 0-2.4l-3.8-2.2Z" />
      <path fill="#4285F4" d="M3.6 1.8c.3-.2.8-.2 1.3.1l11.9 6.7-3.4 3.4L3.6 1.8Z" />
      <path fill="#EA4335" d="m13.4 12 3.4 3.4-11.9 6.7c-.5.3-1 .3-1.3.1L13.4 12Z" />
    </svg>
  );
}

const TOP = { en: ['GET IT ON', 'COMING SOON ON'], hi: ['अभी पाएँ', 'जल्द आ रहा है'], mr: ['आत्ता मिळवा', 'लवकरच येत आहे'] };

export default function StoreButton({ app = 'customer', dark = true, label, lang = 'en' }) {
  const href = app === 'partner' ? site.partnerApp : site.customerApp;
  const live = site.appsLive;
  const top = (TOP[lang] || TOP.en)[live ? 0 : 1];
  return (
    <a
      className={`store ${dark ? 'store--dark' : 'store--light'}`}
      href={live ? href : `${lang === 'en' ? '' : `/${lang}`}/#download`}
      target={live ? '_blank' : undefined}
      rel={live ? 'noopener noreferrer' : undefined}
      aria-label={`${label || (app === 'partner' ? 'Drovika Partner' : 'Drovika')} on Google Play`}
    >
      <PlayIcon />
      <span className="store__text">
        <small>{top}</small>
        <b>Google Play</b>
      </span>
      {label ? <span className="store__tag">{label}</span> : null}
    </a>
  );
}

export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}
