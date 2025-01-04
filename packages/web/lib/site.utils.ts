export function getUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function siteConfig() {
  return {
    baseUrl: 'https://fatcn.vercel.app',
    name: 'fatcn',
    ogImage: 'https://fatcn.vercel.app/og_image.png',
    description: 'A chonky and colorful design system for Next.js.',
    twitter: '@rohosen_',
    title: 'Fatcn',

  }
}