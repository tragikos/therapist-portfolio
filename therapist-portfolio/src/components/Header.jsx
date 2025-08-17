import React, {useState} from 'react'
import {useI18n} from '../i18n.jsx'

// Inline SVG flags for EL and EN
function FlagEL({size = 18}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" fill="#0D5EAF"/>
      <g fill="#fff">
        <rect y="8" width="64" height="6"/>
        <rect y="20" width="64" height="6"/>
        <rect y="32" width="64" height="6"/>
        <rect y="44" width="64" height="6"/>
        <rect y="56" width="64" height="6"/>
        <rect width="28" height="28" x="0" y="0" fill="#0D5EAF"/>
        <rect x="0" y="10" width="28" height="4"/>
        <rect x="12" y="0" width="4" height="28"/>
      </g>
    </svg>
  )
}

function FlagEN({size = 18}) {
  // Using UK flag for English locale
  return (
    <svg width={size} height={size} viewBox="0 0 60 30" aria-hidden="true">
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z"/>
      </clipPath>
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
      </clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  )
}

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
            {/* Language switcher with flags and labels */}
            <li>
              <div role="group" aria-label="Language" style={{display: 'inline-flex', gap: 8}}>
                <button
                  type="button"
                  onClick={() => setLang('el')}
                  aria-pressed={lang === 'el'}
                  className="link"
                  title="Ελληνικά"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    opacity: lang === 'el' ? 1 : 0.8,
                    borderBottom: lang === 'el' ? '2px solid currentColor' : '2px solid transparent',
                    paddingBottom: 4
                  }}
                >
                  <FlagEL size={16}/>
                  <span>EL</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  aria-pressed={lang === 'en'}
                  className="link"
                  title="English"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    opacity: lang === 'en' ? 1 : 0.8,
                    borderBottom: lang === 'en' ? '2px solid currentColor' : '2px solid transparent',
                    paddingBottom: 4
                  }}
                >
                  <FlagEN size={16}/>
                  <span>EN</span>
                </button>
              </div>
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
              {/* Mobile language switcher with flags and labels */}
              <li>
                <div role="group" aria-label="Language"
                     style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8}}>
                  <button
                    type="button"
                    onClick={() => {
                      setLang('el');
                      setOpen(false)
                    }}
                    aria-pressed={lang === 'el'}
                    className="btn btn--ghost"
                    style={{display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'center'}}
                  >
                    <FlagEL size={18}/>
                    <span>EL · Ελληνικά</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLang('en');
                      setOpen(false)
                    }}
                    aria-pressed={lang === 'en'}
                    className="btn btn--ghost"
                    style={{display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'center'}}
                  >
                    <FlagEN size={18}/>
                    <span>EN · English</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
