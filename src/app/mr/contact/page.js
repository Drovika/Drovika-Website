import ContactView from '@/components/pages/ContactView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('contact', 'mr');

export default function ContactMr() {
  return <ContactView lang="mr" />;
}
