/* =========================================================
   PORTFOLIO DASHBOARD
   MULTILINGUAL VERSION
========================================================= */


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    /* =====================================================
       HUNGARIAN
    ===================================================== */

    hu: {

        htmlLang: "hu",

        logo: "Vissza az oldal tetejére",

        nav: {
            home: "Főoldal",
            projects: "Projektek",
            cv: "Önéletrajz",
            dashboard: "Dashboard"
        },

        hero: {
            eyebrow: "Weboldal",
            description: "Snowflake | RTOS szakember"
                                       
        },

        status: {
            online: "Online",
            offline: "Offline",
            invisible: "Láthatatlan"
        },

        buttons: {
            projects: "Projektek",
            cv: "Önéletrajz"
        },

        clock: {
            localTime: "HELYI IDŐ"
        },

        dashboard: {
            eyebrow: "DASHBOARD",
            title: "Aktuális információk"
        },

        accessibility: {
            title: "Akadálymentesítés",
            description:
                "Állítsd be az oldalt a számodra kényelmesebb megjelenítéshez.",

            large: "Nagyobb betűméret",
            largeDescription: "Könnyebben olvasható szöveg",

            xlarge: "Extra nagy betűméret",
            xlargeDescription: "Még nagyobb szöveg",

            contrast: "Magas kontraszt",
            contrastDescription: "Erősebb színek és határok",

            readable: "Olvasható betűtípus",
            readableDescription: "Egyszerűbb betűmegjelenítés",

            links: "Linkek kiemelése",
            linksDescription: "A hivatkozások aláhúzása",

            motion: "Animációk kikapcsolása",
            motionDescription: "Kevesebb mozgó elem",

            targets: "Nagyobb gombok",
            targetsDescription: "Könnyebb érintés és kattintás",

            keyboard: "Billentyűzet mód",
            keyboardDescription: "Jobban látható fókusz",

            reset: "Beállítások visszaállítása"
        },

        weather: {
            label: "IDŐJÁRÁS",
            wind: "💨 Szél",
            humidity: "💧 Páratartalom",
            refresh: "↻ Időjárás frissítése",
            loading: "Időjárási adatok betöltése...",
            unavailable: "Az időjárási adatok nem érhetők el.",
            location: "Helymeghatározás..."
        },

        quick: {
            label: "GYORS INFÓ",
            date: "Mai dátum",
            device: "Eszköz",
            birthday: "Születésnap",
            gender: "Nem",
            male: "Férfi",
            mobile: "Mobil",
            tablet: "Tablet",
            desktop: "Asztali",
            watch: "Okosóra"
        },

        contacts: {
            label: "ELÉRHETŐSÉGEK",
            email: "E-mail",
            phone: "Telefonszám",
            facebook: "Közösségi",
            web: "Weboldal",
            location: "Lakhely",
            locationValue: "Szolnok, Magyarország"
        },

        exchange: {
            label: "ÁRFOLYAMOK",
            title: "Devizák",
            loading: "Árfolyamok betöltése...",
            unavailable: "Az árfolyamok nem érhetők el.",
            updated: "Frissítve"
        },

        currency: {
            eur: "Euro",
            usd: "Amerikai dollár",
            gbp: "Angol font",
            chf: "Svájci frank"
        },
       spotify: {
            label: "ZENEI DASHBOARD",
            title: "Spotify Dashboard",
            nowPlaying: "MOST JÁTSZIK",
            recentlyPlayed: "LEGUTÓBBI ZENÉK",
            recentTitle: "Legutóbbi zenék",
            refresh: "↻ Frissítés",
            connect: "Csatlakozás Spotify-hoz",
            connected: "Spotify csatlakoztatva",
            open: "Megnyitás Spotify-on ↗",
            loading: "Spotify-adatok betöltése...",
            unavailable: "A Spotify-adatok nem érhetők el.",
            notPlaying: "Most nem szól zene",
            connectPrompt: "Csatlakozz a Spotify-fiókodhoz.",
            topTracks: "TOP ZENÉK",
            topArtists: "TOP ELŐADÓK",
            favoriteArtist: "Kedvenc előadó",
            noRecent: "Még nincs elérhető hallgatási előzmény.",
            noData: "Ehhez még nincs elérhető adat."
        },

        projects: {
            eyebrow: "MUNKÁIM",
            title: "Projektek"
        },

        project: {
            viewer: {
                label: "Projekt",
                title: "Teljes projekt megtekintése",
                description:
                    "A szakdolgozati projektem teljes dokumentációjának megtekintéséhez kattints az alábbi gombra.",
                button: "Projekt megtekintése"
            }
        },

        cv: {
            eyebrow: "RÓLAM",
            title: "Önéletrajz",

            viewer: {
                label: "Önéletrajz",
                title: "Teljes önéletrajz megtekintése",
                description:
                    "A teljes önéletrajzom megtekintéséhez kattints az alábbi gombra.",
                button: "Teljes önéletrajz megtekintése"
            },

            viewTitle: "Teljes önéletrajz megtekintése",

            viewDescription:
                "A teljes önéletrajz megtekintéséhez kattints az alábbi gombra.",

            viewButton: "Teljes önéletrajz megtekintése →"
        },

        footer: {
            rights: "Minden jog fenntartva."
        },

        weatherCodes: {
            0: "Derült égbolt",
            1: "Túlnyomóan derült",
            2: "Részben felhős",
            3: "Borult",
            45: "Köd",
            48: "Zúzmarás köd",
            51: "Gyenge szitálás",
            53: "Szitálás",
            55: "Erős szitálás",
            61: "Gyenge eső",
            63: "Eső",
            65: "Erős eső",
            71: "Gyenge havazás",
            73: "Havazás",
            75: "Erős havazás",
            80: "Zápor",
            81: "Záporok",
            82: "Erős zápor",
            95: "Zivatar",
            96: "Zivatar jégesővel",
            99: "Erős zivatar"
        }
    },


    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {

        htmlLang: "en",

        logo: "Back to top",

        nav: {
            home: "Home",
            projects: "Projects",
            cv: "CV",
            dashboard: "Dashboard"
        },

        hero: {
            eyebrow: "Website",
            description: "Snowflake | RTOS specialist"
        },

        status: {
            online: "Online",
            offline: "Offline",
            invisible: "Invisible"
        },

        buttons: {
            projects: "Projects",
            cv: "CV"
        },

        clock: {
            localTime: "LOCAL TIME"
        },

        dashboard: {
            eyebrow: "DASHBOARD",
            title: "Current information"
        },

        accessibility: {
            title: "Accessibility",
            description:
                "Customize the website for a more comfortable experience.",

            large: "Larger text",
            largeDescription: "Easier-to-read text",

            xlarge: "Extra large text",
            xlargeDescription: "Even larger text",

            contrast: "High contrast",
            contrastDescription: "Stronger colors and borders",

            readable: "Readable font",
            readableDescription: "Simpler font appearance",

            links: "Highlight links",
            linksDescription: "Underline hyperlinks",

            motion: "Reduce animations",
            motionDescription: "Less moving content",

            targets: "Larger buttons",
            targetsDescription: "Easier tapping and clicking",

            keyboard: "Keyboard mode",
            keyboardDescription: "More visible focus",

            reset: "Reset settings"
        },

        weather: {
            label: "WEATHER",
            wind: "💨 Wind",
            humidity: "💧 Humidity",
            refresh: "↻ Refresh weather",
            loading: "Loading weather data...",
            unavailable: "Weather data is unavailable.",
            location: "Finding location..."
        },

        quick: {
            label: "QUICK INFO",
            date: "Today's date",
            device: "Device",
            birthday: "Birthday",
            gender: "Gender",
            male: "Male",
            mobile: "Mobile",
            tablet: "Tablet",
            desktop: "Desktop",
            watch: "Smartwatch"
        },

        contacts: {
            label: "CONTACT",
            email: "E-mail",
            phone: "Phone",
            facebook: "Community",
            web: "Website",
            location: "Location",
            locationValue: "Szolnok, Hungary"
        },

        exchange: {
            label: "EXCHANGE RATES",
            title: "Currencies",
            loading: "Loading exchange rates...",
            unavailable: "Exchange rates are unavailable.",
            updated: "Updated"
        },

        currency: {
            eur: "Euro",
            usd: "US Dollar",
            gbp: "British Pound",
            chf: "Swiss Franc"
        },

       spotify: {
            label: "MUSIC DASHBOARD",
            title: "Spotify Dashboard",
            nowPlaying: "NOW PLAYING",
            recentlyPlayed: "RECENTLY PLAYED",
            recentTitle: "Recently played",
            refresh: "↻ Refresh",
            connect: "Connect Spotify",
            connected: "Spotify connected",
            open: "Open on Spotify ↗",
            loading: "Loading Spotify data...",
            unavailable: "Spotify data is unavailable.",
            notPlaying: "Nothing playing right now",
            connectPrompt: "Connect your Spotify account.",
            topTracks: "TOP TRACKS",
            topArtists: "TOP ARTISTS",
            favoriteArtist: "Favorite artist",
            noRecent: "No listening history available yet.",
            noData: "No data available yet."
      },

        projects: {
            eyebrow: "MY WORK",
            title: "Projects"
        },

        project: {
            viewer: {
                label: "Project",
                title: "View full project",
                description:
                    "Click the button below to view the complete documentation of my thesis project.",
                button: "View Project"
            }
        },

        cv: {
            eyebrow: "ABOUT ME",
            title: "Curriculum Vitae",

            viewer: {
                label: "CURRICULUM VITAE",
                title: "View Full CV",
                description:
                    "Click the button below to view my complete CV.",
                button: "View Full CV"
            },

            viewTitle: "View Full CV",

            viewDescription:
                "Click the button below to view my complete CV.",

            viewButton: "View Full CV →"
        },

        footer: {
            rights: "All rights reserved."
        },

        weatherCodes: {
            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            45: "Fog",
            48: "Depositing rime fog",
            51: "Light drizzle",
            53: "Drizzle",
            55: "Heavy drizzle",
            61: "Light rain",
            63: "Rain",
            65: "Heavy rain",
            71: "Light snow",
            73: "Snow",
            75: "Heavy snow",
            80: "Rain showers",
            81: "Rain showers",
            82: "Heavy rain showers",
            95: "Thunderstorm",
            96: "Thunderstorm with hail",
            99: "Heavy thunderstorm"
        }
    },


    /* =====================================================
       GERMAN
    ===================================================== */

    de: {

        htmlLang: "de",

        logo: "Zurück nach oben",

        nav: {
            home: "Startseite",
            projects: "Projekte",
            cv: "Lebenslauf",
            dashboard: "Dashboard"
        },

        hero: {
            eyebrow: "Webseite",
            description: "Snowflake | RTOS spezialist"
        },

        status: {
            online: "Online",
            offline: "Offline",
            invisible: "Unsichtbar"
        },

        buttons: {
            projects: "Projekte",
            cv: "Lebenslauf"
        },

        clock: {
            localTime: "LOKALE ZEIT"
        },

        dashboard: {
            eyebrow: "DASHBOARD",
            title: "Aktuelle Informationen"
        },

        accessibility: {
            title: "Barrierefreiheit",
            description:
                "Passe die Website für eine angenehmere Nutzung an.",

            large: "Größere Schrift",
            largeDescription: "Leichter lesbarer Text",

            xlarge: "Extra große Schrift",
            xlargeDescription: "Noch größerer Text",

            contrast: "Hoher Kontrast",
            contrastDescription: "Stärkere Farben und Abgrenzungen",

            readable: "Lesbare Schriftart",
            readableDescription: "Einfachere Schriftgestaltung",

            links: "Links hervorheben",
            linksDescription: "Links unterstreichen",

            motion: "Animationen deaktivieren",
            motionDescription: "Weniger bewegte Elemente",

            targets: "Größere Schaltflächen",
            targetsDescription: "Einfacheres Tippen und Klicken",

            keyboard: "Tastaturmodus",
            keyboardDescription: "Deutlich sichtbarer Fokus",

            reset: "Einstellungen zurücksetzen"
        },

        weather: {
            label: "WETTER",
            wind: "💨 Wind",
            humidity: "💧 Luftfeuchtigkeit",
            refresh: "↻ Wetter aktualisieren",
            loading: "Wetterdaten werden geladen...",
            unavailable: "Wetterdaten sind nicht verfügbar.",
            location: "Standort wird ermittelt..."
        },

        quick: {
            label: "SCHNELLINFO",
            date: "Heutiges Datum",
            device: "Gerät",
            birthday: "Geburtstag",
            gender: "Geschlecht",
            male: "Männlich",
            mobile: "Mobil",
            tablet: "Tablet",
            desktop: "Desktop",
            watch: "Smartwatch"
        },

        contacts: {
            label: "KONTAKT",
            email: "E-Mail",
            phone: "Telefonnummer",
            facebook: "Gemeinschaft",
            web: "Webseite",
            location: "Wohnort",
            locationValue: "Szolnok, Ungarn"
        },

        exchange: {
            label: "WECHSELKURSE",
            title: "Währungen",
            loading: "Wechselkurse werden geladen...",
            unavailable: "Wechselkurse sind nicht verfügbar.",
            updated: "Aktualisiert"
        },

        currency: {
            eur: "Euro",
            usd: "US-Dollar",
            gbp: "Britisches Pfund",
            chf: "Schweizer Franken"
        },

       spotify: {
            label: "MUSIK-DASHBOARD",
            title: "Spotify Dashboard",
            nowPlaying: "LÄUFT GERADE",
            recentlyPlayed: "ZULETZT GEHÖRT",
            recentTitle: "Zuletzt gehört",
            refresh: "↻ Aktualisieren",
            connect: "Mit Spotify verbinden",
            connected: "Spotify verbunden",
            open: "Auf Spotify öffnen ↗",
            loading: "Spotify-Daten werden geladen...",
            unavailable: "Spotify-Daten sind nicht verfügbar.",
            notPlaying: "Gerade läuft keine Musik",
            connectPrompt: "Verbinde dein Spotify-Konto.",
            topTracks: "TOP-SONGS",
            topArtists: "TOP-KÜNSTLER",
            favoriteArtist: "Lieblingskünstler",
            noRecent: "Noch kein Wiedergabeverlauf verfügbar.",
            noData: "Noch keine Daten verfügbar."
      },

        projects: {
            eyebrow: "MEINE ARBEIT",
            title: "Projekte"
        },

        project: {
            viewer: {
                label: "Projekt",
                title: "Vollständiges Projekt ansehen",
                description:
                    "Klicken Sie auf die Schaltfläche unten, um die vollständige Dokumentation meines Abschlussprojekts anzusehen.",
                button: "Projekt ansehen"
            }
        },

        cv: {
            eyebrow: "ÜBER MICH",
            title: "Lebenslauf",

            viewer: {
                label: "LEBENSLAUF",
                title: "Vollständigen Lebenslauf ansehen",
                description:
                    "Klicken Sie auf die Schaltfläche unten, um meinen vollständigen Lebenslauf anzusehen.",
                button: "Vollständigen Lebenslauf ansehen"
            },

            viewTitle: "Vollständigen Lebenslauf ansehen",

            viewDescription:
                "Klicken Sie auf die Schaltfläche unten, um meinen vollständigen Lebenslauf anzusehen.",

            viewButton: "Vollständigen Lebenslauf ansehen →"
        },

        footer: {
            rights: "Alle Rechte vorbehalten."
        },

        weatherCodes: {
            0: "Klarer Himmel",
            1: "Überwiegend klar",
            2: "Teilweise bewölkt",
            3: "Bedeckt",
            45: "Nebel",
            48: "Reifnebel",
            51: "Leichter Nieselregen",
            53: "Nieselregen",
            55: "Starker Nieselregen",
            61: "Leichter Regen",
            63: "Regen",
            65: "Starker Regen",
            71: "Leichter Schneefall",
            73: "Schneefall",
            75: "Starker Schneefall",
            80: "Regenschauer",
            81: "Regenschauer",
            82: "Starke Regenschauer",
            95: "Gewitter",
            96: "Gewitter mit Hagel",
            99: "Starkes Gewitter"
        }
    },


    /* =====================================================
       SWEDISH
    ===================================================== */

    sv: {

        htmlLang: "sv",

        logo: "Tillbaka till toppen",

        nav: {
            home: "Hem",
            projects: "Projekt",
            cv: "Meritförteckning",
            dashboard: "Instrumentpanel"
        },

        hero: {
            eyebrow: "Webbplats",
            description: "Snowflake | RTOS specialist"
        },

        status: {
            online: "Online",
            offline: "Offline",
            invisible: "Osynlig"
        },

        buttons: {
            projects: "Projekt",
            cv: "Meritförteckning"
        },

        clock: {
            localTime: "LOKAL TID"
        },

        dashboard: {
            eyebrow: "INSTRUMENTPANEL",
            title: "Aktuell information"
        },

        accessibility: {
            title: "Tillgänglighet",
            description:
                "Anpassa webbplatsen för en bekvämare användarupplevelse.",

            large: "Större text",
            largeDescription: "Text som är lättare att läsa",

            xlarge: "Extra stor text",
            xlargeDescription: "Ännu större text",

            contrast: "Hög kontrast",
            contrastDescription: "Tydligare färger och kanter",

            readable: "Lättläst typsnitt",
            readableDescription: "Enklare teckensnittsvisning",

            links: "Markera länkar",
            linksDescription: "Understrukna länkar",

            motion: "Stäng av animationer",
            motionDescription: "Färre rörliga element",

            targets: "Större knappar",
            targetsDescription: "Enklare att trycka och klicka",

            keyboard: "Tangentbordsläge",
            keyboardDescription: "Tydligare fokusmarkering",

            reset: "Återställ inställningar"
        },

        weather: {
            label: "VÄDER",
            wind: "💨 Vind",
            humidity: "💧 Luftfuktighet",
            refresh: "↻ Uppdatera vädret",
            loading: "Laddar väderdata...",
            unavailable: "Väderdata är inte tillgängliga.",
            location: "Hämtar plats..."
        },

        quick: {
            label: "SNABBINFO",
            date: "Dagens datum",
            device: "Enhet",
            birthday: "Födelsedag",
            gender: "Kön",
            male: "Man",
            mobile: "Mobil",
            tablet: "Surfplatta",
            desktop: "Stationär dator",
            watch: "Smartklocka"
        },

        contacts: {
            label: "KONTAKT",
            email: "E-post",
            phone: "Telefonnummer",
            facebook: "Sociala medier",
            web: "Webbplats",
            location: "Bostadsort",
            locationValue: "Szolnok, Ungern"
        },

        exchange: {
            label: "VÄXELKURSER",
            title: "Valutor",
            loading: "Laddar växelkurser...",
            unavailable: "Växelkurser är inte tillgängliga.",
            updated: "Uppdaterad"
        },

        currency: {
            eur: "Euro",
            usd: "Amerikansk dollar",
            gbp: "Brittiskt pund",
            chf: "Schweizisk franc"
        },

       
       spotify: {
            label: "MUSIKÖVERSIKT",
            title: "Spotify Dashboard",
            nowPlaying: "SPELAS JUST NU",
            recentlyPlayed: "SENAST SPELADE",
            recentTitle: "Senast spelade låtar",
            refresh: "↻ Uppdatera",
            connect: "Anslut till Spotify",
            connected: "Spotify är anslutet",
            open: "Öppna i Spotify ↗",
            loading: "Laddar Spotify-data...",
            unavailable: "Spotify-data är inte tillgänglig.",
            notPlaying: "Ingen musik spelas just nu",
            connectPrompt: "Anslut ditt Spotify-konto.",
            topTracks: "TOPPLÅTAR",
            topArtists: "TOPPARTISTER",
            favoriteArtist: "Favoritartist",
            noRecent: "Ingen lyssningshistorik tillgänglig ännu.",
            noData: "Ingen data tillgänglig ännu."
      },


        projects: {
            eyebrow: "MITT ARBETE",
            title: "Projekt"
        },

        project: {
            viewer: {
                label: "Projekt",
                title: "Visa hela projektet",
                description:
                    "Klicka på knappen nedan för att visa den fullständiga dokumentationen för mitt examensarbete.",
                button: "Visa projekt"
            }
        },

        cv: {
            eyebrow: "OM MIG",
            title: "Meritförteckning",

            viewer: {
                label: "MERITFÖRTECKNING",
                title: "Visa hela CV:t",
                description:
                    "Klicka på knappen nedan för att visa mitt fullständiga CV.",
                button: "Visa hela CV:t"
            },

            viewTitle: "Visa hela CV:t",

            viewDescription:
                "Klicka på knappen nedan för att visa mitt fullständiga CV.",

            viewButton: "Visa hela CV:t →"
        },

        footer: {
            rights: "Alla rättigheter förbehållna."
        },

        weatherCodes: {
            0: "Klar himmel",
            1: "Mestadels klart",
            2: "Delvis molnigt",
            3: "Mulet",
            45: "Dimma",
            48: "Rimfrostdis",
            51: "Lätt duggregn",
            53: "Duggregn",
            55: "Kraftigt duggregn",
            61: "Lätt regn",
            63: "Regn",
            65: "Kraftigt regn",
            71: "Lätt snöfall",
            73: "Snöfall",
            75: "Kraftigt snöfall",
            80: "Regnskurar",
            81: "Regnskurar",
            82: "Kraftiga regnskurar",
            95: "Åskväder",
            96: "Åskväder med hagel",
            99: "Kraftigt åskväder"
        }
    },
   
    /* =====================================================
       DANISH
    ===================================================== */

    da: {

        htmlLang: "da",

        logo: "Tilbage til toppen",

        nav: {
            home: "Hjem",
            projects: "Projekter",
            cv: "Levnedsbeskrivelse",
            dashboard: "Dashboard"
        },

        hero: {
            eyebrow: "Hjemmeside",
            description: "Snowflake | RTOS specialist"
        },

        status: {
            online: "Online",
            offline: "Offline",
            invisible: "Usynlig"
        },

        buttons: {
            projects: "Projekter",
            cv: "Levnedsbeskrivelse"
        },

        clock: {
            localTime: "LOKAL TID"
        },

        dashboard: {
            eyebrow: "DASHBOARD",
            title: "Aktuelle oplysninger"
        },

        accessibility: {
            title: "Tilgængelighed",
            description:
                "Tilpas hjemmesiden, så den bliver mere behagelig at bruge.",

            large: "Større tekst",
            largeDescription: "Tekst, der er lettere at læse",

            xlarge: "Ekstra stor tekst",
            xlargeDescription: "Endnu større tekst",

            contrast: "Høj kontrast",
            contrastDescription: "Stærkere farver og tydeligere kanter",

            readable: "Letlæselig skrifttype",
            readableDescription: "Enklere skrifttype",

            links: "Fremhæv links",
            linksDescription: "Understreg hyperlinks",

            motion: "Deaktiver animationer",
            motionDescription: "Færre bevægelige elementer",

            targets: "Større knapper",
            targetsDescription: "Nemmere at trykke og klikke",

            keyboard: "Tastaturtilstand",
            keyboardDescription: "Mere synlig fokusmarkering",

            reset: "Nulstil indstillinger"
        },

        weather: {
            label: "VEJR",
            wind: "💨 Vind",
            humidity: "💧 Luftfugtighed",
            refresh: "↻ Opdater vejret",
            loading: "Indlæser vejrdata...",
            unavailable: "Vejrdata er ikke tilgængelige.",
            location: "Finder placering..."
        },

        quick: {
            label: "HURTIG INFO",
            date: "Dagens dato",
            device: "Enhed",
            birthday: "Fødselsdag",
            gender: "Køn",
            male: "Mand",
            mobile: "Mobil",
            tablet: "Tablet",
            desktop: "Stationær computer",
            watch: "Smartur"
        },

        contacts: {
            label: "KONTAKT",
            email: "E-mail",
            phone: "Telefonnummer",
            facebook: "Sociale medier",
            web: "Hjemmeside",
            location: "Bopæl",
            locationValue: "Szolnok, Ungarn"
        },

        exchange: {
            label: "VALUTAKURSER",
            title: "Valutaer",
            loading: "Indlæser valutakurser...",
            unavailable: "Valutakurser er ikke tilgængelige.",
            updated: "Opdateret"
        },

        currency: {
            eur: "Euro",
            usd: "Amerikansk dollar",
            gbp: "Britisk pund",
            chf: "Schweizisk franc"
        },

       spotify: {
            label: "MUSIKOVERSIGT",
            title: "Spotify Dashboard",
            nowPlaying: "AFSPILLER NU",
            recentlyPlayed: "SENEST AFSPILLET",
            recentTitle: "Senest afspillet",
            refresh: "↻ Opdater",
            connect: "Forbind til Spotify",
            connected: "Spotify er tilsluttet",
            open: "Åbn i Spotify ↗",
            loading: "Indlæser Spotify-data...",
            unavailable: "Spotify-data er ikke tilgængelige.",
            notPlaying: "Der afspilles ikke musik lige nu",
            connectPrompt: "Forbind din Spotify-konto.",
            topTracks: "TOPNUMRE",
            topArtists: "TOPKUNSTNERE",
            favoriteArtist: "Favoritkunstner",
            noRecent: "Der er endnu ingen lyttehistorik tilgængelig.",
            noData: "Ingen data tilgængelige endnu."
      },


        projects: {
            eyebrow: "MIT ARBEJDE",
            title: "Projekter"
        },

        project: {
            viewer: {
                label: "Projekt",
                title: "Se hele projektet",
                description:
                    "Klik på knappen nedenfor for at se den fulde dokumentation af mit afgangsprojekt.",
                button: "Se projekt"
            }
        },

        cv: {
            eyebrow: "OM MIG",
            title: "Levnedsbeskrivelse",

            viewer: {
                label: "Levnedsbeskrivelse",
                title: "Se hele CV'et",
                description:
                    "Klik på knappen nedenfor for at se mit fulde CV.",
                button: "Se hele CV'et"
            },

            viewTitle: "Se hele CV'et",

            viewDescription:
                "Klik på knappen nedenfor for at se det fulde CV.",

            viewButton: "Se hele CV'et →"
        },

        footer: {
            rights: "Alle rettigheder forbeholdes."
        },

        weatherCodes: {
            0: "Klar himmel",
            1: "Overvejende klart",
            2: "Delvist skyet",
            3: "Overskyet",
            45: "Tåge",
            48: "Rimtåge",
            51: "Let støvregn",
            53: "Støvregn",
            55: "Kraftig støvregn",
            61: "Let regn",
            63: "Regn",
            65: "Kraftig regn",
            71: "Let snefald",
            73: "Snefald",
            75: "Kraftigt snefald",
            80: "Regnbyger",
            81: "Regnbyger",
            82: "Kraftige regnbyger",
            95: "Tordenvejr",
            96: "Tordenvejr med hagl",
            99: "Kraftigt tordenvejr"
        }
    }


};


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

