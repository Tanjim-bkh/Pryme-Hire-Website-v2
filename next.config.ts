import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Builds plain HTML/CSS/JS into out/ for upload to cPanel's public_html.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
