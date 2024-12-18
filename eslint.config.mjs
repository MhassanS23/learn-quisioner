/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Menonaktifkan ESLint saat proses build
  },
};

module.exports = nextConfig;
