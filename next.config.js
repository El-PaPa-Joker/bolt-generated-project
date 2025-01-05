/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    // This is a list of locale domains and the default locale they should handle (these should be unique)
    domains: [
      {
        domain: 'www.roispeaks.com',
        defaultLocale: 'en',
      },
      {
        domain: 'ar.roispeaks.com',
        defaultLocale: 'ar',
      },
    ],
  },
}

module.exports = nextConfig
