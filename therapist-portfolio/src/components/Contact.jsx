import React from 'react'
import {useI18n} from '../i18n.jsx'

export default function Contact() {
  const {t} = useI18n()
  const email = 'hello@calmpaththerapy.com'
  const phone = '(555) 123-4567'
  const fbUrl = 'https://www.facebook.com/your-page'     // TODO: replace with your Facebook page
  const igUrl = 'https://www.instagram.com/your-handle'  // TODO: replace with your Instagram handle

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      alert(t('contact.btnCopy') + ': ' + email)
    } catch {
      alert('Could not copy email. Please copy it manually.')
    }
  }

  // Inline SVG icons
  const FacebookIcon = ({size = 18}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1877F2"
            d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.098 4.388 23.098 10.125 24v-8.437H7.078V12.07h3.047V9.413c0-3.007 1.792-4.667 4.533-4.667 1.313 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.93-1.953 1.883v2.254h3.328l-.532 3.493h-2.796V24C19.612 23.098 24 18.098 24 12.073z"/>
    </svg>
  )
  const InstagramIcon = ({size = 18}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <radialGradient id="ig" cx="50%" cy="50%" r="75%">
        <stop offset="0%" stopColor="#feda75"/>
        <stop offset="30%" stopColor="#fa7e1e"/>
        <stop offset="60%" stopColor="#d62976"/>
        <stop offset="85%" stopColor="#962fbf"/>
        <stop offset="100%" stopColor="#4f5bd5"/>
      </radialGradient>
      <path fill="url(#ig)" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"/>
      <path fill="#fff"
            d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zM17.8 6.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>
    </svg>
  )

  return (
    <section id="contact" className="section section--alt">
      <div className="container grid-2">
        <div className="stack">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p>{t('contact.intro')}</p>
          <ul className="list-dots">
            <li>{t('contact.emailLabel')}: {email}</li>
            <li>{t('contact.phoneLabel')}: {phone}</li>
            <li>{t('contact.teleLabel')}</li>
          </ul>
          <div className="actions" style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
            <a className="btn btn--primary"
               href={`mailto:${email}?subject=${encodeURIComponent('Therapy Consultation Request')}`}>
              {t('contact.btnEmail')}
            </a>
            <a className="btn btn--ghost" href={`tel:${phone.replace(/[^+\d]/g, '')}`}>
              {t('contact.btnCall')}
            </a>
            <button className="btn" onClick={copyEmail}>
              {t('contact.btnCopy')}
            </button>
            <a className="btn btn--ghost" href="https://calendly.com/your-calendly-username/15min" target="_blank"
               rel="noreferrer">
              {t('contact.btnBook')}
            </a>
          </div>

          {/* Social links */}
          <div className="stack" style={{marginTop: 16, gap: 10}}>
            <strong>{t('contact.socialTitle')}</strong>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <a className="btn" href={fbUrl} target="_blank" rel="noreferrer"
                 aria-label={t('contact.socials.facebook')}>
                <FacebookIcon/> <span style={{marginLeft: 6}}>{t('contact.socials.facebook')}</span>
              </a>
              <a className="btn" href={igUrl} target="_blank" rel="noreferrer"
                 aria-label={t('contact.socials.instagram')}>
                <InstagramIcon/> <span style={{marginLeft: 6}}>{t('contact.socials.instagram')}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="card" style={{alignSelf: 'start'}}>
          <h3 className="card-title">{t('contact.expectTitle')}</h3>
          <ul className="list-check" style={{marginTop: 10}}>
            {t('contact.expectList').map((li) => <li key={li}>{li}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
