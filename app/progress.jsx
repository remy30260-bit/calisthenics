/* global React, Ic, BENCH, CHECKLIST, ROADMAP */
// ============================================================
// Suivi interactif (checklist + benchmarks scrubbables) + parcours
// ============================================================
const { useState: useStateS } = React;

function SuiviDemo() {
  const [items, setItems] = useStateS(() => CHECKLIST.map((_, i) => i < 5));
  const [week, setWeek] = useStateS(7);
  const doneCount = items.filter(Boolean).length;
  const chkPct = Math.round((doneCount / CHECKLIST.length) * 100);
  const streak = 2 + (chkPct === 100 ? 1 : 0);

  const isTest = [4, 8, 12].includes(week) || week === 0;

  return (
    <section id="suivi" className="section">
      <div className="glow" style={{ width: 420, height: 420, background: "var(--accent)", opacity: 0.08, top: 80, right: -120 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-head reveal" style={{ marginBottom: 40 }}>
          <div className="eyebrow">/ Mon suivi</div>
          <h2 className="display">Regarde-toi<br />devenir fort.</h2>
          <p>Coche ta semaine, fais glisser le curseur sur les 12 semaines — chaque test mesurable bouge sous tes yeux. Essaie.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, alignItems: "stretch" }}>
          {/* checklist hebdo */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div className="card" style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>CHECKLIST · SEMAINE 3</div>
                <div className="tag" style={{ borderColor: chkPct === 100 ? "var(--accent)" : "var(--line-2)", color: chkPct === 100 ? "var(--accent)" : "var(--ink-2)" }}>{doneCount}/{CHECKLIST.length}</div>
              </div>
              <div style={{ height: 8, borderRadius: 999, background: "var(--surface-3)", overflow: "hidden", marginBottom: 16 }}>
                <div style={{ height: "100%", width: chkPct + "%", background: "var(--accent)", borderRadius: 999, transition: "width .4s var(--ease)" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {CHECKLIST.map((label, i) => (
                  <button key={i} onClick={() => setItems((a) => a.map((v, j) => (j === i ? !v : v)))}
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 4px", textAlign: "left",
                      borderBottom: i < CHECKLIST.length - 1 ? "1px solid var(--line)" : "none" }}>
                    <span style={{ width: 26, height: 26, borderRadius: 8, flex: "none", display: "grid", placeItems: "center",
                      background: items[i] ? "var(--accent)" : "transparent", color: "var(--accent-ink)",
                      border: "1.5px solid " + (items[i] ? "var(--accent)" : "var(--line-2)"), transition: "all .18s" }}>
                      {items[i] && <Ic.check width="16" height="16" />}
                    </span>
                    <span style={{ fontSize: 14.5, fontWeight: 600, color: items[i] ? "var(--ink)" : "var(--ink-2)", textDecoration: items[i] ? "none" : "none" }}>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 22, display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, flex: "none", display: "grid", placeItems: "center", background: "var(--accent-glow)", color: "var(--accent)" }}>
                <Ic.flame width="28" height="28" />
              </div>
              <div style={{ flex: 1 }}>
                <div className="display" style={{ fontSize: 36 }}>{streak}<span style={{ fontSize: 15, color: "var(--ink-3)", marginLeft: 6 }}>semaines</span></div>
                <div className="mono" style={{ fontSize: 10, color: "var(--ink-3)" }}>SÉRIE DE SEMAINES COMPLÈTES</div>
              </div>
              <div style={{ width: 40, height: 40, borderRadius: 999, background: "var(--surface-3)", display: "grid", placeItems: "center", color: "var(--accent)" }}>
                <Ic.trophy width="20" height="20" />
              </div>
            </div>
          </div>

          {/* benchmarks scrubbables */}
          <div className="reveal">
            <div className="card" style={{ padding: 24, height: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>TESTS MESURABLES</div>
                <div className="tag" style={{ borderColor: isTest ? "var(--accent)" : "var(--line-2)", color: isTest ? "var(--accent)" : "var(--ink-2)" }}>
                  SEMAINE {String(week).padStart(2, "0")}{isTest ? " · TEST" : ""}
                </div>
              </div>
              <div className="display" style={{ fontSize: 30, margin: "6px 0 4px" }}>
                Semaine {week} <span style={{ color: "var(--ink-3)", fontSize: 16 }}>sur 12</span>
              </div>
              {/* week slider */}
              <input type="range" min="0" max="12" value={week} onChange={(e) => setWeek(+e.target.value)} className="wk-slider" />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, marginBottom: 18 }}>
                {["S0", "S4", "S8", "S12"].map((m, i) => <span key={i} className="mono" style={{ fontSize: 9.5, color: "var(--ink-3)" }}>{m}</span>)}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 15, flex: 1 }}>
                {BENCH.map((b, i) => {
                  const IcEl = Ic[b.icon];
                  const v = Math.round(b.base + (b.s12 - b.base) * (week / 12));
                  const w = Math.round((v / b.s12) * 100);
                  return (
                    <div key={i}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ color: "var(--ink-3)" }}><IcEl width="15" height="15" /></span>
                        <span style={{ fontWeight: 600, fontSize: 13.5 }}>{b.name}</span>
                        <span style={{ marginLeft: "auto", fontWeight: 900, fontSize: 15 }}>{v}</span>
                        <span className="mono" style={{ fontSize: 9, color: "var(--ink-3)", width: 22 }}>{b.unit}</span>
                      </div>
                      <div style={{ height: 7, borderRadius: 999, background: "var(--surface-3)", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: w + "%", background: "var(--accent)", borderRadius: 999, transition: "width .3s var(--ease)" }} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 8, color: "var(--ink-3)", fontSize: 12.5 }}>
                <Ic.target width="15" height="15" /> Cible finale verrouillée à <span style={{ color: "var(--accent)", fontWeight: 700 }}>la semaine 12</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- PARCOURS / ROADMAP ----------
function Roadmap() {
  return (
    <section id="parcours" className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">/ Le parcours</div>
          <h2 className="display">De ta 1ʳᵉ pompe<br />à ta 1ʳᵉ traction.</h2>
          <p>Trois phases, quatre tests. Tu débloques la suite seulement quand ton corps est prêt — pas d'ego, pas de blessure.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16 }}>
          {ROADMAP.map((r, i) => {
            const test = r.tier.startsWith("S");
            return (
              <div key={i} className="card reveal" style={{ padding: 24, position: "relative",
                background: r.state === "current" ? "var(--accent)" : "var(--surface)",
                color: r.state === "current" ? "var(--accent-ink)" : "var(--ink)",
                borderColor: r.state === "current" ? "var(--accent)" : (test ? "var(--line-2)" : "var(--line)"),
                borderStyle: test && r.state !== "current" ? "dashed" : "solid",
                opacity: r.state === "locked" ? 0.5 : 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div className="display" style={{ fontSize: 34, color: r.state === "current" ? "var(--accent-ink)" : (r.state === "done" ? "var(--accent)" : (test ? "var(--ink-2)" : "var(--ink-3)")) }}>{r.tier}</div>
                  <div style={{ width: 32, height: 32, borderRadius: 999, display: "grid", placeItems: "center",
                    background: r.state === "current" ? "var(--accent-ink)" : "var(--surface-3)",
                    color: r.state === "current" ? "var(--accent)" : (r.state === "done" ? "var(--accent)" : "var(--ink-3)") }}>
                    {r.state === "done" ? <Ic.check width="17" height="17" /> : r.state === "locked" ? <Ic.lock width="15" height="15" /> : r.state === "current" ? <Ic.target width="17" height="17" /> : (test ? <Ic.ruler width="16" height="16" /> : <Ic.star width="15" height="15" />)}
                  </div>
                </div>
                <div style={{ fontWeight: 900, fontSize: 19, marginTop: 14 }}>{r.name}</div>
                <div className="mono" style={{ fontSize: 10.5, marginTop: 6, color: r.state === "current" ? "var(--accent-ink)" : "var(--accent)", opacity: r.state === "current" ? 0.8 : 1 }}>{r.skill}</div>
                <p style={{ fontSize: 13, marginTop: 12, color: r.state === "current" ? "rgba(10,12,0,0.72)" : "var(--ink-2)" }}>{r.note}</p>
                {r.state === "current" && <div className="mono" style={{ fontSize: 9, marginTop: 14, display: "inline-block", padding: "4px 10px", borderRadius: 999, background: "var(--accent-ink)", color: "var(--accent)" }}>TU ES ICI</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SuiviDemo, Roadmap });
