import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useMemo, useState } from 'react';

export const Route = createFileRoute('/_authenticated/love-reasons')({
  ssr: false,
  component: LoveReasonsPage,
});


const reasons = [
  'Because Ne evlo strong ana kuda kanner vita ore reason enakaga than , nan vitu pogakudathunu.',
  'Because en smile kaga ne un smile kuda elaka thayar.',
  'Because Ne romba cute da.',
  'Because unkuda than na nanahh iruken.',
  'Because un voice enaku romba pudikum da , its a bothai.',
  'Because nee win pannumbodhu, adhu chinna vishayama irundhaalum, naan unna vida adhigama happy aaguven.',
  'Because your happiness matters to me.',
  'Because nee honest-ah react panradhu enakku romba pudikkum like nala ilana nalailathan mostly en photos nalailanu solrathu.',
  'Because unkita irunthu notification vanthave full smile en face la varum da.',
  'Because nee kashtathula irukkumbodhu, unakku support-ah irukkanum nu thonum.',
  'Because ne enna neriya sirika vechurka da. neriya mokka jokes, kalaikuranu mokka vanguva etc..',
  'Because ne enakaga elame change ayuta.',
  'Because unkuda than comfortable ah feel pandra.',
  'Because nee unna pathi marandhaalum, nee evlo special nu unakku nyabagam padutha naan irukkanum nu thonum',
  'Because nee enna tease pannitu, naan react panradha paathu enjoy pannuva. 😂❤️',
  'Because un kooda irukkumbodhu time poradhe theriyadhu one hour one minute mari feel agum.',
  'Because nee serious-ah irukka try pannalum, sometimes semma funny-ah iruppa. 😂',
  'Because namma rendu perukkum mattum puriyura inside jokes irukku.',
  'Because enga hostel la podura elam food um nyabgam vechuu soluva eg.parota, dosa, poori.',
  'Because unoda koratai sound pudikum da koorrrr... korrrr...',
  'Because naan pesura mokka conversations kooda ne porumaya ethum solama fullah kepa da, even boring ah irunthalum.',
  'Because un kooda future-la nadakkapora chinna chinna moments-a kooda imagine panna pudikkum.',
'Because nee enna vida different-ah yosikkura vidhame sometimes enakku interesting-ah irukkum.',
'Because namma memories-a years later thirumbi paathu, "Dei, idhellam nyabagam irukka?" nu sirikkanum nu aasai. eg(veetu bathroom la olinjathu) ❤️',
'Because un kooda sanda potta kooda, konja nerathula normal-ah pesa thonum.',
'Because nee edhavadhu pudhusa kathukitta, adha pathi kekka enakku pudikkum.',
'Because un voice kekkumbodhu, enna theriyama happy-ah aagiduven.',
'Because nee edhavadhu sollitu neeye sirikkura moments romba cute-ah irukkum.',
'Because unakku pudicha vishayangal enakkum therinjukanum nu aasai.',
'Because nee unexpected-ah edhavadhu pannumbodhu, adhu enakku oru cute surprise-ah maaridum.',
'Because un kooda random-ah veliya suthitu, edhavadhu snacks saapidanum nu aasai.',
'Because nee oru story sollumbodhu, adha vida un expressions-a paakuradhu interesting-ah irukkum.',
'Because namma rendu perum serndhu oru pudhu place explore pannanum nu aasai.',
'Because un kooda irukkura ordinary days-a kooda special memories-ah maathanum nu aasai.',
'Because nee enna kalaikkura vidhame sometimes enakku sirippa control panna mudiyadhu.',
'Because nee edhavadhu achieve pannumbodhu, un face la irukkura happiness-a paakanum nu aasai.',
'Because un kooda oru long journey poyi, window seat la ukkandhu pesite poganum nu aasai.',
'Because nee unexpected-ah enna compliment pannumbodhu, adha veliya kaattalanaalum manasukulla happy-ah iruppen.',
'Because someday namma old chats and photos paathu, namma evlo memories create pannirukkom nu smile pannanum.',
'Because nee un childhood stories share pannumbodhu, ne enna evloo trust panennu purinjuthu da(mota madi talk).',
'Because unakku mattum irukkura sila habits romba different-ah irukkum.(room freshner) inimel achum vangatha da',
'Because nee edha namburiya, adhukaga stand edukura vidham enakku pudikkum.',
'Because unakkulla yaarukkum theriyadha oru special side irukku.(Romba nala kondha marii anbana payan)',
'Because unakku nu oru unique way of yosikkura style irukku.',
'Because nee oru vishayatha explain panra vidham enakku pudikkum.',
'Because nee sila vishayatha paakura perspective enakku pudhusa irukkum.',
'Because nee edha namburiya, adhukaga stand edukura vidham enakku pudikkum.',
'Because mathavangaloda compare pannama, nee unmaiyave nee-ah irukkura vidham enakku pudikkum.',
'Because unna pathi ezhudha start panna, ne enna happy akura visayam matum ilama ,ne kastapaduthura reason um iruku but athu ne purinjukitu mathikura way pudikum.',
'Because ne thungumbothu azhaga irupa kuti gokul mari.',
'Because you are a best chess player, I will suppport you thango ne chess la perisa varanum.',
'Because nee unaku theriyathathu kathukanumnu iruka effort romba pudikum da.',
'Because unakku pasikkumbodhu ne omlet podurathu pudikum , enaku senju thada romba pasikuthu 😂',
'Because nee oru chinna vishayatha explain panna aarambicha, adhu oru full-length movie maari poidum.(business pathi en studies la explain panumbothu)',
'Because nee innocent-ah escape aagura situations la un face-a paathale sirippu varum.(sanda start agumbothu heyy iladi venam sanda vendamdi nu solrathu)',
'Because unakku nee romba smart nu thonura sila moments enakku semma comedy-ah irukkum.(dmk than best nu solumbothu)',
'Because nee panra overacting-ku Oscar award kuduthaalum pathaadhu(nan kudikala d promise ah, nan chess 5 minutes munadi than viladuna ipo vilayadala d).',
'Because unakku oru vishayam pudichirundha, adha pathi nee oru ambassador maari promote pannuva.(dmk va pathi pugalrathu thangamudiyathu da)',
'Because nee thappu pannitu confidence-ah justify panra talent vera level(samalification, ice vekurathu chillnu). 😂',
'Because nee oru simple question-ku answer solradhukulla oru whole story solliduva.(Ena solanumo athu solama suthi suthi sandaye vandhurumda)',
'Because unakku theriyadha vishayathai kooda therinja maari pesura confidence vera level.',
'Because Ne height ah irukurathu pudikum da',
'Because Ne chuchu porathu purikum da athuvum last shake pandrathu drop drop varum.',
'Because unkuda thoongumbodhu world-la irukkura ella problems-um solve aana maari peaceful-ah iruppen.',
'Because nee oru plan podumbodhu CEO maari iruppa, aana execute panra time-la employee leave potta maari aagiduva.',
'Because nee kovama irukkumbodhu un face serious-ah irundhaalum, sometimes unna paatha sirippu vandhurum😂😂.',
'Because Ne secret nu sona athu yepovum reveal panave mata evlo konjii konjii ketalum.',
'Because ne dress pandra style pudikum da handsome boy.',
'Because ne press pandrathu pudikum da😉😉😉',
'Because unoda finger slow ah insert pudikum da🥵(but nails cut paniko)',
'Because ne un day nala ilanalum oru varthai kuda solama enna sirika vepa da🥺🥺',
  'Because oru periya turning point in ur life ah left handla deal panathu masss da.',
  'Because unoda ulagame ethirthalum , antha worst time la ne nambunavangaloda faces change analum , ne avolthanu elarum nenaichapo, unoda comback , wothaaa romba pudikum da.😈👑🦁⚡',
  'Because Gokul ku ethumelayum bayam ila🔥😎',
  'Because avan avan avanga appa oda nizhal la irukumbothu unakunu thani adayalatha uruvakanavan.',
  'Because Enna care pandrathu happpaahh pure gem da ne.',
  'Because nan padikumbothu professor ah mari strict ah irupda (priya sound kekala enna pandra sathama padi, padi padi , padi....)',
  'Because nan first year lanthe ethini exam la time pathalanu sonalum , ne porumaya next time pathukalam d nu solumbothu , I am flat da.',
  'Because ne enna kolanthamari pathupa da (kai pudichu road cross pandrathu )',
  'Because ne pesunathu neye  5 mins aprome maranthurva😉',
  'Because unkudathan nan neriya movies, biggboss, series pathurken da , neriya boring movies, neriya laughs...',
  'Because ne neriya fried rice vangi sapduva so future la enakum vangitharuvala',
  'Because nee alarm vechuttu ezhundhirikkaama, alarm-eh daily torture pannuva.',
  'Because nee edhavadhu hide panna try pannumbodhu, un face eh unakku against-ah evidence kuduthudum.(drinks)',
  'Because nee oru animal-a paatha, adhu unna vida important person aagidum.🐶(dog - pattu, cat, sanda kozhi)',
  'Because nan evlo poturkenu crtah guess panuva (1 or 2 or ZERO😉🥵)',
  'Because nee oru plan-ku "paathukalaam" nu sonna, adhu nadakkuma nadakkaadha nu universe-kke theriyadhu.',
  'Because ne neriya "serithan", "vasthavam than", "Hmmmm" nu words neriya use panuva',
  'Because ne enakaga unoda sweet voice la patu paduva (thapu thapana lyrics 😂)',
  'Because nan periods la irukumbothu enoda mood swings ah purinjukitu nan peii mari kathunalum ne kovapadamata da',
  'Because un kaiya pidichittu, endha destination-um illaama long walk poganum nu aasai.',
'Because nee tired-ah irukkumbodhu, un thala en shoulder-la vechu konjam relax pannanum nu thonum.',
'Because nee enna paathu smile pannumbodhu, andha smile-ku reason naan dhaan nu nenacha romba happy-ah irukkum.',
'Because nee enna hug pannumbodhu, andha moment-la vera edhuvum mukkiyam illa nu thonum.',
'Because en life la enna nadanthalum unkita share panalana athu fullfill eh agathu da',
'Because oru naal namma future kids-kitta namma love story sollumbodhu, kuti gokul enaku thaan support pananum. 😂❤️',
'Because namma rendu perum old aana apram kooda,ne enna tease pandrathu niruthatha, unna tease panradha naan nirutha maaten.',
'Because sanda evlo perusa irunthalum elathayum vitutu next day normal ah vanthu enkita pesuva da',
  'Because oru un life la unakku kidaicha love, happiness, sad  and beautiful memories ellathayum nan irukanum da.',
  'Ennoda 100th reason,  someday namma love story-a thirumbi paakumbodhu, "Evlo chinna vishayathula start aachu, aana evlo beautiful-ah maariduchu" nu rendu perum smile pannanum. ❤️',

  
];

