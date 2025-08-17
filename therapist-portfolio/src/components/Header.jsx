import React, { useState } from 'react'

const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
]

export default function Header({ scrolled }) {
    const [open, setOpen] = useState(false)

    const onNavClick = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setOpen(false)
        }
    }

    return (
        <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`} role="banner">
            <div className="container header-content">
                <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onNavClick('top'); }}>
                    <span className="brand-mark" aria-hidden="true">🪷</span>
                    <span className="brand-text">Calm Path Therapy</span>
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
                                <button className="link" onClick={() => onNavClick(n.id)}>{n.label}</button>
                            </li>
                        ))}
                        <li>
                            <button className="btn btn--primary" onClick={() => onNavClick('contact')}>
                                Book a Session
                            </button>
                        </li>
                    </ul>

                    <div id="mobile-menu" className={`nav-drawer ${open ? 'open' : ''}`}>
                        <ul className="nav-list nav-list--mobile">
                            {navItems.map((n) => (
                                <li key={n.id}>
                                    <button className="link" onClick={() => onNavClick(n.id)}>{n.label}</button>
                                </li>
                            ))}
                            <li>
                                <button className="btn btn--primary btn--block" onClick={() => onNavClick('contact')}>
                                    Book a Session
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}