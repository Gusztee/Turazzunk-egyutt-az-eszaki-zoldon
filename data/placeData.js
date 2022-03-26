function getData() {
    return data;
}

function getLocationData(index) {
    return data[index];
}

function getLocationIndex(location) {
    for(var i = 0; i < data.length; i++) {
        if(data[i].title == location) return i;
    }
    return 0;
}

const data = [
    {
        "title": "",
        "lat": "",
        "lng": "",
        "image":
        {
            "0": "image/test-image1.jpg",
        },
        "description": "",
    },
    {
        "title": "Zabari Magyarok Nagyasszonya templom",
        "lat": 48.1375605,    
        "lng": 20.0449982,
        "image":
        {
            "0": "image/zabari_katolikus_templom.jpg",
            "1": "image/zabari_templom.jpeg",
        },
        "description": "<p class=\"b u\">1. állomás: Zabar:</p><p>A XIV. századtól létezik ez a település a Gömör-Torna útvonalon. Úgy is ismerjük, mint az ország leghidegebb települését. A zabar név: szláv eredetű, fenyves mögötti helyet jelent. Borsod, Heves, Nógrád, Gömör vármegyék határtelepülése volt évszázadok óta.</p><p><span class=\"i\">Temploma XIII. századi, eredetileg román stlíusú</span>, melyet többször átépítettek. Ebből a kis faluból indulunk túránkra, amely az államhatáron fog vezetni. A zöld jelzésen és a határkövek mellett.</p>",
    },    
    {
        "title": "Domaháza római katolikus temploma",
        "lat": 48.183474,
        "lng": 20.104989,
        "image":
        {
            "0": "image/domahaza_templom.jpg",
            "1": "image/kepek_templomban.jpg",
            "2": "image/kep_templomban.jpg",
        },
        "description": "<p class=\"b u\">Domaháza</p><p> A Gömöri Erdőháton haladunk tovább Domaháza irányába, a határsávból látni a Mátrát, a Bükköt, a Szlovák Érchegységet s tiszta időben ellátni a Magas Tátráig. Kellemes sétával érkezünk Domaháza határába: Domaháza település a XIII. század óta lakott.</p><p> Nevét Domahidi János földbirtokosról kapta.</p><p> Római katolikus temploma arról nevezetes, hogy festményeit Feszty Masa  Feszty Árpád lánya készítette és a helyi lakosokról mintázta az alakokat.</p>",
    },
    {   
        "title": "Kút Domaháza határán",
        "lat": 48.194789,
        "lng": 20.115547,
        "image":
        { 
            "0": "image/kut_domahaza.jpg",
        },
        "description": "Szomjunkat olthatjuk a község határában  egy tiszta és nagyon finom vizű kútból. A kút vizét messze földön ismerik, sokat szerint gyógyító erővel bír.",
    }, 
    { 
        "title": "Kissikátor",
        "lat": 48.188890, 
        "lng": 20.128988,
        "image":
        {
            "0": "image/kissikator.jpg",
            "1": "image/kissikator_1.jpg",
        },
        "description": "<p> Utunkat a Kopec csúcsnál folytatjuk, 342m,  IX. 29. határkő...majd a Kis berek bérc szekérúton haladunk tovább Kissikátor irányába. Kissikátort a XIV. században alapították, Örsúr nemzetség birtoka volt. A falu jellegzetes  hadas település, még őrzi népi hagyományait, melyről tájháza is tanúskodik.</p>",
    },
    {
        "title": "Kissikátori templom",
        "lat": 48.202014,
        "lng": 20.127137,
        "image":
        {
            "0": "image/kissikator_kortemplom.jpg",
        },
        "description": "<p>A kissikátori templom Árpád- kori alapokra épült körtemplom, amely viszonylag ritka a Kárpát-medencében.  Szép a templom fakazettás mennyezete.</p>",
    },
    {   
        "title": "Barátfői kilátó",
        "lat": 48.231330,
        "lng": 20.169876,
        "image":
        {
            "0": "image/geodeziai_meropont.jpg",
            "1": "image/kilato.jpg",
        },
        "description": "<p>A rövid kitérő után utunkat  a Kopec-Nagy -Golotka-Barát-fő  útvonalon a régi szekérúton haladva folytathatjuk párhuzamosan az államhatárral.A zöld háromszög jelzés visz el bennünket a Barátfői kilátóig.</p><p>A kilátó igazából egy geodéziai torony, melyet 1984-ben építettek, <b>csak bátraknak ajánljuk a felmenetelt, a vaslétrákon...</b></p><p>Ha felértünk és amennyiben szét tudunk nézni a közben megnőtt fáktól, akkor gyönyörű körpanoráma tárul elénk. A Gömör- Erdőhát  dimbes-dombos vidékében hosszan el tudunk gyönyörködni, akkor különösen, ha távcsövet is viszünk magunkkal. <b>A kilátóból a lemenetelt csak óvatosan....</b></p>",
    },   
    {   
        "title": "Birinyivár",
        "lat": 48.253468,
        "lng": 20.147533,
        "image":
        {
            "0": "image/kilatas_a_birinyi_varbol.jpg",
            "1": "image/megegy_kilatas_a_birinyi_varbol.jpg",
            "2": "image/vedett_noveny_a_birinyi_varnal_gerbics.jpg",
            "3": "image/gerbics.jpg",
        },
        "description": "<p class=\"b\">Barátfő és Hangony között két egykori várat is megtekinthetünk.</p><p>A Birinyi vár pont a határon helyezkedik el, szépen láthatóak a sáncai, egykori területén védett virágok nőnek.</p><p>A helyiek szerint 1297-ben a várat Hangonyi Máté elfoglalta s ott rablólovag módjára élt. Dobosy László az 1970es években még habarcs és mésznyomokat talált, ma már csak a sáncok nyoma látható.</p><p>A vártól elég meredek lejtőn kell továbbhaladni a Pogányvár irányába, amely szintén a határsávban található. Sajnos mivel földvárról van szó, így már semmi nem látszik az eredeti erődítményből, de a környék földvárai bizonyítják, hogy már az Árpád kortól lakott területeken járunk.</p> ",
    },
    {   "title": "Darnyi kereszt",
        "lat": 48.253445, 
        "lng": 20.133969,
        "image":
        {
            "0": "image/darnyi_kereszt_hangony_hataraban.jpg",
            "1": "image/darnyi_kereszt_hangony_hatarabann.jpg",
        },
        "description": "<p>Az 'Északi Zöld sáv vándorúton a Biríny nyergében áll ez a kőkereszt a Trianon elötti Magyarország egyik nagy forgalmú hegyi átkelőhelyére utalva. Itt lehetett a legrövidebb úton átjutni Hangonyból a Rima-völgybe. Darnyi keresztnek is illették egykoron…</p>",
    },   
    {   "title": "Pogányvári homokkő sziklák",
        "lat": 48.251036,
        "lng": 20.170906,
        "image":
        {
            "0": "image/poganyvar_sziklai.jpg",
            "1": "image/kovaki_homokko_sziklak.jpg",
            "2": "image/kovaki_homokko_sziklakk.jpg",
            "3": "image/torpe_irisz_a_homokkoveken.jpg",
            "4": "image/arvalanyhaj_a_homokko_sziklan.jpg",
        },
        "description": "<p>A Pogányvártól tovább haladva Hangony felé elérjük a IX. 40-es határkönél az ún. pogányvári homokkő sziklákat, melyek fenséges látványt nyújtanak.</p><p class=\"i\">A hegy nevét először 1347-ben említik, valószínűleg pogány áldozó hely lehetett, a tényleges várból ma már semmi nem látszik.</p><p>Itt is többféle virágot csodálhatunk meg, különösen tavasszal, törpe Íiszek lila és sárga színben , valamint árvalányhaj is gyönyörködtet bennünket, amennyiben nyitott szemmel járunk és felfedezzük ezeket a csodákat.</p> <p class=\"u\">Meg kell jegyeznünk hogy sokan ezeket a sziklákat azonosítják a Pogány várral, de ez tévedés.</p>",   
    },
    {   
        "title": "Hármas kereszt emlékmű",
        "lat": 48.209428,
        "lng": 20.197162,
        "image":
        {
            "0": "image/harmas_kereszt_hangonynal.jpg",
            "1": "image/hangonyi_herics_mezo_tavasszal.jpg",
            "2": "image/hangonyi_to.jpg",
            "3": "image/pipacsmezo_hangony_hataran.jpg",
        }, 
        "description": "<p>Felső Hangonyon érdemes megtekinteni a háborús emlékművet, majd a szemben lévő domboldalon igencsak emelkedős kitérő után az úm. Hármas kereszt emlékművet, amelyet egy hangonyi apa állíttatott a fiainak.</p><p> Sajnos  itt is nagyon benőtte a növényzet a keresztek körüli részt, s ez elvesz  a kilátásból, azonban, amikor a keresztekkel szemben még boldog pipacsmező virított igen szép látványban lehetett részünk erről a magaslatról</p>",
    },    
    { 
        "title": "A Pálos kolostor romjai",
        "lat": 48.232506, 
        "lng": 20.175744,
        "image":
        {
            "0": "image/a_palos_kolostorhoz_tartozo_tavacska.jpg",
            "1": "image/a_palos_kolostornal_levo_emlekmu.jpg",
        },
        "description": "<p>Ha a homokkő sziklák szépsége még nem volt nekünk elég, akkor egy kis jobbra tett kitérővel, sétáljunk le a Barát völgybe, ahol megtekinthetjük az egykori Pálos kolostor hűlt helyét....</p><p>Sajnos a kolostort a török korban elpusztították, a helyiek pedig elhordták a köveit az építkezésekhez, ami maradt belőle azt a Hangonyi templomban Őrzik.</p><p> Itt tekinthetjük meg az egykori keresztelő medencét és néhány régészeti leletet is. Jóval feljebb egy emlék kereszt örzi az egykori pálos kolostor emlékét.  A gyalogúton haladva beérünk a faluba, Felső Hangonyba. Itt természetesen nézzük meg a templomot, ahol a korábban említett emlékek mellett a lengyel Madonnát is őrzik. A faluban kaptak menedéket, azok a lengyel katonák, akiknek a 2. világháborúban menekülniük kellett, amikor a németek lerohanták Lengyelországot.</p>",
    },
    {
        "title": "Árpád-kori templom - Szentsimon",
        "lat": 48.232743, 
        "lng": 20.226688,
        "image":
        {
            "0": "image/szentsimon_kulso.jpg",
            "1": "image/szentsimon_belso.jpg",
        },
        "description": "<p>Visszasétálva az Ózd felé vezető útra a lankás domboldalon tavasszal csodás héricsmezőben gyönyörködhetünk. A dombot könnyen megismerjük a rajta lévő telefon átjátszó toronyról.</p><p> Utunkat Ózd-Szentsimon részén fejezzük be.... itt egy Árpád-kori kicsi templom zárja utunkat.</p><p> A templom freskói 1423-ban készültek, és Júdás Tádé és Simon  apostolok tiszteletére lett felavatva. A famennyezete miatt különösen ismert a művészettörténészek körében.</p><p>Római katolikus temploma arról nevezetes, hogy festményeit Feszty Masa  Feszty Árpád lánya készítette és a helyi lakosokról mintázta az alakokat.</p>",
    },

];
