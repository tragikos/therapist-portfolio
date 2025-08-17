import React from 'react'
import {useI18n} from '../i18n.jsx'

export default function About() {
  const {t} = useI18n()
  const list = t('about.list')
  const details = t('about.details')

  return (
    <section id="about" className="section section--alt">
      <div className="container grid-2">
        <div className="stack">
          <h2 className="section-title">{t('about.title')}</h2>
          <p>{t('about.p1')}</p>
          <p className="muted">{t('about.p2')}</p>
          <ul className="list-check">
            {list.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="about-card">
          <div className="avatar" aria-hidden="true">AM</div>
          <div className="about-details">
            <div>{details.location}</div>
            <div>{details.hours}</div>
            <div>{details.insurance}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
