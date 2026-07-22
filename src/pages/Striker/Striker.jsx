import { useEffect } from 'react'
import './Striker.css'
import { strikerMarkup } from './markup.js'
import { initStrikerBehavior } from './behavior.js'

function Striker() {
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
