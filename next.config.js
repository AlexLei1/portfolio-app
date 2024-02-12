/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	poweredByHeader: false,
	optimizeFonts: false,
	experimental: {
    appDir: true,
  },
	// images: {
	// 	loader: "akamai",
	// 	path: "/",
	// },
}

module.exports = nextConfig
