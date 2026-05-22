import { MetadataRoute } from 'next'
import { ALL_ROUTES } from './routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bankdash.armaneey.com'

  const routes = ALL_ROUTES.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority:
      route === '/dashboard'
        ? 1
        : route === '/settings'
        ? 0.7
        : 0.8,
  }))

  return routes
}

