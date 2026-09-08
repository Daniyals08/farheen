/* ==========================================================================
   FARHEEN'S MOBILE-FRIENDLY SCROLLABLE BIRTHDAY APPLICATION LOGIC
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const defaultAppData = {
    name: "Farheen",
    title: "Happy Birthday",
    subtitle: "Farheen ❤️",
    mainWish: "You are in my heart, you shall be in there forever. My greatest wish is that you are happy when you think of me, as I am when I think of you.",
    heroText: "May your day be filled with love, laughter, and all the happiness your heart can hold. May this year bring you endless joy and unforgettable moments.",
    videoUrl: "img/video_surprise.mp4",
    photos: [
      {
        url: "img/IMG_20260722_022403.jpg.jpeg",
        title: "Radiant Beauty ✨",
        caption: "Your smile brings light into every corner of the world.",
        category: "her"
      },
      {
        url: "img/InShot_20260702_020455809.jpg.jpeg",
        title: "Moments Together 💕",
        caption: "Every second spent together is a memory treasured forever.",
        category: "together"
      },
      {
        url: "img/Screenshot_20260827_212144.jpg.jpeg",
        title: "Our Video Calls 📱",
        caption: "Always smiling together and staying close to my heart.",
        category: "videocall"
      },
      {
        url: "img/IMG_20260722_022429.jpg.jpeg",
        title: "Pure Grace 🌸",
        caption: "Effortlessly elegant and wonderfully unique.",
        category: "her"
      },
      {
        url: "img/InShot_20260702_020539702.jpg.jpeg",
        title: "Sweetest Bonding 💫",
        caption: "Laughter, warmth, and our favorite stories.",
        category: "together"
      },
      {
        url: "img/Screenshot_20260820_205307.jpg.jpeg",
        title: "Heart-to-Heart Calls 💌",
        caption: "Those candid moments on screen that brighten up any day.",
        category: "videocall"
      },
      {
        url: "img/IMG_20260722_022515.jpg.jpeg",
        title: "Queen of the Day 👑",
        caption: "Farheen, shining brighter than any star.",
        category: "her"
      },
      {
        url: "img/InShot_20260702_020604009.jpg.jpeg",
        title: "Cherished Memories 🌹",
        caption: "Two hearts wrapped in endless comfort and joy.",
        category: "together"
      },
      {
        url: "img/Screenshot_20260820_205318.jpg.jpeg",
        title: "Evening Calls 🌙",
        caption: "Hours feel like minutes when we talk together.",
        category: "videocall"
      },
      {
        url: "img/IMG_20260722_022550.jpg.jpeg",
        title: "Enchanting Look ✨",
        caption: "A snapshot of pure magic and innocence.",
        category: "her"
      },
      {
        url: "img/InShot_20260702_020623122.jpg.jpeg",
        title: "Forever Connected 💖",
        caption: "Our favorite smiles and timeless happiness.",
        category: "together"
      },
      {
        url: "img/Screenshot_20260827_212148.jpg.jpeg",
        title: "Screens & Smiles 📱",
        caption: "Seeing your face always makes everything better.",
        category: "videocall"
      },
      {
        url: "img/IMG_20260722_022624.jpg.jpeg",
        title: "Golden Hour Glow ☀️",
        caption: "Warmth, beauty, and that unforgettable twinkle.",
        category: "her"
      },
      {
        url: "img/InShot_20260702_020813374.jpg.jpeg",
        title: "Unbreakable Bond 🥰",
        caption: "Together through all walks of life.",
        category: "together"
      },
      {
        url: "img/Screenshot_20260827_213319.jpg.jpeg",
        title: "Laughing on Call 🌟",
        caption: "The cute laughs and goofy faces we make.",
        category: "videocall"
      },
      {
        url: "img/IMG_20260722_022652.jpg.jpeg",
        title: "Elegance Personified 🌺",
        caption: "Simply breathtaking in every single way.",
        category: "her"
      },
      {
        url: "img/InShot_20260702_021010147.jpg.jpeg",
        title: "Happy Beats Together 🎶",
        caption: "Moments where everything feels just right.",
        category: "together"
      },
      {
        url: "img/Screenshot_20260827_214430.jpg.jpeg",
        title: "Virtual Hugs 🤗",
        caption: "Warm smiles and happiness on every call.",
        category: "videocall"
      },
      {
        url: "img/IMG_20260720_150830.jpg.jpeg",
        title: "Stunning Farheen 💖",
        caption: "Capturing the grace and charm you carry naturally.",
        category: "her"
      },
      {
        url: "img/InShot_20260702_021145958.jpg.jpeg",
        title: "Sweet Companionship 🌷",
        caption: "Shared memories that become lifelong treasures.",
        category: "together"
      },
      {
        url: "img/Screenshot_20260827_215558.jpg.jpeg",
        title: "Comfort Calls ☕",
        caption: "Sharing our day, laughs, and quiet moments.",
        category: "videocall"
      },
      {
        url: "img/IMG-20260710-WA0009.jpg.jpeg",
        title: "Pretty Smiles 🌼",
        caption: "Always glowing, always inspiring.",
        category: "her"
      },
      {
        url: "img/InShot_20260702_021220614.jpg.jpeg",
        title: "Always Beside You ❤️",
        caption: "Through every chapter and every celebration.",
        category: "together"
      },
      {
        url: "img/Screenshot_20260827_221014.jpg.jpeg",
        title: "Goodnight Calls 🌠",
        caption: "Ending the day with your smile on screen.",
        category: "videocall"
      },
      {
        url: "img/IMG-20260710-WA0016.jpg.jpeg",
        title: "Picture Perfect 📸",
        caption: "A moment frozen in time, glowing with happiness.",
        category: "her"
      },
      {
        url: "img/IMG-20260710-WA0019.jpg.jpeg",
        title: "Pure Charm ✨",
        caption: "Farheen, you make the world a prettier place.",
        category: "her"
      },
      {
        url: "img/Screenshot_20260820_201432.jpg.jpeg",
        title: "Sweet Conversations 💬",
        caption: "Memories captured during our sweetest talks.",
        category: "videocall"
      },
      {
        url: "img/IMG-20260710-WA0024.jpg.jpeg",
        title: "Sparkle of Life 🌟",
        caption: "Your positive energy is truly infectious.",
        category: "her"
      },
      {
        url: "img/Screenshot_20260820_205447.jpg.jpeg",
        title: "Special Screen Time 📱",
        caption: "Unfiltered joy and real emotions.",
        category: "videocall"
      },
      {
        url: "img/IMG-20260710-WA0027.jpg.jpeg",
        title: "Gentle Spirit 🕊️",
        caption: "A soul as kind as it is radiant.",
        category: "her"
      },
      {
        url: "img/Screenshot_20260820_205451.jpg.jpeg",
        title: "Constant Smiles 😊",
        caption: "Every call reminds me of how special you are.",
        category: "videocall"
      },
      {
        url: "img/IMG-20260710-WA0033.jpg.jpeg",
        title: "Joyful Gaze 💫",
        caption: "Eyes full of wonder, dreams, and light.",
        category: "her"
      },
      {
        url: "img/Screenshot_20260827_153637.jpg.jpeg",
        title: "Daytime Check-ins ☀️",
        caption: "Taking a break just to say hello and see you smile.",
        category: "videocall"
      },
      {
        url: "img/IMG-20260710-WA0037.jpg.jpeg",
        title: "Birthday Queen 🎂",
        caption: "Celebrating today and every day ahead!",
        category: "her"
      },
      {
        url: "img/img1.jpeg",
        title: "Special Portrait 🎀",
        caption: "Unforgettable moments of grace and beauty.",
        category: "her"
      },
      {
        url: "img/img2.jpeg",
        title: "Lovely Memories 💝",
        caption: "Forever etched in memory and heart.",
        category: "her"
      }
    ],
    letterTitle: "Farheen's Secret Surprise 💌",
    letterBody: "Dearest Farheen,\n\nYou are in my heart, you shall be in there forever. My greatest wish is that you are happy when you think of me, as I am when I think of you.\n\nOn this special day, I wish you all the laughter, peace, and warmth in the universe. Never stop being the beautiful, radiant soul that you are.\n\nHappy Birthday! ❤️",
    heartLetterTitle: "❤️ A little something from the bottom of my heart…",
    heartLetterSubtitle: "For Farheen Shaikh 🌸",
    heartLetterBody: "Happy Birthday, My Cutiee Farheen🎂❤️\n\nI don’t know if this is the right time to say all this or not, but I just want to express something that has been in my heart for a long time. I don’t want to make your birthday too emotional, but I feel like today is a good opportunity to tell you how much your presence actually means to me.\n\nThere was a time when I lost you, and honestly, even back then, I loved you so much, truly and deeply from my heart. ❤️ Maybe I didn’t know how to express it properly, and maybe I wasn’t mature enough to understand how much you truly meant to me. I made so many mistakes, and I know that some of my actions hurt you. For all of that, I’m genuinely sorry. I wish I could go back and do things differently, but I can’t change the past. All I can do now is learn from my mistakes and be grateful that I got the chance to have you in my life again.\n\nFrom the day we became friends in February 2020 until today, you have always been my comfort zone. No matter how much time passed or how many things happened between us, there has always been something about you that makes me feel like I can simply be myself. ❤️\n\nThank you for coming back into my life, even if it’s as a good friend for now. Having you here again genuinely makes my life happier. You are that one person with whom I can share almost everything and talk about literally anything without overthinking.\n\nWith you, I can be childish, silly, annoying, emotional, or just say whatever is on my mind without constantly worrying about being judged. I don’t have to pretend to be someone I’m not. You are my safe place, my comfort zone, and someone with whom I can truly be myself. 🥹❤️\n\nAnd there’s something I’ve realized about myself too. Even though we aren’t together, whenever I look at another girl, somewhere inside me it feels like I’m being unfaithful to you. I know we aren’t in a relationship right now, and I’m not saying this to put any pressure on you. It’s simply how deeply my heart has always been attached to you. Somehow, a part of me still feels like it belongs to you. ❤️\n\nThank you for being such a good friend even after I hurt you. Thank you for giving me another chance to have you in my life. You came back as a friend, but your presence filled a part of my life that I didn’t even realize was missing.\n\nAnd I want you to know something else…\n\nI promise I’ll try my best to become the person you want me to be and the person your family would be proud to have in your life. InshaAllah, I’ll become that person soon. I know I still have a lot to improve, and I know promises alone don’t mean much. I want to prove it through my actions, my efforts, and the way I treat you. I don’t want to repeat the mistakes I made before or give you another reason to feel hurt. I just want to become someone you can trust, respect, and feel proud of having in your life. ❤️\n\nMaybe some people come into our lives and leave a mark that time can never erase. And maybe some bonds, no matter how complicated they become, somehow find their way back to each other. I’m genuinely grateful that you found your way back to me.\n\nAnd honestly, my cutiee, your smile is still one of my favourite things about you. 🥹❤️ There is something truly special about it—it can change the entire mood in just a moment. And your hair… MashaAllah, they add such a beautiful charm to you. Sometimes your smile and your hair together make you look so effortlessly adorable that I genuinely don’t know what to say. 🫶🏻\n\nJust keep smiling like this, because protecting that beautiful smile of yours might just be my favourite thing to do.\n\nHappy Birthday, my smile keeper, my cutiee Farheen. 💕\n\nBas aaj ek dil se dua hai… Allah aapko woh sab kuch ata kare jo aapke dil ke liye behtareen ho. Aapki zindagi mein kabhi kisi cheez ki kami na ho jo aapko khushi de. Jo bhi raaste aapke liye likhe gaye hain, woh hamesha khoobsurat manzilon tak le jaayein. Aur jab bhi zindagi mushkil lage, Allah aapko itni himmat de ke aap har mushkil ko muskura kar paar kar sakein. Aapki muskurahat hamesha yunhi roshan rahe, kyunki woh mere liye bhi bohot khaas hai. Ameen. 🤲🏻❤️🌙\n\nThank you for being here, Farheen. Thank you for being my comfort zone since February 2020, my smile keeper, and my missing part. ❤️\n\nAnd once again, I’m truly sorry for everything I did wrong. I can’t change the past, but I can make sure I learn from it. I just hope that from now on, I can give you more reasons to smile than reasons to be hurt.\n\nHappy Birthday once again, my cutiee, my smile keeper, my comfort zone, and my missing part. ❤️🎂🫶🏻"
  };

  let appData = defaultAppData;
  let currentWishIndex = 0;
  let activeGalleryCategory = "all";
  let isAudioPlaying = false;
  let audioCtx = null;
  let candleBlown = false;
  let railPaused = false;
  let globalDistance = 0;
  const speed = 0.85;

  // DOM Elements
  const canvas = document.getElementById("sparkle-canvas");
  const ctx = canvas.getContext("2d");
  const bgAudioElement = document.getElementById("bg-audio-element");
  if (!bgAudioElement.getAttribute("src")) {
    bgAudioElement.src = "deeperthanitseems.mp3";
  }
  const musicToggleBtn = document.getElementById("music-toggle-btn");
  const musicStatusText = document.getElementById("music-status-text");

  // Synchronized Lyrics Badge Elements
  const lyricsFloatContainer = document.getElementById("lyrics-float-container");
  const lyricsBadgeText = document.getElementById("lyrics-badge-text");
  const musicWaveIcon = document.getElementById("music-wave-icon");

  const specialWishText = document.getElementById("special-wish-text");
  const heroDescText = document.getElementById("hero-desc-text");
  
  // Surprise Modals (First Secret Letter)
  const surpriseModal = document.getElementById("surprise-modal");
  const closeSurpriseBtn = document.getElementById("close-surprise-btn");
  const sealSurpriseBtn = document.getElementById("seal-surprise-btn");
  const modalLetterTitle = document.getElementById("modal-letter-title");
  const modalLetterContent = document.getElementById("modal-letter-content");
  const openSurpriseBtn = document.getElementById("open-surprise-btn");

  // Deep Heart Letter Elements (From the Bottom of My Heart)
  const heartLetterModal = document.getElementById("heart-letter-modal");
  const openHeartLetterBtn = document.getElementById("open-heart-letter-btn");
  const openHeartLetterDirectBtn = document.getElementById("open-heart-letter-direct-btn");
  const closeHeartLetterBtn = document.getElementById("close-heart-letter-btn");
  const sealHeartLetterBtn = document.getElementById("seal-heart-letter-btn");
  const backToFirstLetterBtn = document.getElementById("back-to-first-letter-btn");
  const heartLetterContainer = document.getElementById("heart-letter-container");
  const heartLetterMainTitle = document.getElementById("heart-letter-main-title");

  // Pre-Surprise Video Elements
  const videoSurpriseModal = document.getElementById("video-surprise-modal");
  const surpriseVideoElement = document.getElementById("surprise-video-element");
  const closeVideoBtn = document.getElementById("close-video-btn");
  const continueToWishBtn = document.getElementById("continue-to-wish-btn");
  const replayVideoBtn = document.getElementById("replay-video-btn");

  // Cake Elements
  const blowCandleBtn = document.getElementById("blow-candle-btn");
  const candleFlame = document.getElementById("candle-flame");
  const candleGlow = document.getElementById("candle-glow");
  const candleSmoke = document.getElementById("candle-smoke");
  const blowStatusHint = document.getElementById("blow-status-hint");

  // Gallery Elements
  const photoGridContainer = document.getElementById("photo-grid-container");
  const galleryFilterTabs = document.getElementById("gallery-filter-tabs");
  const lightboxModal = document.getElementById("lightbox-modal");
  const closeLightboxBtn = document.getElementById("close-lightbox-btn");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxCaption = document.getElementById("lightbox-caption");

  // Wish Deck Elements
  const wishDeckContainer = document.getElementById("wish-deck-container");
  const prevWishBtn = document.getElementById("prev-wish-btn");
  const nextWishBtn = document.getElementById("next-wish-btn");
  const wishCounter = document.getElementById("wish-counter");

  // Gift Elements
  const giftBox = document.getElementById("gift-box");
  const giftRevealCard = document.getElementById("gift-reveal-card");
  const replayBtn = document.getElementById("replay-btn");

  const photoPath = document.getElementById("photo-motion-path");
  const railStage = document.getElementById("photo-rail-stage");

  /* --------------------------------------------------------------------------
     1. AMBIENT SPARKLES & FLOATING HEARTS CANVAS
     -------------------------------------------------------------------------- */
  let particles = [];
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedY = Math.random() * 0.6 + 0.2;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.6 + 0.3;
      this.isHeart = Math.random() > 0.65;
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      if (this.y < -10) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      if (this.isHeart) {
        ctx.fillStyle = "#e11d48";
        ctx.font = `${this.size * 3 + 8}px serif`;
        ctx.fillText("❤️", this.x, this.y);
      } else {
        ctx.fillStyle = "#fb7185";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < 30; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  /* --------------------------------------------------------------------------
     2. 3D BACKGROUND MOVING PHOTO RAIL ENGINE (BEHIND HERO)
     -------------------------------------------------------------------------- */
  let cardElements = [];

  function initPhotoRail() {
    if (!railStage) return;
    railStage.innerHTML = "";
    cardElements = [];

    if (!photoPath || !appData || !appData.photos || !appData.photos.length) return;

    // Distribute cards with elegant spacing so they form a beautiful, uncrowded half-circle arch
    const isSmallMobile = window.innerWidth <= 440;
    const isTablet = window.innerWidth <= 768;
    const totalCards = isSmallMobile ? 8 : (isTablet ? 10 : 15);
    const photoList = appData.photos;

    for (let i = 0; i < totalCards; i++) {
      const photoItem = photoList[i % photoList.length];
      const card = document.createElement("div");
      card.className = "rail-photo-card";
      card.innerHTML = `<img src="${photoItem.url}" alt="${photoItem.title}" loading="lazy">`;
      
      card.addEventListener("click", (e) => {
        e.stopPropagation();
        lightboxImg.src = photoItem.url;
        lightboxTitle.innerText = photoItem.title;
        lightboxCaption.innerText = photoItem.caption;
        lightboxModal.classList.remove("hidden");
      });

      railStage.appendChild(card);
      cardElements.push({
        element: card,
        photoData: photoItem
      });
    }
  }

  let isRailLoopRunning = false;

  function startRailAnimation() {
    if (isRailLoopRunning) return;
    isRailLoopRunning = true;

    function step() {
      if (photoPath && cardElements.length > 0 && railStage) {
        let pathLen = 0;
        try {
          pathLen = photoPath.getTotalLength();
        } catch (err) {
          pathLen = 0;
        }

        if (pathLen && !isNaN(pathLen) && pathLen > 50) {
          const stageRect = railStage.getBoundingClientRect();
          const stageW = Math.max(stageRect.width || 0, window.innerWidth || 0, 360);
          const stageH = Math.max(stageRect.height || 0, window.innerHeight || 0, 600);
          const scaleX = stageW / 1000;
          const scaleY = stageH / 800;

          const isSmallMobile = window.innerWidth <= 440;
          const isTablet = window.innerWidth <= 768;
          const cardW = isSmallMobile ? 58 : (isTablet ? 66 : 85);
          const cardH = isSmallMobile ? 78 : (isTablet ? 88 : 115);

          if (isNaN(globalDistance)) globalDistance = 0;

          if (!railPaused) {
            globalDistance = (globalDistance + speed) % pathLen;
          }

          const numCards = cardElements.length;
          cardElements.forEach((item, i) => {
            const cardDist = (globalDistance + (i * (pathLen / numCards))) % pathLen;
            const pt = photoPath.getPointAtLength(cardDist);

            // Smooth tangent angle using local delta without boundary flipping
            const d1 = Math.max(0, cardDist - 3);
            const d2 = Math.min(pathLen, cardDist + 3);
            const pt1 = photoPath.getPointAtLength(d1);
            const pt2 = photoPath.getPointAtLength(d2);

            if (pt && pt1 && pt2 && !isNaN(pt.x) && !isNaN(pt.y)) {
              const x = pt.x * scaleX;
              const y = pt.y * scaleY;
              const rawAngle = Math.atan2((pt2.y - pt1.y) * scaleY, (pt2.x - pt1.x) * scaleX) * (180 / Math.PI);
              // Gentle tilt along the half-circle arch without turning sideways
              const angle = Math.max(-26, Math.min(26, rawAngle * 0.48));

              item.element.style.transform = `translate3d(${x - cardW / 2}px, ${y - cardH / 2}px, 0) rotate(${angle}deg)`;
            }
          });
        }
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* --------------------------------------------------------------------------
     3. AUDIO CONTROLS & SYNCHRONIZED LYRICS ENGINE
     -------------------------------------------------------------------------- */
  function toggleAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!bgAudioElement.src || !bgAudioElement.src.includes(".mp")) {
      bgAudioElement.src = "deeperthanitseems.mpeg";
    }

    if (bgAudioElement.paused) {
      bgAudioElement.play().catch(e => console.log("Audio play on user action", e));
      isAudioPlaying = true;
      if (musicWaveIcon) musicWaveIcon.classList.remove("paused");
    } else {
      bgAudioElement.pause();
      isAudioPlaying = false;
      if (musicWaveIcon) musicWaveIcon.classList.add("paused");
      if (lyricsBadgeText) lyricsBadgeText.innerText = "🎵 Song Paused — Tap To Play";
    }
  }

  if (lyricsFloatContainer) {
    lyricsFloatContainer.addEventListener("click", toggleAudio);
  }

  let currentActiveLyricIndex = -1;

  function updateLyricsSync() {
    const curTime = bgAudioElement.currentTime;

    if (typeof songLyricsData === 'undefined' || !songLyricsData || !songLyricsData.length) return;

    let activeIdx = -1;
    for (let i = 0; i < songLyricsData.length; i++) {
      if (songLyricsData[i].time <= curTime + 0.15) {
        activeIdx = i;
      } else {
        break;
      }
    }

    if (activeIdx !== currentActiveLyricIndex) {
      currentActiveLyricIndex = activeIdx;
      if (!lyricsBadgeText) return;

      if (activeIdx === -1) {
        lyricsBadgeText.innerText = "🎵 Deeper Than It Seems — Jace June";
      } else {
        const activeItem = songLyricsData[activeIdx];
        lyricsBadgeText.innerText = activeItem.text;
        lyricsBadgeText.classList.remove("lyric-text-fade");
        void lyricsBadgeText.offsetWidth;
        lyricsBadgeText.classList.add("lyric-text-fade");
      }
    }
  }

  bgAudioElement.addEventListener("timeupdate", updateLyricsSync);

  bgAudioElement.addEventListener("play", () => {
    isAudioPlaying = true;
    if (musicWaveIcon) musicWaveIcon.classList.remove("paused");
  });

  bgAudioElement.addEventListener("pause", () => {
    isAudioPlaying = false;
    if (musicWaveIcon) musicWaveIcon.classList.add("paused");
    if (lyricsBadgeText) lyricsBadgeText.innerText = "🎵 Song Paused — Tap To Play";
  });

  bgAudioElement.addEventListener("ended", () => {
    isAudioPlaying = false;
    if (musicWaveIcon) musicWaveIcon.classList.add("paused");
    if (lyricsBadgeText) lyricsBadgeText.innerText = "🎵 Song Ended — Tap To Replay";
  });

  /* --------------------------------------------------------------------------
     PLAY AUDIO ON USER INTERACTION (AFTER ANY BUTTON OR TOUCH EVENT)
     -------------------------------------------------------------------------- */
  function setupAudioOnInteraction() {
    if (!bgAudioElement) return;

    if (!bgAudioElement.src || !bgAudioElement.src.includes(".mp")) {
      bgAudioElement.src = "deeperthanitseems.mp3";
    }

    // Initial state: paused, invite user to tap
    if (musicWaveIcon) musicWaveIcon.classList.add("paused");
    if (lyricsBadgeText) lyricsBadgeText.innerText = "🎵 Tap Any Button To Play Music ✨";

    const startAudioPlayback = () => {
      if (!bgAudioElement.paused) {
        cleanInteractionListeners();
        return;
      }
      const playPromise = bgAudioElement.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          isAudioPlaying = true;
          if (musicWaveIcon) musicWaveIcon.classList.remove("paused");
          if (lyricsBadgeText) {
            lyricsBadgeText.innerText = "🎵 Deeper Than It Seems — Jace June";
          }
          cleanInteractionListeners();
        }).catch((err) => {
          console.log("Audio waiting for explicit interaction:", err);
        });
      }
    };

    const interactionEvents = ["click", "touchstart", "touchend", "pointerdown", "keydown"];
    const cleanInteractionListeners = () => {
      interactionEvents.forEach(evt => {
        window.removeEventListener(evt, startAudioPlayback, true);
        document.removeEventListener(evt, startAudioPlayback, true);
      });
    };

    // Trigger on any button tap or click anywhere
    interactionEvents.forEach(evt => {
      window.addEventListener(evt, startAudioPlayback, { capture: true, passive: true });
      document.addEventListener(evt, startAudioPlayback, { capture: true, passive: true });
    });
  }


  /* --------------------------------------------------------------------------
     4. CANDLE BLOWING & CONFETTI FIREWORKS
     -------------------------------------------------------------------------- */
  if (blowCandleBtn) {
    blowCandleBtn.addEventListener("click", () => {
      if (candleBlown) return;
      candleBlown = true;

      if (candleFlame) candleFlame.classList.add("blown-out");
      if (candleGlow) candleGlow.style.opacity = "0";
      if (candleSmoke) candleSmoke.classList.add("active");
      if (blowStatusHint) blowStatusHint.innerText = "Wish Made! 🎉 Celebration Unlocked!";

      if (window.confetti) {
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
        setTimeout(() => {
          confetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0 } });
          confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1 } });
        }, 300);
      }

      if (!isAudioPlaying) toggleAudio();
    });
  }

  /* --------------------------------------------------------------------------
     5. PHOTO GALLERY WITH CATEGORY TABS & LIGHTBOX
     -------------------------------------------------------------------------- */
  function renderPhotoGrid(photosList, category = "all") {
    if (!photoGridContainer) return;

    const filtered = category === "all" 
      ? photosList 
      : photosList.filter(p => p.category === category);

    photoGridContainer.innerHTML = filtered.map((p, idx) => `
      <div class="photo-card" data-idx="${idx}">
        <img src="${p.url}" alt="${p.title}" loading="lazy">
        <div class="photo-overlay">
          <span class="photo-title">${p.title}</span>
          <span class="photo-caption">${p.caption}</span>
        </div>
      </div>
    `).join('');

    // Attach click for lightbox
    photoGridContainer.querySelectorAll(".photo-card").forEach(card => {
      card.addEventListener("click", () => {
        const idx = card.getAttribute("data-idx");
        const item = filtered[idx];
        if (item) {
          lightboxImg.src = item.url;
          lightboxTitle.innerText = item.title;
          lightboxCaption.innerText = item.caption;
          lightboxModal.classList.remove("hidden");
        }
      });
    });
  }

  if (galleryFilterTabs) {
    galleryFilterTabs.querySelectorAll(".gallery-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        galleryFilterTabs.querySelectorAll(".gallery-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeGalleryCategory = btn.getAttribute("data-category");
        renderPhotoGrid(appData.photos, activeGalleryCategory);
      });
    });
  }

  /* --------------------------------------------------------------------------
     6. WISH CARDS CAROUSEL
     -------------------------------------------------------------------------- */
  function updateWishCounter() {
    const total = appData && appData.wishes ? appData.wishes.length : 4;
    if (wishCounter) wishCounter.innerText = `${currentWishIndex + 1} / ${total}`;
  }

  function showWishCard(index) {
    const cards = document.querySelectorAll(".wish-card");
    cards.forEach((card, idx) => {
      card.className = "wish-card";
      if (idx === index) {
        card.classList.add("active-card");
      } else if (idx === (index + 1) % cards.length) {
        card.classList.add("next-card");
      } else {
        card.classList.add("prev-card");
      }
    });
    updateWishCounter();
  }

  function renderWishDeck() {
    if (!wishDeckContainer) return;

    const defaultWishes = [
      { icon: "🌟", title: "Shine Always", text: "Farheen, may your journey be filled with glowing moments, inspiring adventures, and dreams coming true!" },
      { icon: "💖", title: "Endless Love & Joy", text: "Every memory of your laughter brings a warm smile to my face. May today be as sweet as your spirit!" },
      { icon: "🌺", title: "Stay Graceful", text: "You bring so much light into the world simply by being your wonderful self." },
      { icon: "🎁", title: "A Year of Blessings", text: "May every single day of your new chapter open doors to success, health, and memorable smiles!" }
    ];
    const wishesList = appData && appData.wishes ? appData.wishes : defaultWishes;
    
    wishDeckContainer.innerHTML = wishesList.map((w, idx) => `
      <div class="wish-card ${idx === 0 ? 'active-card' : idx === 1 ? 'next-card' : 'prev-card'}" data-index="${idx}">
        <div class="card-icon">${w.icon || '✨'}</div>
        <h3>${w.title}</h3>
        <p>${w.text}</p>
      </div>
    `).join('');

    updateWishCounter();
  }

  if (prevWishBtn) {
    prevWishBtn.addEventListener("click", () => {
      const total = appData && appData.wishes ? appData.wishes.length : 4;
      currentWishIndex = (currentWishIndex - 1 + total) % total;
      showWishCard(currentWishIndex);
    });
  }

  if (nextWishBtn) {
    nextWishBtn.addEventListener("click", () => {
      const total = appData && appData.wishes ? appData.wishes.length : 4;
      currentWishIndex = (currentWishIndex + 1) % total;
      showWishCard(currentWishIndex);
    });
  }

  /* --------------------------------------------------------------------------
     7. GIFT BOX & SURPRISE WORDS FLOW (SMOOTH & LAG-FREE)
     -------------------------------------------------------------------------- */
  function revealSurpriseCardDirectly() {
    // 1. Smoothly fade and collapse present box
    if (giftBox) {
      giftBox.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      giftBox.style.opacity = "0";
      giftBox.style.transform = "scale(0.85)";
      setTimeout(() => {
        giftBox.style.display = "none";
      }, 380);
    }

    // 2. Smoothly unveil the grand surprise card
    if (giftRevealCard) {
      giftRevealCard.classList.remove("hidden");
      setTimeout(() => {
        giftRevealCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }

    // 3. Multi-stage confetti celebration
    if (window.confetti) {
      confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
      setTimeout(() => {
        confetti({ particleCount: 75, angle: 60, spread: 60, origin: { x: 0.1, y: 0.6 } });
        confetti({ particleCount: 75, angle: 120, spread: 60, origin: { x: 0.9, y: 0.6 } });
      }, 260);
    }
  }

  // Surprise Video player flow (opens when gift box is clicked)
  function playSurpriseVideoFlow() {
    // Pause background audio while video plays
    if (bgAudioElement && !bgAudioElement.paused) {
      bgAudioElement.pause();
    }

    // Open video modal
    if (videoSurpriseModal) {
      videoSurpriseModal.classList.remove("hidden");
    }

    // Play video smoothly
    if (surpriseVideoElement) {
      surpriseVideoElement.currentTime = 0;
      const playPromise = surpriseVideoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => console.log("User gesture required for video play", err));
      }
    }
  }

  function closeVideoModal() {
    if (surpriseVideoElement) {
      surpriseVideoElement.pause();
    }
    if (videoSurpriseModal) {
      videoSurpriseModal.classList.add("hidden");
    }
    // Resume background birthday song
    if (bgAudioElement && bgAudioElement.paused) {
      bgAudioElement.play().catch(e => console.log("Resume audio:", e));
    }
    // Reveal the grand surprise wish card after video is closed
    if (giftRevealCard && giftRevealCard.classList.contains("hidden")) {
      revealSurpriseCardDirectly();
    }
  }

  if (giftBox) {
    giftBox.addEventListener("click", () => {
      // Smooth 3D lid lift animation
      giftBox.classList.add("opened");
      if (window.confetti) {
        confetti({ particleCount: 90, spread: 75, origin: { y: 0.55 } });
      }
      // Open the video directly instead of the wish card!
      setTimeout(() => {
        playSurpriseVideoFlow();
      }, 350);
    });
  }

  // Auto-confetti when video finishes playing
  if (surpriseVideoElement) {
    surpriseVideoElement.addEventListener("ended", () => {
      if (window.confetti) {
        confetti({ particleCount: 90, spread: 80, origin: { y: 0.5 } });
      }
    });
  }

  // Close video modal buttons
  if (continueToWishBtn) {
    continueToWishBtn.addEventListener("click", closeVideoModal);
  }
  if (closeVideoBtn) {
    closeVideoBtn.addEventListener("click", closeVideoModal);
  }

  // Replay video button on surprise card
  if (replayVideoBtn) {
    replayVideoBtn.addEventListener("click", () => {
      playSurpriseVideoFlow();
    });
  }

  // Back to top button
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Open secret letter modal
  if (openSurpriseBtn) {
    openSurpriseBtn.addEventListener("click", () => {
      if (surpriseModal) surpriseModal.classList.remove("hidden");
      if (window.confetti) {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      }
    });
  }

  if (closeSurpriseBtn) {
    closeSurpriseBtn.addEventListener("click", () => surpriseModal && surpriseModal.classList.add("hidden"));
  }
  if (sealSurpriseBtn) {
    sealSurpriseBtn.addEventListener("click", () => surpriseModal && surpriseModal.classList.add("hidden"));
  }

  // --- Deep Heart Letter Handlers ---
  function openHeartLetterFlow() {
    if (surpriseModal) surpriseModal.classList.add("hidden");
    if (heartLetterModal) {
      heartLetterModal.classList.remove("hidden");
      if (heartLetterContainer) heartLetterContainer.scrollTop = 0;
    }
    if (window.confetti) {
      confetti({ particleCount: 110, spread: 85, origin: { y: 0.55 } });
      setTimeout(() => {
        confetti({ particleCount: 70, angle: 60, spread: 55, origin: { x: 0.1, y: 0.6 } });
        confetti({ particleCount: 70, angle: 120, spread: 55, origin: { x: 0.9, y: 0.6 } });
      }, 250);
    }
  }

  // Transition from first letter teaser to heart letter
  if (openHeartLetterBtn) {
    openHeartLetterBtn.addEventListener("click", openHeartLetterFlow);
  }

  // Direct button from surprise card
  if (openHeartLetterDirectBtn) {
    openHeartLetterDirectBtn.addEventListener("click", openHeartLetterFlow);
  }

  // Back from heart letter to first letter
  if (backToFirstLetterBtn) {
    backToFirstLetterBtn.addEventListener("click", () => {
      if (heartLetterModal) heartLetterModal.classList.add("hidden");
      if (surpriseModal) surpriseModal.classList.remove("hidden");
    });
  }

  // Close heart letter modal
  if (closeHeartLetterBtn) {
    closeHeartLetterBtn.addEventListener("click", () => {
      if (heartLetterModal) heartLetterModal.classList.add("hidden");
    });
  }

  if (sealHeartLetterBtn) {
    sealHeartLetterBtn.addEventListener("click", () => {
      if (heartLetterModal) heartLetterModal.classList.add("hidden");
      if (window.confetti) {
        confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
      }
    });
  }

  if (heartLetterModal) {
    heartLetterModal.addEventListener("click", (e) => {
      if (e.target === heartLetterModal) {
        heartLetterModal.classList.add("hidden");
      }
    });
  }

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener("click", () => lightboxModal && lightboxModal.classList.add("hidden"));
  }
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.add("hidden");
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. DATA INITIALIZATION & RENDERING
     -------------------------------------------------------------------------- */
  const deepLetterContent = [
    { type: "lead", text: "Happy Birthday, My Cutiee Farheen🎂❤️" },
    { type: "para", text: "I don’t know if this is the right time to say all this or not, but I just want to express something that has been in my heart for a long time. I don’t want to make your birthday too emotional, but I feel like today is a good opportunity to tell you how much your presence actually means to me." },
    { type: "para", text: "There was a time when I lost you, and honestly, even back then, I loved you so much, truly and deeply from my heart. ❤️ Maybe I didn’t know how to express it properly, and maybe I wasn’t mature enough to understand how much you truly meant to me. I made so many mistakes, and I know that some of my actions hurt you. For all of that, I’m genuinely sorry. I wish I could go back and do things differently, but I can’t change the past. All I can do now is learn from my mistakes and be grateful that I got the chance to have you in my life again." },
    { type: "para", text: "From the day we became friends in February 2020 until today, you have always been my comfort zone. No matter how much time passed or how many things happened between us, there has always been something about you that makes me feel like I can simply be myself. ❤️" },
    { type: "para", text: "Thank you for coming back into my life, even if it’s as a good friend for now. Having you here again genuinely makes my life happier. You are that one person with whom I can share almost everything and talk about literally anything without overthinking." },
    { type: "para", text: "With you, I can be childish, silly, annoying, emotional, or just say whatever is on my mind without constantly worrying about being judged. I don’t have to pretend to be someone I’m not. You are my safe place, my comfort zone, and someone with whom I can truly be myself. 🥹❤️" },
    { type: "para", text: "And there’s something I’ve realized about myself too. Even though we aren’t together, whenever I look at another girl, somewhere inside me it feels like I’m being unfaithful to you. I know we aren’t in a relationship right now, and I’m not saying this to put any pressure on you. It’s simply how deeply my heart has always been attached to you. Somehow, a part of me still feels like it belongs to you. ❤️" },
    { type: "para", text: "Thank you for being such a good friend even after I hurt you. Thank you for giving me another chance to have you in my life. You came back as a friend, but your presence filled a part of my life that I didn’t even realize was missing." },
    { type: "para", text: "And I want you to know something else…" },
    { type: "para", text: "I promise I’ll try my best to become the person you want me to be and the person your family would be proud to have in your life. InshaAllah, I’ll become that person soon. I know I still have a lot to improve, and I know promises alone don’t mean much. I want to prove it through my actions, my efforts, and the way I treat you. I don’t want to repeat the mistakes I made before or give you another reason to feel hurt. I just want to become someone you can trust, respect, and feel proud of having in your life. ❤️" },
    { type: "para", text: "Maybe some people come into our lives and leave a mark that time can never erase. And maybe some bonds, no matter how complicated they become, somehow find their way back to each other. I’m genuinely grateful that you found your way back to me." },
    { type: "para", text: "And honestly, my cutiee, your smile is still one of my favourite things about you. 🥹❤️ There is something truly special about it—it can change the entire mood in just a moment. And your hair… MashaAllah, they add such a beautiful charm to you. Sometimes your smile and your hair together make you look so effortlessly adorable that I genuinely don’t know what to say. 🫶🏻" },
    { type: "para", text: "Just keep smiling like this, because protecting that beautiful smile of yours might just be my favourite thing to do." },
    { type: "lead", text: "Happy Birthday, my smile keeper, my cutiee Farheen. 💕" },
    { 
      type: "para", 
      text: "Bas aaj ek dil se dua hai… Allah aapko woh sab kuch ata kare jo aapke dil ke liye behtareen ho. Aapki zindagi mein kabhi kisi cheez ki kami na ho jo aapko khushi de. Jo bhi raaste aapke liye likhe gaye hain, woh hamesha khoobsurat manzilon tak le jaayein. Aur jab bhi zindagi mushkil lage, Allah aapko itni himmat de ke aap har mushkil ko muskura kar paar kar sakein. Aapki muskurahat hamesha yunhi roshan rahe, kyunki woh mere liye bhi bohot khaas hai. Ameen. 🤲🏻❤️🌙" 
    },
    { type: "para", text: "Thank you for being here, Farheen. Thank you for being my comfort zone since February 2020, my smile keeper, and my missing part. ❤️" },
    { type: "para", text: "And once again, I’m truly sorry for everything I did wrong. I can’t change the past, but I can make sure I learn from it. I just hope that from now on, I can give you more reasons to smile than reasons to be hurt." },
    { type: "lead", text: "Happy Birthday once again, my cutiee, my smile keeper, my comfort zone, and my missing part. ❤️🎂🫶🏻" }
  ];

  function renderHeartLetter() {
    if (!heartLetterContainer) return;

    // Dynamically render customized letter from customize.json if available
    if (appData && appData.heartLetterBody) {
      const paras = appData.heartLetterBody.split(/\n\s*\n/).filter(p => p.trim());
      heartLetterContainer.innerHTML = paras.map((p, idx) => {
        const trimmed = p.trim();
        if (idx === 0 || idx === paras.length - 1 || trimmed.startsWith("Happy Birthday")) {
          return `<p class="heart-lead-para">${trimmed}</p>`;
        }
        return `<p class="heart-letter-para">${trimmed}</p>`;
      }).join("");
      return;
    }

    heartLetterContainer.innerHTML = deepLetterContent.map(item => {
      if (item.type === "lead") {
        return `<p class="heart-lead-para">${item.text}</p>`;
      }
      return `<p class="heart-letter-para">${item.text}</p>`;
    }).join("");
  }
  function loadData() {
    fetch("customize.json?v=" + Date.now(), { cache: "no-store" })
      .then(res => res.json())
      .then(data => {
        if (data) {
          appData = data;
          renderApp();
        }
      })
      .catch(err => {
        console.warn("Using default fallback data", err);
        appData = defaultAppData;
        renderApp();
      });
  }

  function renderApp() {
    if (!appData) appData = defaultAppData;

    if (appData.mainWish && specialWishText) {
      specialWishText.innerText = `"${appData.mainWish}"`;
    }
    if (appData.heroText && heroDescText) {
      heroDescText.innerText = appData.heroText;
    }
    if (appData.letterTitle && modalLetterTitle) {
      modalLetterTitle.innerText = appData.letterTitle;
    }
    if (appData.letterBody && modalLetterContent) {
      modalLetterContent.innerText = appData.letterBody;
    }
    if (appData.videoUrl && surpriseVideoElement) {
      surpriseVideoElement.src = appData.videoUrl;
    }
    if (appData.heartLetterTitle && heartLetterMainTitle) {
      heartLetterMainTitle.innerText = appData.heartLetterTitle;
    }
    const heartSubtitleEl = document.querySelector(".heart-modal-subtitle");
    if (appData.heartLetterSubtitle && heartSubtitleEl) {
      heartSubtitleEl.innerText = appData.heartLetterSubtitle;
    }

    renderHeartLetter();
    initPhotoRail();
    startRailAnimation();

    if (appData.photos) {
      renderPhotoGrid(appData.photos, activeGalleryCategory);
    }
    renderWishDeck();
  }

  // Render immediately with full fallback data so everything appears right away
  renderApp();
  // Fetch customized data if running on a local server
  loadData();
  // Play song after any button or screen interaction
  setupAudioOnInteraction();
});