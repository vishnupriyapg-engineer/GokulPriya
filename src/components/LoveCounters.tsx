import { useEffect, useState } from "react";

const STORAGE_KEY = "our-little-world-love-counters-v1";

const actions = [
  { id: "love", label: "Love U", emoji: "❤️", note: "A little more love, every time." },
  { id: "miss", label: "Miss U", emoji: "🥺", note: "Counting every moment until you're near." },
  { id: "hug", label: "Hug U", emoji: "🫂", note: "Sending you the biggest virtual hug." },
  { id: "kiss", label: "Kiss U", emoji: "😘", note: "One tiny tap, one little kiss." },
  { id: "annoy", label: "Fuck You 😂", emoji: "🖕💗", note: "The lovingly-annoyed button. You know I still adore you." },
] as const;

type Counts = Record<(typeof actions)[number]["id"], number>;
const initialCounts: Counts = { love: 0, miss: 0, hug: 0, kiss: 0, annoy: 0 };

function readCounts(): Counts {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialCounts;
    const parsed = JSON.parse(saved) as Partial<Counts>;
    return {
      love: Math.max(0, Number(parsed.love) || 0),
      miss: Math.max(0, Number(parsed.miss) || 0),
      hug: Math.max(0, Number(parsed.hug) || 0),
      kiss: Math.max(0, Number(parsed.kiss) || 0),
      annoy: Math.max(0, Number(parsed.annoy) || 0),
    };
  } catch {
    return initialCounts;
  }
}

