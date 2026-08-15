import React, { useState, useEffect } from "react";
import {
  GraduationCap, Globe2, BookOpen, CheckCircle2, Menu, X,
  Mail, Phone, ArrowRight,
  Calculator, ShieldCheck, Users, Clock, MapPin,
} from "lucide-react";

/* ---------------------------------------------------------------------------
   Brand marks. lucide-react removed its brand icons (Youtube/Instagram/
   Linkedin) for trademark reasons, so these three are inlined here — which
   keeps lucide-react the only external dependency.
   --------------------------------------------------------------------------- */
const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20}
       fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20}
       fill="none" stroke="currentColor" strokeWidth="1.9"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5.5"/>
    <circle cx="12" cy="12" r="4.2"/>
    <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 20} height={props.size || 20}
       fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z"/>
  </svg>
);

/* ---------------------------------------------------------------------------
   EDIT ME — every link and contact detail on the site comes from this object.
   Change them here once and they update everywhere.
   --------------------------------------------------------------------------- */
const LINKS = {
  youtube: "https://youtube.com/@cakiranprasad",
  instagram: "https://instagram.com/cakiranprasad",
  linkedin: "https://linkedin.com/in/cakiranprasad",
  whatsapp: "https://wa.me/919000000000",
  email: "kiranprasad255@gmail.com",
  phone: "+91 90000 00000",
};

const COURSES = [
  {
    icon: ShieldCheck,
    code: "EA",
    name: "Enrolled Agent",
    body: "The highest credential the IRS awards. Three papers, unlimited practice rights before the IRS, and the fastest route into US taxation from India.",
    points: ["3 papers", "US taxation", "6–9 months"],
  },
  {
    icon: Calculator,
    code: "US CPA",
    name: "Certified Public Accountant",
    body: "The global benchmark in accounting. Opens audit, advisory and controllership roles with US-facing firms and Big 4 offices across India.",
    points: ["4 papers", "Big 4 recognised", "12–18 months"],
  },
  {
    icon: BookOpen,
    code: "US CMA",
    name: "Certified Management Accountant",
    body: "Built for management accounting and FP&A. Two papers, and the one most students finish alongside a full-time job.",
    points: ["2 papers", "FP&A focus", "8–12 months"],
  },
  {
    icon: Globe2,
    code: "ACCA",
    name: "Association of Chartered Certified Accountants",
    body: "Recognised in over 180 countries, with generous exemptions for Indian CA and CA Inter students. The strongest passport for the UK, Middle East and Europe.",
    points: ["13 papers", "Exemptions apply", "Global reach"],
  },
  {
    icon: GraduationCap,
    code: "DipIFR",
    name: "Diploma in IFRS",
    body: "A single-paper ACCA qualification in international reporting standards. The quickest credible addition to an already-strong CV.",
    points: ["1 paper", "IFRS expertise", "3–6 months"],
  },
];

const STEPS = [
  { n: "01", title: "Free counselling call", body: "We talk through your background, your timeline and your budget — and I tell you honestly which qualification fits, even when the answer is none of them yet." },
  { n: "02", title: "A plan you can actually keep", body: "A week-by-week study schedule built around your job or college hours, not an idealised timetable nobody follows." },
  { n: "03", title: "Concepts in Malayalam", body: "Every topic explained in the language you think in, with the technical vocabulary in English so the exam never feels foreign." },
  { n: "04", title: "Through to the exam hall", body: "Doubt sessions, mock reviews, and help with registration, evaluation and scheduling — the admin that trips up most candidates." },
];

