import React from 'react'
import {useI18n} from '../i18n.jsx'

export default function Services() {
  const {t} = useI18n()
  const services = t('services.items')

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">{t('services.title')}</h2>
        <div className="cards">
          {services.map((s) => (
            <article key={s.title} className="card">
              <h3 className="card-title">{s.title}</h3>
              <p className="muted">{s.desc}</p>
              <ul className="chips">
                {s.details.map((d) => <li key={d} className="chip">{d}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
