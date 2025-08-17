import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react'
import { useI18n } from '../i18n.jsx'

export default function Testimonials() {
  const { t } = useI18n()
  const quotes = useMemo(() => t('testimonials.quotes') || [], [t])
  const [index, setIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const draggingRef = useRef(false)
  const startXRef = useRef(0)
  const autoIdRef = useRef(null)

  const count = quotes.length
  const go = useCallback((i) => {
    setIndex((prev) => {
      const next = (typeof i === 'number' ? i : prev + (i === 'next' ? 1 : -1))
      return (next + count) % count
    })
  }, [count])

  const stopAuto = useCallback(() => {
    if (autoIdRef.current) {
      clearInterval(autoIdRef.current)
      autoIdRef.current = null
    }
  }, [])

  const startAuto = useCallback(() => {
    if (count <= 1 || autoIdRef.current) return
    autoIdRef.current = setInterval(() => go('next'), 6000)
  }, [count, go])

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [startAuto, stopAuto])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go('next')
      if (e.key === 'ArrowLeft') go('prev')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const onTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return
    stopAuto()
    draggingRef.current = true
    startXRef.current = e.touches[0].clientX
    setDragX(0)
  }

  const onTouchMove = (e) => {
    if (!draggingRef.current || !e.touches || e.touches.length === 0) return
    const currentX = e.touches[0].clientX
    const delta = currentX - startXRef.current
    // Small resistance to avoid accidental drags while scrolling vertically
    setDragX(delta)
  }

  const onTouchEnd = () => {
    if (!draggingRef.current) return
    const threshold = 60 // px
    const delta = dragX
    draggingRef.current = false
    setDragX(0)
    if (Math.abs(delta) > threshold) {
      if (delta < 0) go('next')
      else go('prev')
    }
    startAuto()
  }

  const current = quotes[index] || { text: '', author: '' }

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">{t('testimonials.title')}</h2>

        <div
          className={`testimonial-carousel ${dragX !== 0 ? 'tc-dragging' : ''}`}
          role="region"
          aria-roledescription="carousel"
          aria-label={t('testimonials.title')}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <figure
            className="quote"
            aria-live="polite"
            style={{
              transform: `translateX(${dragX}px)`,
            }}
          >
            <blockquote>“{current.text}”</blockquote>
            <figcaption>— {current.author}</figcaption>
          </figure>

          {count > 1 && (
            <>
              <div className="tc-controls">
                <button
                  className="btn tc-prev"
                  aria-label="Previous testimonial"
                  onClick={() => { stopAuto(); go('prev'); startAuto() }}
                >
                  ‹
                </button>
                <button
                  className="btn tc-next"
                  aria-label="Next testimonial"
                  onClick={() => { stopAuto(); go('next'); startAuto() }}
                >
                  ›
                </button>
              </div>

              <div className="tc-dots" role="tablist" aria-label="Select testimonial">
                {quotes.map((q, i) => (
                  <button
                    key={`${q.text}-${i}`}
                    role="tab"
                    aria-selected={i === index}
                    aria-controls={`tpanel-${i}`}
                    className={`tc-dot ${i === index ? 'is-active' : ''}`}
                    onClick={() => { stopAuto(); go(i); startAuto() }}
                    title={`${i + 1}/${count}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
