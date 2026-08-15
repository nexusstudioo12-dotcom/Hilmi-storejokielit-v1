import { STORE_CONFIG } from "./config.js";

export function createWhatsAppUrl(message) {
    const number = STORE_CONFIG.whatsappNumber;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
    const url = createWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
}
