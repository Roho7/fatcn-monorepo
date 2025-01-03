export function getUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function siteConfig() {
  return {
    name: 'fatcn',
    ogImage: 'https://fatcn.vercel.app/og_image.png',
    description: 'Fatcn is a modern design system for Next.js.',
    twitter: '@fatcn',
    title: 'Fatcn',

  }
}