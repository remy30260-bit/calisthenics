/* global React */
// ============================================================
// Calisthenics 12S — données réelles (FR)
// ============================================================

// --- Icônes (formes simples) ---
const Ic = {
  bolt: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>,
  flame: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3c1 3-2 4-2 7a2 2 0 0 0 4 0c0-1-.5-1.5-.5-2.5C16 9 18 12 18 15a6 6 0 1 1-12 0c0-4 4-5 6-12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
  check: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  arrow: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  play: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M7 5v14l12-7L7 5Z" fill="currentColor"/></svg>,
  clock: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  cal: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  star: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="m12 3 2.6 5.5 6 .8-4.4 4.2 1.1 6L12 16.9 6.7 19.5l1.1-6L3.4 9.3l6-.8L12 3Z" fill="currentColor"/></svg>,
  trophy: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" stroke="currentColor" strokeWidth="1.7"/><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 20h6M12 13v7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  lock: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="4.5" y="10" width="15" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7"/></svg>,
  shield: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3 5 6v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  pulse: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M3 12h4l2-6 4 12 2-6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  grip: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M5 9v6m4-9v12m4-12v12m4-9v6M3 12h2m14 0h2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/></svg>,
  target: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>,
  home: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 11 12 4l8 7M6 10v9h12v-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ruler: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="8" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M7 8v3m4-3v4m4-4v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  rope: (p) => <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M5 4v6a7 7 0 0 0 14 0V4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><circle cx="5" cy="4" r="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="19" cy="4" r="2" stroke="currentColor" strokeWidth="1.6"/></svg>,
};

// --- Programme : 3 phases × 3 séances ---
const PHASES = [
  {
    id: "p1", label: "Phase 1", weeks: "Semaines 1 – 4", name: "Adaptation & Technique",
    blurb: "On pose les bases. Apprendre chaque mouvement proprement, zéro douleur articulaire.",
    sessions: [
      { day: "Lundi", title: "Full Body A", focus: "Force & Technique", dur: "35–40", rpe: "5/10", ex: 6, goal: "Poser les bases techniques + introduire les exercices cibles." },
      { day: "Mercredi", title: "Full Body B", focus: "Force + Core", dur: "35–40", rpe: "5/10", ex: 6, goal: "Progresser sur les pompes, introduire diamond push-up et V-taps." },
      { day: "Vendredi", title: "Full Body C", focus: "Cardio léger + Volume", dur: "40–45", rpe: "5/10", ex: 6, goal: "Introduire le cardio faible impact, augmenter le volume." },
    ],
  },
  {
    id: "p2", label: "Phase 2", weeks: "Semaines 5 – 8", name: "Progression & Volume",
    blurb: "Variantes plus dures, élastiques plus forts, repos plus courts. On monte le volume.",
    sessions: [
      { day: "Lundi", title: "Force + Volume", focus: "Full Body A", dur: "40–45", rpe: "6/10", ex: 7, goal: "Augmenter le volume total, introduire des variantes plus difficiles." },
      { day: "Mercredi", title: "Cardio + Force", focus: "Full Body B", dur: "40–45", rpe: "6-7/10", ex: 6, goal: "Intégrer le cardio dans la séance, monter l'intensité." },
      { day: "Vendredi", title: "Circuit + Endurance", focus: "Full Body C", dur: "40–45", rpe: "7/10", ex: 6, goal: "Endurance musculaire + cardio soutenu. On tient plus longtemps." },
    ],
  },
  {
    id: "p3", label: "Phase 3", weeks: "Semaines 9 – 12", name: "Consolidation & Force",
    blurb: "Variantes avancées, première traction négative, L-sit. Les séances les plus intenses.",
    sessions: [
      { day: "Lundi", title: "Force Maximale", focus: "Full Body A", dur: "40–45", rpe: "7/10", ex: 7, goal: "Variantes avancées, force maximale, explosivité." },
      { day: "Mercredi", title: "Cardio Intensif + Force", focus: "Full Body B", dur: "40–45", rpe: "7/10", ex: 6, goal: "Cardio poussé, V push-up, préparation à la traction." },
      { day: "Vendredi", title: "Circuit Final", focus: "Le plus intense", dur: "45", rpe: "8/10", ex: 6, goal: "Séance la plus complète du programme. Test d'endurance." },
    ],
  },
];

// --- Benchmarks mesurables (tests S0 → S12) ---
const BENCH = [
  { name: "Pompes classiques", base: 30, s12: 50, unit: "rép", icon: "grip" },
  { name: "Squats amplitude max", base: 45, s12: 80, unit: "rép", icon: "pulse" },
  { name: "Gainage planche", base: 20, s12: 60, unit: "sec", icon: "target" },
  { name: "Dead hang barre", base: 20, s12: 50, unit: "sec", icon: "grip" },
  { name: "Traction négative", base: 0, s12: 5, unit: "rép", icon: "pulse" },
  { name: "Corde à sauter", base: 0, s12: 15, unit: "min", icon: "rope" },
  { name: "Diamond push-up", base: 0, s12: 12, unit: "rép", icon: "grip" },
];

