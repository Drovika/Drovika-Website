'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { waLink } from '@/config/site';
import { pick } from '@/lib/i18n';

const T = {
  en: {
    topics: ['Booking help', 'Business / bulk deliveries', 'Join as a driver', 'Payment or refund', 'Something else'],
    err: 'Please add your name and a short message.', hi: 'Hi Drovika,', name: 'Name', topic: 'Topic',
    h: 'Send us a message', sub: 'It opens in WhatsApp — just press send. We reply as soon as we can during support hours.',
    yourName: 'Your name', ph: 'e.g. Priya Sharma', about: 'What is it about?', msg: 'Message', msgPh: 'Tell us how we can help', send: 'Send on WhatsApp',
  },
  hi: {
    topics: ['बुकिंग में मदद', 'बिज़नेस / बल्क डिलीवरी', 'ड्राइवर के रूप में जुड़ना', 'पेमेंट या रिफ़ंड', 'कुछ और'],
    err: 'कृपया अपना नाम और छोटा सा मैसेज लिखें।', hi: 'नमस्ते Drovika,', name: 'नाम', topic: 'विषय',
    h: 'हमें मैसेज भेजें', sub: 'यह WhatsApp में खुलेगा — बस भेजें दबाएँ। सपोर्ट के समय में हम जल्दी जवाब देते हैं।',
    yourName: 'आपका नाम', ph: 'जैसे प्रिया शर्मा', about: 'किस बारे में है?', msg: 'मैसेज', msgPh: 'बताइए हम कैसे मदद करें', send: 'WhatsApp पर भेजें',
  },
  mr: {
    topics: ['बुकिंगसाठी मदत', 'व्यवसाय / बल्क डिलिव्हरी', 'ड्रायव्हर म्हणून जोडणे', 'पेमेंट किंवा रिफंड', 'इतर काही'],
    err: 'कृपया तुमचे नाव आणि छोटा मेसेज लिहा.', hi: 'नमस्कार Drovika,', name: 'नाव', topic: 'विषय',
    h: 'आम्हाला मेसेज पाठवा', sub: 'हे WhatsApp मध्ये उघडेल — फक्त पाठवा दाबा. सपोर्टच्या वेळेत आम्ही लवकर उत्तर देतो.',
    yourName: 'तुमचे नाव', ph: 'उदा. प्रिया शर्मा', about: 'कशाबद्दल आहे?', msg: 'मेसेज', msgPh: 'सांगा आम्ही कशी मदत करू', send: 'WhatsApp वर पाठवा',
  },
};

// No server needed: the message opens in WhatsApp, ready to send to Drovika.
export default function ContactForm({ lang = 'en' }) {
  const t = pick(T, lang);
  const [f, setF] = useState({ name: '', topic: t.topics[0], msg: '' });
  const [err, setErr] = useState('');
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.msg.trim()) { setErr(t.err); return; }
    setErr('');
    const text = `${t.hi}\n${t.name}: ${f.name.trim()}\n${t.topic}: ${f.topic}\n\n${f.msg.trim()}`;
    window.open(waLink(text), '_blank', 'noopener');
  };

  return (
    <form className="cform" onSubmit={submit} noValidate>
      <h2>{t.h}</h2>
      <p className="cform__sub">{t.sub}</p>
      <label>
        <span>{t.yourName}</span>
        <input value={f.name} onChange={set('name')} placeholder={t.ph} autoComplete="name" />
      </label>
      <label>
        <span>{t.about}</span>
        <select value={f.topic} onChange={set('topic')}>
          {t.topics.map((x) => <option key={x}>{x}</option>)}
        </select>
      </label>
      <label>
        <span>{t.msg}</span>
        <textarea rows={5} value={f.msg} onChange={set('msg')} placeholder={t.msgPh} />
      </label>
      {err ? <p className="cform__err" role="alert">{err}</p> : null}
      <button type="submit" className="btn btn--block">{t.send} <Send size={18} /></button>
    </form>
  );
}
