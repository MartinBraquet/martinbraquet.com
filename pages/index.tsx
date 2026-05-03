import { useEffect, useRef, useState } from "react"

const EMAIL = "martin.braquet@gmail.com"

const PUBLICATIONS = [
  {
    year: "2022",
    title: "Decentralized Auction-based Task Allocation with Guaranteed Collision Avoidance in Dynamic Environments",
    venue: "MSc Thesis · UT Austin",
    supervisor: "Supervised by Efstathios Bakolas",
    pdf: "https://martinbraquet.com/wp-content/uploads/Masters_Report_UT_Austin___Martin_Braquet.pdf",
    url: "https://repositories.lib.utexas.edu/handle/2152/117128",
    tag: "Thesis",
  },
  {
    year: "2022",
    title: "Vector Field-based Collision Avoidance for Moving Obstacles with Time-Varying Shape",
    venue: "Modeling, Estimation and Control Conference (MECC)",
    supervisor: "Braquet, M. and Bakolas E.",
    pdf: "https://martinbraquet.com/wp-content/uploads/braquet_2022.pdf",
    url: "https://www.sciencedirect.com/science/article/pii/S2405896322028890",
    tag: "Conference",
  },
  {
    year: "2021",
    title: "Greedy Decentralized Auction-based Task Allocation for Multi-Agent Systems",
    venue: "Modeling, Estimation and Control Conference (MECC)",
    supervisor: "Braquet, M. and Bakolas E.",
    pdf: "https://martinbraquet.com/wp-content/uploads/Greedy-Decentralized-Auction-based-Task-Allocation-for-Multi-Age_2021_IFAC-P.pdf",
    url: "https://www.sciencedirect.com/science/article/pii/S240589632102293X",
    tag: "Conference",
  },
  {
    year: "2020",
    title: "Design of an ultra-low-power energy-harvesting audio sensor for ecosystem monitoring",
    venue: "MSc Thesis · UCLouvain",
    supervisor: "Supervised by David Bol and Ramin Sadre",
    pdf: "https://martinbraquet.com/wp-content/uploads/EPL-master-thesis-Martin-Braquet.pdf",
    url: "https://dial.uclouvain.be/memoire/ucl/object/thesis:25100",
    tag: "Thesis",
  },
];

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/martin-braquet/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/MartinBraquet",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  // {
  //   label: "Scholar",
  //   href: "https://scholar.google.com/citations?user=thzpnRoAAAAJ",
  //   icon: (
  //     <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
  //       <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 10a8 8 0 017.162 3.44L24 9.5 12 0z"/>
  //     </svg>
  //   ),
  // },
];

function SocialButtons({withEmail = false}: {withEmail?: boolean}) {
  return <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", animation: "fadeUp 0.55s 0.24s ease both" }}>
    {SOCIAL.map((s) => (
      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn">
        {s.icon} {s.label}
      </a>
    ))}
    {withEmail && <a href={`mailto:${EMAIL}`} className="social-btn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
      Email
    </a>}
  </div>
}

