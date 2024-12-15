/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React's strict mode for better error handling
    swcMinify: true, // Use the SWC compiler for faster builds and smaller bundles
    images: {
      // Configure image domains or loader for production
      domains: ["example.com"], // Replace with domains of external image sources if needed
      unoptimized: false, // Set to true only if you’re managing images manually
    },
    experimental: {
      appDir: true, // Required if using the app router (like in your `RootLayout` component)
    },
    webpack: (config) => {
      // Fix for FontAwesome CSS auto-import
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  };
  
  export default nextConfig;
  