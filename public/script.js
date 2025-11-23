// Select Elements
const bgm = document.getElementById('bgm-audio');
const sfx = document.getElementById('click-audio');
const playSfxBtn = document.getElementById('play-sfx-btn');
const muteBtn = document.getElementById('mute-toggle-btn');

// Set initial volume (0.0 to 1.0)
bgm.volume = 0.3; // Background music at 30%
sfx.volume = 1.0; // Sound effect at 100%

let isMusicPlaying = false;

// 1. Handle Sound Effect Button
playSfxBtn.addEventListener('click', () => {
    // Reset time to 0 so we can click rapidly
    sfx.currentTime = 0; 
    sfx.play();
    
    // Visual feedback (optional console log)
    console.log("Sound effect played!");
});

// 2. Handle Background Music & Mute
muteBtn.addEventListener('click', () => {
    if (bgm.paused) {
        bgm.play().then(() => {
            muteBtn.textContent = "Mute Music";
            isMusicPlaying = true;
        }).catch(err => {
            console.error("Audio play blocked:", err);
        });
    } else {
        // If playing, determine if we want to Pause or just Mute. 
        // Usually for BGM, "Mute" means volume 0 or Pause. Let's Pause.
        bgm.pause();
        muteBtn.textContent = "Unmute / Play Music";
        isMusicPlaying = false;
    }
});