import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const asset = (name) => `${import.meta.env.BASE_URL}${name}`;
const projects = [
  {
    id: '01', category: 'Interiors', title: 'The quiet residence',
    subtitle: 'A study in light, texture, and stillness.', image: 'interior-study.png',
    alt: 'Concept render of a sunlit ivory living room with natural stone and a curved sofa.',
    description: 'Soft daylight moves across textured plaster and natural stone. A restrained material palette lets the proportions, shadows, and quiet details of the room take the lead.',
    focus: 'Natural light · Tactile materials · Interior atmosphere',
  },
  {
    id: '02', category: 'Exteriors', title: 'Sculpted in light',
    subtitle: 'Architecture in conversation with its landscape.', image: 'exterior-study.png',
    alt: 'Concept render of a sculptural ivory villa with curved volumes and a landscaped courtyard.',
    description: 'Curved volumes, deep openings, and warm illumination give this imagined residence its character. The composition explores the meeting of architecture, landscape, and the changing light of day.',
    focus: 'Architectural form · Landscape · Evening light',
  },
];

function App() {
  const [filter, setFilter] = useState('All work');
  const [selected, setSelected] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const projectDialog = useRef(null);
  const contactDialog = useRef(null);
  const projectTrigger = useRef(null);
  const contactTrigger = useRef(null);

  useEffect(() => {
    const dialog = projectDialog.current;
    if (selected && !dialog.open) dialog.showModal();
  }, [selected]);

  useEffect(() => {
    if (contactOpen && !contactDialog.current.open) contactDialog.current.showModal();
  }, [contactOpen]);

  useEffect(() => {
    if (!selected && !contactOpen) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = oldOverflow; };
  }, [selected, contactOpen]);

  function closeProject() {
    projectDialog.current.close();
    setSelected(null);
    projectTrigger.current?.focus();
  }
  function closeContact() {
    contactDialog.current.close();
    setContactOpen(false);
    contactTrigger.current?.focus();
  }
  function openContact(event) {
    contactTrigger.current = event.currentTarget;
    setContactOpen(true);
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="hero-shell" id="top">
        <img className="hero-image" src={asset('ivory-hero.png')} alt="" fetchPriority="high" />
        <div className="hero-wash" />
        <header className="site-header wrap">
          <a className="brand" href="#top" aria-label="Jay & Jatan home"><span className="brand-mark" aria-hidden="true">j.</span><span>Jay & Jatan</span></a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <button className="nav-contact" onClick={openContact}>Let’s talk</button>
          </nav>
        </header>

        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-card">
              <p className="eyebrow">Architectural visualization</p>
              <h1 id="hero-title">Spaces imagined.<br /><em>Atmospheres felt.</em></h1>
              <p className="hero-description">Thoughtful 3D imagery that brings architecture<br className="desktop-break" /> to life through light, material, and emotion.</p>
              <a className="button primary" href="#work">Explore selected work</a>
              <span className="hero-caption">Interiors &nbsp; / &nbsp; Exteriors &nbsp; / &nbsp; Atmospheres</span>
            </div>
            <div className="hero-baseline wrap"><span>Form. Light. Feeling.</span><span>Portfolio / Concept edition</span></div>
          </section>

          <section className="work-section wrap" id="work" aria-labelledby="work-title">
            <div className="section-heading">
              <div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">A sense of <em>place.</em></h2></div>
              <p>Imagined spaces. Considered details.<br />A closer look at the atmosphere.</p>
            </div>
            <div className="work-toolbar">
              <div className="filters" role="group" aria-label="Filter projects">
                {['All work', 'Interiors', 'Exteriors'].map((item) => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
              </div>
              <span className="sample-note">Demo studies · AI-generated imagery</span>
            </div>
            <div className="project-grid">
              {projects.filter((p) => filter === 'All work' || p.category === filter).map((project) => (
                <button className="project" key={project.id} onClick={(event) => { projectTrigger.current = event.currentTarget; setSelected(project); }} aria-label={`View ${project.title}`}>
                  <div className="project-image-wrap"><img src={asset(project.image)} alt={project.alt} loading="lazy" width="1536" height="1024" /><span className="project-open">View study <span aria-hidden="true">+</span></span></div>
                  <div className="project-meta"><span>{project.category} / Concept study</span><span>{project.id}</span></div>
                  <h3>{project.title}</h3><p>{project.subtitle}</p>
                </button>
              ))}
            </div>
            <p className="sr-only" aria-live="polite">{filter === 'All work' ? '2 projects' : '1 project'} shown</p>
          </section>

          <section className="about-section" id="about" aria-labelledby="about-title">
            <div className="wrap about-grid">
              <div><p className="eyebrow">02 / Behind the image</p><div className="material-swatch" aria-hidden="true"><span>j+j</span><small>Light shapes everything.</small></div></div>
              <div className="about-copy"><h2 id="about-title">More than a render.<br /><em>A feeling of being there.</em></h2><p>We’re Jay and Jatan — two brothers, 3D visualizers, and archviz artists. We explore how light, material, and composition can turn an architectural idea into a place you can almost step inside.</p><p>From the softness of an interior to the presence of a building in its landscape, our focus is on the details that make an image feel convincing.</p>
                <div className="disciplines"><span>Interior visualization</span><span>Exterior visualization</span><span>Material & lighting studies</span></div>
              </div>
            </div>
          </section>

          <section className="contact-section wrap" aria-labelledby="contact-title">
            <p className="eyebrow">03 / Start a conversation</p><h2 id="contact-title">Let’s bring your<br /><em>next space to life.</em></h2><button className="button primary" onClick={openContact}>Get in touch</button>
          </section>
        </main>
      </div>
      <footer className="footer wrap"><a className="brand" href="#top">Jay & Jatan</a><span>Jay & Jatan · Concept portfolio · Demo imagery</span><a href="#top">Back to top</a></footer>

      <dialog className="project-dialog" ref={projectDialog} onCancel={(event) => { event.preventDefault(); closeProject(); }} onClick={(event) => { if (event.target === event.currentTarget) closeProject(); }} aria-labelledby="project-dialog-title">
        {selected && <div className="dialog-inner"><button className="close-button" onClick={closeProject} aria-label="Close project">×</button><img className="dialog-image" src={asset(selected.image)} alt={selected.alt} /><div className="dialog-copy"><p className="eyebrow">{selected.category} / Demo concept</p><h2 id="project-dialog-title">{selected.title}</h2><p>{selected.description}</p><p className="project-focus">{selected.focus}</p><p className="sample-note">AI-generated sample imagery for this website demo. This is not a completed client project or a claim of the portfolio owner’s work.</p></div></div>}
      </dialog>
      <dialog className="contact-dialog" ref={contactDialog} onCancel={(event) => { event.preventDefault(); closeContact(); }} onClick={(event) => { if (event.target === event.currentTarget) closeContact(); }} aria-labelledby="contact-dialog-title">
        <div className="dialog-copy"><button className="close-button" onClick={closeContact} aria-label="Close contact details">×</button><p className="eyebrow">Let’s talk</p><h2 id="contact-dialog-title">Good spaces start<br />with a conversation.</h2><p>Contact details are coming soon.</p><p className="sample-note">This is a portfolio demo. No enquiries or personal information are collected.</p><button className="button secondary" onClick={closeContact}>Back to portfolio</button></div>
      </dialog>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
