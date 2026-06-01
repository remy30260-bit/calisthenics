/* global React, Ic, PILLARS, TESTIMONIALS */
// ============================================================
// La méthode (principes) · Témoignages
// ============================================================

function Methode() {
  return (
    <section id="methode" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">/ La méthode</div>
          <h2 className="display">Conçu pour les<br />vrais débutants.</h2>
          <p>Calisthenics 12S est auto-guidé : pas de coach à suivre, juste quatre principes qui rendent
            chaque séance sûre, faisable et mesurable.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16 }}>
          {PILLARS.map((p, i) => {
            const IcEl = Ic[p.icon];
            return (
              <div key={i} className="card reveal" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 15, display: "grid", placeItems: "center",
                  background: "var(--accent-glow)", color: "var(--accent)" }}>
                  <IcEl width="26" height="26" />
                </div>
                <div className="display" style={{ fontSize: 22, marginTop: 4 }}>{p.title}</div>
                <p style={{ color: "var(--ink-2)", fontSize: 14.5 }}>{p.text}</p>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", marginTop: "auto" }}>0{i + 1}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="section-head reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: "none", flexWrap: "wrap", gap: 24 }}>
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow">/ Ils l'ont fait</div>
            <h2 className="display" style={{ fontSize: "clamp(38px,6vw,72px)" }}>De zéro à<br />fier de soi.</h2>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center", color: "var(--accent)" }}>
            {[0, 1, 2, 3, 4].map((i) => <Ic.star key={i} width="22" height="22" />)}
            <span className="mono" style={{ fontSize: 12, color: "var(--ink-2)", marginLeft: 8 }}>4,9 / 5 · 2 800 avis</span>
          </div>
        </div>
        <div style={{ columnWidth: 320, columnGap: 16 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card reveal" style={{ padding: 26, marginBottom: 16, breakInside: "avoid", display: "inline-block", width: "100%" }}>
              <div className="tag tag-accent" style={{ fontSize: 10, marginBottom: 14 }}>{t.stat}</div>
              <p style={{ fontSize: 17, lineHeight: 1.5, color: "var(--ink)", textWrap: "pretty" }}>« {t.quote} »</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
                <div className="ph" style={{ width: 40, height: 40, borderRadius: 999, flex: "none" }}><span style={{ border: "none", padding: 0, background: "none", fontSize: 9 }}>photo</span></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-3)" }}>{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Methode, Testimonials });
