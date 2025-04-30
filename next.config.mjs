/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 设置基本路径为仓库名称
  basePath: '/yongxin-home-care',
  // 设置资源前缀
  assetPrefix: '/yongxin-home-care/',
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
