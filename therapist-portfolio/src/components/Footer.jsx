import React from 'react'
import {useI18n} from '../i18n.jsx'

export default function Footer() {
  const {t} = useI18n()
  const year = new Date().getFullYear()
  const links = t('footer.links')

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="stack">
          <div className="brand brand--footer">
            <span className="brand-mark" aria-hidden="true">🪷</span>
            <span className="brand-text">{t('brandName')}</span>
          </div>
          <p className="muted small">
            © {year} {t('brandName')}. All rights reserved.
          </p>
        </div>
        <ul className="footer-links">
          <li><a href="#services">{links.services}</a></li>
          <li><a href="#about">{links.about}</a></li>
          <li><a href="#testimonials">{links.testimonials}</a></li>
          <li><a href="#contact">{links.contact}</a></li>
        </ul>
        <div className="legal small muted">
          <p>{t('footer.legal1')}</p>
          <p>{t('footer.legal2')}</p>
        </div>
      </div>
    </footer>
  )
}
