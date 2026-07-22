import { useEffect } from 'react'
import './Kirana.css'
import { kiranaMarkup } from './markup.js'
import { initKiranaBehavior } from './behavior.js'

function Kirana() {
  useEffect(() => {
    const cleanup = initKiranaBehavior()
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <div className="page-kirana" dangerouslySetInnerHTML={{ __html: kiranaMarkup }} />
  )
}

export default Kirana
