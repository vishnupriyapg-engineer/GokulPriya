
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/_authenticated/letters")({
  component: LettersPage,
});

type Letter = {
  id: number;
  title: string;
  subtitle: string;
  message: string;
  color: string;
  emoji: string;
  song: string;
};

const letters: Letter[] = [
  {
    id: 1,
    song: "/music/letters/letter-01.mp3",
    title: "Open On Your Birthday",
    subtitle: "27/10/20** apo open panuda",
    message: `Happy Birthday Mamsss. 🎂❤️


Deiiiiii, innikku un birthday daaaaa! 🥹💗🎉

First of all, enna da ivlo azhaga porandhirukka, un face aadadadadaaa , un lips happpapapapappaa, mothathula aiyayayoo ayiyayyoo izhukuthu irzhukuthu izhukuthu enna? 🤣❤️

**Happy Birthday da en favourite human!** 🫂❤️
Nan unkuda intha birthday la ilanu kastama irukuda, but intha special day va unaku special akurathuku intha website gift unaku pudikum kandipa fulla parthu soluda.
Unakku innikku enna wish panradhu nu yosicha, neraya vishayam mind la varudhu da. Aana ellathayum vida, nee eppovume happy ah irukkanum, un manasukku pudicha life ah vaazhanum, nee aasai padra ovvoru vishayamum oru naal nijamaaganum nu manasara wish panren. 🥹🫶🏻

Unakku theriyuma, nee en life la irukkuradhe evlo azhagana visayamnu . Nan thedama kedaicha gift ne than da . Un kooda pesuradhu, unna kalaikkuradhu, un kitta sanda podradhu, apram edhuvume nadakkadha maari pesuradhu... idhellam yosicha enakke sirippu varudhu! 😭😂❤️

Sila neram unnai romba torture pannuven, un patience ah test pannuven, unna veruppethuven... aana enna pannalum, Ne enna vidamata , enna oru sotu kuda kasta pada vekkamata da! 😚💗

Innikki un birthday, so unakku oru special permission! 😌🎂

 😂🍰 Unakku pudichadha saapidu, pudichadha pannu, nalla sirichu enjoy pannu.

Aana cake la first piece enakku dhaan venum! 😤💋 Illa na birthday boy nu kooda paaka maaten! 😭🤣❤️

Seri, comedy konjam side la vechuttu oru important vishayam solren da... 🥹❤️‍🩹

Life la nee evlo periya aal aanaalum, evlo achievements achieve pannalum, evlo dhooram ponaalum, un manasula irukkura andha nalla gunangalaiyum, unmaiyaana sirippaiyum, unakku pudichavangala care panra andha azhagana heart ahvum lose pannidadha.

Un journey la ellame easy ah irukkaadhu. Sila naal nee romba happy ah iruppa, sila naal edhuvum namma plan panna maari nadakkaama pogalaam. Aana ovvoru experience um unna pudhusa edhavadhu kathukka vaikkum. Un mela nambikkai vechuttu, un dreams ah nokki po da. ❤️✨

**Un birthday ku naan kekkura wish enna theriyuma? Nee un life la achieve panra ovvoru happiness um manasara enjoy pannanum. Nee evlo deserve panra nu sila neram unakke theriyama pogalam... aana un happiness mukkiyam da.** 🥹💗

And now, konjam romantic ah pesattuma? 🤭💋

Un birthday na enakku nee porandha naal mattum illa da... En life oda Happiness um porantha nall. Unga amma kadaisila oru gem person ah poraka vechurkanga enakaga...

Adha nenachaale indha naal konjam extra special ah theriyudhu. ❤️🎀

Un life la innum neraya birthdays varanum. Ovvoru birthday layum nan unkuda irukanum, nee munna vida happy ahvum, confident ahvum, fulfilled ahvum irukkanum. Un dreams nijamaaguradha nee un kannala paakanum.

And hopefully, innaiku  konjam extra ah love pannuren da, because nan poranthathu 2005 ah irunthalum 2000 laye enoda ulagam start agiduchu da! 😭😂💋❤️‍🔥

**Happy Birthday once again, My dear mamsss!** 🎂🫂💗

Innikki un day. So worries ah konjam marandhuttu, unakku pudichavanga kooda time spend pannu, neraya sirichu, azhagaana memories create pannu.

Nee innum achieve panna vendiya vishayangal neraya irukku da. Idhu un life oda innoru beautiful chapter mattum dhaan. Un story innum romba azhaga poganum nu naan wish panren. 🥹✨

**And one last thing, birthday boy...**

Unakku indha ulagathula evlo gifts kidaichaalum, evlo wishes vandhaalum, indha letter ah padikkumbodhu oru second aavadhu smile pannina, adhu enakku podhum da! ❤️
I love you, birthday loosuuu! 😭💋🎂❤️‍🔥

**Happy Birthday, my favourite person. Un life full ah happiness irukkanum... and konjam extra ah en torture um irukkanum!** 😭😂🫶🏻💗🎀
`,
    color: "#bd7195",
    emoji: "🎂",
  },
  {
    id: 2,
    song: "/music/letters/letter-02.mp3",
    title: "Open When You Miss Me",
    subtitle: "Enna romba miss panumbothu open panu da",
    message: `Heyyy en Thangamana payane🥹❤️🫂

Enna daaa, priya va miss panriya? 😭❤️ Inga vaa firstu, oru tight hug kuduthuttu pesalam. 🫂💋

Naan un pakkathula irundha ippo enna panniruppen theriyuma? Unna summa disturb pannittu iruppen, edhavadhu mokka joke solli sirikka vechiruppen, un kooda chinna chinna vishayathukkellam sandai pottuttu, konja nerathula naane vandhu pesiruppen, ne enna kalaichalum siripen. 😭😂❤️

Maybe ippo namma rendu perum pakkathula ukkandhu edhume pesaama irundhaalum nalla irukkum la da? Nee un velaiya paaru, naan unna disturb pannittu iruppen. Appappo unna paathu sirippen. Nee enna nu ketta, "Onnum illa da loosu" nu solliduven. Aana unakku theriyama unna rasichittu iruppen unoda cutest face ah. 🥹❤️‍🩹

Nan kooda inga unaa romba miss panitu iruken da....🥹 un kooda irukkumbodhu enakku kidaikkura andha happiness, peace, comfort ellathayum miss pandra da 🫂💗

Namma pesuna silly conversations, reason eh illama sirichadhu, chinna chinna moments, nee enna kalaichadhu, naan unna torture pannadhu... idhellam nyabagam varumbodhu automatic ah smile vandhurum la? 😭❤️😂

Enakkum andha moments ellam romba special dhaan da. Periya periya gifts vida, expensive surprises vida, un kooda spend panra andha simple moments dhaan enakku romba precious. 🥹💋❤️
24 um pesuvom nadula iruka gap la than vera velaaye papom.
Ippo naan un pakkathula illa naalum, namma share panna memories ah konjam nenachu paaru da. Andha memories la irukkura happiness ah un face la oru chinna smile ah kondu vandha kooda, indha letter oda mission successful! 😌❤️‍🔥

Aana oru vishayam, en chellam... 🥺🫶🏻

**Distance irundhaalum, busy ah irundhaalum, udane pesa mudiyama ponaalum, nee enakku special ah irukkuradhu maaridathu. unoda priya unnathan yepome nenaichutu irukada.** ❤️‍🩹

Unna miss panra indha moment ah mattum yosichittu sad aagadha da. Seekirama innoru memory create panna chance varum nu happy ah iru. Appo naan unna evlo kalaikka poren nu mattum yosichu paaru. 😭😂💗

And nowww, imagine panniko... naan un munnadi vandhu nikkuren, unna paathu oru cute smile panren, apram sudden ah vandhu unna tight ah hug panren. 🫂❤️

Nee enna vida maata, naan unna vida maaten... konja neram appadiye iruppom. No worries, no stress, no overthinking... just namma rendu perum. 🥹💋❤️

**Ippo indha letter ah padichittu, enna miss panradha konjam korachittu, enna nenachu oru azhagana smile pannu da,thangamee!** 🫶🏻❤️

I miss you too, loosu paiyaaa! 🥹🫂💌❤️‍🩹

Sending you the Tightest hug. 💌`,
    color: "#a65d83",
    emoji: "💗",
  },
  {
    id: 3,
    song: "/music/letters/letter-03.mp3",
    title: "Open When You Need a Hug",
    subtitle: "Hug venuma da apo open panu da",
    message: `DEIII EN CHELLA PAIYAAA 😭🫂❤️**

STOPPP EVERYTHING DA! 😤❤️

Yaaru permission kudutha unakku ipdi silent ah kashtapattutu irukka? 😭 First phone ah keela vai, konjam relax pannu, because unakku oru **MEGA ULTRA PRO MAX TIGHT HUG** waiting la irukkuuu! 🫂💋❤️‍🔥

Ippo imagine panniko da... naan un munnadi vandhu nikkuren, unna paathu cute ah sirikkuren, apram sudden ah unna tight ah hug panren. 🥹❤️

Unna en tshirt kulaa vitutu , un hands ah enna suthi pottuko, naan unna engayum poga vida maaten. 😭🫂💗

**"Enna da aachu en chellathukku? Yaaru en baby ah hurt pannadhu? Sollu da, naan poi sanda podren!"** 😤😂❤️‍🔥

Aana serious ah da, en chellam... 🥺❤️

Sila neram namakku enna problem nu kooda explain panna thonadhu. Yaar kittayum pesaama, edhuvum yosikkaama, nan un kooda irundha nalla irukkum nu thonum la? 🫂❤️‍🩹

Appadi oru moment la dhaan naan unakku indha letter kudukuren da. Nee strong ah iruda. Nan unna engayum pogavidamaten da.

**Innikki konjam tired ah irundha rest edu da. Manasu valicha azhu. Edhuvum panna thonala na summa iru. Aana edhukkagavum unna neeye romba pressure pannikaadha.** 🥹❤️

Naan un pakkathula irundha, unna questions kettu torture panna maaten. 😂❤️ First hug pannuven, apram un thalaya konjam kothi viduven, un forehead la oru kutty kiss kuduppen. 💋🫂

Apram nee konjam relax aana odane...

"Seri da loosu, ippo sollu... enna saapta? bathroom poniya? Thanni kudichiya? Illa adhayum marandhutiya?" 😭😂💗
Because nee sad ah irundhaalum, unna konjam care pannradhu enakku mukkiyam da. 🥹❤️‍🩹

**Enakku unna happy ah irukkumbodhu mattum hug pannanum nu illa da... nee tired ah irukkumbodhum, confused ah irukkumbodhum, edhuvum pesa mudiyama irukkumbodhum kooda hug pannanum.** 🫂❤️

Okay, ippo official hug rules! 😌👇🏻

🫂 **Hug Duration:** Nee vida solra varaikkum! 😂❤️

💗 **Hug Tightness:** Maximum... ne muuchi vida! 🥹🫶🏻

💋 **Forehead Kiss:** Illa Lipzz kisss 😤😂❤️

❤️‍🩹 **Escape Button:  illaaa! , no escape 😭😂🫂

And one last thing, en chellakutty... 🥺❤️

**Unna suthi evlo problems irundhaalum, Nalla sapdu , nala thunguda. Nee ellathayum thaangittu irukkanum nu avasiyam illa. Sometimes, oru hug, konjam anbu, konjam rest... avlodhaan namakku thevai.** 🫂💗
Imagine naan un pakkathula irundhu solren...

**"It's okay da, en chellam. Konjam rest edu. Naan irukken... ippo konjam siri!"** 😭💋❤️‍🩹

*Hug completed successfully!* 🫂💗`,
    color: "#d18b91",
    emoji: "🧸",
  },
  {
    id: 4,
    song: "/music/letters/letter-04.mp3",
    title: "Open When You Are in mood",
    subtitle: "Mood ah iruntha open panuda",
    message: `Hand majic + Lip lock deep ah + nude ah + night time + romantic song + finger insert = "Heaven" Awwwwwwww. ❤️

    Imagine paniko da!!
    Namaku kalayanam ayuduchu , oru nall night semma malai, veetula elarum ooruku poitanga, namma matum than irukom
    Ne namma room la paduthutu iruken , nan kitchen la work lam mudichutu namam room ku vara
    Climate semma chilunu iruku, and room kula vanthu door lock panitu, lights off panitu
    vanthu unmela ukaren ne en neck pudichu kita iluthu Full lip kisssss 
    ne kaii en b**bs mela veechu press pandra, n|pp|es persa therithuu
    nan shirt mari poturka so button onu onahh kalatiitu open pandra ulla Zero open panone SMILEY FACE
    eduthu vayula vechuuu sssss..ss...s.... nu un naku vechuuu lick panitu iruka
    inoruu kai la semma hard ah presss
    B**bs la adikuraa , Nan aaahhh aahh nu kathuren 
    Enna full mood akura,  aawww mood ah irukuda nu solraa continues ah n|pp|es ah pudichuu thechite iruka 
    aprom enna unmelanthu thukii kila padukavechutu elame kati thukipotudra kila mela onume ila ipo unakum enakum
    en kai ah mela thuki vitutu
    2 b**bs um pudichu un vayula vechuuu sappiiiiitu aaaaaaaahhhh🫦🥵🥵
    aprom en kalah virichutu unoda middle fingerah slowah vidra vitu vitu edukura nan aaahhh nu kathuren apdiye kai vechu vaya mudituu fastah fingering pandraa side la mela kilaa
    apo en kathukita vanthu fuckkkkkk u d priya nu solra🥵🥵 apdiyee bothaii eruthu
    aprom un thambi eduthu uuullllaaa vida fulaah gap eh ilama
    nan unna thalren kaii vechuuuu aahh valikuthuda nu
    kaii edri nu solraaa , valikuthu nu nan solren , kaiii neye ethuru d nu solraa apovum nan thalren
    aprom takunu kai eduthu mela lock panitu fuckk pandraa chachak chachak.. chachak  nu
    aaaaaaaawwwwwwwwwwww nu kathuren , un lips vechu en vaile kiss paniii vaya mooda vekura
    un kaiii en n||pp|es mela vechuuu iluthutu , enaku kusura mariii panitee irukaa
    kilaaa fastttahhh , n|pp|es un kaila , un lips en lips la enna heaven le vechurka da
    fullah fuck panitu velila edukama ullaaye vitutu , enn mela paduthudra fullaa
    apovum ulaye iruku unodathu 
    nan un kathukita luv u daa chellom nu soluven
    Ne b**bs mela paduthutu irupa luv u d thangoo nu soluvaa
    PRiyaa pasikuthu d nu soluvaaa 🥵🥵🥵🥵
    nanee en n|pp|es eduthu un vaila vechuduva ne chapite irupa  , pothuma da nu kepen
    ipo than start nu solituu inoruu round😜 🤪😜 🤪
    aprom ne tired anonee en b**bs mela paduthutu thungirva unaa konjiite irupen un lipss pudichu
    ne thukathula n|pp|es lanthu kaii eduthurva nane eduthu pudichuko da nu soluvaa aprom kaii kilaa poirum kolanthamari
    nadullaa ne elutha bedsheet eduthu unakum enakum serthu pothitu b**bs kula poittu ne paduthu thunguva da...
    
    Enoda favourite :
    1. finger+ b**bs press
    2.aprom un vayula N|pp|es vechu onu panuva kusuramari
    3.Ne kila nan mela fastahhhh f**ck`,
    color: "#b78383",
    emoji: "🕊️",
  },
  {
    id: 5,
    song: "/music/letters/letter-05.mp3",
    title: "Open When You Can't Sleep",
    subtitle: "Thukam varalaya da open pani paru",
    message: `Enna daaa Mr.Gokul sir! 😭🌙💗

Mani enna aagudhu nu theriyudha unakku? Thookam mattum unna thedi varala, aana nee mattum phone ah vechuttu thoonga maatra! 😂 Dei, un brain ku night shift kuduthurukkiya da? Pagalla work pannama, midnight la dhaan ella thoughts um meeting podudha? 😭🤣❤️

 Ippo enna yosichittu irunthalum konjam close pani vechudlam da... 🥹💌

Theriyuma da, night time la sila chinna vishayangal kooda perusa thonum. Pagalla kandukkaama vittadha kooda, bed la paduthadhum namma mind thirumba eduthuttu vandhurum. Oru thought mudiyuradhukulla innoru thought... adhukulla innoru doubt! 😭🧠

Aana en chellam, **ovvoru kelvikkum innikke answer kandupidikkanum nu avasiyam illa da.** Sila vishayangalukku konjam time venum. Adha naalaikku yosichukkalam. Ippo unakku konjam rest venum, avlodhaan. ❤️‍🩹

Oru funny question kekkava? 👀😂

Naan ippo un pakkathula irundha, nee thoongaama phone paathuttu irukkuradha paathu enna panniruppen theriyuma? Un phone ah pudungi thooki vechuttu, "Podhum da en dress kullaa po press panunu apdiye ippo kannai moodu!" nu solliruppen. 😭🤣💋

Apram nee thirumba phone edukka try pannina, naan unna paathu oru look viduven paaru... appove phone silent mode la poidum! 😂❤️‍🔥


Ippo oru chinna challenge! 😌✨

Phone ah konjam thalli vai, chess vilayadama, Un pillow ah comfortable ah set panniko. Unakku pudicha position la paduthuko en mela paduthukuramari. Medhuva moochu izhuthu, relax pannu... apram medhuva veliya vidu.

Idha sila thadavai repeat pannu. Thoughts vandha adha force panni stop panna try pannadha. Vandhuttu pogattum. Nee ovvonna follow panni yosikka vendiya avasiyam illa. 🌷

And one cute secret before you sleep! 🤭💌

**Indha ulagathula yaarukko nee oru ordinary person ah irukkalam... aana en life la nee vandha chinna chinna moments kooda enakku special memories dhaan.** ❤️
intha nerathula unkuda iruntha namma pesitu irunthurpom , aprom chachak chachak panitu irupom but ipo romba late night ayuduchu.
Nan kalila vanthudren namma pesalam , ipo thungu chello, thukam varalana kuda paduthutu kanumoodu , namma good happy memories nenaichikoda.


Unakku oru vishayam mattum sollanum...

**Innikki unnaala mudinjadha nee pannitta da. Meedhi irukkuradha naalaikku paathukkalam. Ippo un velai enna theriyuma? Kannai moodi, nimmadhiya thoonganum!** 😤😂❤️
Good night, en favourite troublemaker! 🌙💋

priya hot dreams da... kanavula kooda late ah thoongama irundha, anga vandhum unna thittiduven! 😭🤣💗✨`,
    color: "#8576b5",
    emoji: "🌙",
  },
  {
    id: 6,
    song: "/music/letters/letter-06.mp3",
    title: "Open When You Need to Smile",
    subtitle: "Unaku smile pananumna open panuda",
    message: `Deiiii en chellakuttyyyy 😭💗😂

Enna daaa, inga vaa konjam! Unkitta oru mukkiyamaana vishayam sollanum! 🤨💋

Nee romba serious ah edhavadhu explain pannumbodhu, unna disturb pannanum nu enakku thonum da! 😂❤️ Especially nee edhavadhu important matter pesittu irukkumbodhu, naan random ah "Dei, enna da ivlo azhaga irukka?", "Deii epdi da un voice cute ah iruku?" nu ketta un reaction epdi irukkum nu yosichale sirippu varudhu! , ne gandaayuduva da 😭🤣💗


And listen da, enakku unna kalaikkanum nu thonuchuna, reason eh thevai illa! Nee summa ukkandhirundha kooda, unna paathu sirichitte iruppen! 😂❤️

Nee: "Enna di sirikkura?"

Naan: "Onnum illa da!"

Nee: "Pinna yen sirikkura?"

Naan: "Un moonjiya paatha sirippu varudhu da loosu!" 😭🤣💗

Apram nee kovama  poviya... naan rendu nimishathula vandhu, "Aiyooo en chellam kovama irukkiyaaa?" nu konjuven un lipss pudichu! 🥹💋

Nee evlo neram dhaan kovama irukka mudiyum nu paathuralaam! 😂❤️‍🔥

Aana oru secret sollava da? 🤭💗

Unna sirikka vaikka enakku romba pudikkum. Ne kochukitu irukumbothu , unna sirika veka enaku romba pudikum da, because un kovam kuda azhaga cute ah irukum da.
Nee edhavadhu mokka joke solli neeye siricha kooda, naan unna paathu sirippen! Yenna nee sirikkumbodhu, un happiness ah paakuradhe enakku semma happy ah irukkum. 🥹❤️

**Un kooda irukkumbodhu naan konjam childish ah irundhaalum paravala nu thonum da. Unna kalaikkalam, kurumbu pannalam, chinna chinna vishayathukku sandai podalam... ellame enakku special dhaan!** 🫶🏻💗


Dei, unakku sirikka theriyala na paravala... naan video call panni en moonjiya kaatturen! Appo kandipa ne sirichurva da ! 😭💀😂❤️

**Aana en chellam, un smile ah paakka naan edhu venaalum pannuvaen da... yenna nee sirikkumbodhu, enakkum automatic ah happy aagidum.** 🥹💗

Ippo po, konjam sirichittu un velaiya paaru da, en handsome loosu! 😚💋

And remember...

**Unna love panradha vida unna torture panradhu konjam extra pudikkum... aana andha rendu velaiyum Nan  mattum dhaan unna pannanum !** 😭😂❤️‍🔥💋
Unna nan than alavepen , unna nanthan sirikavepen da, aprom kuti gokul vantha enna maranthuratha da , un pondati priya va thaniya vituratha da un payan vanthone.`,
    color: "#d2a15e",
    emoji: "☀️",
  },
  {
    id: 7,
    song: "/music/letters/letter-07.mp3",
    title: "Open When You're Sad",
    subtitle: "Ne sad ah irukumbothu open panu da",
    message: `Heyy en chella paiyaaa 🥺❤️🫂

Enna da aachu thangoo? 🥹 Yedhuku ipdi sad ah irukka? Vaazhkaila enna nadandhaalum, nee ellathayum thaniya face pannanum nu avasiyam illa da. 🫂❤️

Ippo nan vanthu  unna tight ah hug pannitu, un thala ya en shoulder la saachitu, "Ellam seri aagidum da, naan irukken" nu solluven da. 🥺❤️‍🩹

Ellar munnadiyum sirichittu, manasukulla evlo kashtam irundhaalum adha maraichittu irukkanum nu nenakkadha. Unakku kashtama irundha azhu, tired ah irundha rest edu, pesa thonala na silent ah iru. Adhellam okay dhaan da, en chellam. 🫶🏻💗

**Un sad days la kooda nee enakku romba special dhaan da.** ❤️‍🩹 Nee happy ah irukkumbodhu mattum illa, unakku edhuvume pudikkama irukkura andha worst days layum unna care pannanum nu dhaan enakku thonum. 🥹🫂

Life la sila vishayangal namma nenacha maari nadakkaadhu. Sila per hurt pannuvaanga, sila situations namma control la irukkaadhu. Aana adhellam nadakkuradhunaala un happiness ah mothama lose pannidadha da. Konjam time eduthuko. Oru naal la ellathayum sari pannanum nu pressure kuduthukkaadha. ❤️

Ippo oru deep breath edu da... 🫂 Konjam kannai moodu, naan un pakkathula irundha epdi irukkumo apdi imagine pannu. Un kaiya pudichittu, un thalaiya en b**bs mela padukavechutu un kai eduthu tshirt kula vechutu, unna tight ah hug panren,  unaa thati thati thunga vepen da. 🥹❤️

**"Enna aanaalum paravala da chellam, indha moment kashtama irukkuradhunaala un life eh kashtama irukka poradhilla. Konjam porumaiya iru, okay va?"** 🫶🏻❤️‍🩹

Unakku ellame sollanum nu avasiyam illa da. Aana un manasula irukkuradha en kitta sollanum nu thonuchuna, naan kekka ready ah iruppen. Un feelings ah explain panna words kooda kedaikkala na paravala... sometimes silence kooda purinjupen da kavaala padatha da. 🥺💗

And finally, en chellakutty... 🫂❤️

**Ippo unna yaarum hug pannala naalum, indha letter ah padikkumbodhu naan unna hug panra maariye nenachuko da. Konjam extra tight ah... konjam extra neram... because enakku theriyum, sila hugs ku words eh thevai illa.** 🥹🫂💋

I love you da, Nan unkuda than iruken okaay va . You are my champian da, po poitu face wash panitu vanthu black pillow mela katti pudichutu thungu da , phone pakatha da❤️.

Ippo konjam smile pannu paapom... even oru chinna smile! En sad baby ah ipdi paaka enakku pudikkala da , smile panuuu. 🥺❤️‍🩹🫶🏻`,
    color: "#c16a85",
    emoji: "🌷",
  },
  
  
  
  {
    id: 8,
    song: "/music/letters/letter-08.mp3",
    title: "Open When You Doubt Yourself",
    subtitle: "Ne down ah feel panumbothu open panu da",
    message: `Nan solratha konjam kelu da en chellame 🥹❤️🫂


First of all, unna neeye ivlo doubt pannadha da loosu 😭❤️ Ellathayum ore naal la perfect ah panna num nu avasiyam illa. Konjam late ah kathukitta enna? Thappu pannitta enna? Life la ellame first attempt la correct ah varanum nu rule eh illa da. 🫶🏻
Sila neram unakke un mela nambikkai illama pogalam, mathavanga unna vida better ah irukanga nu thonalam, nee edhuvum achieve pannala nu feel aagalam. Aana oru vishayam nyabagam vechuko da, nee ippo irukura stage un life oda ending illa.❤️‍🩹
Un worth ah oru result vechiyo, oru failure vechiyo, illa yaaro unna pathi enna nenachaanga nu vechiyo decide panna mudiyadhu da. Nee evlo try panra, evlo kashtapattu thirumba ezhundhu varra nu unakku mattum dhaan theriyum. Adhuve periya vishayam. 🥺❤️
Nee evlo dhooram vandhirukka nu oru nimisham yosichu paaru da. Nee silent ah face panna struggles, yaarukkum theriyama azhutha moments, tired ah irundhalum give up pannama try panna days... idhellame un strength dhaan. 🫂💗
Unnala mudiyadhu nu decide panradhukku munnadi, unakku innoru chance kudu. 🥹❤️‍🔥

Oru naal nee nenacha maari ellame nadakkum. Adhu varaikkum konjam patience ah iru. Un journey unnudaiyadhu, un speed unnudaiyadhu. Slow ah ponaalum paravala, aana unna neeye verukkaadha da. 🌷❤️

And hey, innoru mukkiyamaana vishayam... nee sila naal tired ah irukkalam, azhalam, bayapadalam, confidence illama irukkalam. Adhellam okay dhaan da. **Nee struggle panra naal layum nee strong dhaan. Nee fail aanaalum ne give up panama try panela un value increase than agum da. 🥹🫶🏻

Unna ellarum namburaangala illaya nu enakku theriyadhu... aana nee un mela nambikkai vaii da. ❤️

And one last thing, en loosu paiya... 🥺❤️

**Unna pathi nee doubt pannura andha nerathula, unna evlo azhaga paaka mudiyum nu unakku theriyala. Unakku un flaws mattum theriyudhu, aana enakku nee evlo try panra, evlo care panra, evlo nalla manushan ah irukka nu theriyum.** 🫂❤️‍🩹

So please da aluga vantha aluthuru but thirumba start panu. 

**Nee innum un best version ah reach pannavendiyathu iruku. Nee innum grow aagittu dhaan irukka. Adhukulla unna neeye give up pannidadha da.** 🥹❤️‍🔥

I believe in you, my favourite human. Always remember that. 🫂💋❤️
🌷`,
    color: "#c18b67",
    emoji: "🦋",
  },
  
  
  
  {
    id: 9,
    song: "/music/letters/letter-09.mp3",
    title: "Open when we are in Fight ",
    subtitle: "Namaku sandai apo open panu da",
    message: `Gokul, enna vitu pogatha da😭🫶🏻💗🎀

Ennala irukka mudiyathu da nee illama. 🥺❤️ Ipo naan unna hurt pannirundha romba sorry da. Enna mannichidu da please. Naan pesunathellam kovathula pesunathu than da, aana en manasula irukura kadhal konjam kooda poi illa da. Enna nadanthaalum, en manasula un mela irukura love mattum maarave maarathu da. 🫂💗

Unna enakku avlo pudikkum da Gokul. Unkooda pesurathu, unna kalaikkurathu, un kooda sanda podrathu, sanda potta apram marubadiyum unkoodave pesanum nu thonurathu, ellame enakku romba special da. ❤️🥹 Namma rendu perum kovapattu pesama irukura andha konja neram kooda enakku romba kashtama irukkum da. Unkitta pesanum, un voice kekkanum, nee enna chellama koopidanum nu manasu full ah unna thedum da. 🥺💗

Naan kovathula enna vena pesirukalam da, aana atha vechu en kadhalaye doubt pannidatha. En manasula irukura unmaiyana feelings ellame unakkuthan da. Enakku unna hurt pannanum nu oru naalum thonunathu illa. Sila neram en kovam en feelings ah vida perusa pesiduthu. Aana kovam kuranja apram, naan hurt pannitaena nu nenachu enakke romba kashtama irukku da. 😭🫂

Unna lose panniduvano nu nenacha enakku bayama irukku da. Namma rendu perum evlo memories create pannirukkom, evlo chinna chinna vishayangalukku sirichirukkom, evlo sanda potu marubadiyum pesirukkom. Ippadi irukkura namma relationship ah oru kovathula mudichidatha da please. Namma sandaiya vida namma kadhal perusu da. Oru bad day nala namma beautiful memories ellathayum maranthudatha. 🥹❤️‍🩹

Intha time mattum en kitta vanthu pesuda. 🥺🫶🏻 Enna ippadi thaniya vittutu pogatha da. Unkitta en feelings sollanum, nee enna purinjukanum, naan enga thappu pannirukken nu nee sonna atha kepen da. Namma rendu perum konjam calm ah pesalam, oruthar feelings ah innoruthar purinjukalam. Nee enna feel panra nu naanum kekkuren da. Unakku kashtama iruntha athayum sollu. Un feelings um enakku mukkiyam da. ❤️

Naan unna romba miss panren da Gokul. 😭💗 Unkitta pesama irukura ovvoru nimishamum, naan edhavadhu solli unnai innum hurt pannitena nu yosichite irukken. Unna sirikka vaikka vendiya naan, unakku kashtatha kuduthirundha manichidu da. Un face la smile paakanum nu aasai padra Priya than naan. Un kannula enna pathi kovam irukkuratha vida, marubadiyum antha paasam theriyanum nu aasai padren da. 🥺🎀

Nee enakku romba special da. En happy moments ah share pannanum naalum, kashtama iruntha azhanum naalum, first ah nyabagam varra person nee than da. Unkitta oru chinna vishayam sollama iruntha kooda en day complete aana maari irukkathu. Namma rendu perum pesura mokka conversations kooda enakku precious da. 
Un kooda irukkura chinna chinna moments ah kooda naan romba value panren. 💗🫂
Oru vati un pondati Priya va manichuko da. 🥺💍❤️ 
Naan thappu pannirundha, atha purinjukittu correct pannika enakku oru chance kudu da. Thappu en mela iruntha, naan atha accept pannikiren;
thirumba atha pannaama irukka try panren. Nee hurt aagirundha athayum naan purinjukanum da.

Un mela thappu irunthalum, un feelings enakku mukkiyam; naan unakku en feelings solluven, aana unna purinjukavum try panren. Namma rendu perum orutharukku oruthar better ah maaralam da. ❤️‍🩹
Namma relationship la sandai varalam, misunderstandings varalam, sila neram rendu perukkum kovam varalam. Aana andha nerathula oruthara oruthar hurt pannama, konjam time eduthutu, marubadiyum pesi solve panna kathukalam da.
 Namma love na sandaiye vara koodathu nu illa; sandai vanthalum oruthar feelings ah innoruthar purinjuka try panrathuthan mukkiyam. Naanum atha kathukuren da.
 
Unna love panra alavukku, Nan yarayum love panathu ilada. 🫶🏻💗 🥹❤️

Nee enna pannirunthalum, un mela enakku irukura paasam oru chinna misunderstanding nala poidathu da. Aana namma rendu perum happy ah irukkanumna, rendu perum orutharukku oruthar time kuduthu, feelings ah respect panni, honest ah pesanum.
Naan un kooda atha panna ready ah irukken da. Un kaiya pidichukittu, ellame seri aagum nu nambikkaiyoda un pakkathula irukkanum nu aasai. 🫂💞

Please da Gokul, namma sandaikku namma love ah thoki kuduthudatha. En kovatha vida nee enakku mukkiyam. Namma ego va vida namma bond mukkiyam. Naan un pondati Priya nu chellama sollikura antha urimaiyum, unkooda future ah imagine panra antha aasaiyum enakku romba precious da. 💍🥹❤️
Enna mannichu, unakku ready ah irukkumbodhu en kitta pesuda. Unakku konjam time venumna athayum naan respect panren.
 Aana namma rendu perum calm ah pesi, enna hurt aachu, eppadi better ah irukalam nu purinjukalam da. Namma rendu perum intha relationship ku mukkiyam; un feelings um en feelings um rendu perum mukkiyam. 🫶🏻💗

I love you so much da Gokul. En chella payala, en best friend ah irukkura person ah, enna sirikka vaikura loosu ah, enakku romba special ah irukkura unna naan romba love panren da. 😭❤️ 
Oru vati en Priya heart ah purinjuko da. 🥺💗 Naan perfect illa, aana unna love panrathu unmai. En thappugalai correct pannavum, unna innum nalla purinjukavum naan ready ah irukken.
 Nee enna mannichu, namma rendu perum marubadiyum pesi sirikkura antha naal seekiram varanum nu aasai padren da.

En chella Gokul, sandai vanthalum namma kadhal ah maranthudatha. Kovam koranja apram, namma rendu perum thirumbi oruthar kaiya oruthar pidichukalam. Unakku enna sollanum thonutho, en kitta sollu da. Naan kekka ready ah irukken. ❤️‍🩹🫂
Love you always da, en chella Gokul. Un pondati Priya oda heart la unakku eppovume oru special place irukku. 💗🎀🫶🏻😭❤️

Pesama irukatha da enkitaa🥺💗
    
`,
    color: "#bd7195",
    emoji: "🎂",
  },
];

