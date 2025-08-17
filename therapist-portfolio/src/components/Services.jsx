import React from 'react'

const services = [
    {
        title: 'Individual Therapy',
        desc: 'Personalized sessions for anxiety, depression, stress, and life transitions.',
        details: ['CBT', 'Mindfulness', 'Trauma-informed'],
    },
    {
        title: 'Couples Therapy',
        desc: 'Improve communication, rebuild trust, and navigate conflict with care.',
        details: ['Gottman-informed', 'Emotionally Focused'],
    },
    {
        title: 'Family Therapy',
        desc: 'Strengthen relationships, resolve conflicts, and build supportive systems.',
        details: ['Systems Approach', 'Solution-Focused'],
    },
    {
        title: 'Teen & Young Adult',
        desc: 'Support for identity, academics, mood, and social challenges.',
        details: ['Anxiety Skills', 'Self-esteem', 'Study Habits'],
    },
]

export default function Services() {
    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="section-title">Services</h2>
                <div className="cards">
                    {services.map((s) => (
                        <article key={s.title} className="card">
                            <h3 className="card-title">{s.title}</h3>
                            <p className="muted">{s.desc}</p>
                            <ul className="chips">
                                {s.details.map((d) => <li key={d} className="chip">{d}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}