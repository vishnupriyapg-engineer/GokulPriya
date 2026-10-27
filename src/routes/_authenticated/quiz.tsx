import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState, type CSSProperties, type FormEvent } from 'react';

export const Route = createFileRoute('/_authenticated/quiz')({ ssr: false, component: LoveQuestPage });

type QuizOption = { label: string; emoji?: string; isCorrect?: boolean; reaction?: string; imageUrl?: string };
type QuizQuestion = { id: string; prompt: string; kind: 'choice' | 'funny' | 'either' | 'open' | 'rating'; options?: QuizOption[]; hint?: string; reaction?: string };
type QuizRound = { title: string; subtitle: string; emoji: string; questions: QuizQuestion[] };


const rounds: QuizRound[] = [
  { title: 'How Well Do You Know Priya?', subtitle: 'Ten little things about me. Let’s see how well you know me! 💗', emoji: '💗', questions: [
    { id: 'r1-food', kind: 'choice', prompt: "Priya va yethu happiest akum?", options: [{label:'avaloda hardwork ku result kedaicha🍕',reaction:'Ohh thapu thapu , harwork ku result kedaicha veliya matum than happy manasulanthu fullest happy inonu iruku🥹!'}, {label:'Gokul kuda irukumbothu💜',isCorrect:true,reaction:'Yesss ne kuda iruntha pothum elame enaku happy than! 💗'}, {label:'Friedrice , chicken 65 🍦',reaction:'No No adapavi, ithalam pudikum da but vera onu enna romba happy akum'}, {label:'Priya travel panumbothu 🍟',reaction:'ohh thapuu da, travel pudikum but unkuda travel panna romba pudikum!'}] },
    { id: 'r1-colour', kind: 'choice', prompt: "Priya sad ah irukumbothu enna panuva?", options: [{label:'Valichalum veliya sirichutu irupa🌸',reaction:'ithu elam time um panamaten da, vera onu iruku! 🌸'}, {label:'amaithiya elam ulla vechupa yarukitayum solama💙',reaction:'ithu ilada vera onu iruku!'}, {label:'Fullaa aluthutu normal agirva😭 🖤',reaction:'ithu ilada vera onu iruku!'}, {label:'unkita pesii ava manasula irukurathu elame kotuva 💜',isCorrect:true,reaction:'ama da nan sogama irukumbothu unkita than varuven because ne athu porumaya handle panuva'}] },
    { id: 'r1-destination', kind: 'choice', prompt: "What's Priya's weakness?", options: [{label:'Overthinking everything 🧠',reaction:'overthinking sila time enaku nalathuthan weakness ila'}, {label:'Trusting people too easily 🫶',reaction:'ithu crt than but vera onu iruku 🥹'}, {label:'Gokul enna kastapaduthumbothu + family',isCorrect:true, reaction:'Paravala crtah than purinjuvechurka , ipoyachum kastapaduthama iru da'}, {label:'thirupi thirupi mistakes lam manichu ketavanga kuda pesurathu',reaction:'ithuvum ok than but ithavida onu iruku!'}] },
    { id: 'r1-happy', kind: 'choice', prompt: 'Ethu priya va easyah hurt panum?', options: [{label:'Chat panumbothu chat vitu velila porathu💌',reaction:'ithuvida vera onu iruku , ithuvum hurt agum . 💗'}, {label:'Ne enkita poi sollurathu +maraikurathu 😭',isCorrect:true,reaction:'ithu romba romba hurt agum da? 😭 enkita poii solatha da please, thapu panna kuda solidu but maraikatha'}, {label:'Promise ah break pandrathu',reaction:'oru time kolantha mela poi promise panna ne kudikalanu athu marakavemudiyathu da , but inoru vatii panatha , ithavida onu romba hurt agumda! '}, {label:'Enna vitutu ne fried rice sapdurathu',reaction:'Neriya time nenaichurka unaku bathroom varakudathunu!'}] },
    { id: 'r1-music', kind: 'choice', prompt: 'Suppose ne reply panalana priya enna panuva?', options: [{label:'Overthing pani periya sanda uruvakuva',isCorrect:true,reaction:'😂😂 serii crt than but late reply panna konuduven'}, {label:'100 message amchite irupa, chuma thevailama🔔',reaction:'panuven but ithuvida onu iruku 😂'}, {label:'Silentah un reply kaga wait panuva 🗂️',reaction:'ithu nan yepovum panatheilada!'}, {label:'unaku vela irukumnu purinjupen 🤐',reaction:'vaipeilada , en mind antha thought ke pogathu!'}] },

    { id: 'r1-date', kind: 'choice', prompt: "Priya adikadi use pandra words ethu?", options: [{label:'Maireyyy🕯️',reaction:'Ithu ne use pandra words da💗'}, {label:'Unna pakanum pola irukda 📊',reaction:'Ipolam ithu kekurathe viten da , but unna pakanum romba asai'}, {label:'Pasikuthu da🧍',isCorrect:true,reaction:'Unkita neriya ithan da soluven, Ne odane nan senju tharen d nu soluva da pasama.'}, {label:'Mood ah irukuda',reaction:'soluven but adikadi ilada!'}] },
    { id: 'r1-personality', kind: 'choice', prompt: 'Suppose priya ku personal assistance iruntha ava enna first panna soluva?', options: [{label:'Favorite food senju edututu vara soluva 💗',isCorrect:true,reaction:'ama fried rice , and chicken 65 firstuh. 🥹'}, {label:'Thuni thoika soluven👽',reaction:'Ithuku personal assistance lam thevailada ne irukala 😂'}, {label:'Enna different pose la Photos eduka soluva🥔',reaction:'Kandipa ila because enaku selfie than pudikum.'}, {label:'Enoda table clean pana soluven😈',reaction:'Inimel table clean panna thevailala because hostel vacate paniyachuda 😂'}] },
    { id: 'r1-gift', kind: 'choice', prompt: 'One thing priya ava lifelanthu enna delete panna virumbuva?', options: [{label:'Fake people',reaction:'Fake people iruntha than life intresting ah irukum, avangalala enna panamudiyumnu pakalam so ithu ila.'}, {label:'Overthinking',reaction:'Ithu neriya time enna crtah guess panna vechurku so nan ithu delete panamaten😭'}, {label:'Maatha mudiyadha vishayatha nenachu varuthapadra feeling ⏳💔',isCorrect:true,reaction:'Ama , matha mudilana athu en lifele varakudathu eg: unna meet panna mudilanu romba feel panuven ithu matha mudiyadhu , intha mari moments delete agi unna daily meet pandramari venum'}, {label:'Exams and results',reaction:'Ithu mudinjuchu ithukumela enna iruku delete panna'}] },
    { id: 'r1-trip', kind: 'choice', prompt: 'Padikavendiya nerathula priya enna panuva?', options: [{label:'Reels and biggboss parthutu irupa📱',isCorrect:true,reaction:'Ithu crt than mostly unkita padikurenu poi solitu reels papen but ne ipolam line le iruken ne padinu soluva apo pakamudiyathu reels lam ✨'}, {label:'Gokul ah venume iritate panuva',isCorrect:true,reaction:'ithu enaku romba pudichathu!, un reaction pakave venumnu panite irupen'}, {label:'Good girl mari padichurva🧳',reaction:'Nan padikurenu sona unaku romba pudikum ana nan apdi sonathuilada odane!'}, {label:'Padichu mudichutenu poi soluva',reaction:'unkita kandipa poi solamudiyathuda. 😂'}] },
    { id: 'r1-love', kind: 'choice', prompt: 'Priya ku relationshipla enna romba mukiyam?', options: [{label:'Loyalty and effort 💗',isCorrect:true,reaction:'Ithu easy one , kandipa efforts romba mukiyam. 💗'}, {label:'Fight aprom vanthu pesanum🏆',reaction:'Fight aprom vanthu pesurathu mukiyam than but ithu vida onu romba mukiyam iruku!'}, {label:'Priority 📸',reaction:'kandipa ithu mukiyam but priority vida onu iruku.'}, {label:'Suprise panite irukanum',reaction:'Panna nalathan irukum but suprise matume love ilaa.'} ] },
  ]},
  { title: 'Our Little Story', subtitle: 'Answer in your own words. Your answers are saved and can be edited later.', emoji: '🫶', questions: [
    {id:'r2-first-impression',kind:'open',prompt:'Life evlo maarunalum, Priya kitta endha vishayam matum maarave koodadhunu nee aasai padra visyam Ethu? 🦋💗?',hint:'Think back to the very beginning.'},
    {id:'r2-memory',kind:'open',prompt:'Priya unna pathi irukkura ella memories-um marandhuta, nee marubadiyum unnai avalukku eppadi introduce pannuva? 💗🥹?',hint:'It can be a tiny, funny, or meaningful moment.'},
    {id:'r2-love',kind:'open',prompt:'🫂 Nee solli puriya vaikkaama, Priya unoda endha vishayatha thaana avale purinjukkanumnu aasai padra? 💗?',hint:'Be honest; there is no single perfect answer.'},
    {id:'r2-funny',kind:'open',prompt:'😂 Priya arrest aagirundha, ava enna panniruppa arrest agurathunu nu nee guess pandra? 😭🚔💗?',hint:'The little silly moments count too!'},
    {id:'r2-relive',kind:'open',prompt:'💗 Naama rendu perum oru naal body switch pannikkitta, Priya-va irukkumbodhu nee ennalam pannuva? 😂🙈 (Double meaning kuda solalam)?',hint:'Describe the moment you would love to experience again.'},
  ]},
  { title: 'Who Is More Likely To?', subtitle: 'Choose Priya or Gokul for every question.  😂', emoji: '😂', questions: [
    {id:'r3-jealous',kind:'funny',prompt:'Yaru inoruthar samathanam paduthuratha pakanumnu venumne kochukira mari nadikurathu?',options:[{label:'Priya 🙈',reaction:'Ne samathaanam paduthurathu pudikumda but nan apdilam pannamaten 🙈😂'},{label:'Gokul 😌',reaction:'Gokul, ne kochukitave nan samathanam paduthurathu pakanum thana because unaku serious ah kochikitu enkita sanda podatheriyathu 😌😂'}]},
    {id:'r3-sorry',kind:'funny',prompt:'💋 Yaaru sandai podumbodhu, "Seri, mudhalla oru kiss kudu, appuram sandai podalam!" nu solli sandaiya stop pannuva? 😂❤️😘',options:[{label:'Priya 🥺',reaction:'Nan una samadhanam paduthumbothu ithan da first soluven 🥺💗'},{label:'Gokul 😎',reaction:'Ne thapu panitu enna samathanam padutha ithan da panuva 😎'}]},
    {id:'r3-drama',kind:'funny',prompt:'🥹 yaru sandaiya mulusa maranthurva after  "I miss you"??',options:[{label:'Priya 🎭',reaction:'And the award for best drama goes to Priya! 🎭😂'},{label:'Gokul 🎬',reaction:'Gokul deserves his own movie! 🎬😂'}]},
    {id:'r3-food',kind:'funny',prompt:'😈 Yaaru venumne tease pannitu, "Naan enna panniten?" nu innocent-ah kepa??',options:[{label:'Priya 🍟',reaction:'Nan unna tease panamaten da unna konjuven da'},{label:'Gokul 🍕',reaction:'Ne than da maireyyy onum theriyathavan mari munjiya vechurpan 😂'}]},
    {id:'r3-sleep',kind:'funny',prompt:'Who falls asleep first during a movie?',options:[{label:'Priya 😴',reaction:'Ama da ipolam nan than thungidra😴'},{label:'Gokul 💤',reaction:'Padam pakumbothu ne thungamata da , namma sanda pota than da ne thungirva😂'}]},
    {id:'r3-text',kind:'funny',prompt:'Who takes longer to reply to messages?',options:[{label:'Priya 📱',reaction:'Kandipa ithu nan panathe ila u know me very well📱😂'},{label:'Gokul ⌛',reaction:'Late reply pandra ore alu ne than da mairey ⌛'}]},
    {id:'r3-plan',kind:'funny',prompt:'Yaaru innoruthara jealous aakka venumne vera ponnu/paiyan pathi pesuva? 👀?',options:[{label:'Priya 🔄',reaction:'Kandipa neriya pesuven da shreyas, vickykaushal, etc.. , ne jelous ana un face cutest ah irukumda apo ne "vei ma pothum pesunathu" apdi solumbothu awwww..🔄'},{label:'Gokul 🗓️',reaction:'Nan pesurenu venumne enna verupetha ne soluva da unaku heroine peru kuda theriyathu but enna kovapadavekanumnu neriya pesuva da ne! 😂'}]},
    {id:'r3-romantic',kind:'funny',prompt:'Who is more romantic?',options:[{label:'Priya 💌',reaction:'Indoor la matum ila public la kuda nan than da romantic 💌'},{label:'Gokul 🌹',reaction:'Gokul, NE kiss nala panuva private la matum but romantic nan than public or private rendulayum 🌹😌'}]},
    {id:'r3-laugh',kind:'funny',prompt:'yaru poi soli matipa?',options:[{label:'Priya 😂',reaction:'Enaku poi solave theriyathuda unkita😂'},{label:'Gokul 🤭',reaction:'poii sona crtah solanum da , unaku enkita poi sollavarathu apo ethuku poii soli matikira kutii paya🤭'}]},
    {id:'r3-zombie',kind:'funny',prompt:'💗 Yaaru innorutharoda nalailatha photos-ah future-la storyla poda save panni vechiruppa? 😂📸😈?',options:[{label:'Priya 🧟',reaction:'kandipa neriya vechurka but public la podanum asai athuku wait pandra 🧟‍♀️'},{label:'Gokul 🏃',reaction:'Ne than da eruma madu nan naala ilathathu storyla poduva annaiku kuda potu chiinese music potiye! 🏃😂'}]},
  ]},
 
{
  title: 'Choose Our Future',
  subtitle: 'Tap a photo card for the future moments you would love to experience together. 💗',
  emoji: '✨',
  questions: [
    {
      id: 'r4-date',
      kind: 'either',
      prompt: 'Our ideal date night? 💕',
      options: [
        {
          label: 'Rainy night drive 🚗',
          emoji: '🚗',
          imageUrl: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',
          reaction: 'Rain, romantic songs, and you beside me. Perfect night! 🌧️❤️'
        },
        {
          label: 'Amusement park date 🎡',
          emoji: '🎡',
          imageUrl: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=900&q=85',
          reaction: 'Namma rendu perum chinna pasanga maari enjoy pannuvom! 😂💗'
        },
        {
          label: 'Rooftop dinner under the stars 🌌',
          emoji: '🌌',
          imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85',
          reaction: 'Stars, candlelight, and our own little world. ✨❤️'
        },
        {
          label: 'Private movie night 🎬',
          emoji: '🎬',
          imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85',
          reaction: 'Movie vida unna paathute irukkanum pola irukku! 😂🫂'
        },
        {
          label: 'Midnight beach walk 🌊',
          emoji: '🌊',
          imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85',
          reaction: 'Beach, moonlight, and endless conversations with you. 🥹💗'
        },
        {
          label: 'Romantic candlelight dinner 🕯️',
          emoji: '🕯️',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseRjd0VrtgnGEaBX5NS2x_a9KO2lbHFgRbliBt-tQOA&s=10',
          reaction: 'Oru romantic dinner, neraya love, and just us! ❤️✨'
        }
      ]
    },

    {
      id: 'r4-trip',
      kind: 'either',
      prompt: 'What would be our dream vacation together? ✈️',
      options: [
        {
          label: 'Switzerland snow trip ❄️',
          emoji: '❄️',
          imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85',
          reaction: 'Snow-la un kooda nadakkanum, cozy-ah hug pannikanum! 🥹❤️'
        },
        {
          label: 'Italy romantic streets 🇮🇹',
          emoji: '🇮🇹',
          imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=85',
          reaction: 'Beautiful streets, cute photos, and namma memories! 📸💗'
        },
        {
          label: 'Maldives beach villa 🌴',
          emoji: '🌴',
          imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85',
          reaction: 'Beach view, peaceful days, and quality time together! 🌊❤️'
        },
        {
          label: 'Japan cherry blossoms 🌸',
          emoji: '🌸',
          imageUrl: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=900&q=85',
          reaction: 'Cherry blossoms keezha namma rendu perum cute photos eduppom! 🌸🥹'
        },
        {
          label: 'Iceland northern lights 🌌',
          emoji: '🌌',
          imageUrl: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=900&q=85',
          reaction: 'Indha beautiful sky-ah un kooda paakuradhe oru dream! ✨'
        },
        {
          label: 'Paris city of love 🗼',
          emoji: '🗼',
          imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85',
          reaction: 'Paris-la un kooda oru romantic trip! Namma dream destination! 💋❤️'
        }
      ]
    },

    {
      id: 'r4-anniversary',
      kind: 'either',
      prompt: 'Namma anniversary-ah epdi celebrate pannalam? 🎉❤️',
      options: [
        {
          label: 'Luxury hotel stay 🏨',
          emoji: '🏨',
          imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=85',
          reaction: 'Oru special day, beautiful place, and my favourite person! 🥹❤️'
        },
        {
          label: 'Love letters and gifts 🎁',
          emoji: '🎁',
          imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85',
          reaction: 'Namma love story-ah letters-la ezhuthi forever save pannuvom! 💌'
        },
        {
          label: 'Recreate our first special moment 🌹',
          emoji: '🌹',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5twBtqmwnRlxoEQNeXOaKnTPGiFU4VXWwue-TocRPkw&s=10',
          reaction: 'Namma first special moment-ah thirumba experience pannuvom! 🥹💗'
        },
        {
          label: 'Couple photoshoot 📸',
          emoji: '📸',
          imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
          reaction: 'Namma memories-ku neraya cute photos! 📸❤️'
        },
        {
          label: 'Bake a cake together 🍰',
          emoji: '🍰',
          imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85',
          reaction: 'Cake konjam messy aanaalum, namma celebration sweet-ah irukkum! 😂🍰'
        },
        {
          label: 'Fulla cheen tapaku dum dum and chachak chachak 😂💥',
          emoji: '💥',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkis6O0seWDE2tTQ5XilTjupsDILKAw8rKQ8oY7WHU8nvVTU48zJKF4M&s=10',
          reaction: 'Anniversary-na summa vaa! Full celebration, full fun, full love! 😂🎉❤️'
        }
      ]
    },

    {
  id: 'r4-alone',
  kind: 'either',
  prompt: 'Namma rendu perum thaniya irundha enna pannuvom? 👀❤️',
  options: [
    {
      label: 'Cute-ah cuddle panni vidaama irukkuradhu 🥹',
      emoji: '🥹',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQ6VD8b2dOkiM2huRWNA02yIxDsVrhzBg6sr-b3Mt9A&s=10',
      reaction: 'Unna hug pannitu appadiye irukkanum pola irukku! 🫂❤️'
    },
    {
      label: 'Adikkadi kiss kudukurathu 💋',
      emoji: '💋',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaPJcgjiZGEe5Ou9alHlJq_nQQ3CdGgBZVtE1NJSMWFQ&s=10',
      reaction: 'Oru kiss pothuma? Innum venum nu kepen! 😂💋'
    },
    {
      label: 'Tease pannitu innocent maari nadikkuradhu 😏',
      emoji: '😏',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwThreBu07qxOa3dZa9f-c_GHKFI5IdGPUzcnZumwGfg&s=10',
      reaction: 'Naan enna panninen? Naan romba innocent! 😂🙈'
    },
    {
      label: 'Eppovume hug pannite irukkuradhu 🫂',
      emoji: '🫂',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4KOi6EbY7ezaLb-v0Zcy5Na1AXPFfDsEUsgy8W4SsA&s=10',
      reaction: 'Un hug dhaan enakku favourite place! 🥹❤️'
    },
    {
      label: 'Romance-la surprise kudukkuradhu ❤️‍🔥',
      emoji: '❤️‍🔥',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
      reaction: 'Unexpected romantic moments dhaan special! ❤️✨'
    },
    {
      label: 'Veliya innocent, aana thaniya irundha vera level! 😂',
      emoji: '😂',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZDG1HNc_3p-CaQti4XihvrdnF9um9rOKViKH5UY75w&s=10',
      reaction: 'Indha secret namma rendu perukku mattum dhaan theriyum! 😂❤️‍🔥'
    }
  ]
},
    {
      id: 'r4-future',
      kind: 'either',
      prompt: 'Namma rendu perum future-la serndhu irukkumbodhu, first enna pannuvom? 🏡❤️',
      options: [
        {
          label: 'Namma dream house-ah decorate pannuvom 🏡',
          emoji: '🏡',
          imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
          reaction: 'Namma taste-ku oru beautiful home create pannuvom! 🥹❤️'
        },
        {
          label: 'Serndhu foreign trip povom ✈️',
          emoji: '✈️',
          imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=85',
          reaction: 'World full-ah suthuvom, memories full-ah collect pannuvom! 🌍❤️'
        },
        {
          label: 'Daily serndhu samaippom 🍳',
          emoji: '🍳',
          imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85',
          reaction: 'Samayal vida kitchen-la namma comedy dhaan adhigama irukkum! 😂❤️'
        },
        {
          label: 'Oru cute pet valarppom 🐶',
          emoji: '🐶',
          imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85',
          reaction: 'Namma family-la innoru cute member! 🐶💗'
        },
        {
          label: 'Daily quality time spend pannuvom 🫂',
          emoji: '🫂',
          imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85',
          reaction: 'Busy life-la kooda namakkunu konjam time! 🥹❤️'
        },
        {
          label: 'Chinna chinna sandai, appuram cuddle 😂',
          emoji: '😂',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxf92fIlkEizMkLSs3FJP5M2N6UhLov8pfNflAwrKEPg&s=10',
          reaction: 'Sandai vandhaalum kadaisila hug pannama vida maaten! 😂🫂'
        }
      ]
    },

    {
      id: 'r4-comfort',
      kind: 'either',
      prompt: 'Nee kastama irukkumbodhu, naan enna panna unakku romba pudikkum? 🥹🫂',
      options: [
        {
          label: 'Unakkaga different food samaichu tharanum 🍜',
          emoji: '🍜',
          imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',
          reaction: 'Un favourite food saaptu konjam happy aaganum! ❤️'
        },
        {
          label: 'Unna tight-ah hug pannanum 🫂',
          emoji: '🫂',
          imageUrl: 'https://i.pinimg.com/736x/e9/3b/53/e93b5338ec36475b5307e055167c0ea7.jpg',
          reaction: 'Words thevai illa, oru tight hug podhum! 🥹❤️'
        },
        {
          label: 'En mela padukka vechu, thalaiya varudi forehead-la kiss pannanum 💋',
          emoji: '💋',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDCWG0fYmk9lcP9xGqn8-x94qVtit3CzBQ4xv68-H_NeCzAJIpb_e7Ctm&s=10',
          reaction: 'Unakku safe-ah, loved-ah feel aaganum! 🥹💗'
        },
        {
          label: 'Konjam personal space kudukkanum 🕊️',
          emoji: '🕊️',
          imageUrl: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85',
          reaction: 'Nee ready aagura varaikkum unakku space kuduppen. ❤️'
        },
        {
          label: 'Games vilayaadi distract pannanum 🎮',
          emoji: '🎮',
          imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=85',
          reaction: 'Konjam games, konjam laughs, mood change aagidum! 😂💗'
        },
        {
          label: 'Unna veliya kootittu poganum 🚗',
          emoji: '🚗',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4LrHQU_3ylsMEOELwG6dG8mOQZpQBwAXpWWTBsT8hLZxcmb2QzHtuUbIj&s=10',
          reaction: 'Un kooda konjam veliya suthina manasu light-ah aagum! ❤️✨'
        }
      ]
    },

    

    {
      id: 'r4-surprise',
      kind: 'either',
      prompt: 'Naan unakku oru surprise plan panna, nee edha expect pannuva? 🎁❤️',
      options: [
        {
          label: 'Kaiyaala ezhudhuna love letter 💌',
          emoji: '💌',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIs_Rwx8nE7Kc_-XtMrdUgtqKSBKnjr37drQVBC2rmaQ&s=10',
          reaction: 'Words to keep forever, from my heart to yours! 💗'
        },
        {
          label: 'Surprise celebration 🎂',
          emoji: '🎂',
          imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85',
          reaction: 'Unakku pudicha cake and a special day! 🥹❤️'
        },
        {
          label: 'Romantic-ah decorate panna room 🌹',
          emoji: '🌹',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPT8CI31cABmx0gJDgDpNgIptNVgVdZSN00B7S1jfMw&s=10',
          reaction: 'Lights, flowers, and a little romantic magic! ✨❤️'
        },
        {
          label: 'Nee aasapattutu irundha gift 🎁',
          emoji: '🎁',
          imageUrl: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85',
          reaction: 'Un wish-ah remember panni surprise pannirukken! 🥹💗'
        },
        {
          label: 'Unakku theriyama surprise trip ✈️',
          emoji: '✈️',
          imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=85',
          reaction: 'Pack your bags! Namma adventure ready! ✈️❤️'
        },
        {
          label: 'Naan mattum un kooda irundhu special-ah feel panna vaikkuradhu 🫂',
          emoji: '🫂',
          imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85',
          reaction: 'Sometimes, the best gift is just being together. 🥹❤️'
        }
      ]
    },

    {
      id: 'r4-son',
      kind: 'either',
      prompt: 'Namma paiyan kooda irukkumbodhu, naam rendu perum enna pannuvom? 👨‍👩‍👦❤️',
      options: [
        {
          label: 'Naan avan pakkam support pannuven, nee avan kooda serndhu enna kalaaippeenga! 😂',
          emoji: '😂',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU-4P94YBS5N6iBD_ZpBNWys63d__W8EluAIT2j1L8w&s=10',
          reaction: 'Rendu perum serndhu enna kalaaikkuradhula romba busy-ah iruppeenga! 😂❤️'
        },
        {
          label: 'Neevum avanum mattum ooru suthittu vandhu, enakku gifts vaangi kuduthu, enna ice vechu samaadhaanam pannuveenga. 🛍️',
          emoji: '🛍️',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Esd4BML0l-ioe_idDQROtEe2pbg8qaQtAtfwzpfpdw&s=10',
          reaction: 'Appa-paiyan secret outing! Gifts vaangi enna samaadhaanam pannuveenga! 😂💗'
        },
        {
          label: 'Avan thappu pannina nee support pannuva, naan discipline panna try pannuven; kadaisila moonu perum sirippom! 🤣',
          emoji: '🤣',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRojDm3-jex_0c7KnDeolGkpa1nLsCclC51Z49yyEX7Q&s=10',
          reaction: 'Namma veetla discipline vida comedy dhaan adhigama irukkum pola! 😂❤️'
        },
        {
          label: 'Avan thoonguna piragu, namma rendu perum andha naal nadandha comedy ellathayum pesi sirippom. 🫂',
          emoji: '🫂',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilsPx8r-p9Ee_IVj8aMsUiRFKQflobk_9ScHcL3aULA&s=10',
          reaction: 'Namma little family memories-ah pesi happy-ah iruppom! 🥹❤️'
        },
        {
          label: 'Avan kooda cartoons paathu, snacks saaptu, veetaye playground-ah maathiduvom! 🎬',
          emoji: '🎬',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGW7OtJXoyRaBicRJAte2LjdqOxbMPJ26PrG9BdjLfw&s=10',
          reaction: 'Cartoons, snacks, and full family fun! 😂💗'
        },
        {
          label: 'Naanum namma paiyanum un mela padukka sanda poduvom; nee engala rendu perayum samaadhaanam panni thoonga veippa! 🥹❤️',
          emoji: '🥹',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReREXTM6kwaVk7LFx2Zr-1baA5TghgVr4Iykr_3ue73A&s=10',
          reaction: 'Un mela padukka rendu perum competition! Kadaisila nee dhaan engala samaadhaanam panni thoonga vekkanum! 😂🫂❤️'
        }
      ]
    },
    {
      id: 'r4-possessive',
      kind: 'either',
      prompt: 'Unaku sex entha style pudikum da? 💗',
      options: [
        {
          label: 'Nan kila ne mela 🫶',
          emoji: '🫶',
          imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/men-shealth-missionary-v2-1581103126.jpg?crop=1xw:1xh;center,top',
          reaction: 'Ithula ne fastah panumbothuu sugama irukum da! ❤️'
        },
        {
          label: 'Ne kila nan mela🎁',
          emoji: '🎁',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0289/9994/2243/files/cowgirl-last-longer.jpg?v=1625160628',
          reaction: 'Unaku nala irukumda because romba neram panamudiyathu enala muchi vangum! 🥹💗'
        },
        {
          label: 'side side la💬',
          emoji: '💬',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0289/9994/2243/files/Spooning-sex-position.png?v=1614310191',
          reaction: 'CIT la irukumbothu panathu da! ❤️'
        },
        {
          label: 'Doggy style 🗺️',
          emoji: '🗺️',
          imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/menshealth-doggystyle-1615483151.jpg?crop=1xw:1xh;center,top',
          reaction: 'Noooo!  chuma than option la poten  ithalam venam da pinadi pona valikum🌍'
        },
        {
          label: 'Standing position 🤝',
          emoji: '🤝',
          imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/menshealth-ironchef-v2-1581102562.jpg?crop=1xw:1xh;center,top',
          reaction: 'Nalla irukum da but ne than en weight thuka kastapadanum! ❤️'
        },
        {
          label: 'Enna bedla potu ne ninutu🤫',
          emoji: '🤫',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0289/9994/2243/files/standing-ovation-sex-position.png?v=1614310191',
          reaction: 'Namma little secrets, namma little world! 🤫💗'
        }
      ]
    }
  ]
},


    {
    title: 'Rate Our Love',
    subtitle: 'A little rating game for us. Rate each part honestly, lock your answers, and discover how we see each other. ❤️‍🔥',
    emoji: '💘',
    questions: [
      { id: 'r5-romantic', kind: 'rating', prompt: 'How romantic is Priya? ❤️‍🔥', hint: 'Rate how much she makes your heart skip a beat.' },
      { id: 'r5-loyalty', kind: 'rating', prompt: 'How loyal is Priya? 🔐❤️', hint: 'Rate the trust and loyalty you feel in your relationship.' },
      { id: 'r5-shy', kind: 'rating', prompt: 'How shy is Priya around you? 🙈💕', hint: 'Rate her cute, shy, blushy moments around you.' },
      { id: 'r5-caring', kind: 'rating', prompt: 'How caring is Priya? 🫂', hint: 'Rate how much she cares about your feelings and happiness.' },
      { id: 'r5-flirty', kind: 'rating', prompt: 'Priya matter la evlo rate panuva(kiss, kai adikurathu, mela ukanthu insert pandrathu)? 😏💋', hint: 'Rate her flirting skills and how well she teases you.' },
      { id: 'r5-understanding', kind: 'rating', prompt: 'How well does Priya understand you? 🥹❤️', hint: 'Rate how well she understands your feelings, even when you do not say much.' },
      { id: 'r5-jealous', kind: 'rating', prompt: 'How cute is Priya’s jealousy? 👀💗', hint: 'Rate her little jealous moments.' },
      { id: 'r5-effort', kind: 'rating', prompt: 'How much effort does Priya put into your relationship? 💝', hint: 'Rate the little things she does to make your relationship special.' },
      { id: 'r5-loved', kind: 'rating', prompt: 'How intelligent priya is? 💗', hint: 'Rate how special and loved you feel with her.' },
      { id: 'r5-partner', kind: 'rating', prompt: 'Totaly rate Priya as your life partner? 💍', hint: 'Give your honest rating to the person you imagine building a future with.' },
    ]
  }
];