const accents = ['#f9d9e1', '#f3dff4', '#fbe7d8', '#e9e2f8', '#f7e8ed'];

function LoveReasonsPage() {
  const [opened, setOpened] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('our-little-world-love-reasons-opened');
      if (saved) setOpened(JSON.parse(saved));
    } catch {
      // Keep the page usable if browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('our-little-world-love-reasons-favorites');
      if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    } catch {
      // Keep favorites usable for this visit if storage is unavailable.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('our-little-world-love-reasons-favorites', JSON.stringify(favorites));
    } catch {
      // Favorites still work for the current visit.
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('our-little-world-love-reasons-opened', JSON.stringify(opened));
    } catch {
      // The opened cards still work for the current visit.
    }
  }, [opened]);

  const visible = useMemo(() => {
    const all = reasons.map((_, i) => i);
    if (showFavorites) return all.filter((index) => favorites.includes(index));
    return showAll ? all : all;
  }, [showAll, showFavorites, favorites]);

  function toggleFavorite(index: number) {
    setFavorites((previous) => previous.includes(index)
      ? previous.filter((item) => item !== index)
      : [...previous, index]);
  }

  function openReason(index: number) {
    setActive(index);
    setOpened((previous) => previous.includes(index) ? previous : [...previous, index]);
  }

  function closeReason() {
    setActive(null);
  }

  function moveReason(direction: number) {
    if (active === null) return;
    setActive((active + direction + reasons.length) % reasons.length);
    const next = (active + direction + reasons.length) % reasons.length;
    setOpened((previous) => previous.includes(next) ? previous : [...previous, next]);
  }

  return (
    <main className="lr-page">
      <style>{`
        .lr-page{--ink:#694750;--rose:#d85c83;--soft:#fff8f6;min-height:100%;padding:clamp(18px,4vw,48px) clamp(12px,3vw,32px) 60px;color:var(--ink);background:radial-gradient(ellipse at 10% 8%,#ffe4e9 0,transparent 32%),radial-gradient(ellipse at 92% 28%,#f5e5fa 0,transparent 30%),linear-gradient(145deg,#fffaf6,#fff1f3 55%,#fffaf7);font-family:Georgia,'Times New Roman',serif;position:relative;overflow:hidden}
        .lr-page:before,.lr-page:after{content:'♡';position:absolute;color:#f3b5c7;opacity:.24;font-size:clamp(100px,17vw,220px);pointer-events:none;animation:lr-drift 9s ease-in-out infinite alternate}.lr-page:before{top:110px;left:-35px}.lr-page:after{right:-35px;top:420px;animation-delay:-4s}
        .lr-inner{max-width:1180px;margin:0 auto;position:relative;z-index:1}
        .lr-kicker{text-align:center;text-transform:uppercase;letter-spacing:.24em;font:600 11px/1.5 system-ui,sans-serif;color:#bd7189}
        .lr-title{text-align:center;font-size:clamp(34px,5vw,62px);line-height:1.06;margin:12px 0 14px;font-weight:500;letter-spacing:-.04em;color:#6d4650}
        .lr-subtitle{text-align:center;max-width:650px;margin:0 auto;color:#98727b;font-size:clamp(15px,2vw,18px);line-height:1.7}
        .lr-progress-wrap{max-width:520px;margin:25px auto 30px;background:#f5dce3;border-radius:999px;height:7px;overflow:hidden}.lr-progress{height:100%;border-radius:inherit;background:linear-gradient(90deg,#e98eaa,#b97bd1);transition:width .7s cubic-bezier(.2,.8,.2,1)}
        .lr-progress-label{text-align:center;font:12px system-ui,sans-serif;color:#a47781;margin-top:-19px;margin-bottom:31px}
        .lr-toolbar{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:24px}
        .lr-btn{border:1px solid #e9c4ce;background:#fff9f8;color:#a34d6b;border-radius:999px;padding:11px 18px;font:600 13px system-ui,sans-serif;cursor:pointer;transition:transform .22s,background .22s,box-shadow .22s;min-height:44px}.lr-btn:hover{transform:translateY(-2px);background:#fff;box-shadow:0 8px 22px #d48da51f}.lr-btn.primary{background:#704955;color:white;border-color:#704955}
        .lr-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:13px}
        .lr-card{--card-accent:#f9d9e1;min-height:145px;position:relative;overflow:hidden;text-align:left;border:1px solid #efd6dc;border-radius:19px;padding:18px 17px 16px;background:linear-gradient(145deg,#fffdfb,#fff4f4);box-shadow:0 5px 18px #9f68710b;cursor:pointer;color:var(--ink);transition:transform .25s,box-shadow .25s,border-color .25s;isolation:isolate}
        .lr-card:before{content:'';position:absolute;width:145px;height:145px;border-radius:50%;background:var(--card-accent);opacity:.55;right:-70px;top:-85px;z-index:-1;transition:transform .4s}.lr-card:hover{transform:translateY(-4px) rotate(-.4deg);box-shadow:0 15px 30px #b26c821b;border-color:#e6a7bb}.lr-card:hover:before{transform:scale(1.6)}
        .lr-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.lr-number{font:600 11px system-ui,sans-serif;letter-spacing:.12em;color:#bd8796}.lr-heart{font-size:24px;color:#d96d8b;filter:drop-shadow(0 3px 3px #e7a0b43a)}
        .lr-card-label{display:block;font-size:17px;line-height:1.4;margin-top:22px;font-weight:500}.lr-card-hint{display:block;margin-top:7px;font:11px system-ui,sans-serif;color:#b58b94}.lr-card.is-open{background:linear-gradient(145deg,#fff0f4,#fffaf7);border-color:#e5a6b9}.lr-card.is-open .lr-card-label{font-size:14px;line-height:1.55;margin-top:14px}.lr-card.is-open .lr-card-hint{color:#c56d89}
        .lr-bottom-note{text-align:center;margin:30px auto 0;color:#a77c86;font-size:14px;line-height:1.7}.lr-bottom-note span{color:#d75b82}
        .lr-overlay{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:20px;background:rgba(54,29,39,.48);backdrop-filter:blur(9px);animation:lr-fade .25s ease both}.lr-modal{width:min(580px,100%);position:relative;text-align:center;border:1px solid #fff;background:radial-gradient(ellipse at top,#fff9f8,#fff0f3 70%,#fffaf7);border-radius:28px;padding:clamp(28px,5vw,48px);box-shadow:0 35px 100px #351c2d44;animation:lr-modal-in .55s cubic-bezier(.18,.85,.25,1.15) both;overflow:hidden}.lr-modal:before{content:'';position:absolute;inset:10px;border:1px solid #f2d2dc;border-radius:21px;pointer-events:none}.lr-modal-heart{font-size:44px;display:block;animation:lr-heartbeat 1.8s ease-in-out infinite}.lr-modal-number{font:600 11px system-ui,sans-serif;letter-spacing:.2em;color:#bd7189;margin-top:15px}.lr-modal-text{font-size:clamp(24px,4vw,36px);line-height:1.35;font-weight:500;margin:17px 0 26px;position:relative}.lr-modal-actions{display:flex;justify-content:center;align-items:center;gap:9px;flex-wrap:wrap;position:relative}.lr-close{position:absolute;right:22px;top:18px;border:0;background:#f8e1e7;color:#9c5d70;border-radius:50%;width:38px;height:38px;font-size:21px;cursor:pointer;z-index:2}
        .lr-spark{position:absolute;pointer-events:none;font-size:18px;animation:lr-sparkle 1.1s ease-out forwards;z-index:2}
        @keyframes lr-fade{from{opacity:0}to{opacity:1}}@keyframes lr-modal-in{0%{opacity:0;transform:translateY(28px) scale(.91);filter:blur(8px)}65%{opacity:1;filter:blur(0);transform:translateY(-3px) scale(1.015)}100%{transform:translateY(0) scale(1)}}@keyframes lr-heartbeat{0%,100%{transform:scale(1)}15%{transform:scale(1.16)}30%{transform:scale(1)}45%{transform:scale(1.1)}}@keyframes lr-drift{from{transform:translateY(0) rotate(-12deg)}to{transform:translateY(25px) rotate(10deg)}}@keyframes lr-sparkle{0%{opacity:0;transform:translateY(12px) scale(.5) rotate(-20deg)}20%{opacity:1}100%{opacity:0;transform:translateY(-85px) scale(1.3) rotate(25deg)}}
        @media(max-width:1000px){.lr-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:680px){.lr-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.lr-card{min-height:132px;padding:14px 12px;border-radius:15px}.lr-card-label{font-size:15px;margin-top:17px}.lr-card.is-open .lr-card-label{font-size:13px}.lr-toolbar{margin-bottom:18px}.lr-subtitle{max-width:360px}.lr-page{padding-top:24px}}@media(max-width:360px){.lr-grid{grid-template-columns:1fr}.lr-card{min-height:110px}}
        @media(prefers-reduced-motion:reduce){.lr-page:before,.lr-page:after,.lr-modal-heart{animation:none}.lr-card,.lr-progress{transition:none}.lr-overlay,.lr-modal{animation:none}}
      `}</style>

      <div className="lr-inner">
        <div className="lr-kicker">a little love, in a hundred little ways</div>
        <h1 className="lr-title">100 Things I Love About You</h1>
        <p className="lr-subtitle">Ne Yepovum kepelada unna yen pudikumnu ithalam padi one ilaa 100 reasons iruku unna yen pudikumnu💌</p>

        <div className="lr-progress-wrap" aria-label={`${opened.length} of 100 reasons opened`}>
          <div className="lr-progress" style={{ width: `${opened.length}%` }} />
        </div>
        <div className="lr-progress-label">{opened.length} of 100 little love notes discovered 💗</div>

        <div className="lr-toolbar">
          <button className="lr-btn primary" onClick={() => openReason(reasons.findIndex((_, i) => !opened.includes(i)) === -1 ? 0 : reasons.findIndex((_, i) => !opened.includes(i)))}>
            ✨ Open a surprise
          </button>
          <button className="lr-btn" onClick={() => setShowAll((value) => !value)}>
            {showAll ? '♡ Hide revealed notes' : '♡ Show all reasons'}
          </button>
          <button className={`lr-btn ${showFavorites ? 'primary' : ''}`} onClick={() => setShowFavorites((value) => !value)}>
            {showFavorites ? '← All reasons' : `♥ Favorites (${favorites.length})`}
          </button>
          <button className="lr-btn" onClick={() => { setOpened([]); setShowAll(false); }}>
            ↻ Reset progress
          </button>
        </div>

        {showFavorites && <p className="lr-bottom-note">Your saved little love notes, kept close to your heart. 💗</p>}
        {showFavorites && visible.length === 0 && <p className="lr-subtitle" style={{ margin: '24px auto' }}>No favorites yet. Open a love note and tap ♡ Add to Favorites to save it here.</p>}
        <section className="lr-grid" aria-label={showFavorites ? 'Favorite love reasons' : '100 reasons I love you'}>
          {visible.map((index) => {
            const isOpen = showAll || opened.includes(index);
            return (
              <button
                key={index}
                className={`lr-card ${isOpen ? 'is-open' : ''}`}
                style={{ ['--card-accent' as string]: accents[index % accents.length] }}
                onClick={() => isOpen && showAll ? openReason(index) : openReason(index)}
                aria-label={isOpen ? `Reason ${index + 1}: ${reasons[index]}` : `Open love reason ${index + 1}`}
              >
                <span className="lr-card-top">
                  <span className="lr-number">REASON {String(index + 1).padStart(2, '0')}</span>
                  <span className="lr-heart">{isOpen ? '💗' : '♡'}</span>
                </span>
                <span className="lr-card-label">{isOpen ? reasons[index] : 'A little note, just for you…'}</span>
                <span className="lr-card-hint">{isOpen ? 'Tap to read this in a little love letter ✨' : 'Tap to reveal ♡'}</span>
              </button>
            );
          })}
        </section>
        <p className="lr-bottom-note">Intha 100 matum ila inum neriya reasons daily vanthute irukum da. <span>♡</span><br />And if I had a hundred more reasons, I would still keep finding more. 💗</p>
      </div>

      {active !== null && (
        <div className="lr-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeReason(); }} onKeyDown={(event) => { if (event.key === 'Escape') closeReason(); }}>
          <div className="lr-modal" role="dialog" aria-modal="true" aria-label={`Love reason ${active + 1}`}>
            <button className="lr-close" onClick={closeReason} aria-label="Close love note">×</button>
            {['💗', '💖', '💝', '💕', '💞'].map((emoji, i) => <span key={i} className="lr-spark" style={{ left: `${12 + i * 17}%`, top: `${72 + (i % 2) * 9}%`, animationDelay: `${i * 0.08}s` }}>{emoji}</span>)}
            <span className="lr-modal-heart">💌</span>
            <div className="lr-modal-number">LOVE NOTE {String(active + 1).padStart(2, '0')} / 100</div>
            <p className="lr-modal-text">{reasons[active]}</p>
            <div className="lr-modal-actions">
              <button className={`lr-btn ${favorites.includes(active) ? 'primary' : ''}`} onClick={() => toggleFavorite(active)} aria-pressed={favorites.includes(active)}>
                {favorites.includes(active) ? '❤️ Added to Favorites' : '♡ Add to Favorites'}
              </button>
              <button className="lr-btn" onClick={() => moveReason(-1)}>← Previous</button>
              <button className="lr-btn primary" onClick={closeReason}>Keep this in my heart 💗</button>
              <button className="lr-btn" onClick={() => moveReason(1)}>Next →</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