const FAQS = [
  { q: "Do I need to be a CA to start?", a: "No. EA, US CMA and ACCA are all open to graduates, and ACCA accepts students straight after Plus Two. A CA or CA Inter background earns you exemptions, particularly in ACCA, but it is never a prerequisite." },
  { q: "Are the classes fully in Malayalam?", a: "Concepts and discussion are in Malayalam. Technical terms, standards and exam vocabulary stay in English, because that is the language you will be tested and interviewed in. The aim is understanding without the language becoming a second obstacle." },
  { q: "Can I study alongside a full-time job?", a: "Most of my students do. US CMA and DipIFR are the most job-friendly, and sessions are scheduled on evenings and weekends with recordings available." },
  { q: "What does it cost, all in?", a: "Fees vary by qualification, and the exam and licensing costs paid to the overseas body are usually the larger share. I give you the full breakdown — tuition, exam fees, evaluation, membership — on the first call, before you commit to anything." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when a link is followed.
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{CSS}</style>

      <a className="skip" href="#main">Skip to content</a>

      <header className={scrolled ? "nav nav--stuck" : "nav"}>
        <div className="nav__inner">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span className="brand__mark">CA</span>
            <span className="brand__text">Kiran Prasad</span>
          </a>

          <nav className={menuOpen ? "nav__links nav__links--open" : "nav__links"} aria-label="Primary">
            <a href="#courses" onClick={closeMenu}>Qualifications</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#how" onClick={closeMenu}>How it works</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="nav__cta" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              Book a call
            </a>
          </nav>

          <button
            className="nav__toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section className="hero" id="top">
          <div className="wrap">
            <p className="hero__badge">
              <GraduationCap size={15} /> Chartered Accountant · Kerala
            </p>
            <h1 className="hero__title">
              Global finance careers,<br />
              <span className="ml">മലയാളത്തിൽ പഠിക്കാം</span>
            </h1>
            <p className="hero__lede">
              I'm CA Kiran Prasad. I guide Malayali students through the qualifications that
              open international finance careers — <strong>EA, US CPA, US CMA, ACCA and DipIFR</strong> —
              taught in the language you think in.
            </p>

            <div className="hero__cta">
              <a className="btn btn--primary" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                Book a free call <ArrowRight size={17} />
              </a>
              <a className="btn" href="#courses">Explore qualifications</a>
            </div>

            <ul className="stats">
              <li><strong>5</strong><span>Qualifications guided</span></li>
              <li><strong>100%</strong><span>Malayalam medium</span></li>
              <li><strong>1:1</strong><span>Personal mentoring</span></li>
            </ul>
          </div>
        </section>

        {/* ---------- Courses ---------- */}
        <section className="section" id="courses">
          <div className="wrap">
            <p className="eyebrow">What I teach</p>
            <h2 className="h2">Five routes out of the local job market</h2>
            <p className="section__lede">
              Each of these is recognised internationally and each suits a different starting point.
              The first thing we do is work out which one is actually yours.
            </p>

            <div className="grid">
              {COURSES.map((c) => {
                const Icon = c.icon;
                return (
                  <article className="card" key={c.code}>
                    <div className="card__icon"><Icon size={20} /></div>
                    <p className="card__code">{c.code}</p>
                    <h3 className="card__name">{c.name}</h3>
                    <p className="card__body">{c.body}</p>
                    <ul className="chips">
                      {c.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </article>
                );
              })}

              <article className="card card--cta">
                <h3 className="card__name">Not sure which fits?</h3>
                <p className="card__body">
                  That's the most common place to start. One call, no fee, and an honest answer
                  about which qualification matches your background and timeline.
                </p>
                <a className="btn btn--primary btn--sm" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                  Talk to me <ArrowRight size={16} />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section className="section section--alt" id="about">
          <div className="wrap about">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="h2">Why Malayalam matters here</h2>
              <p className="body">
                Most students I meet did not struggle with accounting. They struggled with
                accounting explained in a second language, at speed, by someone who had never
                sat where they were sitting.
              </p>
              <p className="body">
                I'm a Chartered Accountant, and I teach these qualifications the way I wish
                they had been taught to me — concepts in Malayalam, technical vocabulary in
                English, and no pretending the exams are easier than they are.
              </p>
              <ul className="ticks">
                <li><CheckCircle2 size={18} /> Concepts explained in Malayalam, terminology kept in English</li>
                <li><CheckCircle2 size={18} /> Honest guidance on cost, effort and realistic timelines</li>
                <li><CheckCircle2 size={18} /> Support through registration, evaluation and scheduling</li>
                <li><CheckCircle2 size={18} /> Small batches, so questions actually get answered</li>
              </ul>
            </div>

            <aside className="profile">
              <div className="profile__mark">CA</div>
              <h3 className="profile__name">CA Kiran Prasad</h3>
              <p className="profile__role">Chartered Accountant · Educator</p>
              <dl className="profile__facts">
                <div><dt><Users size={15} /> Teaches</dt><dd>EA, US CPA, US CMA, ACCA, DipIFR</dd></div>
                <div><dt><MapPin size={15} /> Based in</dt><dd>Kerala, India</dd></div>
                <div><dt><Clock size={15} /> Sessions</dt><dd>Evenings &amp; weekends, online</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        {/* ---------- How it works ---------- */}
        <section className="section" id="how">
          <div className="wrap">
            <p className="eyebrow">How it works</p>
            <h2 className="h2">From first call to exam day</h2>
            <div className="steps">
              {STEPS.map((s) => (
                <div className="step" key={s.n}>
                  <span className="step__n">{s.n}</span>
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="section section--alt" id="faq">
          <div className="wrap wrap--narrow">
            <p className="eyebrow">Questions</p>
            <h2 className="h2">Before you decide</h2>
            <div className="faqs">
              {FAQS.map((f, i) => (
                <div className={openFaq === i ? "faq faq--open" : "faq"} key={f.q}>
                  <button
                    className="faq__q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{f.q}</span>
                    <span className="faq__sign" aria-hidden="true">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && <p className="faq__a">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="section contact" id="contact">
          <div className="wrap wrap--narrow center">
            <p className="eyebrow">Get started</p>
            <h2 className="h2">Let's find the right qualification for you</h2>
            <p className="section__lede">
              A free call, in Malayalam, with no obligation. Bring your marksheets and your
              questions — you'll leave knowing exactly where you stand.
            </p>

            <div className="hero__cta center-cta">
              <a className="btn btn--primary" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                <Phone size={17} /> WhatsApp me
              </a>
              <a className="btn" href={`mailto:${LINKS.email}`}>
                <Mail size={17} /> Email
              </a>
            </div>

            <div className="socials">
              <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon size={20} /></a>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={20} /></a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <p>© {new Date().getFullYear()} CA Kiran Prasad</p>
          <p className="footer__note">Global finance careers, in Malayalam.</p>
        </div>
      </footer>
    </>
  );
}

/* ---------------------------------------------------------------------------
   Styles — injected as a plain <style> tag, no CSS framework involved.
   --------------------------------------------------------------------------- */
const CSS = `
:root{
  --bg:#fbfaf8; --alt:#f4f1ec; --surface:#fff;
  --ink:#15181d; --soft:#555c68; --faint:#8b919d; --line:#e4e0d9;
  --brand:#0f5c4a; --brand-2:#0b4638; --wash:rgba(15,92,74,.08);
  --gold:#b8862b;
  --radius:16px;
  --wrap:70rem;
  --ease:cubic-bezier(.22,.61,.36,1);
}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:5rem;-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--ink);
  font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Inter,Roboto,sans-serif;
  font-size:clamp(1rem,.97rem+.16vw,1.08rem);line-height:1.65;-webkit-font-smoothing:antialiased}
h1,h2,h3{margin:0;line-height:1.14;letter-spacing:-.022em}
p{margin:0 0 1.1em}
a{color:inherit}
button{font:inherit}
:focus-visible{outline:2px solid var(--brand);outline-offset:3px;border-radius:6px}

.wrap{width:100%;max-width:var(--wrap);margin-inline:auto;padding-inline:clamp(1.15rem,5vw,2.5rem)}
.wrap--narrow{max-width:46rem}
.center{text-align:center}
.skip{position:absolute;left:-9999px;top:0;background:var(--brand);color:#fff;padding:.7rem 1.1rem;z-index:200}
.skip:focus{left:0}

/* nav */
.nav{position:sticky;top:0;z-index:100;background:rgba(251,250,248,.86);
  backdrop-filter:saturate(160%) blur(12px);-webkit-backdrop-filter:saturate(160%) blur(12px);
  border-bottom:1px solid transparent;transition:border-color .3s var(--ease)}
.nav--stuck{border-bottom-color:var(--line)}
.nav__inner{max-width:var(--wrap);margin-inline:auto;padding:.8rem clamp(1.15rem,5vw,2.5rem);
  display:flex;align-items:center;gap:1rem}
.brand{display:flex;align-items:center;gap:.6rem;text-decoration:none;margin-right:auto;font-weight:650}
.brand__mark{display:grid;place-items:center;width:2.1rem;height:2.1rem;border-radius:9px;
  background:var(--brand);color:#fff;font-size:.78rem;letter-spacing:.02em}
.brand__text{letter-spacing:-.02em}
.nav__links{display:flex;align-items:center;gap:1.6rem;font-size:.93rem}
.nav__links a{text-decoration:none;color:var(--soft);transition:color .2s var(--ease)}
.nav__links a:hover{color:var(--ink)}
.nav__cta{background:var(--brand);color:#fff!important;padding:.5rem 1rem;border-radius:999px;font-weight:560}
.nav__cta:hover{background:var(--brand-2)}
.nav__toggle{display:none;background:none;border:1px solid var(--line);border-radius:9px;
  padding:.4rem;color:var(--ink);cursor:pointer}
@media(max-width:56rem){
  .nav__toggle{display:grid;place-items:center}
  .nav__links{position:absolute;top:100%;left:0;right:0;display:none;flex-direction:column;
    align-items:stretch;gap:0;background:var(--surface);border-bottom:1px solid var(--line);
    padding:.5rem clamp(1.15rem,5vw,2.5rem) 1.1rem}
  .nav__links--open{display:flex}
  .nav__links a{padding:.75rem 0;border-bottom:1px solid var(--line)}
  .nav__cta{text-align:center;margin-top:.8rem;border-bottom:none!important}
}

/* hero */
.hero{padding:clamp(3.5rem,11vh,7rem) 0 clamp(3rem,8vh,5rem);position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;left:50%;bottom:0;width:min(80rem,150%);aspect-ratio:2/1;
  transform:translate(-50%,45%);background:radial-gradient(ellipse at center,var(--wash),transparent 62%);
  pointer-events:none}
.hero .wrap{position:relative}
.hero__badge{display:inline-flex;align-items:center;gap:.45rem;font-size:.82rem;font-weight:550;
  color:var(--brand);background:var(--wash);padding:.4rem .85rem;border-radius:999px;margin-bottom:1.4rem}
.hero__title{font-size:clamp(2.2rem,1.5rem+3.4vw,4.2rem);font-weight:660;letter-spacing:-.035em;margin-bottom:1.3rem}
.ml{color:var(--brand);font-weight:600}
.hero__lede{font-size:clamp(1.05rem,1rem+.4vw,1.28rem);color:var(--soft);max-width:44ch;line-height:1.55}
.hero__lede strong{color:var(--ink);font-weight:600}
.hero__cta{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:2rem}
.center-cta{justify-content:center}
.stats{list-style:none;display:flex;flex-wrap:wrap;gap:2.5rem;margin:3.5rem 0 0;padding:0}
.stats strong{display:block;font-size:1.9rem;font-weight:650;letter-spacing:-.03em;color:var(--brand)}
.stats span{font-size:.85rem;color:var(--faint)}

/* buttons */
.btn{display:inline-flex;align-items:center;gap:.45rem;padding:.75rem 1.35rem;border-radius:999px;
  border:1px solid var(--line);background:var(--surface);color:var(--ink);text-decoration:none;
  font-size:.95rem;font-weight:560;cursor:pointer;
  transition:transform .18s var(--ease),border-color .18s var(--ease),background .18s var(--ease)}
.btn:hover{transform:translateY(-2px);border-color:var(--brand);color:var(--brand)}
.btn--primary{background:var(--brand);border-color:var(--brand);color:#fff}
.btn--primary:hover{background:var(--brand-2);border-color:var(--brand-2);color:#fff}
.btn--sm{padding:.6rem 1.1rem;font-size:.9rem}

/* sections */
.section{padding:clamp(4rem,9vw,7rem) 0}
.section--alt{background:var(--alt)}
.eyebrow{font-size:.76rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;
  color:var(--gold);margin-bottom:.7rem}
.h2{font-size:clamp(1.6rem,1.3rem+1.5vw,2.5rem);font-weight:640;margin-bottom:.9rem}
.section__lede{color:var(--soft);max-width:56ch;margin-bottom:2.75rem}
.center .section__lede{margin-inline:auto}
.body{color:var(--soft);max-width:56ch}

/* course cards */
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,18.5rem),1fr));gap:1.1rem}
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);
  padding:1.6rem;display:flex;flex-direction:column;
  transition:transform .25s var(--ease),box-shadow .25s var(--ease),border-color .25s var(--ease)}
.card:hover{transform:translateY(-4px);border-color:rgba(15,92,74,.35);
  box-shadow:0 1px 2px rgba(20,18,25,.04),0 16px 34px -18px rgba(20,18,25,.22)}
.card__icon{display:grid;place-items:center;width:2.5rem;height:2.5rem;border-radius:11px;
  background:var(--wash);color:var(--brand);margin-bottom:1rem}
.card__code{font-size:.76rem;font-weight:650;letter-spacing:.1em;text-transform:uppercase;
  color:var(--gold);margin-bottom:.35rem}
.card__name{font-size:1.16rem;font-weight:600;margin-bottom:.6rem}
.card__body{font-size:.93rem;color:var(--soft);line-height:1.6;margin-bottom:1.1rem}
.chips{list-style:none;display:flex;flex-wrap:wrap;gap:.4rem;margin:auto 0 0;padding:0}
.chips li{font-size:.76rem;padding:.25rem .65rem;border-radius:999px;background:var(--alt);
  color:var(--soft);border:1px solid var(--line)}
.card--cta{background:linear-gradient(160deg,var(--brand),var(--brand-2));border-color:transparent;color:#fff}
.card--cta .card__name{color:#fff}
.card--cta .card__body{color:rgba(255,255,255,.85)}
.card--cta .btn{margin-top:auto;align-self:flex-start;background:#fff;color:var(--brand);border-color:#fff}
.card--cta:hover{transform:translateY(-4px)}

/* about */
.about{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,1fr);gap:clamp(2rem,5vw,4rem);align-items:start}
@media(max-width:56rem){.about{grid-template-columns:1fr}}
.ticks{list-style:none;margin:1.8rem 0 0;padding:0;display:grid;gap:.85rem}
.ticks li{display:flex;gap:.65rem;align-items:flex-start;font-size:.95rem;color:var(--soft)}
.ticks svg{color:var(--brand);flex:none;margin-top:.18rem}
.profile{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:1.8rem}
.profile__mark{display:grid;place-items:center;width:4rem;height:4rem;border-radius:14px;
  background:var(--brand);color:#fff;font-size:1.25rem;font-weight:650;margin-bottom:1.1rem}
.profile__name{font-size:1.2rem;font-weight:620}
.profile__role{font-size:.9rem;color:var(--faint);margin-bottom:1.4rem}
.profile__facts{margin:0;display:grid;gap:1rem}
.profile__facts dt{display:flex;align-items:center;gap:.4rem;font-size:.75rem;letter-spacing:.1em;
  text-transform:uppercase;color:var(--faint);margin-bottom:.15rem}
.profile__facts dd{margin:0;font-size:.93rem}

/* steps */
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,15.5rem),1fr));gap:1.6rem}
.step__n{font-size:.8rem;font-weight:650;letter-spacing:.1em;color:var(--gold)}
.step__title{font-size:1.08rem;font-weight:610;margin:.5rem 0 .45rem}
.step__body{font-size:.93rem;color:var(--soft);line-height:1.6}

/* faq */
.faqs{border-top:1px solid var(--line)}
.faq{border-bottom:1px solid var(--line)}
.faq__q{width:100%;display:flex;justify-content:space-between;align-items:center;gap:1rem;
  background:none;border:0;padding:1.15rem 0;text-align:left;cursor:pointer;
  font-size:1.02rem;font-weight:570;color:var(--ink)}
.faq__q:hover{color:var(--brand)}
.faq__sign{font-size:1.3rem;color:var(--brand);flex:none;line-height:1}
.faq__a{font-size:.95rem;color:var(--soft);max-width:60ch;padding-bottom:1.2rem;margin:0}

/* contact + footer */
.contact{background:var(--bg)}
.socials{display:flex;justify-content:center;gap:1rem;margin-top:2.2rem}
.socials a{display:grid;place-items:center;width:2.7rem;height:2.7rem;border-radius:50%;
  border:1px solid var(--line);background:var(--surface);color:var(--soft);
  transition:color .2s var(--ease),border-color .2s var(--ease),transform .2s var(--ease)}
.socials a:hover{color:var(--brand);border-color:var(--brand);transform:translateY(-2px)}
.footer{border-top:1px solid var(--line);padding:2rem 0;font-size:.88rem;color:var(--faint)}
.footer__inner{display:flex;justify-content:space-between;flex-wrap:wrap;gap:.5rem}
.footer p{margin:0}

@media(prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{transition-duration:.01ms!important;animation-duration:.01ms!important}
}
`;
