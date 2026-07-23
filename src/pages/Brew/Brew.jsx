import { useEffect } from 'react'
import './Brew.css'
import { brewMarkup } from './markup.js'
import { initBrewBehavior } from './behavior.js'
import { usePageMeta } from '../../lib/usePageMeta.js'

function Brew() {
  usePageMeta({
    title: 'Brew & Co. — Cafe Booking Site Case Study | Calibre Studio',
    description: 'A specialty cafe concept site built by Calibre Studio, featuring a frictionless table-booking flow designed to cut steps between landing and confirmed reservation.',
    path: '/brew',
  })

  useEffect(() => {
    const cleanup = initBrewBehavior()
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <div className="page-brew" dangerouslySetInnerHTML={{ __html: brewMarkup }} />
  )
}

export default Brew
