/* global React, Ic, PLANS */
// ============================================================
// Tarifs (toggle mensuel/annuel) · CTA final · Footer
// ============================================================
const { useState: useStatePr } = React;

function Pricing() {
  const [yearly, setYearly] = useStatePr(true);
  return (
    <section id="tarifs" className="section">
      <div className="glow" style={{ width: 480, height: 480, background: "var(--accent)", opacity: 0.1, top: 40, left: "50%", transform: "translateX(-50%)" }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-head reveal" style={{ textAlign: "center", margin: "0 auto 36px" }}>
          <div className="eyebrow">/ Tarifs</div>
          <h2 className="display">Commence aujourd'hui.</h2>
          <p style={{ marginInline: "auto" }}>Essai 7 jours sur le plan Pro. Annule en un tap, sans condition.</p>
        </div>

        {/* toggle */}
        <div className="reveal" style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 4, background: "var(--surface-2)", border: "1px solid var(--line-2)", borderRadius: 999, padding: 4 }}>
            {[["Mensuel", false], ["Annuel · -33%", true]].map(([label, val], i) => (
              <button key={i} onClick={() => setYearly(val)}
                style={{ padding: "10px 22px", borderRadius: 999, fontWeight: 800, fontSize: 14, letterSpacing: "0.01em",
                  background: yearly === val ? "var(--accent)" : "transparent", color: yearly === val ? "var(--accent-ink)" : "var(--ink-2)", transition: "all .2s" }}>{label}</button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20, alignItems: "start" }}>
          {PLANS.map((plan) => {
            const price = yearly ? plan.price.yr : plan.price.mo;
            return (
              <div key={plan.id} className="card reveal" style={{ padding: 30, position: "relative", display: "flex", flexDirection: "column",
                background: plan.best ? "var(--accent)" : "var(--surface)",
                color: plan.best ? "var(--accent-ink)" : "var(--ink)",
                borderColor: plan.best ? "var(--accent)" : "var(--line)",
                transform: plan.best ? "scale(1.03)" : "none", zIndex: plan.best ? 2 : 1,
                boxShadow: plan.best ? "0 30px 70px -25px var(--accent-glow)" : "none" }}>
                {plan.best && <div className="mono" style={{ position: "absolute", top: 18, right: 18, fontSize: 9, padding: "5px 10px", borderRadius: 999, background: "var(--accent-ink)", color: "var(--accent)" }}>LE PLUS POPULAIRE</div>}
                <div style={{ fontWeight: 900, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.08em" }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 14 }}>
                  <span className="display" style={{ fontSize: 56 }}>{price === 0 ? "0" : price}</span>
                  <span style={{ fontWeight: 800, fontSize: 18 }}>€</span>
                  <span style={{ fontSize: 13, opacity: 0.7, marginLeft: 2 }}>{price === 0 ? "pour toujours" : "/ mois"}</span>
                </div>
                {yearly && price > 0 && <div className="mono" style={{ fontSize: 10, marginTop: 4, opacity: 0.7 }}>FACTURÉ {price * 12} € / AN</div>}
                <p style={{ fontSize: 14, marginTop: 14, opacity: plan.best ? 0.78 : 1, color: plan.best ? "inherit" : "var(--ink-2)", minHeight: 42 }}>{plan.blurb}</p>
                <a className={"btn " + (plan.best ? "btn-ghost" : "btn-accent")} href="#" style={{ width: "100%", justifyContent: "center", marginTop: 6,
                  ...(plan.best ? { background: "var(--accent-ink)", color: "var(--accent)", border: "none" } : {}) }}>{plan.cta}</a>
                <div style={{ display: "flex", flexDirection: "column", gap: 11, marginTop: 24 }}>
                  {plan.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14 }}>
                      <span style={{ flex: "none", marginTop: 1, color: plan.best ? "var(--accent-ink)" : "var(--accent)" }}><Ic.check width="17" height="17" /></span>
                      <span>{f}</span>
                    </div>
                  ))}
                  {plan.muted.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, opacity: 0.45 }}>
                      <span style={{ flex: "none", marginTop: 1 }}><Ic.lock width="15" height="15" /></span>
                      <span style={{ textDecoration: "line-through" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="reveal" style={{ position: "relative", overflow: "hidden", borderRadius: 32, padding: "clamp(40px,7vw,90px) clamp(28px,6vw,80px)",
          background: "linear-gradient(135deg, var(--surface), var(--bg-2))", border: "1px solid var(--line-2)" }}>
          <div className="glow" style={{ width: 420, height: 420, background: "var(--accent)", opacity: 0.22, top: -120, right: -80 }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 760 }}>
            <h2 className="display" style={{ fontSize: "clamp(40px,7vw,88px)" }}>Ta semaine 1<br />commence <span style={{ color: "var(--accent)" }}>maintenant.</span></h2>
            <p style={{ color: "var(--ink-2)", fontSize: 19, marginTop: 22, maxWidth: "48ch" }}>
              Télécharge Calisthenics 12S, fais le test initial, et laisse les chiffres parler dans 12 semaines.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
              <a className="btn btn-accent" href="#" style={{ fontSize: 17, padding: "18px 30px" }}>Essayer 7 jours gratuits <Ic.arrow width="19" height="19" /></a>
              <a className="btn btn-ghost" href="#programme">Revoir le programme</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    ["Produit", ["Programme", "Suivi", "Parcours", "Tarifs"]],
    ["Méthode", ["Anti-douleur genou", "Sans matériel", "Tests mesurables", "Nutrition"]],
    ["Aide", ["FAQ", "Contact", "Communauté", "Confidentialité"]],
  ];
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "64px 0 40px" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, flexWrap: "wrap" }} className="footer-grid">
          <div>
            <a className="logo" href="#top"><span className="mark"><Ic.bolt width="18" height="18" /></span>CALISTHENICS <span style={{ color: "var(--accent)" }}>12S</span></a>
            <p style={{ color: "var(--ink-3)", fontSize: 14, marginTop: 16, maxWidth: "34ch" }}>Le programme calisthénie 12 semaines pour vrais débutants. Chez toi, sans matériel.</p>
          </div>
          {cols.map(([head, links], i) => (
            <div key={i}>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", marginBottom: 16 }}>{head}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {links.map((l, j) => <a key={j} href="#" style={{ color: "var(--ink-2)", fontSize: 14 }}>{l}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 56, paddingTop: 24, borderTop: "1px solid var(--line)", flexWrap: "wrap", gap: 12 }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>© 2026 CALISTHENICS 12S</span>
          <span style={{ fontSize: 12.5, color: "var(--ink-3)" }}>Douleur articulaire persistante ? Consulte un professionnel.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Pricing, FinalCTA, Footer });
