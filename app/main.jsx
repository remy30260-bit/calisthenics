/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle,
   Nav, Hero, Programme, SuiviDemo, Roadmap, Methode, Testimonials, Pricing, FinalCTA, Footer, useReveal */
// ============================================================
// Calisthenics 12S — composition + Tweaks
// ============================================================
const { useEffect: useEffectM } = React;

function hexToRgba(hex, a) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": ["#c6ff00", "#0a0c00"],
  "heroLayout": "split",
  "glow": true
}/*EDITMODE-END*/;

const ACCENTS = [
  ["#c6ff00", "#0a0c00"], // acid lime
  ["#3b82f6", "#03102b"], // bleu (marque app)
  ["#ff5a1f", "#1a0600"], // orange
  ["#ff2d6b", "#1a0008"], // magenta
  ["#19e3b1", "#00190f"], // menthe
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffectM(() => {
    const root = document.documentElement;
    const a = Array.isArray(t.accent) ? t.accent : ["#c6ff00", "#0a0c00"];
    root.style.setProperty("--accent", a[0]);
    root.style.setProperty("--accent-ink", a[1]);
    root.style.setProperty("--accent-glow", hexToRgba(a[0], 0.35));
    root.style.setProperty("--glow-vis", t.glow ? "1" : "0");
  }, [t.accent, t.glow]);

  useReveal();

  return (
    <div style={{ ["--glow-vis"]: t.glow ? 1 : 0 }} className={t.glow ? "" : "no-glow"}>
      <Nav />
      <main>
        <Hero layout={t.heroLayout} />
        <Programme />
        <SuiviDemo />
        <Roadmap />
        <Methode />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Couleur d'accent" />
        <TweakColor label="Accent" value={t.accent} options={ACCENTS}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Hero" />
        <TweakRadio label="Disposition" value={t.heroLayout} options={["split", "centered"]}
          onChange={(v) => setTweak("heroLayout", v)} />
        <TweakToggle label="Halos lumineux" value={t.glow}
          onChange={(v) => setTweak("glow", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
