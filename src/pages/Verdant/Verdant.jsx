import { useEffect } from 'react'
import './Verdant.css'
import { verdantMarkup } from './markup.js'
import { initVerdantBehavior } from './behavior.js'

function Verdant() {
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
