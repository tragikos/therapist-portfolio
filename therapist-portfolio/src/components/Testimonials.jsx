import React from 'react'
import { useI18n } from '../i18n.jsx'

export default function Testimonials() {
  const { t } = useI18n()
  const quotes = t('testimonials.quotes')
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">{t('testimonials.title')}</h2>
        <div className="carousel">
          {quotes.map((q) => (
            <figure className="quote" key={q.text}>
              <blockquote>“{q.text}”</blockquote>
              <figcaption>— {q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
