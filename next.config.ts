import type { NextConfig } from "next";

/* Hardening from the security audit: no CSP layer existed, so any future
   payload (e.g. supply-chain XSS) would run unrestricted and the site could
   be iframed for clickjacking. */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    agentUpgrade: "security",
  },
  allowedDevOrigins: ["192.168.100.8"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  /* Permanent move from the auto-generated Vercel host to the branded
     domain, so Google consolidates the old indexed URL onto the new one. */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "resume-two-sooty-55.vercel.app" }],
        destination: "https://omarqasim.is-a.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