function LettersPage() {
  const [activeLetter, setActiveLetter] = useState<Letter | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioMessage, setAudioMessage] = useState("");

  function playLetterSong(letter: Letter) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = letter.song;
    audio.volume = volume;
    audio.muted = isMuted;
    audio.currentTime = 0;
    setAudioMessage("");
    audio.load();
    audio.play()
      .then(() => {
        setIsPlaying(true);
        setAudioMessage("");
      })
      .catch(() => {
        setIsPlaying(false);
        setAudioMessage("Could not play this song. Check the MP3 file path and try the music button again.");
      });
  }

  function openLetter(letter: Letter) {
    setActiveLetter(letter);
    playLetterSong(letter);
  }

  function closeLetter() {
    setActiveLetter(null);
    if (audioRef.current) audioRef.current.pause();
    setIsPlaying(false);
  }

  function toggleMute() {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) audioRef.current.muted = nextMuted;
  }

  useEffect(() => {
    if (!activeLetter) return;

    setIsOpening(false);
    setIsOpened(false);

    const openingTimer = window.setTimeout(() => {
      setIsOpening(true);
    }, 400);

    const letterTimer = window.setTimeout(() => {
      setIsOpened(true);
    }, 1450);

    return () => {
      window.clearTimeout(openingTimer);
      window.clearTimeout(letterTimer);
    };
  }, [activeLetter]);

  useEffect(() => {
    if (!activeLetter) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLetter();
      }

      if (event.key === "ArrowRight") {
        changeLetter(1);
      }

      if (event.key === "ArrowLeft") {
        changeLetter(-1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeLetter]);

  function changeLetter(direction: number) {
    if (!activeLetter || letters.length === 0) return;

    const currentIndex = letters.findIndex(
      (letter) => letter.id === activeLetter.id,
    );

    if (currentIndex === -1) return;

    const nextIndex =
      (currentIndex + direction + letters.length) % letters.length;

    const nextLetter = letters[nextIndex];

    if (nextLetter !== undefined) {
      setActiveLetter(nextLetter);
      playLetterSong(nextLetter);
    }
  }

  return (
    <main className="little-world-letters">
      <style>{`
        .little-world-letters {
          min-height: 100vh;
          padding: 64px 22px 80px;
          color: #fff0ed;
          background:
            radial-gradient(ellipse at 50% 0%, #56283e 0%, transparent 55%),
            linear-gradient(155deg, #1b101a, #301523 55%, #1b101a);
          font-family: Georgia, 'Times New Roman', serif;
        }

        .letters-container {
          max-width: 1050px;
          margin: 0 auto;
        }

        .letters-eyebrow {
          color: #e6b5c4;
          text-align: center;
          font-family: sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .letters-heading {
          margin: 18px 0 12px;
          text-align: center;
          font-size: clamp(38px, 7vw, 66px);
          font-weight: 400;
          letter-spacing: -1.5px;
        }

        .letters-description {
          max-width: 470px;
          margin: 0 auto;
          color: #d9bac7;
          text-align: center;
          font-size: 15px;
          line-height: 1.9;
        }

        .letters-divider {
          width: 65px;
          height: 1px;
          margin: 30px auto 42px;
          background: #c98ca6;
        }

        .letters-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .letter-card {
          min-width: 0;
          padding: 24px 13px 22px;
          border: 1px solid rgba(238, 190, 208, .16);
          border-radius: 16px;
          color: #fff0ed;
          background: rgba(255, 255, 255, .035);
          text-align: center;
          cursor: pointer;
          transition: transform .3s, background .3s, border-color .3s;
        }

        .letter-card:hover {
          transform: translateY(-6px);
          border-color: rgba(238, 190, 208, .55);
          background: rgba(255, 255, 255, .075);
        }

        .letter-card:focus-visible,
        .cinema-button:focus-visible,
        .cinema-close:focus-visible {
          outline: 2px solid #f4c3d5;
          outline-offset: 4px;
        }

        .letter-number {
          display: block;
          margin-bottom: 20px;
          color: #d6a5b6;
          font: 10px sans-serif;
          letter-spacing: 2px;
        }

        .letter-envelope {
          display: grid;
          width: 76px;
          height: 57px;
          margin: 0 auto 21px;
          place-items: center;
          border: 1px solid rgba(255, 220, 230, .4);
          border-radius: 5px;
          box-shadow: 0 5px 24px rgba(201, 112, 153, .14);
          font-size: 25px;
        }

        .letter-card-title {
          display: block;
          min-height: 43px;
          font-size: 16px;
          line-height: 1.4;
        }

        .letter-card-subtitle {
          display: block;
          margin-top: 8px;
          color: #c6a9b6;
          font: 11px/1.7 sans-serif;
        }

        .letters-footer {
          margin-top: 43px;
          color: #c6a9b6;
          text-align: center;
          font-size: 13px;
          font-style: italic;
        }

        .cinema-overlay {
          position: fixed;
          z-index: 9999;
          inset: 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          overflow-y: auto;
          padding: 35px 18px;
          background: rgba(9, 5, 12, .95);
          backdrop-filter: blur(12px);
          animation: cinemaFadeIn .6s ease both;
        }

        .cinema-close {
          position: fixed;
          z-index: 10;
          top: 18px;
          right: 20px;
          width: 43px;
          height: 43px;
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 50%;
          color: #fff0ed;
          background: rgba(255,255,255,.06);
          font-size: 23px;
          cursor: pointer;
        }

        .cinema-scene {
          width: min(100%, 610px);
          margin: auto;
          text-align: center;
        }

        .cinema-caption {
          color: #dfb1c1;
          font: 10px sans-serif;
          letter-spacing: 4px;
          text-transform: uppercase;
          animation: cinemaFadeIn 1s ease both;
        }

        .cinema-envelope-stage {
          position: relative;
          width: 210px;
          height: 170px;
          margin: 35px auto 28px;
          perspective: 900px;
          filter: drop-shadow(0 0 30px rgba(221, 124, 167, .23));
        }

        .cinema-envelope-back {
          position: absolute;
          inset: 26px 0 0;
          border-radius: 5px;
          background: #a65e7b;
        }

        .cinema-envelope-paper {
          position: absolute;
          z-index: 1;
          right: 13px;
          bottom: 13px;
          left: 13px;
          height: 116px;
          padding: 15px 7px;
          border-radius: 3px;
          background: #fff1df;
          color: #9b546b;
          font-size: 30px;
          transition: transform 1s cubic-bezier(.2,.8,.2,1);
        }

        .cinema-envelope-flap {
          position: absolute;
          z-index: 3;
          top: 26px;
          left: 0;
          width: 0;
          height: 0;
          border-right: 105px solid transparent;
          border-left: 105px solid transparent;
          border-top: 76px solid #e1a0b6;
          transform-origin: top center;
          transition: transform .9s ease;
        }

        .cinema-envelope-front {
          position: absolute;
          z-index: 2;
          inset: 26px 0 0;
          background: linear-gradient(145deg, #c9819b, #a65e7b);
          clip-path: polygon(0 0, 50% 56%, 100% 0, 100% 100%, 0 100%);
        }

        .cinema-envelope-seal {
          position: absolute;
          z-index: 4;
          top: 76px;
          left: 50%;
          display: grid;
          width: 36px;
          height: 36px;
          place-items: center;
          border: 1px solid #f9d4df;
          border-radius: 50%;
          background: #8e4564;
          transform: translateX(-50%);
          transition: opacity .3s;
        }

        .cinema-envelope-stage.is-opening .cinema-envelope-flap {
          transform: rotateX(180deg);
        }

        .cinema-envelope-stage.is-opening .cinema-envelope-paper {
          transform: translateY(-85px);
        }

        .cinema-envelope-stage.is-opening .cinema-envelope-seal {
          opacity: 0;
        }

        .cinema-letter {
          width: min(100%, 520px);
          margin: -5px auto 0;
          padding: 36px clamp(22px, 6vw, 48px);
          border: 1px solid #e9d3bc;
          border-radius: 3px;
          color: #543b3b;
          background:
            radial-gradient(ellipse at top left, #fffdf4, transparent 65%),
            #f6ead8;
          box-shadow: 0 15px 80px rgba(0,0,0,.35);
          text-align: left;
          animation: letterReveal 1.1s cubic-bezier(.2,.7,.2,1) both;
        }

        .cinema-letter-heading {
          margin: 0 0 9px;
          color: #9b526d;
          text-align: center;
          font-size: clamp(24px, 5vw, 33px);
          font-weight: 400;
          line-height: 1.3;
        }

        .cinema-letter-subtitle {
          margin: 0 0 27px;
          color: #9b7777;
          text-align: center;
          font-size: 12px;
          font-style: italic;
          line-height: 1.6;
        }

        .cinema-letter-message {
          white-space: pre-line;
          font-size: 15px;
          line-height: 1.95;
        }

        .cinema-signature {
          margin-top: 25px;
          color: #9b526d;
          text-align: right;
          font-size: 18px;
          font-style: italic;
        }

        .cinema-controls {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .cinema-button {
          min-height: 44px;
          padding: 11px 20px;
          border: 1px solid rgba(242, 194, 211, .45);
          border-radius: 999px;
          color: #ffeaf1;
          background: rgba(255,255,255,.07);
          font: 12px sans-serif;
          cursor: pointer;
          transition: background .2s, transform .2s;
        }

        .cinema-button:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,.15);
        }

        .cinema-button-primary {
          border-color: #c9829d;
          background: #a65e7b;
        }

        .floating-heart {
          position: fixed;
          z-index: 10000;
          bottom: -35px;
          color: #e8a4c1;
          pointer-events: none;
          animation: heartFloat linear forwards;
        }



        .letter-sound-panel {
          position: fixed;
          z-index: 10002;
          right: 20px;
          bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          max-width: calc(100vw - 32px);
          padding: 10px 13px;
          border: 1px solid rgba(242, 194, 211, .38);
          border-radius: 999px;
          color: #ffeaf1;
          background: rgba(39, 18, 31, .94);
          box-shadow: 0 10px 35px rgba(0,0,0,.3);
          backdrop-filter: blur(12px);
          font: 12px sans-serif;
        }

        .letter-sound-panel button {
          min-width: 38px;
          min-height: 38px;
          border: 1px solid rgba(242, 194, 211, .4);
          border-radius: 50%;
          color: #ffeaf1;
          background: rgba(255,255,255,.08);
          cursor: pointer;
        }

        .letter-volume {
          width: 92px;
          accent-color: #d88eac;
          cursor: pointer;
        }

        .letter-sound-status {
          max-width: 160px;
          color: #e6c4d0;
          font-size: 10px;
          line-height: 1.3;
        }

        @media (max-width: 520px) {
          .letter-sound-panel {
            right: 10px;
            bottom: 10px;
            gap: 7px;
            padding: 7px 9px;
          }
          .letter-volume { width: 68px; }
          .letter-sound-status { display: none; }
        }

        @keyframes cinemaFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes letterReveal {
          from {
            opacity: 0;
            transform: translateY(24px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes heartFloat {
          0% {
            opacity: 0;
            transform: translateY(0) rotate(0deg);
          }
          15% { opacity: .7; }
          85% { opacity: .6; }
          100% {
            opacity: 0;
            transform: translateY(-115vh) rotate(35deg);
          }
        }

        @media (max-width: 760px) {
          .letters-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .letter-card {
            padding: 19px 10px;
          }

          .letters-heading {
            letter-spacing: -1px;
          }
        }

        @media (max-width: 380px) {
          .letters-grid {
            gap: 9px;
          }

          .letter-card-title {
            font-size: 14px;
          }

          .letter-card-subtitle {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .little-world-letters *,
          .cinema-overlay,
          .cinema-overlay * {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* Keep one audio element mounted so the ref exists before a letter is opened. */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          if (activeLetter) {
            setAudioMessage(`Song file not found: ${activeLetter.song}`);
          }
        }}
      />

      <div className="letters-container">
        <p className="letters-eyebrow">
          A little corner of our world
        </p>

        <h1 className="letters-heading">Open When…</h1>

        <p className="letters-description">
          unaku yeppolam open pananumnu thonutho apo apo open panu bab.
        </p>

        <div className="letters-divider" />

        <section
          className="letters-grid"
          aria-label="Choose a letter"
        >
          {letters.map((letter) => (
            <button
              key={letter.id}
              className="letter-card"
              type="button"
              onClick={() => openLetter(letter)}
              aria-label={`Open letter ${letter.id}: ${letter.title}`}
            >
              <span className="letter-number">
                LETTER {String(letter.id).padStart(2, "0")}
              </span>

              <span
                className="letter-envelope"
                style={{
                  background: `linear-gradient(145deg, ${letter.color}, #82405f)`,
                }}
                aria-hidden="true"
              >
                💌
              </span>

              <span className="letter-card-title">
                {letter.title}
              </span>

              <span className="letter-card-subtitle">
                {letter.subtitle}
              </span>
            </button>
          ))}
        </section>

        <p className="letters-footer">
          Made of little moments, sealed with love. ♡
        </p>
      </div>

      {activeLetter && (
        <div
          className="cinema-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activeLetter.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setActiveLetter(null);
            }
          }}
        >
          <button
            className="cinema-close"
            type="button"
            onClick={closeLetter}
            aria-label="Close letter"
          >
            ×
          </button>

          <div className="cinema-scene">
            <p className="cinema-caption">
              A little letter, just for you
            </p>

            <div
              className={`cinema-envelope-stage ${
                isOpening ? "is-opening" : ""
              }`}
              style={{
                filter: `drop-shadow(0 0 35px ${activeLetter.color}66)`,
              }}
              aria-hidden="true"
            >
              <div className="cinema-envelope-back" />

              <div className="cinema-envelope-paper">
                {activeLetter.emoji}
              </div>

              <div className="cinema-envelope-flap" />

              <div className="cinema-envelope-front" />

              <div className="cinema-envelope-seal">
                ♥
              </div>
            </div>

            {isOpened && (
              <>
                <article
                  className="cinema-letter"
                  key={activeLetter.id}
                >
                  <h2 className="cinema-letter-heading">
                    {activeLetter.title}
                  </h2>

                  <p className="cinema-letter-subtitle">
                    {activeLetter.subtitle}
                  </p>

                  <div className="cinema-letter-message">
                    {activeLetter.message}
                  </div>

                  <p className="cinema-signature">
                    With love, always. ♡
                  </p>
                </article>

                {Array.from({ length: 12 }, (_, index) => (
                  <span
                    key={`${activeLetter.id}-${index}`}
                    className="floating-heart"
                    style={{
                      left: `${5 + ((index * 17) % 90)}%`,
                      animationDelay: `${(index % 6) * 0.45}s`,
                      animationDuration: `${5 + (index % 4)}s`,
                      fontSize: `${13 + (index % 3) * 6}px`,
                    }}
                    aria-hidden="true"
                  >
                    {index % 3 === 0 ? "♡" : "♥"}
                  </span>
                ))}

                <div className="cinema-controls">
                  <button
                    className="cinema-button"
                    type="button"
                    onClick={() => changeLetter(-1)}
                  >
                    ← Previous letter
                  </button>

                  <button
                    className="cinema-button cinema-button-primary"
                    type="button"
                    onClick={() => changeLetter(1)}
                  >
                    Next letter →
                  </button>
                </div>

                <div className="cinema-controls">
                  <button
                    className="cinema-button"
                    type="button"
                    onClick={closeLetter}
                  >
                    Back to our letters
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="letter-sound-panel" aria-label="Letter music controls">
            <button
              type="button"
              onClick={() => {
                if (audioRef.current?.paused && activeLetter) {
                  audioRef.current.play()
                    .then(() => { setIsPlaying(true); setAudioMessage(""); })
                    .catch(() => { setIsPlaying(false); setAudioMessage(`Song file not found or blocked: ${activeLetter.song}`); });
                } else {
                  toggleMute();
                }
              }}
              aria-label={isMuted ? "Unmute music" : "Mute music"}
              title={isPlaying ? (isMuted ? "Unmute music" : "Mute music") : "Try playing this letter's song"}
            >
              {isMuted ? "🔇" : isPlaying ? "🔊" : "▶️"}
            </button>
            <label htmlFor="letter-volume">Vol</label>
            <input
              id="letter-volume"
              className="letter-volume"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              aria-label="Music volume"
              onChange={(event) => {
                const nextVolume = Number(event.target.value);
                setVolume(nextVolume);
                if (audioRef.current) audioRef.current.volume = nextVolume;
                if (nextVolume === 0 && !isMuted) {
                  setIsMuted(true);
                  if (audioRef.current) audioRef.current.muted = true;
                } else if (nextVolume > 0 && isMuted) {
                  setIsMuted(false);
                  if (audioRef.current) audioRef.current.muted = false;
                }
              }}
            />
            <span className="letter-sound-status" role="status">
              {audioMessage || (isPlaying ? "Letter music playing" : "Letter music paused")}
            </span>
          </div>
        </div>
      )}
    </main>
  );
}
