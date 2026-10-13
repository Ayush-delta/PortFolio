const TESTIMONIALS = [
  {
    quote:
      "One of the most diligent engineers I've worked with. Shipped fast, communicated clearly, and the code was clean.",
    author: "Jane Doe",
    role: "Engineering Manager, Acme Corp",
  },
  {
    quote:
      "Transformed our outdated frontend into a modern, performant platform. Highly recommended.",
    author: "John Smith",
    role: "CTO, Startup XYZ",
  },
  {
    quote:
      "Sometimes it is the people no one imagines anything of who do the things no one can imagine.",
    author: "Alan Turing",
    role: "The Imitation Game",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">What people say</h2>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.author} className="testimonial-card">
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <footer className="testimonial-footer">
                <span className="testimonial-author">{t.author}</span>
                <span className="testimonial-role">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
