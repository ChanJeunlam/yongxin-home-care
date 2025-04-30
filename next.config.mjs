/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 如果您的网站不是部署在域名根目录，而是在子目录（如 username.github.io/repo-name），
  // 则需要设置 basePath
  // basePath: '/your-repo-name',
  // 同样，如果是子目录部署，需要设置 assetPrefix
  // assetPrefix: '/your-repo-name/',
};

export default nextConfig;
