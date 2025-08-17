import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="stack">
                    <div className="brand brand--footer">
                        <span className="brand-mark" aria-hidden="true">🪷</span>
                        <span className="brand-text">Calm Path Therapy</span>
                    </div>
                    <p className="muted small">
                        © {year} Calm Path Therapy. All rights reserved.
                    </p>
                </div>
                <ul className="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="legal small muted">
                    <p>For emergencies, call your local emergency number or visit the nearest ER.</p>
                    <p>Not a substitute for crisis services.</p>
                </div>
            </div>
        </footer>
    )
}