# Deployment Guide

Website ini pure statis.

- **Netlify:** Drag & Drop folder, atau hubungkan ke GitHub. Konfigurasi `netlify.toml` otomatis mengatur headers keamanan.
- **Vercel:** Hubungkan ke GitHub. `vercel.json` akan mengatur root routing.
- **GitHub Pages:** Pergi ke repository Settings > Pages > Deploy dari branch main.
- **Cloudflare Pages:** Sama seperti di atas, cukup arahkan root direktori tanpa build command.
