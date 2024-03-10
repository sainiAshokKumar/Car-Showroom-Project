/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        // remotePatterns: [
        //     {
        //       protocol: 'https',
        //       hostname: 'cdn.imagin.studio',
        //       port: '3000',
        //       pathname: '/getimage/**',
        //     },
        //   ],
        domains: ['cdn.imagin.studio','imgd.aeplcdn.com','imagecdnsa.zigwheels.ae']
      },
};

export default nextConfig;
