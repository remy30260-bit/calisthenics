/* global React, Ic, PHASES */
// ============================================================
// Le programme — onglets par phase, séances réelles
// ============================================================
const { useState: useStateP } = React;

function SessionCard({ s, accent }) {
  const IcEl = Ic[s.ic || "grip"];
  return (
    <div className="card reveal" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div className="ph" style={{ aspectRatio: "16/9" }}>
        <span>photo séance · {s.day.toLowerCase()}</span>
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <span className="tag tag-accent" style={{ fontSize: 10 }}>{s.day}</span>
        </div>
        <button style={{ position: "absolute", bottom: 12, right: 12, width: 42, height: 42, borderRadius: 999,
          background: "var(--accent)", color: "var(--accent-ink)", display: "grid", placeItems: "center",
          boxShadow: "0 8px 24px -6px var(--accent-glow)" }}>
          <Ic.play width="18" height="18" />
        </button>
      </div>
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontWeight: 900, fontSize: 21, letterSpacing: "-0.01em" }}>{s.title}</div>
        <div className="mono" style={{ fontSize: 10.5, color: "var(--accent)", marginTop: 5 }}>{s.focus}</div>
        <p style={{ color: "var(--ink-2)", fontSize: 14, marginTop: 12, flex: 1 }}>{s.goal}</p>
        <div style={{ display: "flex", gap: 14, marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--line)", color: "var(--ink-2)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}><Ic.clock width="15" height="15" /> {s.dur} min</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}><Ic.grip width="15" height="15" /> {s.ex} exos</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, marginLeft: "auto" }}><Ic.flame width="15" height="15" /> RPE {s.rpe}</span>
        </div>
      </div>
    </div>
  );
}

function Programme() {
  const [tab, setTab] = useStateP(0);
  const phase = PHASES[tab];
  return (
    <section id="programme" className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="section-head reveal" style={{ marginBottom: 36 }}>
          <div className="eyebrow">/ Le programme</div>
          <h2 className="display">12 semaines.<br />3 phases. Zéro impro.</h2>
          <p>Trois séances full-body par semaine — lundi, mercredi, vendredi. Chacune est guidée du premier
            échauffement au dernier étirement, avec une alternative genou pour chaque exercice.</p>
        </div>

        {/* onglets de phase */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
          {PHASES.map((p, i) => {
            const active = i === tab;
            return (
              <button key={p.id} onClick={() => setTab(i)}
                style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2, padding: "12px 20px", borderRadius: 16,
                  background: active ? "var(--accent)" : "var(--surface-2)", color: active ? "var(--accent-ink)" : "var(--ink-2)",
                  border: "1px solid " + (active ? "var(--accent)" : "var(--line-2)"), transition: "all .2s var(--ease)", textAlign: "left" }}>
                <span style={{ fontWeight: 900, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.02em" }}>{p.label}</span>
                <span className="mono" style={{ fontSize: 9.5, opacity: 0.85 }}>{p.weeks}</span>
              </button>
            );
          })}
        </div>

        {/* bandeau phase */}
        <div key={phase.id + "h"} className="reveal in" style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap", margin: "10px 0 26px" }}>
          <div className="display" style={{ fontSize: 28, color: "var(--accent)" }}>{phase.name}</div>
          <p style={{ color: "var(--ink-3)", fontSize: 15, maxWidth: "52ch" }}>{phase.blurb}</p>
        </div>

        {/* séances */}
        <div key={phase.id} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
          {phase.sessions.map((s, i) => <SessionCard key={s.day + phase.id} s={{ ...s, ic: ["grip", "target", "pulse"][i] }} />)}
        </div>

        {/* bandeau "jour difficile" */}
        <div className="card reveal" style={{ marginTop: 22, padding: "22px 26px", display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", background: "var(--surface)" }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, flex: "none", display: "grid", placeItems: "center", background: "var(--accent-glow)", color: "var(--accent)" }}>
            <Ic.bolt width="24" height="24" />
          </div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ fontWeight: 800, fontSize: 17 }}>Pas le temps ? Option « jour difficile »</div>
            <div style={{ color: "var(--ink-2)", fontSize: 14, marginTop: 3 }}>Une version express de 15–20 min pour ne jamais casser la série.</div>
          </div>
          <span className="tag" style={{ color: "var(--accent)", borderColor: "var(--accent)" }}>15–20 MIN</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Programme });