let currentLanguage =
    localStorage.getItem("language") || "hu";


function getTranslation(key) {

    const language =
        translations[currentLanguage];

    const parts =
        key.split(".");

    let value =
        language;

    for (const part of parts) {

        if (
            value &&
            Object.prototype.hasOwnProperty.call(
                value,
                part
            )
        ) {

            value = value[part];

        } else {

            return key;

        }

    }

    return value;

}


function updateTranslatedElements() {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            const translation =
                getTranslation(key);

            if (translation !== key) {

                element.textContent =
                    translation;

            }

        });

}


function setLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage =
        language;

    localStorage.setItem(
        "language",
        language
    );

    document.documentElement.lang =
        translations[language].htmlLang;

    updateTranslatedElements();

    updateLanguageButton();

    updateClock();

    updateDeviceInfo();

    updateWeatherText();

    updateWeatherLocationText();

    updateExchangeText();

    updateStatusUI();

}


/* =========================================================
   LANGUAGE BUTTON
========================================================= */

const languageToggle =
    document.getElementById(
        "languageToggle"
    );

const languageSelector =
    document.querySelector(
        ".language-selector"
    );


function updateLanguageButton() {

    const currentLanguageElement =
        document.getElementById(
            "currentLanguage"
        );

    if (currentLanguageElement) {

        currentLanguageElement.textContent =
            currentLanguage.toUpperCase();

    }

    document
        .querySelectorAll(
            ".language-menu button"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.language ===
                currentLanguage
            );

        });

}


