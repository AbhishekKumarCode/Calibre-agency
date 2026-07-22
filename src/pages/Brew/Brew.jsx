import { useEffect } from 'react'
import './Brew.css'
import { brewMarkup } from './markup.js'
import { initBrewBehavior } from './behavior.js'

function Brew() {
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
