import { Check } from 'lucide-react';
import StoreButton from '../StoreButton';
import BrandMark from '../BrandMark';
import PhoneMock from './PhoneMock';
import { pick } from '@/lib/i18n';

const T = {
  en: { h: 'Your next move is one tap away', l1: 'Login with your mobile number — no passwords', l2: 'Save Home & Shop addresses for one-tap repeat bookings', l3: 'Free to download, pay only per trip', c: 'For customers', d: 'For drivers' },
  hi: { h: 'आपकी अगली शिफ़्टिंग बस एक टैप दूर', l1: 'मोबाइल नंबर से लॉगिन — कोई पासवर्ड नहीं', l2: 'घर और दुकान का पता सेव करें, अगली बार एक टैप में बुकिंग', l3: 'डाउनलोड फ़्री, पैसे सिर्फ़ ट्रिप के', c: 'ग्राहकों के लिए', d: 'ड्राइवरों के लिए' },
  mr: { h: 'तुमची पुढची शिफ्टिंग फक्त एका टॅपवर', l1: 'मोबाइल नंबरने लॉगिन — कोणताही पासवर्ड नाही', l2: 'घर आणि दुकानाचा पत्ता सेव्ह करा, पुढच्या वेळी एका टॅपमध्ये बुकिंग', l3: 'डाउनलोड मोफत, पैसे फक्त ट्रिपचे', c: 'ग्राहकांसाठी', d: 'ड्रायव्हरसाठी' },
};

export default function Download({ lang = 'en' }) {
  const t = pick(T, lang);
  return (
    <section className="sec dl" id="download">
      <div className="wrap">
        <div className="dl__card rv">
          <div className="dl__copy">
            <BrandMark size={64} />
            <h2 className="h-section">{t.h}<span className="pn">{lang === 'hi' ? '।' : '.'}</span></h2>
            <ul>
              <li><Check size={18} /> {t.l1}</li>
              <li><Check size={18} /> {t.l2}</li>
              <li><Check size={18} /> {t.l3}</li>
            </ul>
            <div className="dl__btns">
              <div className="dl__app"><span>{t.c}</span><StoreButton app="customer" lang={lang} /></div>
              <div className="dl__app"><span>{t.d}</span><StoreButton app="partner" lang={lang} /></div>
            </div>
          </div>
          <div className="dl__phone" aria-hidden="true">
            <PhoneMock lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
