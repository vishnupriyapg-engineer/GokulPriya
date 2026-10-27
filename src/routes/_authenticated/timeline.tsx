import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_authenticated/timeline")({
  component: TimelinePage,
});

type ScrapbookMemory = {
  id: number;
  year: number | string;
  date: string;
  title: string;
  caption: string;
  story: string;
  image: string;
  sticker: string;
  note: string;
};

// Sample memories and images are included so the scrapbook looks complete immediately.
// Replace the image URLs, dates, captions, and stories with your own memories whenever you're ready.
const memories: ScrapbookMemory[] = [
  
{
  id: 1,
  year: 2020,
  date: "A Little Beginning",
  title: "The First Chapter",
  caption: "Where Our Forever Began — Shivan Temple",
  story: "Coincidence ah? Illa, namma thalaeluthu ah? ❤️ Theriyala... Aana namma rendu peroda love story, oru kovil la ivlo azhaga start aagumnu naan konjam kooda nenakkala.\n\nAntha oru nimisham, nee en life la evlo periya part aaga pora nu enakku theriyala. Un mela ivlo love varum, unna paakama irukka mudiyama pogum, un presence enakku ivlo special aagumnu appo naan yosikkave illa. 🥹\n\nOru meet... Oru kiss... Konjam butterflies... Neraya feelings... 💋❤️\n\nAnd just like that, namma love story oda first chapter start aachu. Appo theriyala, antha chinna moment dhaan en life la enakku romba precious aana memories la onnaaga maarum nu.\n\n2020 — The year you became my favourite beginning. ♾️❤️",
  image: "images/memory-01.jpg",
  sticker: "🌷",
  note: "chapter one · 2020"
},


 
{
  id: 2,
  year: "2020-2022",
  date: "Little Things, Big Feelings",
  title: "Love Sharing",
  caption: "From Strangers to Each Other's Safe Place 🫶🏻",
  story: "Motta maadi la nee un full life story-ah en kitta sonna antha moment enakku innum nyabagam irukku. ❤️ Antha naal la irundhu dhaan namma rendu perum konjam konjama close aaga aarambichom.\n\nNee un life pathi en kitta share panna, naanum enna pathi ellame un kitta solla aarambichen. Chinna chinna vishayangal la irundhu, manasula irukkura feelings varaikkum ellathayum pesinom. 🥹💗\n\nUn kitta pesumbodhu oru thani comfort irundhuchu. Edhayum marachu pesa vendiyadhilla, edhayum yosichu pesa vendiyadhilla... Naan naanaave un kitta irukka mudinjathu.\n\nAppo dhaan purinjathu, nee enakku just oru person mattum illa... En manasula irukkuratha bayam illama share pannura alavukku enakku special aana oruthan nu. 💌\n\nTheriyama strangers-ah start panni, konjam konjama orutharukku oruthar safe place-ah maaritom. Andha motta maadi conversations la aarambicha closeness, enakku romba precious aana memory aayiduchu. ❤️🫂",
  image: "images/memory-03.jpg",
  sticker: "💌",
  note: "little moments · 2020-2022"
},

  
{
  id: 3,
  year: 2023,
  date: "A Day Worth Keeping",
  title: "A Memory to Keep",
  caption: "The Day I Fell for You All Over Again 🥹❤️",
  story: "Namma love life la oru chinna break vandhuchu... Oru time la namma rendu perum pirinju poitomo nu kooda thonuchu. 💔 Aana sila relationships evlo distance vandhaalum, seranum nu eludhiyirundha thirumba serama irukka mudiyadhu pola. Vidhi namma rendu perayum thirumba onna serthu vachuchu. ❤️‍🩹🫂\n\nIndha naal enakku romba special... Because anikku dhaan naan ennaiye un kitta full-ah lose panniten. Un love mattum illa, en mela nee kaatina care, nee enna paathukitta vidham, chinna chinna vishayangal la kooda enna special-ah feel panna vecha moments... Ellame en manasa romba touch pannuchu. 🥹💗\n\nUn care la oru azhagana feeling irundhuchu. Naan unakku evlo important nu nee words la mattum illa, un actions layum kaatina. Anikku dhaan un mela enakku irundha feelings evlo deep-ah irukku nu innum nalla purinjukitten.\n\nSometimes, losing each other teaches us the value of finding each other again. And that day, un kooda irundha ovvoru second-um en heart la oru special memory-ah maariduchu. 📸❤️\n\nIf only I could bottle up that day, I would... So I could relive the feeling of being loved by you, one more time. 🫶🏻✨",
  image: "images/memory-06.jpg",
  sticker: "📸",
  note: "a keepsake · 2023"
},



{
  id: 4,
  year: 2023,
  date: "Our unforgettable day ❤️",
  title: "The Day We Became Each Other's Home",
  caption: "Oru naal... aayiram memories, konjam bayam, niraya kadhal, marakka mudiyatha vali, aana ellathayum thaandi ninna namma love. ❤️",
  story: "Namma love oda life-changing moment ithu da. 🥹❤️ Oru pakkam en life la marakkave mudiyatha beautiful surprise, innoru pakkam en life la marakka mudiyatha worst day. Antha oru naal full ah naan unkooda irunthen... time pathi yosikkaama, bayam irunthalum unna vittu poga manasu illaama, ovvoru second um un kooda enjoy pannitu irunthen. Andha naal namma rendu perum husband and wife maariye irunthom da. 🫂❤️ Onna saapttathu, onna thoongunathu, onna elunthathu, chinna chinna vishayangal la kooda sandhoshatha kandupidichathu... ellame innaikum en manasula appadiye irukku. Andha naal edutha namma favourite picture marakvemudiyathu. 🥹💗 Aana andha beautiful day ku appuram, veetla maatikittathu, semma adi vaanginathu, unna paaka mudiyama, un kooda pesa mudiyama pona antha situation... adhellam nenacha innaikum manasu valikkum. Enna oru terrorist maari treat pannanga da, evlo kastam, evlo bayam, evlo kanneer! 💔 Aana ivlo nadanthum, nee enna vittu kudukkala... naanum unna vittu pogala. Namma love ah easy ah yaaralayum purinjukka mudiyala, aana namakku namma love evlo unmai nu theriyum. Andha worst time layum namma rendu per manasulayum ore nambikkai than irunthuchu — 'Oru naal ellam seri aagum, namma rendu perum onna iruppom, namakku oru beautiful future irukkum.' ❤️‍🩹 Andha nambikkaikaga evlo kastam vanthalum thaangikalam nu nenachom. Namma love happy days la mattum azhaga irukkala da; ellame namakku ethira iruntha antha dark days layum adhu azhaga thaan irunthuchu. Andha oru naal namakku neraya happiness kuduthuchu, adhe nerathula neraya pain um kuduthuchu. Aana mukkiyama, adhu namma rendu perayum innum strong aakuchu. Innaiku antha memories ah thirumbi paakumbothu, andha happy moments ku sirikkavum, andha pain ku azhavum thonuthu. Aana ellathayum thaandi, naan innum unna love panren da. Enakku antha naal special ah irukkurathu naama onna irunthathunala mattum illa... evlo periya prachanai vanthalum, namma future ah nenachu namma love ah kaapatha try pannom. Andha naal la irunthu innaiku varaikkum, en manasula irukkura ore aasai — oru naal namma rendu perum yaaraiyum bayapadaama, yaar kitayum piriyama, santhoshama onna vaazhanum. Namma past la evlo tears irunthalum, namma future full ah smiles ah irukkanum. Nee en life la vanthathu oru beautiful memory mattum illa da... en future ah kanavu kaana vachcha oru azhagana reason. I love you so much, en future husband. ❤️🫂",
  image: "images/memory-14.jpg",
  sticker: "☀️❤️",
  note: "one unforgettable day · one unbreakable love · 2023"
},

{
  id: 5,
  year: 2024,
  date: "Our sleepless nights 🌙❤️",
  title: "Somewhere Between Good Nights and I Love You",
  caption: "Thookatha maranthu pesuna nights, mudivillatha conversations, enakaga nee maariya chinna chinna vishayangal... appadithaan namma love innum azhamaana kadhal ah maaruchu. 🥹❤️",
  story: "Athukku appuram namma video calls la thaan namma ulagame irunthuchu da. ❤️🌙 Night full ah video call la pesitu iruppom... evlo neram pesunalum, innum konjam neram pesanum nu thonum. Network suthama kedaikathu, phone prblem , headphone problem ,  Thookam kannai moodinaalum, unna vida manasu varaathu. Oru 'good night' sollitu call cut panna kooda manasu illaama, chinna chinna vishayangal ellam pesi sirichitu iruppom. 🥹💗 Sila neram enna pesurom nu kooda mukkiyam illa da, nee en kooda irukka, un voice kekkuthu, unna paathutu irukken... adhuve enakku podhum. Andha nights la thaan namma rendu perum innum nerukkama aanom. Un love en mela konjam konjama innum deep aaga aarambichathu. Enakku enna pudikkum, enakku enna pudikkaathu, edhu enna hurt pannum nu nee purinjukka aarambicha. Enakaga un habits la chinna chinna changes panna aarambicha. ❤️‍🩹 Adhu ellame oru naal la nadakkala da... aana ovvoru naalum un effort la en mela iruntha love therinjathu. Enakku pidikkatha vishayangalai purinjukittu, en feelings ah respect panni, ennoda happiness um mukkiyam nu nee ninaikka aarambichathu enakku romba special.  en feelings ah purinjukittu, enakaga konjam konjama better aaga try panra nee pothum. 🫂❤️ Andha late-night calls la namma sirippu mattum illa, namma dreams, namma future, namma aasai ellame irunthuchu. Phone screen oda opposite side la irunthalum, nee en pakkathula irukkura maariye feel aagum. Un kooda pesuna ovvoru night um enakku oru chinna happiness. Appo thaan purinjathu da, love na periya periya promises mattum illa... orutharukaga innoruthar chinna chinna vishayangalai maathikkurathum, purinjukkurathum, daily konjam konjama better partners aagurathum thaan unmaiyana love nu. 🥹💞 . Nee enakaga maarina ovvoru chinna vishayamum, enna evlo love panra nu sollama solluchu.  Enakku innum andha maariye nights venum da... nee, naan, mudivillaatha conversations, konjam sirippu, konjam chellamaana sanda, neraya kadhal. I love you, en forever person. 🌙❤️🫂",
  image: "images/sleep/main.jpg",
  sticker: "🌙💗",
  note: "sleepless nights · little changes · deeper love · 2024"
},


{
  id: 6,
  year: 2025,
  date: "Our little secret meetings 🚆❤️",
  title: "Three Hours in Heaven, Months of Missing You",
  caption: "Unna paaka pala maasam kaathirunthu, oru sila mani neram mattum un kooda vaazhntha naatkal... piriyumbothu vali irunthaalum, ovvoru meet um en manasukku oru aayiram santhoshangal. 🥹❤️‍🩹",
  story: "Namma unlimited video calls ku naduvula, unna nerla paakama pala maasam kadanthuchu da. ❤️ Ovoru naalum phone screen la unna paathalum, un kooda nerla irukkanum, un pakkathula ukkanthanum, un kaiya pudichikkanum, unna nerla paathu pesanum nu manasu aasa padum.  🥺💗 Evlo naal thaan ippadi screen moolama mattum love panrathu nu thonum. Kadaisila, evlo kashtam irunthaalum unna oru muraiyaavathu paakanum nu, veetla yaarukkum theriyama train la meet panna vara aarambichom. 🚆❤️ Andha journey la iruntha excitement eh vera level da! Unna paaka porom nu nenacha udane manasu full ah butterflies. 🥹 Andha 3 to 4 hours journey un kooda spend panra andha konja neram mattum oru nimisham maari odidum.  Time ah konjam slow panna mudinja, andha sila mani nerathayum appadiye niruthi vachiruppen da. 🫂❤️ Aana ovvoru meet um mudiyumbothu, manasula oru periya baaram vandhudum. Thirumba unna paaka ethana maasam aagumo nu theriyama, manasukulla aayiram kelvigaloda unakku bye sollitu povom. Velila sirichitu bye sonnalum, ullukulla unna vittu poga manase varaathu.💔 Oru sila mani neram un kooda irukkurathukaga pala maasam kaathirunthom da. Mathavangalukku adhu oru normal train journey ah irukkalaam, aana enakku adhu en favourite person ah paaka pogura oru beautiful journey. aana enakku adhu pala naalukkana happiness ah manasula serthu vachikkura neram. ❤️‍🩹 Namma love ku distance oru periya test ah irunthuchu. Yenna theriyuma da? Unna paakurathukaga naan edutha ovvoru journey um enakku worth it. Un kooda spend panna andha sila mani nerangalai thirumba thirumba nenachu thaan, adutha meet varaikkum enna naaney samadhanapaduthikitten. 🥹💗 . Enakku nee venum da, video call la mattum illa, train journey oda destination ah mattum illa... en ovvoru naaloda life layum. Oru naal indha long-distance memories ellam namma pakkathula ukkanthu sirichu pesura stories ah maaranum.🚆❤️🫂",
  image: "images/memory-04.jpg",
  sticker: "🚆❤️‍🩹",
  note: "long journeys · little moments · endless longing · 2025"
},




{
  id: 6,
  year: 2025,
  date: "Our little dates & sweetest surprises 💗",
  title: "The Little Things That Felt Like Forever",
  caption: "Periya periya gifts illa da, nee enakaga seitha chinna chinna vishayangal thaan en manasula periya memories ah maariduchu. Un kooda spend panna ovvoru moment um enakku oru kutty happiness. 🥹❤️",
  story: "Adhukku appuram namma love la innum azhagana memories serndhuchu da. ❤️ onna veliya ponum intha meet marakavemudiyathu.🥹💗 Enakku nee surprise ah kammal vaangi kuduthathu , Andha kammal enakku oru jewellery mattum illa; enna nenachu, enakku pidikkum nu yosichu, enakaga nee select panni vaangi kudutha oru azhagana gift. Adha vida precious ah irunthathu, andha gift kudukkumbothu un manasula iruntha love. ❤️✨ Enakaga dress vaangi kuduthathu, onna shopping ponathu, enna kooda hotel ku kootitu poi saapttathu... veliya paakuravangalukku idhellam normal outings ah irukkalaam. Aana enakku ovvoru moment um special da, because andha moments la naan en favourite person oda irunthen. Un kooda saapadra food kooda innum konjam tasty ah irukkum; Yenna, andha happiness ku reason andha place illa... nee thaan. 🫂❤️ Sila neram periya surprise thevaiye illa da; nee enna nenachu seiyura chinna chinna efforts eh enakku romba periya happiness kudukkum.💗 Aana enakku romba special ah iruntha innoru moment, nee enna exam ku anuppi vachathu. Andha nerathula nee enna un dreams mattum illaama, en future pathiyum yosikkura nu feel panninen. Enna santhoshapaduthurathu mattum illaama, naan nalla pannanum, en life la munnera vendum nu nee virumburathu enakku romba meaningful ah irunthuchu. 🥹❤️ ❤️‍🩹. En exam days la encourage panra person ah mattum illaama, en life oda ovvoru important moment layum en kooda celebrate panra person ah nee irukkanum. 🫂💗 Enakku nee vaangi kudutha kammal vida, adha vaangi kudukkanum nu unakku thonuna antha love thaan precious. Nee enna kootitu pona places vida, enna kooda poganum nu nee aasapattathu thaan precious. I love you, en favourite shopping partner, en favourite date, en favourite person, en forever love. 🥹💗✨",
  image: "images/memory-13.jpg",
  sticker: "🎀💗",
  note: "sweet surprises · little dates · memories made with love · 2025"
},


{
  id: 7,
  year: 2026,
  date: "Still choosing you, in every little moment ♡",
  title: "The Story I Never Want to End",
  caption: "En college life ah thirumbi paatha, en memories la thirumba thirumba varra ore name GOKUL dhaan da. Namma story innum mudiyala... serndhu ezhutha vendiya beautiful pages innum neraya irukku. 🥹❤️🫂",
  story: "En college days la enna irukku nu yosichu paatha, en mind la  varra only one 'GOKUL' . ❤️🥹 Evlo memories irundhaalum, en college life ah ivlo special ah maathunadhu nee dhaan. Namma daily 24/7 pesunadhu, chinna chinna vishayatha kooda share pannadhu, reason illama sirichadhu, onnum illadha nerathulayum hours kanakka pesite irundhadhu... ippo ellathayum thirumbi nenacha, andha days evlo beautiful ah irundhuchu nu puriyudhu da. 🫂💗 College mudinjadhukku appuram namma epdi iruppom, daily epdi pesuvom, ivlo neram onna pesama epdi iruppom nu nenachu namma kan kalanguna moments namma evlo deep ah love pandromnu katuchu da .  Enakku edhavadhu nadandha first unkitadhan sollanum, kashtama irundha unkitadhan azhanum, santhoshama irundha un kooda dhaan celebrate pannanum nu thonum. ❤️‍🩹🥹 Life la evlo kashtam vandhaalum, nee en kooda irundha ennaala adha face panna mudiyum nu oru confidence irundhuchu da. Kashtam vandha epdi strong ah irukkanum, epdi situations ah face pannanum nu enakku kathukodutha nee, ippo nee illama epdi ellathayum face pannanum nu yosikkumbodhu romba kashtama irukku da. Unkooda pesuradhu enakku evlo mukkiyam nu, nee illadha nerathula dhaan innum deep ah puriyudhu. Seriously, unkooda pesama irukkuradhu enakku avlo easy illa da.🫂❤️ Idhuku naduvula un birthday vara vara, unna meet pannanum nu evlo aasaiya irundhuchu theriyuma da? 🥹💗 Un birthday ku munnadiyaavadhu unna paakanum nu thonite irukkum. Messages la evlo feelings share pannalum, un munnadi ninnu unna paakura andha oru moment ku adhu equal aagathu da. 💌🫶🏻 Namma NPTEL time la meet pannapo , Un kooda irundhapo, enakku nee just enakku pudicha person ah mattum theriyala... en husband kooda irukkura maari oru feeling vandhuchu da. 🥹💍❤️ Andha feeling ah epdi explain panradhu ne theriyala, aana un kooda irukkumbodhu oru different ahna comfort, oru closeness, namma rendu perum serndhu irundha nalla irukkum ngra feeling vandhuchu.🫂💗 Unkooda innum neraya memories create pannanum, neraya places poganum, neraya photos edukkanum, chinna chinna sandaigal pottutu thirumba seranum, neraya birthdays onna celebrate pannanum nu aasaiya irukku da. 🥹❤️🎀 Gokul, namma story la sila pages happy ah irundhirukkum, sila pages kashtama irundhirukkum.  ❤️‍🩹🫂 . Un dreams achieve aaguradha paakanum, un success ah celebrate pannanum, un kashtamaana days la unakku support ah irukkanum.  🥹💗🫶🏻 Happiest birthday to my favourite person — GOKUL. ❤️💋 Nee en life la vandhadhukku apram, ordinary days kooda special memories ah maarirukku. 🥹💍💗 Idhu namma story oda ending illa da... idhu just namma ippo irukkura page. Namma serndhu ezhutha vendiya beautiful chapters innum neraya irukku.  ♡",
  image: "images/memory-80.jpg",
  sticker: "💗🫂",
  note: "our unfinished story · more memories to come · 2026 ♡"
},




  ];

