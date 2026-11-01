import ServiceView from '@/components/pages/ServiceView';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('areas', 'en');

export default function AreasEn() {
  return <ServiceView slug="areas" lang="en" />;
}
