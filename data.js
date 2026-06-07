// ============================================
// PORTFOLIO DATA – EDIT THIS FILE
// ============================================

// 📸 YOUR PROFILE PHOTO
const PROFILE_PHOTO_PATH = "Image/pfp.jpg";

const portfolioData = {
    name: "AL R. ALBIT",
    role: "Computing Student · Institute of Computing",
    bio: "outgoing & competitive · trying my best to be a better person",
    
    aboutText: `I'm a computing student who is very competitive and outgoing at heart — though I sometimes struggle with insecurity about my pimples. But I'm trying my best every day to become a better version of myself. I love meeting new people, understanding different perspectives, and I always give 100% in everything I do. The Institute of Computing has pushed me to grow both technically and personally.`,
    
    // ========== TECH STACK ==========
    techStack: [
        { name: "Java", icon: "fab fa-java" },
        { name: "HTML", icon: "fab fa-html5" }
        // Add more: { name: "Python", icon: "fab fa-python" }, etc.
    ],
    
    // ========== EDUCATION ==========
    education: [
        {
            institution: "Malativas National High School",
            details: "Strand: General Academic Strand (GAS)",
            year: "Graduated"
        },
        {
            institution: "Davao Del Norte State College",
            details: "Program: Bachelor of Science in Information System",
            year: "Present"
        }
    ],
    
    // ========== HOBBIES (with multiple images) ==========
    hobbies: [
        { name: "Swimming", icon: "fas fa-swimmer", images: ["Image/swim1.jpeg", "Image/swim2.jpeg", "Image/swim3.png"] },
        { name: "Jogging", icon: "fas fa-running", images: ["Image/run1.jpg", "Image/run2.jpeg", "Image/run3.jpg"] },
        { name: "Photography", icon: "fas fa-camera", images: ["Image/photo1.jpg", "Image/photo2.jpg", "Image/photo3.jpg", "Image/photo4.jpg",
            "Image/photo5.jpg", "Image/photo6.jpg", "Image/photo7.jpg", "Image/photo8.jpg", "Image/photo9.jpg", "Image/photo10.jpg",
            "Image/photo11.jpg", "Image/photo12.jpg", "Image/photo13.jpg", "Image/photo14.jpg", "Image/photo15.jpg", "Image/photo16.jpg",
        ] },
        { name: "Hiking", icon: "fas fa-mountain", images: ["Image/hike1.jpg", "Image/hike2.jpg"] },
        { name: "Serving Church", icon: "fas fa-church", images: ["Image/serve1.jpg", "Image/serve2.jpeg", "Image/serve3.jpeg"] }
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
    
    // Social Links
    socialLinks: [
        { platform: "Twitter", url: "https://twitter.com/YOUR_USERNAME", icon: "fab fa-twitter" },
        { platform: "GitHub", url: "https://github.com/YOUR_USERNAME", icon: "fab fa-github" },
        { platform: "Instagram", url: "https://instagram.com/YOUR_USERNAME", icon: "fab fa-instagram" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/YOUR_USERNAME", icon: "fab fa-linkedin-in" }
    ]
};

function setProfilePhoto() {
    const img = document.getElementById('profilePhoto');
    if (img && PROFILE_PHOTO_PATH) {
        img.src = PROFILE_PHOTO_PATH;
        img.onerror = () => { img.src = 'https://placehold.co/400x400/2c2418/d4af37?text=AL'; };
    }
}
