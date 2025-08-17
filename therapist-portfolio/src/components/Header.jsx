import React, {useState} from 'react'
import {useI18n} from '../i18n.jsx'

const navItems = [
  {id: 'services', labelKey: 'nav.services'},
  {id: 'about', labelKey: 'nav.about'},
  {id: 'testimonials', labelKey: 'nav.testimonials'},
  {id: 'contact', labelKey: 'nav.contact'},
]

export default function Header({scrolled}) {
  const [open, setOpen] = useState(false)
  const {t, lang, setLang} = useI18n()

  const onNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'})
      setOpen(false)
    }
  }

  const toggleLang = () => setLang(lang === 'el' ? 'en' : 'el')

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`} role="banner">
      <div className="container header-content">
        <a className="brand" href="#" onClick={(e) => {
          e.preventDefault();
          onNavClick('top');
        }}>
          <span className="brand-mark" aria-hidden="true">🪷</span>
          <span className="brand-text">{t('brandName')}</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className={`hamburger ${open ? 'is-open' : ''}`}></span>
          </button>

          <ul className="nav-list nav-list--desktop">
            {navItems.map((n) => (
              <li key={n.id}>
                <button className="link" onClick={() => onNavClick(n.id)}>{t(n.labelKey)}</button>
              </li>
            ))}
            <li>
              <button className="btn btn--primary" onClick={() => onNavClick('contact')}>
                {t('cta.book')}
              </button>
            </li>
            <li>
              <button className="link" onClick={toggleLang} aria-label="Switch language">
                {lang === 'el' ? 'EN' : 'EL'}
              </button>
            </li>
          </ul>

          <div id="mobile-menu" className={`nav-drawer ${open ? 'open' : ''}`}>
            <ul className="nav-list nav-list--mobile">
              {navItems.map((n) => (
                <li key={n.id}>
                  <button className="link" onClick={() => onNavClick(n.id)}>{t(n.labelKey)}</button>
                </li>
              ))}
              <li>
                <button className="btn btn--primary btn--block" onClick={() => onNavClick('contact')}>
                  {t('cta.book')}
                </button>
              </li>
              <li>
                <button className="btn btn--ghost btn--block" onClick={toggleLang}>
                  {lang === 'el' ? 'English' : 'Ελληνικά'}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
