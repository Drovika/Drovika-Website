'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { waLink } from '@/config/site';

const TOPICS = ['Booking help', 'Business / bulk deliveries', 'Join as a driver', 'Payment or refund', 'Something else'];

// No server needed: the message opens in WhatsApp, ready to send to Drovika.
export default function ContactForm() {
  const [f, setF] = useState({ name: '', topic: TOPICS[0], msg: '' });
  const [err, setErr] = useState('');
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.msg.trim()) { setErr('Please add your name and a short message.'); return; }
    setErr('');
    const text = `Hi Drovika,\nName: ${f.name.trim()}\nTopic: ${f.topic}\n\n${f.msg.trim()}`;
    window.open(waLink(text), '_blank', 'noopener');
  };

  return (
    <form className="cform" onSubmit={submit} noValidate>
      <h2>Send us a message</h2>
      <p className="cform__sub">It opens in WhatsApp — just press send. We reply as soon as we can during support hours.</p>
      <label>
        <span>Your name</span>
        <input value={f.name} onChange={set('name')} placeholder="e.g. Priya Sharma" autoComplete="name" />
      </label>
      <label>
        <span>What is it about?</span>
        <select value={f.topic} onChange={set('topic')}>
          {TOPICS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea rows={5} value={f.msg} onChange={set('msg')} placeholder="Tell us how we can help" />
      </label>
      {err ? <p className="cform__err" role="alert">{err}</p> : null}
      <button type="submit" className="btn btn--block">Send on WhatsApp <Send size={18} /></button>
    </form>
  );
}
