import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avbbbojjcnaqbhnxkbqp.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source:
          "/updates/west-bengal-7th-pay-commission-latest-news",
        destination:
          "/updates/west-bengal-7th-pay-commission-latest-update-2026",
        permanent: true,
      },
      {
        source:
          "/updates/west-bengal-7th-pay-commission-latest-update-2026-01",
        destination:
          "/updates/west-bengal-7th-pay-commission-latest-update-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;