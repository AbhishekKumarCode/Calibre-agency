import { useEffect } from 'react'
import './Verdant.css'
import { verdantMarkup } from './markup.js'
import { initVerdantBehavior } from './behavior.js'
import { usePageMeta } from '../../lib/usePageMeta.js'

function Verdant() {
  usePageMeta({
    title: 'Verdant Living — Home Decor Site Case Study | Craivo',
    description: 'A home decor and lifestyle brand concept site built by Craivo, designed on a distinct layout paradigm from Craivo\'s other project builds.',
    path: '/verdant',
  })

  useEffect(() => {
    const cleanup = initVerdantBehavior()
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <div className="page-verdant" dangerouslySetInnerHTML={{ __html: verdantMarkup }} />
  )
}

export default Verdant
