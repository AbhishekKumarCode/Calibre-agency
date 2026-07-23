import { useEffect } from 'react'
import './Striker.css'
import { strikerMarkup } from './markup.js'
import { initStrikerBehavior } from './behavior.js'
import { usePageMeta } from '../../lib/usePageMeta.js'

function Striker() {
  usePageMeta({
    title: 'Striker Sports — Retail Filtering Site Case Study | Calibre Studio',
    description: 'A sports retail concept site built by Calibre Studio, with instant, zero-lag visual product filtering across category, size, and price.',
    path: '/striker',
  })

  useEffect(() => {
    const cleanup = initStrikerBehavior()
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <div className="page-striker" dangerouslySetInnerHTML={{ __html: strikerMarkup }} />
  )
}

export default Striker