if (
    languageToggle &&
    languageSelector
) {

    languageToggle.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            languageSelector.classList.toggle(
                "active"
            );

            languageToggle.setAttribute(
                "aria-expanded",
                languageSelector.classList.contains(
                    "active"
                )
            );

        }
    );

}


document
    .querySelectorAll(
        ".language-menu button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                setLanguage(
                    button.dataset.language
                );

                if (languageSelector) {

                    languageSelector.classList.remove(
                        "active"
                    );

                }

                if (languageToggle) {

                    languageToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });


/* =========================================================
   STATUS SYSTEM
========================================================= */

const statusToggle =
    document.getElementById(
        "statusToggle"
    );

const statusMenu =
    document.getElementById(
        "statusMenu"
    );

const statusSelector =
    document.querySelector(
        ".status-selector"
    );

const statusText =
    document.getElementById(
        "statusText"
    );

const statusDot =
    document.getElementById(
        "statusDot"
    );


const statusTranslations = {

    online: "status.online",
    offline: "status.offline",
    invisible: "status.invisible"

};


let currentStatus =
    localStorage.getItem(
        "status"
    ) || "online";


function updateStatusUI() {

    if (
        !statusToggle ||
        !statusText ||
        !statusDot
    ) {
        return;
    }

    const statusKey =
        statusTranslations[currentStatus] ||
        statusTranslations.online;

    statusText.textContent =
        getTranslation(statusKey);

    statusToggle.classList.remove(
        "status-online",
        "status-offline",
        "status-invisible"
    );

    statusToggle.classList.add(
        `status-${currentStatus}`
    );

    statusDot.classList.remove(
        "status-online",
        "status-offline",
        "status-invisible"
    );

    statusDot.classList.add(
        `status-${currentStatus}`
    );

    document
        .querySelectorAll(
            ".status-menu button"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.status ===
                currentStatus
            );

        });

}


