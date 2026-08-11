import type { NextConfig } from "next";

// The custom domain serves this project site from the domain root. Keeping the
// repository base path here would make every asset point at /compresslite/*.
const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
