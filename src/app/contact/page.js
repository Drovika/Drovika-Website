import ContactView from '@/components/pages/ContactView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('contact', 'en');

export default function Contact() {
  return <ContactView lang="en" />;
}
