import { SERVICES } from "./services.js";
import { STORE_CONFIG } from "./config.js";
import { openWhatsApp } from "./whatsapp.js";
import { initParticles } from "./particles.js";
import { initAnimations } from "./animations.js";
import { initNavigation } from "./navigation.js";
import { initTheme } from "./theme.js";
import { initSplashAnimation } from "./splash.js";
import { initModals } from "./modal.js";   // <-- Tambahkan ini
import { $, $$ } from "./utils.js";

function renderServices() {
    const grid = $('#servicesGrid');
    if (!grid) return;

    SERVICES.forEach((service, index) => {
        const btn = document.createElement('button');
        btn.className = `service-card animate-on-scroll`;
        btn.setAttribute('data-modal-target', service.modalTarget); // <-- Set Target Modal
        btn.style.animationDelay = `${index * 0.1}s`;
        
        btn.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <span class="service-subtitle">${service.subtitle} 
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </span>
        `;
        
        grid.appendChild(btn);
    });
}

function initServiceButtons() {
    $$('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            // Ketika kartu ditekan, buka modal yang sesuai
            const targetId = card.getAttribute('data-modal-target');
            const targetModal = document.getElementById(targetId);
            if (targetModal) {
                targetModal.classList.add('active');
            }
        });
    });
}

function initWhatsAppButton() {
    const waBtn = $('#whatsappAdmin');
    if (waBtn) waBtn.addEventListener('click', () => openWhatsApp(STORE_CONFIG.defaultMessage));
}

function initChannelButton() {
    const channelBtn = $('#channelButton');
    if (channelBtn) channelBtn.href = STORE_CONFIG.channelUrl;
}

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initSplashAnimation(); 
    renderServices();
    initServiceButtons();
    initModals();          // <-- Inisialisasi logika Modal dan Form Validasi
    initWhatsAppButton();
    initChannelButton();
    initParticles();
    
    setTimeout(() => {
        initAnimations();
    }, 2000); 
    
    initNavigation();
});
