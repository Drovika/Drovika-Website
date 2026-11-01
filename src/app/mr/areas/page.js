import ServiceView from '@/components/pages/ServiceView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('areas', 'mr');

export default function AreasMr() {
  return <ServiceView slug="areas" lang="mr" />;
}
