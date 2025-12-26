/* =========================================
           SOUND FX ENGINE (Web Audio API)
           ========================================= */
        const SoundFX = {
            ctx: null,
            init: function() {
                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                this.ctx = new AudioContext();
            },
            playTone: function(freq, type, duration, vol=0.1) {
                if (!this.ctx) this.init();
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                gain.gain.setValueAtTime(vol, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + duration);
            },
            playType: function() { this.playTone(800, 'square', 0.05, 0.05); },
            playError: function() { this.playTone(150, 'sawtooth', 0.4, 0.2); },
            playSuccess: function() { 
                this.playTone(600, 'sine', 0.1, 0.1); 
                setTimeout(() => this.playTone(1200, 'sine', 0.2, 0.1), 100);
            },
            playWin: function() {
                [400, 500, 600, 800].forEach((f, i) => setTimeout(() => this.playTone(f, 'square', 0.2, 0.1), i*150));
            }
        };

        /* =========================================
           DATA CONFIGURATION
           ========================================= */
        const USER_CONFIG = {
            "angel": {
                msg: "Merry Christmas, Angel! I hope you enjoyed this short, weird project. It was a blast to work on this! It's gonna be almost 8 years since we met next year. It's been a wild ride - thank you for all the wonderful memories - from orientation day in the first day of grade 6 all the way into the new memories we will make in our second semester of college. I know life's had its ups and downs, and I know we've gone through many hardships along the way, but hey, at least we know we'll be there for each other as best friends. I sincerely hope we'll continue to be best friends for years to come. Thank you for everything and here's to a wonderful 2026!",
                audio: "music/angel.mp3",
                closedBox: "images/blue_present.png",
                openBox: "images/sylus.png",
                backgroundColor: "#4a7bff", // Lighter blue
                isLightBackground: false,
                gameType: "wordle",
                questions: [
                    { q: "What was our section in sixth grade?", a: ["amenability", "6-amenability", "6 amenability", "amenables"] },
                    { q: "What's the full name of your character in Sacred Spirit Echo?", a: ["giselle de fontaine", "giselle defontaine"] },
                    { q: "What is the title of your favorite song?", a: ["perfect", "my little island", "mylittleisland"] },
                    { q: "What substance was the focus of our Research Project?", a: ["sampaguita", "jasminum sambac", "sampaguita extract", "extract of sampaguita"] },
                    { q: "In ninth grade, what was the name of our section's radio station?", a: ["raccoon radio", "raccoonradio"]}
                ]
            },
            "jim": {
                msg: "Happy Holidays, Jim! I hope you're doing well. I know it's only been a short while since we met, but I appreciate the friendship we've built thus far. Again, thank you for letting us carpool with you after class almost everyday. Looking forward to seeing you in 2026!",
                audio: "music/jim.mp3",
                closedBox: "images/white_present.png", // Changed for Jim
                openBox: "images/jim.png",
                backgroundColor: "#f0f0f0", // Lighter white/off-white
                isLightBackground: true,
                gameType: "tictactoe",
                questions: [
                    { q: "When's the start of the second semester?", a: ["jan 14", "january 14", "january 14 2026", "14 jan", "14 january", "14 january 2026", "jan14", "14jan", "january14", "14january", "01.14.26", "14.01.26"] },
                    { q: "What's the titular 'caravan' in Caravan Comrades?", a: ["my car", "the car", "car", "rav4", "rav 4", "toyota rav 4", "rav 4 toyota"] },
                    { q: "What's your block?", a: ["bsit", "bs it", "it", "sse"] },
                    { q: "What was the name for our freshman orientation?", a: ["freshstart", "fresh start", "fresh start 2025", "freshstart 2025", "heatwave", "heat wave", "heatwave 2025", "heat wave 2025"] },
                    { q: "Will we pass the next semester?", a: ["yes", "definitely", "absolutely", "of course"] }
                ]
            },
            "luigi": {
                msg: "Merry Christmas Luigi! I hope you've been having a fun Christmas break! I always appreciate the energy you bring into everything and I hope you continue to bring that energy in the semesters to come! See you next year and here's to a successful second semester!",
                audio: "music/luigi.mp3",
                closedBox: "images/green_present.png", // Changed for Luigi
                openBox: "images/luigi.png",
                backgroundColor: "#5a9e5a", // Lighter green
                isLightBackground: false,
                gameType: "snake",
                questions: [
                    { q: "What Nintendo character do you share a name with?", a: ["luigi"] },
                    { q: "What's a subject we're not blockmates in?", a: ["englab", "english lab", "basicmath", "basic math", "englishlab", "english laboratory", "purpcomm", "purcomm", "purposivecomm", "purposive communication", "mathsci", "mathematical sciences", "math sci"] },
                    { q: "What's the car brand of Jim's car?", a: ["toyota"] },
                    { q: "What's the first name of our STS teacher?", a: ["junjun", "jun jun", "jun-jun", "sir junjun", "sir jun jun", "sir jun-jun", "mr junjun", "mr jun jun", "mr jun-jun", "mister junjun", "mister jun jun", "mister jun-jun", "mr. junjun", "mr. jun jun", "mr. jun-jun", "prof junjun", "prof jun jun", "prof jun-jun"] },
                    { q: "What day of the week was our NSTP classes?", a: ["wednesday", "wed"] }
                ]
            },
            "polinar": {
                msg: "Happy Holidays Polinar! Wishing you joy and peace. I hope you're doing well. Thank you for all the fun times and memories we've shared. Who knew in fifth grade that we'd go to the same college eventually? It's been quite the journey! Cheers to more years to come and to a successful second semester!",
                audio: "music/polinar.mp3",
                closedBox: "images/red_present.png", // Kept red for Polinar
                openBox: "images/polinar.png",
                backgroundColor: "#c44d4d", // Lighter red
                isLightBackground: false,
                gameType: "chess",
                questions: [
                    { q: "What's the nickname Luigi gave you in Caravan Comrades?", a: ["leon"] },
                    { q: "What's the name of the mad scientist in Umamusume: Pretty Derby?", a: ["tachyon", "agnes", "agnes tachyon", "tachyon agnes"] },
                    { q: "Which Terraria boss bearing the name of a monarchical title is fought in the Hallow biome?", a: ["empress of light", "eol", "el", "empressoflight"] },
                    { q: "What's the name of the main character of Sonny Boy?", a: ["nagara"] },
                    { q: "What was the final word count of our gacha research paper?", a: ["105", "one hundred and five", "one hundred five", "105 pages", "one hundred five pages", "one hundred and five pages"] }
                ]
            },
            "nisha": {
                msg: "Season's Greetings, Nisha! Enjoy your special gift.",
                audio: "music/nisha.mp3",
                closedBox: "images/white_present.png",
                openBox: "https://cdn-icons-png.flaticon.com/512/4213/4213653.png",
                backgroundColor: "#6a9bc0", // Lighter blue-gray
                isLightBackground: false,
                gameType: "rps",
                questions: [
                    { q: "What is 2 + 2?", a: ["4", "four"] },
                    { q: "Is this a simulation?", a: ["yes", "maybe"] },
                    { q: "Type 'hello'", a: ["hello"] }
                ]
            },
            "guest": {
                msg: "Welcome! This is a generic holiday greeting.",
                audio: "music/guest.mp3",
                closedBox: "images/red_present.png",
                openBox: "https://cdn-icons-png.flaticon.com/512/4213/4213653.png",
                backgroundColor: "#1a4a6a", // Lighter dark blue
                isLightBackground: false,
                gameType: "tictactoe",
                questions: [
                    { q: "What is 2 + 2?", a: ["4", "four"] },
                    { q: "Is this a simulation?", a: ["yes", "maybe"] },
                    { q: "Type 'hello'", a: ["hello"] }
                ]
            }
        };

        /* =========================================
                NARRATIVE DATA
        ========================================= */
        const NARRATIVE_DATA = {
            0: {
                comment: "fade in",
                text: "YOU ARE ON A CARAVAN ON THE ROAD.",
                nextSegment: 1
            },
            1: {
                comment: "fade in",
                text: "AND WITH THAT CARAVAN, YOU ARE GOING ON A JOURNEY.",
                nextSegment: 2
            },
            2: {
                comment: "fade in",
                text: "AND THAT JOURNEY IS NOW NEARING ITS END.",
                nextSegment: 3
            },
            3: {
                comment: "fade in",
                text: "BUT YOU ARE ASLEEP.",
                nextSegment: 4
            },
            4: {
                comment: "typewriter",
                text: "THE FAINT WHIRRING OF THE ENGINE HAS CRADLED YOU IN ITS MANGER. YOU ARE CURRENTLY NOT *AWARE* IN THE TRADITIONAL SENSE, BUT YOU DO *FEEL* THE SENSATION OF WARMTH AMIDST THE COLD, OF A WARM CUP OF COFFEE ON A RAINY DAY.",
                nextSegment: 5
            },
            5: {
                comment: "typewriter",
                text: "IT WAS A PLACE WITHOUT EDGES, A GENTLE OBLIVION. YOU COULD HAVE STAYED THERE FOR AN EON, SUSPENDED IN THAT LIQUID DARK.",
                nextSegment: 6
            },
            6: {
                comment: "typewriter",
                text: "BUT THEN, A RENDING OF THE WORLD'S FABRIC–",
                nextSegment: 7
            },
            7: {
                comment: "fast typewriter",
                text: "WAPANG! CRAK! PWOOOOOOOSH!",
                fast: true,
                nextSegment: 8
            },
            8: {
                comment: "fast typewriter",
                text: "SOUND ARRIVED FIRST, A VIOLENT TRANSLATION. YOUR BODY JOLTED BEFORE YOUR MIND COULD FOLLOW. VOICES PIERCED THE AIR, FOUR STRANDS OF PANIC BRAIDING INTO A SINGLE CORD OF CHAOS.",
                fast: true,
                nextSegment: 9
            },
            9: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"-AAAAAAHHHH! WHAT HAPPENED-\"[/color]",
                nextSegment: 10
            },
            10: {
                comment: "typewriter; comment: color #f0f0f0",
                text: "[color=#f0f0f0]\"-I dunno it kinda just-\"[/color]",
                nextSegment: 11
            },
            11: {
                comment: "typewriter; comment: color #5a9e5a",
                text: "[color=#5a9e5a]\"-Guys relax we can-\"[/color]",
                nextSegment: 12
            },
            12: {
                comment: "typewriter; comment: color #c44d4d",
                text: "[color=#c44d4d]\"-What the skibidi-\"[/color]",
                nextSegment: 13
            },
            13: {
                comment: "typewriter",
                text: "CONSCIOUSNESS WAVERED, A TIDE PULLING BACK. THE METALLIC SCRAPE OF A DOOR HINGE. THE GLUE OF SLEEP STILL GUMBED YOUR EYELIDS SHUT. THE WORLD PAINTED ITSELF IN SMEARS OF COLOR AND MEANINGLESS LIGHT. YOUR GLASSES WERE GONE. A SMALL, SIGNIFICANT ABSENCE. WHERE WILL YOU SEARCH FOR THEM?",
                nextSegment: 14
            },
            14: {
                comment: "player choice",
                text: "",
                choices: [
                    {
                        text: "near my feet, that's always the best place!",
                        nextSegment: 15
                    },
                    {
                        text: "probably fell on my lap",
                        nextSegment: 21
                    },
                    {
                        text: "on the lap of the one seated next to me",
                        nextSegment: 26
                    }
                ]
            },
            // Path 1: Search near feet
            15: {
                comment: "player choice 1 dialogue start",
                text: "YOUR HAND GROPED THROUGH THE DARK SPACE NEAR YOUR FEET. YOUR FINGERS MET ONLY DUST AND THE GRIT OF THE CAR'S ANCIENT CARPET, FINE AS POWDERED BONE. NOTHING.",
                nextSegment: 16
            },
            16: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"Aaand Nathan's awake! Oy! Oy! Guys! Polinar! Jim! Luigi! Oh my goodness, they're deaf.\"[/color]",
                nextSegment: 17
            },
            17: {
                comment: "typewriter",
                text: "A PRESENCE SHIFTED BESIDE YOU, SENSING YOUR FRANTIC MOVEMENT.",
                nextSegment: 18
            },
            18: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"Looking for this?\"[/color]",
                nextSegment: 19
            },
            19: {
                comment: "typewriter",
                text: "THE FRAMES SLID INTO YOUR HAND, STILL WARM. ANGEL. YOU HOOKED THEM OVER YOUR EARS, AND THE WORLD SNAPPED INTO ITS USUAL, FAULTY CLARITY.",
                nextSegment: 20
            },
            20: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"Blind ahh.\"[/color]",
                playerDialogue: "Give me some grace, I just woke up haha. What the helly is going on?",
                nextSegment: 30
            },
            // Path 2: Search on lap
            21: {
                comment: "player choice 2 dialogue start",
                text: "YOUR HAND MOVED TO YOUR LAP, A JOURNEY OF SIX INCHES. THERE, YOUR FINGERS CLOSED AROUND THE COOL, FAMILIAR ARCH OF TEMPLE AND LENS. A SMALL MIRACLE OF ORDER. YOU PUT THEM ON.",
                nextSegment: 22
            },
            22: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"Aaand Nathan's awake! Oy! Oy! Guys! Polinar! Jim! Luigi! Oh my goodness, they're deaf.\"[/color]\n\nIT WAS ANGEL.",
                nextSegment: 23
            },
            23: {
                text: "",
                playerDialogue: "Wha- what the hell is going on?",
                nextSegment: 30
            },
            // Path 3: Search neighbor's lap
            26: {
                comment: "player choice 3 dialogue start",
                text: "YOU REACHED TOWARD THE INDISTINCT SHAPE BESIDE YOU, YOUR HAND ENCROACHING ON FOREIGN TERRITORY.",
                nextSegment: 27
            },
            27: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"Hey! Hey!\"[/color]",
                nextSegment: 28
            },
            28: {
                comment: "typewriter",
                text: "ANGEL. A SNAP OF FINGERS. SHE GESTURED TO HER OTHER HAND, WHICH HELD YOUR GLASSES ALOFT, A PEACEFUL SURRENDER.",
                nextSegment: 29
            },
            29: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"Here.\"[/color]\n\nSHE PLACED THEM IN YOUR WAITING PALM. THEY HAD BEEN ON YOUR LAP ALL ALONG. YOU PUT THEM ON.",
                nextSegment: 20
            },
            // Continue from all paths
            30: {
                comment: "normal dialogue after any player choice",
                text: "[color=#4a7bff]\"The car broke down. I have no idea how the guys are doing outside, and I don't think we're getting home. It's a travesty!\"[/color]",
                nextSegment: 31
            },
            31: {
                comment: "typewriter",
                text: "YOU LOOKED OUT THE WINDOW. THE SCENE WAS A SILENT FILM: JIM AND POLINAR BENT OVER A WILTED TIRE LIKE SURGEONS OVER A FAILING ORGAN. LUIGI STOOD APART, STARING DOWN THE EMPTY ROAD, HIS FOOT TAPPING A TATTOO ONLY HE COULD HEAR.",
                nextSegment: 32
            },
            32: {
                comment: "player choice",
                text: "",
                choices: [
                    {
                        text: "what?!",
                        nextSegment: 33
                    },
                    {
                        text: "bruh, we're gonna have to sleep here!",
                        nextSegment: 35
                    }
                ]
            },
            33: {
                comment: "player choice 1 dialogue start",
                text: "[color=#4a7bff]\"Yep! And we're in the middle of nowhere, out of the main roads!\"[/color]",
                nextSegment: 34
            },
            35: {
                comment: "player choice 2 dialogue start",
                text: "[color=#4a7bff]\"No, don't jinx us! I don't know how I'm going to explain this to my parents. We're in the middle of nowhere too, out of the main roads!\"[/color]",
                nextSegment: 34
            },
            34: {
                comment: "normal dialogue after any player choice",
                text: "THE CAR DOOR GROANED OPEN AGAIN, ADMITTING A RUSH OF HUMID, UNFAMILIAR AIR.",
                nextSegment: 36
            },
            36: {
                comment: "typewriter; comment: color #f0f0f0",
                text: "[color=#f0f0f0]\"Okay, I think I found the problem.\"[/color]",
                nextSegment: 37
            },
            37: {
                comment: "typewriter",
                text: "IT WAS JIM. HIS FACE WAS A MASK OF SWEAT AND ROAD GRIME, HIS EYES DARK WITH CONCENTRATION.",
                nextSegment: 38
            },
            38: {
                comment: "typewriter; comment: color #f0f0f0",
                text: "[color=#f0f0f0]\"There was a dang nail on the road. This one. Pierced one of our tires.\"[/color]",
                nextSegment: 39
            },
            39: {
                comment: "typewriter",
                text: "BETWEEN HIS GLOVED FINGERS, HE HELD A NAIL. IT WAS LONG, SAVAGE, AND WEATHERED TO THE COLOR OF OLD BLOOD.",
                nextSegment: 40
            },
            40: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"Yeesh! What's with our luck?!\"[/color]",
                nextSegment: 41
            },
            41: {
                comment: "typewriter",
                text: "THEN, MOTION. LUIGI BROKE FROM HIS VIGIL AT THE ROAD'S EDGE AND LOPED TOWARD THEM, HIS MOVEMENTS SUDDENLY ANIMATED.",
                nextSegment: 42
            },
            42: {
                comment: "typewriter; comment: color #5a9e5a",
                text: "[color=#5a9e5a]\"No, I think we had to get stranded this way. It was the only way.\"[/color]",
                nextSegment: 43
            },
            43: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"What?!\"[/color]",
                nextSegment: 44
            },
            44: {
                comment: "typewriter; comment: color #f0f0f0",
                text: "[color=#f0f0f0]\"What the f*ck are you talking about Luigi?\"[/color]",
                nextSegment: 45
            },
            45: {
                text: "",
                playerDialogue: "He's gone crazy.",
                nextSegment: 46
            },
            46: {
                comment: "typewriter; comment: color #5a9e5a",
                text: "[color=#5a9e5a]\"We had to strand ourselves so we could get help. Look- HELP US PLEASE! ANYONE OUT THERE, PLEASE COME HE-!\"[/color]",
                nextSegment: 47
            },
            47: {
                comment: "typewriter",
                text: "JIM'S HAND SHOOT OUT, MUFFLING THE SHOUT AGAINST LUIGI'S JACKET.",
                nextSegment: 48
            },
            48: {
                comment: "typewriter; comment: color #f0f0f0",
                text: "[color=#f0f0f0]\"Yo, chill, what if someone actually hears us? We're cooked here if a holdapper pulls up.\"[/color]",
                nextSegment: 49
            },
            49: {
                comment: "typewriter; comment: color #5a9e5a",
                text: "[color=#5a9e5a]\"I know they won't be.\"[/color]",
                nextSegment: 50
            },
            50: {
                text: "",
                playerDialogue: "How?",
                nextSegment: 51
            },
            51: {
                comment: "typewriter; comment: color #5a9e5a",
                text: "[color=#5a9e5a]\"They told me.\"[/color]",
                nextSegment: 52
            },
            52: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"Who's they?\"[/color]",
                nextSegment: 53
            },
            53: {
                comment: "typewriter",
                text: "OUTSIDE, POLINAR TURNED AWAY FROM THE TIRE, HIS GAZE LIFTING TO THE ROAD'S VANISHING POINT.",
                nextSegment: 54
            },
            54: {
                comment: "typewriter; comment: color #5a9e5a",
                text: "[color=#5a9e5a]\"Them.\"[/color]",
                nextSegment: 55
            },
            55: {
                comment: "typewriter",
                text: "A SOUND, THEN. A DEEP, VIBRANT HUM THAT GREW FROM A WHISPER TO A ROAR, FILLING THE SPACES BETWEEN THE TREES. THE SONG OF A MOTORCYCLE.",
                nextSegment: 56
            },
            56: {
                comment: "typewriter; comment: color #c44d4d",
                text: "[color=#c44d4d]\"Guys, someone's coming.\"[/color]",
                nextSegment: 57
            },
            57: {
                comment: "typewriter",
                text: "THE BIKE SLID TO A HALT BESIDE THE CAR, DUST SETTLING AROUND IT LIKE A VEIL. A FIGURE DISMOUNTED, ANONYMOUS IN ITS HELMET. POLINAR AND LUIGI MOVED FORWARD. JIM, ANGEL, AND YOU HELD BACK.",
                nextSegment: 58
            },
            58: {
                comment: "typewriter; comment: color #c44d4d",
                text: "[color=#c44d4d]\"We should get this guy to help us.\"[/color]",
                nextSegment: 59
            },
            59: {
                comment: "typewriter; comment: color #5a9e5a",
                text: "[color=#5a9e5a]\"Told ya.\"[/color]",
                nextSegment: 60
            },
            60: {
                comment: "typewriter",
                text: "JIM STEPPED OUT TO JOIN THEM, HIS POSTURE WARY.",
                nextSegment: 61
            },
            61: {
                comment: "typewriter; comment: color #f0f0f0",
                text: "[color=#f0f0f0]\"Yoyoyo, I don't know who this guy is, but we have to be careful.\"[/color]",
                nextSegment: 62
            },
            62: {
                comment: "typewriter",
                text: "INSIDE THE CAR, YOU AND ANGEL BECAME STATUES. YOU HELD YOUR BREATH, AS IF EVEN THE SOUND OF YOUR BLOOD MIGHT DRAW ATTENTION.",
                nextSegment: 63
            },
            63: {
                comment: "typewriter; comment: color #5a9e5a",
                text: "[color=#5a9e5a]\"I mean look at his face, isn't he trustworthy?\"[/color]",
                nextSegment: 64
            },
            64: {
                comment: "typewriter",
                text: "YOU SAW THE MOTORIST REACH FOR HIS HELMET. BUT AS HE LIFTED IT, JIM'S BODY BLOCKED THE VIEW. INSTEAD, A LIGHT BLOOMED—PURE, WHITE, AND PAINFUL. IT WAS NOT THE LIGHT OF SUN OR LAMP, BUT OF SOMETHING EMPTYING ITSELF INTO THE WORLD. YOU FLINCHED, BURYING YOUR FACE AGAINST THE SEAT WITH ANGEL.",
                nextSegment: 65
            },
            65: {
                comment: "typewriter; comment: color #f0f0f0",
                text: "[color=#f0f0f0]\"No you're right. Angel, Nathan, could you come over here?\"[/color]",
                nextSegment: 66
            },
            66: {
                comment: "typewriter",
                text: "THE VOICE WAS JIM'S, YET IT WASN'T. IT CARRIED A FLAT, ECHOING QUALITY, LIKE A RECORDING PLAYED IN AN EMPTY ROOM. ANGEL'S EYES WIDE, SHE SHOOK HER HEAD, A FRANTIC, SILENT PLEA.",
                nextSegment: 67
            },
            67: {
                comment: "player choice",
                text: "",
                choices: [
                    {
                        text: "stay in the car",
                        nextSegment: 68
                    },
                    {
                        text: "join them",
                        nextSegment: 76
                    }
                ]
            },
            // Path: Stay in the car
            68: {
                comment: "choice 1 - stay in the car start",
                text: "YOU BOTH SHRANK LOWER, MAKING YOURSELVES SMALL IN THE CAVE OF THE CAR. YOUR ELBOWS BRUSHED, A SHARP, CLUMSY NOISE IN THE QUIET.",
                nextSegment: 69
            },
            69: {
                comment: "typewriter",
                text: "HEAVY FOOTFALLS APPROACHED. A KNOCK ON THE GLASS, POLITE AND TERRIBLE. \"JIM\" STOOD OUTSIDE. HE DID NOT SPEAK AGAIN, ONLY REPEATED THE INVITATION, A BROKEN RECORD: *COULD YOU COME OVER HERE?*",
                nextSegment: 70
            },
            70: {
                comment: "typewriter",
                text: "ANGEL'S BREATH HISSED BETWEEN HER TEETH. A CURSE, OR A PRAYER.",
                nextSegment: 71
            },
            71: {
                comment: "typewriter",
                text: "OTHER SHAPES CONVERGED. \"LUIGI\" AND \"POLINAR\" TOOK THEIR PLACES AT THE WINDOWS. THEIR MOUTHS MOVED IN PERFECT SYNCHRONY, ECHOING THE SAME HOLLOW PHRASE. *COULD YOU COME OVER HERE. COULD YOU COME OVER HERE.*",
                nextSegment: 72
            },
            72: {
                comment: "typewriter",
                text: "ANGEL LEANED IN, HER LIPS ALMOST TOUCHING YOUR EAR.",
                nextSegment: 73
            },
            73: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"I think I have a plan. But you're gonna have to listen to me? Is that good with you?\"[/color]",
                nextSegment: 74
            },
            74: {
                text: "",
                playerDialogue: "Yes.",
                nextSegment: 75
            },
            75: {
                comment: "typewriter",
                text: "A WHISPER, BUT IT RANG OUT LIKE A SHOUT IN A TOMB. THE THREE DOORS OPENED AT ONCE. THE FIGURES LEANED IN, AND THEIR FACES WERE REVEALED. IT WAS NOT MONSTROSITY, BUT AN ABSENCE SO COMPLETE IT FELT LIKE A BLOW. THEN, THE WHITE LIGHT RETURNED, NOT FROM OUTSIDE, BUT FROM WITHIN THEM. IT POURED INTO THE CAR, FILLING YOUR EYES, YOUR MOUTH, YOUR LUNGS.\n\nFIRST, A COLD, ANIMAL TERROR, SHARP AS THE RUSTY NAIL.\n\nTHEN, A DEEP, WOOLLY SORROW, FOR EVERYTHING YOU HAD AND HAD NOT DONE.\n\nFINALLY, A BLISSFUL DISSOLUTION. THE BOUNDARIES MELTED. YOU WERE NO LONGER A SELF, BUT A PART OF THE SILENT, SHINING WHOLE.",
                nextSegment: 83
            },
            // Path: Join them
            76: {
                comment: "choice 2 - join them start",
                text: "OBLIVIOUS, OR PERHAPS WILLING THE NORMALCY BACK, YOU CALLED OUT.",
                nextSegment: 77
            },
            77: {
                text: "",
                playerDialogue: "Yes.",
                nextSegment: 78
            },
            78: {
                comment: "typewriter; comment: color #4a7bff",
                text: "[color=#4a7bff]\"YOU IDIOT!\"[/color]",
                nextSegment: 79
            },
            79: {
                comment: "typewriter",
                text: "ANGEL'S CRY WAS THE LAST DISTINCT THING YOU HEARD. THE DOORS BURST OPEN. THE FIGURES LEANED IN. THEIR FACES WERE NOT FACES, BUT PORTALS TO A BLINDING, FEATURELESS DAWN. THE LIGHT SWALLOWED YOU WHOLE.\n\nFIRST, A PIERCING, WIRE-TAUT FEAR.\n\nTHEN, A SORROW AS VAST AND DARK AS A NIGHT SEA.\n\nTHEN, A BLISS THAT ERASED ALL ELSE. YOU WERE SCATTERED, THEN GATHERED. YOU WERE ONE WITH THE PULSING, RADIANT ALL.",
                nextSegment: 83
            },
            // End
            83: {
                comment: "END",
                text: "[END OF TRANSMISSION]\n\n[RETURNING TO PRIMARY PROTOCOL...]",
                nextSegment: undefined // Ends narrative
            }
        };

        const USER_DATABASE = {
            "angel": USER_CONFIG.angel,
            "isabel": USER_CONFIG.angel,
            "llanes": USER_CONFIG.angel,
            "angela": USER_CONFIG.angel,
            "kuragari": USER_CONFIG.angel,
            "kura": USER_CONFIG.angel,
            "angel llanes": USER_CONFIG.angel,
            "isabel llanes": USER_CONFIG.angel,
            "angela llanes": USER_CONFIG.angel,
            "isabel angela llanes": USER_CONFIG.angel,
            "isabel angela p llanes": USER_CONFIG.angel,
            "isabel angela p. llanes": USER_CONFIG.angel,
            "isabel angela perez llanes": USER_CONFIG.angel,
            "llanes, isabel": USER_CONFIG.angel,
            "llanes, angela": USER_CONFIG.angel,
            "llanes, angel": USER_CONFIG.angel,
            "llanes, isabel angela": USER_CONFIG.angel,
            "llanes, isabel angela perez": USER_CONFIG.angel,
            "llanes, isabel angela p.": USER_CONFIG.angel,
            "llanes, isabel angela p": USER_CONFIG.angel,
            "jim": USER_CONFIG.jim,
            "beberino": USER_CONFIG.jim,
            "jim beberino": USER_CONFIG.jim,
            "jim lauren beberino": USER_CONFIG.jim,
            "beberino, jim": USER_CONFIG.jim,
            "beberino, jim lauren": USER_CONFIG.jim,
            "luigi": USER_CONFIG.luigi,
            "james": USER_CONFIG.luigi,
            "belgar": USER_CONFIG.luigi,
            "james luigi belgar": USER_CONFIG.luigi,
            "belgar, james luigi": USER_CONFIG.luigi,
            "belgar, luigi" : USER_CONFIG.luigi,
            "belgar, james": USER_CONFIG.luigi,
            "polinar": USER_CONFIG.polinar,
            "gabriel": USER_CONFIG.polinar,
            "gab": USER_CONFIG.polinar,
            "leo": USER_CONFIG.polinar,
            "leonardo": USER_CONFIG.polinar,
            "leon": USER_CONFIG.polinar,
            "pol": USER_CONFIG.polinar,
            "gabriel polinar": USER_CONFIG.polinar,
            "gabriel leonardo polinar": USER_CONFIG.polinar,
            "gabriel leonardo b polinar": USER_CONFIG.polinar,
            "gabriel leonardo b. polinar": USER_CONFIG.polinar,
            "polinar, gabriel": USER_CONFIG.polinar,
            "polinar, gabriel leonardo": USER_CONFIG.polinar,
            "polinar, gabriel leonardo b.": USER_CONFIG.polinar,
            "polinar, gabriel leonardo b": USER_CONFIG.polinar,
            "nisha": USER_CONFIG.nisha,
            "guest": USER_CONFIG.guest
        };

        /* =========================================
           APPLICATION CONTROLLER
           ========================================= */
        const app = {
            user: null,
            state: 'login', 
            quizIndex: 0,
            quizStrikes: 0,
            clicksToOpen: 5,
            clickCount: 0,
            isGiftOpen: false,
            audio: document.getElementById('bg-music'),
            audioPre: document.getElementById('bg-music-pre'),
            typewriterInterval: null, // Track typewriter interval
            isTyping: false, // Prevent actions during typing
            narrativeIndex: 0,
            narrativePath: null,
            narrativeChoices: [],
            narrativeTyping: false,
            narrativeTypeInterval: null,

            /* --- LOGIN LOGIC --- */
            attemptLogin: function() {
                SoundFX.init(); // Init Audio Context on first interaction
                const input = document.getElementById('name-input');
                const val = input.value.trim().toLowerCase();
                const error = document.getElementById('login-error');

                if (USER_DATABASE[val]) {
                    this.user = USER_DATABASE[val];
                    this.quizIndex = 0;
                    this.quizStrikes = 0;
                    SoundFX.playSuccess();
                    this.startPreGiftMusic();
                    this.transition('login-screen', 'quiz-screen', () => this.startQuiz());
                } else {
                    SoundFX.playError();
                    this.triggerShake('login-screen');
                    error.style.opacity = 1;
                    input.value = "";
                }
            },

            startPreGiftMusic: function () {
                if (this.audioPre) {
                    this.audioPre.src = "music/bgm.mp3";
                    this.audioPre.volume = 0.3;
                    this.audioPre.loop = true;
                    this.audioPre.play().catch(e => console.log("Pre-gift audio blocked", e));
                }
            },

            stopPreGiftMusic: function () {
                if (this.audioPre) {
                    this.audioPre.pause();
                    this.audioPre.currentTime = 0;
                }
            },

            /* --- QUIZ LOGIC --- */
            startQuiz: function() {
                this.loadQuestion();
                document.getElementById('quiz-input').addEventListener("keypress", (e) => {
                    if (e.key === "Enter" && !this.isTyping) this.submitQuizAnswer();
                });
            },

            loadQuestion: function() {
                // Clear any existing typewriter
                if (this.typewriterInterval) {
                    clearInterval(this.typewriterInterval);
                    this.typewriterInterval = null;
                }
                
                this.isTyping = true;
                
                const qObj = this.user.questions[this.quizIndex];
                const display = document.getElementById('quiz-question');
                const progress = document.getElementById('quiz-progress');
                const input = document.getElementById('quiz-input');
                const error = document.getElementById('quiz-error');
                const verifyBtn = document.querySelector('#quiz-screen .action-btn');

                progress.textContent = `SECURITY CHECK: ${this.quizIndex + 1}/${this.user.questions.length}`;
                input.value = "";
                input.disabled = true;
                verifyBtn.disabled = true;
                error.style.opacity = 0;
                
                // Typewriter effect with sound
                display.textContent = "";
                let i = 0;
                const txt = qObj.q;
                
                const typeNextChar = () => {
                    if (i < txt.length) {
                        display.textContent += txt.charAt(i);
                        if(i % 3 === 0) SoundFX.playType();
                        i++;
                        this.typewriterInterval = setTimeout(typeNextChar, 40);
                    } else {
                        // Typewriter complete
                        this.typewriterInterval = null;
                        this.isTyping = false;
                        input.disabled = false;
                        verifyBtn.disabled = false;
                        input.focus();
                    }
                };
                
                // Start typewriter
                typeNextChar();
            },

            submitQuizAnswer: function() {
                // Prevent submission while typing
                if (this.isTyping) return;
                
                const input = document.getElementById('quiz-input');
                const error = document.getElementById('quiz-error');
                const val = input.value.trim().toLowerCase();
                const qObj = this.user.questions[this.quizIndex];

                if (qObj.a.includes(val)) {
                    SoundFX.playSuccess();
                    this.quizIndex++;
                    if (this.quizIndex >= this.user.questions.length) {
                        this.transition('quiz-screen', 'game-screen', () => this.startGame());
                    } else {
                        // Clear any pending timeouts/intervals
                        if (this.typewriterInterval) {
                            clearTimeout(this.typewriterInterval);
                            this.typewriterInterval = null;
                        }
                        this.loadQuestion();
                    }
                } else {
                    SoundFX.playError();
                    this.quizStrikes++;
                    this.triggerShake('quiz-screen');
                    error.textContent = `INCORRECT. STRIKES: ${this.quizStrikes}/2`;
                    error.style.opacity = 1;
                    input.value = "";
                    
                    if (this.quizStrikes >= 2) {
                        setTimeout(() => {
                            alert("SECURITY LOCKOUT. RESETTING SYSTEM.");
                            this.resetSite();
                        }, 500);
                    }
                }
            },

            /* --- GAME LOGIC ROUTING --- */
            startGame: function() {
                const type = this.user.gameType || "wordle";
                const title = document.getElementById('game-title');
                const instructions = document.getElementById('game-instructions');
                const area = document.getElementById('game-area');
                
                area.innerHTML = ""; 

                if (type === 'tictactoe') {
                    title.textContent = "TIC TAC TOE PROTOCOL";
                    instructions.textContent = "DEFEAT THE AI TO PROCEED.";
                    GameEngine.tictactoe(area);
                } else if (type === 'rps') {
                    title.textContent = "RPS PROTOCOL";
                    instructions.textContent = "BEST OF 3 ROUNDS AGAINST THE AI.";
                    GameEngine.rps(area);
                } else if (type === 'snake') {
                    title.textContent = "SNAKE PROTOCOL";
                    instructions.textContent = "CONSUME 10 UNITS TO UNLOCK. ARROW KEYS TO MOVE.";
                    GameEngine.snake(area);
                } else if (type === 'chess') {
                    title.textContent = "CHESS PUZZLE PROTOCOL";
                    instructions.textContent = "WHITE TO MOVE. MATE IN 1. USE NOTATION (e.g. 'Rh8').";
                    GameEngine.chess(area);
                } else {
                    title.textContent = "WORDLE PROTOCOL";
                    instructions.textContent = "GUESS THE 5-LETTER PASSWORD.";
                    GameEngine.wordle(area);
                }
            },

            /* --- NARRATIVE LOGIC --- */
            gameWon: function() {
                SoundFX.playWin();
                const status = document.getElementById('game-status');
                status.style.color = "#00ff00";
                status.textContent = "CHALLENGE COMPLETE. ACCESS GRANTED.";
                setTimeout(() => {
                    // Changed: Go to narrative prompt instead of gift directly
                    this.transition('game-screen', 'narrative-prompt-screen', () => {
                        // Focus for keyboard input
                        document.querySelector('#narrative-prompt-screen .action-btn').focus();
                    });
                }, 1500);
            },

            skipNarrative: function() {
                SoundFX.playSuccess();
                this.transition('narrative-prompt-screen', 'gift-screen', () => this.initGift());
            },

            startNarrative: function() {
                SoundFX.playSuccess();
                this.narrativeIndex = 0;
                this.narrativePath = 'default';
                this.narrativeChoices = [];
                
                this.transition('narrative-prompt-screen', 'narrative-screen', () => {
                    this.loadNarrativeSegment(0);
                    // Add keyboard shortcuts for choices
                    document.addEventListener('keydown', (e) => {
                        if (e.key >= '1' && e.key <= '3' && !this.narrativeTyping) {
                            const choiceIndex = parseInt(e.key) - 1;
                            const choiceBtn = document.querySelectorAll('#narrative-choices .choice-btn')[choiceIndex];
                            if (choiceBtn) choiceBtn.click();
                        }
                    });
                });
            },

            loadNarrativeSegment: function(segmentId) {
                if (this.narrativeTypeInterval) {
                    clearInterval(this.narrativeTypeInterval);
                    this.narrativeTypeInterval = null;
                }
                
                // Remove any existing continue handler
                if (this.narrativeContinueHandler) {
                    document.removeEventListener('keydown', this.narrativeContinueHandler);
                    this.narrativeContinueHandler = null;
                }
                
                this.narrativeTyping = true;
                const segment = NARRATIVE_DATA[segmentId];
                const textContainer = document.getElementById('narrative-text');
                const dialogueContainer = document.getElementById('narrative-dialogue');
                const choicesContainer = document.getElementById('narrative-choices');
                const progressDisplay = document.getElementById('narrative-progress');
                
                // Clear previous content
                textContainer.innerHTML = '';
                dialogueContainer.innerHTML = '';
                choicesContainer.innerHTML = '';
                
                // Display comment if exists
                if (segment.comment) {
                    const comment = document.createElement('div');
                    comment.innerHTML = `<span style="color: #666;">// ${segment.comment}</span>`;
                    textContainer.appendChild(comment);
                }
                
                // Display transition if exists
                if (segment.transition) {
                    const trans = document.createElement('div');
                    trans.innerHTML = `<span style="color: #888;">[trans.: ${segment.transition}]</span>`;
                    textContainer.appendChild(trans);
                }
                
                // Function to show buttons after text is complete
                const showButtons = () => {
                    this.narrativeTyping = false;
                    
                    // Display player dialogue if exists
                    if (segment.playerDialogue) {
                        const playerDiv = document.createElement('div');
                        playerDiv.style.color = '#fff';
                        playerDiv.style.fontWeight = 'bold';
                        playerDiv.style.marginTop = '10px';
                        playerDiv.style.borderLeft = '2px solid #fff';
                        playerDiv.style.paddingLeft = '10px';
                        playerDiv.textContent = `YOU: "${segment.playerDialogue}"`;
                        dialogueContainer.appendChild(playerDiv);
                    }
                    
                    // Display choices if they exist
                    if (segment.choices && segment.choices.length > 0) {
                        segment.choices.forEach((choice, index) => {
                            const btn = document.createElement('button');
                            btn.className = 'choice-btn';
                            btn.textContent = `(${index + 1}) ${choice.text}`;
                            btn.style.display = 'block';
                            btn.style.width = '100%';
                            btn.style.marginBottom = '5px';
                            btn.style.padding = '8px';
                            btn.style.textAlign = 'left';
                            btn.style.background = 'rgba(0,0,0,0.3)';
                            btn.style.border = '1px solid #666';
                            btn.style.color = '#aaa';
                            btn.style.cursor = 'pointer';
                            btn.onclick = () => {
                                if (this.narrativeTyping) return;
                                SoundFX.playType();
                                this.narrativeChoices.push(index + 1);
                                this.loadNarrativeSegment(choice.nextSegment);
                            };
                            choicesContainer.appendChild(btn);
                        });
                    } else if (segment.nextSegment !== undefined) {
                        // Add a Continue button instead of auto-advancing
                        const continueBtn = document.createElement('button');
                        continueBtn.className = 'choice-btn';
                        continueBtn.textContent = 'CONTINUE →';
                        continueBtn.style.display = 'block';
                        continueBtn.style.width = '100%';
                        continueBtn.style.marginTop = '15px';
                        continueBtn.style.padding = '10px';
                        continueBtn.style.textAlign = 'center';
                        continueBtn.style.background = 'rgba(0,0,0,0.3)';
                        continueBtn.style.border = '1px solid #666';
                        continueBtn.style.color = '#aaa';
                        continueBtn.style.cursor = 'pointer';
                        continueBtn.style.fontWeight = 'bold';
                        continueBtn.onclick = () => {
                            if (this.narrativeTyping) return;
                            SoundFX.playType();
                            this.loadNarrativeSegment(segment.nextSegment);
                        };
                        
                        // Also allow Enter/Space to continue
                        const continueHandler = (e) => {
                            if ((e.key === 'Enter' || e.key === ' ') && !this.narrativeTyping) {
                                e.preventDefault();
                                SoundFX.playType();
                                this.loadNarrativeSegment(segment.nextSegment);
                                document.removeEventListener('keydown', continueHandler);
                            }
                        };
                        document.addEventListener('keydown', continueHandler);
                        
                        // Store handler for cleanup
                        this.narrativeContinueHandler = continueHandler;
                        
                        choicesContainer.appendChild(continueBtn);
                    } else {
                        // End of narrative
                        const endBtn = document.createElement('button');
                        endBtn.className = 'choice-btn';
                        endBtn.textContent = 'PROCEED TO GIFT →';
                        endBtn.style.display = 'block';
                        endBtn.style.width = '100%';
                        endBtn.style.marginTop = '15px';
                        endBtn.style.padding = '12px';
                        endBtn.style.textAlign = 'center';
                        endBtn.style.background = 'rgba(0,255,0,0.1)';
                        endBtn.style.border = '1px solid #0f0';
                        endBtn.style.color = '#0f0';
                        endBtn.style.cursor = 'pointer';
                        endBtn.style.fontWeight = 'bold';
                        endBtn.onclick = () => {
                            if (this.narrativeTyping) return;
                            SoundFX.playSuccess();
                            this.transition('narrative-screen', 'gift-screen', () => this.initGift());
                        };
                        choicesContainer.appendChild(endBtn);
                    }
                    
                    // Update progress
                    const progress = Math.min(100, Math.round((segmentId / (Object.keys(NARRATIVE_DATA).length - 1)) * 100));
                    progressDisplay.textContent = `${progress}%`;
                    
                    // Scroll to bottom
                    textContainer.scrollTop = textContainer.scrollHeight;
                    dialogueContainer.scrollTop = dialogueContainer.scrollHeight;
                };
                
                // If segment has no text, show buttons immediately
                if (!segment.text || segment.text.trim() === '') {
                    showButtons();
                    return;
                }
                
                // Typewriter effect for main text
                let textIndex = 0;
                const textLines = segment.text.split('\n');
                
                const typeNextLine = () => {
                    if (textIndex < textLines.length) {
                        const line = textLines[textIndex];
                        const lineDiv = document.createElement('div');
                        lineDiv.style.marginBottom = '5px';
                        textContainer.appendChild(lineDiv);
                        
                        let charIndex = 0;
                        const typeChar = () => {
                            if (charIndex < line.length) {
                                // Check for color tags
                                if (line.charAt(charIndex) === '[' && line.substring(charIndex, charIndex + 7) === '[color=') {
                                    const endTag = line.indexOf(']', charIndex);
                                    const color = line.substring(charIndex + 7, endTag);
                                    const textEnd = line.indexOf('[/color]', endTag);
                                    const coloredText = line.substring(endTag + 1, textEnd);
                                    
                                    const span = document.createElement('span');
                                    span.style.color = color;
                                    span.textContent = coloredText;
                                    lineDiv.appendChild(span);
                                    
                                    charIndex = textEnd + 8;
                                    SoundFX.playType();
                                    this.narrativeTypeInterval = setTimeout(typeChar, segment.fast ? 10 : 40);
                                    return;
                                }
                                
                                lineDiv.textContent += line.charAt(charIndex);
                                if (charIndex % 3 === 0) SoundFX.playType();
                                charIndex++;
                                this.narrativeTypeInterval = setTimeout(typeChar, segment.fast ? 10 : 40);
                            } else {
                                textIndex++;
                                this.narrativeTypeInterval = setTimeout(typeNextLine, 100);
                            }
                        };
                        
                        typeChar();
                    } else {
                        // Text complete
                        showButtons();
                    }
                };
                
                typeNextLine();
                
                const skipClickHandler = () => {
                    if (this.narrativeTyping) {
                        // Stop all typing immediately
                        clearInterval(this.narrativeTypeInterval);
                        this.narrativeTypeInterval = null;
                        
                        // Clear the text container
                        textContainer.innerHTML = '';
                        
                        // Display comment if exists
                        if (segment.comment) {
                            const comment = document.createElement('div');
                            comment.innerHTML = `<span style="color: #666;">// ${segment.comment}</span>`;
                            textContainer.appendChild(comment);
                        }
                        
                        // Display transition if exists
                        if (segment.transition) {
                            const trans = document.createElement('div');
                            trans.innerHTML = `<span style="color: #888;">[trans.: ${segment.transition}]</span>`;
                            textContainer.appendChild(trans);
                        }
                        
                        // Display full text with proper color processing
                        if (segment.text && segment.text.trim() !== '') {
                            const textDiv = document.createElement('div');
                            textDiv.style.marginBottom = '10px';
                            textDiv.style.whiteSpace = 'pre-wrap';
                            textDiv.style.lineHeight = '1.5';
                            
                            // Process the text for color tags
                            let processedText = segment.text;
                            let htmlContent = '';
                            let currentPos = 0;
                            
                            // Find all [color] tags
                            while (currentPos < processedText.length) {
                                const colorStart = processedText.indexOf('[color=', currentPos);
                                
                                if (colorStart === -1) {
                                    // No more color tags, add remaining text
                                    htmlContent += processedText.substring(currentPos)
                                        .replace(/\[color=[^\]]*\](.*?)\[\/color\]/g, '$1')
                                        .replace(/\n/g, '<br>');
                                    break;
                                }
                                
                                // Add text before the color tag
                                htmlContent += processedText.substring(currentPos, colorStart).replace(/\n/g, '<br>');
                                
                                // Find the color tag end
                                const colorEnd = processedText.indexOf(']', colorStart);
                                if (colorEnd === -1) {
                                    currentPos = processedText.length;
                                    break;
                                }
                                
                                // Extract color
                                const color = processedText.substring(colorStart + 7, colorEnd);
                                
                                // Find the closing tag
                                const contentEnd = processedText.indexOf('[/color]', colorEnd);
                                if (contentEnd === -1) {
                                    currentPos = colorEnd + 1;
                                    continue;
                                }
                                
                                // Extract colored content
                                const coloredContent = processedText.substring(colorEnd + 1, contentEnd);
                                
                                // Add colored span
                                htmlContent += `<span style="color: ${color}">${coloredContent.replace(/\n/g, '<br>')}</span>`;
                                
                                // Move past the closing tag
                                currentPos = contentEnd + 8;
                            }
                            
                            textDiv.innerHTML = htmlContent;
                            textContainer.appendChild(textDiv);
                        }
                        
                        // Mark typing as complete
                        this.narrativeTyping = false;
                        
                        // Show buttons immediately
                        showButtons();
                        
                        // Remove this event listener to prevent multiple triggers
                        textContainer.removeEventListener('click', this.currentSkipHandler);
                    }
                };

                // [FIX] 1. Remove the OLD listener first (while this.currentSkipHandler still points to the old one)
                if (this.currentSkipHandler) {
                    textContainer.removeEventListener('click', this.currentSkipHandler);
                }

                // [FIX] 2. Now update the variable to the NEW handler
                this.currentSkipHandler = skipClickHandler;

                // [FIX] 3. Add the NEW listener
                textContainer.addEventListener('click', this.currentSkipHandler);

                // Also, add a keydown listener for Escape key to skip
                const escapeHandler = (e) => {
                    if (e.key === 'Escape' && this.narrativeTyping) {
                        skipClickHandler();
                        document.removeEventListener('keydown', escapeHandler);
                    }
                };
                document.addEventListener('keydown', escapeHandler);

                // Store escape handler for cleanup
                this.currentEscapeHandler = escapeHandler;
            },

            gameLost: function() {
                SoundFX.playError();
                const status = document.getElementById('game-status');
                status.style.color = "#ff5555";
                status.textContent = "FAILURE. RESETTING CONNECTION...";
                setTimeout(() => {
                    this.resetSite();
                }, 2000);
            },

            /* --- GIFT LOGIC --- */
            initGift: function() {
                const screen = document.getElementById('gift-screen');
                const img = document.getElementById('gift-img');
                const msg = document.getElementById('message');
                
                screen.style.backgroundColor = this.user.backgroundColor;
                if (this.user.isLightBackground) screen.classList.add('light-background');
                
                img.src = this.user.closedBox || "red_present.png";
                msg.textContent = "Tap to open...";
                
                // Add CRT static click effect
                img.onclick = () => {
                    if (this.isGiftOpen) return;
                    
                    SoundFX.playType();
                    this.clickCount++;
                    const rem = this.clicksToOpen - this.clickCount;
                    
                    if (this.clickCount < this.clicksToOpen) {
                        this.triggerShake('gift-img');
                        msg.textContent = `... ${rem} more ...`;
                        
                        // Add CRT static effect on click
                        const staticEffect = document.createElement('div');
                        staticEffect.style.cssText = `
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: repeating-linear-gradient(
                                0deg,
                                rgba(0,0,0,0.1) 0px,
                                rgba(0,0,0,0.1) 1px,
                                transparent 1px,
                                transparent 2px
                            );
                            z-index: 1001;
                            pointer-events: none;
                            animation: staticFade 0.2s forwards;
                        `;
                        
                        const staticStyle = document.createElement('style');
                        staticStyle.textContent = `
                            @keyframes staticFade {
                                0% { opacity: 0.6; }
                                100% { opacity: 0; }
                            }
                        `;
                        document.head.appendChild(staticStyle);
                        document.body.appendChild(staticEffect);
                        
                        setTimeout(() => {
                            document.body.removeChild(staticEffect);
                            document.head.removeChild(staticStyle);
                        }, 200);
                    } else {
                        this.revealGift();
                    }
                }
                
                startSnow(this.user);
            },

            revealGift: function() {
                this.isGiftOpen = true;
                SoundFX.playWin();
                this.stopPreGiftMusic();
                const img = document.getElementById('gift-img');
                const msg = document.getElementById('message');
                const reset = document.getElementById('reset-btn');

                img.src = this.user.openBox;
                img.classList.remove('shake-anim');
                img.classList.add('open-anim');
                
                msg.textContent = this.user.msg;
                msg.style.fontWeight = "bold";
                msg.style.color = this.user.isLightBackground ? "#000" : "#fff";

                if (this.user.audio) {
                    this.audio.src = this.user.audio;
                    this.audio.volume = 0.5;
                    this.audio.play().catch(e => console.log("Audio blocked"));
                }
                
                reset.style.display = "inline-block";
                reset.style.opacity = "0";
                reset.style.animation = "fadeIn 2s forwards 1s";
                
                // CRT celebration effect
                const celebration = document.createElement('div');
                celebration.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%);
                    z-index: 1001;
                    pointer-events: none;
                    animation: celebrationFade 2s forwards;
                `;
                
                const celebrationStyle = document.createElement('style');
                celebrationStyle.textContent = `
                    @keyframes celebrationFade {
                        0% { opacity: 1; transform: scale(0.5); }
                        50% { opacity: 0.6; transform: scale(1); }
                        100% { opacity: 0; transform: scale(1.2); }
                    }
                `;
                document.head.appendChild(celebrationStyle);
                document.body.appendChild(celebration);
                
                setTimeout(() => {
                    document.body.removeChild(celebration);
                    document.head.removeChild(celebrationStyle);
                }, 2000);
            },

            /* --- UTILITIES --- */
            transition: function(fromId, toId, callback) {
                // Clear any pending typewriter intervals
                if (this.typewriterInterval) {
                    clearTimeout(this.typewriterInterval);
                    this.typewriterInterval = null;
                }
                
                // Clear narrative intervals and handlers
                if (this.narrativeTypeInterval) {
                    clearInterval(this.narrativeTypeInterval);
                    this.narrativeTypeInterval = null;
                }

                // Remove narrative skip handler
                if (this.currentSkipHandler) {
                    const textContainer = document.getElementById('narrative-text');
                    if (textContainer) {
                        textContainer.removeEventListener('click', this.currentSkipHandler);
                    }
                    this.currentSkipHandler = null;
                }

                // Remove escape key handler
                if (this.currentEscapeHandler) {
                    document.removeEventListener('keydown', this.currentEscapeHandler);
                    this.currentEscapeHandler = null;
                }
                
                // Remove narrative continue handler
                if (this.narrativeContinueHandler) {
                    document.removeEventListener('keydown', this.narrativeContinueHandler);
                    this.narrativeContinueHandler = null;
                }
                
                this.isTyping = false;
                this.narrativeTyping = false;
                
                // Rest of the original transition code...
                
                // Rest of the method remains the same...
                
                const fromEl = document.getElementById(fromId);
                const toEl = document.getElementById(toId);
                const flash = document.createElement('div');
                flash.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:white;z-index:2000;opacity:0;animation:crtOff 1s forwards;";
                document.body.appendChild(flash);
                
                if(!document.getElementById('anim-style')) {
                    const s = document.createElement('style');
                    s.id = 'anim-style';
                    s.textContent = `
                        @keyframes crtOff {
                            0% { opacity: 0; }
                            10% { opacity: 0.6; }
                            20% { opacity: 0.2; }
                            30% { opacity: 0.7; }
                            40% { opacity: 0.1; }
                            50% { opacity: 0.8; }
                            60% { opacity: 0.1; }
                            70% { opacity: 0.6; }
                            80% { opacity: 0.2; }
                            90% { opacity: 0.7; }
                            100% { opacity: 0; }
                        }
                    `;
                    document.head.appendChild(s);
                }

                setTimeout(() => {
                    fromEl.style.display = "none";
                    toEl.style.display = "flex";
                    if (callback) callback();
                    setTimeout(() => document.body.removeChild(flash), 1000);
                }, 1000);
            },

            triggerShake: function(id) {
                const el = document.getElementById(id);
                el.classList.remove('shake-anim');
                void el.offsetWidth;
                el.classList.add('shake-anim');
            },

            resetSite: function() {
                // Clear all intervals and timeouts
                if (this.typewriterInterval) {
                    clearTimeout(this.typewriterInterval);
                    this.typewriterInterval = null;
                }
                
                this.stopPreGiftMusic();
                if (this.audio) {
                    this.audio.pause();
                    this.audio.currentTime = 0;
                }

                const resetFlash = document.createElement('div');
                resetFlash.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: white;
                    z-index: 10000;
                    opacity: 0;
                    animation: resetFlash 0.5s forwards;
                `;
                
                const resetStyle = document.createElement('style');
                resetStyle.textContent = `
                    @keyframes resetFlash {
                        0% { opacity: 0; }
                        50% { opacity: 0.8; }
                        100% { opacity: 0; }
                    }
                `;
                document.head.appendChild(resetStyle);
                document.body.appendChild(resetFlash);
                
                setTimeout(() => {
                    location.reload();
                }, 500);
            }
        };

        /* =========================================
           GAME ENGINES
           ========================================= */
        const GameEngine = {
            
            // 1. TIC TAC TOE (CENTERED)
            tictactoe: function(container) {
                let board = ["","","","","","","","",""];
                let active = true;
                
                const grid = document.createElement('div');
                grid.className = 'ttt-grid';
                container.appendChild(grid);

                const render = () => {
                    grid.innerHTML = "";
                    board.forEach((cell, i) => {
                        const d = document.createElement('div');
                        d.className = 'ttt-cell';
                        d.textContent = cell;
                        d.onclick = () => move(i);
                        grid.appendChild(d);
                    });
                };

                const checkWin = (p) => {
                    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
                    return wins.some(c => board[c[0]]===p && board[c[1]]===p && board[c[2]]===p);
                };

                const move = (i) => {
                    if (!active || board[i] !== "") return;
                    SoundFX.playType();
                    board[i] = "X";
                    render();
                    
                    if (checkWin("X")) { active=false; app.gameWon(); return; }
                    if (!board.includes("")) { active=false; app.gameLost(); return; }

                    setTimeout(() => {
                        if(!active) return;
                        let empty = board.map((v, idx) => v === "" ? idx : null).filter(v => v !== null);
                        let rnd = empty[Math.floor(Math.random() * empty.length)];
                        board[rnd] = "O";
                        render();
                        if (checkWin("O")) { active=false; app.gameLost(); }
                    }, 500);
                };
                render();
            },

            // 2. RPS - ENHANCED VERSION
            rps: function(container) {
                const choices = ["ROCK", "PAPER", "SCISSORS"];
                const choiceIcons = {
                    "ROCK": "🪨",
                    "PAPER": "📄", 
                    "SCISSORS": "✂️"
                };
                const choiceColors = {
                    "ROCK": "#4a4b4d",
                    "PAPER": "#6e6e6e", 
                    "SCISSORS": "#969696"
                };
                const hintTones = {
                    "ROCK": 200,    // Low tone for rock
                    "PAPER": 400,   // Medium tone for paper
                    "SCISSORS": 600 // High tone for scissors
                };
                
                let playerScore = 0;
                let aiScore = 0;
                let rounds = 0;
                let currentRound = 1;
                let aiChoice = null;
                let playerChoice = null;
                let roundActive = false;
                
                // Clear container
                container.innerHTML = '';
                
                // Create main game container
                const gameContainer = document.createElement('div');
                gameContainer.style.display = 'flex';
                gameContainer.style.flexDirection = 'column';
                gameContainer.style.alignItems = 'center';
                gameContainer.style.gap = '20px';
                
                // Round indicator
                const roundDisplay = document.createElement('div');
                roundDisplay.id = 'rps-round-display';
                roundDisplay.style.fontSize = '1.4rem';
                roundDisplay.style.fontWeight = 'bold';
                roundDisplay.style.color = '#ffffff';
                roundDisplay.textContent = `ROUND ${currentRound}`;
                
                // Score display
                const scoreDisplay = document.createElement('div');
                scoreDisplay.style.fontSize = '1.2rem';
                scoreDisplay.style.marginBottom = '10px';
                scoreDisplay.textContent = `SCORE: YOU ${playerScore} - ${aiScore} AI`;
                
                // Choices visualization area
                const choicesArea = document.createElement('div');
                choicesArea.style.display = 'flex';
                choicesArea.style.justifyContent = 'center';
                choicesArea.style.gap = '40px';
                choicesArea.style.margin = '20px 0';
                choicesArea.style.width = '100%';
                
                // Player choice display
                const playerChoiceDiv = document.createElement('div');
                playerChoiceDiv.className = 'rps-choice-display';
                playerChoiceDiv.style.textAlign = 'center';
                
                const playerLabel = document.createElement('div');
                playerLabel.textContent = 'YOU';
                playerLabel.style.fontSize = '1.1rem';
                playerLabel.style.marginBottom = '10px';
                playerLabel.style.color = '#88ff88';
                
                const playerIcon = document.createElement('div');
                playerIcon.id = 'rps-player-icon';
                playerIcon.style.fontSize = '3rem';
                playerIcon.style.height = '80px';
                playerIcon.style.display = 'flex';
                playerIcon.style.alignItems = 'center';
                playerIcon.style.justifyContent = 'center';
                playerIcon.textContent = '❓';
                
                const playerText = document.createElement('div');
                playerText.id = 'rps-player-text';
                playerText.style.fontSize = '0.9rem';
                playerText.style.marginTop = '5px';
                playerText.style.color = '#aaa';
                playerText.textContent = 'Waiting...';
                
                playerChoiceDiv.appendChild(playerLabel);
                playerChoiceDiv.appendChild(playerIcon);
                playerChoiceDiv.appendChild(playerText);
                
                // VS separator
                const vsDiv = document.createElement('div');
                vsDiv.style.display = 'flex';
                vsDiv.style.flexDirection = 'column';
                vsDiv.style.alignItems = 'center';
                vsDiv.style.justifyContent = 'center';
                
                const vsText = document.createElement('div');
                vsText.textContent = 'VS';
                vsText.style.fontSize = '1.5rem';
                vsText.style.fontWeight = 'bold';
                vsText.style.color = '#ffffff';
                vsText.style.margin = '0 20px';
                
                const roundStatus = document.createElement('div');
                roundStatus.id = 'rps-round-status';
                roundStatus.style.fontSize = '0.8rem';
                roundStatus.style.color = '#aaa';
                roundStatus.style.marginTop = '10px';
                roundStatus.textContent = 'Choose your move';
                
                vsDiv.appendChild(vsText);
                vsDiv.appendChild(roundStatus);
                
                // AI choice display
                const aiChoiceDiv = document.createElement('div');
                aiChoiceDiv.className = 'rps-choice-display';
                aiChoiceDiv.style.textAlign = 'center';
                
                const aiLabel = document.createElement('div');
                aiLabel.textContent = 'AI';
                aiLabel.style.fontSize = '1.1rem';
                aiLabel.style.marginBottom = '10px';
                aiLabel.style.color = '#ff8888';
                
                const aiIcon = document.createElement('div');
                aiIcon.id = 'rps-ai-icon';
                aiIcon.style.fontSize = '3rem';
                aiIcon.style.height = '80px';
                aiIcon.style.display = 'flex';
                aiIcon.style.alignItems = 'center';
                aiIcon.style.justifyContent = 'center';
                aiIcon.textContent = '🤖';
                
                const aiText = document.createElement('div');
                aiText.id = 'rps-ai-text';
                aiText.style.fontSize = '0.9rem';
                aiText.style.marginTop = '5px';
                aiText.style.color = '#aaa';
                aiText.textContent = 'Thinking...';
                
                aiChoiceDiv.appendChild(aiLabel);
                aiChoiceDiv.appendChild(aiIcon);
                aiChoiceDiv.appendChild(aiText);
                
                choicesArea.appendChild(playerChoiceDiv);
                choicesArea.appendChild(vsDiv);
                choicesArea.appendChild(aiChoiceDiv);
                
                // Choice buttons
                const btnContainer = document.createElement('div');
                btnContainer.style.display = 'flex';
                btnContainer.style.justifyContent = 'center';
                btnContainer.style.gap = '15px';
                btnContainer.style.flexWrap = 'wrap';
                btnContainer.style.marginTop = '10px';
                
                choices.forEach(c => {
                    const btn = document.createElement('button');
                    btn.className = "rps-choice-btn";
                    btn.textContent = `${choiceIcons[c]} ${c}`;
                    btn.style.padding = '10px 20px';
                    btn.style.fontSize = '1rem';
                    btn.style.backgroundColor = choiceColors[c];
                    btn.style.border = '2px solid rgba(255,255,255,0.3)';
                    btn.style.borderRadius = '8px';
                    btn.style.cursor = 'pointer';
                    btn.style.transition = 'all 0.2s';
                    
                    btn.onmouseover = () => {
                        if (roundActive) {
                            btn.style.transform = 'scale(1.05)';
                            btn.style.boxShadow = '0 0 10px rgba(255,255,255,0.3)';
                        }
                    };
                    
                    btn.onmouseout = () => {
                        btn.style.transform = 'scale(1)';
                        btn.style.boxShadow = 'none';
                    };
                    
                    btn.onclick = () => {
                        if (!roundActive) return;
                        
                        SoundFX.playType();
                        playerChoice = c;
                        
                        // Visual feedback for player choice
                        playerIcon.textContent = choiceIcons[c];
                        playerText.textContent = c;
                        playerIcon.style.color = choiceColors[c];
                        
                        // Reset all buttons
                        document.querySelectorAll('.rps-choice-btn').forEach(b => {
                            b.style.opacity = '0.5';
                            b.style.transform = 'scale(0.95)';
                        });
                        
                        // Highlight selected button
                        btn.style.opacity = '1';
                        btn.style.transform = 'scale(1.1)';
                        btn.style.boxShadow = `0 0 15px ${choiceColors[c]}`;
                        
                        // Disable further clicks
                        roundActive = false;
                        
                        // Show AI choice with delay
                        setTimeout(() => {
                            revealAIChoice();
                            determineRoundWinner();
                        }, 800);
                    };
                    
                    btnContainer.appendChild(btn);
                });
                
                // Result display
                const resultDisplay = document.createElement('div');
                resultDisplay.id = 'rps-result';
                resultDisplay.style.marginTop = '20px';
                resultDisplay.style.minHeight = '50px';
                resultDisplay.style.fontSize = '1.1rem';
                resultDisplay.style.textAlign = 'center';
                
                // Instruction for secret hint
                const hintInstruction = document.createElement('div');
                hintInstruction.style.fontSize = '0.7rem';
                hintInstruction.style.color = '#888';
                hintInstruction.style.marginTop = '10px';
                hintInstruction.style.textAlign = 'center';
                hintInstruction.style.fontStyle = 'italic';
                hintInstruction.innerHTML = 'Hint: Listen closely when the round starts...<br>The AI\'s choice has a unique sound tone!';
                
                // Assemble game container
                gameContainer.appendChild(roundDisplay);
                gameContainer.appendChild(scoreDisplay);
                gameContainer.appendChild(choicesArea);
                gameContainer.appendChild(btnContainer);
                gameContainer.appendChild(resultDisplay);
                gameContainer.appendChild(hintInstruction);
                
                container.appendChild(gameContainer);
                
                // Function to start a new round
                function startNewRound() {
                    currentRound = rounds + 1;
                    roundDisplay.textContent = `ROUND ${currentRound}`;
                    roundStatus.textContent = 'Choose your move';
                    resultDisplay.textContent = '';
                    
                    // Reset displays
                    playerIcon.textContent = '❓';
                    playerText.textContent = 'Waiting...';
                    playerIcon.style.color = '#fff';
                    
                    aiIcon.textContent = '🤖';
                    aiText.textContent = 'Thinking...';
                    aiIcon.style.color = '#fff';
                    
                    // Generate AI choice (secretly) and play hint tone
                    aiChoice = choices[Math.floor(Math.random() * 3)];
                    
                    // Play secret hint tone for AI choice
                    SoundFX.playTone(hintTones[aiChoice], 'sine', 0.3, 0.1);
                    
                    // Flash round indicator
                    roundDisplay.style.animation = 'none';
                    setTimeout(() => {
                        roundDisplay.style.animation = 'pulse 1s';
                    }, 10);
                    
                    // Enable buttons
                    document.querySelectorAll('.rps-choice-btn').forEach(btn => {
                        btn.style.opacity = '1';
                        btn.style.transform = 'scale(1)';
                        btn.style.boxShadow = 'none';
                        btn.disabled = false;
                    });
                    
                    roundActive = true;
                    
                    // Update instruction
                    setTimeout(() => {
                        roundStatus.textContent = 'MAKE YOUR CHOICE';
                        roundStatus.style.color = '#ffffff';
                    }, 500);
                }
                
                // Function to reveal AI choice
                function revealAIChoice() {
                    aiIcon.textContent = choiceIcons[aiChoice];
                    aiText.textContent = aiChoice;
                    aiIcon.style.color = choiceColors[aiChoice];
                    
                    // Animation for reveal
                    aiIcon.style.animation = 'reveal 0.5s';
                }
                
                // Function to determine round winner
                function determineRoundWinner() {
                    let result = "";
                    let roundWinner = null;
                    
                    if (playerChoice === aiChoice) {
                        result = "DRAW ROUND";
                        roundWinner = "draw";
                    } else if (
                        (playerChoice === "ROCK" && aiChoice === "SCISSORS") ||
                        (playerChoice === "PAPER" && aiChoice === "ROCK") ||
                        (playerChoice === "SCISSORS" && aiChoice === "PAPER")
                    ) {
                        playerScore++;
                        result = "YOU WIN THIS ROUND!";
                        roundWinner = "player";
                        
                        // Visual feedback for win
                        playerIcon.style.animation = 'winPulse 0.5s 3';
                    } else {
                        aiScore++;
                        result = "AI WINS THIS ROUND";
                        roundWinner = "ai";
                        
                        // Visual feedback for loss
                        aiIcon.style.animation = 'winPulse 0.5s 3';
                    }
                    
                    rounds++;
                    scoreDisplay.textContent = `SCORE: YOU ${playerScore} - ${aiScore} AI`;
                    resultDisplay.textContent = result;
                    resultDisplay.style.color = roundWinner === "player" ? "#88ff88" : 
                                            roundWinner === "ai" ? "#ff8888" : "#ffff88";
                    
                    // Check for match end
                    if (playerScore >= 2) {
                        resultDisplay.textContent = "VICTORY! YOU WIN THE MATCH!";
                        resultDisplay.style.color = "#00ff00";
                        setTimeout(() => app.gameWon(), 1500);
                    } else if (aiScore >= 2) {
                        resultDisplay.textContent = "DEFEAT! AI WINS THE MATCH!";
                        resultDisplay.style.color = "#ff5555";
                        setTimeout(() => app.gameLost(), 1500);
                    } else if (rounds >= 3) {
                        if (playerScore > aiScore) {
                            resultDisplay.textContent = "YOU WIN THE MATCH BY POINTS!";
                            resultDisplay.style.color = "#00ff00";
                            setTimeout(() => app.gameWon(), 1500);
                        } else if (aiScore > playerScore) {
                            resultDisplay.textContent = "AI WINS THE MATCH BY POINTS!";
                            resultDisplay.style.color = "#ff5555";
                            setTimeout(() => app.gameLost(), 1500);
                        } else {
                            resultDisplay.textContent = "DRAW MATCH! SUDDEN DEATH ROUND!";
                            setTimeout(() => {
                                rounds = 0;
                                playerScore = 0;
                                aiScore = 0;
                                startNewRound();
                            }, 2000);
                        }
                    } else {
                        // Continue to next round
                        roundStatus.textContent = 'NEXT ROUND STARTING...';
                        roundStatus.style.color = '#aaa';
                        setTimeout(startNewRound, 2000);
                    }
                }
                
                // Add CSS animations
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes pulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.1); }
                        100% { transform: scale(1); }
                    }
                    
                    @keyframes reveal {
                        0% { transform: scale(0.5); opacity: 0; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                    
                    @keyframes winPulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.2); }
                        100% { transform: scale(1); }
                    }
                    
                    .rps-choice-btn:active {
                        transform: scale(0.95) !important;
                    }
                    
                    .rps-choice-btn:disabled {
                        opacity: 0.3 !important;
                        cursor: not-allowed;
                    }
                `;
                document.head.appendChild(style);
                
                // Start first round
                startNewRound();
            },

            // 3. SNAKE WITH THREE ATTEMPTS
            snake: function(container) {
                const cvs = document.createElement('canvas');
                cvs.id = "snake-canvas";
                cvs.width = 300; 
                cvs.height = 300;
                cvs.style.border = '2px solid #666';
                cvs.style.cursor = 'pointer';
                
                // Attempts counter display
                const attemptsDisplay = document.createElement('div');
                attemptsDisplay.id = 'snake-attempts';
                attemptsDisplay.style.fontSize = '0.9rem';
                attemptsDisplay.style.color = '#ffffaa';
                attemptsDisplay.style.marginBottom = '5px';
                
                // Score display
                const scoreDisplay = document.createElement('div');
                scoreDisplay.id = 'snake-score';
                scoreDisplay.style.fontSize = '0.9rem';
                scoreDisplay.style.marginBottom = '5px';
                
                container.appendChild(attemptsDisplay);
                container.appendChild(scoreDisplay);
                container.appendChild(cvs);
                
                const help = document.createElement('div');
                help.textContent = "CLICK CANVAS TO FOCUS, THEN USE ARROW KEYS";
                help.style.fontSize = "0.7rem";
                help.style.color = "#aaa";
                help.style.marginTop = "5px";
                container.appendChild(help);
                
                // Game variables
                let attempts = 3;
                let score = 0;
                let highScore = 0;
                let gameActive = false;
                let gameInterval;
                
                // Initialize game
                function initGame() {
                    const ctx = cvs.getContext('2d');
                    const box = 15;
                    let snake = [{x: 9 * box, y: 10 * box}];
                    let food = { 
                        x: Math.floor(Math.random() * 19 + 1) * box, 
                        y: Math.floor(Math.random() * 19 + 1) * box 
                    };
                    let d = null;
                    
                    // Clear previous interval
                    if (gameInterval) clearInterval(gameInterval);
                    
                    // Update displays
                    attemptsDisplay.textContent = `ATTEMPTS: ${attempts}`;
                    scoreDisplay.textContent = `SCORE: ${score}/10 | HIGH: ${highScore}`;
                    
                    // Draw function
                    function draw() {
                        // Clear canvas
                        ctx.fillStyle = "#000";
                        ctx.fillRect(0, 0, cvs.width, cvs.height);
                        
                        // Draw snake
                        for (let i = 0; i < snake.length; i++) {
                            ctx.fillStyle = (i == 0) ? "#fff" : "#aaa";
                            ctx.fillRect(snake[i].x, snake[i].y, box, box);
                            ctx.strokeStyle = "#000";
                            ctx.strokeRect(snake[i].x, snake[i].y, box, box);
                        }
                        
                        // Draw food
                        ctx.fillStyle = "white";
                        ctx.fillRect(food.x, food.y, box, box);
                        
                        // Draw food with cross for visibility
                        ctx.strokeStyle = "red";
                        ctx.beginPath();
                        ctx.moveTo(food.x + 2, food.y + 2);
                        ctx.lineTo(food.x + box - 2, food.y + box - 2);
                        ctx.moveTo(food.x + box - 2, food.y + 2);
                        ctx.lineTo(food.x + 2, food.y + box - 2);
                        ctx.stroke();
                        
                        // Move snake
                        let snakeX = snake[0].x;
                        let snakeY = snake[0].y;

                        if (d === 'W') snakeY -= box;
                        if (d === 'A') snakeX -= box;
                        if (d === 'S') snakeY += box;
                        if (d === 'D') snakeX += box;
                        
                        if (d === "LEFT") snakeX -= box;
                        if (d === "UP") snakeY -= box;
                        if (d === "RIGHT") snakeX += box;
                        if (d === "DOWN") snakeY += box;
                        
                        // Check collision with food
                        if (snakeX === food.x && snakeY === food.y) {
                            score++;
                            SoundFX.playSuccess();
                            scoreDisplay.textContent = `SCORE: ${score}/10 | HIGH: ${highScore}`;
                            
                            // Generate new food
                            food = { 
                                x: Math.floor(Math.random() * 19 + 1) * box, 
                                y: Math.floor(Math.random() * 19 + 1) * box 
                            };
                            
                            // Check win condition
                            if (score >= 10) {
                                clearInterval(gameInterval);
                                gameActive = false;
                                // Flash celebration
                                ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
                                ctx.fillRect(0, 0, cvs.width, cvs.height);
                                setTimeout(() => app.gameWon(), 500);
                                return;
                            }
                        } else {
                            snake.pop();
                        }
                        
                        // Check collision with walls or self
                        if (snakeX < 0 || snakeX >= cvs.width || snakeY < 0 || snakeY >= cvs.height || 
                            collision(snakeX, snakeY, snake)) {
                            clearInterval(gameInterval);
                            gameActive = false;
                            
                            // Death animation
                            ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
                            ctx.fillRect(0, 0, cvs.width, cvs.height);
                            
                            attempts--;
                            attemptsDisplay.textContent = `ATTEMPTS: ${attempts}`;
                            
                            if (attempts <= 0) {
                                // Game over
                                setTimeout(() => {
                                    app.gameLost();
                                }, 1000);
                            } else {
                                // Reset for next attempt
                                setTimeout(() => {
                                    if (score > highScore) highScore = score;
                                    score = 0;
                                    initGame();
                                }, 1000);
                            }
                            return;
                        }
                        
                        // Add new head
                        snake.unshift({x: snakeX, y: snakeY});
                    }
                    
                    // Collision detection
                    function collision(x, y, array) {
                        for (let i = 0; i < array.length; i++) {
                            if (x === array[i].x && y === array[i].y) return true;
                        }
                        return false;
                    }
                    
                    // Direction control
                    function direction(event) {
                        if (!gameActive) return;
                        
                        SoundFX.playType();
                        
                        if (event.keyCode === 37 && d !== "RIGHT") d = "LEFT";
                        else if (event.keyCode === 38 && d !== "DOWN") d = "UP";
                        else if (event.keyCode === 39 && d !== "LEFT") d = "RIGHT";
                        else if (event.keyCode === 40 && d !== "UP") d = "DOWN";
                    }
                    
                    // Event listeners
                    document.removeEventListener("keydown", direction);
                    document.addEventListener("keydown", direction);
                    
                    // Start game
                    gameActive = true;
                    gameInterval = setInterval(draw, 100);
                }
                
                // Focus canvas on click
                cvs.onclick = () => cvs.focus();
                
                // Start first game
                initGame();
            },

            // 4. CHESS WITH THREE CHANCES
            chess: function(container) {
                const correctMove = "qh1";
                let chances = 3;
                
                // Clear container
                container.innerHTML = '';
                
                // Create game container
                const gameContainer = document.createElement('div');
                gameContainer.style.display = 'flex';
                gameContainer.style.flexDirection = 'column';
                gameContainer.style.alignItems = 'center';
                gameContainer.style.gap = '15px';
                
                // Chances display
                const chancesDisplay = document.createElement('div');
                chancesDisplay.id = 'chess-chances';
                chancesDisplay.style.fontSize = '0.9rem';
                chancesDisplay.style.color = '#ffffaa';
                chancesDisplay.textContent = `CHANCES: ${chances}`;
                
                // Board display (text-based)
                const boardDisplay = document.createElement('pre');
                boardDisplay.className = "chess-board-text";
                boardDisplay.style.fontFamily = 'monospace';
                boardDisplay.style.fontSize = '0.9rem';
                boardDisplay.style.lineHeight = '1.2';
                boardDisplay.style.color = '#fff';
                boardDisplay.style.backgroundColor = 'rgba(0,0,0,0.3)';
                boardDisplay.style.padding = '15px';
                boardDisplay.style.borderRadius = '5px';
                boardDisplay.style.whiteSpace = 'pre';
                boardDisplay.textContent = 
`  a b c d e f g h
8  . . . . . . . K
7  . . . . . . P .
6  P b . B b . . P
5  . . . . . . . .
4  . p . . . . . .
3  p . . . . B p p
2  . . . . . q . k
1  . . . . Q . . .
Black (uppercase) and White (lowercase). 
Black to move. Mate in 1.
Notation Example: Kg8 (King to g8)`;
                // Input area
                const inputArea = document.createElement('div');
                inputArea.style.display = 'flex';
                inputArea.style.flexDirection = 'column';
                inputArea.style.alignItems = 'center';
                inputArea.style.gap = '10px';
                inputArea.style.marginTop = '10px';
                
                const input = document.createElement('input');
                input.type = "text";
                input.placeholder = "ENTER MOVE";
                input.style.width = "200px";
                input.style.padding = '8px';
                input.style.fontSize = '1rem';
                input.style.textAlign = 'center';
                
                const btn = document.createElement('button');
                btn.className = "action-btn";
                btn.textContent = "EXECUTE MOVE";
                btn.style.marginTop = "5px";
                
                // Result message
                const resultMsg = document.createElement('div');
                resultMsg.id = 'chess-result';
                resultMsg.style.minHeight = '30px';
                resultMsg.style.textAlign = 'center';
                resultMsg.style.fontSize = '0.9rem';
                resultMsg.style.marginTop = '10px';
                
                // Hint system
                const hintContainer = document.createElement('div');
                hintContainer.style.marginTop = '10px';
                hintContainer.style.fontSize = '0.7rem';
                hintContainer.style.color = '#888';
                hintContainer.style.textAlign = 'center';
                
                const hintBtn = document.createElement('button');
                hintBtn.textContent = "NEED A HINT?";
                hintBtn.style.padding = '3px 10px';
                hintBtn.style.fontSize = '0.7rem';
                hintBtn.style.backgroundColor = 'transparent';
                hintBtn.style.border = '1px solid #666';
                hintBtn.style.color = '#aaa';
                hintBtn.style.cursor = 'pointer';
                hintBtn.style.marginTop = '5px';
                
                let hintLevel = 0;
                const hints = [
                    "Look at the black King on h8",
                    "The white Queen on f7 is key",
                    "Think about discovered checks",
                    "The move involves the Queen moving to f8"
                ];
                
                hintBtn.onclick = () => {
                    if (hintLevel < hints.length) {
                        SoundFX.playType();
                        const hintText = document.createElement('div');
                        hintText.textContent = `HINT ${hintLevel + 1}: ${hints[hintLevel]}`;
                        hintText.style.marginTop = '5px';
                        hintText.style.color = '#aaa';
                        hintText.style.fontStyle = 'italic';
                        hintContainer.appendChild(hintText);
                        hintLevel++;
                        
                        // Disable after all hints
                        if (hintLevel >= hints.length) {
                            hintBtn.disabled = true;
                            hintBtn.style.opacity = '0.5';
                            hintBtn.style.cursor = 'not-allowed';
                        }
                    }
                };
                
                hintContainer.appendChild(hintBtn);
                
                // Check move function
                function checkMove() {
                    const move = input.value.trim().toLowerCase();
                    
                    if (!move) {
                        SoundFX.playError();
                        resultMsg.textContent = "Please enter a move";
                        resultMsg.style.color = "#ff5555";
                        return;
                    }
                    
                    if (move === correctMove) {
                        SoundFX.playSuccess();
                        resultMsg.textContent = "CORRECT! Checkmate!";
                        resultMsg.style.color = "#00ff00";
                        input.disabled = true;
                        btn.disabled = true;
                        setTimeout(() => app.gameWon(), 1000);
                    } else {
                        SoundFX.playError();
                        chances--;
                        chancesDisplay.textContent = `CHANCES: ${chances}`;
                        
                        // Shake animation
                        input.style.animation = 'none';
                        setTimeout(() => {
                            input.style.animation = 'shake 0.5s';
                        }, 10);
                        
                        if (chances <= 0) {
                            resultMsg.textContent = `GAME OVER! Correct move was: ${correctMove.toUpperCase()}`;
                            resultMsg.style.color = "#ff5555";
                            input.disabled = true;
                            btn.disabled = true;
                            setTimeout(() => app.gameLost(), 1500);
                        } else {
                            resultMsg.textContent = `Incorrect. ${chances} chance${chances === 1 ? '' : 's'} remaining.`;
                            resultMsg.style.color = "#ffff55";
                            input.value = "";
                            input.focus();
                        }
                    }
                }
                
                // Event listeners
                btn.onclick = checkMove;
                input.addEventListener('keypress', (e) => {
                    if (e.key === "Enter") checkMove();
                });
                
                // Assemble game
                inputArea.appendChild(input);
                inputArea.appendChild(btn);
                
                gameContainer.appendChild(chancesDisplay);
                gameContainer.appendChild(boardDisplay);
                gameContainer.appendChild(inputArea);
                gameContainer.appendChild(resultMsg);
                gameContainer.appendChild(hintContainer);
                
                container.appendChild(gameContainer);
                
                // Add shake animation style
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes shake {
                        0%, 100% { transform: translateX(0); }
                        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                        20%, 40%, 60%, 80% { transform: translateX(5px); }
                    }
                `;
                document.head.appendChild(style);
                
                // Focus input
                setTimeout(() => input.focus(), 100);
            },

            // 5. WORDLE WITH ELIMINATED LETTERS DISPLAY
            wordle: function(container) {
                const target = "SYLUS";
                let attempts = 0;
                let eliminatedLetters = new Set();
                let correctLetters = new Set();
                let presentLetters = new Set();
                
                // Clear container
                container.innerHTML = '';
                
                // Wordle grid
                const grid = document.createElement('div');
                grid.className = 'wordle-container';
                grid.style.display = 'flex';
                grid.style.flexDirection = 'column';
                grid.style.gap = '5px';
                grid.style.marginBottom = '15px';
                
                // Create initial empty rows
                for (let i = 0; i < 6; i++) {
                    const row = document.createElement('div');
                    row.className = 'wordle-row';
                    row.style.display = 'flex';
                    row.style.gap = '5px';
                    row.style.justifyContent = 'center';
                    
                    for (let j = 0; j < 5; j++) {
                        const tile = document.createElement('div');
                        tile.className = 'wordle-tile';
                        tile.style.width = '40px';
                        tile.style.height = '40px';
                        tile.style.border = '2px solid #666';
                        tile.style.display = 'flex';
                        tile.style.alignItems = 'center';
                        tile.style.justifyContent = 'center';
                        tile.style.fontSize = '1.5rem';
                        tile.style.fontWeight = 'bold';
                        tile.style.textTransform = 'uppercase';
                        row.appendChild(tile);
                    }
                    grid.appendChild(row);
                }
                
                container.appendChild(grid);
                
                // Input area
                const inputArea = document.createElement('div');
                inputArea.style.display = 'flex';
                inputArea.style.flexDirection = 'column';
                inputArea.style.alignItems = 'center';
                inputArea.style.gap = '10px';
                inputArea.style.marginTop = '10px';
                
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 5;
                input.placeholder = "ENTER 5-LETTER WORD (HINT: ENJOY WITH THE LADS)";
                input.style.width = '200px';
                input.style.padding = '8px';
                input.style.fontSize = '1rem';
                input.style.textAlign = 'center';
                input.style.textTransform = 'uppercase';
                
                // Eliminated letters display
                const eliminatedContainer = document.createElement('div');
                eliminatedContainer.style.marginTop = '10px';
                eliminatedContainer.style.textAlign = 'center';
                
                const eliminatedLabel = document.createElement('div');
                eliminatedLabel.textContent = 'ELIMINATED LETTERS:';
                eliminatedLabel.style.fontSize = '0.7rem';
                eliminatedLabel.style.color = '#aaa';
                eliminatedLabel.style.marginBottom = '5px';
                
                const eliminatedDisplay = document.createElement('div');
                eliminatedDisplay.id = 'wordle-eliminated-display';
                eliminatedDisplay.style.display = 'flex';
                eliminatedDisplay.style.flexWrap = 'wrap';
                eliminatedDisplay.style.gap = '3px';
                eliminatedDisplay.style.justifyContent = 'center';
                eliminatedDisplay.style.maxWidth = '200px';
                eliminatedDisplay.style.minHeight = '30px';
                eliminatedDisplay.style.padding = '5px';
                eliminatedDisplay.style.border = '1px solid #444';
                eliminatedDisplay.style.borderRadius = '4px';
                eliminatedDisplay.style.backgroundColor = 'rgba(0,0,0,0.2)';
                
                eliminatedContainer.appendChild(eliminatedLabel);
                eliminatedContainer.appendChild(eliminatedDisplay);
                
                inputArea.appendChild(input);
                inputArea.appendChild(eliminatedContainer);
                
                container.appendChild(inputArea);
                
                // Function to update eliminated letters display
                function updateEliminatedDisplay() {
                    eliminatedDisplay.innerHTML = '';
                    const sortedLetters = Array.from(eliminatedLetters).sort();
                    
                    sortedLetters.forEach(letter => {
                        const letterSpan = document.createElement('span');
                        letterSpan.textContent = letter;
                        letterSpan.style.display = 'inline-block';
                        letterSpan.style.width = '20px';
                        letterSpan.style.height = '20px';
                        letterSpan.style.textAlign = 'center';
                        letterSpan.style.lineHeight = '20px';
                        letterSpan.style.fontSize = '0.7rem';
                        letterSpan.style.textTransform = 'uppercase';
                        letterSpan.style.backgroundColor = '#333';
                        letterSpan.style.color = '#888';
                        letterSpan.style.borderRadius = '3px';
                        letterSpan.style.textDecoration = 'line-through';
                        letterSpan.style.opacity = '0.6';
                        eliminatedDisplay.appendChild(letterSpan);
                    });
                    
                    // Also show present letters (yellow) in a subtle way
                    const presentArray = Array.from(presentLetters).sort();
                    if (presentArray.length > 0) {
                        const presentDiv = document.createElement('div');
                        presentDiv.style.marginTop = '5px';
                        presentDiv.style.fontSize = '0.6rem';
                        presentDiv.style.color = '#888';
                        presentDiv.textContent = 'Hint: Present letters: ' + presentArray.join(', ');
                        eliminatedContainer.appendChild(presentDiv);
                    }
                }
                
                // Function to render a guess
                function renderRow(guess) {
                    const row = grid.children[attempts - 1];
                    
                    for (let i = 0; i < 5; i++) {
                        const tile = row.children[i];
                        const letter = guess[i];
                        tile.textContent = letter;
                        
                        // Add animation
                        tile.style.animation = 'none';
                        setTimeout(() => {
                            tile.style.animation = 'tileReveal 0.5s';
                        }, i * 100);
                        
                        // Check letter status
                        if (letter === target[i]) {
                            tile.style.backgroundColor = '#538d4e'; // Green
                            tile.style.borderColor = '#538d4e';
                            correctLetters.add(letter);
                            // Remove from present if it was there
                            presentLetters.delete(letter);
                        } else if (target.includes(letter)) {
                            tile.style.backgroundColor = '#b59f3b'; // Yellow
                            tile.style.borderColor = '#b59f3b';
                            presentLetters.add(letter);
                        } else {
                            tile.style.backgroundColor = '#3a3a3c'; // Gray
                            tile.style.borderColor = '#666';
                            eliminatedLetters.add(letter);
                        }
                    }
                    
                    // Update eliminated display
                    updateEliminatedDisplay();
                }
                
                // Add keyboard event listener
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        const guess = input.value.toUpperCase().trim();
                        
                        if (guess.length !== 5) {
                            SoundFX.playError();
                            app.triggerShake('game-area');
                            return;
                        }
                        
                        SoundFX.playType();
                        attempts++;
                        input.value = '';
                        renderRow(guess);
                        
                        if (guess === target) {
                            input.disabled = true;
                            input.style.opacity = '0.5';
                            // Celebrate with correct letters
                            setTimeout(() => {
                                SoundFX.playWin();
                                app.gameWon();
                            }, 1000);
                        } else if (attempts >= 6) {
                            input.disabled = true;
                            input.style.opacity = '0.5';
                            // Show correct answer
                            const answerDiv = document.createElement('div');
                            answerDiv.textContent = `ANSWER: ${target}`;
                            answerDiv.style.marginTop = '10px';
                            answerDiv.style.color = '#ff5555';
                            answerDiv.style.fontSize = '0.9rem';
                            inputArea.appendChild(answerDiv);
                            
                            setTimeout(() => {
                                app.gameLost();
                            }, 2000);
                        }
                    }
                });
                
                // Focus the input
                setTimeout(() => input.focus(), 100);
                
                // Add animation styles
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes tileReveal {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.1); }
                        100% { transform: scale(1); }
                    }
                    
                    .wordle-tile {
                        transition: background-color 0.3s, border-color 0.3s;
                    }
                `;
                document.head.appendChild(style);
            },
        };
        /* --- PIXEL SNOW PARTICLE SYSTEM (from old.html) --- */
        function startSnow(user) {
            const canvas = document.getElementById('snow-canvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Turn off anti-aliasing for pixelated look
            ctx.imageSmoothingEnabled = false;
            ctx.mozImageSmoothingEnabled = false;
            ctx.webkitImageSmoothingEnabled = false;
            ctx.msImageSmoothingEnabled = false;

            const particles = [];
            const particleCount = 150;

            // Define pixel snowflake shapes (in pixels)
            const pixelShapes = [
                [[0, 0]],
                [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]],
                [[0, 0], [1, 0], [0, 1], [0, 2]],
                [[0, 0], [1, 0], [0, 1], [1, 1]],
                [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]],
                [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]
            ];

            class PixelSnowflake {
                constructor(isLightBackground) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height - canvas.height;
                    this.size = Math.floor(Math.random() * 3) + 1;
                    this.speedX = Math.random() * 2 - 1;
                    this.speedY = Math.random() * 2 + 1;
                    this.opacity = Math.random() * 0.8 + 0.2;
                    // Adjust colors based on background
                    if (isLightBackground) {
                        this.color = Math.random() > 0.5 ? 
                            `rgba(0, 0, 0, ${this.opacity})` : 
                            `rgba(50, 50, 50, ${this.opacity})`;
                    } else {
                        this.color = Math.random() > 0.5 ? 
                            `rgba(255, 255, 255, ${this.opacity})` : 
                            `rgba(200, 200, 200, ${this.opacity})`;
                    }
                    this.shape = pixelShapes[Math.floor(Math.random() * pixelShapes.length)];
                    this.rotation = Math.random() * Math.PI * 2;
                    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
                    this.wobble = Math.random() * 0.5;
                    this.wobbleSpeed = Math.random() * 0.02 + 0.01;
                    this.wobbleOffset = Math.random() * Math.PI * 2;
                    // Add CRT flicker to snowflakes
                    this.flickerSpeed = Math.random() * 0.05 + 0.01;
                }
                
                update() {
                    const wobbleX = Math.sin(Date.now() * this.wobbleSpeed + this.wobbleOffset) * this.wobble;
                    
                    this.x += this.speedX + wobbleX;
                    this.y += this.speedY;
                    
                    this.rotation += this.rotationSpeed;
                    
                    // Add CRT flicker effect to opacity
                    this.opacity = 0.2 + Math.abs(Math.sin(Date.now() * this.flickerSpeed)) * 0.6;
                    this.color = this.color.replace(/rgba\((\d+), (\d+), (\d+), [^)]+\)/, 
                        `rgba($1, $2, $3, ${this.opacity})`);
                    
                    if (this.y > canvas.height) {
                        this.y = -10;
                        this.x = Math.random() * canvas.width;
                        this.size = Math.floor(Math.random() * 3) + 1;
                        this.opacity = Math.random() * 0.8 + 0.2;
                        this.color = this.color.startsWith('rgba(0,') ? 
                            (Math.random() > 0.5 ? `rgba(0, 0, 0, ${this.opacity})` : `rgba(50, 50, 50, ${this.opacity})`) :
                            (Math.random() > 0.5 ? `rgba(255, 255, 255, ${this.opacity})` : `rgba(200, 200, 200, ${this.opacity})`);
                        this.speedY = Math.random() * 2 + 1;
                    }
                    
                    if (this.x > canvas.width + 10) this.x = -10;
                    if (this.x < -10) this.x = canvas.width + 10;
                }
                
                draw() {
                    ctx.save();
                    ctx.translate(this.x, this.y);
                    ctx.rotate(this.rotation);
                    ctx.fillStyle = this.color;
                    
                    for (const pixel of this.shape) {
                        const px = pixel[0] * this.size;
                        const py = pixel[1] * this.size;
                        ctx.fillRect(px, py, this.size, this.size);
                    }
                    
                    ctx.restore();
                }
            }

            // Get background info
            const isLightBackground = user?.isLightBackground || false;
            const bgColor = user?.backgroundColor || "#1a4a6a";
            
            // Create initial particles
            for (let i = 0; i < particleCount; i++) {
                particles.push(new PixelSnowflake(isLightBackground));
            }

            // Create CRT-style background based on user's background color
            function drawBackground() {
                // Clear canvas with user's background color
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Add CRT scanlines
                ctx.fillStyle = isLightBackground ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)';
                for (let i = 0; i < canvas.height; i += 4) {
                    ctx.fillRect(0, i, canvas.width, 1);
                }
                
                // Add subtle CRT vignette
                const vignette = ctx.createRadialGradient(
                    canvas.width / 2, canvas.height / 2, 0,
                    canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
                );
                if (isLightBackground) {
                    vignette.addColorStop(0, 'rgba(255, 255, 255, 0)');
                    vignette.addColorStop(1, 'rgba(255, 255, 255, 0.3)');
                } else {
                    vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
                    vignette.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
                }
                ctx.fillStyle = vignette;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            function animateSnow() {
                // Clear with appropriate fade color for trails
                if (isLightBackground) {
                    ctx.fillStyle = bgColor === '#f0f0f0' ? 'rgba(240, 240, 240, 0.1)' : 
                                   'rgba(255, 255, 255, 0.1)';
                } else {
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                }
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Draw background
                drawBackground();
                
                // Update and draw particles
                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw();
                }
                
                requestAnimationFrame(animateSnow);
            }
            
            animateSnow();

            // Handle window resize
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                particles.length = 0;
                for (let i = 0; i < particleCount; i++) {
                    particles.push(new PixelSnowflake(isLightBackground));
                }
            });
        }

        // Add CRT glitch overlay from old.html
        document.addEventListener('DOMContentLoaded', () => {
            const style = document.createElement('style');
            style.textContent = `
                .crt-glitch {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 999;
                    opacity: 0.03;
                    background: linear-gradient(
                        0deg,
                        transparent 50%,
                        rgba(255, 255, 255, 0.05) 50%
                    );
                    background-size: 100% 2px;
                    animation: crt-glitch 3s infinite linear;
                }
                
                @keyframes crt-glitch {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(4px); }
                }
            `;
            document.head.appendChild(style);
            
            const glitchOverlay = document.createElement('div');
            glitchOverlay.className = 'crt-glitch';
            document.body.appendChild(glitchOverlay);
        });

        document.getElementById('name-input').addEventListener("keypress", function(event) {
            if (event.key === "Enter") app.attemptLogin();

        });