function setStatus(status) {

    if (
        ![
            "online",
            "offline",
            "invisible"
        ].includes(status)
    ) {
        return;
    }

    currentStatus =
        status;

    localStorage.setItem(
        "status",
        status
    );

    updateStatusUI();

}


if (
    statusToggle &&
    statusSelector
) {

    statusToggle.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            statusSelector.classList.toggle(
                "active"
            );

            statusToggle.setAttribute(
                "aria-expanded",
                statusSelector.classList.contains(
                    "active"
                )
            );

        }
    );

}


document
    .querySelectorAll(
        ".status-menu button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                setStatus(
                    button.dataset.status
                );

                if (statusSelector) {

                    statusSelector.classList.remove(
                        "active"
                    );

                }

                if (statusToggle) {

                    statusToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });


/* =========================================================
   ACCESSIBILITY SYSTEM
========================================================= */

const accessibilitySelector =
    document.getElementById(
        "accessibilitySelector"
    );

const accessibilityToggle =
    document.getElementById(
        "accessibilityToggle"
    );

const accessibilityPanel =
    document.getElementById(
        "accessibilityPanel"
    );

const accessibilityLarge =
    document.getElementById(
        "accessibilityLarge"
    );

const accessibilityXLarge =
    document.getElementById(
        "accessibilityXLarge"
    );

const accessibilityContrast =
    document.getElementById(
        "accessibilityContrast"
    );

const accessibilityReadable =
    document.getElementById(
        "accessibilityReadable"
    );

const accessibilityLinks =
    document.getElementById(
        "accessibilityLinks"
    );

const accessibilityMotion =
    document.getElementById(
        "accessibilityMotion"
    );

const accessibilityTargets =
    document.getElementById(
        "accessibilityTargets"
    );

const accessibilityKeyboard =
    document.getElementById(
        "accessibilityKeyboard"
    );

const accessibilityReset =
    document.getElementById(
        "accessibilityReset"
    );


/*
    Az Accessibility beállítások külön
    localStorage objektumban kerülnek mentésre.
*/

const defaultAccessibilitySettings = {

    fontSize: "normal",

    contrast: false,

    readable: false,

    links: false,

    motion: false,

    targets: false,

    keyboard: false

};


let accessibilitySettings = {

    ...defaultAccessibilitySettings

};


function loadAccessibilitySettings() {

    try {

        const saved =
            localStorage.getItem(
                "accessibilitySettings"
            );

        if (!saved) {
            return;
        }

        const parsed =
            JSON.parse(saved);

        accessibilitySettings = {

            ...defaultAccessibilitySettings,

            ...parsed

        };

        if (
            ![
                "normal",
                "large",
                "xlarge"
            ].includes(
                accessibilitySettings.fontSize
            )
        ) {

            accessibilitySettings.fontSize =
                "normal";

        }

    } catch (error) {

        console.warn(
            "Accessibility settings could not be loaded:",
            error
        );

        accessibilitySettings = {
            ...defaultAccessibilitySettings
        };

    }

}


function saveAccessibilitySettings() {

    localStorage.setItem(
        "accessibilitySettings",
        JSON.stringify(
            accessibilitySettings
        )
    );

}


function applyAccessibilitySettings() {

    const body =
        document.body;

    if (!body) {
        return;
    }


    /*
        Betűméret
    */

    body.classList.remove(
        "accessibility-large",
        "accessibility-xlarge"
    );


    if (
        accessibilitySettings.fontSize ===
        "large"
    ) {

        body.classList.add(
            "accessibility-large"
        );

    }


    if (
        accessibilitySettings.fontSize ===
        "xlarge"
    ) {

        body.classList.add(
            "accessibility-xlarge"
        );

    }


    /*
        Magas kontraszt
    */

    body.classList.toggle(
        "accessibility-high-contrast",
        accessibilitySettings.contrast
    );


    /*
        Olvasható betűtípus
    */

    body.classList.toggle(
        "accessibility-readable-font",
        accessibilitySettings.readable
    );


    /*
        Linkek kiemelése
    */

    body.classList.toggle(
        "accessibility-highlight-links",
        accessibilitySettings.links
    );


    /*
        Animációk kikapcsolása
    */

    body.classList.toggle(
        "accessibility-reduce-motion",
        accessibilitySettings.motion
    );


    /*
        Nagyobb kattintási felület
    */

    body.classList.toggle(
        "accessibility-large-targets",
        accessibilitySettings.targets
    );


    /*
        Billentyűzet mód
    */

    body.classList.toggle(
        "accessibility-keyboard-mode",
        accessibilitySettings.keyboard
    );


    updateAccessibilityButtons();

}


function updateAccessibilityButtons() {

    const buttons = {

        fontSize: {
            large: accessibilityLarge,
            xlarge: accessibilityXLarge
        },

        contrast: accessibilityContrast,

        readable: accessibilityReadable,

        links: accessibilityLinks,

        motion: accessibilityMotion,

        targets: accessibilityTargets,

        keyboard: accessibilityKeyboard

    };


    if (buttons.fontSize.large) {

        buttons.fontSize.large.setAttribute(
            "aria-pressed",
            accessibilitySettings.fontSize ===
            "large"
                ? "true"
                : "false"
        );

        buttons.fontSize.large.classList.toggle(
            "active",
            accessibilitySettings.fontSize ===
            "large"
        );

    }


    if (buttons.fontSize.xlarge) {

        buttons.fontSize.xlarge.setAttribute(
            "aria-pressed",
            accessibilitySettings.fontSize ===
            "xlarge"
                ? "true"
                : "false"
        );

        buttons.fontSize.xlarge.classList.toggle(
            "active",
            accessibilitySettings.fontSize ===
            "xlarge"
        );

    }


    const toggleSettings = [

        [
            buttons.contrast,
            accessibilitySettings.contrast
        ],

        [
            buttons.readable,
            accessibilitySettings.readable
        ],

        [
            buttons.links,
            accessibilitySettings.links
        ],

        [
            buttons.motion,
            accessibilitySettings.motion
        ],

        [
            buttons.targets,
            accessibilitySettings.targets
        ],

        [
            buttons.keyboard,
            accessibilitySettings.keyboard
        ]

    ];


    toggleSettings.forEach(
        ([button, state]) => {

            if (!button) {
                return;
            }

            button.setAttribute(
                "aria-pressed",
                state
                    ? "true"
                    : "false"
            );

            button.classList.toggle(
                "active",
                state
            );

        }
    );

}


function setAccessibilityFontSize(size) {

    if (
        ![
            "normal",
            "large",
            "xlarge"
        ].includes(size)
    ) {
        return;
    }

    /*
        Ha ugyanarra a beállításra kattintunk,
        visszaáll normál méretre.
    */

    if (
        accessibilitySettings.fontSize ===
        size
    ) {

        accessibilitySettings.fontSize =
            "normal";

    } else {

        accessibilitySettings.fontSize =
            size;

    }

    saveAccessibilitySettings();

    applyAccessibilitySettings();

}


function toggleAccessibilitySetting(
    setting
) {

    if (
        !Object.prototype.hasOwnProperty.call(
            accessibilitySettings,
            setting
        )
    ) {
        return;
    }


    if (
        setting === "fontSize"
    ) {
        return;
    }


    accessibilitySettings[setting] =
        !accessibilitySettings[setting];


    saveAccessibilitySettings();

    applyAccessibilitySettings();

}


function resetAccessibilitySettings() {

    accessibilitySettings = {

        ...defaultAccessibilitySettings

    };

    saveAccessibilitySettings();

    applyAccessibilitySettings();

}


/*
    Accessibility panel megnyitása / bezárása
*/

if (
    accessibilityToggle &&
    accessibilitySelector
) {

    accessibilityToggle.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const isActive =
                accessibilitySelector.classList.toggle(
                    "active"
                );

            accessibilityToggle.setAttribute(
                "aria-expanded",
                isActive
                    ? "true"
                    : "false"
            );

        }
    );

}


/*
    A panel belsejében lévő kattintások
    ne zárják be a panelt.
*/

if (accessibilityPanel) {

    accessibilityPanel.addEventListener(
        "click",
        event => {

            event.stopPropagation();

        }
    );

}


/*
    Betűméret
*/

if (accessibilityLarge) {

    accessibilityLarge.addEventListener(
        "click",
        () => {

            setAccessibilityFontSize(
                "large"
            );

        }
    );

}


if (accessibilityXLarge) {

    accessibilityXLarge.addEventListener(
        "click",
        () => {

            setAccessibilityFontSize(
                "xlarge"
            );

        }
    );

}


/*
    Egyéb Accessibility beállítások
*/

if (accessibilityContrast) {

    accessibilityContrast.addEventListener(
        "click",
        () => {

            toggleAccessibilitySetting(
                "contrast"
            );

        }
    );

}


