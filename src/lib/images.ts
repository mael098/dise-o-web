import logoUrl from '../assets/logo.png'

// Eagerly import every real product photograph so Vite resolves the hashed URLs.
const pasteles1 = import.meta.glob('../assets/pasteles1/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const pasteles2 = import.meta.glob('../assets/pasteles2/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export const logo = logoUrl

// Map keyed by file basename so legacy string paths (e.g. "src/assets/pasteles1/foo.webp")
// can be resolved to the real bundled asset URL.
const byBasename = new Map<string, string>()
for (const [path, url] of [...Object.entries(pasteles1), ...Object.entries(pasteles2)]) {
  const basename = path.split('/').pop() ?? path
  byBasename.set(basename, url)
}

export function resolveImage(rawPath: string): string {
  const basename = rawPath.split('/').pop() ?? rawPath
  return byBasename.get(basename) ?? rawPath
}

// Ordered collections used by the gallery / showcase sections.
export const gallery1: string[] = Object.entries(pasteles1)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)

export const gallery2: string[] = Object.entries(pasteles2)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)

export const allPhotos: string[] = [...gallery1, ...gallery2]
