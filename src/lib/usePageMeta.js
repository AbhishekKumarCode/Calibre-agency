import { useEffect } from 'react'

// TODO: switch to https://craivo.com once that domain is registered and
// connected as this Worker's custom domain.
const SITE_URL = 'https://craivo.craivo.workers.dev'

function setMetaTag(name, content, attr = 'name') {
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export function usePageMeta({ title, description, path }) {
  useEffect(() => {
    document.title = title
    setMetaTag('description', description)
    setMetaTag('og:title', title, 'property')
    setMetaTag('og:description', description, 'property')
    if (path) {
      setMetaTag('og:url', `${SITE_URL}${path}`, 'property')

      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', `${SITE_URL}${path}`)
    }
  }, [title, description, path])
}