export default function MartinBraquet() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredPub, setHoveredPub] = useState<number | null>(null);
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
          }
        }),
      { threshold: 0.08 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const rs = {
    opacity: 0,
    transform: "translateY(28px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  let _ri = 0;
  const R = () => {
    const i = _ri++;
    return { ref: (el: any) => { revealRefs.current[i] = el; }, style: rs };
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#faf6f0", color: "#1e1a14", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp   { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:none } }
        @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
        @keyframes drift    { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes scanline { 0% { top: -20% } 100% { top: 110% } }

        .nav-link {
          font-size: 0.72rem; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase; color: #7a7060; text-decoration: none;
          transition: color 0.2s; padding-bottom: 2px;
          border-bottom: 1px solid transparent;
        }
        .nav-link:hover, .nav-link.active { color: #1e1a14; border-bottom-color: #8B0000; }

        .pill-label {
          display: inline-block; font-size: 0.62rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 0.28rem 0.7rem; border-radius: 100px;
        }
        .pill-thesis   { background: rgba(139,0,0,0.1); color: #8B0000; }
        .pill-conf     { background: rgba(139,0,0,0.07); color: #9b4444; border: 1px solid rgba(139,0,0,0.15); }

        .pub-card {
          background: #fffef9; border: 1.5px solid #e8dece; border-radius: 18px;
          padding: 1.75rem 2rem;
          // cursor: pointer;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
          position: relative; overflow: hidden;
        }
        .pub-card:hover {
          border-color: rgba(139,0,0,0.35);
          box-shadow: 0 12px 36px rgba(139,0,0,0.08);
          transform: translateY(-3px);
        }
        // .pub-card::before {
        //   content: ''; position: absolute; left: 0; top: 0; bottom: 0;
        //   width: 3px; background: #8B0000; border-radius: 3px 0 0 3px;
        //   transform: scaleY(0); transform-origin: bottom;
        //   transition: transform 0.3s ease;
        // }
        // .pub-card:hover::before { transform: scaleY(1); }

        .link-inline {
          color: #8B0000; text-decoration: none; font-weight: 500;
          border-bottom: 1px solid rgba(139,0,0,0.25);
          transition: border-color 0.2s;
        }
        .link-inline:hover { border-color: #8B0000; }

        .link-ghost {
          color: #7a7060; text-decoration: none;
          border-bottom: 1px solid rgba(122,112,96,0.25);
          transition: color 0.2s, border-color 0.2s;
        }
        .link-ghost:hover { color: #1e1a14; border-color: #7a7060; }

        .btn-primary {
          display: inline-block; background: #8B0000; color: #faf6f0;
          border: none; border-radius: 100px; padding: 14px 30px;
          font-size: 0.85rem; font-weight: 500; letter-spacing: 0.04em;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          background: #700000;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(139,0,0,0.25);
        }

        .btn-outline {
          display: inline-block; background: transparent; color: #1e1a14;
          border: 1.5px solid #c8b89a; border-radius: 100px;
          padding: 13px 29px; font-size: 0.85rem; font-weight: 500;
          letter-spacing: 0.04em; cursor: pointer; text-decoration: none;
          transition: all 0.2s;
        }
        .btn-outline:hover { border-color: #1e1a14; background: rgba(30,26,20,0.04); }

        .social-btn {
          display: flex; align-items: center; gap: 0.55rem;
          padding: 0.6rem 1.1rem; border-radius: 100px;
          border: 1px solid #e8dece; background: #fffef9;
          color: #7a7060; text-decoration: none; font-size: 0.8rem;
          font-weight: 500; transition: all 0.2s;
        }
        .social-btn:hover {
          border-color: rgba(139,0,0,0.3); color: #8B0000;
          background: rgba(139,0,0,0.04);
          box-shadow: 0 4px 12px rgba(139,0,0,0.07);
        }

        .section-label {
          font-size: 0.65rem; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: #8B0000;
          display: block; margin-bottom: 0.65rem;
        }

        .card-box {
          background: #fffef9; border: 1px solid #e8dece; border-radius: 20px;
          padding: 2rem; transition: box-shadow 0.2s, transform 0.2s;
        }
        .card-box:hover {
          box-shadow: 0 12px 32px rgba(30,26,20,0.07);
          transform: translateY(-3px);
        }

        .divider { height: 1px; background: #e8dece; margin: 0 2.5rem; }

        @media (max-width: 768px) {
          .two-col   { flex-direction: column !important; }
          .pub-links { flex-wrap: wrap !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(250,246,240,0.95)" : "rgba(250,246,240,0.8)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? "#e8dece" : "transparent"}`,
        padding: "0 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 62, transition: "all 0.3s",
      }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1rem", fontWeight: 700, color: "#1e1a14",
            letterSpacing: "-0.01em",
          }}>
            Martin <span style={{ color: "#8B0000" }}>Braquet</span>
          </span>
        </a>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[["#about", "About"], ["#academia", "Academia"], ["#publications", "Publications"], ["#contact", "Contact"]].map(([href, label]) => (
            <a key={label} href={href} className="nav-link"
               onClick={(e) => {
                 e.preventDefault();
                 document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
               }}
            >{label}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "92vh", padding: "0 2.5rem",
        display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background atmosphere */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 55% 50% at 85% 15%, rgba(139,0,0,0.07) 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 5% 85%, rgba(196,154,114,0.1) 0%, transparent 55%)",
        }} />

        {/* Decorative large letter */}
        <div style={{
          position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)",
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(14rem, 22vw, 26rem)",
          fontWeight: 700, color: "rgba(139,0,0,0.045)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none",
          animation: "drift 7s ease-in-out infinite",
        }}>B</div>

        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div style={{ maxWidth: 720 }}>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem", animation: "fadeUp 0.5s ease both" }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#8B0000", animation: "fadeIn 1s 0.8s ease both",
              }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#bab2a0" }}>
                Personal Website
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 1.0, fontWeight: 700, color: "#1e1a14",
              marginBottom: "1rem",
              animation: "fadeUp 0.55s 0.08s ease both",
            }}>
              Martin<br />
              <span style={{ color: "#8B0000" }}>Braquet</span>
            </h1>

            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
              lineHeight: 1.75, color: "#7a7060",
              fontStyle: "italic", fontWeight: 400,
              maxWidth: 560, marginBottom: "3rem",
              animation: "fadeUp 0.55s 0.16s ease both",
            }}>
              "What's here reflects pieces of me, but not the full constellation. Explore as you like; fill in the gaps at your own risk."
            </p>

            <SocialButtons withEmail />
          </div>
        </div>

        {/* Scroll hint */}
        {/*<div style={{*/}
        {/*  position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",*/}
        {/*  display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",*/}
        {/*  animation: "fadeIn 1s 1s ease both",*/}
        {/*}}>*/}
        {/*  <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, transparent, #c8b89a)" }} />*/}
        {/*  <span style={{ fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#bab2a0" }}>Scroll</span>*/}
        {/*</div>*/}
      </section>

      <div className="divider" />

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "90px 2.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "flex", gap: "5rem", alignItems: "flex-start" }}>

            {/* Left text */}
            <div {...R()} style={{ flex: "1 1 420px" }}>
              <span className="section-label">About</span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                fontWeight: 700, color: "#1e1a14", lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}>
                Personal Life
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "#7a7060", marginBottom: "1.75rem" }}>
                To find out who I am as a person, feel free to explore my Compass profile — a space designed for deeper connection.
              </p>
              <a href="https://compassmeet.com/Martin" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Compass Profile →
              </a>
              {/*<div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #e8dece" }}>*/}
              {/*  <p style={{ fontSize: "0.9rem", color: "#7a7060", lineHeight: 1.75, marginBottom: "1.25rem" }}>*/}
              {/*    Interested in forming a genuine connection? Learn more about me and reach out directly.*/}
              {/*  </p>*/}
              {/*  <a href="https://forms.gle/8LvKnRcXjYri2qZT6" target="_blank" rel="noopener noreferrer" className="btn-outline">*/}
              {/*    Connect with Martin*/}
              {/*  </a>*/}
              {/*</div>*/}
            </div>

            {/* Right — identity card */}
            {/*<div {...R()} style={{ flex: "1 1 360px" }}>*/}
            {/*  <IdentityCard email={EMAIL} />*/}
            {/*</div>*/}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── ACADEMIA ── */}
      <section id="academia" style={{ padding: "90px 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div {...R()} style={{ ...rs, marginBottom: "3.5rem" }}>
            <span className="section-label">Academia</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              fontWeight: 700, color: "#1e1a14", lineHeight: 1.15, marginBottom: "0.75rem",
            }}>
              Research & Education
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#7a7060", maxWidth: 540, lineHeight: 1.8 }}>
              Trained across engineering and sciences, with graduate research spanning task allocation, controls, and energy-efficient sensing.
            </p>
          </div>

          <div className="two-col" style={{ display: "flex", gap: "1.5rem", marginBottom: "4rem" }}>
            {[
              {
                icon: "📄",
                label: "Curriculum Vitae",
                desc: "Full academic and professional record",
                href: "https://martinbraquet.com/wp-content/uploads/Braquet-Martin-cv-2026.pdf",
                cta: "Download PDF",
              },
              {
                icon: "📚",
                label: "Courses at University",
                desc: "Complete list of university courses followed",
                href: "/courses-university",
                cta: "View Courses",
              },
              {
                icon: "🎓",
                label: "Google Scholar",
                desc: "Citation metrics and paper index",
                href: "https://scholar.google.com/citations?user=thzpnRoAAAAJ",
                cta: "Open Scholar",
              },
            ].map((item, i) => (
              <div key={item.label} className="card-box" {...R()} style={{ flex: "1 1 220px" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{item.icon}</div>
                <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "#1e1a14", marginBottom: "0.35rem" }}>{item.label}</div>
                <div style={{ fontSize: "0.8rem", color: "#bab2a0", lineHeight: 1.6, marginBottom: "1.25rem" }}>{item.desc}</div>
                <a href={item.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.3rem",
                  fontSize: "0.78rem", fontWeight: 500, color: "#8B0000",
                  textDecoration: "none", letterSpacing: "0.04em",
                }}>
                  {item.cta} <span style={{ transition: "transform 0.2s" }}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PUBLICATIONS ── */}
      <section id="publications" style={{ padding: "90px 2.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div {...R()} style={{ ...rs, marginBottom: "3rem" }}>
            <span className="section-label">Research Output</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              fontWeight: 700, color: "#1e1a14", lineHeight: 1.15,
            }}>
              Publications
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {PUBLICATIONS.map((p, i) => (
              <div
                key={i}
                className="pub-card"
                {...R()}
                onMouseEnter={() => setHoveredPub(i)}
                onMouseLeave={() => setHoveredPub(null)}
              >
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                  <span className={`pill-label ${p.tag === "Thesis" ? "pill-thesis" : "pill-conf"}`}>
                    {p.tag}
                  </span>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem", color: "#bab2a0", fontWeight: 500,
                    lineHeight: 1.8,
                  }}>{p.year}</span>
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem", fontWeight: 600, color: "#1e1a14",
                  lineHeight: 1.4, marginBottom: "0.5rem",
                }}>
                  {p.title}
                </h3>

                <p style={{ fontSize: "0.82rem", color: "#7a7060", marginBottom: "0.3rem" }}>
                  <em>{p.venue}</em>
                </p>
                <p style={{ fontSize: "0.78rem", color: "#bab2a0", marginBottom: "1.25rem" }}>
                  {p.supervisor}
                </p>

                <div className="pub-links" style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <a href={p.pdf} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.35rem",
                    background: "rgba(139,0,0,0.08)", color: "#8B0000",
                    border: "1px solid rgba(139,0,0,0.18)", borderRadius: 100,
                    padding: "0.4rem 0.95rem", fontSize: "0.75rem", fontWeight: 500,
                    textDecoration: "none", transition: "all 0.2s",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    PDF
                  </a>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.35rem",
                    color: "#7a7060", fontSize: "0.75rem", fontWeight: 500,
                    textDecoration: "none", borderBottom: "1px solid #e8dece",
                    transition: "all 0.2s", paddingBottom: "1px",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Publication Page
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "90px 2.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="two-col" style={{ display: "flex", gap: "5rem", alignItems: "flex-start" }}>

            <div {...R()} style={{ flex: "1 1 400px" }}>
              <span className="section-label">Get in Touch</span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                fontWeight: 700, color: "#1e1a14", lineHeight: 1.15, marginBottom: "1.25rem",
              }}>
                Let's Connect
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "#7a7060", marginBottom: "2rem" }}>
                Whether you're curious about my research, interested in collaboration, or simply want to form a genuine connection — I'm reachable via any of the channels below.
              </p>

              <a href={`mailto:${EMAIL}`} style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                fontFamily: "'DM Mono', monospace", fontSize: "0.88rem",
                color: "#1e1a14", textDecoration: "none", marginBottom: "2.5rem",
                borderBottom: "1px solid #e8dece", paddingBottom: "1.5rem",
              }}>
                <span style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "rgba(139,0,0,0.08)", display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B0000" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                {EMAIL}
              </a>

              {/*<div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>*/}
              {/*  {SOCIAL.map((s) => (*/}
              {/*    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{*/}
              {/*      display: "flex", alignItems: "center", gap: "0.75rem",*/}
              {/*      padding: "0.9rem 1.25rem", borderRadius: 14,*/}
              {/*      border: "1px solid #e8dece", background: "#fffef9",*/}
              {/*      color: "#1e1a14", textDecoration: "none", fontSize: "0.88rem",*/}
              {/*      fontWeight: 500, transition: "all 0.2s",*/}
              {/*      cursor: "pointer",*/}
              {/*    }}*/}
              {/*       onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,0,0,0.3)"; e.currentTarget.style.background = "rgba(139,0,0,0.03)"; }}*/}
              {/*       onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8dece"; e.currentTarget.style.background = "#fffef9"; }}*/}
              {/*    >*/}
              {/*      <span style={{ color: "#8B0000" }}>{s.icon}</span>*/}
              {/*      {s.label}*/}
              {/*      <svg style={{ marginLeft: "auto", opacity: 0.3 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>*/}
              {/*    </a>*/}
              {/*  ))}*/}
              {/*</div>*/}

              <SocialButtons />
            </div>

            {/* CTA card */}
            <div {...R()} style={{ flex: "1 1 340px" }}>
              <div style={{
                background: "#8B0000", borderRadius: 24, padding: "2.75rem 2.5rem",
                color: "#faf6f0", position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
                <div style={{ position: "absolute", bottom: -40, left: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(0,0,0,0.1)" }} />

                <div style={{ position: "relative" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "1.25rem" }}>🤝</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                    Form a Deeper Connection
                  </h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "rgba(250,246,240,0.7)", marginBottom: "2rem" }}>
                    Interested in learning more about me beyond what's on this page? Fill in the form to connect more meaningfully.
                  </p>
                  <a href="https://forms.gle/8LvKnRcXjYri2qZT6" target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-block", background: "#faf6f0", color: "#8B0000",
                    borderRadius: 100, padding: "13px 26px", fontSize: "0.85rem",
                    fontWeight: 600, textDecoration: "none", transition: "all 0.2s",
                    letterSpacing: "0.02em",
                  }}>
                    Connect with Martin →
                  </a>
                </div>
              </div>

              {/* Study reference */}
              {/*<div style={{*/}
              {/*  marginTop: "1.5rem",*/}
              {/*  background: "#fffef9", border: "1px solid #e8dece", borderRadius: 18,*/}
              {/*  padding: "1.5rem",*/}
              {/*}}>*/}
              {/*  <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bab2a0", marginBottom: "0.5rem" }}>*/}
              {/*    Current Project*/}
              {/*  </div>*/}
              {/*  <p style={{ fontSize: "0.88rem", color: "#1e1a14", fontWeight: 500, lineHeight: 1.5, marginBottom: "0.75rem" }}>*/}
              {/*    Personalized Pre-Session Preparation in Early Autism Intervention*/}
              {/*  </p>*/}
              {/*  <p style={{ fontSize: "0.78rem", color: "#7a7060", lineHeight: 1.6, marginBottom: "1rem" }}>*/}
              {/*    An N-of-1 Bayesian adaptive trial at Maya Care & Grow, Agartala.*/}
              {/*  </p>*/}
              {/*  <a href="https://martinbraquet.com/autism-study" style={{*/}
              {/*    fontSize: "0.78rem", color: "#8B0000", fontWeight: 500,*/}
              {/*    textDecoration: "none", borderBottom: "1px solid rgba(139,0,0,0.25)",*/}
              {/*  }}>*/}
              {/*    View study site →*/}
              {/*  </a>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#1e1a14", padding: "3.5rem 2.5rem 2.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem", marginBottom: "2.5rem" }}>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#faf6f0", marginBottom: "0.4rem" }}>
                Martin <span style={{ color: "#c4706e" }}>Braquet</span>
              </div>
              <p style={{ fontSize: "0.78rem", color: "rgba(250,246,240,0.35)", lineHeight: 1.6 }}>
                Researcher · Engineer
              </p>
            </div>

            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {[
                ["About", "#about"],
                ["Academia", "#academia"],
                ["Publications", "#publications"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} style={{ fontSize: "0.75rem", color: "rgba(250,246,240,0.4)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
                   onMouseEnter={e => e.currentTarget.style.color = "rgba(250,246,240,0.8)"}
                   onMouseLeave={e => e.currentTarget.style.color = "rgba(250,246,240,0.4)"}
                >{label}</a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(250,246,240,0.07)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(250,246,240,0.25)", margin: 0 }}>
              © {new Date().getFullYear()} Martin Braquet
            </p>
            <div style={{ display: "flex", gap: "1.25rem" }}>
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(250,246,240,0.25)", textDecoration: "none", fontSize: "0.75rem", transition: "color 0.2s" }}
                   onMouseEnter={e => e.currentTarget.style.color = "rgba(250,246,240,0.65)"}
                   onMouseLeave={e => e.currentTarget.style.color = "rgba(250,246,240,0.25)"}
                >{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}