function TimelinePage() {
  const [bookOpened, setBookOpened] = useState(false);
  const [activeMemoryIndex, setActiveMemoryIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [pageTurning, setPageTurning] = useState(false);
  const [showFinalNote, setShowFinalNote] = useState(false);

  const memory = memories[activeMemoryIndex] ?? memories[0]!;
  const currentYearIndex = activeMemoryIndex;
  const activeYearLabel = String(memory.year).replace("2020-2022", "2020–2022");

  useEffect(() => {
    if (!bookOpened) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [bookOpened]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (!bookOpened) return;
      if (event.key === "Escape") setBookOpened(false);
      if (event.key === "ArrowRight") turnPage(1);
      if (event.key === "ArrowLeft") turnPage(-1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // Keyboard navigation intentionally uses the current open-book state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookOpened, activeMemoryIndex, pageIndex, pageTurning]);

  function turnPage(step: number) {
    if (pageTurning) return;
    setDirection(step > 0 ? "next" : "previous");
    setPageTurning(true);

    // Change the chapter halfway through the film-style wipe, then let the transition finish.
    window.setTimeout(() => {
      if (step > 0) {
        if (showFinalNote) {
          setPageTurning(false);
          return;
        }
        if (currentYearIndex < memories.length - 1) {
          setActiveMemoryIndex(currentYearIndex + 1);
          setPageIndex(0);
        } else {
          setShowFinalNote(true);
        }
      } else {
        if (showFinalNote) {
          setShowFinalNote(false);
          setActiveMemoryIndex(memories.length - 1);
          setPageIndex(0);
        } else if (currentYearIndex > 0) {
          setActiveMemoryIndex(currentYearIndex - 1);
          setPageIndex(0);
        } else {
          setBookOpened(false);
        }
      }
    }, 330);

    window.setTimeout(() => setPageTurning(false), 700);
  }

  function jumpToYear(index: number) {
    setActiveMemoryIndex(index);
    setPageIndex(0);
    setShowFinalNote(false);
    setPageTurning(false);
  }

  return (
    <main className="scrapbook-page">
      <style>{`
        .scrapbook-page{min-height:calc(100vh - 40px);padding:48px 18px 100px;overflow:hidden;color:#493326;background:radial-gradient(ellipse at 50% 0%,#f9dce4 0%,transparent 43%),linear-gradient(150deg,#f7e9e0,#f1dce1 48%,#f7e8d8);font-family:Georgia,'Times New Roman',serif}
        .sb-intro{max-width:780px;margin:0 auto;text-align:center}.sb-eyebrow{font:10px sans-serif;letter-spacing:4px;text-transform:uppercase;color:#9d6477}.sb-title{margin:15px 0 10px;font-size:clamp(42px,8vw,76px);font-weight:400;line-height:1.03;letter-spacing:-2px;color:#60394a}.sb-subtitle{max-width:500px;margin:0 auto;color:#805b66;font-size:15px;line-height:1.9}.sb-flourish{margin:24px auto 30px;color:#b77d91;font-size:23px;letter-spacing:10px}
        .sb-cover-wrap{display:grid;place-items:center;min-height:390px;perspective:1500px}.sb-cover{position:relative;width:min(390px,88vw);min-height:315px;padding:38px 26px;border:7px double #e6c9a3;border-radius:9px 17px 17px 9px;background:linear-gradient(120deg,#673b4b,#442634 70%,#38202c);box-shadow:inset 10px 0 0 #ffffff0d,inset 13px 0 0 #d5ac7d55,15px 20px 35px #58374633;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#f9e9d0;transform:rotate(-2deg);transition:transform .6s,box-shadow .6s;cursor:pointer}.sb-cover:hover{transform:rotate(0) translateY(-6px);box-shadow:inset 10px 0 0 #ffffff0d,0 25px 55px #58374655}.sb-cover::before,.sb-cover::after{content:'✦';position:absolute;color:#dcb985;font-size:22px}.sb-cover::before{top:18px;left:20px}.sb-cover::after{right:20px;bottom:18px}.sb-cover-label{font:10px sans-serif;letter-spacing:4px;color:#e6c99f}.sb-cover-title{margin:25px 0 12px;font-size:clamp(34px,7vw,48px);font-weight:400;line-height:1.1}.sb-cover-years{font-size:16px;letter-spacing:5px;color:#e7c6ca}.sb-cover-line{width:70px;height:1px;margin:22px auto;background:#d8b47c}.sb-cover-caption{font-size:13px;font-style:italic;color:#e9d3c8}.sb-open-prompt{margin-top:25px;font:10px sans-serif;letter-spacing:2px;color:#f0d7dc;animation:sbPulse 2s infinite}
        .sb-year-nav{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:28px auto 18px;max-width:760px}.sb-year-tab{border:1px solid #d6b2b8;border-radius:999px;padding:8px 14px;color:#815565;background:#fff8f2a8;font:11px sans-serif;cursor:pointer;transition:all .2s}.sb-year-tab:hover,.sb-year-tab.active{background:#74475a;color:#fff3e8;border-color:#74475a;transform:translateY(-2px)}.sb-hint{text-align:center;color:#956f7b;font:10px sans-serif;letter-spacing:1.5px}
        .sb-overlay{position:fixed;z-index:1000;inset:0;display:flex;align-items:center;justify-content:center;padding:24px 14px;background:radial-gradient(ellipse at center,#563444e8,#1b1119f7);backdrop-filter:blur(10px);animation:sbFade .7s ease both}.sb-book-stage{width:min(1100px,100%);max-height:calc(100vh - 48px);display:flex;flex-direction:column;align-items:center;gap:13px;animation:sbBookEnter .9s cubic-bezier(.2,.8,.2,1) both}.sb-book-top{width:100%;display:flex;justify-content:space-between;align-items:center;color:#f3dce3;font:10px sans-serif;letter-spacing:2px}.sb-close{border:1px solid #ffffff44;border-radius:999px;background:#ffffff10;color:#fff1e9;padding:9px 14px;cursor:pointer;font:12px sans-serif}.sb-spread{position:relative;display:grid;grid-template-columns:1fr 1fr;width:100%;height:min(66vh,570px);min-height:360px;perspective:1800px;filter:drop-shadow(0 25px 25px #0005)}.sb-page{position:relative;overflow:hidden;background:#f8eedb;background-image:radial-gradient(#c8a77a18 .7px,transparent .7px),linear-gradient(95deg,#f9f1e4,#f1e2c9);background-size:7px 7px,100% 100%;padding:clamp(18px,3.2vw,38px);box-sizing:border-box;box-shadow:inset 0 0 24px #97764b18}.sb-page.left{border-radius:7px 0 0 7px;border-right:1px solid #c9ac86;transform-origin:right center}.sb-page.right{border-radius:0 7px 7px 0;border-left:1px solid #d5b990;transform-origin:left center}.sb-page.left::after{content:'';position:absolute;top:0;right:0;bottom:0;width:14px;background:linear-gradient(90deg,#6c4a3320,transparent);pointer-events:none}.sb-page.right::before{content:'';position:absolute;top:0;left:0;bottom:0;width:14px;background:linear-gradient(270deg,#6c4a3318,transparent);pointer-events:none}.sb-page-inner{height:100%;display:flex;flex-direction:column;position:relative;z-index:1}.sb-page-number{margin-top:auto;padding-top:12px;text-align:center;color:#ad8b6b;font:10px sans-serif;letter-spacing:2px}.sb-small-label{color:#a46d7b;font:9px sans-serif;letter-spacing:2.5px;text-transform:uppercase}.sb-hand-title{margin:8px 0;color:#744657;font-size:clamp(22px,3.3vw,36px);font-weight:400;line-height:1.12}.sb-hand-text{color:#765e4f;font-size:clamp(12px,1.4vw,15px);line-height:1.8;white-space:pre-line}.sb-left-note{position:relative;margin-top:18px;padding:15px 14px 18px;background:#f2d5d8;box-shadow:2px 4px 8px #5d40351c;transform:rotate(-1.5deg);color:#85566a;font-size:clamp(12px,1.4vw,15px);line-height:1.7;font-style:italic}.sb-tape{position:absolute;top:-8px;left:38%;width:62px;height:17px;background:#d6b2a0a8;transform:rotate(-5deg)}.sb-doodle{flex:0 0 auto;margin-top:5px;color:#b17c8c;font-size:20px;letter-spacing:8px}.sb-polaroid{position:relative;width:min(100%,360px);margin:14px auto 0;padding:10px 10px 36px;background:#fffaf1;box-shadow:0 8px 18px #604b382c;transform:rotate(1.5deg)}.sb-polaroid img{display:block;width:100%;height:clamp(155px,27vh,270px);object-fit:contain;object-position:center;background:#1c1715}.sb-photo-caption{position:static;display:block;margin:12px 6px 0;text-align:center;color:#795764;font-size:12px;font-style:italic;line-height:1.5;overflow-wrap:anywhere}.sb-sticker{position:absolute;right:8%;top:13%;font-size:clamp(25px,4vw,42px);filter:drop-shadow(1px 2px 1px #6d44351c);transform:rotate(10deg)}.sb-photo-note{margin:20px 4px 0;text-align:center;color:#926f72;font-size:clamp(12px,1.4vw,15px);font-style:italic;line-height:1.7}.sb-flip-sheet{position:absolute;z-index:4;inset:0;pointer-events:none;background:linear-gradient(90deg,#f8eedb,#e6d1b4);backface-visibility:hidden;transform-style:preserve-3d}.sb-flip-sheet.next{left:50%;transform-origin:left center;animation:sbFlipNext .48s ease-in both}.sb-flip-sheet.previous{right:50%;transform-origin:right center;animation:sbFlipPrevious .48s ease-in both}.sb-controls{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap}.sb-control{border:1px solid #e5c5c9;border-radius:999px;padding:11px 20px;background:#ffffff12;color:#fff1e8;cursor:pointer;font:12px sans-serif;transition:transform .2s,background .2s}.sb-control:hover{transform:translateY(-2px);background:#ffffff25}.sb-control.primary{background:#f4e3d1;color:#684051;border-color:#f4e3d1}.sb-page-instruction{color:#e5cbd4;text-align:center;font:10px sans-serif;letter-spacing:1px}.sb-final{grid-column:1/-1;display:flex;align-items:center;justify-content:center;text-align:center;padding:35px;background:#f8eedb;background-image:radial-gradient(#c8a77a18 .7px,transparent .7px);background-size:7px 7px;border-radius:7px;box-shadow:inset 0 0 40px #97764b22}.sb-final h2{font-size:clamp(32px,6vw,58px);font-weight:400;color:#75465a;margin:20px 0}.sb-final p{max-width:580px;color:#765e4f;font-size:15px;line-height:2;white-space:pre-line}.sb-final-heart{font-size:35px;color:#bd7c91;animation:sbPulse 2s infinite}.sb-reopen{margin-top:15px;border:1px solid #bd8796;border-radius:999px;padding:10px 18px;color:#77495a;background:#f7e5e2;cursor:pointer}
        @keyframes sbFade{from{opacity:0}to{opacity:1}}@keyframes sbBookEnter{0%{opacity:0;transform:translateY(35px) scale(.94) rotateX(5deg)}100%{opacity:1;transform:translateY(0) scale(1) rotateX(0)}}@keyframes sbFlipNext{0%{transform:rotateY(0);box-shadow:0 0 0 transparent}50%{box-shadow:-20px 0 25px #5c453344}100%{transform:rotateY(-180deg);box-shadow:0 0 0 transparent}}@keyframes sbFlipPrevious{0%{transform:rotateY(0);box-shadow:0 0 0 transparent}50%{box-shadow:20px 0 25px #5c453344}100%{transform:rotateY(180deg);box-shadow:0 0 0 transparent}}@keyframes sbPulse{0%,100%{opacity:.75;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}
        @media(max-width:650px){.scrapbook-page{padding:35px 14px 80px}.sb-cover-wrap{min-height:340px}.sb-cover{min-height:290px}.sb-overlay{padding:12px 8px}.sb-book-stage{max-height:calc(100vh - 24px);gap:10px}.sb-book-top{font-size:8px;letter-spacing:1px}.sb-spread{height:min(66vh,590px);min-height:430px;grid-template-columns:1fr}.sb-page.left{display:none}.sb-page.right{border:0;border-radius:7px}.sb-page{padding:22px 19px}.sb-polaroid{width:min(100%,330px);margin-top:12px}.sb-polaroid img{height:clamp(170px,28vh,250px);object-fit:contain;object-position:center}.sb-hand-title{font-size:29px}.sb-hand-text{font-size:13px}.sb-sticker{top:8%;right:8%}.sb-page-number{text-align:right}.sb-control{padding:10px 15px}.sb-page-instruction{max-width:300px;line-height:1.6}.sb-flip-sheet.next{left:0}.sb-flip-sheet.previous{right:0}}
        /* VINTAGE MOVIE THEME — warm film, velvet, and champagne gold */
        .scrapbook-page{color:#f4e6cb;background:radial-gradient(ellipse at 50% 0%,#65412c 0%,transparent 42%),linear-gradient(145deg,#1c1715,#30221d 48%,#171311);font-family:Georgia,'Times New Roman',serif}
        .sb-eyebrow{color:#d9b77b;letter-spacing:5px}
        .sb-title{color:#f4e4c7;text-shadow:0 4px 28px #d9a95a2b;letter-spacing:1px}
        .sb-subtitle{color:#d5c1a2}
        .sb-flourish{color:#d8b46e}
        .sb-cover-wrap{perspective:1800px}
        .sb-cover{border:1px solid #b58b4d;border-radius:5px;background:linear-gradient(135deg,#4a211d,#241411 72%,#120e0d);box-shadow:inset 0 0 0 7px #d0aa6240,inset 0 0 0 9px #6d452b,0 25px 70px #0008;color:#f5e6c9;transform:rotate(-1deg);overflow:hidden}
        .sb-cover:before,.sb-cover:after{color:#e3bd75;text-shadow:0 0 15px #f4d58a66}
        .sb-cover:after{content:'✦';}
        .sb-cover-label{color:#e3c68d}
        .sb-cover-title{font-size:clamp(38px,7vw,54px);text-shadow:0 3px 0 #120d0b,0 0 24px #f0c77630;letter-spacing:1px}
        .sb-cover-years{color:#e6c98d}
        .sb-cover-line{background:#d6ae66}
        .sb-cover-caption{color:#d8c3a3}
        .sb-open-prompt{color:#f4d895;animation:filmPrompt 2.2s ease-in-out infinite}
        .sb-year-nav{gap:9px}
        .sb-year-tab{border-color:#8c6a45;color:#e6d0aa;background:#2d211bd9;font:11px sans-serif;letter-spacing:1px}
        .sb-year-tab:hover,.sb-year-tab.active{background:#c49b55;color:#211611;border-color:#e4c27e;box-shadow:0 0 22px #d5a85740}
        .sb-hint{color:#c7ad86}
        .sb-overlay{background:radial-gradient(ellipse at center,#42261eeF,#0b0908fa);backdrop-filter:blur(12px)}
        .sb-book-stage{gap:15px}
        .sb-book-top{color:#e5c992;letter-spacing:2.5px}
        .sb-close{border-color:#b8955b88;background:#2d211b;color:#f4e5c9}
        .sb-spread{filter:drop-shadow(0 28px 35px #000a);border:1px solid #b58b4d66;outline:1px solid #b58b4d22;outline-offset:7px}
        .sb-page{background-color:#ead8b7;background-image:radial-gradient(#8b5d331b .7px,transparent .7px),linear-gradient(100deg,#f2e4c9,#e2cba4);background-size:6px 6px,100% 100%;color:#3b281d}
        .sb-page.left{border-right-color:#9d784b}
        .sb-page.right{border-left-color:#9d784b}
        .sb-small-label{color:#926b38;letter-spacing:2.8px}
        .sb-hand-title{color:#522b22;text-shadow:0 1px #fff8e9}
        .sb-hand-text{color:#604936}
        .sb-left-note{background:#e4c9a0;color:#704333;box-shadow:2px 6px 12px #40281925}
        .sb-tape{background:#b8955d99}
        .sb-doodle{color:#a77a45}
        .sb-polaroid{background:#fff5df;box-shadow:0 10px 25px #2b1a112e;border:1px solid #d9c19a}
        .sb-photo-caption{color:#6f4430}
        .sb-sticker{filter:drop-shadow(0 2px 3px #0003)}
        .sb-photo-note{color:#79513b}
        /* REALISTIC HARDCOVER BOOK PAGE TURN */
        .sb-spread{perspective:2400px;transform-style:preserve-3d;isolation:isolate;overflow:visible}
        .sb-page{backface-visibility:hidden;-webkit-backface-visibility:hidden}
        .sb-polaroid{display:flex;flex-direction:column;align-items:stretch;width:min(100%,360px);padding:10px 10px 14px;box-sizing:border-box;gap:0;transform:rotate(1deg)}
        .sb-polaroid img{position:static;flex:none;width:100%;height:clamp(150px,26vh,255px);object-fit:contain;object-position:center;background:#1c1715;border:0}
        .sb-photo-caption{position:static!important;display:block;width:auto;margin:12px 6px 0!important;text-align:center;color:#6f4430;font-size:12px;line-height:1.5;font-style:italic;overflow-wrap:anywhere}
        .sb-photo-note{margin:18px 4px 0;text-align:center;line-height:1.65;overflow-wrap:anywhere}
        .sb-flip-sheet{position:absolute;z-index:8;top:0;bottom:0;width:50%;pointer-events:none;overflow:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform-style:preserve-3d;background:linear-gradient(90deg,#f7ebd4 0%,#ead5b1 72%,#d2b68b 100%);box-shadow:inset -18px 0 24px #60401e22,0 10px 24px #0003;will-change:transform}
        .sb-flip-sheet::before{content:"";position:absolute;inset:0;background:radial-gradient(#8b5d331b .7px,transparent .7px),linear-gradient(100deg,#f7ebd4,#e4cda6);background-size:6px 6px,100% 100%;}
        .sb-flip-sheet::after{content:"♡";position:absolute;inset:0;display:grid;place-items:center;color:#b58b4d66;font:clamp(30px,5vw,58px) Georgia,serif;text-shadow:0 1px #fff7}
        .sb-flip-sheet.next{left:50%;right:auto;transform-origin:left center;animation:realPageTurnNext .82s cubic-bezier(.55,.08,.25,1) both}
        .sb-flip-sheet.previous{left:0;right:auto;transform-origin:right center;animation:realPageTurnPrevious .82s cubic-bezier(.55,.08,.25,1) both;background:linear-gradient(270deg,#f7ebd4 0%,#ead5b1 72%,#d2b68b 100%);box-shadow:inset 18px 0 24px #60401e22,0 10px 24px #0003}
        .sb-controls{gap:10px}
        .sb-control{border-color:#a98450;background:#30231ddd;color:#f1dfbf;box-shadow:0 5px 16px #0003}
        .sb-control:hover{background:#4b3325;box-shadow:0 0 22px #d6aa5b24}
        .sb-control.primary{background:linear-gradient(135deg,#f0d69a,#c3944b);color:#26170f;border-color:#f0d69a;box-shadow:0 0 24px #d8aa5c25}
        .sb-page-instruction{color:#cbb58f}
        .sb-final{background-color:#ead8b7;background-image:radial-gradient(#8b5d331b .7px,transparent .7px),linear-gradient(100deg,#f2e4c9,#e2cba4);background-size:6px 6px,100% 100%;border:1px solid #c09b62}
        .sb-final h2{color:#552b21}
        .sb-final p{color:#604936}
        .sb-final-heart{color:#a45b43}
        .sb-reopen{border-color:#b88a50;color:#5a3324;background:#f0dfbd}
        .sb-overlay .sb-spread{animation:filmFrameIn .75s cubic-bezier(.2,.8,.2,1) both}
        .sb-page-inner{animation:filmContentIn .65s .12s ease both}
        @keyframes filmPrompt{0%,100%{opacity:.7;letter-spacing:2px}50%{opacity:1;letter-spacing:3px}}
        @keyframes realPageTurnNext{0%{transform:rotateY(0deg);filter:brightness(1);box-shadow:0 0 0 #0000}35%{filter:brightness(.78);box-shadow:-22px 0 32px #29170c55}70%{filter:brightness(.92);box-shadow:-12px 0 20px #29170c22}100%{transform:rotateY(-180deg);filter:brightness(1);box-shadow:0 0 0 #0000}}
        @keyframes realPageTurnPrevious{0%{transform:rotateY(0deg);filter:brightness(1);box-shadow:0 0 0 #0000}35%{filter:brightness(.78);box-shadow:22px 0 32px #29170c55}70%{filter:brightness(.92);box-shadow:12px 0 20px #29170c22}100%{transform:rotateY(180deg);filter:brightness(1);box-shadow:0 0 0 #0000}}
        @keyframes filmFrameIn{0%{opacity:.3;transform:translateY(7px) scale(.99);filter:blur(2px)}100%{opacity:1;transform:translateY(0) scale(1);filter:blur(0)}}
        @keyframes filmContentIn{0%{opacity:0;transform:translateY(10px);filter:blur(2px)}100%{opacity:1;transform:translateY(0);filter:blur(0)}}
        @media(max-width:650px){.sb-cover{min-height:290px}.sb-spread{outline-offset:3px;perspective:1600px}.sb-book-top{letter-spacing:1px}.sb-page-inner{animation-duration:.45s}.sb-flip-sheet{width:100%}.sb-flip-sheet.next{left:0;transform-origin:left center}.sb-flip-sheet.previous{left:0;transform-origin:right center}.sb-polaroid{width:min(100%,330px);margin-top:12px}.sb-polaroid img{height:clamp(165px,26vh,240px);object-fit:contain;object-position:center}.sb-photo-caption{margin-top:10px!important}}
        /* Keep the full story readable inside the left book page */
        .sb-page.left .sb-page-inner{height:100%;min-height:0;overflow:hidden;display:flex;flex-direction:column}
        .sb-page.left .sb-small-label,.sb-page.left .sb-hand-title{flex:0 0 auto}
        .sb-page.left .sb-hand-title{font-size:clamp(22px,2.7vw,32px);line-height:1.12;margin:8px 0 10px}
        .sb-story-scroll{flex:1 1 0%;height:0;min-height:70px;overflow-y:auto;overflow-x:hidden;padding:0 14px 10px 0;margin:4px 0 6px;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:#b58b4d #ead8b7}
        .sb-story-scroll .sb-hand-text{margin:0;white-space:pre-line;line-height:1.85;overflow-wrap:anywhere}
        .sb-story-scroll::-webkit-scrollbar{width:6px}
        .sb-story-scroll::-webkit-scrollbar-track{background:#ead8b7;border-radius:8px}
        .sb-story-scroll::-webkit-scrollbar-thumb{background:linear-gradient(#d7b77c,#9c6b43);border-radius:8px}
        .sb-left-note{flex:0 0 auto;max-height:95px;overflow-y:auto;overflow-x:hidden;margin-top:4px;padding:9px 12px 10px;font-size:clamp(11px,1.1vw,13px);line-height:1.45;transform:none}
        .sb-page-number{flex-shrink:0}
        @media(max-width:650px){.sb-page.left{display:block}.sb-spread{grid-template-columns:1fr;overflow:hidden}.sb-page.right{display:none}.sb-page.left{border:0;border-radius:7px}.sb-page.left .sb-page-inner{height:100%;min-height:0}.sb-page.left .sb-hand-title{font-size:clamp(23px,6vw,29px)}.sb-story-scroll{flex:1 1 0%;height:0;min-height:70px}.sb-left-note{max-height:90px}}
        @media(prefers-reduced-motion:reduce){.scrapbook-page *, .sb-overlay *{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
      `}</style>

      <header className="sb-intro">
        <p className="sb-eyebrow">OUR STORY · A MOTION PICTURE</p>
        <h1 className="sb-title">Our Little Movie</h1>
        <p className="sb-subtitle">Seven years. Countless memories. One little world, captured frame by frame. ♡</p>
        <div className="sb-flourish" aria-hidden="true">✿ · ♡ · ✿</div>
      </header>

      <section className="sb-cover-wrap" aria-label="Open the scrapbook">
        <button className="sb-cover" type="button" onClick={() => setBookOpened(true)} aria-label="Open Our Little World scrapbook">
          <span className="sb-cover-label">A FILM BY TWO HEARTS</span>
          <span className="sb-cover-title">Our Little<br />Movie</span>
          <span className="sb-cover-years">2020 — 2026</span>
          <span className="sb-cover-line" />
          <span className="sb-cover-caption">Seven years · countless frames</span>
          <span className="sb-open-prompt">▶ PRESS PLAY TO BEGIN ◀</span>
        </button>
      </section>

      <div className="sb-year-nav" aria-label="Choose a scrapbook year">
        {memories.map((item, index) => (
          <button key={`${item.id}-${index}`} type="button" className={`sb-year-tab${activeMemoryIndex === index ? " active" : ""}`} onClick={() => { jumpToYear(index); setBookOpened(true); }}>
            {String(item.year).replace("2020-2022", "2020–2022")} · {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
      <p className="sb-hint">CHOOSE A CHAPTER · PRESS PLAY · REWIND ANYTIME ✧</p>

      {bookOpened && (
        <div className="sb-overlay" role="dialog" aria-modal="true" aria-label="Our Little World scrapbook" onClick={(event) => { if (event.target === event.currentTarget) setBookOpened(false); }}>
          <div className="sb-book-stage">
            <div className="sb-book-top">
              <span>OUR LITTLE MOVIE · CHAPTERS 2020—2026</span>
              <button type="button" className="sb-close" onClick={() => setBookOpened(false)}>Exit screening ×</button>
            </div>
            <div className="sb-spread" key={`${activeMemoryIndex}-${pageIndex}-${showFinalNote}`}>
              {showFinalNote ? (
                <section className="sb-final">
                  <div>
                    <span className="sb-small-label">THE FINAL FRAME · FOR NOW</span>
                    <div className="sb-final-heart">♡</div>
                    <h2>The story goes on…</h2>
                    <p>Some frames are memories. Some are dreams. And the most beautiful scenes are still waiting for us.</p>
                    <p>Whatever the next scene brings, may it be filled with little reasons to smile, moments worth keeping, and a story that keeps growing.</p>
                    <p>With love, always. ♡</p>
                    <button type="button" className="sb-reopen" onClick={() => { jumpToYear(0); setShowFinalNote(false); }}>Rewind to the beginning ↶</button>
                  </div>
                </section>
              ) : (
                <>
                  <section className="sb-page left">
                    <div className="sb-page-inner">
                      <span className="sb-small-label">A NOTE FROM THIS CHAPTER</span>
                      <h2 className="sb-hand-title">{memory.title}</h2>
                      <div className="sb-story-scroll" tabIndex={0} aria-label="Scroll to read the full story"><p className="sb-hand-text">{memory.story}</p></div>
                      <div className="sb-left-note"><span className="sb-tape" />“{memory.caption}”</div>
                      <div className="sb-doodle" aria-hidden="true">♡ ✿ ♡</div>
                      <span className="sb-page-number">{currentYearIndex * 2 + 1}</span>
                    </div>
                  </section>
                  <section className="sb-page right">
                    <div className="sb-page-inner">
                      <span className="sb-small-label">{memory.date}</span>
                      <h2 className="sb-hand-title">{activeYearLabel}</h2>
                      <div className="sb-polaroid">
                        <img src={memory.image} alt={`${memory.title} sample scrapbook photo`} />
                        <span className="sb-photo-caption">{memory.caption}</span>
                      </div>
                      <span className="sb-sticker" aria-hidden="true">{memory.sticker}</span>
                      <p className="sb-photo-note">{memory.note}</p>
                      <span className="sb-page-number">{currentYearIndex * 2 + 2}</span>
                    </div>
                  </section>
                  {pageTurning && <div className={`sb-flip-sheet ${direction}`} />}
                </>
              )}
            </div>
            <div className="sb-controls">
              <button type="button" className="sb-control" onClick={() => turnPage(-1)} disabled={pageTurning}>← Previous chapter</button>
              <button type="button" className="sb-control primary" onClick={() => turnPage(1)} disabled={pageTurning}>{showFinalNote ? "At the end ♡" : currentYearIndex === memories.length - 1 && pageIndex === 1 ? "Roll the credits →" : "Next chapter →"}</button>
            </div>
            <p className="sb-page-instruction">DIRECTOR’S NOTE: USE ← → TO MOVE BETWEEN CHAPTERS · ESC TO EXIT</p>
          </div>
        </div>
      )}
    </main>
  );
}
