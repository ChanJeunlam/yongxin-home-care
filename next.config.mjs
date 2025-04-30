/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 不设置 basePath 和 assetPrefix，我们将使用后处理脚本修复路径
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
