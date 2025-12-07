import { useState, useEffect } from 'react';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [loadingQuote, setLoadingQuote] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    setLoadingQuote(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setCurrentQuote({
        content: data.slip.advice,
        author: 'Wisdom',
      });
    } catch {
      setCurrentQuote({
        content: 'Every moment is a chance to change your life.',
        author: 'Unknown',
      });
    }
    setLoadingQuote(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    submissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('submissions', JSON.stringify(submissions));
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar-udx">
        <div className="navbar-container-udx">
          <div className="navbar-logo-udx">CareAware</div>
          <button
            className="hamburger-udx"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          <div className={`navbar-menu-udx ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#offerings">Our Work</a>
            <a href="#impact">Impact</a>
            <a href="#contact">Contact</a>
            <button className="theme-toggle-udx" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION WITH FLOATING ELEMENTS */}
      <section className="hero-udx" id="home">
        {/* Floating Biotech Molecular Elements */}
        <div className="floating-elements-container">
          <div className="floating-orb floating-orb-1">
            <div className="orb-glow"></div>
          </div>
          <div className="floating-orb floating-orb-2">
            <div className="orb-glow"></div>
          </div>
          <div className="floating-orb floating-orb-3">
            <div className="orb-glow"></div>
          </div>
          <div className="floating-particle floating-particle-1"></div>
          <div className="floating-particle floating-particle-2"></div>
          <div className="floating-particle floating-particle-3"></div>
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-content-udx">
            <h1 className="hero-title-udx">Arming Our Community</h1>
            <p className="hero-tagline-udx">Hope • Support • Awareness</p>
            <p className="hero-description-udx">
              We are dedicated to providing vital resources, emotional support, and clear information to everyone touched by cancer.
            </p>
            <button className="btn-primary-udx">Get Support</button>
          </div>

          {/* Hero Image - Right Side */}
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img 
                src="/hero-careaware.png"
                alt="Doctor comforting patient in hospital"
                className="hero-image"
              />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-udx">
        <div className="mission-container-udx">
          <h2 className="section-heading-udx">Our Approach</h2>
          <p className="mission-text-udx">
            We believe that cancer care should be rooted in compassion, backed by science, and accessible to all. Our platform combines emotional support with evidence-based resources to empower patients, survivors, and caregivers at every step of their journey.
          </p>
        </div>
      </section>

      {/* OFFERINGS SECTION */}
      <section className="offerings-udx" id="offerings">
        <div className="offerings-container-udx">
          <h2 className="section-heading-udx">What We Do</h2>
          <p className="offerings-intro-udx">
            CareAware delivers comprehensive support through three interconnected pillars designed to address the full spectrum of cancer care.
          </p>
          <div className="cards-grid-udx">
            <div className="card-udx">
              <div className="card-icon-container">
                <img 
                  src="/card-compassion.png"
                  alt="Compassionate Care"
                  className="card-image"
                />
              </div>
              <h3>Compassionate Care</h3>
              <p>We prioritize the emotional well-being of patients and provide resources focused on dignity and human connection throughout their journey.</p>
            </div>
            <div className="card-udx">
              <div className="card-icon-container">
                <img 
                  src="/card-awareness.png"
                  alt="Raising Awareness"
                  className="card-image"
                />
              </div>
              <h3>Raising Awareness</h3>
              <p>Dedicated to education and early detection campaigns that empower communities to take proactive health steps and reduce cancer burden.</p>
            </div>
            <div className="card-udx">
              <div className="card-icon-container">
                <img 
                  src="/card-community.png"
                  alt="Community Strength"
                  className="card-image"
                />
              </div>
              <h3>Community Strength</h3>
              <p>Connecting survivors, caregivers, and supporters to form a powerful, encouraging network that transforms isolation into collective strength.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION WITH IMAGE */}
      <section className="impact-udx" id="impact">
        <div className="impact-container-udx">
          <div className="impact-content-split">
            <div className="impact-text-section">
              <h2 className="section-heading-udx">Why This Matters</h2>
              <div className="impact-content-udx">
                <p>
                  Cancer touches millions globally, affecting not just patients but families, communities, and entire healthcare systems. Our platform is built on the fundamental belief that support is just as crucial as treatment.
                </p>
                <p>
                  We bridge the critical gap between clinical care and emotional resilience by connecting patients with vetted resources, survivors with mentorship opportunities, and families with essential guidance. Together, we create a world where no one faces cancer alone.
                </p>
                <p>
                  <strong>Every message of hope, every shared story, and every connection contributes to better outcomes and a stronger global community.</strong>
                </p>
              </div>
            </div>
            <div className="impact-image-section">
              <img 
                src="/impact-team.jpg" 
                alt="Community support and care"
                className="impact-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATION SECTION */}
      <section className="inspiration-udx">
        {/* Floating Elements for Inspiration Section */}
        <div className="floating-bg-orbs">
          <div className="bg-orb bg-orb-1"></div>
          <div className="bg-orb bg-orb-2"></div>
        </div>

        <div className="inspiration-container-udx">
          <h2 className="section-heading-udx">Daily Inspiration</h2>
          {currentQuote && (
            <div className="quote-block-udx">
              <p className="quote-text-udx">"{currentQuote.content}"</p>
              <p className="quote-author-udx">— {currentQuote.author}</p>
            </div>
          )}
          <button
            className="btn-secondary-udx"
            onClick={fetchQuote}
            disabled={loadingQuote}
          >
            {loadingQuote ? 'Loading...' : 'Get New Inspiration'}
          </button>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-udx" id="contact">
        <div className="contact-container-udx">
          <h2 className="section-heading-udx">Get in Touch</h2>
          <p className="contact-intro-udx">
            Have questions or want to get involved? We'd love to hear from you.
          </p>

          <div className="form-wrapper-udx">
            {submitted && (
              <div className="success-message-udx">
                <p><strong>✓ Thank you!</strong> Your message has been received. We'll respond within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="form-udx">
              <div className="form-group-udx">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group-udx">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group-udx">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help..."
                  rows="6"
                />
              </div>

              <button type="submit" className="btn-primary-udx">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-udx">
        <div className="footer-container-udx">
          <div className="footer-grid-udx">
            <div className="footer-col-udx">
              <h4>CareAware</h4>
              <p>Advancing cancer awareness, support, and community worldwide.</p>
            </div>
            <div className="footer-col-udx">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#offerings">Our Work</a></li>
                <li><a href="#impact">Impact</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col-udx">
              <h4>Contact</h4>
              <p>2k22.cse.2213230@gmail.com</p>
              <p>+91 63875 78748</p>
            </div>
          </div>
          <div className="footer-divider-udx"></div>
          <div className="footer-bottom-udx">
            <p>&copy; 2025 CareAware. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
