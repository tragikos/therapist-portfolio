import React, { useState } from 'react'

export default function Contact() {
  const email = 'hello@calmpaththerapy.com'
  const phone = '(555) 123-4567'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      alert('Email copied to clipboard.')
    } catch {
      alert('Could not copy email. Please copy it manually.')
    }
  }

  return (
    <section id="contact" className="section section--alt">
      <div className="container grid-2">
        <div className="stack">
          <h2 className="section-title">Get in Touch</h2>
          <p>
            Prefer a quick message or call? Use the options here—no account or portal needed.
            For emergencies, call your local emergency number.
          </p>
          <ul className="list-dots">
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
            <li>Secure Telehealth Available</li>
          </ul>
          <div className="actions" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a className="btn btn--primary" href={`mailto:${email}?subject=Therapy%20Consultation%20Request&body=Hi%20Alex%2C%0A%0AI%27d%20like%20to%20schedule%20a%20consultation.%20Here%27s%20a%20bit%20about%20my%20goals%3A%0A%0A-%20%0A%0AThanks!`}>
              Email me
            </a>
            <a className="btn btn--ghost" href={`tel:${phone.replace(/[^+\d]/g, '')}`}>
              Call
            </a>
            <button className="btn" onClick={copyEmail}>
              Copy email
            </button>
            {/* Replace with your scheduling URL if you use Calendly or similar */}
            <a className="btn btn--ghost" href="https://calendly.com/your-calendly-username/15min" target="_blank" rel="noreferrer">
              Book a 15‑min consult
            </a>
          </div>
        </div>

        <div className="card" style={{ alignSelf: 'start' }}>
          <h3 className="card-title">What to expect</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            I typically reply within 1 business day. We’ll start with a brief consultation to see if
            we’re a good fit and discuss next steps.
          </p>
          <ul className="list-check" style={{ marginTop: 10 }}>
            <li>Confidential, judgment‑free space</li>
            <li>Telehealth available statewide</li>
            <li>Sliding scale spots as available</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