// --- Checklist hebdo (page Suivi) ---
const CHECKLIST = [
  "Séance Lundi", "Séance Mercredi", "Séance Vendredi",
  "Marche ≥ 3 fois", "Corde à sauter", "Mobilité / étirements",
  "Sommeil ≥ 7h", "Hydratation ≥ 2,5L", "Aucune douleur articulaire",
];

// --- Roadmap : phases + jalons de test ---
const ROADMAP = [
  { tier: "S0", name: "Test initial", skill: "On mesure ton point de départ", state: "done", note: "Pompes, squats, planche, dead hang — sans jugement." },
  { tier: "P1", name: "Adaptation & Technique", skill: "Semaines 1 – 4", state: "done", note: "Chaque mouvement appris proprement, sans douleur." },
  { tier: "S4", name: "Test de fin de Phase 1", skill: "1ʳᵉ traction négative · 5 diamond", state: "current", note: "Tu es ici — on vérifie les progrès." },
  { tier: "P2", name: "Progression & Volume", skill: "Semaines 5 – 8", state: "next", note: "Plus de volume, variantes plus dures." },
  { tier: "S8", name: "Test de fin de Phase 2", skill: "45 pompes · 8 min corde", state: "next", note: "Le cap qui sépare débutant et intermédiaire." },
  { tier: "P3", name: "Consolidation & Force", skill: "Semaines 9 – 12", state: "locked", note: "Traction négative, L-sit, séances max." },
  { tier: "S12", name: "Test final", skill: "50 pompes · L-sit · 15 min corde", state: "locked", note: "Le bilan. On fête les progrès. 🎉" },
];

// --- La méthode : 4 principes (remplace les coachs) ---
const PILLARS = [
  { icon: "shield", title: "Zéro douleur genou", text: "Chaque exercice a une alternative sans impact. On ne masque jamais une douleur, on l'évite." },
  { icon: "ruler", title: "Progression mesurée", text: "+2 reps, +1 série, −10 sec de repos. Des paliers clairs semaine après semaine, jamais l'ego." },
  { icon: "home", title: "Sans salle, sans matériel", text: "Une chaise, un élastique, une barre. Tout se fait chez toi, en 35 à 45 minutes." },
  { icon: "target", title: "Des chiffres, pas des promesses", text: "Tests mesurables aux semaines 0, 4, 8 et 12. Tu vois exactement ce qui progresse." },
];

// --- Témoignages ---
const TESTIMONIALS = [
  { quote: "Aucune pompe en janvier. La semaine dernière, ma première traction. Le programme te prend exactement là où tu es.", name: "Priya R.", meta: "Membre · 5 mois", stat: "0 → 1 traction" },
  { quote: "L'écran de suivi est addictif. Je m'entraîne juste pour garder ma série de semaines complètes.", name: "Tom B.", meta: "Membre · 1 an", stat: "Série de 12 sem." },
  { quote: "Mes genoux me faisaient mal à chaque squat. Les alternatives ont tout changé — plus aucune douleur.", name: "Aïcha K.", meta: "Membre · 8 mois", stat: "Genoux : 0 douleur" },
  { quote: "Les progressions sont si graduelles que je ne suis jamais perdu. Chaque séance est dure mais faisable.", name: "Marco D.", meta: "Membre · 3 mois", stat: "−6 kg, +18 pompes" },
];

// --- Tarifs ---
const PLANS = [
  { id: "free", name: "Gratuit", price: { mo: 0, yr: 0 }, blurb: "Teste la Phase 1 en entier.", cta: "Commencer gratuitement",
    features: ["Phase 1 complète (S1–4)", "Séances guidées + minuteur de repos", "Alternatives zéro douleur genou"], muted: ["Phases 2 & 3", "Suivi, perfs & tests"] },
  { id: "pro", name: "Pro", price: { mo: 12, yr: 8 }, blurb: "Les 12 semaines, du premier push-up à ta première traction.", cta: "Essai 7 jours gratuit", best: true,
    features: ["Les 3 phases · 12 semaines · 36 séances", "Suivi complet : checklist, perfs, tests", "Minuteur de repos intégré", "Alternatives genou pour chaque exo", "Rappels nutrition & jour difficile"], muted: [] },
  { id: "team", name: "Équipe", price: { mo: 9, yr: 6 }, blurb: "À plusieurs, par personne.", cta: "Créer une équipe",
    features: ["Tout le plan Pro", "Jusqu'à 6 membres", "Classements partagés", "Défis de groupe"], muted: [] },
];

Object.assign(window, { Ic, PHASES, BENCH, CHECKLIST, ROADMAP, PILLARS, TESTIMONIALS, PLANS });
