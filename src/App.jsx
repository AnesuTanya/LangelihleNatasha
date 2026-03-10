import { useEffect, useMemo, useState } from 'react';
import {
  aboutFacts,
  galleryBlocks,
  images,
  lifestyleTags,
  loveNotes,
  memories,
  storyBeats,
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
            ❤️
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
            🌹
          </div>
        ))}
      </div>

      <header className="hero" id="home">
        <nav className="nav">
          <div className="logo">LN</div>
          <div className="nav-links">
            <a href="#story">Story</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#memories">Memories</a>
            <a href="#notes">Love Notes</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Lifestyle Biography</p>
            <h1 className="hero-title">Langelihle Natasha Kumbemba</h1>
            <p className="hero-subtitle">Model • Administrator • Beautiful Soul</p>
            <p className="hero-blurb">
              A living portrait of elegance and warmth. This is a page for the moments that glow,
              the memories that linger, and the love that whispers softly.
            </p>
            <div className="hero-tags">
              <span>Golden-hour heart</span>
              <span>Adventure & faith</span>
              <span>Grace in motion</span>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-frame">
              <img src={images[currentImage]} alt="Langelihle portrait" />
            </div>
            <p className="portrait-caption">Where beauty meets calm.</p>
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
          <p className="section-kicker">Story</p>
          <h2>Her Story, Told in Light</h2>
          <p className="section-lede">
            A lifestyle biography is more than facts. It is the feeling she leaves behind, the way
            she carries kindness, and the quiet glow of her presence.
          </p>
        </div>
        <div className="story-grid">
          {storyBeats.map((beat, index) => (
            <article key={beat.title} className="story-card">
              <span className="story-index">0{index + 1}</span>
              <h3>{beat.title}</h3>
              <p>{beat.text}</p>
            </article>
          ))}
        </div>
        <div className="story-quote">
          <p>“She is clothed with strength and dignity; she can laugh at the days to come.”</p>
          <span>Proverbs 31:25</span>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-header">
          <p className="section-kicker">About</p>
          <h2>Essentials & Lifestyle</h2>
          <p className="section-lede">The details that shape her world, with a touch of softness.</p>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <h3>Essentials</h3>
            <ul className="about-list">
              {aboutFacts.map((fact) => (
                <li key={fact.label}>
                  <span className="about-icon">{fact.icon}</span>
                  <div>
                    <strong>{fact.label}</strong>
                    <span>{fact.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-card">
            <h3>Signature Life</h3>
            <div className="chip-grid">
              {lifestyleTags.map((tag) => (
                <span key={tag.label} className="chip">
                  {tag.icon} {tag.label}
                </span>
              ))}
            </div>

            <div className="favorites-grid">
              <div className="favorite-tile">
                <p className="favorite-label">Favorite Song</p>
                <p className="favorite-title">“Beautiful” by Akon</p>
              </div>
              <div className="favorite-tile">
                <p className="favorite-label">Favorite Verse</p>
                <p className="favorite-title">Proverbs 31 Woman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery" id="gallery">
        <div className="section-header">
          <p className="section-kicker">Gallery</p>
          <h2>Moments That Sparkle</h2>
          <p className="section-lede">
            Each frame holds a mood, a memory, and a little bit of magic.
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
          <p className="section-kicker">Memories</p>
          <h2>The Memory Wall</h2>
          <p className="section-lede">
            Little snapshots of the feelings that stay with you long after the day ends.
          </p>
        </div>
        <div className="memory-wall">
          {memories.map((memory) => (
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
          <p className="section-kicker">Love Notes</p>
          <h2>Words I Hold Close</h2>
          <p className="section-lede">
            Gentle notes written with admiration, kept here as a small love letter.
          </p>
        </div>
        <div className="notes-grid">
          {loveNotes.map((note) => (
            <article key={note.title} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <span className="note-signature">With love, always</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p className="footer-title">Langelihle Natasha Kumbemba</p>
        <p className="footer-subtitle">Beautiful inside & out.</p>
      </footer>
    </div>
  );
}

export default App;
