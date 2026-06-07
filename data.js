// ============================================
// PORTFOLIO DATA – EDIT THIS FILE
// ============================================

// 📸 YOUR PROFILE PHOTO
const PROFILE_PHOTO_PATH = "Image/pfp1.jpeg"; // Replace with your profile photo path (e.g., "assets/profile.jpg")

// ============================================
// MAIN PORTFOLIO DATA
// ============================================
const portfolioData = {
    name: "AL R. ALBIT",
    role: "Computing Student · Institute of Computing",
    bio: "outgoing & competitive · trying my best to be a better person",
    
    aboutText: `I'm a computing student who is very competitive and outgoing at heart — though I sometimes struggle with insecurity about my pimples. But I'm trying my best every day to become a better version of myself. I love meeting new people, understanding different perspectives, and I always give 100% in everything I do. The Institute of Computing has pushed me to grow both technically and personally.`,
    
    // ============================================
    // 🏊 HOBBIES – ADD MULTIPLE IMAGES PER HOBBY
    // ============================================
    // For each hobby, provide an array "images" with paths to your photos.
    // You can add as many as you want.
    // Place image files in the same folder as index.html or in "assets"
    // ============================================
    hobbies: [
        { 
            name: "Swimming", 
            icon: "fas fa-swimmer",
            images: [
                "Image/swim1.jpeg",
                "Image/swim2.jpeg",
                "Image/swim3.png",
                "Image/swim4.jpg"
            ]
        },
        { 
            name: "Jogging", 
            icon: "fas fa-running",
            images: [
                "Image/run1.jpg",
                "Image/run2.jpg",
                "Image/run3.jpg"
            ]
        },
        { 
            name: "Photography", 
            icon: "fas fa-camera",
            images: [
                "Image/photo1.jpg",
                "Image/photo2.jpg",
                "Image/photo3.jpg",
                "Image/photo4.jpg",
                "Image/photo5.jpg",
                "Image/photo6.jpg",
                "Image/photo7.jpg",
                "Image/photo8.jpg",
                "Image/photo9.jpg",
                "Image/photo10.jpg",
                "Image/photo11.jpg",
                "Image/photo12.jpg",
                "Image/photo13.jpg",
                "Image/photo14.jpg",
                "Image/photo15.jpg",
                "Image/photo16.jpg",
            ]
        },
        { 
            name: "Serving Church", 
            icon: "fas fa-church",
            images: [
                "Image/serve1.jpg",
                "Image/serve2.jpeg",
                "Image/serve3.jpeg",
            ]
        },
    ],
    
    // Achievements
    achievements: [
        { title: "Participated in the MAST", desc: "Major Assessment for Skills and Talent – showcased technical abilities.", badge: "Participant" },
        { title: "Institute of Computing BYTEFEST 1st Runner up", desc: "Creative performance & parody (MTV Spoof), ranked 2nd place overall!", badge: "1st Runner Up" },
        { title: "MTV Spoof Competition", desc: "Collaborated with IC peers to produce an entertaining spoof video.", badge: "Finalist" }
    ],
    
    // Certificates with images
    certificates: [
        { name: "Academic Excellence Award", issuer: "Institute of Computing | 2025", img: "Image/cert1.png" },
        { name: "Data Science Certification", issuer: "Online Platform | 2025", img: "Image/cert2.png" }
    ],
    
    // Social Links – replace URLs
    socialLinks: [
        { platform: "Facebook", url: "https://www.facebook.com/al.remoroza.albit", icon: "fab fa-facebook" },
        { platform: "GitHub", url: "https://github.com/qtbby", icon: "fab fa-github" },
        { platform: "Instagram", url: "https://instagram.com/qtabwy", icon: "fab fa-instagram" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/al-albit-7263043a3/", icon: "fab fa-linkedin-in" }
    ]
};

// ============================================
// 🎨 THEME SYSTEM – YOUR FAVORITE COLORS
// ============================================
const THEMES = {
    default: {
        name: "Gold Classic",
        primary: "#d4af37",
        secondary: "#ffd966",
        background: "#0a0a0f",
        backgroundAlt: "#12121a",
        text: "#ecedee",
        textMuted: "#d0d0d8",
        textDark: "#1a1a1f",
        cardBg: "#1a1a2a",
        accent: "#d4af37",
        border: "rgba(212, 175, 55, 0.2)",
        badgeBg: "rgba(212, 175, 55, 0.2)"
    },
    lightBrown: {
        name: "Light Brown",
        primary: "#8b7355",
        secondary: "#A89968",
        background: "#F5F3F0",
        backgroundAlt: "#EDE8E3",
        text: "#1a1515",
        textMuted: "#4a4a4a",
        textDark: "#1a1515",
        cardBg: "#FFFFFF",
        accent: "#8B7355",
        border: "rgba(139, 115, 85, 0.25)",
        badgeBg: "rgba(139, 115, 85, 0.15)"
    },
    darkNavy: {
        name: "Dark Navy Blue",
        primary: "#6BA3D4",
        secondary: "#86BAE0",
        background: "#0f1821",
        backgroundAlt: "#141d2a",
        text: "#E8EFF8",
        textMuted: "#B8C5D6",
        textDark: "#0f1821",
        cardBg: "#1a2639",
        accent: "#6BA3D4",
        border: "rgba(107, 163, 212, 0.25)",
        badgeBg: "rgba(107, 163, 212, 0.15)"
    },
    darkGreen: {
        name: "Dark Green",
        primary: "#7EC97E",
        secondary: "#9FD69F",
        background: "#0d1410",
        backgroundAlt: "#141a16",
        text: "#E8F5EA",
        textMuted: "#C0D6C8",
        textDark: "#0d1410",
        cardBg: "#1a2621",
        accent: "#7EC97E",
        border: "rgba(126, 201, 126, 0.25)",
        badgeBg: "rgba(126, 201, 126, 0.15)"
    }
};

function setProfilePhoto() {
    const img = document.getElementById('profilePhoto');
    if (img && PROFILE_PHOTO_PATH) {
        img.src = PROFILE_PHOTO_PATH;
        img.onerror = () => { img.src = 'https://placehold.co/400x400/2c2418/d4af37?text=AL'; };
    }
}