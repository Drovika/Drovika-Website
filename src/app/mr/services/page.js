import ServiceView from '@/components/pages/ServiceView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('services', 'mr');

export default function ServicesMr() {
  return <ServiceView slug="services" lang="mr" />;
}
