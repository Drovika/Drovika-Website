import ServiceView from '@/components/pages/ServiceView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('services', 'en');

export default function ServicesEn() {
  return <ServiceView slug="services" lang="en" />;
}
