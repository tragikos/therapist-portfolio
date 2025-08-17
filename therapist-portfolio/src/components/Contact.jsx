import React from 'react'
import {useI18n} from '../i18n.jsx'

export default function Contact() {
  const {t} = useI18n()
  const email = 'hello@calmpaththerapy.com'
  const phone = '(555) 123-4567'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      alert(t('contact.btnCopy') + ': ' + email)
    } catch {
      alert('Could not copy email. Please copy it manually.')
    }
  }

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
