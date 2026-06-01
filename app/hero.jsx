/* global React, Ic */
// ============================================================
// Nav · Hero · Aperçu de l'app (écran réel, clair) en FR
// ============================================================
const { useState, useEffect } = React;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

// ---------- NAV ----------
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll); onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="wrap nav-inner">
        <a className="logo" href="#top">
          <span className="mark"><Ic.bolt width="18" height="18" /></span>
          CALISTHENICS <span style={{ color: "var(--accent)" }}>12S</span>
        </a>
        <div className="nav-links">
          <a className="hide-sm" href="#programme">Programme</a>
          <a className="hide-sm" href="#suivi">Suivi</a>
          <a className="hide-sm" href="#parcours">Parcours</a>
          <a className="hide-sm" href="#methode">Méthode</a>
          <a className="hide-sm" href="#tarifs">Tarifs</a>
          <a className="btn btn-accent" style={{ padding: "11px 20px", fontSize: 14 }} href="#tarifs">Télécharger</a>
        </div>
      </div>
    </nav>
  );
}

// ---------- APERÇU APP — écran d'accueil réel (clair) ----------
function PhonePreview() {
  const sessions = [
    { day: "Lundi", sub: "Full Body A · Force & Technique", ic: "grip" },
    { day: "Mercredi", sub: "Full Body B · Force + Core", ic: "target" },
    { day: "Vendredi", sub: "Full Body C · Cardio + Volume", ic: "pulse" },
  ];
  const [done, setDone] = useState([true, false, false]);
  const count = done.filter(Boolean).length;
  return (
    <div className="phone-screen app-light">
      <div className="phone-notch" />
      {/* top bar */}
      <div style={{ padding: "46px 18px 0" }}>
        <div style={{ fontWeight: 800, fontSize: 21, color: "#1A2332", letterSpacing: "-0.3px" }}>Bonne séance 💪</div>
        <div style={{ color: "#6B7A99", fontSize: 12.5, marginTop: 2 }}>mardi 31 mai · Semaine 3</div>
      </div>
      {/* phase hero */}
      <div style={{ margin: "12px 16px 0", borderRadius: 16, padding: "16px 18px", color: "#fff", position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg,#143F72,#1E5FA8)" }}>
        <div style={{ position: "absolute", top: -24, right: -24, width: 90, height: 90, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
        <div className="mono" style={{ fontSize: 9.5, opacity: 0.85, letterSpacing: "0.1em" }}>PHASE ACTUELLE</div>
        <div style={{ fontWeight: 900, fontSize: 26, marginTop: 2 }}>Phase 1</div>
        <div style={{ fontSize: 12.5, opacity: 0.85 }}>Adaptation &amp; Technique</div>
        <div style={{ marginTop: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 4 }}>
            <span style={{ opacity: 0.85 }}>Semaine 3 / 12</span><span style={{ fontWeight: 800 }}>17%</span>
          </div>
          <div style={{ height: 6, borderRadius: 20, background: "rgba(255,255,255,0.25)", overflow: "hidden" }}>
            <div style={{ height: "100%", width: "17%", background: "#fff", borderRadius: 20 }} />
          </div>
        </div>
      </div>
      {/* stat row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 7, margin: "10px 16px 0" }}>
        {[[`${count}/3`, "Séances"], ["S3", "Semaine"], ["2", "Sem. complètes"]].map(([v, l], i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "10px 6px", textAlign: "center", boxShadow: "0 2px 10px rgba(30,60,120,.08)" }}>
            <div style={{ fontWeight: 800, fontSize: 19, color: "#1E5FA8" }}>{v}</div>
            <div style={{ fontSize: 9, color: "#6B7A99", marginTop: 1 }}>{l}</div>
          </div>
        ))}
      </div>
      {/* sessions */}
      <div style={{ padding: "14px 16px 0" }}>
        <div className="mono" style={{ fontSize: 9.5, color: "#6B7A99", letterSpacing: "0.1em", marginBottom: 8 }}>SÉANCES DE LA SEMAINE</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {sessions.map((s, i) => {
            const IcEl = Ic[s.ic];
            return (
              <button key={i} onClick={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))}
                style={{ display: "flex", alignItems: "center", gap: 11, padding: "12px 13px", borderRadius: 14, textAlign: "left",
                  background: "linear-gradient(135deg,#143F72,#1E5FA8)", boxShadow: "0 4px 14px rgba(30,60,120,.18)" }}>
                <div style={{ width: 38, height: 38, borderRadius: 11, flex: "none", display: "grid", placeItems: "center",
                  background: "rgba(255,255,255,0.22)", color: "#fff" }}>
                  {done[i] ? <Ic.check width="20" height="20" /> : <IcEl width="19" height="19" />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 13.5, color: "#fff" }}>{s.day}</div>
                  <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.8)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.sub}</div>
                  {done[i] && <span style={{ display: "inline-block", marginTop: 4, fontSize: 9, fontWeight: 800, color: "#0F5C34", background: "rgba(255,255,255,0.85)", padding: "2px 7px", borderRadius: 20 }}>✓ FAITE</span>}
                </div>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 18 }}>›</span>
              </button>
            );
          })}
        </div>
      </div>
      {/* fake bottom nav */}
      <div style={{ marginTop: "auto", display: "flex", borderTop: "1px solid #E2E8F4", background: "#fff", paddingBottom: 6 }}>
        {[["home", "Accueil", true], ["cal", "Programme", false], ["pulse", "Suivi", false], ["target", "Profil", false]].map(([ic, l, on], i) => {
          const IcEl = Ic[ic];
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "9px 0", color: on ? "#1E5FA8" : "#6B7A99" }}>
              <IcEl width="19" height="19" />
              <span style={{ fontSize: 8.5, fontWeight: 600 }}>{l}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------- HERO ----------
function Hero({ layout }) {
  const centered = layout === "centered";
  return (
    <header id="top" className="section" style={{ paddingTop: 150, paddingBottom: 70, overflow: "hidden" }}>
      <div className="glow" style={{ width: 520, height: 520, background: "var(--accent)", opacity: 0.16, top: -160, right: centered ? "50%" : -80, transform: centered ? "translateX(50%)" : "none" }} />
      <div className="glow" style={{ width: 380, height: 380, background: "#1E5FA8", opacity: 0.16, bottom: -120, left: -60 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: centered ? "1fr" : "minmax(0,1.05fr) minmax(0,0.95fr)", gap: 56, alignItems: "center", textAlign: centered ? "center" : "left" }}>
          <div style={{ maxWidth: centered ? 880 : "none", margin: centered ? "0 auto" : 0 }}>
            <div className="tag tag-accent reveal in" style={{ marginBottom: 22 }}>
              <Ic.home width="13" height="13" /> Sans salle · Sans matériel · 12 semaines
            </div>
            <h1 className="display" style={{ fontSize: "clamp(46px, 8.4vw, 108px)" }}>
              Pars de<br />zéro.<br />
              <span style={{ color: "var(--accent)" }}>Deviens<br />une machine.</span>
            </h1>
            <p style={{ color: "var(--ink-2)", fontSize: 20, marginTop: 26, maxWidth: "54ch", marginInline: centered ? "auto" : 0 }}>
              Calisthenics 12S transforme les vrais débutants en 12 semaines : trois phases, des séances
              guidées et des progressions douces pour les genoux. De ta première pompe à ta première traction.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap", justifyContent: centered ? "center" : "flex-start" }}>
              <a className="btn btn-accent" href="#tarifs">Essayer 7 jours gratuits <Ic.arrow width="18" height="18" /></a>
              <a className="btn btn-ghost" href="#suivi"><Ic.play width="16" height="16" /> Voir comment ça marche</a>
            </div>
            <div style={{ display: "flex", gap: 28, marginTop: 40, flexWrap: "wrap", justifyContent: centered ? "center" : "flex-start" }}>
              {[["12", "Semaines guidées"], ["3", "Phases progressives"], ["0", "Équipement requis"]].map(([a, b], i) => (
                <div key={i}>
                  <div className="display" style={{ fontSize: 34, color: "var(--ink)" }}>{a}</div>
                  <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", marginTop: 2 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
          {!centered && (
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div className="glow" style={{ width: 320, height: 320, background: "var(--accent)", opacity: 0.18, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
              <div className="phone" style={{ position: "relative" }}><PhonePreview /></div>
            </div>
          )}
        </div>
        {centered && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 64 }}>
            <div className="phone"><PhonePreview /></div>
          </div>
        )}
      </div>
    </header>
  );
}

window.useReveal = useReveal;
Object.assign(window, { Nav, Hero, PhonePreview });