export default function LoveCounters() {
  const [counts, setCounts] = useState<Counts>(initialCounts);
  const [pressed, setPressed] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCounts(readCounts());
    setReady(true);
  }, []);

  function increment(id: keyof Counts) {
    setCounts((current) => {
      const next = { ...current, [id]: current[id] + 1 };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // The current session still works if browser storage is unavailable.
      }
      return next;
    });
    setPressed(id);
    window.setTimeout(() => setPressed((current) => current === id ? null : current), 650);
  }

  return (
    <section className="love-counter-section" aria-labelledby="love-counter-title">
      <style>{`
        .love-counter-section{position:relative;isolation:isolate;overflow:hidden;margin:clamp(24px,5vw,64px) auto;padding:clamp(24px,5vw,52px);max-width:1100px;border:1px solid #f0cbd5;border-radius:30px;background:radial-gradient(ellipse at 10% 0%,#fff5f7 0%,transparent 48%),linear-gradient(135deg,#fffaf5 0%,#fff0f5 48%,#f9e5ee 100%);box-shadow:0 22px 65px #8d3c5b15;color:#542c3b}
        .love-counter-section:before,.love-counter-section:after{content:'♡';position:absolute;z-index:-1;color:#edb5c8;opacity:.35;font-size:120px;line-height:1;pointer-events:none;animation:lc-float 7s ease-in-out infinite}
        .love-counter-section:before{top:8px;right:4%;transform:rotate(15deg)}.love-counter-section:after{content:'✧';bottom:0;left:3%;font-size:90px;animation-delay:-3s}
        .lc-heading{text-align:center;max-width:650px;margin:0 auto 28px}.lc-kicker{text-transform:uppercase;letter-spacing:.22em;font-size:11px;font-weight:800;color:#b25c7b}.lc-title{font-family:Georgia,serif;font-size:clamp(30px,5vw,48px);line-height:1.1;margin:12px 0;color:#71354e}.lc-subtitle{color:#89596d;line-height:1.7;margin:0 auto;max-width:520px;font-size:14px}
        .lc-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}.lc-card{--lc-accent:#c65d83;position:relative;min-width:0;min-height:190px;border:1px solid #f0c5d4;border-radius:23px;padding:20px 12px 18px;background:linear-gradient(155deg,#fff 0%,#fff7fa 100%);color:#573044;cursor:pointer;text-align:center;box-shadow:0 8px 0 #eac4d1,0 15px 28px #8f3b5b0d;transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease;overflow:hidden;-webkit-tap-highlight-color:transparent}
        .lc-card:hover{transform:translateY(-5px);box-shadow:0 12px 0 #eac4d1,0 22px 35px #8f3b5b1c;border-color:#d98ba6}.lc-card:active{transform:translateY(2px) scale(.98);box-shadow:0 4px 0 #eac4d1}.lc-card:focus-visible{outline:3px solid #9f4567;outline-offset:4px}.lc-card.lc-pop{animation:lc-pop .55s cubic-bezier(.2,1.6,.4,1)}
        .lc-emoji{display:grid;place-items:center;width:66px;height:66px;margin:0 auto 12px;border-radius:22px;background:#fce6ee;font-size:35px;box-shadow:inset 0 0 0 1px #f5d0dd}.lc-label{display:block;font-size:15px;font-weight:850;letter-spacing:-.02em}.lc-count{display:block;font-size:clamp(29px,3vw,38px);font-weight:900;line-height:1.15;margin:9px 0 6px;color:#a7446b;font-variant-numeric:tabular-nums}.lc-note{display:block;font-size:11px;line-height:1.4;color:#946779}.lc-foot{text-align:center;margin:26px 0 0;font-family:Georgia,serif;font-style:italic;color:#9a6178;font-size:15px}.lc-tap-heart{position:absolute;left:50%;top:35%;pointer-events:none;font-size:22px;animation:lc-heart-up .8s ease-out forwards}
        @keyframes lc-pop{0%{transform:scale(1)}35%{transform:scale(1.07) rotate(-1deg)}70%{transform:scale(.98) rotate(1deg)}100%{transform:scale(1)}}@keyframes lc-float{0%,100%{translate:0 0;rotate:0deg}50%{translate:0 -12px;rotate:7deg}}@keyframes lc-heart-up{0%{opacity:0;transform:translate(-50%,10px) scale(.4)}20%{opacity:1}100%{opacity:0;transform:translate(calc(-50% + 20px),-75px) scale(1.5) rotate(18deg)}}
        @media(max-width:900px){.lc-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.lc-card{min-height:175px}}@media(max-width:560px){.love-counter-section{border-radius:23px;padding:25px 14px}.lc-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.lc-card{min-height:168px;padding:17px 8px}.lc-emoji{width:58px;height:58px;font-size:30px}.lc-note{font-size:10px}.lc-title{font-size:32px}.lc-grid .lc-card:last-child{grid-column:1/-1;min-height:145px}.lc-grid .lc-card:last-child .lc-emoji{display:inline-grid;vertical-align:middle;margin-right:8px}}
        @media(prefers-reduced-motion:reduce){.love-counter-section *{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
      `}</style>
      <header className="lc-heading">
        <div className="lc-kicker">little feelings, big numbers ♡</div>
        <h2 id="love-counter-title" className="lc-title">A Million Little Ways to Love You</h2>
        <p className="lc-subtitle">Tap a button whenever you feel it. Every tap adds one more to our little forever counter. These numbers stay saved on this browser—there's no reset button. 💌</p>
      </header>
      <div className="lc-grid">
        {actions.map((action) => (
          <button key={action.id} type="button" className={`lc-card${pressed === action.id ? " lc-pop" : ""}`} onClick={() => increment(action.id)} aria-label={`${action.label}, ${counts[action.id]} taps. Tap to add one.`}>
            {pressed === action.id && <span className="lc-tap-heart" aria-hidden="true">{action.id === "annoy" ? "💗" : action.id === "hug" ? "🫂" : action.id === "miss" ? "💔" : action.id === "kiss" ? "💋" : "💖"}</span>}
            <span className="lc-emoji" aria-hidden="true">{action.emoji}</span>
            <span className="lc-label">{action.label}</span>
            <span className="lc-count" aria-live="polite">{ready ? counts[action.id].toLocaleString() : "—"}</span>
            <span className="lc-note">{action.note}</span>
          </button>
        ))}
      </div>
      <p className="lc-foot">Every tap is a tiny reminder: you're loved. Always. ♡</p>
    </section>
  );
}
