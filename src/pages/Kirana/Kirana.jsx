import { useEffect } from 'react'
import './Kirana.css'
import { kiranaMarkup } from './markup.js'
import { initKiranaBehavior } from './behavior.js'
import { usePageMeta } from '../../lib/usePageMeta.js'

function Kirana() {
  usePageMeta({
    title: 'Kirana King — Local Grocery Site Case Study | Calibre Studio',
    description: 'A local grocery store concept site built by Calibre Studio, routing orders straight into a WhatsApp chat thread the owner already checks all day.',
    path: '/kirana',
  })

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
