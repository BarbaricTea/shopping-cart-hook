/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: 'tailwindui.com'
      },
      {
        hostname: 'res.cloudinary.com'
      }
    ]
  }
};
