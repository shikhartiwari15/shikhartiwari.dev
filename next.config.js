/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static export -> outputs to /out, deployable as-is on Cloudflare Pages
  images: { unoptimized: true }, // next/image optimization needs a server; disable for static export
  trailingSlash: true,    // avoids 308 redirects/404s on static hosts for nested routes later
};

module.exports = nextConfig;