if (accessibilityReadable) {

    accessibilityReadable.addEventListener(
        "click",
        () => {

            toggleAccessibilitySetting(
                "readable"
            );

        }
    );

}


if (accessibilityLinks) {

    accessibilityLinks.addEventListener(
        "click",
        () => {

            toggleAccessibilitySetting(
                "links"
            );

        }
    );

}


if (accessibilityMotion) {

    accessibilityMotion.addEventListener(
        "click",
        () => {

            toggleAccessibilitySetting(
                "motion"
            );

        }
    );

}


if (accessibilityTargets) {

    accessibilityTargets.addEventListener(
        "click",
        () => {

            toggleAccessibilitySetting(
                "targets"
            );

        }
    );

}


if (accessibilityKeyboard) {

    accessibilityKeyboard.addEventListener(
        "click",
        () => {

            toggleAccessibilitySetting(
                "keyboard"
            );

        }
    );

}


/*
    Reset
*/

if (accessibilityReset) {

    accessibilityReset.addEventListener(
        "click",
        () => {

            resetAccessibilitySettings();

        }
    );

}


/*
    Accessibility beállítások betöltése
    az oldal indulásakor.
*/

loadAccessibilitySettings();

applyAccessibilitySettings();


/* =========================================================
   CLOSE DROPDOWNS
========================================================= */

