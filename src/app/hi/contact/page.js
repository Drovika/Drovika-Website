import ContactView from '@/components/pages/ContactView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('contact', 'hi');

export default function ContactHi() {
  return <ContactView lang="hi" />;
}
