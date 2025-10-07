// TikTok-style Website Feed
class TikTokFeed {
    constructor() {
        // Initialize Supabase service
        this.supabaseService = new SupabaseService();
        this.currentUser = null;
        this.userInteractions = new Map(); // Cache for user interactions
        this.isLoggedIn = false;
        
        this.websites = [
            {
                title: "Hay",
                url: "https://hay.fun",
                description: "Moderated random video chat (Omegle alternative) with filters.",
                favicon: "🌾",
                category: "social",
                theme: "safe",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["chat", "safe", "moderated"],
                creator: "Hay Team",
                duration: "Live",
                trending: true
            },
            {
                title: "Pog0 Meme Generator",
                url: "https://pog0.fun",
                description: "Simple, fast meme generator with templates; share instantly.",
                favicon: "🎭",
                category: "meme",
                theme: "vibrant",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["memes", "funny", "generator"],
                creator: "Pog0 Team",
                duration: "2 min read",
                trending: true
            },
            {
                title: "TextGenerator",
                url: "https://textgenerator.fun",
                description: "Paste text → get stylized 'fun' fonts to copy.",
                favicon: "✨",
                category: "text",
                theme: "creative",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["fonts", "text", "design"],
                creator: "TextGen Studio",
                duration: "1 min read",
                trending: false
            },
            {
                title: "Pump.fun",
                url: "https://pump.fun",
                description: "Pump.fun is your power-up. It's the cultural engine that made \".fun\" synonymous with crypto/meme launches.",
                favicon: "🚀",
                category: "crypto",
                theme: "explosive",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["crypto", "meme", "launch", "tokens", "defi"],
                creator: "Pump.fun",
                duration: "Live",
                trending: true
            },
            {
                title: "FunnySayings",
                url: "https://funnysayings.fun",
                description: "Random witty one-liners for captions and posts.",
                favicon: "😄",
                category: "comedy",
                theme: "humor",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["funny", "quotes", "comedy"],
                creator: "Comedy Central",
                duration: "30 sec read",
                trending: true
            },
            {
                title: "Omegle",
                url: "https://omegle.fun",
                description: "Omegle-style random video chat reboot.",
                favicon: "🎥",
                category: "social",
                theme: "connection",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["chat", "social", "video"],
                creator: "Omegle Team",
                duration: "Live",
                trending: true
            },
            {
                title: "MonkeyRun",
                url: "https://monkeyrun.fun",
                description: "Swipey random video chat app landing (make friends fast).",
                favicon: "🐒",
                category: "social",
                theme: "playful",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["friends", "swipe", "social"],
                creator: "MonkeyRun",
                duration: "2 min read",
                trending: false
            },
            {
                title: "NameHive",
                url: "https://namehive.fun",
                description: "Random name generator (brand/character ideas).",
                favicon: "🏷️",
                category: "tools",
                theme: "professional",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["names", "branding", "generator"],
                creator: "NameHive",
                duration: "1 min read",
                trending: false
            },
            {
                title: "Tambola",
                url: "https://tambola.fun",
                description: "Online tambola/number generator for quick party games.",
                favicon: "🎲",
                category: "games",
                theme: "party",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["games", "party", "tambola"],
                creator: "Game Masters",
                duration: "3 min play",
                trending: false
            },
            {
                title: "FunWebsite",
                url: "https://funwebsite.fun",
                description: "Indie playground of math/language mini-projects.",
                favicon: "🧮",
                category: "education",
                theme: "learning",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["math", "learning", "projects"],
                creator: "EduFun",
                duration: "5 min explore",
                trending: false
            },
            {
                title: "APIList",
                url: "https://apilist.fun",
                description: "Directory of playful APIs (meme/random, etc.) to build silly tools fast.",
                favicon: "🔌",
                category: "developer",
                theme: "tech",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["api", "developer", "tools"],
                creator: "DevTools",
                duration: "3 min read",
                trending: true
            },
            {
                title: "MemeSoundboard",
                url: "https://memesoundboard.fun",
                description: "Meme generator + app info; light, prank-friendly.",
                favicon: "🎵",
                category: "meme",
                theme: "audio",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["memes", "audio", "prank"],
                creator: "SoundMasters",
                duration: "2 min play",
                trending: false
            },
            {
                title: "Rand",
                url: "https://rand.fun",
                description: "Quirky randomizers (age, actors, more) with tiny API.",
                favicon: "🎯",
                category: "tools",
                theme: "random",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["random", "generator", "api"],
                creator: "Random Labs",
                duration: "1 min use",
                trending: false
            },
            {
                title: "LeFun",
                url: "https://lefun.fun",
                description: "Browser party/board games with AI bots.",
                favicon: "🎮",
                category: "games",
                theme: "party",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["games", "party", "ai"],
                creator: "LeFun Team",
                duration: "10 min play",
                trending: true
            },
            {
                title: "DateRandomizer",
                url: "https://daterandomizer.fun",
                description: "Spin up quirky date ideas at random.",
                favicon: "💕",
                category: "lifestyle",
                theme: "romance",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["dates", "romance", "ideas"],
                creator: "DateMaster",
                duration: "1 min read",
                trending: false
            },
            {
                title: "MyCarousel",
                url: "https://mycarousel.fun",
                description: "Open-source LinkedIn carousel maker (great for quick social posts).",
                favicon: "🎠",
                category: "business",
                theme: "professional",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["linkedin", "business", "carousel"],
                creator: "Carousel Pro",
                duration: "3 min create",
                trending: false
            },
            {
                title: "Stubborn",
                url: "https://stubborn.fun",
                description: "Build goofy illustrated characters from mix-and-match parts.",
                favicon: "🎨",
                category: "creative",
                theme: "artistic",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["art", "characters", "creative"],
                creator: "Art Studio",
                duration: "5 min create",
                trending: false
            },
            {
                title: "FontGenerator",
                url: "https://fontgenerator.fun",
                description: "Paste text → get 180+ fancy/emoji 'fonts' to copy.",
                favicon: "🔤",
                category: "text",
                theme: "stylish",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["fonts", "text", "style"],
                creator: "Font Masters",
                duration: "2 min use",
                trending: true
            },
            {
                title: "MattsVideos",
                url: "https://mattsvideos.fun",
                description: "Indie sketch-comedy hub by Matt Aromando.",
                favicon: "🎬",
                category: "comedy",
                theme: "indie",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["comedy", "sketch", "indie"],
                creator: "Matt Aromando",
                duration: "3 min watch",
                trending: true
            },
            {
                title: "Laura Sanders",
                url: "https://laurasanders.fun",
                description: "Comedian's video/archive page; small, personal, funny.",
                favicon: "🎭",
                category: "comedy",
                theme: "personal",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["comedy", "personal", "archive"],
                creator: "Laura Sanders",
                duration: "2 min watch",
                trending: false
            },
            {
                title: "Inj",
                url: "https://inj.fun",
                description: "Meme generator site (fast, punchy).",
                favicon: "💉",
                category: "meme",
                theme: "medical",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["memes", "medical", "fast"],
                creator: "Inj Team",
                duration: "1 min create",
                trending: false
            },
            {
                title: "Once Upon a Galaxy",
                url: "https://galaxy.fun",
                description: "'Once Upon a Galaxy' card-battler portal with playful branding.",
                favicon: "🌌",
                category: "games",
                theme: "space",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["games", "cards", "space"],
                creator: "Galaxy Games",
                duration: "8 min play",
                trending: true
            },
            {
                title: "FunLearning",
                url: "https://funlearning.fun",
                description: "Kids' edu-videos with a cheerful, 'fun first' tone.",
                favicon: "📚",
                category: "education",
                theme: "kids",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["education", "kids", "learning"],
                creator: "EduFun",
                duration: "5 min learn",
                trending: false
            },
            {
                title: "GuruGame",
                url: "https://gurugame.fun",
                description: "Casual mobile game studio site (bright and bouncy).",
                favicon: "🎯",
                category: "games",
                theme: "mobile",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["games", "mobile", "casual"],
                creator: "Guru Games",
                duration: "3 min explore",
                trending: false
            },
            {
                title: "JKLM",
                url: "https://jklm.fun",
                description: "Party mini-games (BombParty, etc.) great for streams & group chaos.",
                favicon: "💣",
                category: "games",
                theme: "explosive",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["games", "party", "bomb"],
                creator: "JKLM Games",
                duration: "15 min play",
                trending: true
            },
            {
                title: "PixelPlanet",
                url: "https://pixelplanet.fun",
                description: "Global pixel canvas; the internet draws… and trolls… together.",
                favicon: "🌍",
                category: "art",
                theme: "global",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["art", "pixel", "global"],
                creator: "Pixel Team",
                duration: "Live",
                trending: true
            },
            {
                title: "CocoFun",
                url: "https://coco.fun",
                description: "Bite-size funny videos/memes (TikTok-ish vibes).",
                favicon: "🥥",
                category: "video",
                theme: "tropical",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["videos", "memes", "funny"],
                creator: "Coco Team",
                duration: "2 min watch",
                trending: false
            },
            {
                title: "Mememe",
                url: "https://mememe.fun",
                description: "AI face-swap & meme GIFs of yourself (instant prank fuel).",
                favicon: "🔄",
                category: "meme",
                theme: "ai",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["memes", "ai", "faceswap"],
                creator: "AI Meme Lab",
                duration: "2 min create",
                trending: true
            },
            {
                title: "MemeCaption",
                url: "https://memecaption.fun",
                description: "Quick AI meme captions from your pics.",
                favicon: "📝",
                category: "meme",
                theme: "ai",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["memes", "ai", "captions"],
                creator: "Caption AI",
                duration: "1 min create",
                trending: false
            },
            {
                title: "Blasto",
                url: "https://blasto.fun",
                description: "Snackable HTML5 games you can open anywhere.",
                favicon: "💥",
                category: "games",
                theme: "explosive",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["games", "html5", "snackable"],
                creator: "Blasto Games",
                duration: "5 min play",
                trending: false
            },
            {
                title: "Basement",
                url: "https://basement.fun",
                description: "Simple arcade-style games collection (casual, tongue-in-cheek).",
                favicon: "🏠",
                category: "games",
                theme: "retro",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["games", "arcade", "retro"],
                creator: "Basement Games",
                duration: "3 min play",
                trending: false
            },
            {
                title: "Cambridge Playlaws",
                url: "https://cambridgeplaylaws.fun",
                description: "Whimsical 'laws of play' crowdsourced for a city; surprisingly funny prompts.",
                favicon: "⚖️",
                category: "community",
                theme: "legal",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["laws", "play", "community"],
                creator: "Cambridge",
                duration: "3 min read",
                trending: false
            },
            {
                title: "FUUN.FUN",
                url: "https://fuun.fun",
                description: "Curated game lists/portals with a goofy, lightweight feel.",
                favicon: "🎪",
                category: "games",
                theme: "carnival",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["games", "curated", "fun"],
                creator: "FUUN Team",
                duration: "5 min browse",
                trending: false
            },
            {
                title: "Katootsie",
                url: "https://katootsie.fun",
                description: "Frantic shout-a-word party game with a peculiar 'Katootsie!' twist",
                favicon: "🎉",
                category: "game",
                theme: "party",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["party", "game", "shout", "word", "twist"],
                creator: "Katootsie",
                duration: "5 min",
                trending: true
            },
            {
                title: "WeirdFest",
                url: "https://weirdfest.fun",
                description: "A real 'WeirdFest' zine + costumes + DIY quest... delightfully odd",
                favicon: "🎭",
                category: "creative",
                theme: "weird",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["weird", "zine", "costumes", "DIY", "odd"],
                creator: "averysmallpress",
                duration: "10 min",
                trending: false
            },
            {
                title: "IOGames Weird",
                url: "https://iogames.fun",
                description: "A whole 'weird' category of browser io games",
                favicon: "🎮",
                category: "game",
                theme: "weird",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["io", "games", "weird", "browser", "multiplayer"],
                creator: "iogames.fun",
                duration: "15 min",
                trending: true
            },
            {
                title: "PixAI",
                url: "https://pixai.fun",
                description: "Anime AI-art generator rabbit hole; some results get truly uncanny",
                favicon: "🎨",
                category: "creative",
                theme: "ai",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["AI", "anime", "art", "generator", "uncanny"],
                creator: "pixai.fun",
                duration: "20 min",
                trending: true
            },
            {
                title: "DucDuc",
                url: "https://ducduc.fun",
                description: "'Real-time' AI image generator; surreal demos abound",
                favicon: "🦆",
                category: "creative",
                theme: "ai",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["AI", "real-time", "image", "generator", "surreal"],
                creator: "ducduc.fun",
                duration: "10 min",
                trending: false
            },
            {
                title: "Decision Maker",
                url: "https://decisionmaker.fun",
                description: "Coin-flip life choices (because chaos is fun)",
                favicon: "🪙",
                category: "tool",
                theme: "decision",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["decision", "coin", "flip", "choices", "chaos"],
                creator: "Decision Maker",
                duration: "2 min",
                trending: false
            },
            {
                title: "KenPlay Random",
                url: "https://kenplay.fun",
                description: "Simple 'cool' random number visualizer with quirky vibes",
                favicon: "🎲",
                category: "tool",
                theme: "random",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["random", "numbers", "visualizer", "quirky", "cool"],
                creator: "kenplay.fun",
                duration: "5 min",
                trending: false
            },
            {
                title: "OP-1 Weird Pack",
                url: "https://op1.fun",
                description: "Niche OP-1 synth 'WEIRD' sound pack page",
                favicon: "🎵",
                category: "creative",
                theme: "music",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["OP-1", "synth", "weird", "sound", "pack"],
                creator: "op1.fun",
                duration: "30 min",
                trending: false
            },
            {
                title: "Gamelandia The Weird",
                url: "https://gamelandia.fun",
                description: "Store page for a 'Weird' RPG add-on—odd but intriguing",
                favicon: "🎲",
                category: "game",
                theme: "rpg",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["RPG", "weird", "add-on", "store", "intriguing"],
                creator: "Gamelandia",
                duration: "45 min",
                trending: false
            },
            {
                title: "Kryne The Flesh",
                url: "https://kryne.fun",
                description: "'The Flesh' superhero parody site (yes, really)",
                favicon: "🦸",
                category: "entertainment",
                theme: "parody",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["superhero", "parody", "flesh", "weird", "comedy"],
                creator: "kryne.fun",
                duration: "8 min",
                trending: true
            },
            {
                title: "Project Good",
                url: "https://projectgood.fun",
                description: "Parody decal product pages (Devil Hunters Parody, etc.)",
                favicon: "🛍️",
                category: "entertainment",
                theme: "parody",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["parody", "decals", "products", "devil", "hunters"],
                creator: "projectgood.fun",
                duration: "12 min",
                trending: false
            },
            {
                title: "BamSam Magic Parody",
                url: "https://bamsam.fun",
                description: "Blog post of a pop-song parody about Magic: The Gathering",
                favicon: "🎤",
                category: "entertainment",
                theme: "music",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["parody", "song", "Magic", "Gathering", "blog"],
                creator: "bamsam.fun",
                duration: "6 min",
                trending: false
            },
            {
                title: "Scary Fun",
                url: "https://scaryfun.fun",
                description: "Horror commentary, creepy stories, and a long-running podcast ('Guide to the Unknown')",
                favicon: "👻",
                category: "entertainment",
                theme: "horror",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["horror", "podcast", "stories", "creepy", "commentary"],
                creator: "Scary Fun",
                duration: "45 min",
                trending: true
            },
            {
                title: "Horrific",
                url: "https://horrific.fun",
                description: "International horror film congress/festival site from Thailand; awards, screenings, cosplay",
                favicon: "🎬",
                category: "entertainment",
                theme: "horror",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["horror", "film", "festival", "Thailand", "cosplay"],
                creator: "horrific.fun",
                duration: "25 min",
                trending: false
            },
            {
                title: "Dark Woods",
                url: "https://darkwoods.fun",
                description: "Haunted attraction park ('What lurks in the shadows?') with jump-scare vibes",
                favicon: "🌲",
                category: "entertainment",
                theme: "horror",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["haunted", "attraction", "park", "shadows", "jump-scare"],
                creator: "darkwoods.fun",
                duration: "30 min",
                trending: true
            },
            {
                title: "Ghost Tour",
                url: "https://ghosttour.fun",
                description: "Self-guided audio ghost tours you run in your browser (multiple cities)",
                favicon: "👻",
                category: "entertainment",
                theme: "horror",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["ghost", "tour", "audio", "browser", "cities"],
                creator: "ghosttour.fun",
                duration: "20 min",
                trending: false
            },
            {
                title: "ABQ Tours",
                url: "https://abqtours.fun",
                description: "Old Town Albuquerque ghost & history tours (nightly, long-running)",
                favicon: "🏛️",
                category: "entertainment",
                theme: "horror",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["Albuquerque", "ghost", "history", "tours", "nightly"],
                creator: "ABQ Tours",
                duration: "60 min",
                trending: false
            },
            {
                title: "Washington County Haunted Trail",
                url: "https://washingtoncounty.fun/haunted-trail",
                description: "Regional Haunted Trail with local ghost lore",
                favicon: "🛤️",
                category: "entertainment",
                theme: "horror",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["haunted", "trail", "regional", "ghost", "lore"],
                creator: "Washington County NY",
                duration: "40 min",
                trending: false
            },
            {
                title: "Deliver Games",
                url: "https://delivergames.fun",
                description: "'Dodgy Deliveries,' a co-op horror game project (Steam landing)",
                favicon: "📦",
                category: "game",
                theme: "horror",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["horror", "game", "co-op", "deliveries", "Steam"],
                creator: "delivergames.fun",
                duration: "90 min",
                trending: true
            },
            {
                title: "Meeples and Wine Horror",
                url: "https://meeplesandwine.fun",
                description: "Board-game podcast posts focused on horror titles",
                favicon: "🎲",
                category: "entertainment",
                theme: "horror",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["board", "games", "podcast", "horror", "titles"],
                creator: "meeplesandwine.fun",
                duration: "35 min",
                trending: false
            },
            {
                title: "Maptime Ghosts",
                url: "https://maptime.fun/hrva/ghosts",
                description: "Open-source tutorial + map of local paranormal activity",
                favicon: "🗺️",
                category: "tool",
                theme: "horror",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["map", "paranormal", "tutorial", "open-source", "ghosts"],
                creator: "Maptime HQ",
                duration: "25 min",
                trending: false
            },
            {
                title: "About The Me Parks",
                url: "https://aboutthemeparks.fun",
                description: "Posts on scary attractions (e.g., Universal's year-round Las Vegas haunt; 'scary moment' features)",
                favicon: "🎢",
                category: "entertainment",
                theme: "horror",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["theme", "parks", "scary", "attractions", "Las Vegas"],
                creator: "aboutthemeparks.fun",
                duration: "18 min",
                trending: false
            },
            {
                title: "Parabola",
                url: "https://parabola.fun",
                description: "Dev blog announcing REFRACTION, a psychological horror game",
                favicon: "🔮",
                category: "game",
                theme: "horror",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["horror", "game", "psychological", "REFRACTION", "dev"],
                creator: "parabola.fun",
                duration: "15 min",
                trending: false
            },
            {
                title: "ToolNest.fun",
                url: "https://toolnest.fun",
                description: "100+ free online tools, converters & calculators.",
                favicon: "🛠️",
                category: "tools",
                theme: "professional",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["tools", "converters", "calculators", "utilities"],
                creator: "ToolNest Team",
                duration: "5 min read",
                trending: true
            },
            {
                title: "LinkPad.fun",
                url: "https://linkpad.fun",
                description: "Handy utilities (YouTube thumbnail downloader, meta checker, image optimizer, etc.).",
                favicon: "🔗",
                category: "tools",
                theme: "utility",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["utilities", "youtube", "image", "meta"],
                creator: "LinkPad Team",
                duration: "3 min read",
                trending: false
            },
            {
                title: "SSYouTube.fun",
                url: "https://ssyoutube.fun",
                description: "Online YouTube video downloader (up to 4K).",
                favicon: "📥",
                category: "tools",
                theme: "download",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["youtube", "downloader", "4k", "video"],
                creator: "SSYouTube Team",
                duration: "2 min read",
                trending: true
            },
            {
                title: "SSSTik.fun",
                url: "https://ssstik.fun",
                description: "TikTok video downloader for iOS.",
                favicon: "📱",
                category: "tools",
                theme: "mobile",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["tiktok", "downloader", "ios", "mobile"],
                creator: "SSSTik Team",
                duration: "2 min read",
                trending: false
            },
            {
                title: "DoodleAI.fun",
                url: "https://doodleai.fun",
                description: "Upload a sketch; AI turns it into artwork or coloring pages.",
                favicon: "🎨",
                category: "ai",
                theme: "creative",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["ai", "art", "sketch", "coloring"],
                creator: "DoodleAI Team",
                duration: "5 min read",
                trending: true
            },
            {
                title: "AICover.fun",
                url: "https://aicover.fun",
                description: "AI song cover generator (multi-language site).",
                favicon: "🎵",
                category: "ai",
                theme: "music",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["ai", "music", "covers", "multi-language"],
                creator: "AICover Team",
                duration: "3 min read",
                trending: true
            },
            {
                title: "PixAI.fun",
                url: "https://pixai.fun",
                description: "Anime-style AI art generator/tools.",
                favicon: "🎭",
                category: "ai",
                theme: "anime",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["ai", "anime", "art", "generator"],
                creator: "PixAI Team",
                duration: "4 min read",
                trending: false
            },
            {
                title: "LetsColor.fun",
                url: "https://letscolor.fun",
                description: "AI artwork generator.",
                favicon: "🌈",
                category: "ai",
                theme: "colorful",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["ai", "art", "color", "generator"],
                creator: "LetsColor Team",
                duration: "3 min read",
                trending: false
            },
            {
                title: "ProTool.fun",
                url: "https://protool.fun",
                description: "Multi-platform video downloader page.",
                favicon: "⚡",
                category: "tools",
                theme: "professional",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["video", "downloader", "multi-platform", "tools"],
                creator: "ProTool Team",
                duration: "2 min read",
                trending: false
            },
            {
                title: "HyperTools.fun",
                url: "https://hypertools.fun",
                description: "Bulk text case conversions (camelCase, snake_case, etc.).",
                favicon: "🔤",
                category: "tools",
                theme: "text",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["text", "converter", "case", "bulk"],
                creator: "HyperTools Team",
                duration: "2 min read",
                trending: false
            },
            {
                title: "Download.vazha.fun",
                url: "https://download.vazha.fun",
                description: "Website downloader (grab site assets/source).",
                favicon: "💾",
                category: "tools",
                theme: "download",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["website", "downloader", "assets", "source"],
                creator: "Vazha Team",
                duration: "3 min read",
                trending: false
            },
            {
                title: "Vivid.fun",
                url: "https://vivid.fun",
                description: "AI photo enhancer (sharpen/blurry fix).",
                favicon: "✨",
                category: "ai",
                theme: "enhancement",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["ai", "photo", "enhancer", "sharpen"],
                creator: "Vivid Team",
                duration: "3 min read",
                trending: true
            },
            {
                title: "PumpPortal.fun",
                url: "https://pumpportal.fun",
                description: "Third-party API for Pump.fun & Raydium data/tx building.",
                favicon: "🚀",
                category: "crypto",
                theme: "professional",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["crypto", "api", "pump.fun", "raydium"],
                creator: "PumpPortal Team",
                duration: "5 min read",
                trending: true
            },
            {
                title: "SmallStep.fun",
                url: "https://smallstep.fun",
                description: "App hub (Android video downloader, GPS camera).",
                favicon: "📱",
                category: "mobile",
                theme: "app",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["android", "video", "gps", "camera"],
                creator: "SmallStep Team",
                duration: "4 min read",
                trending: false
            },
            {
                title: "Quotica.fun",
                url: "https://quotica.fun",
                description: "AI image generator with share/download flows.",
                favicon: "🖼️",
                category: "ai",
                theme: "social",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["ai", "image", "generator", "share"],
                creator: "Quotica Team",
                duration: "4 min read",
                trending: false
            },
            {
                title: "DucDuc.fun",
                url: "https://ducduc.fun",
                description: "Real-time AI image generator (browser).",
                favicon: "🎨",
                category: "ai",
                theme: "realtime",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["ai", "realtime", "image", "browser"],
                creator: "DucDuc Team",
                duration: "3 min read",
                trending: true
            },
            {
                title: "Translators.fun",
                url: "https://translators.fun",
                description: "Fun text converters (Pig Latin and more).",
                favicon: "🔤",
                category: "text",
                theme: "fun",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["text", "converter", "pig-latin", "fun"],
                creator: "Translators Team",
                duration: "2 min read",
                trending: false
            },
            {
                title: "FontGenerator.fun",
                url: "https://fontgenerator.fun",
                description: "180+ fancy/copy-paste text styles.",
                favicon: "✨",
                category: "text",
                theme: "stylish",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["fonts", "text", "styles", "fancy"],
                creator: "FontGenerator Team",
                duration: "3 min read",
                trending: true
            },
            {
                title: "TakeUp.fun",
                url: "https://takeup.fun",
                description: "Social utility app (Android) for meeting/activities.",
                favicon: "🤝",
                category: "social",
                theme: "community",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["social", "meeting", "activities", "android"],
                creator: "TakeUp Team",
                duration: "4 min read",
                trending: false
            },
            {
                title: "Rent.fun",
                url: "https://rent.fun",
                description: "Kayak rental network (scan to unlock).",
                favicon: "🚣",
                category: "rental",
                theme: "outdoor",
                engagement: { likes: 0, comments: 0, shares: 0, views: 0 },
                tags: ["kayak", "rental", "outdoor", "scan"],
                creator: "Rent.fun Team",
                duration: "3 min read",
                trending: false
            }
        ];

        this.currentIndex = 0;
        this.isTransitioning = false;
        this.startY = 0;
        this.currentY = 0;
        this.isDragging = false;
        this.currentWebsite = null;
        this.scrollVelocity = 0;
        this.lastScrollTime = 0;
        this.scrollDirection = 'down';
        this.isScrolling = false;
        this.shuffledWebsites = [];
        this.shuffleWebsites();
        this.currentSearchTerm = '';
        this.currentCategory = 'all';

        this.init();
    }