document.addEventListener(
    "click",
    () => {

        if (languageSelector) {

            languageSelector.classList.remove(
                "active"
            );

        }


        if (languageToggle) {

            languageToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        if (statusSelector) {

            statusSelector.classList.remove(
                "active"
            );

        }


        if (statusToggle) {

            statusToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        if (accessibilitySelector) {

            accessibilitySelector.classList.remove(
                "active"
            );

        }


        if (accessibilityToggle) {

            accessibilityToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/*
    Escape billentyűvel minden dropdown bezárása.
*/

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }


        if (languageSelector) {

            languageSelector.classList.remove(
                "active"
            );

        }


        if (languageToggle) {

            languageToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        if (statusSelector) {

            statusSelector.classList.remove(
                "active"
            );

        }


        if (statusToggle) {

            statusToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        if (accessibilitySelector) {

            accessibilitySelector.classList.remove(
                "active"
            );

        }


        if (accessibilityToggle) {

            accessibilityToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        if (nav) {

            nav.classList.remove(
                "active"
            );

        }


        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================================
   THEME
========================================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const themeIcon =
    document.getElementById(
        "themeIcon"
    );


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add(
            "dark"
        );

        if (themeIcon) {

            themeIcon.textContent =
                "☀";

        }

    } else {

        document.body.classList.remove(
            "dark"
        );

        if (themeIcon) {

            themeIcon.textContent =
                "☾";

        }

    }

}


const savedTheme =
    localStorage.getItem(
        "theme"
    ) || "light";


applyTheme(
    savedTheme
);


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            const isDark =
                document.body.classList.contains(
                    "dark"
                );

            const newTheme =
                isDark
                    ? "light"
                    : "dark";

            localStorage.setItem(
                "theme",
                newTheme
            );

            applyTheme(
                newTheme
            );

        }
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );

const nav =
    document.getElementById(
        "nav"
    );


if (
    menuToggle &&
    nav
) {

    menuToggle.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            nav.classList.toggle(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                nav.classList.contains(
                    "active"
                )
            );

        }
    );


    nav.addEventListener(
        "click",
        event => {

            event.stopPropagation();

        }
    );


    document
        .querySelectorAll(
            ".nav a"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* =========================================================
   CLOCK
========================================================= */

const clockElement =
    document.getElementById(
        "clock"
    );

const dateElement =
    document.getElementById(
        "date"
    );

const timezoneElement =
    document.getElementById(
        "timezone"
    );

const todayInfo =
    document.getElementById(
        "todayInfo"
    );


function getLocale() {

    return {

        hu: "hu-HU",
        en: "en-GB",
        de: "de-DE",
        sv: "sv-SE",
        da: "da-DK"

    }[
        currentLanguage
    ] || "hu-HU";

}


function updateClock() {

    const now =
        new Date();

    const locale =
        getLocale();


    if (clockElement) {

        clockElement.textContent =
            new Intl.DateTimeFormat(
                locale,
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            ).format(now);

    }


    const date =
        new Intl.DateTimeFormat(
            locale,
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        ).format(now);


    if (dateElement) {

        dateElement.textContent =
            date;

    }


    if (todayInfo) {

        todayInfo.textContent =
            date;

    }


    const timezone =
        Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone ||
        "Europe/Budapest";


    if (timezoneElement) {

        timezoneElement.textContent =
            timezone;

    }

}


updateClock();


setInterval(
    updateClock,
    1000
);


/* =========================================================
   DEVICE INFO
========================================================= */

const deviceInfo =
    document.getElementById(
        "deviceInfo"
    );

const deviceIcon =
    document.getElementById(
        "deviceIcon"
    );


function updateDeviceInfo() {

    if (!deviceInfo) {
        return;
    }


    const width =
        window.innerWidth;

    const userAgent =
        navigator.userAgent.toLowerCase();


    const isWatch =
        width <= 250 ||
        /watch|sm-watch|wear os|wearos/.test(
            userAgent
        );


    const isTablet =
        !isWatch &&
        (
            /ipad|tablet|android(?!.*mobile)/.test(
                userAgent
            ) ||
            (
                navigator.maxTouchPoints > 1 &&
                width > 650 &&
                width <= 1100
            )
        );


    const isMobile =
        !isWatch &&
        !isTablet &&
        (
            /iphone|ipod|android.*mobile|windows phone|mobile/.test(
                userAgent
            ) ||
            width <= 650
        );


    if (isWatch) {

        deviceInfo.textContent =
            getTranslation(
                "quick.watch"
            );

        if (deviceIcon) {

            deviceIcon.textContent =
                "⌚";

        }

    } else if (isMobile) {

        deviceInfo.textContent =
            getTranslation(
                "quick.mobile"
            );

        if (deviceIcon) {

            deviceIcon.textContent =
                "📱";

        }

    } else if (isTablet) {

        deviceInfo.textContent =
            getTranslation(
                "quick.tablet"
            );

        if (deviceIcon) {

            deviceIcon.textContent =
                "📲";

        }

    } else {

        deviceInfo.textContent =
            getTranslation(
                "quick.desktop"
            );

        if (deviceIcon) {

            deviceIcon.textContent =
                "💻";

        }

    }

}


updateDeviceInfo();


window.addEventListener(
    "resize",
    updateDeviceInfo
);


/* =========================================================
   WEATHER
========================================================= */

const weatherLocation =
    document.getElementById(
        "weatherLocation"
    );

const weatherIcon =
    document.getElementById(
        "weatherIcon"
    );

const temperature =
    document.getElementById(
        "temperature"
    );

const weatherDescription =
    document.getElementById(
        "weatherDescription"
    );

const wind =
    document.getElementById(
        "wind"
    );

const humidity =
    document.getElementById(
        "humidity"
    );

const lastUpdated =
    document.getElementById(
        "lastUpdated"
    );

const refreshWeather =
    document.getElementById(
        "refreshWeather"
    );


let weatherCoordinates = {

    latitude: 47.1747,

    longitude: 20.1940,

    name: "Szolnok"

};


/* =========================================================
   WEATHER CODE
========================================================= */

function weatherCodeInfo(code) {

    const icons = {

        0: "☀️",
        1: "🌤️",
        2: "⛅",
        3: "☁️",
        45: "🌫️",
        48: "🌫️",
        51: "🌦️",
        53: "🌦️",
        55: "🌧️",
        61: "🌦️",
        63: "🌧️",
        65: "🌧️",
        71: "🌨️",
        73: "❄️",
        75: "❄️",
        80: "🌦️",
        81: "🌧️",
        82: "⛈️",
        95: "⛈️",
        96: "⛈️",
        99: "⛈️"

    };


    return {

        text:
            translations[currentLanguage]
                .weatherCodes[code] ||
            "Unknown weather",

        icon:
            icons[code] ||
            "🌡️"

    };

}


/* =========================================================
   WEATHER TRANSLATION
========================================================= */

function updateWeatherText() {

    if (
        weatherDescription &&
        weatherDescription.dataset.apiLoaded !==
        "true"
    ) {

        weatherDescription.textContent =
            getTranslation(
                "weather.loading"
            );

    }

}


function updateWeatherLocationText() {

    if (!weatherLocation) {
        return;
    }

    if (
        weatherCoordinates.name ===
        "Aktuális hely"
    ) {

        weatherLocation.textContent =
            getCurrentLocationText();

    }

}


/* =========================================================
   LOCATION
========================================================= */

function getUserLocation() {

    return new Promise(
        resolve => {

            if (!navigator.geolocation) {

                console.warn(
                    "Geolocation is not supported."
                );

                resolve();

                return;

            }


            navigator.geolocation.getCurrentPosition(

                position => {

                    weatherCoordinates = {

                        latitude:
                            position.coords.latitude,

                        longitude:
                            position.coords.longitude,

                        name:
                            "Aktuális hely"

                    };

                    resolve();

                },

                error => {

                    console.warn(
                        "Geolocation failed:",
                        error.message
                    );

                    resolve();

                },

                {

                    enableHighAccuracy: false,

                    timeout: 10000,

                    maximumAge: 600000

                }

            );

        }
    );

}


/* =========================================================
   WEATHER API
========================================================= */

async function loadWeather() {

    if (!weatherDescription) {
        return;
    }


    weatherDescription.dataset.apiLoaded =
        "false";


    weatherDescription.textContent =
        getTranslation(
            "weather.loading"
        );


    try {

        const url =
            "https://api.open-meteo.com/v1/forecast" +
            `?latitude=${weatherCoordinates.latitude}` +
            `&longitude=${weatherCoordinates.longitude}` +
            "&current=" +
            "temperature_2m," +
            "relative_humidity_2m," +
            "weather_code," +
            "wind_speed_10m" +
            "&timezone=auto";


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }


        const data =
            await response.json();


        if (!data.current) {

            throw new Error(
                "No current weather data."
            );

        }


        const current =
            data.current;


        const info =
            weatherCodeInfo(
                current.weather_code
            );


        if (weatherLocation) {

            weatherLocation.textContent =
                weatherCoordinates.name ===
                "Aktuális hely"
                    ? getCurrentLocationText()
                    : weatherCoordinates.name;

        }


        if (weatherIcon) {

            weatherIcon.textContent =
                info.icon;

        }


        if (temperature) {

            temperature.textContent =
                Math.round(
                    current.temperature_2m
                );

        }


        weatherDescription.textContent =
            info.text;

        weatherDescription.dataset.apiLoaded =
            "true";


        if (wind) {

            wind.textContent =
                `${Math.round(
                    current.wind_speed_10m
                )} km/h`;

        }


        if (humidity) {

            humidity.textContent =
                `${Math.round(
                    current.relative_humidity_2m
                )}%`;

        }


        if (lastUpdated) {

            lastUpdated.textContent =
                `${getTranslation(
                    "exchange.updated"
                )}: ${
                    new Date().toLocaleTimeString(
                        getLocale(),
                        {
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    )
                }`;

        }


    } catch (error) {

        console.error(
            "Weather error:",
            error
        );


        weatherDescription.textContent =
            getTranslation(
                "weather.unavailable"
            );

        weatherDescription.dataset.apiLoaded =
            "false";


        if (weatherLocation) {

            weatherLocation.textContent =
                weatherCoordinates.name ===
                "Aktuális hely"
                    ? getCurrentLocationText()
                    : weatherCoordinates.name;

        }


        if (temperature) {

            temperature.textContent =
                "--";

        }


        if (wind) {

            wind.textContent =
                "-- km/h";

        }


        if (humidity) {

            humidity.textContent =
                "--%";

        }

    }

}


function getCurrentLocationText() {

    const names = {

        hu: "Aktuális hely",
        en: "Current location",
        de: "Aktueller Standort",
        sv: "Aktuell plats",
        da: "Aktuel placering"

    };

    return names[currentLanguage];

}


/* =========================================================
   INITIALIZE WEATHER
========================================================= */

async function initializeWeather() {

    await getUserLocation();

    await loadWeather();

}


initializeWeather();


/* =========================================================
   MANUAL WEATHER REFRESH
========================================================= */

if (refreshWeather) {

    refreshWeather.addEventListener(
        "click",
        async () => {

            refreshWeather.disabled =
                true;

            refreshWeather.textContent =
                "↻ ...";


            await loadWeather();


            refreshWeather.disabled =
                false;

            refreshWeather.textContent =
                getTranslation(
                    "weather.refresh"
                );

        }
    );

}


setInterval(
    loadWeather,
    10 * 60 * 1000
);


/* =========================================================
   EXCHANGE RATES
========================================================= */

const eurHuf =
    document.getElementById(
        "eurHuf"
    );

const usdHuf =
    document.getElementById(
        "usdHuf"
    );

const gbpHuf =
    document.getElementById(
        "gbpHuf"
    );

const chfHuf =
    document.getElementById(
        "chfHuf"
    );

const exchangeUpdated =
    document.getElementById(
        "exchangeUpdated"
    );


function updateExchangeText() {

    if (!exchangeUpdated) {
        return;
    }

    if (
        exchangeUpdated.textContent.includes(
            "..."
        ) ||
        exchangeUpdated.textContent === ""
    ) {

        exchangeUpdated.textContent =
            getTranslation(
                "exchange.loading"
            );

    }

}


async function loadExchangeRates() {

    try {

        if (exchangeUpdated) {

            exchangeUpdated.textContent =
                getTranslation(
                    "exchange.loading"
                );

        }


        const currencies =
            await Promise.all([

                fetch(
                    "https://api.frankfurter.dev/v2/rate/eur/huf"
                ).then(response => {

                    if (!response.ok) {

                        throw new Error(
                            "EUR/HUF API error"
                        );

                    }

                    return response.json();

                }),

                fetch(
                    "https://api.frankfurter.dev/v2/rate/usd/huf"
                ).then(response => {

                    if (!response.ok) {

                        throw new Error(
                            "USD/HUF API error"
                        );

                    }

                    return response.json();

                }),

                fetch(
                    "https://api.frankfurter.dev/v2/rate/gbp/huf"
                ).then(response => {

                    if (!response.ok) {

                        throw new Error(
                            "GBP/HUF API error"
                        );

                    }

                    return response.json();

                }),

                fetch(
                    "https://api.frankfurter.dev/v2/rate/chf/huf"
                ).then(response => {

                    if (!response.ok) {

                        throw new Error(
                            "CHF/HUF API error"
                        );

                    }

                    return response.json();

                })

            ]);


        const eur =
            currencies[0].rate;

        const usd =
            currencies[1].rate;

        const gbp =
            currencies[2].rate;

        const chf =
            currencies[3].rate;


        if (eurHuf) {

            eurHuf.textContent =
                `${eur.toFixed(2)} Ft`;

        }


        if (usdHuf) {

            usdHuf.textContent =
                `${usd.toFixed(2)} Ft`;

        }


        if (gbpHuf) {

            gbpHuf.textContent =
                `${gbp.toFixed(2)} Ft`;

        }


        if (chfHuf) {

            chfHuf.textContent =
                `${chf.toFixed(2)} Ft`;

        }


        if (exchangeUpdated) {

            exchangeUpdated.textContent =
                `${getTranslation(
                    "exchange.updated"
                )}: ${
                    new Date().toLocaleTimeString(
                        getLocale(),
                        {
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    )
                }`;

        }


    } catch (error) {

        console.error(
            "Exchange rate error:",
            error
        );


        if (exchangeUpdated) {

            exchangeUpdated.textContent =
                getTranslation(
                    "exchange.unavailable"
                );

        }

    }

}


loadExchangeRates();


setInterval(
    loadExchangeRates,
    30 * 60 * 1000
);


/* =========================================================
   YEAR
========================================================= */

const yearElement =
    document.getElementById(
        "year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

setLanguage(
    currentLanguage
);


/* =========================================================
   INITIAL STATUS
========================================================= */

setStatus(
    currentStatus
);


/* =========================================================
   FINAL ACCESSIBILITY SYNC
========================================================= */

loadAccessibilitySettings();

applyAccessibilitySettings();



/* =========================================
   SPOTIFY DASHBOARD — REAL API + PKCE
   5 LANGUAGES: HU, EN, DE, SV, DA
   GitHub Pages compatible
========================================= */

(() => {
    "use strict";

    const CLIENT_ID = "2869777f104147f5bc319b6ebeb8601b";
    const REDIRECT_URI = "https://svulz.github.io/svulzhu/";

    const SCOPES = [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state"
    ];

    const API = "https://api.spotify.com/v1";
    const TOKEN_URL = "https://accounts.spotify.com/api/token";

    const $ = (id) => document.getElementById(id);

    const connectButton = $("spotifyConnect");
    const refreshButton = $("spotifyRefresh");
    const trackElement = $("spotifyTrack");
    const artistElement = $("spotifyArtist");
    const openElement = $("spotifyOpen");
    const recentElement = $("spotifyRecent");

    if (
        !connectButton ||
        !refreshButton ||
        !trackElement ||
        !artistElement ||
        !openElement ||
        !recentElement
    ) {
        return;
    }

    const STORAGE = {
        token: "spotify_access_token",
        expiry: "spotify_token_expiry",
        verifier: "spotify_pkce_verifier",
        state: "spotify_oauth_state",
        refresh: "spotify_refresh_token"
    };

    const translations = {
        hu: {
            connect: "Csatlakozás a Spotify-hoz",
            connected: "Spotify csatlakoztatva",
            connecting: "Csatlakozás…",
            refresh: "↻ Frissítés",
            loading: "Betöltés…",
            noMusic: "Most nem szól zene",
            startMusic: "Indíts el egy zenét a Spotify-on.",
            recentHint: "A legutóbbi hallgatásokat lent találod.",
            notConnected: "Spotify nincs csatlakoztatva",
            connectAccount: "Csatlakozz a saját fiókodhoz.",
            noHistory: "Még nincs elérhető hallgatási előzmény.",
            unknownTrack: "Ismeretlen cím",
            playing: "MOST JÁTSZIK",
            lastPlayed: "LEGUTÓBBI ZENE",
            openSpotify: "Megnyitás Spotify-on",
            missingClient: "Előbb állítsd be a Spotify Client ID-t.",
            httpsRequired: "Biztonságos HTTPS-kapcsolat szükséges.",
            missingVerifier: "Hiányzik a PKCE ellenőrző kód. Próbáld újra a csatlakozást.",
            loginFailed: "A Spotify bejelentkezés nem sikerült.",
            loginCancelled: "A Spotify-bejelentkezés megszakadt.",
            securityError: "Biztonsági ellenőrzési hiba. Csatlakozz újra.",
            expired: "Lejárt a Spotify-kapcsolat. Csatlakozz újra.",
            forbidden: "A Spotify nem engedélyezi ezt a kérést.",
            rateLimit: "Túl sok kérés. Próbáld újra később.",
            apiError: "Spotify API hiba",
            loadError: "Nem sikerült betölteni az adatokat.",
            historyError: "A hallgatási előzmények most nem érhetők el.",
            yourMusic: "A TE ZENÉID",
            spotifyDashboard: "Spotify Dashboard",
            lastplayed: "LEGUTÓBBI ZENE",
            openSpotify: "Megnyitás Spotify-on ↗",
            recentTitle: "Legutóbbi zenék",
            dashboardSubtitle: "ZENELEJÁTSZÓ • SZEMÉLYES DASHBOARD",
        },

        en: {
            connect: "Connect Spotify",
            connected: "Spotify connected",
            connecting: "Connecting…",
            refresh: "↻ Refresh",
            loading: "Loading…",
            noMusic: "Nothing is playing right now",
            startMusic: "Start playing something on Spotify.",
            recentHint: "Your recent listening history is below.",
            notConnected: "Spotify is not connected",
            connectAccount: "Connect your Spotify account.",
            noHistory: "No listening history available yet.",
            unknownTrack: "Unknown title",
            playing: "NOW PLAYING",
            lastPlayed: "LAST PLAYED",
            openSpotify: "Open on Spotify",
            missingClient: "Please configure your Spotify Client ID first.",
            httpsRequired: "A secure HTTPS connection is required.",
            missingVerifier: "The PKCE verifier is missing. Please connect again.",
            loginFailed: "Spotify login failed.",
            loginCancelled: "Spotify login was cancelled.",
            securityError: "Security verification failed. Please reconnect.",
            expired: "Your Spotify connection has expired. Please reconnect.",
            forbidden: "Spotify does not allow this request.",
            rateLimit: "Too many requests. Please try again later.",
            apiError: "Spotify API error",
            loadError: "Failed to load the data.",
            historyError: "Listening history is temporarily unavailable.",
            yourMusic: "YOUR MUSIC",
            spotifyDashboard: "Spotify Dashboard",
            lastplayed: "RECENTLY PLAYED",
            openSpotify: "Open on Spotify ↗",
            recentTitle: "Recently played",
            dashboardSubtitle: "MUSIC PLAYER • PERSONAL DASHBOARD",
        },

        de: {
            connect: "Mit Spotify verbinden",
            connected: "Spotify verbunden",
            connecting: "Verbindung wird hergestellt…",
            refresh: "↻ Aktualisieren",
            loading: "Wird geladen…",
            noMusic: "Zurzeit läuft keine Musik",
            startMusic: "Starte die Wiedergabe auf Spotify.",
            recentHint: "Deine zuletzt gehörten Titel findest du unten.",
            notConnected: "Spotify ist nicht verbunden",
            connectAccount: "Verbinde dein Spotify-Konto.",
            noHistory: "Noch kein Hörverlauf verfügbar.",
            unknownTrack: "Unbekannter Titel",
            playing: "LÄUFT GERADE",
            lastPlayed: "ZULETZT GEHÖRT",
            openSpotify: "Auf Spotify öffnen",
            missingClient: "Bitte konfiguriere zuerst deine Spotify Client ID.",
            httpsRequired: "Eine sichere HTTPS-Verbindung ist erforderlich.",
            missingVerifier: "Der PKCE-Prüfcode fehlt. Bitte verbinde dich erneut.",
            loginFailed: "Die Spotify-Anmeldung ist fehlgeschlagen.",
            loginCancelled: "Die Spotify-Anmeldung wurde abgebrochen.",
            securityError: "Sicherheitsprüfung fehlgeschlagen. Bitte erneut verbinden.",
            expired: "Deine Spotify-Verbindung ist abgelaufen. Bitte erneut verbinden.",
            forbidden: "Spotify erlaubt diese Anfrage nicht.",
            rateLimit: "Zu viele Anfragen. Bitte versuche es später erneut.",
            apiError: "Spotify-API-Fehler",
            loadError: "Die Daten konnten nicht geladen werden.",
            historyError: "Der Hörverlauf ist momentan nicht verfügbar.",
            yourMusic: "DEINE MUSIK",
            spotifyDashboard: "Spotify-Dashboard",
            lastplayed: "ZULETZT GEHÖRT",
            openSpotify: "Auf Spotify öffnen ↗",
            recentTitle: "Zuletzt gehörte Musik",
            dashboardSubtitle: "MUSIKPLAYER • PERSÖNLICHES DASHBOARD",
           
        },

        sv: {
            connect: "Anslut till Spotify",
            connected: "Spotify är anslutet",
            connecting: "Ansluter…",
            refresh: "↻ Uppdatera",
            loading: "Laddar…",
            noMusic: "Ingen musik spelas just nu",
            startMusic: "Börja spela musik på Spotify.",
            recentHint: "Din senaste lyssningshistorik finns nedan.",
            notConnected: "Spotify är inte anslutet",
            connectAccount: "Anslut ditt Spotify-konto.",
            noHistory: "Ingen lyssningshistorik tillgänglig ännu.",
            unknownTrack: "Okänd titel",
            playing: "SPELAS JUST NU",
            lastPlayed: "SENAST SPELAD",
            openSpotify: "Öppna på Spotify",
            missingClient: "Konfigurera ditt Spotify Client ID först.",
            httpsRequired: "En säker HTTPS-anslutning krävs.",
            missingVerifier: "PKCE-verifieraren saknas. Anslut igen.",
            loginFailed: "Det gick inte att logga in på Spotify.",
            loginCancelled: "Spotify-inloggningen avbröts.",
            securityError: "Säkerhetskontrollen misslyckades. Anslut igen.",
            expired: "Din Spotify-anslutning har gått ut. Anslut igen.",
            forbidden: "Spotify tillåter inte den här förfrågan.",
            rateLimit: "För många förfrågningar. Försök igen senare.",
            apiError: "Spotify API-fel",
            loadError: "Det gick inte att läsa in informationen.",
            historyError: "Lyssningshistoriken är inte tillgänglig just nu.",
            yourMusic: "DIN MUSIK",
            spotifyDashboard: "Spotify-instrumentpanel",
            lastPlayed: "SENAST SPELAD",
            openSpotify: "Öppna på Spotify ↗",
            recentTitle: "Senast spelade låtar",
            dashboardSubtitle: "MUSIKSPELARE • PERSONLIG DASHBOARD",
        },

        da: {
            connect: "Forbind til Spotify",
            connected: "Spotify er forbundet",
            connecting: "Forbinder…",
            refresh: "↻ Opdater",
            loading: "Indlæser…",
            noMusic: "Der afspilles ikke musik lige nu",
            startMusic: "Start afspilning på Spotify.",
            recentHint: "Din seneste lyttehistorik finder du nedenfor.",
            notConnected: "Spotify er ikke forbundet",
            connectAccount: "Forbind din Spotify-konto.",
            noHistory: "Der er endnu ingen lyttehistorik tilgængelig.",
            unknownTrack: "Ukendt titel",
            playing: "AFSPILLES NU",
            lastPlayed: "SENEST AFSPILLET",
            openSpotify: "Åbn på Spotify",
            missingClient: "Konfigurer først dit Spotify Client ID.",
            httpsRequired: "En sikker HTTPS-forbindelse er påkrævet.",
            missingVerifier: "PKCE-verifikatoren mangler. Forbind igen.",
            loginFailed: "Spotify-login mislykkedes.",
            loginCancelled: "Spotify-login blev annulleret.",
            securityError: "Sikkerhedskontrollen mislykkedes. Forbind igen.",
            expired: "Din Spotify-forbindelse er udløbet. Forbind igen.",
            forbidden: "Spotify tillader ikke denne anmodning.",
            rateLimit: "For mange anmodninger. Prøv igen senere.",
            apiError: "Spotify API-fejl",
            loadError: "Dataene kunne ikke indlæses.",
            historyError: "Lyttehistorikken er ikke tilgængelig lige nu.",
            yourMusic: "DIN MUSIK",
            spotifyDashboard: "Spotify-dashboard",
            lastplayed: "SENEST AFSPILLET",
            openSpotify: "Åbn på Spotify ↗",
            recentTitle: "Senest afspillet musik",
            dashboardSubtitle: "MUSIKAFSPILLER • PERSONLIGT DASHBOARD",
        }
    };

    function getLanguage() {
        const raw =
            document.documentElement.lang ||
            document.querySelector("[data-language]")?.dataset.language ||
            localStorage.getItem("language") ||
            localStorage.getItem("lang") ||
            "hu";

        const lang = raw.toLowerCase().split("-")[0];

        return translations[lang] ? lang : "hu";
    }

    function t(key) {
        return translations[getLanguage()][key] ||
            translations.hu[key] ||
            key;
       
    }
   
   function translateSpotifyElements() {
       const elements = {
           "[data-spotify-i18n='yourMusic']": "yourMusic",
           "[data-spotify-i18n='spotifyDashboard']": "spotifyDashboard",
           "[data-spotify-i18n='lastPlayed']": "lastPlayed",
           "[data-spotify-i18n='openSpotify']": "openSpotify",
           "[data-spotify-i18n='recentTitle']": "recentTitle",
           "[data-spotify-i18n='dashboardSubtitle']": "dashboardSubtitle"
       };

       Object.entries(elements).forEach(([selector, key]) => {
           document.querySelectorAll(selector).forEach(element => {
               element.textContent = t(key);
           });
       });
   }


    const get = (key) => sessionStorage.getItem(key);
    const set = (key, value) => sessionStorage.setItem(key, value);
    const remove = (key) => sessionStorage.removeItem(key);

    function randomString(length = 64) {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";

        const bytes = crypto.getRandomValues(new Uint8Array(length));

        return Array.from(
            bytes,
            (byte) => chars[byte % chars.length]
        ).join("");
    }

    function base64Url(buffer) {
        return btoa(String.fromCharCode(...new Uint8Array(buffer)))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, "");
    }

    async function createChallenge(verifier) {
        const data = new TextEncoder().encode(verifier);
        const digest = await crypto.subtle.digest("SHA-256", data);
        return base64Url(digest);
    }

    function setStatus(message) {
        artistElement.textContent = message;
    }

    function spotifyLink(track) {
        return track?.external_urls?.spotify ||
            "https://open.spotify.com/";
    }

    function setTrack(track, isPlaying = false) {
        if (!track) {
            trackElement.textContent = t("noMusic");
            setStatus(t("startMusic"));
            openElement.href = "https://open.spotify.com/";
            return;
        }

        trackElement.textContent = track.name || t("unknownTrack");

        artistElement.textContent = (track.artists || [])
            .map((artist) => artist.name)
            .join(", ");

        openElement.href = spotifyLink(track);
        openElement.target = "_blank";
        openElement.rel = "noopener noreferrer";
        openElement.setAttribute("aria-label", t("openSpotify"));

        const artwork = document.querySelector(".spotify-artwork");
        const imageUrl = track.album?.images?.[0]?.url;

        if (artwork) {
            artwork.replaceChildren();

            if (imageUrl) {
                const image = document.createElement("img");
                image.src = imageUrl;
                image.alt = "Album artwork: " + track.name;
                image.loading = "lazy";
                image.style.width = "100%";
                image.style.height = "100%";
                image.style.objectFit = "cover";
                artwork.appendChild(image);
            } else {
                artwork.textContent = "♫";
            }
        }

       const status = document.querySelector(
          ".spotify-live [data-spotify-i18n='lastPlayed']"
      );

      if (status) {
          status.textContent = isPlaying
              ? t("playing")
              : t("lastPlayed");
      }
    }

    function renderRecent(items) {
        recentElement.replaceChildren();

        if (!items?.length) {
            const empty = document.createElement("p");
            empty.className = "spotify-empty";
            empty.textContent = t("noHistory");
            recentElement.appendChild(empty);
            return;
        }

        items.forEach((entry, index) => {
            const track = entry.track;
            if (!track) return;

            const row = document.createElement("div");
            row.className = "spotify-track-row";

            const number = document.createElement("span");
            number.className = "spotify-track-number";
            number.textContent = String(index + 1);

            const image = document.createElement("img");
            image.alt = "";
            image.loading = "lazy";
            image.src = track.album?.images?.slice(-1)[0]?.url || "";

            image.onerror = () => {
                image.style.visibility = "hidden";
            };

            const info = document.createElement("div");
            info.className = "spotify-row-info";

            const title = document.createElement("strong");
            title.textContent = track.name || t("unknownTrack");

            const artist = document.createElement("span");
            artist.textContent = (track.artists || [])
                .map((item) => item.name)
                .join(", ");

            info.append(title, artist);

            const link = document.createElement("a");
            link.className = "spotify-row-link";
            link.href = spotifyLink(track);
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "↗";
            link.setAttribute(
                "aria-label",
                t("openSpotify") + ": " + (track.name || t("unknownTrack"))
            );

            row.append(number, image, info, link);
            recentElement.appendChild(row);
        });
    }

    async function authorize() {
        if (!CLIENT_ID) {
            setStatus(t("missingClient"));
            return;
        }

        if (!window.crypto?.subtle) {
            setStatus(t("httpsRequired"));
            return;
        }

        try {
            connectButton.disabled = true;
            connectButton.textContent = t("connecting");

            const verifier = randomString(64);
            const state = randomString(32);
            const challenge = await createChallenge(verifier);

            set(STORAGE.verifier, verifier);
            set(STORAGE.state, state);

            const params = new URLSearchParams({
                client_id: CLIENT_ID,
                response_type: "code",
                redirect_uri: REDIRECT_URI,
                scope: SCOPES.join(" "),
                code_challenge_method: "S256",
                code_challenge: challenge,
                state
            });

            window.location.assign(
                "https://accounts.spotify.com/authorize?" +
                params.toString()
            );
        } catch (error) {
            setStatus(error.message || t("loginFailed"));
            connectButton.disabled = false;
            connectButton.textContent = t("connect");
        }
    }

    async function exchangeCode(code) {
        const verifier = get(STORAGE.verifier);

        if (!verifier) {
            throw new Error(t("missingVerifier"));
        }

        const body = new URLSearchParams({
            client_id: CLIENT_ID,
            grant_type: "authorization_code",
            code,
            redirect_uri: REDIRECT_URI,
            code_verifier: verifier
        });

        const response = await fetch(TOKEN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error_description || data.error || t("loginFailed")
            );
        }

        saveTokens(data);
        remove(STORAGE.verifier);
        remove(STORAGE.state);

        return data.access_token;
    }

    function saveTokens(data) {
        set(STORAGE.token, data.access_token);

        set(
            STORAGE.expiry,
            String(Date.now() + data.expires_in * 1000)
        );

        if (data.refresh_token) {
            set(STORAGE.refresh, data.refresh_token);
        }
    }

    async function getAccessToken() {
        const token = get(STORAGE.token);
        const expiry = Number(get(STORAGE.expiry) || 0);

        if (token && Date.now() < expiry - 60000) {
            return token;
        }

        const refreshToken = get(STORAGE.refresh);

        if (!refreshToken) {
            remove(STORAGE.token);
            return null;
        }

        const response = await fetch(TOKEN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                client_id: CLIENT_ID,
                grant_type: "refresh_token",
                refresh_token: refreshToken
            })
        });

        const data = await response.json();

        if (!response.ok) {
            clearSession();
            return null;
        }

        saveTokens(data);
        return data.access_token;
    }

    async function api(path, token) {
        const response = await fetch(API + path, {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        if (response.status === 204) return null;

        if (response.status === 401) {
            clearSession();
            throw new Error(t("expired"));
        }

        if (response.status === 403) {
            throw new Error(t("forbidden"));
        }

        if (response.status === 429) {
            throw new Error(t("rateLimit"));
        }

        if (!response.ok) {
            throw new Error(t("apiError") + " (" + response.status + ").");
        }

        return response.json();
    }

    function clearSession() {
        [
            STORAGE.token,
            STORAGE.expiry,
            STORAGE.refresh,
            STORAGE.verifier,
            STORAGE.state
        ].forEach(remove);
    }

    async function loadDashboard() {
        refreshButton.disabled = true;
        refreshButton.textContent = t("loading");

        try {
            const token = await getAccessToken();

            if (!token) {
                trackElement.textContent = t("notConnected");
                setStatus(t("connectAccount"));
                renderRecent([]);
                connectButton.textContent = t("connect");
                return;
            }

            const [playbackResult, recentResult] = await Promise.allSettled([
                api("/me/player/currently-playing", token),
                api("/me/player/recently-played?limit=5", token)
            ]);

            
            if (playbackResult.status === "fulfilled") {
                const playback = playbackResult.value;

                if (playback?.item) {
                    // Van aktuális zeneszám
                    setTrack(playback.item, playback.is_playing);
                } else if (
                    recentResult.status === "fulfilled" &&
                    recentResult.value?.items?.length
                ) {
            
                   
            if (playbackResult.status === "fulfilled") {
                const playback = playbackResult.value;

                if (playback?.item && playback.currently_playing_type === "track") {
                    if (playback.is_playing) {
                     setTrack(playback.item, true);
                    } else {
                        trackElement.textContent = t("noMusic");
                        setStatus(t("startMusic"));

                        const artwork = document.querySelector(".spotify-artwork");
                        if (artwork) artwork.textContent = "♫";

                        openElement.href = "https://open.spotify.com/";
                    }
                } else {
                    trackElement.textContent = t("noMusic");
                    setStatus(t("startMusic"));

                    const artwork = document.querySelector(".spotify-artwork");
                    if (artwork) artwork.textContent = "♫";

                    openElement.href = "https://open.spotify.com/";
                }
            } else {
                setStatus(
                    playbackResult.reason?.message || t("loadError")
                );
            }


            if (recentResult.status === "fulfilled") {
                renderRecent(recentResult.value?.items || []);
            } else {
                renderRecent([]);
                setStatus(
                    recentResult.reason?.message || t("historyError")
                );
            }

            connectButton.textContent = t("connected");
        } catch (error) {
            setStatus(error.message || t("loadError"));
        } finally {
            refreshButton.disabled = false;
            refreshButton.textContent = t("refresh");
        }
    }

    
   function applyLanguage() {
       const token = get(STORAGE.token);

       connectButton.textContent = token
           ? t("connected")
           : t("connect");

       refreshButton.textContent = t("refresh");

       const status = document.querySelector(".spotify-live");

       if (status && !token) {
           status.textContent = t("notConnected");
       }

       // A Spotify statikus feliratainak fordítása
       translateSpotifyElements();

       // A Spotify-link feliratának frissítése
       openElement.textContent = t("openSpotify");
   }


    connectButton.addEventListener("click", authorize);
    refreshButton.addEventListener("click", loadDashboard);

    // Frissíti a Spotify szövegeit, ha a weboldal nyelve megváltozik.
    window.addEventListener("languageChanged", () => {
        applyLanguage();
        loadDashboard();
    });

    // Figyeli a HTML lang attribútum változását.
    if (document.documentElement) {
        const observer = new MutationObserver(() => {
            applyLanguage();
            loadDashboard();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"]
        });
    }

    async function init() {
        applyLanguage();

        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        const returnedState = params.get("state");
        const error = params.get("error");

        if (error) {
            setStatus(t("loginCancelled"));
            window.history.replaceState({}, "", REDIRECT_URI);
            return;
        }

        if (code) {
            if (!returnedState || returnedState !== get(STORAGE.state)) {
                setStatus(t("securityError"));
                clearSession();
                window.history.replaceState({}, "", REDIRECT_URI);
                return;
            }

            try {
                await exchangeCode(code);
                window.history.replaceState({}, "", REDIRECT_URI);
            } catch (err) {
                setStatus(err.message || t("loginFailed"));
                window.history.replaceState({}, "", REDIRECT_URI);
                return;
            }
        }

        await loadDashboard();
    }

    init();

    // Automatikus frissítés 30 másodpercenként.
    window.setInterval(() => {
        if (!document.hidden) {
            loadDashboard();
        }
    }, 30000);
})();


