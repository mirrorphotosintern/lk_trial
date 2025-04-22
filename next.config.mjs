/*
Configures Next.js for the app.
*/

/** @type {import('next').NextConfig} */
const nextConfig = { 
  images: { 
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "upcdn.io" },
      { hostname: "i.postimg.cc" },
      { hostname: "replicate.delivery" },
      { hostname: "*.supabase.co" }
    ] 
  } 
}

export default nextConfig
