import { useEffect } from 'react'
import './Home.css'
import { homeMarkup } from './markup.js'
import { initHomeBehavior } from './behavior.js'

function Home() {
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
