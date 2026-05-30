import { useCallback, useEffect, useState } from 'react'
import { gallery } from '../data/gallery.js'
import SmartImage from './SmartImage.jsx'

export default function Gallery() {
  const [active, setActive] = useState(null) // индекс открытого фото или null

  const close = useCallback(() => setActive(null), [])
  const show = (i) => setActive((i + gallery.length) % gallery.length)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') show(active + 1)
      if (e.key === 'ArrowLeft') show(active - 1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close])

  const current = active !== null ? gallery[active] : null

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">Галерея</p>
          <h2 className="section__title">Работы и мастерская</h2>
          <p className="section__sub">
            Атмосфера процесса: от куска глины до готового изделия из печи.
          </p>
        </header>

        <div className="gallery-grid">
          {gallery.map((g, i) => (
            <button
              key={g.id}
              className={`gallery-item gallery-item--${g.span}`}
              onClick={() => show(i)}
              aria-label={`Открыть: ${g.title}`}
            >
              <SmartImage src={g.image} alt={g.title} tone={g.tone} />
              <span className="gallery-item__caption">{g.title}</span>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox__close" aria-label="Закрыть" onClick={close}>
            ×
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Предыдущее"
            onClick={(e) => {
              e.stopPropagation()
              show(active - 1)
            }}
          >
            ‹
          </button>

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <SmartImage src={current.image} alt={current.title} tone={current.tone} />
            <figcaption>{current.title}</figcaption>
          </figure>

          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Следующее"
            onClick={(e) => {
              e.stopPropagation()
              show(active + 1)
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
