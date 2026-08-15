export function initSplashAnimation() {
    const splashScreen = document.getElementById('splash-screen');
    const splashVideo = document.getElementById('splash-video');
    const enterBtn = document.getElementById('enterBtn');
    
    if (!splashScreen || !splashVideo) return;

    function hideSplash() {
        splashScreen.classList.add('hidden');
        document.body.classList.remove('loading');
        // Kosongkan src video agar tidak memakan memori di background
        setTimeout(() => { splashVideo.src = ""; }, 1000);
    }

    // Tunggu event video selesai
    splashVideo.addEventListener('ended', hideSplash);

    // Coba putar video
    const playPromise = splashVideo.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Autoplay diblokir oleh browser (terutama di mobile)
            enterBtn.style.display = 'inline-flex';
            enterBtn.addEventListener('click', () => {
                enterBtn.style.display = 'none';
                splashVideo.play();
            });
        });
    }

    // Fallback jika video gagal dimuat atau error jaringan
    setTimeout(() => {
        if(document.body.classList.contains('loading')) {
            hideSplash();
        }
    }, 7000); // Batas maksimal splash screen adalah 7 detik
}
