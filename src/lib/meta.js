// Page titles and descriptions for Google, in all three languages.
// Each page also tells Google where its other-language copies are (hreflang).
import { fromPrice, site } from '@/config/site';

const M = {
  home: {
    en: { title: { absolute: 'Drovika — Mini truck & tempo booking in Mumbai | Goods transport' }, description: `Book a 3 wheeler, Tata Ace, pickup, tempo or truck in Mumbai, Thane, Navi Mumbai and up to Palghar in under a minute. Fixed price before you book, free cancellation, free loading and unloading time, live tracking and verified drivers. Starting ₹${fromPrice}.` },
    hi: { title: { absolute: 'Drovika — मुंबई में मिनी ट्रक और टेम्पो बुकिंग | माल ढुलाई' }, description: `मुंबई, ठाणे, नवी मुंबई और पालघर तक 3 व्हीलर, टाटा ऐस, पिकअप, टेम्पो या ट्रक एक मिनट में बुक करें। बुकिंग से पहले तय किराया, फ़्री कैंसलेशन, लोडिंग-अनलोडिंग का फ़्री समय, लाइव ट्रैकिंग और वेरिफ़ाइड ड्राइवर। ₹${fromPrice} से शुरू।` },
    mr: { title: { absolute: 'Drovika — मुंबईत मिनी ट्रक आणि टेम्पो बुकिंग | मालवाहतूक' }, description: `मुंबई, ठाणे, नवी मुंबई आणि पालघरपर्यंत 3 व्हीलर, टाटा एस, पिकअप, टेम्पो किंवा ट्रक एका मिनिटात बुक करा. बुकिंगआधी ठरलेले भाडे, मोफत कॅन्सलेशन, लोडिंग-अनलोडिंगचा मोफत वेळ, लाइव्ह ट्रॅकिंग आणि व्हेरिफाइड ड्रायव्हर. ₹${fromPrice} पासून सुरू.` },
  },
  drivers: {
    en: { title: 'Drive with Drovika — Attach your tempo or truck in Mumbai', description: 'Own a 3 wheeler, Tata Ace, pickup, tempo or truck? Join Drovika Partner and get goods transport trips across Mumbai. Fair earnings, trips near you, withdraw to your bank or UPI.' },
    hi: { title: 'Drovika के साथ ड्राइव करें — मुंबई में अपना टेम्पो या ट्रक जोड़ें', description: '3 व्हीलर, टाटा ऐस, पिकअप, टेम्पो या ट्रक है? Drovika Partner से जुड़ें और पूरे मुंबई में माल ढुलाई की ट्रिप पाएँ। सही कमाई, पास की ट्रिप, बैंक या UPI में निकासी।' },
    mr: { title: 'Drovika सोबत ड्राइव्ह करा — मुंबईत तुमचा टेम्पो किंवा ट्रक जोडा', description: '3 व्हीलर, टाटा एस, पिकअप, टेम्पो किंवा ट्रक आहे? Drovika Partner सोबत जोडा आणि संपूर्ण मुंबईत मालवाहतुकीच्या ट्रिप मिळवा. योग्य कमाई, जवळच्या ट्रिप, बँक किंवा UPI मध्ये पैसे काढा.' },
  },
  about: {
    en: { title: 'About Drovika — Goods transport built for Mumbai', description: 'Drovika is a Mumbai-born goods transport platform connecting people and businesses with verified mini truck, tempo and truck owners.' },
    hi: { title: 'Drovika के बारे में — मुंबई के लिए बनी माल ढुलाई सेवा', description: 'Drovika मुंबई में बना माल ढुलाई प्लेटफ़ॉर्म है, जो लोगों और बिज़नेस को वेरिफ़ाइड मिनी ट्रक, टेम्पो और ट्रक मालिकों से जोड़ता है।' },
    mr: { title: 'Drovika बद्दल — मुंबईसाठी बनलेली मालवाहतूक सेवा', description: 'Drovika हे मुंबईत जन्मलेले मालवाहतूक प्लॅटफॉर्म आहे, जे लोक आणि व्यवसायांना व्हेरिफाइड मिनी ट्रक, टेम्पो आणि ट्रक मालकांशी जोडते.' },
  },
  contact: {
    en: { title: 'Contact Drovika — Call, WhatsApp or email', description: `Talk to the Drovika team for booking help, business deliveries or driver sign-up. Call ${site.phone} or WhatsApp us.` },
    hi: { title: 'Drovika से संपर्क करें — कॉल, WhatsApp या ईमेल', description: `बुकिंग में मदद, बिज़नेस डिलीवरी या ड्राइवर साइन-अप के लिए Drovika टीम से बात करें। ${site.phone} पर कॉल करें या WhatsApp करें।` },
    mr: { title: 'Drovika शी संपर्क करा — कॉल, WhatsApp किंवा ईमेल', description: `बुकिंगसाठी मदत, व्यवसाय डिलिव्हरी किंवा ड्रायव्हर साइन-अपसाठी Drovika टीमशी बोला. ${site.phone} वर कॉल करा किंवा WhatsApp करा.` },
  },
};
const PATH = { home: '/', drivers: '/drivers/', about: '/about/', contact: '/contact/' };
const LOCALE = { en: 'en_IN', hi: 'hi_IN', mr: 'mr_IN' };
const url = (lang, page) => (lang === 'en' ? PATH[page] : `/${lang}${PATH[page]}`);

export function pageMeta(page, lang = 'en') {
  const m = M[page][lang];
  const canonical = url(lang, page);
  return {
    ...m,
    alternates: {
      canonical,
      languages: { 'en-IN': url('en', page), 'hi-IN': url('hi', page), 'mr-IN': url('mr', page), 'x-default': url('en', page) },
    },
    openGraph: {
      type: 'website', siteName: 'Drovika', locale: LOCALE[lang], url: canonical,
      title: typeof m.title === 'string' ? m.title : m.title.absolute, description: m.description,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Drovika' }],
    },
  };
}
export const PAGES = Object.keys(PATH);
export const pageUrl = url;