const existingRatingAliases: Record<string, string[]> = {
  romantic: ['romantic', 'romance', 'r6-romantic', 'r5-romantic'],
  loyalty: ['loyalty', 'loyal', 'r6-loyalty', 'r5-loyalty'],
  shy: ['shy', 'shyness', 'r6-shy', 'r5-shy'],
  caring: ['caring', 'care', 'r6-caring', 'r5-caring'],
  flirty: ['flirty', 'flirt', 'r6-flirty', 'r5-flirty'],
  understanding: ['understanding', 'understand', 'r6-understanding', 'r5-understanding'],
  jealous: ['jealous', 'jealousy', 'r6-jealous', 'r5-jealous'],
  effort: ['effort', 'relationship-effort', 'r6-effort', 'r5-effort'],
  loved: ['loved', 'feel-loved', 'r6-loved', 'r5-loved'],
  partner: ['partner', 'overall', 'r6-partner', 'r5-partner'],
};

function readExistingRatings(): Record<string, number> {
  if (typeof window === 'undefined') return {};
  const found: Record<string, number> = {};
  const ownAnswersKey = 'our-little-world-love-quest-answers';

  try {
    for (let index = 0; index < window.localStorage.length; index += 1) {
      const storageKey = window.localStorage.key(index);
      if (!storageKey || storageKey === ownAnswersKey) continue;

      let parsed: unknown;
      try { parsed = JSON.parse(window.localStorage.getItem(storageKey) ?? 'null'); } catch { continue; }
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) continue;

      const objectsToCheck: Record<string, unknown>[] = [parsed as Record<string, unknown>];
      const outer = parsed as Record<string, unknown>;
      for (const nestedKey of ['ratings', 'answers', 'scores', 'responses']) {
        const nested = outer[nestedKey];
        if (nested && typeof nested === 'object' && !Array.isArray(nested)) {
          objectsToCheck.push(nested as Record<string, unknown>);
        }
      }

      for (const [category, aliases] of Object.entries(existingRatingAliases)) {
        if (found[category] !== undefined) continue;
        for (const objectToCheck of objectsToCheck) {
          const normalizedEntries = Object.entries(objectToCheck).map(([key, value]) => [
            key.toLowerCase().replace(/[^a-z0-9]/g, ''),
            value,
          ] as const);
          const aliasSet = new Set(aliases.map((alias) => alias.toLowerCase().replace(/[^a-z0-9]/g, '')));
          const match = normalizedEntries.find(([key, value]) =>
            aliasSet.has(key) && (typeof value === 'number' || (typeof value === 'string' && /^\d+$/.test(value))) &&
            Number(value) >= 1 && Number(value) <= 10
          );
          if (match) {
            found[category] = Number(match[1]);
            break;
          }
        }
      }
    }
  } catch { /* Ratings comparison stays optional if storage is unavailable. */ }

  return found;
}

