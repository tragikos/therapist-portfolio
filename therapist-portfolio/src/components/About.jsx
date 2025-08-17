import React from 'react'

export default function About() {
    return (
        <section id="about" className="section section--alt">
            <div className="container grid-2">
                <div className="stack">
                    <h2 className="section-title">Meet Your Therapist</h2>
                    <p>
                        I’m Alex Morgan, LCSW. Over the past 10+ years, I’ve helped clients move from overwhelm
                        to resilience through collaborative, evidence-based care. My approach blends cognitive
                        behavioral therapy, mindfulness, and warmth—tailored to your unique story.
                    </p>
                    <p className="muted">
                        I welcome clients of all identities and backgrounds. I am trauma-informed, LGBTQIA+ affirming,
                        and culturally responsive.
                    </p>
                    <ul className="list-check">
                        <li>MA in Clinical Social Work (Columbia University)</li>
                        <li>Licensed Clinical Social Worker (LCSW)</li>
                        <li>Certified in Trauma-Focused CBT</li>
                    </ul>
                </div>
                <div className="about-card">
                    <div className="avatar" aria-hidden="true">AM</div>
                    <div className="about-details">
                        <div>
                            <strong>Location:</strong> Downtown | Telehealth statewide
                        </div>
                        <div>
                            <strong>Hours:</strong> Mon–Fri 9am–6pm
                        </div>
                        <div>
                            <strong>Insurance:</strong> OON, Superbills available
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}