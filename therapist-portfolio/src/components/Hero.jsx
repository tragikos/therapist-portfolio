import React from 'react'

export default function Hero() {
    return (
        <section id="top" className="section hero">
            <div className="container grid-2">
                <div className="stack gap-lg">
                    <h1 className="display">
                        Find clarity, healing, and growth.
                    </h1>
                    <p className="lead">
                        Evidence-based therapy for individuals, couples, and families—delivered with warmth and compassion.
                    </p>
                    <div className="actions">
                        <a className="btn btn--primary" href="#contact">Book a Free Consultation</a>
                        <a className="btn btn--ghost" href="#services">Explore Services</a>
                    </div>
                    <ul className="badges">
                        <li>Licensed Therapist (LCSW)</li>
                        <li>Telehealth Available</li>
                        <li>Confidential & Inclusive</li>
                    </ul>
                </div>
                <div className="hero-card">
                    <div className="hero-illustration" role="img" aria-label="Calming abstract illustration"></div>
                    <div className="hero-note">
                        “You are not a drop in the ocean. You are the entire ocean in a drop.” — Rumi
                    </div>
                </div>
            </div>
        </section>
    )
}