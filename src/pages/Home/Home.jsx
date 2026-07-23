import { useEffect } from 'react'
import './Home.css'
import { homeMarkup } from './markup.js'
import { initHomeBehavior } from './behavior.js'
import { usePageMeta } from '../../lib/usePageMeta.js'

function Home() {
  usePageMeta({
    title: 'Craivo — High-Conversion Websites for Small Brands',
    description: 'Craivo designs and builds conversion-focused websites for cafes, retail, grocery, and lifestyle brands — one person handling both the design and the code, end to end.',
    path: '/',
  })

  useEffect(() => {
    const cleanup = initHomeBehavior()
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <div className="page-home" dangerouslySetInnerHTML={{ __html: homeMarkup }} />
  )
}

export default Home
