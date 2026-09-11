/* ============================================================
   SCHOLAR OS ENGINE — behavior layer
   sosBuild(SLIDES): renders chrome + gallery, wires navigation,
   drives the reveal system, and plays synthesized UI sound.
   Off by default; mute control always visible.
   ============================================================ */

function sosBuild(SLIDES) {
  var stage = document.getElementById('sos-stage');
  var current = 0;
  var muted = true;
  var galleryOpen = false;
  var audioCtx = null;

  /* ---- render slides ------------------------------------------------ */
  SLIDES.forEach(function (s, i) {
    var el = document.createElement('div');
    el.className = 'sos-slide ' + s.layout + (s.dark ? ' is-dark' : '');
    el.id = 'sos-slide-' + i;
    el.innerHTML = s.html;
    stage.appendChild(el);
  });

  /* ---- chrome --------------------------------------------------------- */
  var isEmbedded = window.self !== window.top;
  var chrome = document.createElement('div');
  chrome.className = 'sos-chrome';
  chrome.innerHTML =
    '<div class="sos-chrome-left">' +
      (isEmbedded ? '' : '<a class="sos-back-link" href="/scholar-os">← Scholar OS</a>') +
      '<span class="sos-progress" id="sos-progress-label">01 / ' + String(SLIDES.length).padStart(2, '0') + '</span>' +
      '<span class="sos-progress-bar"><span class="sos-progress-fill" id="sos-progress-fill" style="width:0%"></span></span>' +
    '</div>' +
    '<div class="sos-chrome-right">' +
      '<button class="sos-btn" id="sos-mute" aria-pressed="false">Sound off</button>' +
      '<button class="sos-btn" id="sos-gallery-btn">Gallery</button>' +
      '<button class="sos-btn" id="sos-fs-btn">Fullscreen</button>' +
    '</div>';
  document.body.appendChild(chrome);

  /* ---- gallery ---------------------------------------------------------- */
  var gallery = document.createElement('div');
  gallery.className = 'sos-gallery';
  var galleryGrid = document.createElement('div');
  galleryGrid.className = 'sos-gallery-grid';
  SLIDES.forEach(function (s, i) {
    var thumb = document.createElement('div');
    thumb.className = 'sos-gallery-thumb';
    thumb.innerHTML =
      '<span class="sos-gallery-thumb-num">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<span class="sos-gallery-thumb-title">' + (s.title || '') + '</span>';
    thumb.addEventListener('click', function () { goTo(i); closeGallery(); });
    galleryGrid.appendChild(thumb);
  });
  gallery.appendChild(galleryGrid);
  document.body.appendChild(gallery);

  function openGallery() { galleryOpen = true; gallery.classList.add('is-open'); }
  function closeGallery() { galleryOpen = false; gallery.classList.remove('is-open'); }
  function toggleGallery() { galleryOpen ? closeGallery() : openGallery(); }

  /* ---- sound (synthesized, Web Audio API — no asset files) --------------- */
  function ensureCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }
  function tone(freq, durMs, type, gainPeak) {
    if (muted) return;
    var ctx = ensureCtx();
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(gainPeak || 0.06, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + durMs / 1000);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + durMs / 1000);
  }
  var SOUND = {
    pageSoft:    function () { tone(660, 110, 'sine', 0.05); },
    sourcePlace: function () { tone(340, 180, 'triangle', 0.05); },
    labelTap:    function () { tone(880, 90, 'sine', 0.035); },
    routeTrace:  function () { tone(220, 500, 'sawtooth', 0.03); }
  };

  /* ---- navigation ------------------------------------------------------- */
  function render() {
    document.querySelectorAll('.sos-slide').forEach(function (el, i) {
      el.classList.toggle('is-active', i === current);
    });
    document.getElementById('sos-progress-label').textContent =
      String(current + 1).padStart(2, '0') + ' / ' + String(SLIDES.length).padStart(2, '0');
    document.getElementById('sos-progress-fill').style.width =
      (((current + 1) / SLIDES.length) * 100) + '%';

    var s = SLIDES[current];
    if (s.hasArtifact) SOUND.sourcePlace();
    else if (s.hasTimeline) SOUND.routeTrace();
    else if (s.hasQuote) SOUND.labelTap();
    else SOUND.pageSoft();
  }

  function goTo(i) {
    current = Math.max(0, Math.min(SLIDES.length - 1, i));
    render();
  }
  function next() { if (current < SLIDES.length - 1) goTo(current + 1); }
  function prev() { if (current > 0) goTo(current - 1); }

  /* ---- keyboard --------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft') { prev(); }
    else if (e.key === 'f' || e.key === 'F') { toggleFullscreen(); }
    else if (e.key === 'm' || e.key === 'M') { toggleMute(); }
    else if (e.key === 'g' || e.key === 'G') { toggleGallery(); }
    else if (e.key === 'Escape' && galleryOpen) { closeGallery(); }
  });

  /* ---- touch / swipe ------------------------------------------------------ */
  var touchStartX = null;
  stage.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
    touchStartX = null;
  }, { passive: true });

  /* ---- mute / fullscreen / gallery buttons -------------------------------- */
  function toggleMute() {
    muted = !muted;
    var btn = document.getElementById('sos-mute');
    btn.setAttribute('aria-pressed', String(!muted));
    btn.textContent = muted ? 'Sound off' : 'Sound on';
  }
  function toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
    else document.exitFullscreen && document.exitFullscreen();
  }
  document.getElementById('sos-mute').addEventListener('click', toggleMute);
  document.getElementById('sos-fs-btn').addEventListener('click', toggleFullscreen);
  document.getElementById('sos-gallery-btn').addEventListener('click', toggleGallery);

  /* ---- init ------------------------------------------------------------- */
  render();
}
