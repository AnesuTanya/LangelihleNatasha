import { useEffect, useMemo, useState } from 'react';
import {
  contactFacts,
  experienceCards,
  galleryBlocks,
  images,
  languages,
  profileHighlights,
  projectCards,
  skillTags,
} from './content';
import './App.css';

const unitFromSeed = (seed) => {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
};

const createFloatingItems = (
  count,
  { maxDelay, minDuration, durationRange, minSize, sizeRange },
  seedOffset
) =>
  Array.from({ length: count }, (_, index) => {
    const seed = seedOffset + index * 5;

    return {
      left: `${(unitFromSeed(seed + 1) * 100).toFixed(2)}%`,
      delay: `${(unitFromSeed(seed + 2) * maxDelay).toFixed(2)}s`,
      duration: `${(minDuration + unitFromSeed(seed + 3) * durationRange).toFixed(2)}s`,
      size: `${(minSize + unitFromSeed(seed + 4) * sizeRange).toFixed(2)}rem`,
    };
  });

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const imageCount = images.length;
  const phoneNumber = '+263781998998';
  const whatsappHref = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
  const emailHref = 'mailto:kumbembalangelihle@gmail.com';

  const floatingHearts = useMemo(
    () =>
      createFloatingItems(
        12,
        {
          maxDelay: 6,
          minDuration: 8,
          durationRange: 6,
          minSize: 1.2,
          sizeRange: 1.4,
        },
        17
      ),
    []
  );

  const floatingRoses = useMemo(
    () =>
      createFloatingItems(
        8,
        {
          maxDelay: 5,
          minDuration: 9,
          durationRange: 6,
          minSize: 1.4,
          sizeRange: 1.3,
        },
        131
      ),
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageCount);
    }, 4200);
    return () => clearInterval(timer);
  }, [imageCount]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app">
      <div className="floating-layer">
        {floatingHearts.map((heart, i) => (
          <div
            key={`heart-${i}`}
            className="floating-item heart"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              fontSize: heart.size,
            }}
          >
            ♥
          </div>
        ))}
        {floatingRoses.map((rose, i) => (
          <div
            key={`rose-${i}`}
            className="floating-item rose"
            style={{
              left: rose.left,
              animationDelay: rose.delay,
              animationDuration: rose.duration,
              fontSize: rose.size,
            }}
          >
            *
          </div>
        ))}
      </div>

      <header className="hero" id="home">
        <nav className="nav">
          <div className="logo">LN</div>
          <div className="nav-links">
            <a href="#story">Profile</a>
            <a href="#about">Skills</a>
            <a href="#gallery">Portfolio</a>
            <a href="#memories">Experience</a>
            <a href="#notes">Credentials</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Professional Profile</p>
            <h1 className="hero-title">Langelihle Natasha Kumbemba</h1>
            <p className="hero-subtitle">Social Media Marketing • Customer Support</p>
            <p className="hero-blurb">
              Business management professional with experience in strategic planning, marketing,
              customer service, strategic management, and organizational behavior, committed to
              adding value and supporting organizational goals through disciplined teamwork.
            </p>
            <div className="hero-tags">
              <span>Harare, Zimbabwe</span>
              <span>Customer care</span>
              <span>Digital marketing</span>
            </div>
            <div className="hero-actions">
              <button type="button" className="primary-action" onClick={handlePrint}>
                Download CV
              </button>
              <a className="secondary-action" href={emailHref}>
                <span className="action-icon" aria-hidden="true">
                  @
                </span>
                <span>Email</span>
              </a>
              <a className="secondary-action" href={whatsappHref} target="_blank" rel="noreferrer">
                <span className="action-icon" aria-hidden="true">
                  WA
                </span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-frame">
              <img src={images[currentImage]} alt="Langelihle portrait" />
            </div>
            <p className="portrait-caption">Creative, strategic, and client-focused.</p>
            <div className="portrait-dots">
              {images.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  className={`dot ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </header>

      <section className="section story" id="story">
        <div className="section-header">
          <p className="section-kicker">Profile</p>
          <h2>Professional Summary</h2>
          <p className="section-lede">
            A concise summary of the business, marketing, and support capabilities that define her
            professional profile.
          </p>
        </div>
        <div className="story-grid">
          {profileHighlights.map((beat, index) => (
            <article key={beat.title} className="story-card">
              <span className="story-index">0{index + 1}</span>
              <h3>{beat.title}</h3>
              <p>{beat.text}</p>
            </article>
          ))}
        </div>
        <div className="story-quote">
          <p>
            Bringing together confidence, communication, and strategy to support brands, teams,
            and customers with purpose.
          </p>
          <span>Professional Summary</span>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-header">
          <p className="section-kicker">Skills</p>
          <h2>Contact, Languages, and Core Strengths</h2>
          <p className="section-lede">
            Essential contact details and core capabilities relevant to customer-facing and
            administrative roles.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <h3>Contact Details</h3>
            <ul className="about-list">
              {contactFacts.map((fact) => (
                <li key={fact.label}>
                  <span className="about-icon">{fact.icon}</span>
                  <div>
                    <strong>{fact.label}</strong>
                    {fact.label === 'Email' ? (
                      <a className="contact-link" href={emailHref}>
                        <span className="action-icon inline-icon" aria-hidden="true">
                          @
                        </span>
                        {fact.value}
                      </a>
                    ) : fact.label === 'Phone' ? (
                      <a
                        className="contact-link"
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="action-icon inline-icon" aria-hidden="true">
                          WA
                        </span>
                        {fact.value}
                      </a>
                    ) : (
                      <span>{fact.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="contact-actions">
              <a className="secondary-action" href={emailHref}>
                <span className="action-icon" aria-hidden="true">
                  @
                </span>
                <span>Send Email</span>
              </a>
              <a className="secondary-action" href={whatsappHref} target="_blank" rel="noreferrer">
                <span className="action-icon" aria-hidden="true">
                  WA
                </span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="about-card">
            <h3>Skills & Languages</h3>
            <div className="chip-grid">
              {skillTags.map((tag) => (
                <span key={tag.label} className="chip">
                  {tag.icon} {tag.label}
                </span>
              ))}
            </div>

            <div className="favorites-grid">
              <div className="favorite-tile">
                <p className="favorite-label">Languages</p>
                <p className="favorite-title">{languages.join(' • ')}</p>
              </div>
              <div className="favorite-tile">
                <p className="favorite-label">Interests</p>
                <p className="favorite-title">Cooking & Baking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery" id="gallery">
        <div className="section-header">
          <p className="section-kicker">Portfolio</p>
          <h2>Creative Presence and Brand Readiness</h2>
          <p className="section-lede">
            Visual presence matters in modern communication. This portfolio section reflects
            confidence, presentation, and audience-facing professionalism.
          </p>
        </div>
        <div className="gallery-layout">
          {galleryBlocks.map((block, index) => (
            <div key={`block-${index}`} className="gallery-block">
              <div className="gallery-item gallery-big">
                <img
                  src={block.big.src}
                  alt={block.big.label}
                  style={{ objectPosition: block.big.position }}
                />
                <div className="gallery-overlay">
                  <span>{block.big.label}</span>
                </div>
              </div>
              <div className="gallery-medium-grid">
                {block.mediums.map((item) => (
                  <div key={item.src} className="gallery-item gallery-medium">
                    <img src={item.src} alt={item.label} style={{ objectPosition: item.position }} />
                    <div className="gallery-overlay">
                      <span>{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section memories" id="memories">
        <div className="section-header">
          <p className="section-kicker">Experience</p>
          <h2>Professional Experience</h2>
          <p className="section-lede">
            A practical record of roles, strengths, and the work that has shaped her professional
            direction.
          </p>
        </div>
        <div className="memory-wall">
          {experienceCards.map((memory) => (
            <article
              key={memory.title}
              className="memory-card"
              style={{ transform: `rotate(${memory.tilt})` }}
            >
              <div className="memory-photo">
                <img src={memory.src} alt={memory.title} />
              </div>
              <div className="memory-body">
                <h3>{memory.title}</h3>
                <p>{memory.text}</p>
                <span className="memory-tag">{memory.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section love-notes" id="notes">
        <div className="section-header">
          <p className="section-kicker">Credentials</p>
          <h2>Projects, Certificates, and References</h2>
          <p className="section-lede">
            Supporting details that complete the profile, from formal learning to project exposure
            and professional contacts.
          </p>
        </div>
        <div className="notes-grid">
          {projectCards.map((note) => (
            <article key={note.title} className="note-card">
              <h3>{note.title}</h3>
              <div className="note-list">
                {note.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <span className="note-signature">{note.signature}</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p className="footer-title">Langelihle Natasha Kumbemba</p>
        <p className="footer-subtitle">Social media marketing and customer support professional.</p>
      </footer>
    </div>
  );
}

export default App;
