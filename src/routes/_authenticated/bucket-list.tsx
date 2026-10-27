import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type CSSProperties, type FormEvent } from "react";

export const Route = createFileRoute("/_authenticated/bucket-list")({
  ssr: false,
  component: BucketListPage,
});

type Category = "Travel" | "Dates" | "Food" | "Adventures" | "Romance" | "Future";
type JarName = "bucket" | "completed";
type PaperPhase = "emerge" | "unfold" | "fold" | "travel";
type Dream = {
  id: string;
  title: string;
  description: string;
  category: Category;
  emoji: string;
};

const STORAGE_KEY = "our-little-world-bucket-list-v2";

const starterDreams: Dream[] = [
  { id: "romance-90", title: "Walpaper photo", description: "Unthu enthu wallpaper la nama 2 per iruka favourite photo vechukanum🥹❤️", category: "Romance", emoji: "👕" },
  { id: "romance-91", title: "Contact name love", description: "Un phone la en name , en phone la un name , husband and wife mari save panikanum🥹❤️", category: "Romance", emoji: "👕" },
  { id: "romance-92", title: "Save Water Shower", description: "Neyum nanum ore shower la kulikanum, cute ah romance panitu , na unaku soap poduven , ne enaku soap poduva, kulichutu ore towel 2 perum katitu velila vanthu oru round ponum", category: "Romance", emoji: "👕" },
  { id: "romance-102", title: "Our Midnight Food Cravings", description: "Night thoongitu irukumbothu rendu perukum sudden ah pasikkanum, kitchen ku poi easy ah edhavathu omlet prepare panni, lights dim panni rendu perum share panni sapdanum. 🤭🍜", category: "Food", emoji: "🌙" },
 { id: "romance-5", title: "Your Shirt, My Comfort", description: "Un shirt , tshirtah nan eduthu pottutu, athu enaku romba perusa irunthalum cute ah feel pannanum da. Un shirt la irukura antha smell and comfort oda unna miss pannumbothu kooda un pakkathula irukura madhiri feel pannanum, apo ne easyah athukula varalam. 🥹❤️", category: "Romance", emoji: "👕" },
{ id: "romance-80", title: "Your Jacket Around My Shoulders", description: "Kulur la naan cold ah irukumbothu nee un jacket ah kalati en shoulder mela potu enna pakkathula izhuthu hug pannanum da. Antha chinna caring moment enaku romba special. 🥹🧥", category: "Romance", emoji: "🤍" },
{ id: "romance-69", title: "Veetuku varanum", description: "Ne en veetuku urimaiya varanum , nan un veetuku urimaiya varanum atleast one day achum stay pannanum. 🥹💋", category: "Romance", emoji: "💋" },
{ id: "romance-1000", title: "Samaichu tharanum", description: "unaku pudicha dish elam different different ah unaku samaichu tharanum athu ne nimathiya ukanthu vayuru fulla sapdanum da. 🥹💋", category: "Romance", emoji: "💋" },

{ id: "romance-66", title: "Photo Frames", description: "Namma roomla namaloda photos lam frame potu anga anga namma veedu fullah irukanum. 🥹💋", category: "Romance", emoji: "💋" },
{ id: "romance-79", title: "Sleepy Voice Calls", description: "Night la call pesumbothu rendu perukum thookam vanthalum call cut panna manasu varama, sleepy voice la pesite oruthar voice ketukitte thoonganum. 🌙", category: "Romance", emoji: "📞" },
{ id: "romance-77", title: "Your Chest, My Safe Place", description: "Oru tiring day mudinju un pakkathula vandhu un chest mela thala vechu hug pannitu konjam neram ethaiyum yosikama peaceful ah irukanum da. 🥹🤍", category: "Romance", emoji: "🫂" },
{ id: "romance-76", title: "Draw on My Hand", description: "Namma rendu perum pesumbothu en kai mela nee chinna hearts, smileys, namma initials ellam draw pannanum, naanum un kai mela en creativity ah kaatanum. 🎨", category: "Romance", emoji: "💗" },
{ id: "romance-74", title: "Our Secret Hug Signal", description: "Public la irukumbothu namma rendu perukum matum puriyura oru cute signal vechukanum, antha signal kudutha udane orutharuku oruthar hug venumnu puriyanum. 🫂", category: "Romance", emoji: "🫂" },
{ id: "romance-72", title: "Steal a Kiss Before You Leave", description: "Nee veliya kelambumbothu naan unna vazhi anupi vechitu last minute la thirumba koopitu oru kiss kuduthu anupura cute habit namakulla irukanum da. 🥹", category: "Romance", emoji: "💋" },
{ id: "romance-71", title: "Your Lap, My Favourite Seat", description: "Namma rendu perum sofa la ukkanthirukumbothu chair irunthalum enaku un  madiyila ukkanthu unna hug pannitu pesurathuthaan favourite ah irukanum, unga appa amma irunthalum paravala. 🧸", category: "Romance", emoji: "💕" },
{ id: "romance-67", title: "Steal Your Side of the Bed", description: "Namma thoongumbothu nee un side la irunthalum naan un pakkam vandhu un space ah full ah occupy pannanum ne enna thitama edam kudukanum. 🤭", category: "Romance", emoji: "🛏️" },
{ id: "romance-65", title: "Fix My Hair, Kiss My Forehead", description: "Naan un munnadi hair ellam kalaichitu vandha nee en hair ah sari panni forehead la oru cute kiss kudukanum da. 🥹💋", category: "Romance", emoji: "💋" },
{ id: "romance-100", title: "Blinkit Challenge", description: "Ithu oru game , oru 5 colours choose pani antha colours la blinkit lanthu nan unakga things and ne enakga things vangi surprise pananum. 🥹💋", category: "Romance", emoji: "💋" },
{ id: "romance-62", title: "Your Lap Is My Pillow", description: "Namma rendu perum pesitu irukumbothu un madiyila thala vechu paduthukanum da, nee en thala mudiya kothitu iruka naan apdiye relax ah irukanum. 🥹", category: "Romance", emoji: "🫶" },
{ id: "romance-63", title: "Messy Hair, Sleepy Hugs", description: "Morning la rendu perum thookathula irukumbothu messy hair oda oruthara oruthar hug pannitu, innum konjam neram thoongalam nu sollanum. 🧸", category: "Romance", emoji: "😴" },
  { id: "travel-1", title: "Dress in same cupboard", description: "Un dress and en dress ah same cupboard la Namma veetula vechu urimaiah use pananum.", category: "Travel", emoji: "🌅" },
  { id: "travel-7", title: "Kovil Date", description: "Neyum Nanum Namaku pudicha  Kovil ku poitu sami kumtu mathi mathi kungumam vechukitu namma perla, rasi lam soli  archanai pani sami kumutu varanum.", category: "Travel", emoji: "🚗" },
  { id: "travel-6", title: "Hotel Date", description: "Neyum Nannum Hotel poitu namaku pudichatha order pani share pani sapdanum.", category: "Travel", emoji: "🚗" },
  { id: "travel-5", title: "Pet Dog", description: "Unaku pudichamari pet dog vangi ne sonamari valakanum athuku name vechu namma family la onu aganum, ithu un asai than da.", category: "Travel", emoji: "🚗" },
  { id: "travel-2", title: "Dream bike", description: "Namma sambaricha kasula unoda dream bike vanganum.", category: "Travel", emoji: "🚗" },
  { id: "travel-3", title: "Blindfold Surprise Date", description: "Unna enga kootitu porennu sollama kannu katti oru beautiful place ku kootitu poganum, anga nee kannu thorakumbothu un face la vara happiness ah pakkanum.", category: "Travel", emoji: "🌌" },
  { id: "travel-4", title: "Our first salary", description: "Nammaloda dream job poitu vara first salary vanthone antha hapiness ah 2 perum share pananum.", category: "Travel", emoji: "🗺️" },
  { id: "date-1", title: "Moon night", description: "Oru night namma veetu motamadila la paduthutu nan un kaimela paduthutu kati pudichutu moon stars lam parthute pesanum.", category: "Dates", emoji: "🕯️" },
  { id: "date-2", title: "Bike Wheeling", description: "Enna bike pinnadi ukaravechu wheeling pani oru round ponum, ithu unooda asai da.", category: "Dates", emoji: "📚" },
  { id: "date-3", title: "Marriage Decoration", description: "Namma marriage day matum illa , matha elam function um veckanum elame namma rendu perum senthu decide pananum food , mandapam, reception, sangeeth, mehandi elame.", category: "Dates", emoji: "🌙" },
  { id: "date-4", title: "Marriage invitation", description: "Neyum Nanum Serthu namma marriage invitation ah namma relatives ellaru veetukum kudukanum elam oorukum oru oru day poitu list potu kudukanum.", category: "Dates", emoji: "🍽️" },
  { id: "food-1", title: "Theatre Date", description: "Night show , neyum nanum bike la poitu movie parthutu visile adichu enjoy pani parthutu ore pop corn 2 perum share pani movie parthutu nightla kati pudichu bike la veetuku vanathu tired le thunganum.", category: "Food", emoji: "🍜" },
  { id: "food-2", title: "Love movie night date", description: "Namma roomla night time la oru full movie pakanum neyum nanum thungama athupathi comments solitu , namaku pudicha hero movie ah iruntha inum superah irukum mukiyama HD la , and only bra and jeti", category: "Food", emoji: "🍝" },
  { id: "food-3", title: "Korean Movie night", description: "Night la bit padam potu TV la namma 2 perum matum parkanum twist enanah matter panakudathu just movie pakanum nan enna venumna panuven un kai eduthu vechupen but ne ethum panakudathu", category: "Food", emoji: "🍰" },
  { id: "adventure-1", title: "Honeymoon", description: "Kalyanam munadi namma neriya suthirpom but Honeymoon konjam something special, namma 2 peru matum couples ah intha olagathaye suthi pakanum, night stays, neriya food try pananum , new language people kita pesuvom, namma matumm full oda enjoy pannaum.", category: "Adventures", emoji: "🎢" },
  { id: "adventure-2", title: "Family trip", description: "Namma 2 peroda family fulla oru bus la , haa no kandipa pathathu 2-3 bus la trip ponum(any place) 3 to 4 days.", category: "Adventures", emoji: "🌤️" },
  { id: "adventure-3", title: "Deepavali Together", description: "Namma family oda ona morning oil bath pani , new dress potu azhaga ready agi, patasu vedichutu , kovil ku poitu , non-veg saptu, elarukitayum asirvatham vangitu , night crackers nightla ithumari deepavali venum .", category: "Adventures", emoji: "📸" },
  { id: "romance-1", title: "Namma kalyanam", description: "Un parents and en parents munadii , full love oda nama sermatomnu nenaichavanga munnadi , grand marriage pannaum apo thali katumbothu ne forehead la kiss pananum stagela and kuthu dance namma senthu marriagela .", category: "Romance", emoji: "💌" },
  { id: "romance-2", title: "Cooking sunday - Chicken kuruma , Idly", description: "Namaku kedaikura antha one leave sunday la morning late ah elunthu aprom namale chicken kuruma idly senju, kuti kuti romance and neriya fun oda  sapdanum.", category: "Romance", emoji: "🎀" },
  { id: "romance-3", title: "Our Dream House", description: "Namma kasu potu nama onu onuah parthu parthu unakum enakum pudichamari design la namakana first dream house kati grahapravesham pananaum.", category: "Romance", emoji: "🧸" },
  { id: "romance-4", title: "Our first dance as Husband and Wife", description: "Night time la namma roomla full sound oda speaker la patu potu elame marakuramari dance adanum.", category: "Romance", emoji: "🎧" },
  { id: "future-1", title: "First Night", description: "Intha topic padikumbothe oru smile vanthurum kandipa , intha first night verum romance matum ila athu namakana night namma love nama urimaiah yarum ethum kekama nimathiya peace ah irukapora night", category: "Future", emoji: "⏳" },
  { id: "future-2", title: "Kutii Gokul", description: "Nama kalyanam panitu namma love oda adharama namaku oru kuti boy baby pethukalam, avana konjitu fun panitu avan pandra kurubulam samalichutu superah irukum da.", category: "Future", emoji: "✨" },
  
];