// EDIT THESE VALUES LATER: Priya's ratings for Gokul (1–10).
// These sample ratings let the question-by-question comparison appear immediately.
const yourRatingsForGokul: Record<string, number> = {
  romantic: 10,
  loyalty: 10,
  shy: 6,
  caring: 10,
  flirty: 10,
  understanding: 10,
  jealous: 10,
  effort: 8,
  loved: 8,
  partner: 10,
};

function LoveQuestPage() {
  const [started, setStarted] = useState(false);
  const [roundIndex, setRoundIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    if (typeof window === 'undefined') return {};
    try { return JSON.parse(window.localStorage.getItem('our-little-world-love-quest-answers') ?? '{}') as Record<string, string>; } catch { return {}; }
  });
  const [editingOpen, setEditingOpen] = useState(false);
  const [written, setWritten] = useState('');
  const [ratingDraft, setRatingDraft] = useState(8);
  const [yourExistingRatings] = useState<Record<string, number>>(() => yourRatingsForGokul);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [reactionBurst, setReactionBurst] = useState<{ kind: 'success' | 'sad' | 'love'; id: number } | null>(null);
  const [transitionPulse, setTransitionPulse] = useState(0);

  const currentRound = rounds[roundIndex] ?? rounds[0]!;
  const question = currentRound.questions[questionIndex] ?? currentRound.questions[0]!;
  const answer = answers[question.id] ?? '';
  const isCorrect = Boolean(question.options?.some((o) => o.isCorrect && o.label === answer));