    init() {
        this.setupElements();
        this.initializeSupabase();
        this.setupLoginModal();
        this.renderFeed();
        this.setupEventListeners();
        this.setupActionButtons();
        this.hideLoading();
    }

    shuffleWebsites() {
        this.shuffledWebsites = [...this.websites];
        for (let i = this.shuffledWebsites.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.shuffledWebsites[i], this.shuffledWebsites[j]] = [this.shuffledWebsites[j], this.shuffledWebsites[i]];
        }
    }

    setupElements() {
        this.feedContainer = document.getElementById('feedContainer');
        this.videoFeed = document.getElementById('videoFeed');
        this.websiteOverlay = document.getElementById('websiteOverlay');
        this.websiteFrame = document.getElementById('websiteFrame');
        this.backBtn = document.getElementById('backBtn');
        this.externalBtn = document.getElementById('externalBtn');
        this.loadingScreen = document.getElementById('loadingScreen');
        this.actionButtons = document.querySelectorAll('.action-btn');
        this.scrollProgress = document.getElementById('scrollProgress');
        this.scrollIndicator = document.getElementById('scrollIndicator');
        this.velocityIndicator = document.getElementById('velocityIndicator');
        this.loginModal = document.getElementById('loginModal');
        this.loginForm = document.getElementById('loginForm');
        this.loginClose = document.getElementById('loginClose');
    }

    setupLoginModal() {
        // Show login modal when user tries to interact without being logged in
        this.loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        this.loginClose.addEventListener('click', () => {
            this.hideLoginModal();
        });

        // Close modal when clicking outside
        this.loginModal.addEventListener('click', (e) => {
            if (e.target === this.loginModal) {
                this.hideLoginModal();
            }
        });
    }

    handleLogin() {
        const email = document.getElementById('userEmail').value;
        const name = document.getElementById('userName').value;

        if (!email || !name) {
            this.showToast('Please fill in all fields');
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showToast('Please enter a valid email address');
            return;
        }

        // Create user object
        this.currentUser = {
            id: email.replace('@', '_').replace('.', '_'),
            email: email,
            name: name
        };

        this.isLoggedIn = true;
        this.updateProfileDisplay();
        this.hideLoginModal();
        this.showToast(`Welcome, ${name}!`);
    }

    showLoginModal() {
        this.loginModal.style.display = 'flex';
    }

    hideLoginModal() {
        this.loginModal.style.display = 'none';
    }

    updateProfileDisplay() {
        if (this.isLoggedIn && this.currentUser) {
            document.getElementById('profileName').textContent = this.currentUser.name;
            document.getElementById('profileEmail').textContent = this.currentUser.email;
        } else {
            document.getElementById('profileName').textContent = 'Guest User';
            document.getElementById('profileEmail').textContent = 'Not signed in';
        }
    }

    checkAuth(action) {
        if (!this.isLoggedIn) {
            this.showLoginModal();
            this.showToast(`Please sign in to ${action}`);
            return false;
        }
        return true;
    }

    async initializeSupabase() {
        try {
            // Get current user
            this.currentUser = await this.supabaseService.getCurrentUser();
            
            if (this.currentUser) {
                console.log('User authenticated:', this.currentUser.email);
                // Load user interactions for all websites
                await this.loadUserInteractions();
            } else {
                console.log('No user authenticated');
            }
        } catch (error) {
            console.error('Error initializing Supabase:', error);
        }
    }

    async loadUserInteractions() {
        if (!this.currentUser) return;
        
        try {
            // Load user's likes and bookmarks
            const [likesResult, bookmarksResult] = await Promise.all([
                this.supabaseService.getUserLikes(this.currentUser.id),
                this.supabaseService.getUserBookmarks(this.currentUser.id)
            ]);

            // Cache user interactions
            if (likesResult.success) {
                likesResult.data.forEach(like => {
                    this.userInteractions.set(like.website_url, {
                        liked: true,
                        bookmarked: this.userInteractions.get(like.website_url)?.bookmarked || false
                    });
                });
            }

            if (bookmarksResult.success) {
                bookmarksResult.data.forEach(bookmark => {
                    const existing = this.userInteractions.get(bookmark.website_url) || {};
                    this.userInteractions.set(bookmark.website_url, {
                        ...existing,
                        bookmarked: true
                    });
                });
            }
        } catch (error) {
            console.error('Error loading user interactions:', error);
        }
    }

    renderFeed() {
        this.videoFeed.innerHTML = '';
        
        // Create video cards for current and next items using shuffled order
        for (let i = 0; i < Math.min(3, this.shuffledWebsites.length); i++) {
            const website = this.shuffledWebsites[(this.currentIndex + i) % this.shuffledWebsites.length];
            const card = this.createVideoCard(website, i);
            this.videoFeed.appendChild(card);
        }
        
        // Set active card
        const cards = this.videoFeed.querySelectorAll('.video-card');
        cards.forEach((card, index) => {
            if (index === 0) {
                card.classList.add('active');
            }
        });
    }

    createVideoCard(website, index) {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.style.zIndex = 3 - index;
        
        // Add category-based styling
        card.classList.add(`theme-${website.theme}`);
        if (website.trending) card.classList.add('trending');
        
        card.innerHTML = `
            <div class="video-content">
                <div class="logo-background">
                    <img src="${this.getFaviconUrl(website.url)}" alt="${website.title}" class="background-logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="background-fallback" style="display: none;">
                        <img src="logo/ChatGPT Image Oct 6, 2025, 10_23_23 PM.png" alt="WeLike.fun Logo" class="animated-logo-fallback">
                    </div>
                </div>
                <div class="content-overlay">
                    <div class="content-layout">
                        <div class="left-content">
                            <div class="website-info">
                                <h2 class="website-title">${website.title}</h2>
                                <p class="website-description">${website.description}</p>
                                <div class="tags">
                                    ${website.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                        
                        <div class="right-content">
                            <!-- TikTok-style Action Buttons -->
                            <div class="tiktok-actions">
                                <div class="action-item">
                                    <button class="tiktok-action-btn like-btn" data-website-url="${website.url}">
                                        <img src="logo.png" alt="Like" class="like-logo">
                                        <span class="count">${this.formatNumber(website.engagement.likes)}</span>
                                    </button>
                                </div>
                                <div class="action-item">
                                    <button class="tiktok-action-btn comment-btn" data-website-url="${website.url}">
                                        <i class="far fa-comment"></i>
                                        <span class="count">${this.formatNumber(website.engagement.comments)}</span>
                                    </button>
                                </div>
                                <div class="action-item">
                                    <button class="tiktok-action-btn share-btn" data-website-url="${website.url}">
                                        <i class="fas fa-share"></i>
                                        <span class="count">${this.formatNumber(website.engagement.shares)}</span>
                                    </button>
                                </div>
                                <div class="action-item">
                                    <button class="tiktok-action-btn bookmark-btn" data-website-url="${website.url}">
                                        <i class="far fa-bookmark"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <div class="iframe-preview">
                                <div class="iframe-container">
                                    <iframe 
                                        src="${website.url}" 
                                        frameborder="0"
                                        loading="lazy"
                                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                        onload="this.parentElement.querySelector('.iframe-loading').style.display='none'"
                                        onerror="this.parentElement.querySelector('.iframe-error').style.display='flex'">
                                    </iframe>
                                    <div class="iframe-loading">
                                        <div class="loading-container">
                                            <div class="loading-spinner">
                                                <div class="loading-progress-ring"></div>
                                            </div>
                                            <div class="loading-progress-bar">
                                                <div class="loading-progress-fill"></div>
                                            </div>
                                            <div class="loading-text">Loading preview</div>
                                            <div class="loading-percentage">0%</div>
                                            <div class="loading-dots">
                                                <div class="loading-dot"></div>
                                                <div class="loading-dot"></div>
                                                <div class="loading-dot"></div>
                                            </div>
                                            <div class="loading-status">Connecting to website...</div>
                                        </div>
                                    </div>
                                    <div class="iframe-error" style="display: none;">
                                        <i class="fas fa-external-link-alt"></i>
                                        <span>Website can be viewed with the external link</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add click event
        card.addEventListener('click', (e) => {
            // Don't open website if clicking on iframe, controls, or action buttons
            if (!e.target.closest('.iframe-preview') && !e.target.closest('.reel-actions')) {
                this.openWebsite(website);
            }
        });

        // Add event listeners to individual reel action buttons
        console.log('Card created for:', website.title);
        console.log('TikTok actions div:', card.querySelector('.tiktok-actions'));
        this.setupReelActionButtons(card, website);
        
        
        // Add unique animations based on category
        this.addCategoryAnimations(card, website);
        
        return card;
    }

    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    addCategoryAnimations(card, website) {
        // Add unique static visual effects based on category
        switch(website.category) {
            case 'meme':
                card.classList.add('meme-frame');
                break;
            case 'games':
                card.classList.add('game-frame');
                break;
            case 'comedy':
                card.classList.add('comedy-frame');
                break;
            case 'social':
                card.classList.add('social-frame');
                break;
            case 'video':
                card.classList.add('video-frame');
                break;
            case 'tools':
                card.classList.add('tools-frame');
                break;
            case 'education':
                card.classList.add('education-frame');
                break;
            case 'business':
                card.classList.add('business-frame');
                break;
            case 'creative':
                card.classList.add('creative-frame');
                break;
            case 'lifestyle':
                card.classList.add('lifestyle-frame');
                break;
            case 'developer':
                card.classList.add('developer-frame');
                break;
            case 'art':
                card.classList.add('art-frame');
                break;
            case 'entertainment':
                card.classList.add('entertainment-frame');
                break;
            case 'community':
                card.classList.add('community-frame');
                break;
            case 'crypto':
                card.classList.add('crypto-frame');
                break;
            default:
                card.classList.add('default-frame');
        }
    }

    getFaviconUrl(url) {
        try {
            const domain = new URL(url).hostname;
            // Use Google's favicon service for reliable favicon fetching
            return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
        } catch (error) {
            // Fallback to a generic favicon service
            return `https://favicons.githubusercontent.com/${url}`;
        }
    }

    createAnimatedEffects(website) {
        const category = website.category;
        const theme = website.theme;
        const title = website.title.toLowerCase();
        
        // Create animated effects around the real logo based on category
        switch(category) {
            case 'meme':
                return this.createMemeEffects(title, theme);
            case 'game':
                return this.createGameEffects(title, theme);
            case 'comedy':
                return this.createComedyEffects(title, theme);
            case 'social':
                return this.createSocialEffects(title, theme);
            case 'video':
                return this.createVideoEffects(title, theme);
            case 'tool':
                return this.createToolEffects(title, theme);
            case 'creative':
                return this.createCreativeEffects(title, theme);
            case 'educational':
                return this.createEducationalEffects(title, theme);
            case 'entertainment':
                return this.createEntertainmentEffects(title, theme);
            case 'user-uploaded':
                return this.createUserEffects(title, theme);
            case 'crypto':
                return this.createCryptoEffects(title, theme);
            default:
                return this.createDefaultEffects(title, theme);
        }
    }

    createMemeEffects(title, theme) {
        return `
            <div class="meme-effects">
                <div class="sparkle sparkle-1">✨</div>
                <div class="sparkle sparkle-2">⭐</div>
                <div class="sparkle sparkle-3">💫</div>
                <div class="meme-particles">
                    <div class="particle particle-1">😂</div>
                    <div class="particle particle-2">🤣</div>
                    <div class="particle particle-3">🔥</div>
                </div>
            </div>
        `;
    }

    createGameEffects(title, theme) {
        return `
            <div class="game-effects">
                <div class="game-particles">
                    <div class="particle particle-1">🎮</div>
                    <div class="particle particle-2">🎯</div>
                    <div class="particle particle-3">🏆</div>
                </div>
                <div class="game-energy">
                    <div class="energy energy-1"></div>
                    <div class="energy energy-2"></div>
                </div>
            </div>
        `;
    }

    createComedyEffects(title, theme) {
        return `
            <div class="comedy-effects">
                <div class="laugh-waves">
                    <div class="wave wave-1">😂</div>
                    <div class="wave wave-2">🤣</div>
                </div>
                <div class="comedy-sparkles">
                    <div class="sparkle sparkle-1">✨</div>
                    <div class="sparkle sparkle-2">⭐</div>
                </div>
            </div>
        `;
    }

    createSocialEffects(title, theme) {
        return `
            <div class="social-effects">
                <div class="connection-lines">
                    <div class="line line-1"></div>
                    <div class="line line-2"></div>
                    <div class="line line-3"></div>
                </div>
                <div class="social-particles">
                    <div class="particle particle-1">💬</div>
                    <div class="particle particle-2">👥</div>
                </div>
            </div>
        `;
    }

    createVideoEffects(title, theme) {
        return `
            <div class="video-effects">
                <div class="play-button">▶️</div>
                <div class="video-waves">
                    <div class="wave wave-1"></div>
                    <div class="wave wave-2"></div>
                    <div class="wave wave-3"></div>
                </div>
                <div class="video-particles">
                    <div class="particle particle-1">🎬</div>
                    <div class="particle particle-2">📹</div>
                </div>
            </div>
        `;
    }

    createToolEffects(title, theme) {
        return `
            <div class="tool-effects">
                <div class="tool-sparks">
                    <div class="spark spark-1">⚡</div>
                    <div class="spark spark-2">💡</div>
                </div>
                <div class="tool-energy">
                    <div class="energy energy-1"></div>
                    <div class="energy energy-2"></div>
                </div>
            </div>
        `;
    }

    createCreativeEffects(title, theme) {
        return `
            <div class="creative-effects">
                <div class="paint-drops">
                    <div class="drop drop-1">🎨</div>
                    <div class="drop drop-2">🌈</div>
                    <div class="drop drop-3">✨</div>
                </div>
                <div class="creative-sparkles">
                    <div class="sparkle sparkle-1">✨</div>
                    <div class="sparkle sparkle-2">💫</div>
                </div>
            </div>
        `;
    }

    createEducationalEffects(title, theme) {
        return `
            <div class="educational-effects">
                <div class="knowledge-particles">
                    <div class="particle particle-1">💡</div>
                    <div class="particle particle-2">📚</div>
                    <div class="particle particle-3">🧠</div>
                </div>
                <div class="edu-sparkles">
                    <div class="sparkle sparkle-1">✨</div>
                    <div class="sparkle sparkle-2">⭐</div>
                </div>
            </div>
        `;
    }

    createEntertainmentEffects(title, theme) {
        return `
            <div class="entertainment-effects">
                <div class="entertainment-particles">
                    <div class="particle particle-1">🎵</div>
                    <div class="particle particle-2">🎭</div>
                    <div class="particle particle-3">🎪</div>
                </div>
                <div class="entertainment-sparkles">
                    <div class="sparkle sparkle-1">✨</div>
                    <div class="sparkle sparkle-2">⭐</div>
                </div>
            </div>
        `;
    }

    createUserEffects(title, theme) {
        return `
            <div class="user-effects">
                <div class="user-badge">NEW</div>
                <div class="user-sparkles">
                    <div class="sparkle sparkle-1">✨</div>
                    <div class="sparkle sparkle-2">⭐</div>
                </div>
                <div class="user-particles">
                    <div class="particle particle-1">🚀</div>
                    <div class="particle particle-2">💻</div>
                </div>
            </div>
        `;
    }

    createCryptoEffects(title, theme) {
        return `
            <div class="crypto-effects">
                <div class="crypto-particles">
                    <div class="particle particle-1">💰</div>
                    <div class="particle particle-2">🚀</div>
                    <div class="particle particle-3">💎</div>
                </div>
                <div class="crypto-sparkles">
                    <div class="sparkle sparkle-1">✨</div>
                    <div class="sparkle sparkle-2">⭐</div>
                </div>
                <div class="crypto-energy">
                    <div class="energy energy-1"></div>
                    <div class="energy energy-2"></div>
                </div>
            </div>
        `;
    }

    createDefaultEffects(title, theme) {
        return `
            <div class="default-effects">
                <div class="default-pulse"></div>
                <div class="default-sparkles">
                    <div class="sparkle sparkle-1">✨</div>
                    <div class="sparkle sparkle-2">⭐</div>
                </div>
            </div>
        `;
    }

    openWebsite(website) {
        this.currentWebsite = website;
        this.websiteFrame.src = website.url;
        this.websiteOverlay.classList.add('active');
        
        // Update overlay title
        const title = this.websiteOverlay.querySelector('.website-title');
        title.textContent = website.title;
    }

    closeWebsite() {
        this.websiteOverlay.classList.remove('active');
        this.websiteFrame.src = '';
        this.currentWebsite = null;
    }

    setupEventListeners() {
        // Touch events for swipe
        this.feedContainer.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
        this.feedContainer.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
        this.feedContainer.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: false });
        
        // Mouse events for desktop
        this.feedContainer.addEventListener('mousedown', this.handleMouseDown.bind(this));
        this.feedContainer.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.feedContainer.addEventListener('mouseup', this.handleMouseUp.bind(this));
        this.feedContainer.addEventListener('mouseleave', this.handleMouseUp.bind(this));
        
        // Wheel events for desktop scrolling
        this.feedContainer.addEventListener('wheel', this.handleWheel.bind(this), { passive: false });
        
        // Overlay events
        this.backBtn.addEventListener('click', () => this.closeWebsite());
        this.externalBtn.addEventListener('click', () => {
            if (this.currentWebsite) {
                window.open(this.currentWebsite.url, '_blank');
            }
        });
        
        // Navigation events
        this.setupNavigation();
        
        // Upload form events
        this.setupUploadForm();
        
        // Profile tab events
        this.setupProfileTabs();
        
        // Action button events
        this.actionButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleActionClick(btn);
            });
        });
        
        // Keyboard events
        document.addEventListener('keydown', this.handleKeydown.bind(this));
        
        // Prevent context menu
        this.feedContainer.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    handleTouchStart(e) {
        this.startY = e.touches[0].clientY;
        this.isDragging = true;
    }

    handleTouchMove(e) {
        if (!this.isDragging) return;
        
        e.preventDefault();
        this.currentY = e.touches[0].clientY;
        const deltaY = this.currentY - this.startY;
        const currentTime = Date.now();
        
        // Calculate scroll velocity
        if (this.lastScrollTime > 0) {
            this.scrollVelocity = Math.abs(deltaY) / (currentTime - this.lastScrollTime);
        }
        this.lastScrollTime = currentTime;
        
        // Update scroll direction
        this.scrollDirection = deltaY > 0 ? 'down' : 'up';
        
        // Add visual feedback
        const activeCard = this.videoFeed.querySelector('.video-card.active');
        if (activeCard) {
            activeCard.style.transform = `translateY(${deltaY * 0.3}px)`;
            activeCard.classList.add('scrolling');
            
            // Add direction-specific classes
            if (deltaY > 0) {
                activeCard.classList.add('scroll-down');
                activeCard.classList.remove('scroll-up');
            } else {
                activeCard.classList.add('scroll-up');
                activeCard.classList.remove('scroll-down');
            }
        }
        
        // Update scroll indicators
        this.updateScrollIndicators(deltaY);
        
        // Add scroll particles
        this.createScrollParticles(deltaY);
    }

    handleTouchEnd(e) {
        if (!this.isDragging) return;
        
        this.isDragging = false;
        const deltaY = this.currentY - this.startY;
        const threshold = 50;
        
        // Reset card position and classes
        const activeCard = this.videoFeed.querySelector('.video-card.active');
        if (activeCard) {
            activeCard.style.transform = '';
            activeCard.classList.remove('scrolling', 'scroll-up', 'scroll-down');
        }
        
        // Add momentum effect
        this.addMomentumEffect(deltaY);
        
        if (Math.abs(deltaY) > threshold) {
            if (deltaY > 0) {
                this.previousVideo();
            } else {
                this.nextVideo();
            }
        } else {
            // Add haptic feedback for small movements
            this.addHapticFeedback();
        }
        
        // Reset scroll indicators
        this.resetScrollIndicators();
    }

    handleMouseDown(e) {
        this.startY = e.clientY;
        this.isDragging = true;
        e.preventDefault();
    }

    handleMouseMove(e) {
        if (!this.isDragging) return;
        
        e.preventDefault();
        this.currentY = e.clientY;
        const deltaY = this.currentY - this.startY;
        
        const activeCard = this.videoFeed.querySelector('.video-card.active');
        if (activeCard) {
            activeCard.style.transform = `translateY(${deltaY * 0.3}px)`;
        }
    }

    handleMouseUp(e) {
        if (!this.isDragging) return;
        
        this.isDragging = false;
        const deltaY = this.currentY - this.startY;
        const threshold = 50;
        
        const activeCard = this.videoFeed.querySelector('.video-card.active');
        if (activeCard) {
            activeCard.style.transform = '';
        }
        
        if (Math.abs(deltaY) > threshold) {
            if (deltaY > 0) {
                this.previousVideo();
            } else {
                this.nextVideo();
            }
        }
    }

    handleWheel(e) {
        e.preventDefault();
        
        if (e.deltaY > 0) {
            this.nextVideo();
        } else {
            this.previousVideo();
        }
    }

    handleKeydown(e) {
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                this.previousVideo();
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.nextVideo();
                break;
            case 'Escape':
                if (this.websiteOverlay.classList.contains('active')) {
                    this.closeWebsite();
                }
                break;
        }
    }

    handleActionClick(btn) {
        // Add animation and update counts
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
        
        // Get current website for dynamic stats
        const currentWebsite = this.websites[this.currentIndex];
        
        // Update like button
        if (btn.classList.contains('like-btn')) {
            btn.classList.toggle('liked');
            const count = btn.querySelector('.count');
            if (btn.classList.contains('liked')) {
                const newCount = Math.floor(Math.random() * 1000) + 1000;
                count.textContent = this.formatNumber(newCount);
            } else {
                const newCount = Math.floor(Math.random() * 500) + 500;
                count.textContent = this.formatNumber(newCount);
            }
        }
        
        // Update comment button
        if (btn.classList.contains('comment-btn')) {
            const count = btn.querySelector('.count');
            const newCount = Math.floor(Math.random() * 200) + 50;
            count.textContent = this.formatNumber(newCount);
        }
        
        // Update share button
        if (btn.classList.contains('share-btn')) {
            const count = btn.querySelector('.count');
            const newCount = Math.floor(Math.random() * 100) + 20;
            count.textContent = this.formatNumber(newCount);
        }
        
        // Add unique effects based on website category
        this.addInteractionEffects(btn, currentWebsite);
    }

    addInteractionEffects(btn, website) {
        // Add category-specific interaction effects
        switch(website.category) {
            case 'meme':
                this.createMemeEffect(btn);
                break;
            case 'games':
                this.createGameEffect(btn);
                break;
            case 'comedy':
                this.createComedyEffect(btn);
                break;
            case 'social':
                this.createSocialEffect(btn);
                break;
            case 'video':
                this.createVideoEffect(btn);
                break;
        }
    }

    createMemeEffect(btn) {
        // Add meme-style particle effect
        const particles = document.createElement('div');
        particles.className = 'meme-particles';
        particles.innerHTML = '😂😂😂';
        btn.appendChild(particles);
        setTimeout(() => particles.remove(), 1000);
    }

    createGameEffect(btn) {
        // Add game-style power-up effect
        btn.style.boxShadow = '0 0 20px #25f4ee';
        setTimeout(() => {
            btn.style.boxShadow = '';
        }, 500);
    }

    createComedyEffect(btn) {
        // Add comedy shake effect
        btn.style.animation = 'comedyShake 0.5s ease-in-out';
        setTimeout(() => {
            btn.style.animation = '';
        }, 500);
    }

    createSocialEffect(btn) {
        // Add social glow effect
        btn.style.background = 'linear-gradient(45deg, #fe2c55, #25f4ee)';
        setTimeout(() => {
            btn.style.background = '';
        }, 300);
    }

    createVideoEffect(btn) {
        // Add video-style zoom effect
        btn.style.transform = 'scale(1.3) rotate(5deg)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 200);
    }

    nextVideo() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentIndex = (this.currentIndex + 1) % this.shuffledWebsites.length;
        
        // Reshuffle when we reach the end
        if (this.currentIndex === 0) {
            this.shuffleWebsites();
        }
        
        // Add scroll transition effect
        this.videoFeed.classList.add('fast-scroll');
        
        // Animate current card out
        const activeCard = this.videoFeed.querySelector('.video-card.active');
        if (activeCard) {
            activeCard.classList.add('prev');
            activeCard.classList.remove('active');
        }
        
        // Update cards
        setTimeout(() => {
            this.renderFeed();
            this.isTransitioning = false;
            this.videoFeed.classList.remove('fast-scroll');
            this.updateProgressDots();
        }, 300);
    }

    previousVideo() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentIndex = (this.currentIndex - 1 + this.shuffledWebsites.length) % this.shuffledWebsites.length;
        
        // Add scroll transition effect
        this.videoFeed.classList.add('fast-scroll');
        
        // Animate current card out
        const activeCard = this.videoFeed.querySelector('.video-card.active');
        if (activeCard) {
            activeCard.classList.add('prev');
            activeCard.classList.remove('active');
        }
        
        // Update cards
        setTimeout(() => {
            this.renderFeed();
            this.isTransitioning = false;
            this.videoFeed.classList.remove('fast-scroll');
            this.updateProgressDots();
        }, 300);
    }

    hideLoading() {
        setTimeout(() => {
            this.loadingScreen.classList.add('hidden');
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
            }, 500);
        }, 2000);
    }

    // Scroll Visual Effects
    updateScrollIndicators(deltaY) {
        // Update progress bar
        const progressBar = this.scrollProgress.querySelector('.progress-bar::after');
        const progress = Math.min(Math.abs(deltaY) / 200, 1);
        
        // Update velocity indicator
        const velocityBar = this.velocityIndicator.querySelector('.velocity-bar');
        const velocityHeight = Math.min(this.scrollVelocity * 10, 100);
        velocityBar.style.height = `${velocityHeight}%`;
        
        // Show scroll direction indicator
        if (Math.abs(deltaY) > 20) {
            this.scrollIndicator.classList.add('visible');
        }
    }

    createScrollParticles(deltaY) {
        if (Math.abs(deltaY) > 30 && Math.random() > 0.7) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            particle.style.background = Math.random() > 0.5 ? '#fe2c55' : '#25f4ee';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }

    addMomentumEffect(deltaY) {
        const velocity = Math.abs(deltaY) / 100;
        if (velocity > 0.5) {
            this.videoFeed.classList.add('momentum');
            setTimeout(() => {
                this.videoFeed.classList.remove('momentum');
            }, 600);
        }
    }

    addHapticFeedback() {
        this.videoFeed.classList.add('haptic');
        setTimeout(() => {
            this.videoFeed.classList.remove('haptic');
        }, 100);
    }

    resetScrollIndicators() {
        // Reset velocity indicator
        const velocityBar = this.velocityIndicator.querySelector('.velocity-bar');
        velocityBar.style.height = '0%';
        
        // Hide scroll direction indicator
        this.scrollIndicator.classList.remove('visible');
        
        // Update progress dots
        this.updateProgressDots();
    }

    updateProgressDots() {
        const dots = this.scrollProgress.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex % 3);
        });
    }

    
    startLoadingProgress(card) {
        const loading = card.querySelector('.iframe-loading');
        const progressFill = card.querySelector('.loading-progress-fill');
        const percentage = card.querySelector('.loading-percentage');
        const status = card.querySelector('.loading-status');
        const iframe = card.querySelector('iframe');
        
        if (!loading || !progressFill || !percentage || !status) return;
        
        let progress = 0;
        const statusMessages = [
            'Connecting to website...',
            'Loading resources...',
            'Rendering content...',
            'Almost ready...',
            'Finalizing...'
        ];
        
        const progressInterval = setInterval(() => {
            progress += Math.random() * 15 + 5; // Random progress increment
            
            if (progress > 100) progress = 100;
            
            progressFill.style.width = progress + '%';
            percentage.textContent = Math.round(progress) + '%';
            
            // Update status message based on progress
            const statusIndex = Math.min(Math.floor(progress / 20), statusMessages.length - 1);
            status.textContent = statusMessages[statusIndex];
            
            // Add glow effect when near completion
            if (progress > 80) {
                percentage.style.textShadow = '0 0 20px rgba(37, 244, 238, 0.8)';
            }
            
            if (progress >= 100) {
                clearInterval(progressInterval);
                // Hide loading after a short delay
                setTimeout(() => {
                    loading.style.display = 'none';
                }, 500);
            }
        }, 200);
        
        // Also listen for iframe load event
        iframe.addEventListener('load', () => {
            clearInterval(progressInterval);
            progressFill.style.width = '100%';
            percentage.textContent = '100%';
            status.textContent = 'Complete!';
            
            setTimeout(() => {
                loading.style.display = 'none';
            }, 300);
        });
        
        // Handle iframe error
        iframe.addEventListener('error', () => {
            clearInterval(progressInterval);
            const error = card.querySelector('.iframe-error');
            if (error) {
                loading.style.display = 'none';
                error.style.display = 'flex';
            }
        });
    }

    setupActionButtons() {
        // Global action buttons removed - now using individual reel buttons
    }

    setupReelActionButtons(card, website) {
        const likeBtn = card.querySelector('.tiktok-action-btn.like-btn');
        const commentBtn = card.querySelector('.tiktok-action-btn.comment-btn');
        const shareBtn = card.querySelector('.tiktok-action-btn.share-btn');
        const bookmarkBtn = card.querySelector('.tiktok-action-btn.bookmark-btn');
        
        console.log('Setting up reel action buttons for:', website.title);
        console.log('Found buttons:', { likeBtn, commentBtn, shareBtn, bookmarkBtn });
        
        if (likeBtn) {
            likeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleLike(card, website, likeBtn);
            });
        }
        
        if (commentBtn) {
            commentBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleComment(card, website, commentBtn);
            });
        }
        
        if (shareBtn) {
            shareBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleShare(website, shareBtn);
            });
        }
        
        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleBookmark(card, website, bookmarkBtn);
            });
        }
    }

    getCurrentCard() {
        const cards = document.querySelectorAll('.video-card');
        return cards[this.currentIndex] || null;
    }

    async handleLike(card, website, likeBtn) {
        if (!this.checkAuth('like websites')) {
            return;
        }

        const isLiked = likeBtn.classList.contains('liked');
        const countElement = likeBtn.querySelector('.count');
        let currentCount = parseInt(countElement.textContent.replace(/[^\d]/g, '')) || 0;
        
        try {
            const result = await this.supabaseService.toggleLike(this.currentUser.id, website.url);
            
            if (result.success) {
                if (result.liked) {
                    // Like
                    likeBtn.classList.add('liked');
                    website.engagement.likes += 1;
                    likeBtn.innerHTML = `<img src="logo.png" alt="Like" class="like-logo liked"><span class="count">${this.formatNumber(website.engagement.likes)}</span>`;
                    this.createLikeAnimation(card, true);
                    
                    // Update cache
                    const existing = this.userInteractions.get(website.url) || {};
                    this.userInteractions.set(website.url, { ...existing, liked: true });
                } else {
                    // Unlike
                    likeBtn.classList.remove('liked');
                    website.engagement.likes -= 1;
                    likeBtn.innerHTML = `<img src="logo.png" alt="Like" class="like-logo"><span class="count">${this.formatNumber(website.engagement.likes)}</span>`;
                    this.createLikeAnimation(card, false);
                    
                    // Update cache
                    const existing = this.userInteractions.get(website.url) || {};
                    this.userInteractions.set(website.url, { ...existing, liked: false });
                }
                
                // Add haptic feedback
                this.addHapticFeedback();
            } else {
                this.showToast('Error updating like: ' + result.error);
            }
        } catch (error) {
            console.error('Error handling like:', error);
            this.showToast('Error updating like');
        }
    }

    handleComment(card, website, commentBtn) {
        if (!this.checkAuth('add comments')) {
            return;
        }
        // Show comment modal
        this.showCommentModal(website);
    }

    showCommentModal(website) {
        // Create comment modal
        const modal = document.createElement('div');
        modal.className = 'comment-modal';
        modal.innerHTML = `
            <div class="comment-modal-content">
                <div class="comment-modal-header">
                    <h3>Add Comment</h3>
                    <button class="comment-modal-close">&times;</button>
                </div>
                <div class="comment-modal-body">
                    <div class="comment-website-info">
                        <img src="${this.getFaviconUrl(website.url)}" alt="${website.title}" class="comment-website-logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="comment-website-fallback" style="display: none;">
                            <img src="logo/ChatGPT Image Oct 6, 2025, 10_23_23 PM.png" alt="WeLike.fun Logo" class="animated-logo-fallback">
                        </div>
                        <div class="comment-website-details">
                            <h4>${website.title}</h4>
                            <p>${website.description}</p>
                        </div>
                    </div>
                    <textarea class="comment-input" placeholder="Write your comment..." maxlength="500"></textarea>
                    <div class="comment-char-count">0/500</div>
                </div>
                <div class="comment-modal-footer">
                    <button class="comment-cancel">Cancel</button>
                    <button class="comment-submit">Post Comment</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add event listeners
        const closeBtn = modal.querySelector('.comment-modal-close');
        const cancelBtn = modal.querySelector('.comment-cancel');
        const submitBtn = modal.querySelector('.comment-submit');
        const textarea = modal.querySelector('.comment-input');
        const charCount = modal.querySelector('.comment-char-count');
        
        // Close modal
        const closeModal = () => {
            document.body.removeChild(modal);
        };
        
        closeBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        
        // Character count
        textarea.addEventListener('input', () => {
            const count = textarea.value.length;
            charCount.textContent = `${count}/500`;
            charCount.style.color = count > 450 ? '#fe2c55' : '#999';
        });
        
        // Submit comment
        submitBtn.addEventListener('click', () => {
            const commentText = textarea.value.trim();
            if (commentText.length === 0) {
                this.showToast('Please write a comment');
                return;
            }
            
            this.submitComment(website, commentText);
            closeModal();
        });
        
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Focus textarea
        setTimeout(() => textarea.focus(), 100);
    }

    async submitComment(website, commentText) {
        try {
            if (this.currentUser) {
                // Save to Supabase
                const result = await this.supabaseService.addComment(
                    this.currentUser.id,
                    website.url,
                    commentText
                );
                
                if (result.success) {
                    // Update local engagement
                    website.engagement.comments += 1;
                    this.updateEngagementDisplay();
                    this.showToast('Comment posted!');
                    this.createCommentAnimation();
                } else {
                    this.showToast('Failed to post comment');
                }
            } else {
                // Guest user - just update local
                website.engagement.comments += 1;
                this.updateEngagementDisplay();
                this.showToast('Comment posted! (Guest)');
                this.createCommentAnimation();
            }
        } catch (error) {
            console.error('Error submitting comment:', error);
            this.showToast('Failed to post comment');
        }
    }

    updateEngagementDisplay() {
        const currentWebsite = this.websites[this.currentIndex];
        const likeCount = document.querySelector('.like-count');
        const commentCount = document.querySelector('.comment-count');
        const shareCount = document.querySelector('.share-count');
        
        if (likeCount) likeCount.textContent = this.formatNumber(currentWebsite.engagement.likes);
        if (commentCount) commentCount.textContent = this.formatNumber(currentWebsite.engagement.comments);
        if (shareCount) shareCount.textContent = this.formatNumber(currentWebsite.engagement.shares);
    }

    handleShare(website, shareBtn) {
        // Add share animation
        shareBtn.classList.add('sharing');
        
        // Try to use Web Share API if available
        if (navigator.share) {
            navigator.share({
                title: website.title,
                text: website.description,
                url: website.url
            }).then(() => {
                // Update share count
                website.engagement.shares += 1;
                this.updateEngagementDisplay();
                this.createShareAnimation(shareBtn, true);
                this.showToast('Shared successfully!');
            }).catch(() => {
                this.fallbackShare(website, shareBtn);
            });
        } else {
            this.fallbackShare(website, shareBtn);
        }
        
        this.addHapticFeedback();
    }

    fallbackShare(website, shareBtn) {
        // Copy to clipboard
        navigator.clipboard.writeText(website.url).then(() => {
            // Update share count
            website.engagement.shares += 1;
            this.updateEngagementDisplay();
            this.createShareAnimation(shareBtn, true);
            this.showToast('Link copied to clipboard!');
        }).catch(() => {
            // Fallback: open share dialog
            const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(website.title + ' - ' + website.description)}&url=${encodeURIComponent(website.url)}`;
            window.open(shareUrl, '_blank');
            // Update share count
            website.engagement.shares += 1;
            this.updateEngagementDisplay();
            this.createShareAnimation(shareBtn, true);
            this.showToast('Opened share dialog!');
        });
    }

    async handleBookmark(card, website, bookmarkBtn) {
        if (!this.checkAuth('bookmark websites')) {
            return;
        }

        const isBookmarked = bookmarkBtn.classList.contains('bookmarked');
        
        try {
            const result = await this.supabaseService.toggleBookmark(this.currentUser.id, website.url);
            
            if (result.success) {
                if (result.bookmarked) {
                    // Add bookmark
                    bookmarkBtn.classList.add('bookmarked');
                    bookmarkBtn.innerHTML = `<i class="fas fa-bookmark"></i>`;
                    this.createBookmarkAnimation(card, true);
                    this.showToast('Added to bookmarks');
                    
                    // Update cache
                    const existing = this.userInteractions.get(website.url) || {};
                    this.userInteractions.set(website.url, { ...existing, bookmarked: true });
                } else {
                    // Remove bookmark
                    bookmarkBtn.classList.remove('bookmarked');
                    bookmarkBtn.innerHTML = `<i class="far fa-bookmark"></i>`;
                    this.createBookmarkAnimation(card, false);
                    this.showToast('Removed from bookmarks');
                    
                    // Update cache
                    const existing = this.userInteractions.get(website.url) || {};
                    this.userInteractions.set(website.url, { ...existing, bookmarked: false });
                }
                
                this.addHapticFeedback();
            } else {
                this.showToast('Error updating bookmark: ' + result.error);
            }
        } catch (error) {
            console.error('Error handling bookmark:', error);
            this.showToast('Error updating bookmark');
        }
    }

    createLikeAnimation(card, isLike) {
        const heart = document.createElement('div');
        heart.className = `floating-heart ${isLike ? 'like' : 'unlike'}`;
        heart.innerHTML = isLike ? '❤️' : '💔';
        
        const rect = card.getBoundingClientRect();
        heart.style.left = rect.right - 60 + 'px';
        heart.style.top = rect.bottom - 200 + 'px';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    createCommentAnimation(card) {
        const comment = document.createElement('div');
        comment.className = 'floating-comment';
        comment.innerHTML = '💬';
        
        const rect = card.getBoundingClientRect();
        comment.style.left = rect.right - 60 + 'px';
        comment.style.top = rect.bottom - 150 + 'px';
        
        document.body.appendChild(comment);
        
        setTimeout(() => {
            comment.remove();
        }, 1500);
    }

    createShareAnimation(shareBtn, success) {
        const share = document.createElement('div');
        share.className = `floating-share ${success ? 'success' : 'error'}`;
        share.innerHTML = success ? '📤' : '❌';
        
        const rect = shareBtn.getBoundingClientRect();
        share.style.left = rect.left + rect.width / 2 + 'px';
        share.style.top = rect.top + 'px';
        
        document.body.appendChild(share);
        
        setTimeout(() => {
            share.remove();
        }, 1500);
    }

    createBookmarkAnimation(card, isBookmark) {
        const bookmark = document.createElement('div');
        bookmark.className = `floating-bookmark ${isBookmark ? 'bookmark' : 'unbookmark'}`;
        bookmark.innerHTML = isBookmark ? '🔖' : '📖';
        
        const rect = card.getBoundingClientRect();
        bookmark.style.left = rect.right - 60 + 'px';
        bookmark.style.top = rect.bottom - 100 + 'px';
        
        document.body.appendChild(bookmark);
        
        setTimeout(() => {
            bookmark.remove();
        }, 1500);
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 2000);
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        const sections = {
            home: document.getElementById('feedContainer'),
            discover: document.getElementById('discoverSection'),
            upload: document.getElementById('uploadSection'),
            profile: document.getElementById('profileSection')
        };

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const section = item.getAttribute('data-section');
                
                // Check authentication for profile access
                if (section === 'profile' && !this.checkAuth('access your profile')) {
                    return;
                }
                
                // Update active nav item
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                
                // Hide all sections
                Object.values(sections).forEach(section => {
                    if (section) section.style.display = 'none';
                });
                
                // Show selected section
                if (sections[section]) {
                    sections[section].style.display = 'block';
                    
                    // Load section content
                    if (section === 'discover') {
                        this.loadDiscoverContent();
                    } else if (section === 'profile') {
                        this.loadProfileContent();
                    }
                }
            });
        });
    }

    setupUploadForm() {
        const uploadBtn = document.getElementById('uploadBtn');
        if (uploadBtn) {
            uploadBtn.addEventListener('click', () => {
                this.handleUpload();
            });
        }
    }

    setupProfileTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                
                // Update active tab
                tabBtns.forEach(tab => tab.classList.remove('active'));
                btn.classList.add('active');
                
                // Load tab content
                this.loadProfileTab(tab);
            });
        });
    }

    loadDiscoverContent() {
        this.setupDiscoverFilters();
        this.filterDiscoverContent();
    }

    setupDiscoverFilters() {
        const searchInput = document.getElementById('discoverSearch');
        const searchClear = document.getElementById('searchClear');
        const categoryBtns = document.querySelectorAll('.category-btn');

        // Search functionality
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentSearchTerm = e.target.value.toLowerCase();
                this.filterDiscoverContent();
                
                // Show/hide clear button
                if (searchClear) {
                    searchClear.style.display = e.target.value ? 'block' : 'none';
                }
            });
        }

        // Clear search
        if (searchClear) {
            searchClear.addEventListener('click', () => {
                if (searchInput) {
                    searchInput.value = '';
                    this.currentSearchTerm = '';
                    this.filterDiscoverContent();
                    searchClear.style.display = 'none';
                }
            });
        }

        // Category filtering
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                this.currentCategory = btn.dataset.category;
                this.filterDiscoverContent();
            });
        });
    }

    filterDiscoverContent() {
        const discoverGrid = document.getElementById('discoverGrid');
        if (!discoverGrid) return;

        let filteredWebsites = this.websites;

        // Filter by category
        if (this.currentCategory && this.currentCategory !== 'all') {
            filteredWebsites = filteredWebsites.filter(website => 
                website.category === this.currentCategory
            );
        }

        // Filter by search term
        if (this.currentSearchTerm) {
            filteredWebsites = filteredWebsites.filter(website => 
                website.title.toLowerCase().includes(this.currentSearchTerm) ||
                website.description.toLowerCase().includes(this.currentSearchTerm) ||
                website.tags.some(tag => tag.toLowerCase().includes(this.currentSearchTerm))
            );
        }

        // Show filtered websites
        discoverGrid.innerHTML = filteredWebsites.map((website, index) => `
            <div class="discover-card" onclick="window.open('${website.url}', '_blank')">
                <div class="discover-card-image">
                    <div class="discover-favicon">
                        <img src="${this.getFaviconUrl(website.url)}" alt="${website.title}" class="discover-logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="discover-fallback" style="display: none;">
                            <img src="logo/ChatGPT Image Oct 6, 2025, 10_23_23 PM.png" alt="WeLike.fun Logo" class="animated-logo-fallback">
                        </div>
                    </div>
                    ${this.createAnimatedEffects(website)}
                </div>
                <div class="discover-card-content">
                    <h3>${website.title}</h3>
                    <p>${website.description}</p>
                    <div class="discover-tags">
                        ${website.tags.map(tag => `<span class="discover-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="discover-stats">
                        <span class="discover-likes">❤️ ${this.formatNumber(website.engagement.likes)}</span>
                        <span class="discover-views">👁️ ${this.formatNumber(website.engagement.views)}</span>
                        ${website.trending ? '<span class="discover-trending">🔥 Trending</span>' : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    loadProfileContent() {
        this.loadProfileTab('liked');
    }

    loadProfileTab(tab) {
        const profileGrid = document.getElementById('profileGrid');
        if (!profileGrid) return;
        
        let content = '';
        
        switch(tab) {
            case 'liked':
                content = this.websites.slice(0, 4).map(website => `
                    <div class="profile-card" onclick="window.open('${website.url}', '_blank')">
                        <h4>${website.title}</h4>
                        <p>${website.description}</p>
                    </div>
                `).join('');
                break;
            case 'bookmarked':
                content = this.websites.slice(2, 6).map(website => `
                    <div class="profile-card" onclick="window.open('${website.url}', '_blank')">
                        <h4>${website.title}</h4>
                        <p>${website.description}</p>
                    </div>
                `).join('');
                break;
            case 'uploaded':
                content = '<div class="no-content">No uploaded websites yet</div>';
                break;
        }
        
        profileGrid.innerHTML = content;
    }

    async handleUpload() {
        if (!this.currentUser) {
            this.showToast('Please sign in to upload websites');
            return;
        }

        const title = document.getElementById('websiteTitle').value;
        const url = document.getElementById('websiteUrl').value;
        const description = document.getElementById('websiteDescription').value;
        const tags = document.getElementById('websiteTags').value;
        
        if (!title || !url || !description) {
            this.showToast('Please fill in all required fields');
            return;
        }
        
        // Validate URL
        try {
            new URL(url);
        } catch {
            this.showToast('Please enter a valid URL');
            return;
        }
        
        try {
            // Save to Supabase
            const websiteData = {
                title: title,
                url: url,
                description: description,
                tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag)
            };
            
            const result = await this.supabaseService.addWebsite(websiteData);
            
            if (result.success) {
                // Create new website object for local display
                const newWebsite = {
                    title: title,
                    url: url,
                    description: description,
                    tags: websiteData.tags,
                    favicon: '🌐',
                    category: 'user-uploaded',
                    theme: 'user',
                    engagement: {
                        likes: 0,
                        comments: 0,
                        shares: 0,
                        views: 0
                    },
                    creator: 'You',
                    duration: 'New',
                    trending: false
                };
                
                // Add to websites array
                this.websites.push(newWebsite);
                
                // Show success message
                this.showToast('Website uploaded successfully!');
                
                // Clear form
                document.getElementById('websiteTitle').value = '';
                document.getElementById('websiteUrl').value = '';
                document.getElementById('websiteDescription').value = '';
                document.getElementById('websiteTags').value = '';
                
                // Refresh discover content
                this.loadDiscoverContent();
            } else {
                this.showToast('Error uploading website: ' + result.error);
            }
        } catch (error) {
            console.error('Error uploading website:', error);
            this.showToast('Error uploading website');
        }
    }
}

// Initialize the TikTok feed when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TikTokFeed();
});

// Add swipe indicator
document.addEventListener('DOMContentLoaded', () => {
    const indicator = document.createElement('div');
    indicator.className = 'swipe-indicator';
    indicator.innerHTML = '↑ Swipe up for more websites ↓';
    document.body.appendChild(indicator);
    
    // Hide indicator after 5 seconds
    setTimeout(() => {
        indicator.style.opacity = '0';
        setTimeout(() => {
            indicator.remove();
        }, 500);
    }, 5000);
});