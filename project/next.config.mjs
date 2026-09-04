/** @type {import('next').NextConfig} */

const { FILE_BUCKET } = process.env;

const nextConfig = {
  /* config options here */
  images: {
		remotePatterns: [new URL(FILE_BUCKET + "/**")],
		dangerouslyAllowLocalIP: process.env.NODE_ENV === "development"
	},
	cacheComponents: true,
};

export default nextConfig;
