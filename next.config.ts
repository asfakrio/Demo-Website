import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wallpaperaccess.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.olevelmaster.com.sg',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.instituteofpracticalscience.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'isbaindore.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'athrav.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.kidwise.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dais.edu.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
