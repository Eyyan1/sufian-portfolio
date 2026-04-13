import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubActions ? "/sufian-portfolio" : "",
  assetPrefix: isGitHubActions ? "/sufian-portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
