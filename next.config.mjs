// Static export: `npm run build` creates the finished website in the `out/` folder.
// That folder is copied to the server (backend/deploy/site) and Caddy serves it — no Node server needed.
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
