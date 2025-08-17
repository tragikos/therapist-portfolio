import React from 'react'

const quotes = [
    {
        text: 'Alex helped me find tools I actually use daily. I feel more grounded and hopeful.',
        author: 'J., former client',
    },
    {
        text: 'We communicate so much better now. Our relationship feels like a team again.',
        author: 'R. & M., couple',
    },
    {
        text: 'I felt safe and truly heard. Therapy became the best hour of my week.',
        author: 'T., client',
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="section">
            <div className="container">
                <h2 className="section-title">What Clients Say</h2>
                <div className="carousel">
                    {quotes.map((q) => (
                        <figure className="quote" key={q.text}>
                            <blockquote>“{q.text}”</blockquote>
                            <figcaption>— {q.author}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}