// ============================================
// MAIN FUNCTIONALITY – Carousel for multiple hobby images
// ============================================

let currentHobbyIndex = 0;
let currentImageIndex = 0;
let currentImagesArray = [];

document.addEventListener('DOMContentLoaded', () => {
    setProfilePhoto();
    loadContent();
    initNavigation();
    initSmoothScroll();
    initCarouselModal();
    initThemeSwitcher();
    applyStoredTheme();
});

function loadContent() {
    // About
    const aboutEl = document.getElementById('aboutText');
    if (aboutEl) aboutEl.innerHTML = portfolioData.aboutText;
    
    // Hobbies (with click handler)
    const hobbiesGrid = document.getElementById('hobbiesGrid');
    if (hobbiesGrid) {
        hobbiesGrid.innerHTML = portfolioData.hobbies.map((h, index) => `
            <div class="hobby-card" data-hobby-index="${index}">
                <i class="${h.icon}"></i>
                <h3>${escapeHtml(h.name)}</h3>
            </div>
        `).join('');
        
        document.querySelectorAll('.hobby-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const index = parseInt(card.dataset.hobbyIndex);
                const hobby = portfolioData.hobbies[index];
                if (hobby && hobby.images && hobby.images.length > 0) {
                    openHobbyCarousel(hobby.name, hobby.images);
                } else {
                    alert(`No images added for ${hobby.name}. Add an "images" array in data.js`);
                }
            });
        });
    }
    
    // Achievements
    const achList = document.getElementById('achievementsList');
    if (achList) {
        achList.innerHTML = portfolioData.achievements.map(a => `
            <div class="achievement-card">
                <div class="achievement-header">
                    <h3>${escapeHtml(a.title)}</h3>
                    <span class="achievement-badge">${escapeHtml(a.badge)}</span>
                </div>
                <p>${escapeHtml(a.desc)}</p>
            </div>
        `).join('');
    }
    
    // Certificates
    const certGrid = document.getElementById('certificatesGrid');
    if (certGrid) {
        certGrid.innerHTML = portfolioData.certificates.map(cert => `
            <div class="cert-card">
                <img src="${cert.img}" alt="${escapeHtml(cert.name)}" class="cert-image" onerror="this.src='https://placehold.co/400x200/1a1a2a/d4af37?text=No+Image'">
                <div class="cert-info">
                    <h4>${escapeHtml(cert.name)}</h4>
                    <p>${escapeHtml(cert.issuer)}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Social Links
    const socialIcons = document.getElementById('socialIcons');
    if (socialIcons) {
        socialIcons.innerHTML = portfolioData.socialLinks.map(link => `
            <a href="${link.url}" target="_blank" class="social-icon" title="${link.platform}">
                <i class="${link.icon}"></i>
            </a>
        `).join('');
    }
}

// Carousel functions
function openHobbyCarousel(title, images) {
    currentImagesArray = images;
    currentImageIndex = 0;
    document.getElementById('modalHobbyTitle').textContent = title;
    updateCarouselImage();
    updateDots();
    document.getElementById('hobbyModal').style.display = 'flex';
}

function updateCarouselImage() {
    const imgElement = document.getElementById('carouselImg');
    imgElement.src = currentImagesArray[currentImageIndex];
    imgElement.onerror = () => {
        imgElement.src = 'https://placehold.co/600x400/1a1a2a/d4af37?text=Image+Not+Found';
    };
}

function updateDots() {
    const dotsContainer = document.getElementById('carouselDots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < currentImagesArray.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentImageIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentImageIndex = i;
            updateCarouselImage();
            updateDots();
        });
        dotsContainer.appendChild(dot);
    }
}

function nextImage() {
    if (currentImagesArray.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % currentImagesArray.length;
        updateCarouselImage();
        updateDots();
    }
}

function prevImage() {
    if (currentImagesArray.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + currentImagesArray.length) % currentImagesArray.length;
        updateCarouselImage();
        updateDots();
    }
}

function initCarouselModal() {
    const modal = document.getElementById('hobbyModal');
    const closeBtn = document.querySelector('#hobbyModal .close-modal');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') modal.style.display = 'none';
        }
    });
}

function escapeHtml(str) {
    return String(str).replace(/[&<>]/g, m => m === '&' ? '&amp;' : (m === '<' ? '&lt;' : '&gt;'));
}

// Navigation functions (same as before)
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const menuBtn = document.getElementById('menuBtn');
    const navContainer = document.getElementById('navLinks');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => navContainer.classList.toggle('active'));
    }
    navLinks.forEach(link => {
        link.addEventListener('click', () => navContainer.classList.remove('active'));
    });
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.clientHeight;
            if (scrollPos >= top && scrollPos < top + height) current = section.id;
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) link.classList.add('active');
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ============================================
// 🎨 THEME SYSTEM FUNCTIONS
// ============================================

// Initialize theme switcher in navbar
function initThemeSwitcher() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    if (!themeSwitcher || !THEMES) return;
    
    Object.keys(THEMES).forEach(themeKey => {
        const themeObj = THEMES[themeKey];
        const btn = document.createElement('button');
        btn.classList.add('theme-btn');
        btn.title = themeObj.name;
        
        // Set button background to theme's primary color
        btn.style.background = themeObj.primary;
        btn.style.borderColor = themeObj.primary;
        btn.textContent = themeKey === 'default' ? '⭐' : (themeKey === 'lightBrown' ? '🟤' : (themeKey === 'darkNavy' ? '🔵' : '🟢'));
        
        btn.addEventListener('click', () => {
            applyTheme(themeKey);
            saveThemePreference(themeKey);
            updateThemeButtons(themeKey);
        });
        
        themeSwitcher.appendChild(btn);
    });
    
    updateThemeButtons(getCurrentTheme());
}

// Apply theme by updating CSS variables
function applyTheme(themeKey) {
    if (!THEMES || !THEMES[themeKey]) return;
    
    const theme = THEMES[themeKey];
    const root = document.documentElement;
    
    // Update all CSS variables
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--background', theme.background);
    root.style.setProperty('--background-alt', theme.backgroundAlt);
    root.style.setProperty('--text', theme.text);
    root.style.setProperty('--text-muted', theme.textMuted);
    root.style.setProperty('--text-dark', theme.textDark);
    root.style.setProperty('--card-bg', theme.cardBg);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--border', theme.border);
    root.style.setProperty('--badge-bg', theme.badgeBg);
}

// Update button active states
function updateThemeButtons(themeKey) {
    document.querySelectorAll('.theme-btn').forEach((btn, idx) => {
        btn.classList.remove('active');
        const keys = Object.keys(THEMES);
        if (keys[idx] === themeKey) btn.classList.add('active');
    });
}

// Get current theme from localStorage
function getCurrentTheme() {
    return localStorage.getItem('portfolioTheme') || 'default';
}

// Save theme preference to localStorage
function saveThemePreference(themeKey) {
    localStorage.setItem('portfolioTheme', themeKey);
}

// Apply stored theme on page load
function applyStoredTheme() {
    const theme = getCurrentTheme();
    applyTheme(theme);
}