const categories: Category[] = ["Travel", "Dates", "Food", "Adventures", "Romance", "Future"];

// These two wishes are the hidden, extra-important ones. They trigger the golden-heart scene
// only when selected randomly from one of the jars.
const SPECIAL_WISH_IDS = new Set(["romance-1", "future-2"]);

function BucketListPage() {
  const [dreams, setDreams] = useState<Dream[]>(starterDreams);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [specialReveal, setSpecialReveal] = useState(false);
  // Remember the last note opened from each jar so clicks reveal dreams in list order.
  const [lastOpenedByJar, setLastOpenedByJar] = useState<Record<JarName, string | null>>({ bucket: null, completed: null });
  const [loaded, setLoaded] = useState(false);
  const [activeDream, setActiveDream] = useState<Dream | null>(null);
  const [activeJar, setActiveJar] = useState<JarName>("bucket");
  const [paperPhase, setPaperPhase] = useState<PaperPhase>("unfold");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCategory, setNewCategory] = useState<Category>("Romance");
  const [showAddDream, setShowAddDream] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved: unknown = JSON.parse(raw);
        if (typeof saved === "object" && saved !== null) {
          const value = saved as { dreams?: unknown; completedIds?: unknown };
          if (Array.isArray(value.dreams)) {
            const validDreams = value.dreams.filter((item): item is Dream =>
              typeof item === "object" && item !== null &&
              typeof (item as Dream).id === "string" &&
              typeof (item as Dream).title === "string" &&
              typeof (item as Dream).description === "string" &&
              typeof (item as Dream).category === "string" &&
              typeof (item as Dream).emoji === "string"
            );

            // Keep source-code dreams in sync with localStorage. This means edits to
            // starterDreams (including future-2) appear on the site after a reload,
            // while user-created custom dreams are preserved.
            const starterIds = new Set(starterDreams.map((dream) => dream.id));
            const customDreams = validDreams.filter(
              (dream) => !starterIds.has(dream.id)
            );
            setDreams([...starterDreams, ...customDreams]);
          }
          if (Array.isArray(value.completedIds)) {
            setCompletedIds(value.completedIds.filter((id): id is string => typeof id === "string"));
          }
        }
      }
    } catch {
      // Use the starter dreams if browser storage is unavailable or invalid.
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ dreams, completedIds }));
    } catch {
      // The experience remains usable for the current visit without storage.
    }
  }, [dreams, completedIds, loaded]);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 2400);
    return () => window.clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    if (!activeDream) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && paperPhase !== "fold" && paperPhase !== "travel") {
        setActiveDream(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeDream, paperPhase]);

  const pendingDreams = useMemo(
    () => dreams.filter((dream) => !completedIds.includes(dream.id)),
    [dreams, completedIds],
  );
  const completedDreams = useMemo(
    () => dreams.filter((dream) => completedIds.includes(dream.id)),
    [dreams, completedIds],
  );
  const progress = dreams.length ? Math.round((completedDreams.length / dreams.length) * 100) : 0;


  function openDreamCard(dream: Dream, jar: JarName) {
    setActiveJar(jar);
    setActiveDream(dream);
    setSpecialReveal(SPECIAL_WISH_IDS.has(dream.id));
    setPaperPhase("emerge");
    window.setTimeout(() => setPaperPhase("unfold"), 450);
  }

  function moveDreamFromCard(dream: Dream, jar: JarName) {
    setActiveJar(jar);
    setActiveDream(dream);
    setSpecialReveal(SPECIAL_WISH_IDS.has(dream.id));
    setPaperPhase("fold");
    window.setTimeout(() => {
      setPaperPhase("travel");
      window.setTimeout(() => {
        setCompletedIds((current) => jar === "bucket"
          ? current.includes(dream.id) ? current : [...current, dream.id]
          : current.filter((id) => id !== dream.id));
        setActiveDream(null);
        setSpecialReveal(false);
        setPaperPhase("unfold");
        setNotice(jar === "bucket"
          ? `“${dream.title}” moved to the completed jar! 💖`
          : `“${dream.title}” returned to the dream jar. ♡`);
      }, 650);
    }, 650);
  }

  function openJar(jar: JarName) {
    const pool = jar === "bucket" ? pendingDreams : completedDreams;
    if (pool.length === 0) {
      setNotice(jar === "bucket" ? "Your dream jar is empty — add a dream first! 💌" : "No completed dreams yet. Your first memory is waiting! 💗");
      return;
    }
    // Open the next available dream in its existing list order (no random selection).
    const lastId = lastOpenedByJar[jar];
    const lastIndex = lastId ? pool.findIndex((dream) => dream.id === lastId) : -1;
    const nextIndex = lastIndex < 0 ? 0 : (lastIndex + 1) % pool.length;
    const pick = pool[nextIndex];
    if (!pick) return;
    setLastOpenedByJar((current) => ({ ...current, [jar]: pick.id }));
    setActiveJar(jar);
    setActiveDream(pick);
    setSpecialReveal(SPECIAL_WISH_IDS.has(pick.id));
    setPaperPhase("emerge");
    window.setTimeout(() => setPaperPhase("unfold"), 450);
  }

  function finishPaper() {
    if (!activeDream || paperPhase === "fold" || paperPhase === "travel") return;
    setPaperPhase("fold");
    window.setTimeout(() => {
      setPaperPhase("travel");
      window.setTimeout(() => {
        setCompletedIds((current) =>
          activeJar === "bucket"
            ? current.includes(activeDream.id) ? current : [...current, activeDream.id]
            : current.filter((id) => id !== activeDream.id),
        );
        setActiveDream(null);
        setSpecialReveal(false);
        setPaperPhase("unfold");
        setNotice(activeJar === "bucket" ? "Folded with love and saved in the completed jar! 💖" : "Your dream is back in the bucket list jar. ♡");
      }, 650);
    }, 650);
  }

  function closePaper() {
    if (paperPhase === "fold" || paperPhase === "travel") return;
    setActiveDream(null);
    setSpecialReveal(false);
  }

  function addDream(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = newTitle.trim();
    if (!title) return;
    const dream: Dream = {
      id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title,
      description: newDescription.trim() || "A little dream we want to make real together.",
      category: newCategory,
      emoji: "💗",
    };
    setDreams((current) => [dream, ...current]);
    setNewTitle("");
    setNewDescription("");
    setNewCategory("Romance");
    setShowAddDream(false);
    setNotice("A new little dream has been tucked into the bucket list jar! 💌");
  }

  function removeCustomDream(id: string) {
    setDreams((current) => current.filter((dream) => dream.id !== id));
    setCompletedIds((current) => current.filter((item) => item !== id));
    setNotice("Dream removed from your collection.");
  }

  return (
    <main className="two-jar-page">
      <style>{`
        .two-jar-page {
          --jar-ink: #563b45; --jar-muted: #967985; --jar-rose: #b96f89; --jar-line: #e8ccd7;
          min-height: 100vh; padding: 42px 20px 90px; color: var(--jar-ink);
          background: radial-gradient(ellipse at 12% 8%, #f4dbe6 0, transparent 28%),
            radial-gradient(ellipse at 90% 25%, #f7e5d7 0, transparent 32%),
            linear-gradient(145deg, #fff9f5, #f8edf1 58%, #fff9f1);
          font-family: Georgia, 'Times New Roman', serif; overflow: hidden;
        }
        .jar-shell { max-width: 1100px; margin: 0 auto; }
        .jar-hero { text-align: center; padding: 12px 12px 24px; }
        .jar-kicker { margin: 0; color: #ae748a; font: 10px/1.7 Arial, sans-serif; letter-spacing: 4px; text-transform: uppercase; }
        .jar-title { margin: 14px 0 12px; font-size: clamp(38px, 7vw, 72px); line-height: 1.05; font-weight: 400; letter-spacing: -1.8px; }
        .jar-title em { color: #b96f89; font-weight: 400; }
        .jar-intro { max-width: 590px; margin: 0 auto; color: #947782; font-size: 14px; line-height: 1.9; }
        .jar-progress { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 15px; margin: 12px 0 28px; padding: 17px 21px; border: 1px solid var(--jar-line); border-radius: 17px; background: #fffaf3dc; }
        .jar-progress-icon { font-size: 25px; }
        .jar-progress-label { margin: 0 0 8px; color: #9b7886; font: 10px Arial, sans-serif; letter-spacing: 2px; text-transform: uppercase; }
        .jar-progress-track { height: 8px; overflow: hidden; border-radius: 999px; background: #f0e1e6; }
        .jar-progress-fill { height: 100%; border-radius: inherit; background: linear-gradient(90deg, #e9b4c7, #b96f89); transition: width .5s ease; }
        .jar-progress-count { color: #a76d83; font: 12px Arial, sans-serif; white-space: nowrap; }
        .jar-pair { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; align-items: stretch; margin: 18px 0 28px; }
        .jar-card { position: relative; min-width: 0; padding: 22px 18px 20px; overflow: hidden; border: 1px solid #e8d1da; border-radius: 24px; background: #fffaf4bd; text-align: center; }
        .jar-card::before { position: absolute; top: -52px; left: -40px; width: 140px; height: 140px; border-radius: 50%; content: ""; background: #f5dfe7a0; }
        .jar-card.completed::before { left: auto; right: -40px; background: #e8e1f5a0; }
        .jar-card-head { position: relative; z-index: 1; }
        .jar-card-head h2 { margin: 0 0 6px; font-size: clamp(22px, 3vw, 31px); font-weight: 400; }
        .jar-card-head p { min-height: 38px; margin: 0; color: var(--jar-muted); font-size: 12px; line-height: 1.7; }
        .jar-illustration-wrap { position: relative; display: grid; min-height: 310px; place-items: center; }
        .jar-glow { position: absolute; width: 240px; height: 210px; border-radius: 50%; background: radial-gradient(ellipse, #edc8d8a3, transparent 70%); filter: blur(5px); }
        .completed .jar-glow { background: radial-gradient(ellipse, #d9c9eaa3, transparent 70%); }
        .jar-illustration { position: relative; width: 200px; height: 238px; cursor: pointer; border: 0; padding: 0; background: transparent; transform: rotate(-2deg); transition: transform .3s ease; -webkit-tap-highlight-color: transparent; }
        .completed .jar-illustration { transform: rotate(2deg); }
        .jar-illustration:hover { transform: translateY(-5px) rotate(0deg); }
        .jar-illustration:focus-visible { outline: 3px solid #bd7892; outline-offset: 7px; border-radius: 20px; }
        .jar-neck { position: absolute; z-index: 3; top: 4px; left: 51px; width: 98px; height: 35px; border: 3px solid #d4a4b6; border-bottom: 0; border-radius: 14px 14px 0 0; background: linear-gradient(90deg, #fff9f0bd, #f3dbe5b8, #fff9f0bd); }
        .jar-lid { position: absolute; z-index: 4; top: -3px; left: 45px; width: 110px; height: 17px; border: 2px solid #c58ba1; border-radius: 7px; background: repeating-linear-gradient(90deg, #e6bac9, #e6bac9 5px, #f4dce5 5px, #f4dce5 9px); box-shadow: 0 3px 4px #80515f24; }
        .jar-glass { position: absolute; top: 31px; left: 15px; width: 170px; height: 190px; overflow: hidden; border: 3px solid #d8a9ba; border-top-width: 2px; border-radius: 22px 22px 42px 42px; background: linear-gradient(105deg, #ffffffa8 0%, #f6dfe8a0 26%, #fff9f1a6 56%, #e9c6d6a3 100%); box-shadow: inset 12px 0 18px #fff9, inset -12px 0 18px #c88fa32b, 0 17px 28px #80515f1c; }
        .jar-glass::before { position: absolute; inset: 9px; border: 1px solid #ffffffb8; border-radius: 14px 14px 32px 32px; content: ""; pointer-events: none; }
        .jar-shine { position: absolute; z-index: 2; top: 52px; left: 30px; width: 10px; height: 116px; border-radius: 999px; background: #ffffffa8; transform: rotate(3deg); pointer-events: none; }
        .jar-papers { position: absolute; inset: 45px 12px 8px; display: flex; flex-wrap: wrap; align-content: end; justify-content: center; gap: 4px; padding: 8px 4px 12px; }
        .jar-paper-bit { display: grid; width: 30px; height: 39px; place-items: center; border: 1px solid #d9b8a6; border-radius: 3px; background: #fff0d5; box-shadow: 1px 3px 3px #77505a20; font-size: 15px; transform: rotate(var(--paper-tilt)); animation: paperBob 3.5s ease-in-out infinite; }
        .jar-paper-bit:nth-child(3n) { background: #f9e1e8; }
        .jar-paper-bit:nth-child(4n) { background: #eee3f6; }
        .jar-paper-bit:nth-child(2n) { animation-delay: -.9s; }
        .jar-bubble { position: absolute; z-index: 3; display: grid; width: 35px; height: 35px; place-items: center; border: 1px solid #d7a8b8; border-radius: 50%; color: #9d6279; background: #fff8f2; box-shadow: 0 5px 12px #81536319; font-size: 17px; }
        .jar-bubble-one { top: 72px; right: -1px; }
        .jar-bubble-two { bottom: 25px; left: -1px; animation: paperBob 3s ease-in-out infinite; }
        .jar-count { position: absolute; z-index: 5; right: 17px; bottom: 10px; display: grid; min-width: 31px; height: 31px; place-items: center; border: 2px solid #fff9f3; border-radius: 50%; color: #fff; background: #b96f89; font: 11px Arial, sans-serif; box-shadow: 0 3px 8px #81536328; }
        .completed .jar-count { background: #8e7cae; }
        .jar-open-button { position: relative; z-index: 2; display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 46px; padding: 12px 20px; border: 1px solid #d8a5b7; border-radius: 999px; color: #fffaf6; background: #b96f89; box-shadow: 0 7px 17px #b96f8930; font: 12px Arial, sans-serif; cursor: pointer; transition: transform .2s, box-shadow .2s; }
        .completed .jar-open-button { border-color: #9d8ab9; background: #8e7cae; box-shadow: 0 7px 17px #8e7cae30; }
        .jar-open-button:hover { transform: translateY(-2px); box-shadow: 0 11px 22px #8b5b6d2b; }
        .jar-hint { margin: 12px 0 0; color: #a38a93; font: 10px Arial, sans-serif; }
        .dream-collection { margin: 34px 0 0; }
        .collection-heading { margin: 0 auto 22px; text-align: center; }
        .collection-heading .jar-kicker { margin-bottom: 8px; }
        .collection-heading h2 { margin: 0 0 8px; font-size: clamp(28px, 4vw, 40px); font-weight: 400; }
        .collection-heading p { margin: 0; color: #987b86; font-size: 13px; line-height: 1.8; }
        .dream-columns { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; align-items: start; }
        .dream-column { min-width: 0; padding: 19px; border: 1px solid #e8d1da; border-radius: 22px; background: #fffaf4c9; }
        .dream-column.completed-column { background: #fbf8ffcf; border-color: #ded4ed; }
        .dream-column-title { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin: 0 0 15px; padding-bottom: 13px; border-bottom: 1px solid #ead6de; }
        .completed-column .dream-column-title { border-color: #e3dcef; }
        .dream-column-title h3 { margin: 0; font-size: 22px; font-weight: 400; }
        .dream-column-title span { display: grid; min-width: 30px; height: 30px; padding: 0 7px; place-items: center; border-radius: 50%; color: #fff; background: #b96f89; font: 11px Arial, sans-serif; }
        .completed-column .dream-column-title span { background: #8e7cae; }
        .dream-card-list { display: grid; gap: 11px; }
        .dream-list-card { position: relative; min-width: 0; padding: 15px; border: 1px solid #ead8dc; border-radius: 15px; background: #fffdf9; box-shadow: 0 5px 15px #79505b08; animation: overlayIn .3s ease both; }
        .dream-list-card.precious-dream-card { isolation: isolate; overflow: hidden; border: 1px solid #d5b45f; background: linear-gradient(135deg, #fff9e5 0%, #fff1c6 48%, #fffaf0 100%); box-shadow: 0 0 0 1px #f4dfa0, 0 8px 24px #b98b2b20, inset 0 0 24px #f4d77b35; }
        .precious-dream-card::before { position: absolute; z-index: -1; top: -55px; right: -30px; width: 145px; height: 145px; border-radius: 50%; content: ""; background: radial-gradient(circle, #f5d77875, transparent 70%); }
        .precious-dream-card .dream-list-emoji { border: 1px solid #e4ca78; background: #fff0bd; box-shadow: 0 0 15px #e5c35b38; }
        .precious-dream-card .dream-list-category { color: #a17a2e; }
        .precious-dream-card .dream-list-copy h4 { color: #684b1e; }
        .precious-dream-card .dream-list-copy > p:not(.dream-list-category) { color: #927443; }
        .precious-dream-card .dream-list-button { border-color: #dfc36e; color: #8c6826; background: #fff8df; }
        .precious-dream-card .dream-list-button.primary { border-color: #b88b2e; color: #fffdf4; background: linear-gradient(135deg, #c9a347, #a77a24); }
        .precious-dream-card .dream-list-button.remove { color: #a17a2e; }
        .list-heart-orbit { position: absolute; inset: 0; z-index: 0; overflow: hidden; border-radius: inherit; pointer-events: none; }
        .orbit-heart { position: absolute; right: 9%; bottom: -20px; color: #c49a37; font-size: 15px; text-shadow: 0 0 9px #edce75a8; opacity: 0; animation: listGoldenHeart 5.5s linear infinite; }
        .orbit-heart-2 { right: 23%; animation-delay: -1.6s; animation-duration: 6.5s; font-size: 12px; }
        .orbit-heart-3 { right: 4%; animation-delay: -3s; animation-duration: 7s; font-size: 13px; }
        .orbit-heart-4 { right: 31%; animation-delay: -2.2s; animation-duration: 6s; font-size: 11px; }
        .orbit-heart-5 { right: 15%; animation-delay: -4.2s; animation-duration: 7.5s; font-size: 10px; }
        .precious-bit { border-color: #d1ae4f !important; color: #986e1f; background: linear-gradient(135deg, #fff0ad, #d8b75b) !important; box-shadow: 0 0 12px #e6c45c91, 0 3px 6px #77505a20; }
        .precious-dream-card .dream-list-top, .precious-dream-card .dream-list-actions { position: relative; z-index: 1; }
        .completed-column .dream-list-card { border-color: #e3dced; background: #fffdfd; }
        .dream-list-top { display: flex; align-items: flex-start; gap: 11px; }
        .dream-list-emoji { display: grid; flex: 0 0 39px; width: 39px; height: 39px; place-items: center; border-radius: 12px; background: #f8e8ed; font-size: 21px; }
        .completed-column .dream-list-emoji { background: #eee8f7; }
        .dream-list-copy { min-width: 0; flex: 1; }
        .dream-list-category { margin: 1px 0 5px; color: #b0788c; font: 9px Arial, sans-serif; letter-spacing: 1.5px; text-transform: uppercase; }
        .completed-column .dream-list-category { color: #8e7cae; }
        .dream-list-copy h4 { margin: 0; font-size: 17px; line-height: 1.4; font-weight: 400; overflow-wrap: anywhere; }
        .dream-list-copy p { margin: 7px 0 0; color: #967985; font-size: 12px; line-height: 1.7; overflow-wrap: anywhere; }
        .dream-list-actions { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 13px; }
        .dream-list-button { min-height: 35px; padding: 8px 11px; border: 1px solid #e4c7d1; border-radius: 999px; color: #9b6077; background: #fff8f5; font: 10px Arial, sans-serif; cursor: pointer; transition: transform .2s, background .2s; }
        .dream-list-button:hover { transform: translateY(-1px); background: #fbeaf0; }
        .dream-list-button.primary { border-color: #b96f89; color: #fff; background: #b96f89; }
        .completed-column .dream-list-button.primary { border-color: #8e7cae; background: #8e7cae; }
        .dream-list-button.remove { margin-left: auto; color: #a37f8d; }
        .dream-empty { padding: 28px 12px; color: #a38a93; text-align: center; font-size: 13px; line-height: 1.8; }
        .jar-add-section { margin: 28px 0 0; padding: 23px; border: 1px solid #e8d1da; border-radius: 20px; background: #fffaf4d9; }
        .jar-add-top { display: flex; align-items: center; justify-content: space-between; gap: 15px; margin-bottom: 14px; }
        .jar-add-top h2 { margin: 0; font-size: 25px; font-weight: 400; }
        .jar-add-top p { margin: 6px 0 0; color: #987b86; font-size: 12px; line-height: 1.7; }
        .jar-toggle-add { flex: 0 0 auto; min-height: 43px; padding: 10px 15px; border: 1px solid #d9a8b9; border-radius: 999px; color: #a15f79; background: #fff6f5; font: 12px Arial, sans-serif; cursor: pointer; }
        .jar-form { display: grid; grid-template-columns: minmax(0, 1fr) 165px; gap: 11px; }
        .jar-field { width: 100%; min-width: 0; border: 1px solid #e5cbd5; border-radius: 11px; padding: 13px 14px; color: #5a3e49; background: #fffdf9; font: 14px Arial, sans-serif; outline: none; }
        .jar-field:focus { border-color: #b96f89; box-shadow: 0 0 0 3px #b96f8918; }
        .jar-field-full { grid-column: 1 / -1; resize: vertical; }
        .jar-form-bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; grid-column: 1 / -1; }
        .jar-form-note { color: #a28791; font: 11px Arial, sans-serif; }
        .jar-save-button { min-height: 44px; padding: 11px 18px; border: 0; border-radius: 999px; color: #fff; background: #b96f89; font: 12px Arial, sans-serif; cursor: pointer; }
        .jar-custom-list { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 16px; }
        .jar-custom-chip { display: inline-flex; align-items: center; gap: 7px; max-width: 100%; border: 1px solid #ead6de; border-radius: 999px; padding: 7px 10px; color: #8c6877; background: #fff8f5; font: 11px Arial, sans-serif; }
        .jar-custom-chip button { border: 0; color: #a7808e; background: transparent; cursor: pointer; }
        .jar-footer { margin: 43px 0 0; text-align: center; color: #a17e8c; font-size: 13px; line-height: 1.9; }
        .jar-footer span { display: block; margin-bottom: 8px; color: #c5859e; font-size: 28px; animation: heartPulse 2.4s ease-in-out infinite; }
        .paper-overlay { position: fixed; z-index: 9999; inset: 0; display: grid; place-items: center; overflow-y: auto; padding: 22px; background: #24141fdc; backdrop-filter: blur(9px); animation: overlayIn .3s ease both; }
        .paper-overlay.golden-reveal { background: radial-gradient(ellipse at center, #4b351ddf 0%, #21121feF 72%); }
        .golden-heart-storm { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
        .golden-heart-storm span { position: absolute; bottom: -55px; color: #f5d98a; text-shadow: 0 0 14px #f7d779b5, 0 0 28px #d6a84465; animation: goldenHeartRise 6s linear infinite; opacity: 0; }
        .golden-reveal .paper-stage { animation: goldenSceneIn .9s ease both; }
        .golden-scene-kicker { position: relative; z-index: 2; margin: 0 0 18px; color: #f7df9d; text-align: center; font: 10px/1.8 Arial, sans-serif; letter-spacing: 2.4px; animation: goldenTextIn 1s .25s both; }
        .dream-paper.precious-paper { border-color: #d1b05f; background: repeating-linear-gradient(0deg, #fff9e7 0, #fff9e7 31px, #ead8a9 32px, #fff9e7 33px); box-shadow: 0 0 0 5px #f7e8bd24, 0 0 45px #f4d47b75, 0 24px 70px #0007, inset 0 0 0 5px #f7e8bd, inset 0 0 25px #d4b48c45; }
        .dream-paper.precious-paper::before { border-color: #d1b05f; }
        .precious-paper .paper-tape { background: linear-gradient(135deg, #f5df9d, #d8b65f); }
        .precious-paper .paper-category, .precious-paper .paper-script { color: #a17a32; }
        .golden-promise { margin: 18px 0 0; padding: 10px 12px; border-top: 1px solid #e6cf91; border-bottom: 1px solid #e6cf91; color: #9b7736; text-align: center; font-size: 13px; line-height: 1.8; font-style: italic; }
        .paper-close { position: fixed; z-index: 5; top: 16px; right: 17px; display: grid; width: 44px; height: 44px; place-items: center; border: 1px solid #ffffff60; border-radius: 50%; color: white; background: #ffffff12; font-size: 24px; cursor: pointer; }
        .paper-stage { display: grid; place-items: center; width: min(100%, 540px); perspective: 1300px; }
        .dream-paper { position: relative; width: min(100%, 440px); min-height: 390px; padding: 42px 34px 30px; border: 1px solid #e0c4a5; color: #5b4142; background: repeating-linear-gradient(0deg, #fff9e9 0, #fff9e9 31px, #f0e0c8 32px, #fff9e9 33px); box-shadow: 0 24px 70px #0005, inset 0 0 25px #d4b48c2b; transform-origin: center center; }
        .dream-paper::before { position: absolute; inset: 12px; border: 1px solid #d8baa0a6; content: ""; pointer-events: none; }
        .dream-paper::after { position: absolute; top: 0; bottom: 0; left: 43px; width: 1px; content: ""; background: #dca8b5a6; }
        .dream-paper.emerge { animation: paperEmerge .48s cubic-bezier(.2,.8,.2,1) both; }
        .dream-paper.unfold { animation: paperUnfold .7s cubic-bezier(.2,.8,.2,1) both; }
        .dream-paper.fold { animation: paperFold .65s ease-in forwards; }
        .dream-paper.travel { animation: paperTravel .65s ease-in forwards; }
        .paper-tape { position: absolute; z-index: 2; top: -10px; left: 50%; width: 76px; height: 23px; background: #e9c1c5d9; transform: translateX(-50%) rotate(-3deg); box-shadow: 0 2px 5px #78555a15; }
        .paper-content { position: relative; z-index: 1; animation: contentAppear .55s .22s ease both; }
        .paper-category { color: #b0788c; font: 9px Arial, sans-serif; letter-spacing: 3px; text-transform: uppercase; }
        .paper-emoji { margin: 18px 0 10px; font-size: 35px; }
        .paper-title { margin: 0 0 14px; font-size: clamp(28px, 5vw, 40px); line-height: 1.18; font-weight: 400; }
        .paper-description { color: #876b6b; font-size: 15px; line-height: 2; white-space: pre-line; }
        .paper-script { margin-top: 28px; color: #b0788c; font-size: 18px; font-style: italic; }
        .paper-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 22px; }
        .paper-action { min-height: 45px; padding: 12px 17px; border: 1px solid #e6c5d0; border-radius: 999px; color: #9b6077; background: #fff8f5; font: 12px Arial, sans-serif; cursor: pointer; transition: transform .2s; }
        .paper-action:hover { transform: translateY(-2px); }
        .paper-action.primary { border-color: #b96f89; color: white; background: #b96f89; }
        .paper-action.undo { border-color: #9582b3; color: white; background: #8e7cae; }
        .paper-note { margin: 15px 0 0; color: #d9bdc9; text-align: center; font: 11px Arial, sans-serif; }
        .jar-toast { position: fixed; z-index: 10020; right: 18px; bottom: 20px; max-width: calc(100vw - 36px); padding: 13px 17px; border: 1px solid #e6c9d4; border-radius: 999px; color: #744d5d; background: #fffaf4; box-shadow: 0 12px 35px #573d461f; font: 12px Arial, sans-serif; animation: overlayIn .25s ease both; }
        @keyframes listGoldenHeart { 0% { transform: translate3d(0, 12px, 0) rotate(-14deg) scale(.7); opacity: 0; } 12% { opacity: .75; } 70% { opacity: .55; } 100% { transform: translate3d(-20px, -220px, 0) rotate(22deg) scale(1.2); opacity: 0; } }
        @keyframes goldenHeartRise { 0% { transform: translate3d(0, 0, 0) rotate(-12deg) scale(.7); opacity: 0; } 12% { opacity: .95; } 75% { opacity: .8; } 100% { transform: translate3d(28px, -115vh, 0) rotate(24deg) scale(1.35); opacity: 0; } }
        @keyframes goldenSceneIn { from { opacity: 0; transform: scale(.94) translateY(15px); filter: blur(5px); } to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); } }
        @keyframes goldenTextIn { from { opacity: 0; transform: translateY(10px); letter-spacing: 5px; } to { opacity: 1; transform: translateY(0); letter-spacing: 2.4px; } }
        @keyframes paperBob { 0%,100% { transform: translateY(0) rotate(var(--paper-tilt)); } 50% { transform: translateY(-4px) rotate(calc(var(--paper-tilt) + 3deg)); } }
        @keyframes heartPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.12); } }
        @keyframes overlayIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes paperEmerge { 0% { opacity: 0; transform: translateY(130px) scale(.18) rotate(12deg); filter: blur(3px); } 70% { opacity: 1; transform: translateY(-12px) scale(.88) rotate(-3deg); filter: blur(0); } 100% { opacity: 1; transform: translateY(0) scale(.9) rotate(0); } }
        @keyframes paperUnfold { 0% { opacity: .8; transform: scale(.72) rotateX(58deg) rotateZ(5deg); clip-path: inset(38% 0 38% 0); } 65% { clip-path: inset(0 0 0 0); transform: scale(1.02) rotateX(-4deg) rotateZ(-1deg); } 100% { opacity: 1; transform: scale(1) rotateX(0) rotateZ(0); clip-path: inset(0 0 0 0); } }
        @keyframes paperFold { 0% { opacity: 1; transform: scale(1) rotateX(0); clip-path: inset(0 0 0 0); } 45% { transform: scale(.92) rotateX(35deg); clip-path: inset(34% 0 34% 0); } 100% { opacity: .9; transform: scale(.38) rotate(10deg); clip-path: inset(39% 0 39% 0); } }
        @keyframes paperTravel { 0% { opacity: .9; transform: translateY(0) scale(.38) rotate(10deg); } 100% { opacity: 0; transform: translate(130px, 160px) scale(.04) rotate(35deg); } }
        @keyframes contentAppear { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 760px) {
          .two-jar-page { padding: 30px 14px 75px; }
          .jar-pair { grid-template-columns: 1fr; gap: 17px; }
          .jar-card { padding: 20px 15px; }
          .jar-illustration-wrap { min-height: 270px; }
          .jar-progress { grid-template-columns: auto 1fr; gap: 11px; padding: 14px; }
          .jar-progress-count { grid-column: 2; }
          .jar-add-section { padding: 18px 14px; }
          .dream-columns { grid-template-columns: 1fr; }
          .dream-column { padding: 14px; }
          .jar-form { grid-template-columns: 1fr; }
          .jar-field-full, .jar-form-bottom { grid-column: auto; }
          .jar-add-top { align-items: flex-start; }
          .dream-paper { min-height: 360px; padding: 38px 25px 25px; }
          .dream-paper::after { left: 33px; }
        }
        @media (max-width: 420px) {
          .jar-add-top { flex-direction: column; }
          .jar-toggle-add { width: 100%; }
          .paper-overlay { padding: 16px; }
          .dream-paper { padding: 34px 21px 23px; }
          .paper-title { font-size: 28px; }
          .paper-description { font-size: 14px; }
          .paper-controls { flex-direction: column; }
          .paper-action { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .two-jar-page *, .two-jar-page *::before, .two-jar-page *::after, .paper-overlay, .paper-overlay *, .golden-heart-storm span {
            animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="jar-shell">
        <header className="jar-hero">
          <p className="jar-kicker">little dreams become real memories</p>
          <h1 className="jar-title">Our Little <em>Bucket List</em></h1>
          <p className="jar-intro">
            Nammakita Two jars iruku, First - dreams , second - completed dreams. One pick panu dream jarla,
            make the dream come true, then fold it up and keep it in our completed jar. ♡
          </p>
        </header>

        <section className="jar-progress" aria-label="Dream completion progress">
          <span className="jar-progress-icon" aria-hidden="true">♡</span>
          <div>
            <p className="jar-progress-label">Our story, one dream at a time</p>
            <div className="jar-progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label={`${progress}% of dreams achieved`}>
              <div className="jar-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="jar-progress-count">{completedDreams.length} / {dreams.length} achieved · {progress}%</div>
        </section>

        <section className="jar-pair" aria-label="Our two dream jars">
          <article className="jar-card">
            <div className="jar-card-head">
              <h2>♡ Our Dream Jar</h2>
              <p>Folded notes waiting for their moment.<br />Choose one and see what adventure finds us.</p>
            </div>
            <div className="jar-illustration-wrap">
              <div className="jar-glow" />
              <button className="jar-illustration" type="button" onClick={() => openJar("bucket")} aria-label={`Open dream jar with ${pendingDreams.length} dreams`}>
                <span className="jar-lid" />
                <span className="jar-neck" />
                <span className="jar-glass">
                  <span className="jar-papers">
                    {pendingDreams.slice(0, 18).map((dream, index) => (
                      <span className={`jar-paper-bit ${SPECIAL_WISH_IDS.has(dream.id) ? "precious-bit" : ""}`} key={dream.id} style={{ "--paper-tilt": `${(index % 5 - 2) * 6}deg` } as CSSProperties} aria-hidden="true">
                        {SPECIAL_WISH_IDS.has(dream.id) ? "💛" : index % 3 === 0 ? "♡" : index % 3 === 1 ? "✧" : "✿"}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="jar-shine" />
                <span className="jar-bubble jar-bubble-one" aria-hidden="true">♡</span>
                <span className="jar-bubble jar-bubble-two" aria-hidden="true">✧</span>
                <span className="jar-count">{pendingDreams.length}</span>
              </button>
            </div>
            <button className="jar-open-button" type="button" onClick={() => openJar("bucket")}>✧ Pick the next folded dream</button>
            <p className="jar-hint">Tap the jar or button to reveal the next note in order.</p>
          </article>

          <article className="jar-card completed">
            <div className="jar-card-head">
              <h2>✧ Our Completed Jar</h2>
              <p>Dreams we've turned into memories.<br />Open one to revisit it or undo it.</p>
            </div>
            <div className="jar-illustration-wrap">
              <div className="jar-glow" />
              <button className="jar-illustration" type="button" onClick={() => openJar("completed")} aria-label={`Open completed jar with ${completedDreams.length} dreams`}>
                <span className="jar-lid" />
                <span className="jar-neck" />
                <span className="jar-glass">
                  <span className="jar-papers">
                    {completedDreams.slice(0, 18).map((dream, index) => (
                      <span className={`jar-paper-bit ${SPECIAL_WISH_IDS.has(dream.id) ? "precious-bit" : ""}`} key={dream.id} style={{ "--paper-tilt": `${(index % 5 - 2) * 6}deg` } as CSSProperties} aria-hidden="true">
                        {SPECIAL_WISH_IDS.has(dream.id) ? "💛" : index % 3 === 0 ? "💗" : index % 3 === 1 ? "★" : "✓"}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="jar-shine" />
                <span className="jar-bubble jar-bubble-one" aria-hidden="true">★</span>
                <span className="jar-bubble jar-bubble-two" aria-hidden="true">✓</span>
                <span className="jar-count">{completedDreams.length}</span>
              </button>
            </div>
            <button className="jar-open-button" type="button" onClick={() => openJar("completed")}>♡ Revisit a completed dream</button>
            <p className="jar-hint">Tap a folded memory to open it or move it back.</p>
          </article>
        </section>

        <section className="dream-collection" aria-label="All bucket list dreams">
          <div className="collection-heading">
            <p className="jar-kicker">every dream, all in one place</p>
            <h2>Our Little Dream <em>Collection</em></h2>
            <p>Browse every note without picking randomly. Open any dream, mark it achieved, or bring a completed one back.</p>
          </div>
          <div className="dream-columns">
            <section className="dream-column" aria-label="Dreams waiting to be completed">
              <div className="dream-column-title">
                <h3>♡ Still on our list</h3>
                <span>{pendingDreams.length}</span>
              </div>
              {pendingDreams.length ? (
                <div className="dream-card-list">
                  {pendingDreams.map((dream) => (
                    <article className={`dream-list-card ${SPECIAL_WISH_IDS.has(dream.id) ? "precious-dream-card" : ""}`} key={dream.id}>
                      {SPECIAL_WISH_IDS.has(dream.id) && <div className="list-heart-orbit" aria-hidden="true">{["♥", "♡", "💛", "✧", "♥"].map((heart, index) => <span key={index} className={`orbit-heart orbit-heart-${index + 1}`}>{heart}</span>)}</div>}
                      <div className="dream-list-top">
                        <span className="dream-list-emoji" aria-hidden="true">{dream.emoji}</span>
                        <div className="dream-list-copy">
                          <p className="dream-list-category">{dream.category}</p>
                          <h4>{dream.title}</h4>
                          <p>{dream.description}</p>
                        </div>
                      </div>
                      <div className="dream-list-actions">
                        <button className="dream-list-button" type="button" onClick={() => openDreamCard(dream, "bucket")}>Open folded note ↗</button>
                        <button className="dream-list-button primary" type="button" onClick={() => moveDreamFromCard(dream, "bucket")}>✓ Dream achieved</button>
                        {dream.id.startsWith("custom-") && <button className="dream-list-button remove" type="button" onClick={() => removeCustomDream(dream.id)}>Remove ×</button>}
                      </div>
                    </article>
                  ))}
                </div>
              ) : <div className="dream-empty">Every dream has become a memory. ✨<br />Add a new dream whenever you imagine one.</div>}
            </section>

            <section className="dream-column completed-column" aria-label="Completed dreams">
              <div className="dream-column-title">
                <h3>✧ Memories we've made</h3>
                <span>{completedDreams.length}</span>
              </div>
              {completedDreams.length ? (
                <div className="dream-card-list">
                  {completedDreams.map((dream) => (
                    <article className={`dream-list-card ${SPECIAL_WISH_IDS.has(dream.id) ? "precious-dream-card" : ""}`} key={dream.id}>
                      {SPECIAL_WISH_IDS.has(dream.id) && <div className="list-heart-orbit" aria-hidden="true">{["♥", "♡", "💛", "✧", "♥"].map((heart, index) => <span key={index} className={`orbit-heart orbit-heart-${index + 1}`}>{heart}</span>)}</div>}
                      <div className="dream-list-top">
                        <span className="dream-list-emoji" aria-hidden="true">{dream.emoji}</span>
                        <div className="dream-list-copy">
                          <p className="dream-list-category">{dream.category} · achieved ✓</p>
                          <h4>{dream.title}</h4>
                          <p>{dream.description}</p>
                        </div>
                      </div>
                      <div className="dream-list-actions">
                        <button className="dream-list-button" type="button" onClick={() => openDreamCard(dream, "completed")}>Revisit memory ↗</button>
                        <button className="dream-list-button primary" type="button" onClick={() => moveDreamFromCard(dream, "completed")}>↶ Undo · return</button>
                        {dream.id.startsWith("custom-") && <button className="dream-list-button remove" type="button" onClick={() => removeCustomDream(dream.id)}>Remove ×</button>}
                      </div>
                    </article>
                  ))}
                </div>
              ) : <div className="dream-empty">Your first completed dream is waiting here. 💗<br />Choose one from the jar when it comes true.</div>}
            </section>
          </div>
        </section>

        <section className="jar-add-section">
          <div className="jar-add-top">
            <div>
              <h2>Add a dream to our jar 💌</h2>
              <p>Write a new adventure, date, food goal, or tiny romantic challenge to tuck inside.</p>
            </div>
            <button className="jar-toggle-add" type="button" onClick={() => setShowAddDream((show) => !show)}>
              {showAddDream ? "Close form ×" : "+ Add a folded note"}
            </button>
          </div>

          {showAddDream && (
            <form className="jar-form" onSubmit={addDream}>
              <input className="jar-field" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} placeholder="What do we want to do together?" aria-label="Dream title" maxLength={100} required />
              <select className="jar-field" value={newCategory} onChange={(event) => setNewCategory(event.target.value as Category)} aria-label="Dream category">
                {categories.map((category) => <option key={category} value={category}>{category}</option>)}
              </select>
              <textarea className="jar-field jar-field-full" value={newDescription} onChange={(event) => setNewDescription(event.target.value)} placeholder="Add a little note about this dream (optional)..." aria-label="Dream description" rows={3} maxLength={350} />
              <div className="jar-form-bottom">
                <span className="jar-form-note">New notes are placed in Our Dream Jar.</span>
                <button className="jar-save-button" type="submit">Fold & tuck into jar ♡</button>
              </div>
            </form>
          )}

          {dreams.some((dream) => dream.id.startsWith("custom-")) && (
            <div className="jar-custom-list" aria-label="Your added dreams">
              {dreams.filter((dream) => dream.id.startsWith("custom-")).map((dream) => (
                <span className="jar-custom-chip" key={dream.id}>
                  {dream.emoji} {dream.title}
                  <button type="button" onClick={() => removeCustomDream(dream.id)} aria-label={`Remove ${dream.title}`}>×</button>
                </span>
              ))}
            </div>
          )}
        </section>

        <footer className="jar-footer">
          <span aria-hidden="true">♡</span>
          <p>Every folded note is a little promise to ourselves.<br />Every completed dream is a memory we'll get to keep.</p>
          <p>one day, one dream, one little adventure at a time. ✨</p>
        </footer>
      </div>

      {activeDream && (
        <div className={`paper-overlay ${specialReveal ? "golden-reveal" : ""}`} role="dialog" aria-modal="true" aria-label={activeDream.title} onClick={(event) => { if (event.target === event.currentTarget) closePaper(); }}>
          <button className="paper-close" type="button" aria-label="Close dream note" onClick={closePaper} disabled={paperPhase === "fold" || paperPhase === "travel"}>×</button>
          {specialReveal && <div className="golden-heart-storm" aria-hidden="true">{Array.from({ length: 28 }, (_, index) => <span key={index} style={{ left: `${(index * 37) % 100}%`, animationDelay: `${(index % 9) * -0.55}s`, animationDuration: `${5 + (index % 5)}s`, fontSize: `${14 + (index % 4) * 6}px` }}>{index % 4 === 0 ? "💛" : index % 4 === 1 ? "♡" : index % 4 === 2 ? "♥" : "✨"}</span>)}</div>}
          <div className="paper-stage">
            {specialReveal && <p className="golden-scene-kicker">✧ A WISH THAT MEANS EVERYTHING TO US ✧</p>}
            <article className={`dream-paper ${paperPhase} ${specialReveal ? "precious-paper" : ""}`} key={`${activeDream.id}-${activeJar}`}>
              <span className="paper-tape" aria-hidden="true" />
              <div className="paper-content">
                <div className="paper-category">{specialReveal ? "✦ OUR HEART’S LITTLE PROMISE ✦" : activeJar === "bucket" ? "A NOTE FROM OUR DREAM JAR" : "A MEMORY FROM OUR COMPLETED JAR"}</div>
                <div className="paper-emoji" aria-hidden="true">{activeDream.emoji}</div>
                <h2 className="paper-title">{activeDream.title}</h2>
                <p className="paper-description">{activeDream.description}</p>
                {specialReveal && <p className="golden-promise">Some wishes are more than plans — they are little pieces of our future. ♡</p>}
                <p className="paper-script">{activeJar === "bucket" ? "Let's make this little dream real. ♡" : "Look at the memory we made together. ✧"}</p>
                <div className="paper-controls">
                  {activeJar === "bucket" ? (
                    <button className="paper-action primary" type="button" onClick={finishPaper} disabled={paperPhase === "fold" || paperPhase === "travel"}>✓ Dream achieved!</button>
                  ) : (
                    <button className="paper-action undo" type="button" onClick={finishPaper} disabled={paperPhase === "fold" || paperPhase === "travel"}>↶ Undo · return to dream jar</button>
                  )}
                  <button className="paper-action" type="button" onClick={closePaper} disabled={paperPhase === "fold" || paperPhase === "travel"}>Fold it later</button>
                </div>
              </div>
            </article>
            <p className="paper-note" aria-live="polite">
              {paperPhase === "emerge" ? "A little folded note is coming out…" :
                paperPhase === "unfold" ? "A tiny dream, just for us." :
                paperPhase === "fold" ? "Folding the paper carefully…" :
                activeJar === "bucket" ? "Sending this memory to the completed jar…" : "Tucking it back into the dream jar…"}
            </p>
          </div>
        </div>
      )}

      {notice && <div className="jar-toast" role="status" aria-live="polite">{notice}</div>}
    </main>
  );
}
