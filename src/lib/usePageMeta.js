import { useEffect } from 'react'

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
      setMetaTag('og:url', `https://calibre-agency.calibrestudio.workers.dev${path}`, 'property')

      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', `https://calibre-agency.calibrestudio.workers.dev${path}`)
    }
  }, [title, description, path])
}