const roundOneQuestions = rounds[0]?.questions ?? [];
  const score = roundOneQuestions.filter((q) => q.options?.some((o) => o.isCorrect && answers[q.id] === o.label)).length;
  const roundOneAnswered = roundOneQuestions.filter((q) => Boolean(answers[q.id])).length;
  const isLastQuestionOfRound = questionIndex === currentRound.questions.length - 1;
  const showRoundOneScore = roundIndex === 0 && isLastQuestionOfRound && roundOneAnswered === roundOneQuestions.length;

  useEffect(() => { document.title = 'Love Quest · Our Little World'; }, []);
  useEffect(() => { try { window.localStorage.setItem('our-little-world-love-quest-answers', JSON.stringify(answers)); } catch { /* Keep the quiz usable when storage is unavailable. */ } }, [answers]);
  useEffect(() => {
    setWritten(answer);
    setEditingOpen(question.kind === 'open' && !answer);
    setRatingDraft(answer && question.kind === 'rating' ? Number(answer) : 8);
  }, [question.id, roundIndex]);

  function playTone(kind: 'tap' | 'success' | 'unlock' | 'sad') {
    if (!soundOn || typeof window === 'undefined') return;
    try {
      const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const notes = kind === 'unlock' ? [523.25, 659.25, 783.99] : kind === 'success' ? [587.33, 739.99, 880] : kind === 'sad' ? [330, 277.18] : [440];
      notes.forEach((frequency, index) => {
        const oscillator = ctx.createOscillator(); const gain = ctx.createGain(); oscillator.type = 'sine'; oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0.0001, ctx.currentTime + index * 0.09); gain.gain.exponentialRampToValueAtTime(0.055, ctx.currentTime + index * 0.09 + 0.02); gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + index * 0.09 + 0.2);
        oscillator.connect(gain); gain.connect(ctx.destination); oscillator.start(ctx.currentTime + index * 0.09); oscillator.stop(ctx.currentTime + index * 0.09 + 0.22);
      }); window.setTimeout(() => void ctx.close(), 850);
    } catch { /* Sound is optional. */ }
  }
  function beginQuest() { setStarted(true); playTone('unlock'); }
  function chooseAnswer(label: string) {
    // Round 1 is a one-shot quiz: once an answer is selected, it is locked.
    if ((roundIndex === 0 || roundIndex === 2 || question.kind === 'rating') && answers[question.id]) return;
    setAnswers((prev) => ({ ...prev, [question.id]: label }));
    const correct = Boolean(question.options?.some((o) => o.isCorrect && o.label === label));
    const burstKind: 'success' | 'sad' | 'love' = question.kind === 'choice' ? (correct ? 'success' : 'sad') : 'love';
    const burstId = Date.now();
    setReactionBurst({ kind: burstKind, id: burstId });
    window.setTimeout(() => setReactionBurst((current) => current?.id === burstId ? null : current), 2400);
    setTransitionPulse((value) => value + 1);
    if (question.kind === 'choice') {
      playTone(correct ? 'success' : 'sad');
    } else playTone('success');
  }
  function saveWritten(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!written.trim()) return;
    setAnswers((prev) => ({ ...prev, [question.id]: written.trim() })); setEditingOpen(false); playTone('success');
  }
  function resetCurrentRound() {
    const roundQuestionIds = new Set(currentRound.questions.map((q) => q.id));
    setAnswers((prev) => Object.fromEntries(Object.entries(prev).filter(([id]) => !roundQuestionIds.has(id))));
    setRevealedAnswers((prev) => Object.fromEntries(Object.entries(prev).filter(([id]) => !roundQuestionIds.has(id))));
    setQuestionIndex(0);
    setWritten('');
    setEditingOpen(currentRound.questions[0]?.kind === 'open');
    playTone('tap');
  }
  function goToRound(index: number) {
    const safeIndex = Math.max(0, Math.min(rounds.length - 1, index));
    setRoundIndex(safeIndex); setQuestionIndex(0); setReactionBurst(null); setTransitionPulse((value) => value + 1);
  }
  function moveQuestion(direction: -1 | 1) {
    const next = questionIndex + direction;
    if (next >= 0 && next < currentRound.questions.length) { setQuestionIndex(next); setReactionBurst(null); setTransitionPulse((value) => value + 1); return; }
    if (direction === 1 && roundIndex < rounds.length - 1) { goToRound(roundIndex + 1); return; }
    if (direction === -1 && roundIndex > 0) { goToRound(roundIndex - 1); setQuestionIndex((rounds[roundIndex - 1]?.questions.length ?? 1) - 1); return; }
    if (direction === 1 && roundIndex === rounds.length - 1) { setFinished(true); playTone('unlock'); }
  }
  function restart() {
    setStarted(false); setRoundIndex(0); setQuestionIndex(0); setAnswers({}); setWritten(''); setEditingOpen(true); setRevealedAnswers({}); setFinished(false);
    try { window.localStorage.removeItem('our-little-world-love-quest-answers'); } catch { /* Ignore unavailable storage. */ }
  }
  const pageStyle = { '--quest-tilt': `${(questionIndex % 3 - 1) * 1.5}deg` } as CSSProperties;

  return <main className={`lq-page ${started && !finished ? `lq-theme-round-${roundIndex + 1}` : ""}`} style={pageStyle}>
    <style>{styles}</style><div className="lq-orb lq-orb-one" aria-hidden="true"/><div className="lq-orb lq-orb-two" aria-hidden="true"/>
    {reactionBurst && <div key={reactionBurst.id} className={`lq-reaction-burst burst-${reactionBurst.kind}`} aria-hidden="true">{Array.from({ length: 22 }, (_, index) => { const success = reactionBurst.kind === 'success'; const sad = reactionBurst.kind === 'sad'; const successBits = ['💖','💕','💗','🎉','🍫','🍬','✨','💝','🧁','💘','🎊']; const sadBits = ['💔','🥺','😭','💧','🩷','💔','🥀','😢']; const loveBits = ['💗','💕','💖','✨','💝','🍫','💘','🌸']; const bits = success ? successBits : sad ? sadBits : loveBits; return <span key={`${reactionBurst.id}-${index}`} style={{ '--x': `${(index * 47 + 7) % 100}%`, '--delay': `${(index % 7) * 0.055}s`, '--drift': `${((index * 29) % 120) - 60}px`, '--spin': `${(index % 2 ? 1 : -1) * (20 + index * 7)}deg` } as CSSProperties}>{bits[(index * 3 + reactionBurst.id) % bits.length]}</span>; })}</div>}
    <div key={transitionPulse} className="lq-transition-sheen" aria-hidden="true" />
    <header className="lq-topbar"><a className="lq-brand" href="/home"><span>♡</span> our little world</a><button className="lq-sound" type="button" onClick={() => setSoundOn((v) => !v)} aria-pressed={soundOn}>{soundOn ? '♫ Sound on' : '♪ Sound off'}</button></header>
    {!started && !finished && <section className="lq-intro lq-enter"><div className="lq-eyebrow">A LITTLE GAME, JUST FOR US</div><div className="lq-envelope-wrap"><div className="lq-envelope-shadow"/><div className="lq-envelope"><div className="lq-envelope-flap"/><div className="lq-letter-peek"><span>For my favourite person</span><b>♡</b></div><div className="lq-seal">♥</div></div><span className="lq-sparkle sparkle-a">✦</span><span className="lq-sparkle sparkle-b">♡</span><span className="lq-sparkle sparkle-c">✧</span></div><p className="lq-script">a little note for you</p><h1>Love <em>Quest</em></h1><p className="lq-intro-copy">I've hidden little pieces of our story inside this game. Think you know us well enough to find them all?</p><div className="lq-intro-meta"><span>♡ 5 little rounds</span><span>✧ little surprises</span><span>∞ made with love</span></div><button className="lq-primary" type="button" onClick={beginQuest}>Begin Our Little Adventure <span>♡</span></button><p className="lq-small-note">Your written answers save automatically, so you can come back and edit them later.</p></section>}
    {started && !finished && <section className="lq-game lq-enter" key={`${roundIndex}-${questionIndex}`}>
      <div className="lq-round-nav" aria-label="Quiz rounds">{rounds.map((round, index) => <button key={round.title} type="button" className={`lq-round-tab ${index === roundIndex ? 'active' : ''} ${round.questions.every((q) => Boolean(answers[q.id])) ? 'done' : ''}`} onClick={() => goToRound(index)}><strong>{String(index + 1).padStart(2, '0')} {round.emoji}</strong>{round.title}</button>)}</div>
      <div className="lq-game-heading"><div><div className="lq-eyebrow">ROUND {String(roundIndex + 1).padStart(2, '0')} / 05 · QUESTION {String(questionIndex + 1).padStart(2, '0')} / {String(currentRound.questions.length).padStart(2, '0')}</div><h2>{currentRound.title}</h2><p>{currentRound.subtitle}</p></div><div className="lq-round-stamp">{currentRound.emoji}</div></div>
      {roundIndex === 0 && <div className="lq-progress-area"><div className="lq-hearts" aria-label={`${roundOneAnswered} of 10 Round 1 questions answered`}>{roundOneQuestions.map((q) => <span key={q.id} className={answers[q.id] ? 'filled' : ''}>{answers[q.id] ? '♥' : '♡'} </span>)}</div><div className="lq-progress-caption"><span>{roundOneAnswered === 10 ? 'ROUND 1 COMPLETE' : 'ANSWER ONCE · NO CHANGES'}</span><span>{`${roundOneAnswered}/10 answered`}</span></div><div className="lq-progress-track"><span style={{width:`${(roundOneAnswered / 10) * 100}%`}}/></div></div>}
      <article className="lq-question-card" key={question.id}><div className="lq-card-top"><span>QUESTION {String(questionIndex + 1).padStart(2, '0')}</span><span className="lq-card-scribble">✧ ♡ ✧</span></div><div className="lq-question-art" aria-hidden="true">{question.kind === 'funny' ? '😂' : question.kind === 'either' ? '✨' : question.kind === 'open' ? '💌' : '💗'}</div><h3>{question.prompt}</h3>{question.hint && <p className="lq-hint">{question.hint}</p>}
        {question.kind === 'open' ? <>
          {answer && !editingOpen && <div className="lq-saved-answer"><small>YOUR SAVED ANSWER</small>{answer}</div>}
          {(!answer || editingOpen) && <form className="lq-open-form" onSubmit={saveWritten}><textarea value={written} onChange={(e) => setWritten(e.target.value)} placeholder="Write from your heart…" maxLength={1000} aria-label="Your answer"/><div className="lq-open-bottom"><span>{written.length}/1000 characters</span><button className="lq-primary lq-small-primary" type="submit" disabled={!written.trim()}>Save answer ♡</button></div></form>}
          {answer && !editingOpen && <button className="lq-reveal" type="button" onClick={() => {setWritten(answer);setEditingOpen(true);}}>Edit this answer ✎</button>}
        </> : question.kind === 'rating' ? <div className="lq-rating-panel">
          {answer ? <>
            <div className="lq-rating-locked-heart" key={answer}>💖</div>
            <div className="lq-rating-score">{answer}<span>/10</span></div>
            <p className="lq-rating-reaction">{Number(answer) <= 3 ? 'Aiyooo, ivlo dhaana? 😂' : Number(answer) <= 5 ? 'Hmm… konjam improve pannalaam! 🙈' : Number(answer) <= 7 ? 'Awww, not bad at all! 💕' : Number(answer) <= 9 ? 'Someone is definitely in love! 😏💖' : 'PERFECT! Aval dhaan un favourite person! ❤️‍🔥'}</p>
            <div className="lq-rating-locked-note">🔒 Rating saved and locked</div>
          </> : <>
            <div className="lq-rating-heart" style={{ transform: `scale(${0.72 + ratingDraft * 0.035})` }}>💗</div>
            <div className="lq-rating-score">{ratingDraft}<span>/10</span></div>
            <p className="lq-rating-caption">{ratingDraft <= 3 ? 'Be honest, Gokul! 🙈' : ratingDraft <= 6 ? 'Getting warmer! 💕' : ratingDraft <= 9 ? 'That is a lot of love! 🥰' : 'MAXIMUM LOVE! ❤️‍🔥'}</p>
            <div className="lq-rating-slider-labels"><span>Not much 🙈</span><span>Madly in love 😍</span></div>
            <input className="lq-rating-slider" type="range" min="1" max="10" step="1" value={ratingDraft} onChange={(event) => setRatingDraft(Number(event.target.value))} aria-label="Choose a rating from 1 to 10"/>
            <div className="lq-rating-ticks">{Array.from({ length: 10 }, (_, index) => { const value = index + 1; return <button type="button" key={value} className={ratingDraft === value ? 'active' : ''} onClick={() => setRatingDraft(value)}>{value}</button>; })}</div>
            <button type="button" className="lq-primary lq-rating-save" onClick={() => chooseAnswer(String(ratingDraft))}>Lock My Rating 💖</button>
          </>}
        </div> : <div className={`lq-options ${question.kind === 'either' ? 'lq-options-either' : ''} ${question.kind === 'funny' ? 'lq-options-funny' : ''}`}>{question.options?.map((option) => {const chosen = answer === option.label;const isRight = Boolean(option.isCorrect);return <button key={option.label} type="button" disabled={(roundIndex === 0 || roundIndex === 2) && Boolean(answer)} className={`lq-option ${chosen ? 'chosen' : ''} ${chosen && isRight ? 'right' : ''} ${chosen && (question.kind === 'choice') && !isRight ? 'not-right' : ''}`} onClick={() => chooseAnswer(option.label)}>{question.kind === 'either' && option.imageUrl ? <><img className="lq-choice-image" src={option.imageUrl} alt={option.label} loading="lazy"/><span className="lq-choice-label">{option.label}</span><span className="lq-choice-heart">{chosen ? '♥ Selected' : '♡ Choose this'}</span></> : <><span className="lq-option-dot">{chosen ? '♥' : '♡'}</span><span>{option.label}</span></>}</button>;})}</div>}
        {answer && question.kind !== 'open' && question.kind !== 'rating' && <div className={`lq-feedback ${(question.kind === 'choice') ? (isCorrect ? 'positive' : 'playful') : 'positive'}`} role="status"><span className="lq-feedback-icon">{question.kind === 'choice' ? (isCorrect ? '🎉🥳💖' : '😢🥺💔') : question.kind === 'funny' ? '😂💗' : '💖✨'}</span><div><strong>{question.kind === 'choice' ? (isCorrect ? 'YAY! crtuhhh! 🎉' : 'Aww, thappuu! 😢') : question.kind === 'funny' ? 'Official relationship verdict 😂' : 'A lovely choice! 💗'}</strong><p>{question.options?.find((o) => o.label === answer)?.reaction ?? 'Every choice adds a little piece to your story.'}</p></div></div>}
        {(question.kind === 'choice') && answer && !isCorrect && <button className="lq-reveal" type="button" onClick={() => setRevealedAnswers((prev) => ({...prev,[question.id]:!prev[question.id]}))}>{revealedAnswers[question.id] ? 'Hide correct answer' : 'Reveal correct answer 💡'}</button>}
        {revealedAnswers[question.id] && <div className="lq-feedback positive"><span className="lq-feedback-icon">💡</span><div><strong>The intended answer</strong><p>{question.options?.find((o) => o.isCorrect)?.label ?? 'No single correct answer for this question.'}</p></div></div>}
      </article>
      {roundIndex === 4 && question.kind === 'rating' && answer && <section className="lq-rating-comparison lq-question-comparison lq-enter" aria-live="polite">
        <div className="lq-eyebrow">THIS QUESTION · TWO HEARTS</div>
        <h2>Our Rating for This 💞</h2>
        <p className="lq-rating-comparison-intro">As soon as Gokul locks his rating, both ratings for this exact question appear here.</p>
        {(() => {
          const category = question.id.replace('r5-', '');
          const yourScore = yourExistingRatings[category];
          const hisScore = Number(answer);
          return <article className="lq-rating-comparison-item" key={question.id}>
            <strong>{question.prompt}</strong>
            <div className="lq-rating-comparison-columns">
              <div><span>Priya’s rating for Gokul</span><b>{yourScore !== undefined ? `${yourScore}/10` : '—'}</b>{yourScore !== undefined && <i><em style={{ width: `${yourScore * 10}%` }} /></i>}</div>
              <div><span>Gokul’s rating for Priya</span><b>{hisScore}/10</b><i><em className="his-rating-fill" style={{ width: `${hisScore * 10}%` }} /></i></div>
            </div>
            {yourScore !== undefined && <p className="lq-rating-match">{yourScore === hisScore ? 'Same rating! You two agree! 💞' : Math.abs(yourScore - hisScore) <= 2 ? 'Almost the same — great minds think alike! 💗' : 'Different perspectives make your story unique! 💌'}</p>}
          </article>;
        })()}
      </section>}
      {isLastQuestionOfRound && <div className="lq-round-finish lq-round-finish-in" aria-live="polite"><div className="lq-finish-sparkles" aria-hidden="true">✦　♡　✧　♡　✦</div><strong>{roundIndex === 0 ? (roundOneAnswered === 10 ? 'Round complete, love detective! 💗' : 'One last little thing, love detective! 💗') : roundIndex === rounds.length - 1 ? 'The final chapter! ✨' : `${currentRound.title} — wrapped with love! 💌`}</strong>{roundIndex === 0 ? (showRoundOneScore ? <div className="lq-feedback positive lq-round-score lq-score-celebration" role="status"><span className="lq-feedback-icon">🏆🎉</span><div><strong>Your Round 1 score: {score}/10!</strong><p>{score === 10 ? 'PERFECT SCORE! You know Priya so well! 💖' : score >= 7 ? 'Amazing! You know Priya really well! 💗' : score >= 4 ? 'A sweet effort! There is still more to discover about Priya. 🫶' : 'Every answer is a chance to learn something new about Priya. 💌'}</p><p>This score appears only here, at the end of Round 1.</p></div></div> : <p>You have answered {roundOneAnswered}/10. Go back and answer every question to unlock your final score. 🔐</p>) : <p>Ready for the next little chapter of our story?</p>}<button className="lq-reset-round" type="button" onClick={resetCurrentRound}>↻ Reset this entire round</button></div>}
      <div className="lq-next-row"><button className="lq-secondary" type="button" onClick={() => moveQuestion(-1)} disabled={roundIndex === 0 && questionIndex === 0}>← Previous</button><button className="lq-next" type="button" onClick={() => moveQuestion(1)} disabled={(roundIndex === 0 && isLastQuestionOfRound && roundOneAnswered < roundOneQuestions.length) || (roundIndex === 4 && isLastQuestionOfRound && !currentRound.questions.every((q) => Boolean(answers[q.id])))}>{roundIndex === 0 && isLastQuestionOfRound && roundOneAnswered < roundOneQuestions.length ? 'Answer all 10 to continue' : roundIndex === 4 && isLastQuestionOfRound && !currentRound.questions.every((q) => Boolean(answers[q.id])) ? 'Rate all 10 to reveal comparison' : roundIndex === rounds.length - 1 && isLastQuestionOfRound ? 'Finish Love Quest' : isLastQuestionOfRound ? 'Next Round' : 'Next Question'} <span>→</span></button></div>
      <div className="lq-bottom-note"><span>✧</span> made of memories, giggles & little things <span>✧</span></div>
    </section>}
    {finished && <section className="lq-result lq-enter"><div className="lq-result-confetti">♡　✧　♥　✦　♡</div><div className="lq-result-seal">♡</div><div className="lq-eyebrow">YOU MADE IT TO THE END</div><h1>Our kind of <em>magic.</em></h1><p className="lq-result-sub">Every answer became another tiny piece of our story.</p>
      {rounds[4]?.questions.every((q) => Boolean(answers[q.id])) && <section className="lq-rating-comparison">
        <div className="lq-eyebrow">TWO HEARTS · TWO PERSPECTIVES</div>
        <h2>How We See Each Other 💞</h2>
        <p className="lq-rating-comparison-intro">Your earlier ratings for Gokul, beside his ratings for you.</p>
        {Object.keys(yourExistingRatings).length === 0 && <p className="lq-rating-storage-note">His ratings are saved. Your earlier ratings were not detected in browser storage, so connect their existing storage key to show both sides here.</p>}
        <div className="lq-rating-comparison-list">{rounds[4]?.questions.map((q) => {
          const category = q.id.replace('r5-', '');
          const yourScore = yourExistingRatings[category];
          const hisScore = Number(answers[q.id]);
          return <article className="lq-rating-comparison-item" key={q.id}>
            <strong>{q.prompt}</strong>
            <div className="lq-rating-comparison-columns">
              <div><span>Your rating for him</span><b>{yourScore !== undefined ? `${yourScore}/10` : '—'}</b>{yourScore !== undefined && <i><em style={{ width: `${yourScore * 10}%` }} /></i>}</div>
              <div><span>His rating for you</span><b>{hisScore}/10</b><i><em className="his-rating-fill" style={{ width: `${hisScore * 10}%` }} /></i></div>
            </div>
            {yourScore !== undefined && <p className="lq-rating-match">{yourScore === hisScore ? 'Same rating! You two agree! 💞' : Math.abs(yourScore - hisScore) <= 2 ? 'Almost the same — great minds think alike! 💗' : 'Different perspectives make your story unique! 💌'}</p>}
          </article>;
        })}</div>
      </section>}<div className="lq-score-card"><div className="lq-score-number">♡</div><div><strong>Every little answer is a memory. 💗</strong><p>Your Round 1 score was revealed at the end of Round 1. This final page is just for celebrating the adventure.</p></div></div><div className="lq-final-letter"><div className="lq-final-letter-top"><span>ONE LAST LITTLE NOTE</span><span>♡</span></div><p>Thank you for being part of my little world. We might not remember every detail perfectly, and that is okay. What matters is the laughter, the effort, the memories, and all the ordinary moments that become special because we share them. Here is to more silly arguments, stolen fries, spontaneous adventures, quiet days, and dreams we have not imagined yet.</p><p>There is still so much of our story left to write. 💗</p><span className="lq-final-sign">with all my love ♡</span></div><button className="lq-primary" type="button" onClick={restart}>Play Our Little Adventure Again <span>↻</span></button><p className="lq-small-note">Your saved answers will be cleared when you replay from the beginning.</p></section>}
    <footer className="lq-footer">a tiny corner of <span>our little world</span> ♡</footer>
  </main>;
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,500;1,600&display=swap');
.lq-page{--ink:#654951;min-height:100%;position:relative;overflow:hidden;padding:26px clamp(16px,4vw,48px) 30px;background:radial-gradient(ellipse at 12% 15%,#f9e7e7 0,transparent 35%),radial-gradient(ellipse at 88% 75%,#f7e8d9 0,transparent 36%),#fffaf6;color:var(--ink);font-family:Georgia,serif}.lq-page *{box-sizing:border-box}.lq-orb{position:absolute;width:240px;height:240px;border-radius:50%;filter:blur(2px);opacity:.24;pointer-events:none;background:#eec8d0}.lq-orb-one{top:12%;left:-170px}.lq-orb-two{right:-180px;bottom:8%;background:#efd8bf}.lq-topbar{position:relative;z-index:1;max-width:1120px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:12px}.lq-brand{color:#8b6670;text-decoration:none;font:italic 18px 'Playfair Display',serif}.lq-brand span{color:#c7798f;font-size:23px}.lq-sound{border:1px solid #ead4d5;border-radius:99px;background:#fffaf5;color:#99747c;padding:9px 13px;font-size:11px;cursor:pointer}.lq-intro,.lq-result{position:relative;z-index:1;max-width:680px;text-align:center;margin:55px auto 40px}.lq-eyebrow{font:700 9px/1.6 Arial,sans-serif;letter-spacing:.22em;color:#b88c94}.lq-envelope-wrap{position:relative;width:190px;height:145px;margin:35px auto 16px;animation:envelopeFloat 4s ease-in-out infinite}.lq-envelope{position:absolute;inset:25px 5px 5px;background:#e6b6bd;border-radius:7px;box-shadow:0 16px 30px #b65d7925;overflow:hidden}.lq-envelope:after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,transparent 49%,#d59aa6 50%,transparent 51%),linear-gradient(225deg,transparent 49%,#d59aa6 50%,transparent 51%)}.lq-envelope-flap{position:absolute;top:-3px;left:0;width:100%;height:75px;background:#f1d0d2;clip-path:polygon(0 0,100% 0,50% 100%);z-index:2}.lq-letter-peek{position:absolute;top:-2px;left:22px;right:22px;height:90px;background:#fff8eb;border-radius:4px;padding:17px 5px;color:#ad7c83;font:15px 'Caveat',cursive}.lq-letter-peek b{display:block;font-size:25px}.lq-seal{position:absolute;z-index:3;top:48px;left:calc(50% - 17px);display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#b95f7c;color:#fff3f2;box-shadow:0 2px 8px #8f4c5d33}.lq-envelope-shadow{position:absolute;bottom:0;left:20px;right:20px;height:10px;border-radius:50%;background:#b88d8d33;filter:blur(5px)}.lq-sparkle{position:absolute;color:#c8879a;font-size:23px}.sparkle-a{top:6px;left:0}.sparkle-b{right:0;top:28px}.sparkle-c{right:12px;bottom:2px}.lq-script{font:21px 'Caveat',cursive;color:#b77c8b;margin:0}.lq-intro h1,.lq-result h1{font:500 clamp(48px,8vw,75px)/1.1 'Playfair Display',serif;letter-spacing:-.05em;margin:5px 0 15px;color:#76535e}.lq-intro h1 em,.lq-result h1 em{color:#bf7187;font-weight:400}.lq-intro-copy{max-width:420px;margin:0 auto;color:#987d83;font-size:14px;line-height:1.9}.lq-intro-meta{display:flex;justify-content:center;flex-wrap:wrap;gap:10px 20px;margin:22px 0 28px;color:#b08b92;font-size:10px}.lq-primary{display:inline-flex;align-items:center;justify-content:center;gap:16px;border:0;border-radius:999px;padding:14px 22px;background:linear-gradient(135deg,#c8798e,#b65d79);color:#fffaf8;font-weight:600;font-size:12px;box-shadow:0 8px 20px #b65d7929;cursor:pointer;transition:transform .2s}.lq-primary:hover{transform:translateY(-2px)}.lq-primary span{font-size:19px}.lq-small-note{color:#a38b90;font-size:11px;margin-top:17px}.lq-game{position:relative;z-index:1;max-width:920px;margin:35px auto}.lq-game-heading{display:flex;justify-content:space-between;align-items:center;gap:20px;margin:24px 0 20px}.lq-game-heading h2{font:500 clamp(27px,4.5vw,42px)/1.2 'Playfair Display',serif;margin:7px 0}.lq-game-heading p{color:#967b82;margin:0;font-size:13px}.lq-round-stamp{width:60px;height:60px;flex:0 0 60px;display:grid;place-items:center;border-radius:50%;border:1px solid #e8c8ce;background:#fff7f3;font-size:28px}.lq-round-nav{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px;margin:20px 0}.lq-round-tab{padding:11px 7px;border:1px solid #ead5d7;border-radius:12px;background:#fffaf7;color:#98757d;font-size:11px;cursor:pointer;min-width:0}.lq-round-tab strong{display:block;font-size:15px;margin-bottom:4px}.lq-round-tab.active{background:#b9657e;border-color:#b9657e;color:#fff8f6;box-shadow:0 6px 16px #b65d7920}.lq-round-tab.done:after{content:' ✓';color:#a2b49b}.lq-progress-area{padding:14px 17px;border:1px solid #ecd9d7;border-radius:15px;background:#fff9f4ad;margin-bottom:18px}.lq-hearts{display:flex;flex-wrap:wrap;gap:5px 7px;color:#ead4d8;font-size:14px}.lq-hearts .filled{color:#c66f86;animation:heartPop .3s ease-out}.lq-progress-caption{display:flex;justify-content:space-between;gap:12px;margin-top:10px;color:#a1848a;font-size:9px;letter-spacing:.13em;font-weight:700}.lq-progress-track{height:4px;background:#f0dfe0;border-radius:20px;overflow:hidden;margin-top:8px}.lq-progress-track span{display:block;height:100%;background:linear-gradient(90deg,#e4a6b4,#b65d79);transition:width .4s}.lq-question-card{position:relative;overflow:hidden;border:1px solid #eedbd6;border-radius:22px;background:linear-gradient(145deg,#fffdf8,#fff8f2);padding:clamp(22px,4.5vw,40px);box-shadow:0 16px 40px #855c6810;animation:cardIn .4s ease both}.lq-question-card:before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#e6b3bd,#c36f85,#f1d1c4)}.lq-card-top{display:flex;justify-content:space-between;color:#b28b91;font-size:9px;font-weight:700;letter-spacing:.16em}.lq-card-scribble{font-size:16px;color:#d69aaa}.lq-question-art{display:grid;place-items:center;width:55px;height:55px;margin:23px auto 14px;border-radius:50%;background:#f9e9e8;border:1px solid #f0d6d8;font-size:26px}.lq-question-card h3{max-width:600px;margin:0 auto;text-align:center;font:500 clamp(23px,4vw,34px)/1.3 'Playfair Display',serif}.lq-hint{max-width:520px;margin:11px auto 22px;text-align:center;color:#a28a8c;font:18px 'Caveat',cursive}.lq-options{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:11px;margin-top:26px}.lq-option{min-height:58px;display:flex;align-items:center;gap:10px;text-align:left;padding:13px 14px;border:1px solid #efdcda;border-radius:13px;background:#fffdfa;color:#70565e;cursor:pointer;transition:all .2s;line-height:1.4;font-size:13px}.lq-option:hover:not(:disabled){border-color:#d7a1ae;background:#fff6f4;transform:translateY(-2px)}.lq-option:disabled{cursor:default;opacity:1}.lq-option:disabled:not(.chosen){filter:none;opacity:1}.lq-round-score{margin-top:16px}.lq-option.chosen{border-color:#ce8b9d;background:#fff0f2}.lq-option.right{border-color:#a8bca3;background:#f3f8ef}.lq-option.not-right{border-color:#e8c3c4;background:#fff0ef}.lq-option-dot{display:grid;place-items:center;width:24px;height:24px;flex:0 0 24px;border:1px solid #e7cdd1;border-radius:50%;color:#c17a8b}.lq-options-either .lq-option{min-height:100px;justify-content:center;flex-direction:column;text-align:center;font:17px 'Playfair Display',serif}.lq-choice-image{display:block;width:100%;height:155px;object-fit:cover;border-radius:10px;margin-bottom:9px}.lq-options-either .lq-option{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:0;min-height:0;padding:10px;text-align:left;font:inherit;overflow:hidden}.lq-options-either .lq-option:hover:not(:disabled){transform:translateY(-3px);box-shadow:0 9px 22px #b65d791a}.lq-choice-label{display:block;padding:4px 5px 2px;font:500 17px/1.35 'Playfair Display',serif;color:#76535e}.lq-choice-heart{display:block;padding:3px 5px 5px;color:#b77788;font-size:10px;letter-spacing:.04em}.lq-options-either .lq-option.chosen{box-shadow:0 0 0 2px #cc8ca0 inset;background:#fff0f2}.lq-options-either .lq-option.chosen .lq-choice-heart{font-weight:700;color:#b65d79}.lq-options-funny{grid-template-columns:repeat(2,minmax(0,1fr))}.lq-feedback{display:flex;align-items:flex-start;gap:12px;margin:20px 0 0;padding:15px 16px;border:1px solid #e8d5d4;border-radius:13px;background:#fffaf5;animation:feedbackIn .3s ease}.lq-feedback.positive{background:#f7f8ef;border-color:#e1e6d7}.lq-feedback.playful{background:#fff4f2}.lq-feedback-icon{font-size:25px}.lq-feedback strong{font:600 15px 'Playfair Display',serif}.lq-feedback p{margin:4px 0 0;color:#8d747a;font-size:12px;line-height:1.65}.lq-reveal{display:block;margin:13px auto 0;border:1px dashed #d5a1ad;border-radius:99px;padding:11px 16px;background:#fff2f3;color:#a6536e;font-size:12px;cursor:pointer}.lq-open-form{max-width:600px;margin:24px auto 0}.lq-open-form textarea{display:block;resize:vertical;width:100%;min-height:120px;padding:15px;border:1px solid #ead6d6;border-radius:13px;background:#fffdfa;color:var(--ink);font:14px/1.6 Arial,sans-serif}.lq-open-form textarea::placeholder{color:#c0a9ad;font:20px 'Caveat',cursive}.lq-open-bottom{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:10px}.lq-open-bottom>span{font-size:10px;color:#b39b9e}.lq-small-primary{padding:11px 16px;font-size:11px}.lq-small-primary:disabled{opacity:.45;cursor:not-allowed}.lq-saved-answer{margin:18px auto 0;max-width:600px;padding:18px;border:1px solid #ead7c8;border-radius:13px;background:#fff9ee;text-align:left;white-space:pre-wrap;line-height:1.7;font:17px 'Caveat',cursive;color:#765b5b}.lq-saved-answer small{display:block;margin-bottom:7px;font:700 9px Arial,sans-serif;letter-spacing:.15em;color:#b18a91}.lq-next-row{display:flex;justify-content:space-between;gap:12px;margin-top:18px}.lq-next{display:flex;align-items:center;justify-content:space-between;gap:12px;flex:1;padding:14px 17px;border:0;border-radius:12px;background:#654951;color:#fff8f4;font-weight:600;font-size:12px;cursor:pointer}.lq-next:disabled{opacity:.35;cursor:not-allowed}.lq-next span{font-size:18px}.lq-secondary{padding:12px 17px;border:1px solid #e6cdd1;border-radius:12px;background:#fff8f5;color:#966b77;font-size:12px;cursor:pointer}.lq-result{max-width:650px}.lq-result-confetti{color:#cf8ba0;letter-spacing:.8em;font-size:17px;margin-bottom:22px;animation:sparkle 3s ease-in-out infinite}.lq-result-seal{display:grid;place-items:center;width:74px;height:74px;border-radius:50%;background:#f5dfe3;border:1px solid #e7c2cb;color:#b95e79;font-size:36px;margin:0 auto 23px}.lq-result-sub{color:#967c81;font-size:13px;line-height:1.7}.lq-score-card{display:flex;align-items:center;gap:22px;text-align:left;margin:25px 0;padding:21px;border:1px solid #e9d2d4;border-radius:17px;background:#fff9f4}.lq-score-number{font:500 40px 'Playfair Display',serif;color:#bc6b83;white-space:nowrap}.lq-score-number span{font-size:16px;color:#b89ba0}.lq-score-card strong{font:600 17px 'Playfair Display',serif}.lq-score-card p{margin:5px 0 0;color:#90777c;font-size:12px;line-height:1.65}.lq-final-letter{padding:clamp(20px,4vw,32px);text-align:left;border:1px solid #e6d4be;background:repeating-linear-gradient(0deg,#fffaf0,#fffaf0 31px,#f2e8dc 32px);margin:25px 0}.lq-final-letter-top{display:flex;justify-content:space-between;color:#b37b83;font-size:9px;font-weight:700;letter-spacing:.16em}.lq-final-letter>p{font:18px/1.85 'Caveat',cursive;color:#775f5d}.lq-final-sign{display:block;text-align:right;color:#b66d83;font:20px 'Caveat',cursive}.lq-footer{position:relative;z-index:1;max-width:1120px;margin:22px auto 0;text-align:center;color:#b19a9c;font-size:10px}.lq-footer span{font:italic 14px 'Playfair Display',serif;color:#a77984}.lq-enter{animation:pageIn .5s ease both}@keyframes pageIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes cardIn{from{opacity:0;transform:translateY(12px) rotate(.4deg)}to{opacity:1;transform:translateY(0) rotate(0)}}@keyframes feedbackIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}@keyframes envelopeFloat{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-7px) rotate(1deg)}}@keyframes sparkle{0%,100%{opacity:.55;transform:scale(.94)}50%{opacity:1;transform:scale(1.08)}}@keyframes heartPop{0%{transform:scale(.7)}70%{transform:scale(1.2)}100%{transform:scale(1)}}.lq-round-stamp{animation:stampFloat 3.2s ease-in-out infinite;box-shadow:0 8px 22px #b65d7910}.lq-question-art{animation:artBob 3s ease-in-out infinite;box-shadow:0 7px 18px #d89aa31a}.lq-question-card{transform-origin:50% 70%;animation:cinematicCard .62s cubic-bezier(.2,.8,.2,1) both}.lq-option{position:relative;isolation:isolate;filter:none;backdrop-filter:none;-webkit-backdrop-filter:none}.lq-option:before{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(115deg,transparent 20%,#ffffffb0 48%,transparent 72%);transform:translateX(-130%);transition:transform .55s ease;z-index:-1;pointer-events:none}.lq-option:hover:not(:disabled):before{transform:translateX(130%)}.lq-option.chosen{animation:choicePop .42s cubic-bezier(.2,1.5,.4,1) both}.lq-options-either .lq-option.chosen .lq-choice-image{animation:imageReveal .6s cubic-bezier(.2,.8,.2,1) both}.lq-feedback{animation:feedbackBounce .55s cubic-bezier(.2,.8,.2,1) both}.lq-feedback-icon{display:inline-block;transform-origin:center;animation:iconBounce .7s ease both}.lq-round-finish{position:relative;overflow:hidden;text-align:center;margin-top:20px;padding:22px 18px;border:1px solid #efd0d6;border-radius:18px;background:radial-gradient(ellipse at top,#fff0f4,transparent 70%),linear-gradient(135deg,#fffaf6,#fff4f2);box-shadow:0 12px 32px #b65d7914}.lq-round-finish:before,.lq-round-finish:after{content:'♡';position:absolute;color:#e6b4c1;font-size:25px;opacity:.65;animation:floatSide 4s ease-in-out infinite}.lq-round-finish:before{left:8%;top:15%}.lq-round-finish:after{right:8%;bottom:15%;animation-delay:-2s}.lq-round-finish-in{animation:finishBloom .7s cubic-bezier(.16,1,.3,1) both}.lq-finish-sparkles{color:#c77991;letter-spacing:.3em;font-size:18px;animation:sparkle 2s ease-in-out infinite}.lq-round-finish strong{display:block;margin:8px 0;font:600 19px 'Playfair Display',serif;color:#875765}.lq-round-finish p{margin:5px 0 13px;font-size:12px;color:#9a7c84;line-height:1.7}.lq-reset-round{position:relative;border:1px dashed #d7a2b0;border-radius:999px;padding:10px 16px;background:#fffaf8;color:#a45f74;font-size:11px;font-weight:700;cursor:pointer;transition:transform .2s,background .2s}.lq-reset-round:hover{transform:translateY(-2px) rotate(-1deg);background:#fff0f3}.lq-score-celebration{animation:scoreBurst .85s cubic-bezier(.16,1,.3,1) both}.lq-score-celebration .lq-feedback-icon{animation:iconBounce .8s .15s ease both}@keyframes cinematicCard{0%{opacity:0;transform:translateY(24px) scale(.965) rotate(-.7deg);filter:none}65%{opacity:1;filter:none;transform:translateY(-3px) scale(1.008) rotate(.15deg)}100%{opacity:1;filter:none;transform:translateY(0) scale(1) rotate(0)}}@keyframes choicePop{0%{transform:scale(.96)}65%{transform:scale(1.025)}100%{transform:scale(1)}}@keyframes imageReveal{from{transform:scale(1.08);filter:saturate(.5) brightness(.8)}to{transform:scale(1);filter:saturate(1) brightness(1)}}@keyframes feedbackBounce{0%{opacity:0;transform:translateY(14px) scale(.98)}70%{opacity:1;transform:translateY(-2px) scale(1.005)}100%{opacity:1;transform:translateY(0) scale(1)}}@keyframes iconBounce{0%{transform:scale(.4) rotate(-15deg)}65%{transform:scale(1.2) rotate(7deg)}100%{transform:scale(1) rotate(0)}}@keyframes finishBloom{0%{opacity:0;transform:translateY(14px) scale(.96)}70%{opacity:1;transform:translateY(-2px) scale(1.01)}100%{opacity:1;transform:translateY(0) scale(1)}}@keyframes floatSide{0%,100%{transform:translateY(0) rotate(-10deg)}50%{transform:translateY(-9px) rotate(12deg)}}@keyframes stampFloat{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-5px) rotate(4deg)}}@keyframes artBob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-4px) rotate(3deg)}}@keyframes scoreBurst{0%{opacity:0;transform:scale(.88) translateY(12px);filter:blur(3px)}60%{opacity:1;transform:scale(1.025) translateY(-2px);filter:blur(0)}100%{opacity:1;transform:scale(1) translateY(0)}}
@media(max-width:650px){.lq-page{padding:18px 13px 24px}.lq-intro,.lq-result{margin-top:30px}.lq-round-nav{grid-template-columns:repeat(3,minmax(0,1fr))}.lq-round-tab{font-size:10px}.lq-game-heading{align-items:flex-start}.lq-round-stamp{width:50px;height:50px;flex-basis:50px;font-size:23px}.lq-question-card{padding:21px 15px}.lq-options,.lq-options-funny{grid-template-columns:1fr}.lq-options-either .lq-option{min-height:75px}.lq-choice-image{height:175px}.lq-next-row{flex-direction:column}.lq-score-card{gap:13px;padding:16px}.lq-score-number{font-size:34px}}/* Keep unanswered choices fully readable after one option is selected. */ .lq-page .lq-options .lq-option:disabled:not(.chosen),.lq-page .lq-options .lq-option:disabled:not(.chosen) *{opacity:1!important;filter:none!important;-webkit-filter:none!important;color:inherit} .lq-page .lq-options .lq-option:disabled:not(.chosen){background:#fffdfa!important;border-color:#efdcda!important;cursor:default!important} .lq-page .lq-options .lq-option:disabled:not(.chosen) .lq-option-dot{color:#c17a8b!important;border-color:#e7cdd1!important} /* FINAL READABILITY OVERRIDE: never fade any answer, selected or not. */
.lq-page .lq-options .lq-option,
.lq-page .lq-options .lq-option:disabled,
.lq-page .lq-options .lq-option:disabled:not(.chosen),
.lq-page .lq-options .lq-option.chosen,
.lq-page .lq-options .lq-option.not-right {
  opacity: 1 !important;
  filter: none !important;
  -webkit-filter: none !important;
  color: #4b3039 !important;
  font-weight: 700 !important;
  text-shadow: none !important;
}
.lq-page .lq-options .lq-option *,
.lq-page .lq-options .lq-option:disabled * {
  opacity: 1 !important;
  filter: none !important;
  -webkit-filter: none !important;
  color: #4b3039 !important;
  font-weight: 700 !important;
  text-shadow: none !important;
}
.lq-page .lq-options .lq-option:disabled:not(.chosen) {
  background: #fffdfa !important;
  border-color: #efdcda !important;
}
.lq-page .lq-options .lq-option:disabled:not(.chosen) .lq-option-dot {
  color: #b65d79 !important;
  border-color: #dfb7c1 !important;
}
.lq-page .lq-options-either .lq-choice-label,
.lq-page .lq-options-either .lq-choice-heart {
  color: #4b3039 !important;
  font-weight: 700 !important;
  opacity: 1 !important;
}
.lq-page .lq-options .lq-option.right { background: #f3f8ef !important; }
.lq-page .lq-options .lq-option.not-right { background: #fff0ef !important; }
/* Force every choice label to use the same dark, bold text; override disabled-button and inherited styles. */
.lq-page .lq-options .lq-option,
.lq-page .lq-options .lq-option:disabled,
.lq-page .lq-options .lq-option:disabled:hover,
.lq-page .lq-options .lq-option.chosen,
.lq-page .lq-options .lq-option.not-right,
.lq-page .lq-options .lq-option.right {
  color: #4b3039 !important;
  -webkit-text-fill-color: #4b3039 !important;
  opacity: 1 !important;
  filter: none !important;
  font-weight: 700 !important;
}
.lq-page .lq-options .lq-option > span,
.lq-page .lq-options .lq-option:disabled > span,
.lq-page .lq-options .lq-option .lq-option-dot,
.lq-page .lq-options .lq-option .lq-choice-label,
.lq-page .lq-options .lq-option .lq-choice-heart {
  color: #4b3039 !important;
  -webkit-text-fill-color: #4b3039 !important;
  opacity: 1 !important;
  filter: none !important;
  font-weight: 700 !important;
  text-shadow: none !important;
}
.lq-page .lq-options .lq-option:disabled:not(.chosen) {
  background: #fffdfa !important;
  border-color: #efdcda !important;
}
/* FINAL FIX: answer choices never fade, including incorrect/unselected choices after locking. */
.lq-page .lq-options button.lq-option,
.lq-page .lq-options button.lq-option:disabled,
.lq-page .lq-options button.lq-option:disabled * {
  opacity: 1 !important;
  filter: none !important;
  -webkit-filter: none !important;
  color: #4b3039 !important;
  -webkit-text-fill-color: #4b3039 !important;
  font-weight: 700 !important;
  text-shadow: none !important;
}
.lq-page .lq-options button.lq-option:disabled:not(.chosen) {
  background: #fffdfa !important;
  border-color: #efdcda !important;
}
.lq-page .lq-options button.lq-option:disabled:not(.chosen) .lq-option-dot {
  color: #b65d79 !important;
  -webkit-text-fill-color: #b65d79 !important;
}
.lq-page .lq-options button.lq-option.not-right:not(.chosen) {
  background: #fffdfa !important;
}
.lq-page .lq-options button.lq-option::before { opacity: 0 !important; }

/* Distinct romantic atmosphere for each round. Choice cards stay opaque and readable. */
.lq-page[class*="lq-theme-round-"]{transition:background .65s ease,color .35s ease}
.lq-page.lq-theme-round-1{background:radial-gradient(ellipse at 8% 12%,#ffd9e4 0,transparent 38%),radial-gradient(ellipse at 92% 78%,#f7dfc8 0,transparent 36%),linear-gradient(135deg,#fff8f5,#fff1f4 55%,#fffaf0)}
.lq-page.lq-theme-round-2{background:radial-gradient(ellipse at 12% 18%,#e4dcff 0,transparent 38%),radial-gradient(ellipse at 88% 76%,#f3d9f0 0,transparent 38%),linear-gradient(135deg,#fbf7ff,#f5f0ff 55%,#fff8fc)}
.lq-page.lq-theme-round-3{background:radial-gradient(ellipse at 10% 15%,#ffe2c8 0,transparent 36%),radial-gradient(ellipse at 88% 82%,#ffd9d5 0,transparent 38%),linear-gradient(135deg,#fffaf2,#fff0e6 55%,#fff6f3)}
.lq-page.lq-theme-round-4{background:radial-gradient(ellipse at 12% 14%,#d8e8ff 0,transparent 38%),radial-gradient(ellipse at 90% 80%,#e6dcff 0,transparent 38%),linear-gradient(135deg,#f7fbff,#f0f4ff 55%,#fbf7ff)}
.lq-page.lq-theme-round-5{background:radial-gradient(ellipse at 10% 16%,#d9efdf 0,transparent 38%),radial-gradient(ellipse at 90% 82%,#f4e5bf 0,transparent 38%),linear-gradient(135deg,#f8fff8,#f2f8ef 55%,#fffaf0)}
.lq-theme-round-1 .lq-question-card{background:linear-gradient(145deg,#fffdfc,#fff0f4);border-color:#f0cbd5}
.lq-theme-round-2 .lq-question-card{background:linear-gradient(145deg,#fffefe,#f5f0ff);border-color:#dcd0f0}
.lq-theme-round-3 .lq-question-card{background:linear-gradient(145deg,#fffefa,#fff1e6);border-color:#f0d3bd}
.lq-theme-round-4 .lq-question-card{background:linear-gradient(145deg,#ffffff,#edf4ff);border-color:#cbdcf5}
.lq-theme-round-5 .lq-question-card{background:linear-gradient(145deg,#fffffb,#eff8ed);border-color:#d0e2ca}
.lq-theme-round-1 .lq-question-card:before{background:linear-gradient(90deg,#f4a9c0,#d97899,#f7d6ad)}
.lq-theme-round-2 .lq-question-card:before{background:linear-gradient(90deg,#c7b2f2,#9d87d7,#f0c4e5)}
.lq-theme-round-3 .lq-question-card:before{background:linear-gradient(90deg,#f5bd82,#ec8e83,#f4d28c)}
.lq-theme-round-4 .lq-question-card:before{background:linear-gradient(90deg,#8cb8f3,#a49ae8,#d2b7f6)}
.lq-theme-round-5 .lq-question-card:before{background:linear-gradient(90deg,#8fbe9b,#d6c17b,#a4cba7)}
.lq-theme-round-1 .lq-option{border-color:#edcdd5}
.lq-theme-round-2 .lq-option{border-color:#d9cfee}
.lq-theme-round-3 .lq-option{border-color:#efd3bd}
.lq-theme-round-4 .lq-option{border-color:#cbdcf2}
.lq-theme-round-5 .lq-option{border-color:#d1e2ca}




/* Keep every choice surface solid; no faded/blurred unanswered options. */
.lq-page .lq-option,.lq-page .lq-option:disabled,.lq-page .lq-option:disabled:not(.chosen){backdrop-filter:none!important;-webkit-backdrop-filter:none!important;opacity:1!important;filter:none!important;background-color:#fffdfa}
.lq-theme-round-1 .lq-option.chosen{background:#ffe7ee!important}
.lq-theme-round-2 .lq-option.chosen{background:#eee7ff!important}
.lq-theme-round-3 .lq-option.chosen{background:#ffeadb!important}
.lq-theme-round-4 .lq-option.chosen{background:#e6efff!important}
.lq-theme-round-5 .lq-option.chosen{background:#e8f4e4!important}
@media(prefers-reduced-motion:reduce){.lq-page *{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
/* Full-screen emoji reactions: hearts, chocolate and confetti for correct answers; broken hearts and tears for wrong ones. */
.lq-reaction-burst{position:fixed;inset:0;z-index:100;overflow:hidden;pointer-events:none;isolation:isolate}
.lq-reaction-burst span{position:absolute;left:var(--x);top:72%;font-size:clamp(22px,3vw,38px);line-height:1;opacity:0;filter:drop-shadow(0 5px 8px #7a344522);animation:reactionFly 2.25s cubic-bezier(.12,.72,.18,1) var(--delay) both;will-change:transform,opacity}
.lq-reaction-burst.burst-success span{animation-name:celebrationFly}
.lq-reaction-burst.burst-sad span{animation-name:heartBreakFly}
@keyframes reactionFly{0%{opacity:0;transform:translate3d(0,40px,0) scale(.35) rotate(0)}12%{opacity:1}75%{opacity:1}100%{opacity:0;transform:translate3d(var(--drift),-75vh,0) scale(1.2) rotate(var(--spin))}}
@keyframes celebrationFly{0%{opacity:0;transform:translate3d(0,35px,0) scale(.25) rotate(0)}15%{opacity:1;transform:translate3d(0,-15px,0) scale(1.25) rotate(12deg)}35%{transform:translate3d(var(--drift),-25vh,0) scale(1.05) rotate(var(--spin))}100%{opacity:0;transform:translate3d(calc(var(--drift) * 1.4),-90vh,0) scale(.8) rotate(calc(var(--spin) * 2))}}
@keyframes heartBreakFly{0%{opacity:0;transform:translate3d(0,20px,0) scale(.3) rotate(0)}15%{opacity:1;transform:translate3d(0,-8px,0) scale(1.15) rotate(-10deg)}40%{transform:translate3d(var(--drift),-24vh,0) scale(.95) rotate(var(--spin))}100%{opacity:0;transform:translate3d(calc(var(--drift) * 1.5),-72vh,0) scale(.7) rotate(calc(var(--spin) * 2))}}
.lq-transition-sheen{position:fixed;inset:0;z-index:30;pointer-events:none;background:radial-gradient(ellipse at center,#fff7f2aa,transparent 65%);opacity:0;animation:screenBloom .68s ease-out both}
.lq-game.lq-enter{animation:cinematicPageEnter .55s cubic-bezier(.2,.8,.2,1) both}
@keyframes screenBloom{0%{opacity:.85}45%{opacity:.32}100%{opacity:0}}
@keyframes cinematicPageEnter{0%{opacity:0;transform:translateY(18px) scale(.985);filter:blur(2px)}65%{opacity:1;filter:blur(0);transform:translateY(-2px) scale(1.003)}100%{opacity:1;transform:translateY(0) scale(1);filter:blur(0)}}
@media(prefers-reduced-motion:reduce){.lq-reaction-burst span,.lq-transition-sheen{animation:none!important;display:none!important}}

/* Cinematic question transitions and emotional emoji reactions — no dancing character. */
.lq-game { perspective: 1200px; }
.lq-question-card {
  position: relative;
  transform-origin: 50% 55%;
  animation: storyCardArrive .72s cubic-bezier(.19,1,.22,1) both;
  will-change: transform, opacity;
}
.lq-question-card::after {
  content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: linear-gradient(112deg, transparent 0%, #fff8 42%, #fff0 58%, transparent 100%);
  transform: translateX(-130%); animation: cardLightSweep 1.05s .12s ease-out both;
}
.lq-game-heading, .lq-progress-area, .lq-options, .lq-feedback, .lq-next-row {
  animation: softSceneSettle .65s cubic-bezier(.2,.75,.25,1) both;
}
.lq-progress-area { animation-delay: .04s; }
.lq-options { animation-delay: .09s; }
.lq-feedback { animation-delay: .12s; }
.lq-next-row { animation-delay: .16s; }
.lq-reaction-burst span {
  top: calc(42% + (var(--index, 0) * 1px));
  text-shadow: 0 4px 14px #8d3c5520;
  animation-duration: 2.8s;
}
.lq-reaction-burst.burst-success span { animation-name: loveCelebrationFloat; }
.lq-reaction-burst.burst-sad span { animation-name: heartbreakDrift; }
.lq-reaction-burst.burst-love span { animation-name: tenderHeartFloat; }
@keyframes storyCardArrive {
  0% { opacity: 0; transform: translate3d(0, 24px, 0) scale(.975) rotateX(2deg); }
  55% { opacity: 1; transform: translate3d(0, -3px, 0) scale(1.006) rotateX(0); }
  100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1) rotateX(0); }
}
@keyframes cardLightSweep {
  0% { transform: translateX(-130%); opacity: 0; }
  18% { opacity: .85; }
  100% { transform: translateX(130%); opacity: 0; }
}
@keyframes softSceneSettle {
  0% { opacity: 0; transform: translateY(11px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes loveCelebrationFloat {
  0% { opacity: 0; transform: translate3d(0, 28px, 0) scale(.25) rotate(0); }
  12% { opacity: 1; transform: translate3d(0, -4px, 0) scale(1.15) rotate(8deg); }
  38% { opacity: 1; transform: translate3d(var(--drift), -26vh, 0) scale(1.04) rotate(var(--spin)); }
  72% { opacity: .85; transform: translate3d(calc(var(--drift) * -.35), -55vh, 0) scale(.92) rotate(calc(var(--spin) * -1)); }
  100% { opacity: 0; transform: translate3d(calc(var(--drift) * 1.25), -88vh, 0) scale(.65) rotate(calc(var(--spin) * 2)); }
}
@keyframes heartbreakDrift {
  0% { opacity: 0; transform: translate3d(0, 16px, 0) scale(.35) rotate(0); }
  14% { opacity: 1; transform: translate3d(0, -5px, 0) scale(1.08) rotate(-8deg); }
  45% { opacity: .95; transform: translate3d(var(--drift), -24vh, 0) scale(.92) rotate(var(--spin)); }
  100% { opacity: 0; transform: translate3d(calc(var(--drift) * 1.35), -68vh, 0) scale(.72) rotate(calc(var(--spin) * 1.5)); }
}
@keyframes tenderHeartFloat {
  0% { opacity: 0; transform: translate3d(0, 22px, 0) scale(.5); }
  20% { opacity: .95; transform: translate3d(0, -4px, 0) scale(1.08); }
  100% { opacity: 0; transform: translate3d(var(--drift), -60vh, 0) scale(.8) rotate(var(--spin)); }
}
@media (prefers-reduced-motion: reduce) {
  .lq-question-card, .lq-question-card::after, .lq-game-heading, .lq-progress-area, .lq-options, .lq-feedback, .lq-next-row { animation: none !important; }
  .lq-reaction-burst span { animation-duration: .01ms !important; }
}

/* Round 5 — interactive love rating game and comparison reveal. */
.lq-theme-round-5{background:radial-gradient(ellipse at 12% 12%,#ffe0ed 0,transparent 38%),radial-gradient(ellipse at 88% 82%,#eadcff 0,transparent 40%),linear-gradient(135deg,#fff8fc,#fff0f7 52%,#f8f1ff)}
.lq-theme-round-5 .lq-question-card{background:linear-gradient(145deg,#fffefe,#fff0f8);border-color:#f0c8df}
.lq-theme-round-5 .lq-question-card:before{background:linear-gradient(90deg,#f4a5c9,#d77ae7,#f6c2d5)}
.lq-rating-panel{margin:24px auto 8px;max-width:440px;padding:24px 20px;border:1px solid #f4d3e5;border-radius:25px;background:linear-gradient(145deg,#fff8fc,#f9edff);text-align:center;box-shadow:0 12px 32px #b45a8b12}
.lq-rating-heart,.lq-rating-locked-heart{display:inline-block;font-size:78px;line-height:1.2;filter:drop-shadow(0 8px 16px #e76ca844);transition:transform .2s ease;animation:lqRatingPulse 1.7s ease-in-out infinite}
.lq-rating-locked-heart{animation:lqRatingPop .55s cubic-bezier(.2,.9,.3,1.3) both}
.lq-rating-score{margin:8px 0;color:#c64f8b;font:bold 48px/1 Arial,sans-serif}
.lq-rating-score span{font-size:17px;color:#b58aa2}
.lq-rating-caption,.lq-rating-reaction{margin:6px 0 18px;color:#a66d8d;font-size:13px}
.lq-rating-reaction{font-weight:700;color:#b34f83}
.lq-rating-slider-labels{display:flex;justify-content:space-between;margin:20px 0 8px;color:#a77891;font-size:11px}
.lq-rating-slider{width:100%;accent-color:#d95b9c;cursor:pointer}
.lq-rating-ticks{display:grid;grid-template-columns:repeat(10,minmax(0,1fr));gap:4px;margin:13px 0 22px}
.lq-rating-ticks button{min-width:0;padding:8px 0;border:1px solid #efd4e3;border-radius:9px;background:#fff;color:#a87591;font-size:11px;cursor:pointer;transition:transform .18s ease,background .18s ease}
.lq-rating-ticks button.active{background:#d95b9c;border-color:#d95b9c;color:#fff;transform:translateY(-3px);box-shadow:0 5px 12px #d95b9c35}
.lq-rating-save{width:100%;justify-content:center}
.lq-rating-locked-note{margin-top:16px;color:#a77590;font-size:11px}
.lq-question-comparison{margin-top:20px;margin-bottom:22px;padding:22px clamp(14px,3vw,24px)}.lq-question-comparison h2{font-size:clamp(23px,3.5vw,30px)}
.lq-rating-comparison{position:relative;overflow:hidden;margin:28px auto;padding:28px clamp(14px,3vw,28px);max-width:850px;border:1px solid #f0c9df;border-radius:28px;background:linear-gradient(145deg,#fff8fc,#f6edff);box-shadow:0 18px 55px #ad5e8515;text-align:center}
.lq-rating-comparison h2{margin:10px 0;color:#8c456c;font:500 clamp(26px,4vw,36px) 'Playfair Display',Georgia,serif}
.lq-rating-comparison-intro{color:#a57891;font-size:13px}
.lq-rating-storage-note{margin:14px auto;padding:12px;border-radius:12px;background:#fff;color:#9c7188;font-size:12px;line-height:1.6}
.lq-rating-comparison-list{display:grid;gap:12px;margin-top:22px;text-align:left}
.lq-rating-comparison-item{padding:17px;border:1px solid #f0dbe7;border-radius:17px;background:#fffdfd}
.lq-rating-comparison-item>strong{display:block;margin-bottom:14px;color:#824766;font-size:14px}
.lq-rating-comparison-columns{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.lq-rating-comparison-columns>div{display:grid;gap:7px}
.lq-rating-comparison-columns span{color:#a57d93;font-size:10px}
.lq-rating-comparison-columns b{color:#c2508b;font-size:22px}
.lq-rating-comparison-columns i{display:block;overflow:hidden;height:6px;border-radius:20px;background:#f4e2ec}
.lq-rating-comparison-columns i em{display:block;height:100%;border-radius:20px;background:linear-gradient(90deg,#f2a5c8,#d76fa8);transition:width .8s ease}
.lq-rating-comparison-columns i em.his-rating-fill{background:linear-gradient(90deg,#d4a5ed,#a66bd5)}
.lq-rating-match{margin:12px 0 0;color:#a75f85;font-size:11px}
@keyframes lqRatingPulse{0%,100%{filter:drop-shadow(0 8px 16px #e76ca833)}50%{filter:drop-shadow(0 8px 24px #e76ca877)}}
@keyframes lqRatingPop{0%{opacity:0;transform:scale(.35) rotate(-15deg)}70%{opacity:1;transform:scale(1.15) rotate(5deg)}100%{transform:scale(1) rotate(0)}}
@media(max-width:480px){.lq-rating-panel{padding:20px 13px}.lq-rating-ticks{gap:3px}.lq-rating-ticks button{font-size:10px;padding:7px 0}.lq-rating-comparison-columns{gap:9px}.lq-rating-comparison-item{padding:13px}}
`;
