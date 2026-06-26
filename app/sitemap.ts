import type { MetadataRoute } from 'next'

const baseUrl = 'https://memphisgrowth.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/servicos/branding',
    '/servicos/estrategia-digital',
    '/servicos/social-media',
    '/servicos/trafego-pago',
    '/cases/gabriel-campos',
    '/cases/pro-fort',
    '/cases/nettare',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
