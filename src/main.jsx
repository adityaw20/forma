import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Check, CheckCircle2,
  CircleDot, Dribbble, Instagram, Layers3, Menu, MoveUpRight, Sparkles, X
} from 'lucide-react';
import './styles.css';

const services = ['Website Design', 'UI / UX Design', 'Brand Identity', 'Creative Direction', 'Other'];
const budgets = ['Below ₹10,000', '₹10,000–₹25,000', '₹25,000–₹50,000', '₹50,000+', 'Not decided yet'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', company: '', service: 'Website Design',
    budget: '₹10,000–₹25,000', timeline: 'Within a month', projectDetails: '',
    referenceUrl: '', consent: false, 'bot-field': ''
  });

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (form['bot-field']) return;
    if (!form.consent) {
      setError('Please confirm that we may contact you about this enquiry.');
      return;
    }
    setStatus('sending');
    const payload = new URLSearchParams();
    payload.append('form-name', 'client-enquiry');
    Object.entries(form).forEach(([key, value]) => {
      if (key === 'consent') payload.append(key, value ? 'Yes' : 'No');
      else if (key !== 'bot-field') payload.append(key, value);
    });
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString()
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      setForm({
        fullName: '', email: '', phone: '', company: '', service: 'Website Design',
        budget: '₹10,000–₹25,000', timeline: 'Within a month', projectDetails: '',
        referenceUrl: '', consent: false, 'bot-field': ''
      });
    } catch {
      setStatus('idle');
      setError('We couldn’t send your enquiry. Please check your connection and try again.');
    }
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Forma Studio home"><span className="brand-mark"><Asterisk size={23}/></span>forma<span className="brand-dot">.</span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>What we do</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Studio</a>
          <a className="nav-cta" href="#enquiry" onClick={() => setMenuOpen(false)}>Start a project <ArrowUpRight size={16}/></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span className="status-dot"/> Independent design studio <span className="eyebrow-line"/></div>
        <h1>Good design<br/>makes <em>things</em><br/><span className="outline-word">happen.</span></h1>
        <div className="hero-bottom">
          <p>We build thoughtful digital experiences and distinctive identities for people with something meaningful to put into the world.</p>
          <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={24}/></a>
        </div>
        <div className="hero-note"><span>DESIGN WITH INTENTION</span><span>STRATEGY · DIGITAL · IDENTITY</span><span>EST. 2024</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="shell section-head"><div><span className="kicker">01 / SELECTED WORK</span><h2>Ideas, made <em>visible.</em></h2></div><p>A few directions we love exploring.<br/>Your project could be next.</p></div>
        <div className="project-grid shell">
          <article className="project-card project-one"><div className="art art-orbit"><div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/><div className="orbit-core">N<span>°</span></div><span className="art-label">NORTH / BRAND SYSTEM</span><span className="art-stamp">MOVE<br/>WITH<br/>PURPOSE</span></div><div className="project-meta"><div><h3>North Objects</h3><p>Brand identity · Art direction</p></div><span className="project-arrow"><ArrowUpRight/></span></div></article>
          <article className="project-card project-two"><div className="art art-editorial"><div className="editorial-top">FORM FOLLOWS FEELING <span>VOL. 01</span></div><div className="editorial-word">less,<br/><i>but</i> better.</div><div className="editorial-bottom"><span>OBJECTS FOR EVERYDAY LIVING</span><span>2025—26</span></div></div><div className="project-meta"><div><h3>Everyday Form</h3><p>Digital experience · E-commerce</p></div><span className="project-arrow"><ArrowUpRight/></span></div></article>
          <article className="project-card project-three"><div className="art art-citrus"><div className="citrus-sun"/><span className="citrus-title">good<br/>things<br/><i>grow.</i></span><span className="citrus-small">GROWN SLOW. MADE WELL.</span><div className="citrus-leaf leaf-a"/><div className="citrus-leaf leaf-b"/></div><div className="project-meta"><div><h3>Sunday Harvest</h3><p>Packaging · Visual identity</p></div><span className="project-arrow"><ArrowUpRight/></span></div></article>
          <article className="project-card project-four"><div className="art art-interface"><div className="ui-window"><div className="ui-bar"><span/><span/><span/><b>MONO / STUDIO</b></div><div className="ui-copy"><span>YOUR SPACE, REIMAGINED</span><strong>Make room<br/>for better.</strong><div className="ui-button">Explore the collection ↗</div></div><div className="ui-block"/></div><span className="ui-caption">A CALMER KIND OF COMMERCE</span></div><div className="project-meta"><div><h3>Mono Living</h3><p>Web design · E-commerce</p></div><span className="project-arrow"><ArrowUpRight/></span></div></article>
        </div>
        <p className="portfolio-note shell"><CircleDot size={13}/> These are concept studies created to demonstrate our visual approach.</p>
      </section>

      <section className="services-section" id="services"><div className="shell services-layout">
        <div className="services-intro"><span className="kicker">02 / WHAT WE DO</span><h2>From first<br/>thought to<br/><em>final detail.</em></h2><p>Small, focused teams. Clear thinking. Work built around what your business actually needs.</p><a className="text-link" href="#enquiry">Tell us what you're building <ArrowRight size={17}/></a></div>
        <div className="service-list">
          <div className="service-row"><span>01</span><div><h3>Digital experiences</h3><p>Websites, landing pages and e-commerce that feel effortless to use.</p></div><Layers3/></div>
          <div className="service-row"><span>02</span><div><h3>UI / UX design</h3><p>Useful interfaces, clear journeys and prototypes that make sense.</p></div><Sparkles/></div>
          <div className="service-row"><span>03</span><div><h3>Brand identity</h3><p>Strategy, visual systems and the details that make you recognisable.</p></div><Asterisk/></div>
          <div className="service-row"><span>04</span><div><h3>Creative direction</h3><p>A considered point of view across campaigns, content and touchpoints.</p></div><MoveUpRight/></div>
        </div>
      </div></section>

      <section className="manifesto" id="about"><div className="shell manifesto-inner"><span className="kicker">03 / A SMALL STUDIO, BIG ON CARE</span><p>Less noise.<br/>More <em>meaning.</em><br/>Always made<br/>with <span>intention.</span></p><div className="manifesto-bottom"><span>CURIOUS BY NATURE. PRECISE BY DESIGN.</span><span>GOOD WORK STARTS WITH A GOOD CONVERSATION.</span></div></div></section>

      <section className="enquiry-section" id="enquiry"><div className="shell enquiry-layout">
        <div className="enquiry-intro"><span className="kicker">04 / YOUR NEXT CHAPTER</span><h2>Have a good<br/>one in <em>mind?</em></h2><p>Give us the rough idea. The half-formed thought. The thing you've been meaning to make. We'll take it from there.</p><div className="contact-note"><span className="contact-icon"><ArrowUpRight/></span><div><b>Prefer a direct hello?</b><span>Replace this with your business email before launch.</span><a href="mailto:hello@example.com">hello@example.com</a></div></div><div className="response-note"><CheckCircle2 size={17}/> Usually respond within 1–2 business days</div></div>
        <div className="form-panel">
          {status === 'success' ? (
            <div className="success-state" role="status"><div className="success-icon"><Check size={30}/></div><span className="kicker">MESSAGE RECEIVED</span><h3>Thanks for reaching out.</h3><p>Your enquiry has been submitted. We’ll be in touch soon.</p><button className="button button-dark" onClick={() => setStatus('idle')}>Send another enquiry <ArrowRight size={17}/></button></div>
          ) : (
            <form name="client-enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="form-name" value="client-enquiry"/>
              <p className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="bot-field" tabIndex="-1" autoComplete="off" value={form['bot-field']} onChange={update}/></label></p>
              <div className="form-top"><span>PROJECT ENQUIRY</span><span>* REQUIRED</span></div>
              <div className="field-grid">
                <label className="field"><span>Your name *</span><input name="fullName" autoComplete="name" placeholder="Jane Smith" value={form.fullName} onChange={update} required minLength="2"/></label>
                <label className="field"><span>Email address *</span><input name="email" type="email" autoComplete="email" placeholder="jane@company.com" value={form.email} onChange={update} required/></label>
                <label className="field"><span>Phone / WhatsApp</span><input name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" value={form.phone} onChange={update}/></label>
                <label className="field"><span>Company / brand</span><input name="company" autoComplete="organization" placeholder="Your company" value={form.company} onChange={update}/></label>
                <label className="field"><span>What do you need? *</span><select name="service" value={form.service} onChange={update} required>{services.map(s => <option key={s}>{s}</option>)}</select></label>
                <label className="field"><span>Approx. budget</span><select name="budget" value={form.budget} onChange={update}>{budgets.map(b => <option key={b}>{b}</option>)}</select></label>
                <label className="field field-full"><span>When would you like to start?</span><select name="timeline" value={form.timeline} onChange={update}><option>As soon as possible</option><option>Within a month</option><option>1–3 months</option><option>Flexible / exploring</option></select></label>
                <label className="field field-full"><span>Tell us a little about the project *</span><textarea name="projectDetails" placeholder="What are you making, who is it for, and what would success look like?" rows="4" value={form.projectDetails} onChange={update} required minLength="15"/></label>
                <label className="field field-full"><span>Reference link (optional)</span><input name="referenceUrl" type="url" placeholder="https://..." value={form.referenceUrl} onChange={update}/></label>
              </div>
              <label className="consent"><input type="checkbox" name="consent" checked={form.consent} onChange={update}/><span>I agree to be contacted about this project enquiry. *</span></label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="button button-dark submit-button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending enquiry…' : 'Send project enquiry'} <ArrowUpRight size={18}/></button>
              <p className="form-privacy">Your details are used only to respond to this enquiry.</p>
            </form>
          )}
        </div>
      </div></section>

      <footer className="footer"><div className="shell footer-top"><a className="brand brand-footer" href="#top"><span className="brand-mark"><Asterisk size={22}/></span>forma<span className="brand-dot">.</span></a><span>Thoughtful work for a world that keeps moving.</span><a className="back-top" href="#top">BACK TO TOP ↑</a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Forma Studio. Replace this demo identity with your own.</span><div><a href="#work">Work</a><a href="#services">Services</a><a href="#enquiry">Contact</a></div><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17}/></a><a href="https://dribbble.com" aria-label="Dribbble"><Dribbble size={17}/></a></div></div></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App/>);