/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "localhost",
        "res.cloudinary.com",
        "rukminim2.flixcart.com",
        "m.media-amazon.com",
        "firebasestorage.googleapis.com",
      ],
    },
    typescript: {
     
      ignoreBuildErrors: true,
    },
  };
  
  module.exports = nextConfig;
  