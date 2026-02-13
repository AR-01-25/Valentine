// Valentine's Day Configuration - Customize everything here! 💝
window.VALENTINE_CONFIG = {
    // Your Valentine's name
    valentineName: "My Dear Sendu🧚‍♀️",
    
    // Browser tab title
    pageTitle: "For Srimathi, My Forever ❤️💝",
    
    // Color theme (in HEX format)
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },
    
    // Animation settings
    animations: {
        floatDuration: "8s",
        heartExplosionSize: 1.5
    },
    
    // Floating emojis and stickers
    floatingEmojis: {
        hearts: ["❤️", "💖", "💗", "💓", "💕", "💞", "💘", "💝", "💟", "❣️", "💔", "❤️‍🔥", "❤️‍🩹"],
        bears: ["🧸", "🐻", "🐻‍❄️", "🧸", "🐻", "🧸", "🐼", "🦊"],
        cute: ["🥰", "😘", "😍", "💋", "💌", "🌹", "🌸", "🌺", "✨", "⭐", "💫", "🌟"]
    },
    
    // Love Poetry Collection 💕
    lovePoems: [
        {
            title: "💖 My Love for You",
            lines: [
                "In the book of my life,",
                "You're the favorite chapter,",
                "Every word, every page,",
                "Filled with love and laughter."
            ]
        },
        {
            title: "✨ You Are My Everything",
            lines: [
                "You're the sun that lights my day,",
                "The moon that guides my way,",
                "In your arms I want to stay,",
                "Forever and a day."
            ]
        },
        {
            title: "💕 When I Think of You",
            lines: [
                "My heart does a little dance,",
                "My soul is in a trance,",
                "Given half a chance,",
                "I'd steal just one more glance."
            ]
        },
        {
            title: "🌹 Valentine's Promise",
            lines: [
                "Roses are red,",
                "Violets are blue,",
                "I'm not good at poetry,",
                "But my love for you is true! 💘"
            ]
        },
        {
            title: "💗 You Make Me Feel",
            lines: [
                "Like the stars in the sky,",
                "Like the butterflies that fly,",
                "Like a love song on repeat,",
                "With you, my life's complete."
            ]
        }
    ],
    
    // Fun & Lovable Questions (More than before!)
    questions: [
        {
            // Question 1
            text: "What did you feel when you first saw me?",
            options: [
                { text: "💓 My heart skipped a beat!", gif: "heart_skip" },
                { text: "🥰 Butterflies in my tummy", gif: "butterflies" },
                { text: "✨ Like magic happened", gif: "magic" },
                { text: "🤔 I wasn't sure yet...", gif: "thinking" }
            ],
            secretAnswer: "Actually, I knew right away! 💘",
            poem: 0  // Uses first poem
        },
        {
            // Question 2
            text: "What's your favorite thing about us?",
            options: [
                { text: "💕 How we laugh together", gif: "laugh" },
                { text: "💖 The way you understand me", gif: "understand" },
                { text: "💗 Our cute little moments", gif: "cute_moments" },
                { text: "🥺 Everything about us!", gif: "everything" }
            ],
            secretAnswer: "Just being with you is enough 💫",
            poem: 1
        },
        {
            // Question 3
            text: "Where should our first Valentine's date be?",
            options: [
                { text: "🌅 Sunset picnic", gif: "picnic" },
                { text: "🍿 Cozy movie night", gif: "movie" },
                { text: "🍝 Candlelight dinner", gif: "dinner" },
                { text: "🏠 Just staying in with you", gif: "home" }
            ],
            secretAnswer: "Anywhere with you is perfect! 💞",
            poem: 2
        },
        {
            // Question 4
            text: "How many times do you think of me in a day?",
            options: [
                { text: "🌈 All day, every day!", gif: "allday" },
                { text: "⏰ Every few hours", gif: "hours" },
                { text: "💭 Only when I miss you", gif: "miss" },
                { text: "🤫 Even in my dreams", gif: "dreams" }
            ],
            secretAnswer: "You're my first and last thought 💭",
            poem: 3
        },
        {
            // Question 5
            text: "If you could give me a Valentine's gift, what would it be?",
            options: [
                { text: "💋 A million kisses", gif: "kisses" },
                { text: "🤗 Unlimited hugs", gif: "hugs" },
                { text: "💝 My whole heart", gif: "heart" },
                { text: "⭐ All the stars in the sky", gif: "stars" }
            ],
            secretAnswer: "I'd give you my forever 💖",
            poem: 4
        },
        {
            // Question 6 - Love Meter Question
            text: "On a scale of 1-100, how much do you love me?",
            isLoveMeter: true,
            poem: 0
        },
        {
            // Question 7 - Final Question
            text: "Will you be my Valentine forever?",
            options: [
                { text: "💞 YES! A thousand times yes!", gif: "yes" },
                { text: "🥹 Obviously, my love!", gif: "obvious" },
                { text: "💘 There's no one else for me", gif: "onlyyou" }
            ],
            isFinal: true,
            poem: 2
        }
    ],
    
    // Love meter messages
    loveMessages: {
        low: "💕 Aww, that's sweet! But I love you more!",
        medium: "💗 That's wonderful! My heart is smiling!",
        high: "💖 INFINITE LOVE! You're my soulmate!",
        extreme: "✨ BEYOND MEASURE! We're destined to be together! ✨"
    },
    
    // Sticker/GIF URLs (using free emoji stickers)
    gifStickers: {
        heart_skip: ["💓", "💗", "💖"],
        butterflies: ["🦋", "✨", "🌸"],
        magic: ["✨", "🪄", "🌟"],
        thinking: ["🤔", "💭", "🤷‍♀️"],
        laugh: ["😂", "🤣", "😆"],
        understand: ["🥰", "💕", "🤗"],
        cute_moments: ["🥺", "💝", "💘"],
        everything: ["💞", "💓", "💗"],
        picnic: ["🧺", "🌞", "🌸"],
        movie: ["🍿", "🎬", "🥤"],
        dinner: ["🍝", "🕯️", "🍷"],
        home: ["🏠", "🛋️", "☕"],
        allday: ["☀️", "💭", "🌙"],
        hours: ["⏰", "💖", "💕"],
        miss: ["🥺", "💔", "💗"],
        dreams: ["🌙", "✨", "💭"],
        kisses: ["💋", "💋", "💋"],
        hugs: ["🤗", "🫂", "💕"],
        heart: ["💝", "💖", "💘"],
        stars: ["⭐", "✨", "🌟"],
        yes: ["🎉", "💞", "🥰"],
        obvious: ["💖", "✨", "💫"],
        onlyyou: ["💘", "💗", "💓"],
        celebration: ["🎊", "🎉", "🎈", "💑", "🍾", "🥂"]
    },
    
    // Music settings
    music: {
        enabled: false,
        autoplay: false,
        musicUrl: "",
        volume: 0.5,
        startText: "🎵 Play Love Songs",
        stopText: "⏸️ Pause Music"
    },
    
    // Celebration messages
    celebration: {
        title: "🎉 YOU SAID YES!♥️🎉",
        message: "Now we're officially the cutest couple ever!",
        emojis: "💑 💍 💒 🌹 🍫 🥂 💘 💖 💗 💓 💕 💞"
    }
};
