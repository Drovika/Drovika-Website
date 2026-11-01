import ServiceView from '@/components/pages/ServiceView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('services', 'hi');

export default function ServicesHi() {
  return <ServiceView slug="services" lang="hi" />;
}
