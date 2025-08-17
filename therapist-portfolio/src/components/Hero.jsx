import React from 'react'
import {useI18n} from '../i18n.jsx'

export default function Hero() {
  const {t} = useI18n()
  return (
    <section id="top" className="section hero">
      <div className="container grid-2">
        <div className="stack gap-lg">
          <h1 className="display">
            {t('hero.title')}
          </h1>
          <p className="lead">
            {t('hero.lead')}
          </p>
          <div className="actions">
            <a className="btn btn--primary" href="#contact">{t('hero.ctaPrimary')}</a>
            <a className="btn btn--ghost" href="#services">{t('hero.ctaSecondary')}</a>
          </div>
          <ul className="badges">
            {t('hero.badges').map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
        <div className="hero-card">
          <div className="hero-illustration" role="img" aria-label="Calming abstract illustration"></div>
          <div className="hero-note">
            {t('hero.quote')}
          </div>
        </div>
      </div>
    </section>
  )
}
