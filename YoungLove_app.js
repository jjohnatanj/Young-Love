// ══════════════════════════════════════════════════════════════
// YOUNG LOVE — Where Faith Meets Forever
// Complete JavaScript Application · © 2026 Young Love
// ══════════════════════════════════════════════════════════════

// ─── PAGE ROUTING ───────────────────────────────────────────────
const pages = ['home','how','features','algorithm','journey','pricing','safety','profile','chat'];
function showPage(id) {
  pages.forEach(p => {
    document.getElementById('page-'+p).classList.toggle('active', p===id);
  });
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const tabs = ['how','features','algorithm','journey','pricing','safety','profile','chat'];
  const idx = tabs.indexOf(id);
  if (idx >= 0) document.querySelectorAll('.nav-tab')[idx].classList.add('active');
  window.scrollTo(0,0);
  if (id==='algorithm') setTimeout(renderSwipe, 100);
}

// ─── NAVBAR ─────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('back-top').classList.toggle('show', window.scrollY > 400);
});
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobile-menu');
ham.addEventListener('click', () => {
  const o = mob.classList.toggle('open');
  ham.setAttribute('aria-expanded', o);
});
function closeMobile() { mob.classList.remove('open'); ham.setAttribute('aria-expanded','false'); }

// ─── TOAST ──────────────────────────────────────────────────────
let tTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(tTimer); tTimer = setTimeout(() => t.classList.remove('show'), 3600);
}

// ─── HOME PHONE CARDS ────────────────────────────────────────────
const homeProfiles = [
  {name:'Sarah, 28 🔥🔥🔥🔥', meta:'Baptist · Atlanta, GA · Worship Leader', bg:'linear-gradient(160deg,#F4A261,#E63946)', emoji:'👩'},
  {name:'James, 32 🔥🔥🔥🔥🔥', meta:'Methodist · Dallas, TX · Youth Pastor', bg:'linear-gradient(160deg,#C41E5A,#8B0E36)', emoji:'👨'},
  {name:'Grace, 26 🔥🔥🔥', meta:'Non-Denom · Chicago, IL · Teacher', bg:'linear-gradient(160deg,#F77F00,#E63946)', emoji:'👩‍🦱'},
];
let hIdx = 0;
function homeSwipe(action) {
  const card = document.getElementById('home-card');
  const tx = action==='heart' ? 50 : action==='star' ? 0 : -50;
  card.style.transition = 'transform .35s, opacity .35s';
  card.style.transform = `translateX(${tx}px) rotate(${tx/6}deg)`;
  card.style.opacity = '0';
  setTimeout(() => {
    hIdx = (hIdx+1) % homeProfiles.length;
    const p = homeProfiles[hIdx];
    document.getElementById('home-avatar').textContent = p.emoji;
    document.getElementById('home-avatar').parentElement.style.background = p.bg;
    document.getElementById('home-name').textContent = p.name;
    document.getElementById('home-meta').textContent = p.meta;
    card.style.transition = 'none'; card.style.transform = ''; card.style.opacity = '1';
    if (action==='heart') showToast('💕 You liked ' + p.name.split(',')[0] + '!');
    if (action==='star') showToast('⭐ Super liked! A Rose was sent!');
    if (action==='pass') showToast('Skipped — plenty more ahead! 🌱');
  }, 350);
}

// ─── ALGORITHM TABS ─────────────────────────────────────────────
function aTab(name, btn) {
  document.querySelectorAll('.atab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.algo-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('ap-'+name).classList.add('active');
  btn.classList.add('active');
}

// ─── SWIPE PROFILES (Fake People) ────────────────────────────────
const swProfiles = [
  {name:'Emma R.', age:29, city:'Chicago, IL', denom:'Baptist', role:'Worship Leader & Nurse', flames:'🔥🔥🔥🔥🔥', bg:'linear-gradient(145deg,#E63946,#C41E5A)', emoji:'🌸', verified:true, bio:'Sunday morning coffee, Wednesday night Bible study. Looking for my partner in faith and adventure.'},
  {name:'Noah J.', age:34, city:'Houston, TX', denom:'Methodist', role:'Youth Pastor', flames:'🔥🔥🔥🔥🔥', bg:'linear-gradient(145deg,#C41E5A,#8B0E36)', emoji:'⛪', verified:true, bio:'I lead the youth group every Sunday. I believe love is a daily choice and a calling.'},
  {name:'Lydia M.', age:27, city:'Atlanta, GA', denom:'Pentecostal', role:'Elementary Teacher', flames:'🔥🔥🔥🔥', bg:'linear-gradient(145deg,#F77F00,#E63946)', emoji:'🎵', verified:true, bio:'Music is my love language. I sing in the choir and serve the children\'s ministry on weekends.'},
  {name:'Caleb T.', age:31, city:'Nashville, TN', denom:'Non-Denominational', role:'Software Engineer', flames:'🔥🔥🔥🔥', bg:'linear-gradient(145deg,#8B0E36,#C41E5A)', emoji:'📖', verified:true, bio:'I build apps by day and serve in my community by night. Looking for someone who loves God first.'},
  {name:'Abigail K.', age:25, city:'Dallas, TX', denom:'Presbyterian', role:'Graphic Designer', flames:'🔥🔥🔥🔥🔥', bg:'linear-gradient(145deg,#F4A261,#E63946)', emoji:'🎨', verified:true, bio:'Creative soul, coffee lover, and church volunteer. My faith guides every brushstroke and decision.'},
  {name:'Samuel B.', age:36, city:'Charlotte, NC', denom:'Baptist', role:'Doctor & Deacon', flames:'🔥🔥🔥🔥', bg:'linear-gradient(145deg,#E63946,#F77F00)', emoji:'🩺', verified:true, bio:'Medicine and ministry go hand in hand for me. I serve at the free clinic every Saturday morning.'},
  {name:'Naomi P.', age:30, city:'Phoenix, AZ', denom:'Episcopal', role:'Musician & Author', flames:'🔥🔥🔥🔥🔥', bg:'linear-gradient(145deg,#C41E5A,#F77F00)', emoji:'🎶', verified:true, bio:'I write worship music and I\'m finishing my first book on faith and love. Looking for my duet partner.'},
  {name:'David W.', age:28, city:'New York, NY', denom:'Non-Denominational', role:'Social Worker', flames:'🔥🔥🔥', bg:'linear-gradient(145deg,#8B0E36,#E63946)', emoji:'🌿', verified:false, bio:'Helping others is my calling. I serve in a shelter ministry every Friday evening. Introverted but deeply passionate.'},
];
let swIdx = 0, isDrag=false, startX=0, curX=0;

function buildCard(prof, zi, oy) {
  const d = document.createElement('div');
  d.className = 'sw-card';
  d.style.cssText = `z-index:${zi};transform:translateY(${oy}px) scale(${1-oy*0.003});background:${prof.bg}`;
  const userAge = parseInt(document.getElementById('demo-user-age')?.value||25);
  const gap = Math.abs(userAge - prof.age);
  const blocked = gap >= 20;
  const warned  = gap >= 15 && gap < 20;
  let overlay = '';
  if (blocked) {
    overlay = `<div class="sw-age-block"><div style="font-size:36px">🚫</div><h4>Age Gap Too Large</h4><p>A ${gap}-year age gap exceeds Young Love's safety limits. This profile is not available to you.</p></div>`;
  } else if (warned) {
    overlay = `<div class="sw-age-block" style="background:rgba(247,127,0,.88)"><div style="font-size:36px">⚠️</div><h4>Large Age Gap Warning</h4><p>${gap}-year gap detected. Our safety team monitors large age-gap conversations closely.</p></div>`;
  }
  const avatarHtml = prof.photo ? `<div class="sw-avatar"><img src="${prof.photo}" alt="${prof.name}"></div>` : `<div class="sw-avatar"><div class="big-emoji">${prof.emoji}</div></div>`;
  d.innerHTML = `
    ${avatarHtml}
    ${prof.verified ? '<div class="sw-badge">💕 Verified</div>' : ''}
    <div class="sw-indicator sw-like">LIKE</div>
    <div class="sw-indicator sw-nope">NOPE</div>
    ${overlay}
    <div class="sw-info">
      <strong>${prof.name}, ${prof.age}</strong>
      <div class="sw-meta">
        <span>${prof.denom} · ${prof.city}</span>
        <span>${prof.role}</span>
        <span style="font-size:11px;opacity:.75;font-style:italic">"${prof.bio}"</span>
      </div>
      <div class="flames">${blocked ? '🔒 Blocked' : warned ? '⚠️ '+prof.flames : prof.flames}</div>
    </div>`;
  if (blocked) {
    d.style.cursor = 'not-allowed';
    d.style.filter = 'grayscale(0.3)';
  }
  return d;
}

function renderSwipe() {
  const arena = document.getElementById('swipe-arena');
  const flash = document.getElementById('match-flash');
  const children = Array.from(arena.children).filter(c => !c.id);
  children.forEach(c => c.remove());
  for (let i = Math.min(2, swProfiles.length - swIdx - 1); i >= 0; i--) {
    const p = swProfiles[(swIdx+i) % swProfiles.length];
    const card = buildCard(p, 10-i, i*12);
    if (i===0) attachDrag(card);
    arena.insertBefore(card, flash);
  }
}

function attachDrag(card) {
  card.addEventListener('mousedown', e => { isDrag=true; startX=e.clientX; });
  card.addEventListener('touchstart', e => { isDrag=true; startX=e.touches[0].clientX; }, {passive:true});
  document.addEventListener('mousemove', onMove);
  document.addEventListener('touchmove', e => onMove(e.touches[0]), {passive:true});
  document.addEventListener('mouseup', onEnd);
  document.addEventListener('touchend', onEnd);
}

function onMove(e) {
  if (!isDrag) return;
  curX = e.clientX - startX;
  const arena = document.getElementById('swipe-arena');
  const top = Array.from(arena.children).filter(c=>!c.id).pop();
  if (!top) return;
  top.style.transform = `translateX(${curX}px) rotate(${curX*0.07}deg)`;
  top.style.transition = 'none';
  const like = top.querySelector('.sw-like');
  const nope = top.querySelector('.sw-nope');
  if (like) like.style.opacity = curX>20 ? Math.min((curX-20)/80,1) : 0;
  if (nope) nope.style.opacity = curX<-20 ? Math.min((-curX-20)/80,1) : 0;
}

function onEnd() {
  if (!isDrag) return;
  isDrag = false;
  document.removeEventListener('mousemove', onMove);
  document.removeEventListener('mouseup', onEnd);
  if (Math.abs(curX) > 90) {
    doSwipe(curX > 0 ? 'right' : 'left');
  } else {
    const arena = document.getElementById('swipe-arena');
    const top = Array.from(arena.children).filter(c=>!c.id).pop();
    if (top) { top.style.transition='.3s'; top.style.transform='translateY(0) scale(1)'; }
    const like = top?.querySelector('.sw-like');
    const nope = top?.querySelector('.sw-nope');
    if (like) like.style.opacity=0;
    if (nope) nope.style.opacity=0;
  }
  curX = 0;
}

function doSwipe(dir) {
  const arena = document.getElementById('swipe-arena');
  const top = Array.from(arena.children).filter(c=>!c.id).pop();
  if (!top) return;
  if (top.querySelector('.sw-age-block') && top.style.cursor==='not-allowed') {
    showToast('🚫 This profile is blocked due to age gap safety rules.');
    return;
  }
  const prof = swProfiles[swIdx % swProfiles.length];
  const tx = dir==='right' ? 700 : dir==='left' ? -700 : 0;
  const ty = dir==='super' ? -700 : 0;
  top.style.transition = 'transform .4s ease, opacity .4s';
  top.style.transform = `translateX(${tx}px) translateY(${ty}px) rotate(${tx*0.04}deg)`;
  top.style.opacity = '0';
  if (dir==='right') {
    setTimeout(() => {
      document.getElementById('match-name-text').textContent = `You and ${prof.name} are connected! 💕`;
      document.getElementById('match-flash').classList.add('show');
    }, 300);
  } else {
    if (dir==='left') showToast('Skipped — your perfect match is still out there 🌱');
    if (dir==='super') showToast(`⭐ Super liked ${prof.name}! A Rose was sent! 🌹`);
    swIdx++;
    setTimeout(renderSwipe, 380);
  }
}

function dismissMatch() {
  document.getElementById('match-flash').classList.remove('show');
  swIdx++;
  setTimeout(renderSwipe, 200);
}

// ─── JOURNEY STEPS ───────────────────────────────────────────────
const jMsgs = [
  '🌱 "Every great love story begins with one brave step. Yours starts now." — Complete your profile to receive a free Rose token.',
  '✅ "You showed up authentically — that\'s the most beautiful thing of all." — Complete live video verification to earn your 💕 badge.',
  '💕 "Someone out there said yes to you today. Your heart is truly seen." — Celebrate your first mutual match!',
  '💬 "Real connection is built word by word. You\'re doing beautifully. Keep going." — Reach 10+ messages with a match.',
  '🎙️ "Your voice carries warmth that words alone cannot." — Send your first voice note and be heard.',
  '📹 "You looked into someone\'s eyes and chose courage. That is love in action." — Complete your first video call.',
  '🌹 "Vulnerability is the birthplace of love. Your openness is your greatest gift." — Open your heart and share your Faith Story.',
  '👑 "Love always wins. And today — gloriously — it won for you! 🎉" — You found your person. Forever begins now.',
];
document.querySelectorAll('.jstep').forEach(s => {
  s.addEventListener('click', () => {
    const i = parseInt(s.dataset.i);
    document.querySelectorAll('.jstep').forEach((x,j) => {
      x.classList.remove('done','now');
      if (j<i) x.classList.add('done');
      else if (j===i) x.classList.add('now');
    });
    document.getElementById('j-msg').textContent = jMsgs[i];
  });
});
document.querySelectorAll('.jd-card').forEach((c,i) => {
  c.addEventListener('click', () => {
    document.querySelectorAll('.jd-card').forEach(x => x.classList.remove('active-card'));
    c.classList.add('active-card');
    document.querySelectorAll('.jstep').forEach((s,j) => {
      s.classList.remove('done','now');
      if (j<i) s.classList.add('done');
      else if (j===i) s.classList.add('now');
    });
    document.getElementById('j-msg').textContent = jMsgs[i];
    showToast('Step ' + (i+1) + ' of 8 selected!');
  });
});

// ─── QUOTES ─────────────────────────────────────────────────────
const quotes = [
  {i:"🌹",t:'"The best thing to hold onto in life is each other."',a:"Audrey Hepburn",r:"Actress & Humanitarian"},
  {i:"💕",t:'"You are my sun, my moon, and all of my stars."',a:"E.E. Cummings",r:"Poet"},
  {i:"✝️",t:'"He makes everything beautiful in its time."',a:"Ecclesiastes 3:11",r:"Holy Bible (NIV)"},
  {i:"🕊️",t:'"A successful marriage requires falling in love many times, always with the same person."',a:"Mignon McLaughlin",r:"Author & Journalist"},
  {i:"🔥",t:'"In all the world, there is no heart for me like yours."',a:"Maya Angelou",r:"Poet & Civil Rights Activist"},
  {i:"🌸",t:'"To be fully seen by somebody, and be loved anyhow — this is a human offering that can border on miraculous."',a:"Elizabeth Gilbert",r:"Author of Eat Pray Love"},
  {i:"🙏",t:'"The greatest happiness of life is the conviction that we are loved."',a:"Victor Hugo",r:"Author of Les Misérables"},
  {i:"💌",t:'"Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope."',a:"Maya Angelou",r:"Poet & Author"},
  {i:"⭐",t:'"Two are better than one, because they have a good return for their labor."',a:"Ecclesiastes 4:9",r:"Holy Bible (NIV)"},
  {i:"✝️",t:'"Above all, love each other deeply, because love covers over a multitude of sins."',a:"1 Peter 4:8",r:"Holy Bible (NIV)"},
  {i:"🌹",t:'"Where you go I will go, and where you stay I will stay."',a:"Ruth 1:16",r:"Holy Bible (NIV)"},
  {i:"🔥",t:'"Love does not consist in gazing at each other, but in looking outward together in the same direction."',a:"Antoine de Saint-Exupéry",r:"Author of The Little Prince"},
  {i:"🕊️",t:'"You know you are in love when you cannot fall asleep because reality is finally better than your dreams."',a:"Dr. Seuss",r:"Author & Illustrator"},
  {i:"🌸",t:'"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."',a:"Lao Tzu",r:"Chinese Philosopher"},
  {i:"💌",t:'"I have found the one whom my soul loves."',a:"Song of Solomon 3:4",r:"Holy Bible (NIV)"},
  {i:"🙏",t:'"Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that."',a:"Martin Luther King Jr.",r:"Civil Rights Leader"},
  {i:"⭐",t:'"The best proof of love is trust."',a:"Joyce Brothers",r:"Psychologist & Author"},
  {i:"✝️",t:'"Love is patient, love is kind. It does not envy, it does not boast, it is not proud."',a:"1 Corinthians 13:4",r:"Holy Bible (NIV)"},
  {i:"🌹",t:'"Whatever our souls are made of, his and mine are the same."',a:"Emily Brontë",r:"Author of Wuthering Heights"},
  {i:"💕",t:'"I am my beloved\'s and my beloved is mine."',a:"Song of Solomon 6:3",r:"Holy Bible (NIV)"},
  {i:"🔥",t:'"The giving of love is an education in itself."',a:"Eleanor Roosevelt",r:"Former First Lady of the United States"},
  {i:"🕊️",t:'"Love is not love which alters when it alteration finds."',a:"William Shakespeare",r:"Playwright & Poet"},
  {i:"🌸",t:'"To love and be loved is to feel the sun from both sides."',a:"David Viscott",r:"Psychiatrist & Author"},
  {i:"💌",t:'"Faith makes all things possible. Hope makes all things work. Love makes all things beautiful."',a:"Max Lucado",r:"Pastor & Author"},
  {i:"🙏",t:'"God is love, and whoever abides in love abides in God, and God abides in him."',a:"1 John 4:16",r:"Holy Bible (NIV)"},
  {i:"⭐",t:'"There is only one happiness in this life — to love and be loved."',a:"George Sand",r:"French Novelist"},
  {i:"✝️",t:'"There is no fear in love. But perfect love drives out fear."',a:"1 John 4:18",r:"Holy Bible (NIV)"},
  {i:"🌹",t:'"The most important thing in the world is family and love."',a:"John Wooden",r:"Basketball Coach & Philosopher"},
  {i:"🔥",t:'"At the touch of love, everyone becomes a poet."',a:"Plato",r:"Ancient Greek Philosopher"},
  {i:"🌸",t:'"Love is composed of a single soul inhabiting two bodies."',a:"Aristotle",r:"Ancient Greek Philosopher"},
  {i:"💌",t:'"The heart that loves is always young."',a:"Greek Proverb",r:"Ancient Wisdom"},
  {i:"🙏",t:'"Trust in the Lord with all your heart and lean not on your own understanding."',a:"Proverbs 3:5",r:"Holy Bible (NIV)"},
  {i:"⭐",t:'"True love stories never have endings."',a:"Richard Bach",r:"Author of Jonathan Livingston Seagull"},
  {i:"✝️",t:'"For I know the plans I have for you — plans to prosper you and not to harm you, plans to give you hope and a future."',a:"Jeremiah 29:11",r:"Holy Bible (NIV)"},
  {i:"🌹",t:'"Love is the only force capable of transforming an enemy into a friend."',a:"Martin Luther King Jr.",r:"Civil Rights Leader"},
  {i:"💕",t:'"A loving heart is the beginning of all knowledge."',a:"Thomas Carlyle",r:"Historian & Philosopher"},
  {i:"🕊️",t:'"Grow old with me. The best is yet to be."',a:"Robert Browning",r:"Victorian Poet"},
  {i:"🌸",t:'"Love is a canvas furnished by nature and embroidered by imagination."',a:"Voltaire",r:"French Philosopher"},
  {i:"💌",t:'"When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible."',a:"Nora Ephron",r:"Author & Screenwriter"},
  {i:"⭐",t:'"We are most alive when we are in love."',a:"John Updike",r:"Novelist & Poet"},
  {i:"🔥",t:'"The best love is the kind that awakens the soul and makes us reach for more."',a:"Nicholas Sparks",r:"Author of The Notebook"},
  {i:"✝️",t:'"Love one another as I have loved you."',a:"John 15:12",r:"Holy Bible (NIV)"},
  {i:"🌹",t:'"The greatest thing you will ever learn is just to love, and be loved in return."',a:"Eden Ahbez",r:"Songwriter"},
  {i:"💕",t:'"Love is an act of endless forgiveness, a tender look which becomes a habit."',a:"Peter Ustinov",r:"Actor & Author"},
  {i:"🕊️",t:'"You had me at hello."',a:"Jerry Maguire",r:"Film (1996)"},
  {i:"🌸",t:'"Love is not something you find. Love is something that finds you."',a:"Loretta Young",r:"Actress"},
  {i:"🙏",t:'"May your love be as endless as the grace of God that brought you together."',a:"Young Love",r:"Where Faith Meets Forever"},
  {i:"⭐",t:'"And now these three remain: faith, hope and love. But the greatest of these is love."',a:"1 Corinthians 13:13",r:"Holy Bible (NIV)"},
  {i:"🔥",t:'"What the world needs now is love, sweet love."',a:"Jackie DeShannon",r:"Singer-Songwriter"},
  {i:"💌",t:'"A man who finds a wife finds a good thing and obtains favor from the Lord."',a:"Proverbs 18:22",r:"Holy Bible (NIV)"},
  {i:"🌹",t:'"Every love story is beautiful, but ours will be my favourite."',a:"Unknown",r:"Classic Love Saying"},
];
let qIdx=0, qTimer;
function setQ(idx, anim=true) {
  const q=quotes[idx];
  const doIt = () => {
    document.getElementById('qi').textContent=q.i;
    document.getElementById('qt').textContent=q.t;
    document.getElementById('qa').innerHTML=q.a+(q.r?` <span>· ${q.r}</span>`:'');
    renderQDots();
  };
  if (anim) {
    ['qi','qt','qa'].forEach(id => { document.getElementById(id).style.opacity='0'; });
    setTimeout(() => { doIt(); ['qi','qt','qa'].forEach(id => { const el=document.getElementById(id); el.style.transition='opacity .4s'; el.style.opacity='1'; }); }, 200);
  } else doIt();
}
function renderQDots() {
  document.getElementById('qdots').innerHTML = quotes.map((_,i) =>
    `<button class="qdot ${i===qIdx?'on':''}" onclick="goQ(${i})" aria-label="Quote ${i+1}"></button>`).join('');
}
function goQ(i){qIdx=i;setQ(i);clearInterval(qTimer);qTimer=setInterval(nQ,6000)}
function nQ(){qIdx=(qIdx+1)%quotes.length;setQ(qIdx)}
function pQ(){qIdx=(qIdx-1+quotes.length)%quotes.length;setQ(qIdx)}
(function(){for(let i=quotes.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[quotes[i],quotes[j]]=[quotes[j],quotes[i]];}})();
setQ(0,false);
qTimer=setInterval(nQ,6000);

// ─── COUNTDOWN ───────────────────────────────────────────────────
function tick() {
  const n=new Date();
  document.querySelectorAll('[id="cd-h"]').forEach(el=>{el.textContent=String(23-n.getHours()).padStart(2,'0');});
  document.querySelectorAll('[id="cd-m"]').forEach(el=>{el.textContent=String(59-n.getMinutes()).padStart(2,'0');});
  document.querySelectorAll('[id="cd-s"]').forEach(el=>{el.textContent=String(59-n.getSeconds()).padStart(2,'0');});
}
tick(); setInterval(tick,1000);


// ─── PROFILE FORM ──────────────────────────────────────────────
let currentStep = 1;
let selectedPlan = 'prem';
let cameraStream = null;
let capturedPhotoData = null;
let capturedIdData = null;
let idCameraStream = null;
let countdownTimer = null;

function goStep(n) {
  const maxSteps = 4;
  for (let i = 1; i <= maxSteps; i++) {
    const stepEl = document.getElementById('profile-step-'+i);
    const progEl = document.getElementById('prog-'+i);
    if (stepEl) stepEl.classList.remove('active');
    if (progEl) { progEl.classList.remove('active','done'); }
  }
  for (let i = 1; i < n; i++) {
    const progEl = document.getElementById('prog-'+i);
    if (progEl) progEl.classList.add('done');
  }
  currentStep = n;
  const stepEl = document.getElementById('profile-step-'+n);
  const progEl = document.getElementById('prog-'+n);
  if (stepEl) stepEl.classList.add('active');
  if (progEl) progEl.classList.add('active');
  window.scrollTo(0,0);
}

function showErr(id, show) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('show', show);
}
function setValid(id, v, e) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('valid', v && !e);
  el.classList.toggle('error', !!e);
}

function validateStep1() {
  let ok = true;
  const fname  = document.getElementById('inp-fname').value.trim();
  const lname  = document.getElementById('inp-lname').value.trim();
  const age    = parseInt(document.getElementById('inp-age').value);
  const gender = document.getElementById('inp-gender').value;
  const email  = document.getElementById('inp-email').value.trim();
  const email2 = document.getElementById('inp-email2').value.trim();
  const pass   = document.getElementById('inp-pass').value;
  const pass2  = document.getElementById('inp-pass2').value;
  const cname  = document.getElementById('inp-cname').value.trim();
  const cardnum= document.getElementById('inp-cardnum').value.replace(/\s/g,'');
  const expiry = document.getElementById('inp-expiry').value.trim();
  const cvv    = document.getElementById('inp-cvv').value.trim();

  const e1=!fname;       showErr('err-fname',e1);   setValid('inp-fname',!e1,e1);   if(e1)ok=false;
  const e2=!lname;       showErr('err-lname',e2);   setValid('inp-lname',!e2,e2);   if(e2)ok=false;
  const e3=isNaN(age)||age<18||age>99; showErr('err-age',e3); setValid('inp-age',!e3,e3); if(e3)ok=false;
  const e4=!gender;      showErr('err-gender',e4);  setValid('inp-gender',!e4,e4);  if(e4)ok=false;
  const re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const e5=!re.test(email); showErr('err-email',e5); setValid('inp-email',!e5,e5); if(e5)ok=false;
  const e6=email!==email2; showErr('err-email2',e6); setValid('inp-email2',!e6,e6); if(e6)ok=false;
  const e7=pass.length<8; showErr('err-pass',e7);   setValid('inp-pass',!e7,e7);   if(e7)ok=false;
  const e8=pass!==pass2;  showErr('err-pass2',e8);  setValid('inp-pass2',!e8,e8);  if(e8)ok=false;
  const e9=!cname;       showErr('err-cname',e9);   setValid('inp-cname',!e9,e9);  if(e9)ok=false;
  const e10=cardnum.length<15||!/^\d+$/.test(cardnum); showErr('err-cardnum',e10); setValid('inp-cardnum',!e10,e10); if(e10)ok=false;
  const exRe=/^(0[1-9]|1[0-2])\s?\/\s?\d{2}$/;
  const e11=!exRe.test(expiry); showErr('err-expiry',e11); setValid('inp-expiry',!e11,e11); if(e11)ok=false;
  const e12=cvv.length<3; showErr('err-cvv',e12);   setValid('inp-cvv',!e12,e12);  if(e12)ok=false;
  if(!e3&&!isNaN(age)) document.getElementById('age-warn').classList.toggle('show',age>=40);
  if(ok) goStep(2);
}

function validateStep2() {
  let ok = true;
  const city  = document.getElementById('inp-city').value.trim();
  const denom = document.getElementById('inp-denom').value;
  const intent= document.getElementById('inp-intent').value;
  const bio   = document.getElementById('inp-bio').value.trim();
  const e1=!city;   showErr('err-city',e1);   setValid('inp-city',!e1,e1);   if(e1)ok=false;
  const e2=!denom;  showErr('err-denom',e2);  setValid('inp-denom',!e2,e2);  if(e2)ok=false;
  const e3=!intent; showErr('err-intent',e3); setValid('inp-intent',!e3,e3); if(e3)ok=false;
  const e4=bio.length<50; showErr('err-bio',e4); setValid('inp-bio',!e4,e4); if(e4)ok=false;
  if(ok) goStep(3);
}

// ── CAMERA ────────────────────────────────────────────────────
async function startCamera() {
  const errEl = document.getElementById('cam-error');
  errEl.classList.remove('show');
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode:'user', width:{ideal:640}, height:{ideal:640} }
    });
    const video = document.getElementById('verify-video');
    video.srcObject = cameraStream;
    video.style.display = 'block';
    document.getElementById('cam-placeholder').style.display = 'none';
    document.getElementById('cam-overlay').style.display = 'block';
    document.getElementById('cam-ring').style.display = 'block';
    document.getElementById('cam-actions-start').style.display = 'none';
    document.getElementById('cam-actions-live').style.display = 'flex';
    document.getElementById('verify-tips').style.display = 'none';
    showToast('📷 Camera live — position your face in the circle');
  } catch(err) {
    errEl.classList.add('show');
    console.error('Camera error:', err);
  }
}

function startCountdown() {
  const cd = document.getElementById('cam-countdown');
  const btn = document.getElementById('btn-take');
  btn.disabled = true;
  cd.style.display = 'block';
  let count = 3;
  cd.textContent = count;
  countdownTimer = setInterval(() => {
    count--;
    if (count > 0) {
      cd.textContent = count;
    } else {
      clearInterval(countdownTimer);
      cd.style.display = 'none';
      btn.disabled = false;
      capturePhoto();
    }
  }, 1000);
}

function capturePhoto() {
  const video  = document.getElementById('verify-video');
  const canvas = document.getElementById('verify-canvas');
  const ctx    = canvas.getContext('2d');

  // Square crop from centre — face area only
  const vw = video.videoWidth  || 640;
  const vh = video.videoHeight || 640;
  const size = Math.min(vw, vh);
  const sx = (vw - size) / 2;
  const sy = (vh - size) / 2;

  canvas.width  = 400;
  canvas.height = 400;

  // Mirror horizontally (selfie feel)
  ctx.translate(400, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, sx, sy, size, size, 0, 0, 400, 400);
  ctx.setTransform(1,0,0,1,0,0);

  // Clip to circle
  const offscreen = document.createElement('canvas');
  offscreen.width = offscreen.height = 400;
  const octx = offscreen.getContext('2d');
  octx.beginPath();
  octx.arc(200, 200, 200, 0, Math.PI*2);
  octx.clip();
  octx.drawImage(canvas, 0, 0);

  capturedPhotoData = offscreen.toDataURL('image/jpeg', 0.88);

  document.getElementById('preview-img').src = capturedPhotoData;
  document.getElementById('photo-preview-wrap').style.display = 'block';
  document.getElementById('cam-actions-live').style.display = 'none';
  document.getElementById('cam-actions-preview').style.display = 'flex';
  document.getElementById('camera-container').style.boxShadow = '0 0 0 6px rgba(76,175,80,.3), 0 0 30px rgba(76,175,80,.2)';
  document.getElementById('camera-container').style.borderColor = '#4CAF50';
}

function retakePhoto() {
  capturedPhotoData = null;
  document.getElementById('photo-preview-wrap').style.display = 'none';
  document.getElementById('cam-actions-preview').style.display = 'none';
  document.getElementById('cam-actions-live').style.display = 'flex';
  document.getElementById('camera-container').style.boxShadow = '';
  document.getElementById('camera-container').style.borderColor = '';
  showToast('🔄 Take your time — get the perfect shot!');
}

function backFromVerify() {
  stopCamera();
  if (idCameraStream) { idCameraStream.getTracks().forEach(t=>t.stop()); idCameraStream=null; }
  // Reset phases
  document.getElementById('phase-selfie').classList.add('active');
  document.getElementById('phase-id').classList.remove('active');
  document.getElementById('phase-done').classList.remove('active');
  document.getElementById('vp-selfie').classList.add('active');
  document.getElementById('vp-selfie').classList.remove('complete');
  document.getElementById('vp-id').classList.remove('active','complete');
  goStep(2);
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
}


function confirmSelfie() {
  if (!capturedPhotoData) { showToast('Please take your selfie first'); return; }
  stopCamera();
  // Move to phase 2 — ID
  document.getElementById('phase-selfie').classList.remove('active');
  document.getElementById('phase-id').classList.add('active');
  document.getElementById('vp-selfie').classList.remove('active');
  document.getElementById('vp-selfie').classList.add('complete');
  document.getElementById('vp-id').classList.add('active');
  document.getElementById('verify-status').textContent = 'Selfie ✅ — now capture your ID';
  showToast('📷 Selfie saved! Now take a photo of your ID for verification.');
  window.scrollTo(0,0);
}

// ── ID CAMERA ──────────────────────────────────────────────────
async function startIdCamera() {
  const errEl = document.getElementById('id-cam-error');
  errEl.classList.remove('show');
  try {
    idCameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode:'environment', width:{ideal:1280}, height:{ideal:720} }
    });
    const video = document.getElementById('id-video');
    video.srcObject = idCameraStream;
    video.style.display = 'block';
    document.getElementById('id-placeholder').style.display = 'none';
    document.getElementById('id-overlay').style.display = 'block';
    document.getElementById('id-corners').style.display = 'block';
    document.getElementById('id-bottom-corners').style.display = 'block';
    document.getElementById('id-cam-label').style.display = 'block';
    document.getElementById('id-actions-start').style.display = 'none';
    document.getElementById('id-actions-live').style.display = 'flex';
    showToast('🪪 Camera ready — position your ID flat and clear');
  } catch(err) {
    // Fallback to front camera if rear not available
    try {
      idCameraStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode:'user', width:{ideal:1280}, height:{ideal:720} }
      });
      const video = document.getElementById('id-video');
      video.srcObject = idCameraStream;
      video.style.display = 'block';
      document.getElementById('id-placeholder').style.display = 'none';
      document.getElementById('id-overlay').style.display = 'block';
      document.getElementById('id-corners').style.display = 'block';
      document.getElementById('id-bottom-corners').style.display = 'block';
      document.getElementById('id-cam-label').style.display = 'block';
      document.getElementById('id-actions-start').style.display = 'none';
      document.getElementById('id-actions-live').style.display = 'flex';
    } catch(err2) {
      errEl.classList.add('show');
    }
  }
}

function captureIdPhoto() {
  const video  = document.getElementById('id-video');
  const canvas = document.getElementById('id-canvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = video.videoWidth  || 1280;
  canvas.height = video.videoHeight || 720;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  capturedIdData = canvas.toDataURL('image/jpeg', 0.85);

  // Stop camera
  if (idCameraStream) { idCameraStream.getTracks().forEach(t=>t.stop()); idCameraStream=null; }

  document.getElementById('id-preview-img').src = capturedIdData;
  document.getElementById('id-preview-wrap').style.display = 'block';
  document.getElementById('id-camera-container').style.display = 'none';
  document.getElementById('id-actions-live').style.display = 'none';
  document.getElementById('id-actions-preview').style.display = 'flex';
  document.getElementById('id-camera-container').style.borderColor = '#4CAF50';
  showToast('🪪 ID captured! Review and confirm below.');
}

function retakeId() {
  capturedIdData = null;
  document.getElementById('id-preview-wrap').style.display = 'none';
  document.getElementById('id-camera-container').style.display = '';
  document.getElementById('id-camera-container').style.borderColor = '';
  document.getElementById('id-actions-preview').style.display = 'none';
  document.getElementById('id-actions-start').style.display = 'flex';
  document.getElementById('id-placeholder').style.display = '';
  document.getElementById('id-video').style.display = 'none';
  showToast('🔄 Ready to retake your ID photo');
}

function confirmVerification() {
  if (!capturedPhotoData) { showToast('Please complete your selfie first'); return; }
  if (!capturedIdData) { showToast('Please capture your ID photo'); return; }

  // Stop any active camera
  stopCamera();
  if (idCameraStream) { idCameraStream.getTracks().forEach(t=>t.stop()); idCameraStream=null; }

  // Show completed state
  document.getElementById('phase-id').classList.remove('active');
  document.getElementById('phase-done').classList.add('active');
  document.getElementById('vp-id').classList.remove('active');
  document.getElementById('vp-id').classList.add('complete');

  // Gather user info
  const firstName = document.getElementById('inp-fname').value.trim() || 'New Member';
  const age       = parseInt(document.getElementById('inp-age').value) || 25;
  const bio       = document.getElementById('inp-bio').value.trim();
  const denom     = document.getElementById('inp-denom').value || 'Christian';
  const city      = document.getElementById('inp-city').value.trim() || '';
  const gender    = document.getElementById('inp-gender').value || '';
  const role      = document.getElementById('inp-intent').value || 'Young Love Member';

  // Inject SELFIE (not ID) into swipe profiles
  const newProfile = {
    name: firstName, age, city, denom, role,
    flames:'🔥🔥🔥🔥', bg:'linear-gradient(145deg,#C41E5A,#F77F00)',
    emoji:'😊', photo: capturedPhotoData, verified: true,
    bio: bio.length > 120 ? bio.substring(0,117)+'...' : bio
  };
  swProfiles.unshift(newProfile);

  // Update home phone mockup with selfie only
  homeProfiles.unshift({
    name: firstName+', '+age+' 🔥🔥🔥🔥',
    meta: denom+' · '+city+(role?' · '+role:''),
    bg: 'linear-gradient(160deg,#C41E5A,#F77F00)',
    photo: capturedPhotoData
  });
  updateHomeCard();

  // capturedIdData is stored in memory for security only — never displayed
  // In production this would be sent to a secure server endpoint

  document.getElementById('verify-status').textContent = '✅ Fully Verified!';
  showToast('💕 Verified! Selfie is your profile photo. ID secured privately.');

  // Auto-advance to step 4 after a short delay
  setTimeout(()=>goStep(4), 1500);
}
function updateHomeCard() {
  const p = homeProfiles[0];
  if (!p) return;
  const avatarEl = document.getElementById('home-avatar');
  if (p.photo) {
    avatarEl.innerHTML = '<img src="'+p.photo+'" style="width:100%;height:100%;object-fit:cover;border-radius:0">';
  } else {
    avatarEl.textContent = p.emoji || '😊';
  }
  if (avatarEl.parentElement) avatarEl.parentElement.style.background = p.bg;
  const nameEl = document.getElementById('home-name');
  const metaEl = document.getElementById('home-meta');
  if (nameEl) nameEl.textContent = p.name;
  if (metaEl) metaEl.textContent = p.meta;
}

function validateStep4() {
  let ok = true;
  const terms = document.getElementById('inp-terms').checked;
  const errTerms = document.getElementById('err-terms');
  if (!terms) { errTerms.style.display='flex'; ok=false; } else { errTerms.style.display='none'; }
  if (!selectedPlan) { document.getElementById('err-plan').style.display='block'; ok=false; }
  else { document.getElementById('err-plan').style.display='none'; }
  if (ok) {
    document.getElementById('profile-step-4').classList.remove('active');
    for(let i=1;i<=4;i++){const p=document.getElementById('prog-'+i);if(p){p.classList.remove('active');p.classList.add('done');}}
    document.getElementById('step-progress').style.opacity='.5';
    document.getElementById('profile-success').classList.add('show');
    const names={plus:'Plus ($15/mo)',prem:'Premium ($25/mo)',vip:'VIP Elite ($35/mo)'};
    showToast('🎉 Welcome! Trial started · Plan: '+(names[selectedPlan]||selectedPlan));
    window.scrollTo(0,0);
  }
}

function selectFullPlan(plan) {
  selectedPlan = plan;
  ['plus','prem','vip'].forEach(p=>{
    const el=document.getElementById('pf-'+p);
    if(el) el.classList.toggle('active-plan-full', p===plan);
  });
}

function formatCard(el) {
  let v = el.value.replace(/\D/g,'').substring(0,16);
  el.value = v.replace(/(\d{4})(?=\d)/g,'$1 ');
}
function formatExpiry(el) {
  let v = el.value.replace(/\D/g,'').substring(0,4);
  if(v.length>=2) v=v.substring(0,2)+' / '+v.substring(2);
  el.value=v;
}

document.addEventListener('DOMContentLoaded', () => {
  const bioEl = document.getElementById('inp-bio');
  if(bioEl){ bioEl.addEventListener('input',()=>{
    const c=bioEl.value.length;
    const ct=document.getElementById('bio-counter');
    if(ct) ct.textContent=c+' / 500 characters';
    if(c>=50) setValid('inp-bio',true,false);
  });}
  const ageEl = document.getElementById('inp-age');
  if(ageEl){ ageEl.addEventListener('input',()=>{
    const age=parseInt(ageEl.value);
    const warn=document.getElementById('age-warn');
    if(warn) warn.classList.toggle('show',!isNaN(age)&&age>=40);
  });}
});

// Stop camera if user navigates away from step 3
const origShowPage = showPage;
window.showPage = function(id) {
  if(cameraStream) stopCamera();
  origShowPage(id);
};
// ══════════════════════════════════════════════════════════════════
// APP STATE
// ══════════════════════════════════════════════════════════════════
const AppState = {
  profileComplete: false,
  currentUser: { name:'You', photo: null },
  likedContacts: [],
  activeContactId: null,
  chats: {},
  completedMilestones: new Set(),
  milestoneCount: 0,
  vcStream: null,
  vcTimer: null,
  vcSeconds: 0,
  mediaRecorder: null,
  isRecording: false,
  audioChunks: [],
  recordingInterval: null,
};

// ── MILESTONE CONFIG ───────────────────────────────────────────
const MILESTONES = [
  { id:'profile',  icon:'🌱', name:'Planted a Seed',     prize:'+1 Free Rose Token · "Journey Begun" Badge',         quote:'"Every great love story begins with one brave step. Yours starts now. 💕"' },
  { id:'verified', icon:'✅', name:'Revealed & Real',     prize:'Permanent 💕 Badge · +15% Algorithm Visibility',      quote:'"You showed up authentically. That\'s the most beautiful thing of all. ✨"' },
  { id:'match',    icon:'💕', name:'The First Spark',     prize:'Petal Burst Animation · 1 Free Blessing Token',       quote:'"Someone out there said yes to you today. Your heart is truly seen. ❤️"' },
  { id:'convo',    icon:'💬', name:'Words of Life',       prize:'Conversation Depth Badge · GIF Reactions Unlock',     quote:'"Real connection is built word by word. You\'re doing beautifully. 🙏"' },
  { id:'voice',    icon:'🎙️', name:'Voice Heard',         prize:'+10% Token Discount (7-day) · Milestone Badge',       quote:'"Your voice carries warmth that words alone cannot. 🎙️"' },
  { id:'video',    icon:'📹', name:'Face to Face',        prize:'+1 Free Boost Token · "Connection Deepens" Logged',   quote:'"You looked into someone\'s eyes and chose courage. That is love in action. 💕"' },
  { id:'heart',    icon:'🌹', name:'Heart Opened',        prize:'"Open Heart" Profile Frame · 7-Day Rose Border',      quote:'"Vulnerability is the birthplace of love. Your openness is your greatest gift. ✝️"' },
  { id:'person',   icon:'👑', name:'Your Person',         prize:'Love Story Card · 1 Month Free Subscription',         quote:'"Love always wins. And today — gloriously — it won for you. 🎉"' },
];

const MOTIVATIONS = [
  '💕 Keep going — your person is closer than you think!',
  '✝️ "He makes everything beautiful in its time." — Keep faith.',
  '🌱 Every great love story was once just a brave first step.',
  '🔥 Your faith and your heart are your greatest strengths.',
  '💌 Someone out there is praying for someone just like you.',
  '🌹 Patience, faith, and love — the most powerful combination.',
  '👑 You deserve a love that reflects God\'s grace. Don\'t settle.',
  '✨ Your authenticity is your superpower. Stay true to yourself.',
];

function unlockMilestone(id) {
  if (AppState.completedMilestones.has(id)) return;
  AppState.completedMilestones.add(id);
  AppState.milestoneCount++;
  const m = MILESTONES.find(x=>x.id===id);
  if (!m) return;
  const idx = MILESTONES.indexOf(m);
  // Update journey dots — mark all up to idx as done, idx as now (glowing)
  document.querySelectorAll('.jstep').forEach((s,i)=>{
    s.classList.remove('done','now');
    if (i < idx)  s.classList.add('done');
    if (i === idx) s.classList.add('now');
  });
  // Also update the jd-cards
  document.querySelectorAll('.jd-card').forEach((c,i)=>{
    c.classList.toggle('active-card', i === idx);
  });
  // Update progress bar & label
  updateJourneyProgress();
  // Update message box
  const msgEl = document.getElementById('j-msg');
  if (msgEl) msgEl.textContent = jMsgs[idx] || '';
  // Show reward popup after short delay
  setTimeout(()=>showReward(m), 600);
  // Motivational message
  setTimeout(()=>showMotivation(), 2200);
}

function updateJourneyProgress() {
  const count = AppState.completedMilestones.size;
  const pct   = (count / 8) * 100;
  const bar   = document.getElementById('journey-bar');
  const lbl   = document.getElementById('journey-bar-label');
  if (bar) { bar.style.width = pct + '%'; }
  if (lbl) {
    lbl.textContent = count + ' of 8 milestones completed';
    if (count === 8) lbl.textContent = '🎉 All 8 milestones complete — Love Always Wins! 💕';
  }
}

function showReward(m) {
  document.getElementById('reward-icon').textContent = m.icon;
  document.getElementById('reward-name').textContent = m.name;
  document.getElementById('reward-prize').textContent = '🎁 ' + m.prize;
  document.getElementById('reward-quote').textContent = m.quote;
  document.getElementById('reward-overlay').classList.add('show');
}
function closeReward() {
  document.getElementById('reward-overlay').classList.remove('show');
}

let motTimer;
function showMotivation(msg) {
  const t = document.getElementById('motivation-toast');
  if (!t) return;
  t.textContent = msg || MOTIVATIONS[Math.floor(Math.random()*MOTIVATIONS.length)];
  t.classList.add('show');
  clearTimeout(motTimer);
  motTimer = setTimeout(()=>t.classList.remove('show'), 4000);
}

// ── CHAT ENGINE ────────────────────────────────────────────────
function openChat() {
  if (!AppState.profileComplete) {
    showToast('💕 Please complete your profile first to access Messages!');
    showPage('profile');
    return;
  }
  showPage('chat');
  renderContactList();
}

function addLikedContact(prof) {
  const existing = AppState.likedContacts.find(c=>c.name===prof.name&&c.age===prof.age);
  if (existing) return;
  const contact = {
    id: 'u_'+Date.now()+'_'+Math.random().toString(36).substr(2,5),
    name: prof.name,
    age: prof.age,
    photo: prof.photo || null,
    emoji: prof.emoji || '😊',
    denom: prof.denom || '',
    city: prof.city || '',
    verified: prof.verified !== false,
    lastMsg: '',
    lastTime: '',
    unread: 0,
    online: Math.random() > 0.4,
  };
  AppState.likedContacts.unshift(contact);
  AppState.chats[contact.id] = [];
  // Add welcome message from matched user
  const welcomes = [
    "Hi there! I saw you liked my profile 😊 Would love to connect!",
    "Hey! This is exciting 💕 Tell me about yourself!",
    "Oh wow, what a blessing! Looking forward to getting to know you ✝️",
    "Hello! I'm so glad we matched. How's your day going? 🌸",
  ];
  const welcome = { id:'m'+Date.now(), from:'them', text: welcomes[Math.floor(Math.random()*welcomes.length)], time: nowTime(), type:'text' };
  AppState.chats[contact.id].push(welcome);
  contact.lastMsg = welcome.text;
  contact.lastTime = welcome.time;
  contact.unread = 1;
  // Send email notification for new match message
  sendEmailNotification(contact.name + (contact.age ? ', ' + contact.age : ''), welcome.text);
  // Show chat nav
  document.getElementById('chat-nav-tab').style.display='';
  const mob = document.getElementById('chat-nav-mob');
  if (mob) mob.style.display='';
  updateChatBadge();
  showToast('💕 ' + contact.name + ' saved to your Messages! Say hello 👋');
  // Unlock match milestone
  unlockMilestone('match');
  renderContactList();
}

function renderContactList() {
  const list = document.getElementById('contact-list');
  if (!list) return;
  const query = (document.getElementById('chat-search')?.value||'').toLowerCase();
  const filtered = AppState.likedContacts.filter(c=>c.name.toLowerCase().includes(query));
  if (filtered.length === 0) {
    list.innerHTML = '<div class="chat-empty"><div class="chat-empty-icon">💕</div><p>'+(AppState.likedContacts.length===0?'Like or Super Like profiles to start conversations. Your matches will appear here.':'No contacts match your search.')+'</p></div>';
    return;
  }
  list.innerHTML = filtered.map(c=>`
    <div class="contact-item ${c.id===AppState.activeContactId?'active':''}" onclick="openContactChat('${c.id}')">
      <div class="contact-avatar">${c.photo?`<img src="${c.photo}" alt="${c.name}">`:(c.emoji||'💕')}</div>
      <div class="contact-info">
        <div class="contact-name">${c.name}${c.age?', '+c.age:''} ${c.verified?'<span style="color:var(--rose);font-size:11px">💕</span>':''}</div>
        <div class="contact-preview">${c.lastMsg?escHtml(c.lastMsg.substring(0,40))+(c.lastMsg.length>40?'...':''):'Say hello! 👋'}</div>
      </div>
      <div class="contact-meta">
        <div class="contact-time">${c.lastTime||''}</div>
        ${c.unread>0?`<div class="contact-unread">${c.unread}</div>`:''}
        ${c.online?'<div style="width:8px;height:8px;border-radius:50%;background:#4CAF50;margin-top:2px"></div>':''}
      </div>
    </div>`).join('');
}

function filterContacts(q) { renderContactList(); }

function openContactChat(id) {
  const contact = AppState.likedContacts.find(c=>c.id===id);
  if (!contact) return;
  AppState.activeContactId = id;
  contact.unread = 0;
  updateChatBadge();
  renderContactList();
  // Show active chat
  document.getElementById('chat-no-select').style.display = 'none';
  const ac = document.getElementById('active-chat');
  ac.style.display = 'flex';
  // Set header
  const avEl = document.getElementById('ch-avatar');
  avEl.innerHTML = contact.photo ? `<img src="${contact.photo}" alt="${contact.name}">` : (contact.emoji||'💕');
  document.getElementById('ch-name').textContent = contact.name + (contact.age?', '+contact.age:'');
  document.getElementById('ch-status').textContent = (contact.verified?'💕 Verified · ':'') + (contact.online?'🟢 Online':'⚪ Recently Active') + ' · ' + contact.denom;
  document.getElementById('vc-name').textContent = contact.name;
  const vcAv = document.getElementById('vc-avatar');
  vcAv.innerHTML = contact.photo ? `<img src="${contact.photo}" alt="${contact.name}">` : (contact.emoji||'💕');
  renderMessages(id);
  // Mobile: hide sidebar
  if (window.innerWidth <= 700) {
    document.getElementById('chat-sidebar').classList.add('hidden');
  }
}

function closeChatMobile() {
  document.getElementById('chat-sidebar').classList.remove('hidden');
  document.getElementById('active-chat').style.display = 'none';
  document.getElementById('chat-no-select').style.display = 'flex';
  AppState.activeContactId = null;
}

function renderMessages(contactId) {
  const msgs = AppState.chats[contactId] || [];
  const container = document.getElementById('chat-messages');
  const contact = AppState.likedContacts.find(c=>c.id===contactId);
  if (!container || !contact) return;
  if (msgs.length === 0) {
    container.innerHTML = '<div class="msg-date-divider">Today</div>';
    return;
  }
  container.innerHTML = '<div class="msg-date-divider">Today</div>' + msgs.map(m => {
    if (m.type === 'voice') {
      const bars = Array.from({length:18},(_,i)=>`<div class="wv-bar" style="height:${8+Math.sin(i*0.7)*8+Math.random()*6}px"></div>`).join('');
      return `<div class="msg-row ${m.from==='me'?'sent':'received'}">
        ${m.from!=='me'?`<div class="msg-avatar-sm">${contact.photo?`<img src="${contact.photo}">`:(contact.emoji||'💕')}</div>`:''}
        <div class="msg-bubble">
          <div class="voice-bubble">
            <button class="voice-play" onclick="playVoice('${m.id}','${m.url||''}')">▶</button>
            <div class="voice-waveform" id="wv_${m.id}">${bars}</div>
            <span class="voice-dur">${m.dur||'0:10'}</span>
          </div>
          <div class="msg-time">${m.time}</div>
        </div>
      </div>`;
    }
    return `<div class="msg-row ${m.from==='me'?'sent':'received'}">
      ${m.from!=='me'?`<div class="msg-avatar-sm">${contact.photo?`<img src="${contact.photo}">`:(contact.emoji||'💕')}</div>`:''}
      <div class="msg-bubble">${escHtml(m.text)}<div class="msg-time">${m.time}${m.from==='me'?' ✓✓':''}</div></div>
    </div>`;
  }).join('');
  container.scrollTop = container.scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text || !AppState.activeContactId) return;
  const contact = AppState.likedContacts.find(c=>c.id===AppState.activeContactId);
  if (!contact) return;
  const msg = { id:'m'+Date.now(), from:'me', text, time: nowTime(), type:'text' };
  AppState.chats[AppState.activeContactId].push(msg);
  contact.lastMsg = text; contact.lastTime = msg.time;
  input.value = ''; input.style.height = 'auto';
  renderMessages(AppState.activeContactId);
  renderContactList();
  // Check convo milestone
  const myMsgs = AppState.chats[AppState.activeContactId].filter(m=>m.from==='me').length;
  if (myMsgs >= 5) unlockMilestone('convo');
  // Auto-reply after short delay
  const replies = [
    "That's so beautiful! Tell me more 💕",
    "I love how you see things ✝️ God is good!",
    "Haha yes! I can totally relate to that 😊",
    "That's one of my favourite things too 🌸",
    "Wow, you have such a wonderful heart 🙏",
    "I've been thinking about that scripture too!",
    "You seem like such a genuine person 💫",
    "Can't wait to hear more about your faith journey!",
  ];
  setTimeout(()=>{
    if(AppState.activeContactId!==contact.id) return;
    const reply={id:'m'+Date.now(),from:'them',text:replies[Math.floor(Math.random()*replies.length)],time:nowTime(),type:'text'};
    AppState.chats[contact.id].push(reply);
    contact.lastMsg=reply.text; contact.lastTime=reply.time;
    renderMessages(AppState.activeContactId);
    renderContactList();
    // Send email notification for incoming message
    sendEmailNotification(contact.name + (contact.age ? ', ' + contact.age : ''), reply.text);
    // Heart opened milestone after several exchanges
    const total = AppState.chats[contact.id].length;
    if(total>=10) unlockMilestone('heart');
  }, 1200 + Math.random()*1800);
}

function chatKeyDown(e) {
  if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendChatMessage();}
}
function autoResize(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,120)+'px';}

// ── VOICE NOTES ────────────────────────────────────────────────
async function toggleVoiceNote() {
  if (AppState.isRecording) { stopVoiceNote(); return; }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({audio:true});
    AppState.audioChunks = [];
    AppState.mediaRecorder = new MediaRecorder(stream);
    AppState.mediaRecorder.ondataavailable = e=>AppState.audioChunks.push(e.data);
    AppState.mediaRecorder.onstop = ()=>{
      const blob = new Blob(AppState.audioChunks,{type:'audio/webm'});
      const url  = URL.createObjectURL(blob);
      sendVoiceMsg(url, AppState.vcRecordSecs||5);
      stream.getTracks().forEach(t=>t.stop());
    };
    AppState.mediaRecorder.start();
    AppState.isRecording = true;
    AppState.vcRecordSecs = 0;
    document.getElementById('voice-btn').classList.add('recording');
    document.getElementById('voice-btn').title = 'Stop Recording';
    AppState.recordingInterval = setInterval(()=>{ AppState.vcRecordSecs++; if(AppState.vcRecordSecs>=180) stopVoiceNote(); },1000);
    showToast('🎙️ Recording... tap again to send');
  } catch(err) { showToast('🎙️ Microphone permission needed for voice notes'); }
}
function stopVoiceNote() {
  if(AppState.mediaRecorder) AppState.mediaRecorder.stop();
  AppState.isRecording = false;
  clearInterval(AppState.recordingInterval);
  document.getElementById('voice-btn').classList.remove('recording');
  document.getElementById('voice-btn').title = 'Voice Note';
}
function sendVoiceMsg(url, secs) {
  if(!AppState.activeContactId) return;
  const contact = AppState.likedContacts.find(c=>c.id===AppState.activeContactId);
  if(!contact) return;
  const mins = Math.floor(secs/60), s = secs%60;
  const dur = mins+':'+(s<10?'0':'')+s;
  const msg={id:'m'+Date.now(),from:'me',type:'voice',url,dur,time:nowTime()};
  AppState.chats[AppState.activeContactId].push(msg);
  contact.lastMsg='🎙️ Voice note · '+dur; contact.lastTime=msg.time;
  renderMessages(AppState.activeContactId); renderContactList();
  unlockMilestone('voice');
  showMotivation('🎙️ '+MILESTONES[4].quote);
}
function playVoice(msgId, url) {
  if(!url) { showToast('🎙️ Voice note preview — audio playback available in the live app'); return; }
  const audio = new Audio(url);
  audio.play();
  const wv = document.getElementById('wv_'+msgId);
  if(wv) { wv.classList.add('voice-playing'); audio.onended=()=>wv.classList.remove('voice-playing'); }
}

// ── VIDEO CALL ─────────────────────────────────────────────────
async function startVideoCallWith() {
  const contact = AppState.likedContacts.find(c=>c.id===AppState.activeContactId);
  if(!contact) return;
  document.getElementById('vc-name').textContent = contact.name;
  document.getElementById('vc-sub').textContent = '🔒 Encrypted · Connecting...';
  const vcAv = document.getElementById('vc-avatar');
  vcAv.innerHTML = contact.photo?`<img src="${contact.photo}" alt="${contact.name}">`:(contact.emoji||'💕');
  document.getElementById('video-call-overlay').classList.add('active');
  AppState.vcSeconds = 0;
  try {
    AppState.vcStream = await navigator.mediaDevices.getUserMedia({video:true,audio:true});
    document.getElementById('local-video').srcObject = AppState.vcStream;
    setTimeout(()=>{
      document.getElementById('vc-sub').textContent = '🟢 Connected · Encrypted Call';
      AppState.vcTimer = setInterval(()=>{
        AppState.vcSeconds++;
        const m=Math.floor(AppState.vcSeconds/60),s=AppState.vcSeconds%60;
        const timerEl=document.getElementById('vc-timer');
        if(timerEl) timerEl.textContent=m+':'+(s<10?'0':'')+s;
        if(AppState.vcSeconds===300) unlockMilestone('video');
      },1000);
    },1500);
  } catch(err) {
    document.getElementById('vc-sub').textContent = '📵 Camera/mic permission needed';
    AppState.vcTimer = setInterval(()=>{
      AppState.vcSeconds++;
      const m=Math.floor(AppState.vcSeconds/60),s=AppState.vcSeconds%60;
      const timerEl=document.getElementById('vc-timer');
      if(timerEl) timerEl.textContent=m+':'+(s<10?'0':'')+s;
      if(AppState.vcSeconds===300) unlockMilestone('video');
    },1000);
  }
  showMotivation('📹 Face-to-face is where real connection begins! 💕');
}
function endVideoCall() {
  document.getElementById('video-call-overlay').classList.remove('active');
  if(AppState.vcStream) { AppState.vcStream.getTracks().forEach(t=>t.stop()); AppState.vcStream=null; }
  clearInterval(AppState.vcTimer);
  if(AppState.vcSeconds>=300) {
    unlockMilestone('video');
    showToast('📹 5-minute video call complete! +1 Free Boost Token earned! 🎉');
  }
  AppState.vcSeconds=0;
}
function toggleMute() { const b=document.getElementById('vc-mute'); b.classList.toggle('active'); b.textContent=b.classList.contains('active')?'🔇':'🎤'; }
function toggleCamOff() { const b=document.getElementById('vc-vid'); b.classList.toggle('active'); b.textContent=b.classList.contains('active')?'📵':'📷'; }

// ── HELPERS ────────────────────────────────────────────────────
function nowTime() {
  const d=new Date();
  return d.getHours().toString().padStart(2,'0')+':'+d.getMinutes().toString().padStart(2,'0');
}
function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/\n/g,'<br>');
}
function updateChatBadge() {
  const total = AppState.likedContacts.reduce((a,c)=>a+c.unread,0);
  const badge = document.getElementById('chat-unread-badge');
  if(badge){ badge.textContent=total; badge.style.display=total>0?'':'none'; }
}

// ── HOOK INTO SWIPE ACTIONS ────────────────────────────────────
// Override doSwipe to save liked users to chat
const _origDoSwipe = doSwipe;
window.doSwipe = function(dir) {
  if(dir==='right'||dir==='super') {
    const arena=document.getElementById('swipe-arena');
    const top=Array.from(arena.children).filter(c=>!c.id).pop();
    if(top) {
      const prof = swProfiles[swIdx % swProfiles.length];
      if(AppState.profileComplete && prof) {
        setTimeout(()=>addLikedContact(prof), 400);
      }
    }
  }
  _origDoSwipe(dir);
};
// Also hook homeSwipe
const _origHomeSwipe = homeSwipe;
window.homeSwipe = function(action) {
  if(action==='heart'||action==='star') {
    const p = homeProfiles[hIdx];
    if(AppState.profileComplete && p) {
      const prof={name:p.name.split(',')[0],age:parseInt(p.name.split(',')[1])||25,photo:p.photo||null,emoji:'😊',denom:p.meta?.split('·')[0]?.trim()||'',city:p.meta?.split('·')[1]?.trim()||'',verified:true};
      setTimeout(()=>addLikedContact(prof), 400);
    }
  }
  _origHomeSwipe(action);
};

// ── PROFILE COMPLETE HOOK ──────────────────────────────────────
// Called when user finishes step 4
const _origValidateStep4 = validateStep4;
window.validateStep4 = function() {
  _origValidateStep4();
  // Check if success was shown
  setTimeout(()=>{
    if(document.getElementById('profile-success').classList.contains('show')) {
      AppState.profileComplete = true;
      const firstName = document.getElementById('inp-fname')?.value?.trim()||'Friend';
      AppState.currentUser.name = firstName;
      AppState.currentUser.photo = capturedPhotoData;
      document.getElementById('chat-nav-tab').style.display='';
      const mob=document.getElementById('chat-nav-mob');
      if(mob) mob.style.display='';
      unlockMilestone('profile');
      unlockMilestone('verified');
      showMotivation('💕 Welcome '+firstName+'! Your profile is live. Start swiping to find your person!');
    }
  },300);
};

// ══════════════════════════════════════════════════════════════════
// DAILY DEVOTION INTERACTIVE CARDS
// ══════════════════════════════════════════════════════════════════
const DEV_DATA = {
  morning: {
    icon: "🌅", title: "Morning Blessing", headerClass: "morning",
    content: [
      {verse:"\"His mercies are new every morning; great is your faithfulness.\"",ref:"Lamentations 3:23",message:"Good morning, beloved. Here are three souls whose stories may resonate with yours today. Approach each one as a gift, not a task.",matches:[{emoji:"👩",name:"Rachel, 27",meta:"Baptist \u00b7 Nashville, TN",flames:"🔥🔥🔥🔥"},{emoji:"👨",name:"Elijah, 31",meta:"Non-Denom \u00b7 Denver, CO",flames:"🔥🔥🔥🔥🔥"},{emoji:"👩\u200d🦱",name:"Grace, 25",meta:"Methodist \u00b7 Austin, TX",flames:"🔥🔥🔥"}]},
      {verse:"\"The steadfast love of the Lord never ceases.\"",ref:"Lamentations 3:22",message:"A new day, a new chance to let love find you. Three profiles have been prayerfully selected for your morning.",matches:[{emoji:"👨",name:"Daniel, 29",meta:"Presbyterian \u00b7 Charlotte, NC",flames:"🔥🔥🔥🔥"},{emoji:"👩",name:"Abigail, 26",meta:"Pentecostal \u00b7 Atlanta, GA",flames:"🔥🔥🔥🔥🔥"},{emoji:"👨",name:"Joshua, 33",meta:"Baptist \u00b7 Houston, TX",flames:"🔥🔥🔥🔥"}]},
      {verse:"\"This is the day the Lord has made; let us rejoice and be glad in it.\"",ref:"Psalm 118:24",message:"Rise and shine! Your morning matches are waiting. Each one shares a piece of your faith story.",matches:[{emoji:"👩",name:"Naomi, 28",meta:"Episcopal \u00b7 Portland, OR",flames:"🔥🔥🔥🔥🔥"},{emoji:"👨",name:"Caleb, 30",meta:"Lutheran \u00b7 Minneapolis, MN",flames:"🔥🔥🔥"},{emoji:"👩",name:"Lydia, 24",meta:"Non-Denom \u00b7 Phoenix, AZ",flames:"🔥🔥🔥🔥"}]},
      {verse:"\"Weeping may endure for a night, but joy comes in the morning.\"",ref:"Psalm 30:5",message:"Every sunrise carries hope. Here are three new connections to explore with an open heart today.",matches:[{emoji:"👨",name:"Samuel, 35",meta:"Catholic \u00b7 Chicago, IL",flames:"🔥🔥🔥🔥"},{emoji:"👩",name:"Miriam, 27",meta:"Baptist \u00b7 Dallas, TX",flames:"🔥🔥🔥🔥🔥"},{emoji:"👨",name:"Aaron, 28",meta:"Methodist \u00b7 Seattle, WA",flames:"🔥🔥🔥"}]},
      {verse:"\"The Lord your God is with you, the Mighty Warrior who saves.\"",ref:"Zephaniah 3:17",message:"You are not walking this journey alone. Here are three people whose hearts may be calling for the same love.",matches:[{emoji:"👩",name:"Hannah, 26",meta:"Non-Denom \u00b7 San Diego, CA",flames:"🔥🔥🔥🔥"},{emoji:"👨",name:"Isaac, 32",meta:"Presbyterian \u00b7 Nashville, TN",flames:"🔥🔥🔥🔥🔥"},{emoji:"👩",name:"Ruth, 29",meta:"Baptist \u00b7 Raleigh, NC",flames:"🔥🔥🔥🔥"}]},
    ]
  },
  midday: {
    icon: "🕊️", title: "Midday Scripture", headerClass: "midday",
    content: [
      {verse:"\"Be still, and know that I am God.\"",ref:"Psalm 46:10",prayer:"Lord, in the middle of this busy day, quiet my heart. Help me trust Your timing and Your plan for my love story. Amen."},
      {verse:"\"Love is patient, love is kind. It does not envy, it does not boast, it is not proud.\"",ref:"1 Corinthians 13:4",prayer:"Father, shape my heart to love the way You love — patiently, kindly, and without condition. Amen."},
      {verse:"\"Trust in the Lord with all your heart and lean not on your own understanding.\"",ref:"Proverbs 3:5",prayer:"God, I release my need to control this journey. I trust that You are weaving something beautiful. Amen."},
      {verse:"\"Above all, love each other deeply, because love covers over a multitude of sins.\"",ref:"1 Peter 4:8",prayer:"Lord, teach me to love deeply and forgive freely. Prepare my heart for the one You have chosen for me. Amen."},
      {verse:"\"For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.\"",ref:"Jeremiah 29:11",prayer:"Father, even when the wait feels long, I hold onto Your promise. Your plans for me are good. Amen."},
      {verse:"\"He makes everything beautiful in its time.\"",ref:"Ecclesiastes 3:11",prayer:"God of perfect timing, help me wait with grace. I believe You are making my story beautiful. Amen."},
      {verse:"\"There is no fear in love. But perfect love drives out fear.\"",ref:"1 John 4:18",prayer:"Lord, remove every fear that holds me back from love. Fill me with courage to be vulnerable and real. Amen."},
      {verse:"\"Two are better than one, because they have a good return for their labor.\"",ref:"Ecclesiastes 4:9",prayer:"Father, I believe partnership is part of Your design. Bring someone who will walk this life alongside me. Amen."},
      {verse:"\"And now these three remain: faith, hope and love. But the greatest of these is love.\"",ref:"1 Corinthians 13:13",prayer:"God, anchor me in faith, sustain me with hope, and lead me to a love that reflects Your grace. Amen."},
      {verse:"\"I have found the one whom my soul loves.\"",ref:"Song of Solomon 3:4",prayer:"Lord, let this verse become my testimony. Guide my steps toward the one my soul is searching for. Amen."},
    ]
  },
  evening: {
    icon: "🌙", title: "Evening Reflection", headerClass: "evening",
    content: [
      {message:"Take a breath. Today you showed up, and that matters. Here is what your journey looks like tonight.",reflection:"Did I approach today with an open heart? Did I treat every profile as a real person with a real story?",tip:"Try sending a thoughtful first message tonight — something about their faith story, not just their photo."},
      {message:"The sun is setting, but your love story is still rising. Reflect on what today brought you.",reflection:"Was I patient today? Did I trust the process, or did I rush through profiles?",tip:"Before bed, re-read one conversation you had today. Respond with something deeper."},
      {message:"Another day closer to forever. Take a moment to celebrate the small wins.",reflection:"Did I step outside my comfort zone today? Did I initiate conversation or wait to be found?",tip:"Set an intention for tomorrow: one genuine compliment, one real question, one open heart."},
      {message:"Evening peace. Your journey is unfolding exactly as it should. Trust the timing.",reflection:"What moved me today? Was there a profile or a message that stirred something in my heart?",tip:"Write a short prayer tonight about the kind of partner you are becoming, not just seeking."},
      {message:"Rest well tonight knowing that God is working even while you sleep.",reflection:"Am I being the person I want to attract? Am I showing my authentic self on this platform?",tip:"Update your bio with something new you learned about yourself this week."},
    ]
  },
  sunday: {
    icon: "💌", title: "Sunday Love Letter", headerClass: "sunday",
    content: [
      {greeting:"Beloved in Christ,",letter:"This week you took steps that required courage. Whether you sent a message, opened your heart in a conversation, or simply showed up and scrolled with intention — that matters. God sees every brave moment.\n\nRemember: love is not a race. It is a garden. You are planting seeds that will bloom in their perfect season.",verse:"\"Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.\"",ref:"Galatians 6:9",signoff:"With love and faith,\nYour Young Love Family 💕"},
      {greeting:"Dear Beautiful Soul,",letter:"Another week has passed, and you are still here — still believing, still hoping, still trusting. That is not weakness. That is the deepest kind of strength.\n\nThis week, we encourage you to be a little more vulnerable. Share something real. Ask a question that goes beyond the surface. Love lives in the deep waters.",verse:"\"Deep calls to deep in the roar of your waterfalls; all your waves and breakers have swept over me.\"",ref:"Psalm 42:7",signoff:"Walking with you always,\nYour Young Love Family ✝️"},
      {greeting:"Precious Heart,",letter:"Did you know that every great love story in the Bible began with waiting? Abraham waited. Ruth waited. Joseph waited. Waiting is not empty — it is preparation.\n\nThis week, instead of asking \"when will love find me?\" — try asking \"how is love shaping me right now?\" The answer might surprise you.",verse:"\"Wait for the Lord; be strong and take heart and wait for the Lord.\"",ref:"Psalm 27:14",signoff:"In His perfect timing,\nYour Young Love Family 🕊️"},
      {greeting:"Friend of God,",letter:"We wanted to remind you of something important this Sunday: you are already deeply loved. Before any match, before any conversation, before any first date — you are held.\n\nLet that truth be the foundation of everything you do this week. You are not looking for love to complete you. You are looking for love to share what is already overflowing.",verse:"\"See what great love the Father has lavished on us, that we should be called children of God!\"",ref:"1 John 3:1",signoff:"Overflowing with grace,\nYour Young Love Family 🌹"},
    ]
  }
};

function getHourlyIndex(arr) {
  const h = new Date().getHours();
  const d = new Date().getDate();
  return (h + d) % arr.length;
}

function openDevotion(type) {
  const data = DEV_DATA[type];
  if (!data) return;
  const idx = getHourlyIndex(data.content);
  const item = data.content[idx];
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) + " \u00b7 " + now.toLocaleDateString([], {weekday:'long', month:'long', day:'numeric'});

  const header = document.getElementById("dev-header");
  header.className = "dev-header " + data.headerClass;
  document.getElementById("dev-icon").textContent = data.icon;
  document.getElementById("dev-title").textContent = data.title;
  document.getElementById("dev-time").textContent = timeStr;

  const body = document.getElementById("dev-body");
  let html = "";

  if (type === "morning") {
    html += '<div class="dev-verse">' + item.verse + '</div>';
    html += '<div class="dev-ref">' + item.ref + '</div>';
    html += '<div class="dev-message">' + item.message + '</div>';
    html += '<div class="dev-divider"></div>';
    html += '<div style="font-size:13px;font-weight:700;color:var(--dark);margin-bottom:10px">Your 3 Morning Matches:</div>';
    item.matches.forEach(function(m) {
      html += '<div class="dev-match-card"><div class="dev-match-avatar">' + m.emoji + '</div><div class="dev-match-info"><div class="dev-match-name">' + m.name + '</div><div class="dev-match-meta">' + m.meta + '</div><div class="dev-match-flames">' + m.flames + '</div></div></div>';
    });
    html += '<button class="dev-btn" onclick="closeDevotion();showPage(\'algorithm\');showToast(\'💕 Find your morning matches in the swipe deck!\')">View in Algorithm 🔥</button>';
  }
  else if (type === "midday") {
    html += '<div class="dev-verse">' + item.verse + '</div>';
    html += '<div class="dev-ref">' + item.ref + '</div>';
    html += '<div class="dev-divider"></div>';
    html += '<div style="font-size:13px;font-weight:700;color:var(--dark);margin-bottom:8px">🙏 Midday Prayer</div>';
    html += '<div class="dev-prayer">' + item.prayer + '</div>';
    html += '<button class="dev-btn" onclick="closeDevotion();showToast(\'🕊️ Carry this peace with you today.\')">Amen 🕊️</button>';
  }
  else if (type === "evening") {
    html += '<div class="dev-message">' + item.message + '</div>';
    html += '<div class="dev-stat-row"><div class="dev-stat"><div class="dev-stat-num">' + (Math.floor(Math.random()*5)+1) + '</div><div class="dev-stat-label">Matches Today</div></div><div class="dev-stat"><div class="dev-stat-num">' + (Math.floor(Math.random()*12)+3) + '</div><div class="dev-stat-label">Messages Sent</div></div><div class="dev-stat"><div class="dev-stat-num">' + (Math.floor(Math.random()*3)+1) + '</div><div class="dev-stat-label">Milestones</div></div></div>';
    html += '<div class="dev-divider"></div>';
    html += '<div style="font-size:13px;font-weight:700;color:var(--dark);margin-bottom:8px">🌙 Tonight\'s Reflection</div>';
    html += '<div class="dev-prayer">' + item.reflection + '</div>';
    html += '<div style="margin-top:14px;font-size:13px;color:var(--mid)"><strong style="color:var(--rose)">💡 Tip:</strong> ' + item.tip + '</div>';
    html += '<button class="dev-btn" onclick="closeDevotion();showPage(\'journey\');showToast(\'🌙 Reflect on your journey — you are doing beautifully.\')" >View My Journey 🌱</button>';
  }
  else if (type === "sunday") {
    html += '<div style="font-family:\'Playfair Display\',serif;font-size:16px;font-style:italic;color:var(--rose);margin-bottom:14px">' + item.greeting + '</div>';
    var paragraphs = item.letter.split("\n\n");
    paragraphs.forEach(function(p) { html += '<div class="dev-message" style="margin-bottom:10px">' + p + '</div>'; });
    html += '<div class="dev-divider"></div>';
    html += '<div class="dev-verse">' + item.verse + '</div>';
    html += '<div class="dev-ref">' + item.ref + '</div>';
    html += '<div class="dev-divider"></div>';
    var signLines = item.signoff.split("\n");
    html += '<div style="text-align:center;font-size:14px;font-weight:600;color:var(--mid);line-height:1.7">';
    signLines.forEach(function(l) { html += l + '<br>'; });
    html += '</div>';
    html += '<button class="dev-btn" onclick="closeDevotion();showToast(\'💌 Carry this love letter in your heart all week.\')" >Close with Love 💌</button>';
  }

  body.innerHTML = html;
  document.getElementById("devotion-overlay").classList.add("show");
}

function closeDevotion() {
  document.getElementById("devotion-overlay").classList.remove("show");
}

// ══════════════════════════════════════════════════════════════════
// GODLY LOVE TEACHINGS
// ══════════════════════════════════════════════════════════════════
const GODLY_LOVE = [
  {icon:"✝️",title:"Love Is Patient",preview:"Why rushing love dishonors God\u2019s timing...",body:["Patience in love is not passive waiting \u2014 it is active trust. When God asks you to wait, He is not withholding love from you. He is preparing both you and your future partner for something neither of you could build alone.","In a world that swipes in seconds and moves on in minutes, choosing patience is a radical act of faith. It says: I believe God\u2019s timing is better than my urgency.","Patience also means not forcing someone to be ready before their season. It means holding space for growth \u2014 theirs and yours."],verse:"\u201CLove is patient, love is kind. It does not envy, it does not boast, it is not proud.\u201D",ref:"1 Corinthians 13:4",takeaway:"This week, practice patience in one area of your love life. Resist the urge to rush. Trust that what God has for you will not pass you by."},
  {icon:"🔥",title:"Love Is Not Jealous",preview:"How comparison poisons the heart God is preparing...",body:["Jealousy says: \u201CWhy do they have love and I don\u2019t?\u201D But godly love says: \u201CTheir blessing is not my loss.\u201D When you see someone else find love, celebrate it. Their story is proof that God is still in the business of writing love stories.","Comparison is the thief of joy and the enemy of contentment. Your journey is uniquely yours. God is not running out of love to give.","A jealous heart cannot receive love freely. It holds too tightly, suspects too quickly, and trusts too slowly. Let go of comparison, and watch your heart open."],verse:"\u201CLove does not envy, it does not boast, it is not proud.\u201D",ref:"1 Corinthians 13:4",takeaway:"Next time you feel jealousy rise, pause and pray: \u201CLord, bless their love story, and remind me that mine is coming.\u201D"},
  {icon:"🕊️",title:"What It Means to Be Loved",preview:"You are already deeply loved before any match...",body:["Before any relationship, before any first date, before any match notification \u2014 you are already completely, unconditionally loved by God. This is not a consolation prize. This is the foundation everything else is built on.","Being loved means being known fully and accepted completely. God sees every part of you \u2014 the parts you show the world and the parts you hide \u2014 and He calls you beloved anyway.","When you truly understand that you are loved by God, you stop looking for a partner to complete you. Instead, you look for a partner to walk alongside the wholeness God has already placed within you."],verse:"\u201CSee what great love the Father has lavished on us, that we should be called children of God!\u201D",ref:"1 John 3:1",takeaway:"Before you search for love from others, sit in the truth of this: you are already loved beyond measure."},
  {icon:"💕",title:"Love Requires Vulnerability",preview:"Why walls protect you from the wrong thing...",body:["Vulnerability is terrifying. It means letting someone see the real you \u2014 unfiltered, imperfect, still growing. But here is the truth: love cannot grow behind walls. It needs air, light, and honesty.","God modeled vulnerability for us. He sent His Son into a broken world, knowing the cost. That is not weakness \u2014 it is the most courageous act of love in all of history.","When you open your heart to another person, you risk pain. But you also open the door to the deepest connection a human being can experience. The risk is worth it."],verse:"\u201CThere is no fear in love. But perfect love drives out fear.\u201D",ref:"1 John 4:18",takeaway:"This week, share one real, honest thing about yourself with someone. Vulnerability is the birthplace of true connection."},
  {icon:"🌹",title:"Healthy Love vs. Toxic Love",preview:"Learn to recognize the difference before it costs you...",body:["Healthy love makes you feel safe, seen, and free to be yourself. Toxic love makes you feel anxious, controlled, and like you are never enough. Knowing the difference is one of the most important things you will ever learn.","Godly love does not isolate you from your friends and family. It does not demand you change who you are. It does not use guilt, shame, or silence as weapons. If someone\u2019s \u201Clove\u201D makes you feel smaller, that is not love.","Healthy love celebrates your growth, supports your calling, and encourages your faith. It is built on mutual respect, honest communication, and shared values."],verse:"\u201CAbove all, love each other deeply, because love covers over a multitude of sins.\u201D",ref:"1 Peter 4:8",takeaway:"Write down 3 non-negotiable qualities you need in a partner. If someone consistently violates those, trust your boundaries."},
  {icon:"🙏",title:"Forgiveness in Love",preview:"Why holding grudges blocks the love God has for you...",body:["Forgiveness does not mean pretending hurt did not happen. It means choosing to release the weight of resentment so it does not poison your future. Unforgiveness is a prison \u2014 and you hold the key.","In relationships, forgiveness is not a one-time event. It is a daily practice. Two imperfect people will inevitably hurt each other. What matters is whether you choose repair over retreat.","God forgives us completely, not because we deserve it, but because His love is bigger than our mistakes. When we forgive others, we reflect that same love."],verse:"\u201CBear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.\u201D",ref:"Colossians 3:13",takeaway:"Is there someone you need to forgive \u2014 or something you need to forgive yourself for? Release it today."},
  {icon:"⭐",title:"Love Yourself First",preview:"You cannot pour from an empty cup...",body:["Loving yourself is not selfish \u2014 it is biblical. Jesus said to love your neighbor as yourself. That \u201Cas yourself\u201D part matters. If you do not love who you are, you will struggle to believe anyone else can.","Self-love means taking care of your body, guarding your mind, and nourishing your spirit. It means setting boundaries that honor your worth. It means refusing to settle for less than what God says you deserve.","When you love yourself well, you attract people who love you well too. You stop tolerating treatment that diminishes you because you know your value."],verse:"\u201CI praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.\u201D",ref:"Psalm 139:14",takeaway:"Name 3 things you genuinely love about yourself. Say them out loud. That is not pride \u2014 it is worship."},
  {icon:"🌸",title:"Love Is a Choice, Not Just a Feeling",preview:"Feelings fade. Decisions endure...",body:["Butterflies are beautiful, but they are not the foundation of lasting love. Godly love is built on daily choices: choosing kindness when you are tired, choosing honesty when it is hard, choosing to stay when walking away would be easier.","Feelings change with the weather. Love is the decision to show up for someone even when the feeling dips. Every long-lasting couple will tell you: there were seasons where the feeling was quiet, but the choice was loud.","This does not mean you should stay in a loveless situation. It means that real love is deeper than emotion. It is commitment, sacrifice, and intention."],verse:"\u201CLove never fails.\u201D",ref:"1 Corinthians 13:8",takeaway:"Ask yourself: Am I chasing a feeling, or am I building a foundation? Real love is both \u2014 but it starts with the choice."},
  {icon:"✝️",title:"God\u2019s Love as the Model",preview:"The ultimate blueprint for how to love and be loved...",body:["If you want to know what real love looks like, look at the cross. God did not love us because we were perfect. He loved us while we were still broken. That is the model for every relationship.","God\u2019s love is unconditional but not without boundaries. He loves us as we are, but He also calls us to grow. Healthy relationships mirror this: acceptance and accountability, grace and truth, together.","When you feel unloved or unworthy, remember: the God who created galaxies and oceans looked at you and said, \u201CYou are worth dying for.\u201D Let that redefine your standard."],verse:"\u201CBut God demonstrates his own love for us in this: While we were still sinners, Christ died for us.\u201D",ref:"Romans 5:8",takeaway:"Let God\u2019s love be your mirror. When the world tells you that you are too much or not enough, return to this verse."},
  {icon:"💌",title:"Communication Is Love in Action",preview:"How you speak reveals how you love...",body:["Words have the power to build up or tear down. In a relationship, communication is not just about sharing information \u2014 it is about making your partner feel heard, valued, and safe.","Godly communication means speaking truth with love. It means listening more than defending. It means saying \u201CI was wrong\u201D before saying \u201Cbut you also...\u201D","Silence can be just as harmful as harsh words. If you withdraw, shut down, or give the silent treatment, you are not protecting yourself \u2014 you are punishing your partner. Choose to communicate, even when it is uncomfortable."],verse:"\u201CDo not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs.\u201D",ref:"Ephesians 4:29",takeaway:"Practice this: before you speak, ask \u2014 is it true? Is it kind? Is it necessary? If not all three, pause."},
  {icon:"🛡️",title:"Boundaries Are an Act of Love",preview:"Saying no to the wrong protects your yes for the right...",body:["Boundaries are not walls. They are gates. They let the right things in and keep the harmful things out. Setting boundaries in dating is not being difficult \u2014 it is being wise.","God Himself sets boundaries. He defines what is holy and what is not. He invites us in but does not force. Healthy relationships follow the same pattern: invitation without coercion, closeness without control.","If someone disrespects your boundaries, pay attention. A person who loves you will honor your limits, not test them. Your boundaries reveal your values \u2014 and the right person will respect both."],verse:"\u201CAbove all else, guard your heart, for everything you do flows from it.\u201D",ref:"Proverbs 4:23",takeaway:"Identify one boundary you have been afraid to set. Write it down. Practice saying it out loud. You are allowed to protect your peace."},
  {icon:"🌿",title:"Love Grows in Community",preview:"You were never meant to find love alone...",body:["In our culture, we treat love like a solo mission \u2014 download the app, find the person, build the life. But God designed love to grow within community: family, church, friendships, mentors.","Accountability matters. When you are falling for someone, your emotions can cloud your judgment. Trusted friends and mentors see what you cannot. Invite them into your story.","The strongest couples are not isolated islands. They are rooted in communities that support, challenge, and celebrate them. Find your people before you find your person."],verse:"\u201CTwo are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up.\u201D",ref:"Ecclesiastes 4:9-10",takeaway:"Share your love journey with one trusted friend or mentor this week. Let someone walk alongside you."},
];

let glShuffled = [...GODLY_LOVE];
let glIndex = 0;

function shuffleGL() {
  for (let i=glShuffled.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [glShuffled[i],glShuffled[j]]=[glShuffled[j],glShuffled[i]];
  }
}
shuffleGL();

function renderGodlyLove() {
  const featured = glShuffled[glIndex % glShuffled.length];
  const sides = [];
  for (let i=1;i<=3;i++) sides.push(glShuffled[(glIndex+i) % glShuffled.length]);

  const container = document.getElementById("gl-featured");
  if (!container) return;

  let mainHtml = '<div class="gl-main-card">';
  mainHtml += '<div><div class="gl-main-label">' + featured.icon + ' Today\u2019s Teaching</div>';
  mainHtml += '<div class="gl-main-title">' + featured.title + '</div>';
  mainHtml += '<div class="gl-main-body">' + featured.body[0] + '</div></div>';
  mainHtml += '<div class="gl-main-verse">' + featured.verse;
  mainHtml += '<div class="gl-main-ref">\u2014 ' + featured.ref + '</div></div>';
  mainHtml += '<div style="margin-top:16px"><button class="gl-refresh-btn" onclick="openGlDetail('+glIndex+')" style="background:var(--grad-btn);color:#fff;border:none;font-weight:700">Read Full Teaching \u2192</button></div>';
  mainHtml += '</div>';

  let sideHtml = '<div class="gl-side">';
  sides.forEach(function(s, i) {
    const realIdx = (glIndex+1+i) % glShuffled.length;
    sideHtml += '<div class="gl-mini-card" onclick="openGlDetail('+realIdx+')">';
    sideHtml += '<div class="gl-mini-icon">' + s.icon + '</div>';
    sideHtml += '<div><div class="gl-mini-title">' + s.title + '</div>';
    sideHtml += '<div class="gl-mini-preview">' + s.preview + '</div>';
    sideHtml += '<div class="gl-mini-tap">Read more \u2192</div></div></div>';
  });
  sideHtml += '</div>';

  container.innerHTML = mainHtml + sideHtml;

  const counter = document.getElementById("gl-counter");
  if (counter) counter.textContent = "\u2764\uFE0F " + GODLY_LOVE.length + " teachings available \u00b7 Showing " + (glIndex+1) + " of " + glShuffled.length;
}

function refreshGodlyLove() {
  glIndex = (glIndex + 4) % glShuffled.length;
  renderGodlyLove();
  showToast("\u2728 New teaching loaded \u2014 keep learning, keep growing!");
}

function openGlDetail(idx) {
  const item = glShuffled[idx % glShuffled.length];
  if (!item) return;
  document.getElementById("gl-d-icon").textContent = item.icon;
  document.getElementById("gl-d-title").textContent = item.title;
  const body = document.getElementById("gl-d-body");
  let h = "";
  item.body.forEach(function(p) { h += "<p>" + p + "</p>"; });
  h += '<div class="gl-verse-block">' + item.verse + '<span class="gl-verse-ref">\u2014 ' + item.ref + '</span></div>';
  h += '<div class="gl-takeaway"><strong>\u2728 Take This With You:</strong><br>' + item.takeaway + '</div>';
  body.innerHTML = h;
  document.getElementById("gl-detail-overlay").classList.add("show");
}

function closeGlDetail() {
  document.getElementById("gl-detail-overlay").classList.remove("show");
}

// Render on page load
document.addEventListener("DOMContentLoaded", function() { renderGodlyLove(); });
// Also render when navigating to How It Works
const _origShowPageGL = showPage;
showPage = function(id) { _origShowPageGL(id); if(id==="how") setTimeout(renderGodlyLove,100); };

// ══════════════════════════════════════════════════════════════════
// LOVE SCRIPTURES — Shuffled on every load
// ══════════════════════════════════════════════════════════════════
const LOVE_SCRIPTURES = [
  {ico:"\u2720\uFE0F",verse:"\"He makes everything beautiful in its time.\"",ref:"Ecclesiastes 3:11 (NIV)"},
  {ico:"\uD83D\uDE4F",verse:"\"Love is patient, love is kind. It does not envy, it does not boast.\"",ref:"1 Corinthians 13:4 (NIV)"},
  {ico:"\uD83D\uDD4A\uFE0F",verse:"\"Two are better than one, because they have a good return for their labor.\"",ref:"Ecclesiastes 4:9 (NIV)"},
  {ico:"\uD83C\uDF39",verse:"\"Wait for the Lord; be strong and take heart and wait for the Lord.\"",ref:"Psalm 27:14 (NIV)"},
  {ico:"\uD83D\uDC95",verse:"\"The greatest of these is love.\"",ref:"1 Corinthians 13:13 (NIV)"},
  {ico:"\u2720\uFE0F",verse:"\"Above all, love each other deeply, because love covers over a multitude of sins.\"",ref:"1 Peter 4:8 (NIV)"},
  {ico:"\uD83D\uDE4F",verse:"\"Where you go I will go, and where you stay I will stay.\"",ref:"Ruth 1:16 (NIV)"},
  {ico:"\uD83D\uDC95",verse:"\"I have found the one whom my soul loves.\"",ref:"Song of Solomon 3:4 (NIV)"},
  {ico:"\u2720\uFE0F",verse:"\"There is no fear in love. But perfect love drives out fear.\"",ref:"1 John 4:18 (NIV)"},
  {ico:"\uD83C\uDF39",verse:"\"I am my beloved\u2019s and my beloved is mine.\"",ref:"Song of Solomon 6:3 (NIV)"},
  {ico:"\uD83D\uDD4A\uFE0F",verse:"\"God is love, and whoever abides in love abides in God, and God abides in him.\"",ref:"1 John 4:16 (NIV)"},
  {ico:"\uD83D\uDE4F",verse:"\"Trust in the Lord with all your heart and lean not on your own understanding.\"",ref:"Proverbs 3:5 (NIV)"},
  {ico:"\uD83D\uDC95",verse:"\"For I know the plans I have for you \u2014 plans to prosper you and not to harm you, plans to give you hope and a future.\"",ref:"Jeremiah 29:11 (NIV)"},
  {ico:"\u2720\uFE0F",verse:"\"Love one another as I have loved you.\"",ref:"John 15:12 (NIV)"},
  {ico:"\uD83C\uDF39",verse:"\"A man who finds a wife finds a good thing and obtains favor from the Lord.\"",ref:"Proverbs 18:22 (NIV)"},
  {ico:"\uD83D\uDD4A\uFE0F",verse:"\"Be completely humble and gentle; be patient, bearing with one another in love.\"",ref:"Ephesians 4:2 (NIV)"},
  {ico:"\uD83D\uDE4F",verse:"\"Husbands, love your wives, just as Christ loved the church and gave himself up for her.\"",ref:"Ephesians 5:25 (NIV)"},
  {ico:"\uD83D\uDC95",verse:"\"Let all that you do be done in love.\"",ref:"1 Corinthians 16:14 (NIV)"},
  {ico:"\u2720\uFE0F",verse:"\"But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.\"",ref:"Romans 5:8 (NIV)"},
  {ico:"\uD83C\uDF39",verse:"\"Place me like a seal over your heart, like a seal on your arm; for love is as strong as death.\"",ref:"Song of Solomon 8:6 (NIV)"},
  {ico:"\uD83D\uDD4A\uFE0F",verse:"\"Dear friends, let us love one another, for love comes from God.\"",ref:"1 John 4:7 (NIV)"},
  {ico:"\uD83D\uDE4F",verse:"\"How good and pleasant it is when God\u2019s people live together in unity!\"",ref:"Psalm 133:1 (NIV)"},
  {ico:"\uD83D\uDC95",verse:"\"Many waters cannot quench love; rivers cannot sweep it away.\"",ref:"Song of Solomon 8:7 (NIV)"},
  {ico:"\u2720\uFE0F",verse:"\"Hatred stirs up conflict, but love covers over all wrongs.\"",ref:"Proverbs 10:12 (NIV)"},
  {ico:"\uD83C\uDF39",verse:"\"Be devoted to one another in love. Honor one another above yourselves.\"",ref:"Romans 12:10 (NIV)"},
  {ico:"\uD83D\uDD4A\uFE0F",verse:"\"And over all these virtues put on love, which binds them all together in perfect unity.\"",ref:"Colossians 3:14 (NIV)"},
  {ico:"\uD83D\uDE4F",verse:"\"We love because he first loved us.\"",ref:"1 John 4:19 (NIV)"},
  {ico:"\uD83D\uDC95",verse:"\"Love does no harm to a neighbor. Therefore love is the fulfillment of the law.\"",ref:"Romans 13:10 (NIV)"},
  {ico:"\u2720\uFE0F",verse:"\"May the Lord make your love increase and overflow for each other and for everyone else.\"",ref:"1 Thessalonians 3:12 (NIV)"},
  {ico:"\uD83C\uDF39",verse:"\"Whoever does not love does not know God, because God is love.\"",ref:"1 John 4:8 (NIV)"},
  {ico:"\uD83D\uDD4A\uFE0F",verse:"\"Love never fails. But where there are prophecies, they will cease; where there are tongues, they will be stilled.\"",ref:"1 Corinthians 13:8 (NIV)"},
  {ico:"\uD83D\uDE4F",verse:"\"See what great love the Father has lavished on us, that we should be called children of God!\"",ref:"1 John 3:1 (NIV)"},
  {ico:"\uD83D\uDC95",verse:"\"Love must be sincere. Hate what is evil; cling to what is good.\"",ref:"Romans 12:9 (NIV)"},
  {ico:"\u2720\uFE0F",verse:"\"Keep on loving one another as brothers and sisters.\"",ref:"Hebrews 13:1 (NIV)"},
  {ico:"\uD83C\uDF39",verse:"\"Bear with each other and forgive one another. Forgive as the Lord forgave you.\"",ref:"Colossians 3:13 (NIV)"},
  {ico:"\uD83D\uDD4A\uFE0F",verse:"\"I praise you because I am fearfully and wonderfully made.\"",ref:"Psalm 139:14 (NIV)"},
  {ico:"\uD83D\uDE4F",verse:"\"The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you.\"",ref:"Zephaniah 3:17 (NIV)"},
  {ico:"\uD83D\uDC95",verse:"\"My command is this: Love each other as I have loved you.\"",ref:"John 15:12 (NIV)"},
  {ico:"\u2720\uFE0F",verse:"\"Do everything in love.\"",ref:"1 Corinthians 16:14 (NIV)"},
  {ico:"\uD83C\uDF39",verse:"\"This is how we know what love is: Jesus Christ laid down his life for us.\"",ref:"1 John 3:16 (NIV)"},
  {ico:"\uD83D\uDD4A\uFE0F",verse:"\"Arise, my darling, my beautiful one, come with me.\"",ref:"Song of Solomon 2:13 (NIV)"},
  {ico:"\uD83D\uDE4F",verse:"\"No one has ever seen God; but if we love one another, God lives in us and his love is made complete in us.\"",ref:"1 John 4:12 (NIV)"},
  {ico:"\uD83D\uDC95",verse:"\"The Lord is gracious and compassionate, slow to anger and rich in love.\"",ref:"Psalm 145:8 (NIV)"},
  {ico:"\u2720\uFE0F",verse:"\"How priceless is your unfailing love, O God! People take refuge in the shadow of your wings.\"",ref:"Psalm 36:7 (NIV)"},
  {ico:"\uD83C\uDF39",verse:"\"Let the morning bring me word of your unfailing love, for I have put my trust in you.\"",ref:"Psalm 143:8 (NIV)"},
  {ico:"\uD83D\uDD4A\uFE0F",verse:"\"Because of the Lord\u2019s great love we are not consumed, for his compassions never fail.\"",ref:"Lamentations 3:22 (NIV)"},
  {ico:"\uD83D\uDE4F",verse:"\"Give thanks to the Lord, for he is good; his love endures forever.\"",ref:"Psalm 107:1 (NIV)"},
  {ico:"\uD83D\uDC95",verse:"\"Your love, Lord, reaches to the heavens, your faithfulness to the skies.\"",ref:"Psalm 36:5 (NIV)"},
  {ico:"\u2720\uFE0F",verse:"\"The Lord appeared to us in the past, saying: I have loved you with an everlasting love; I have drawn you with unfailing kindness.\"",ref:"Jeremiah 31:3 (NIV)"},
  {ico:"\uD83C\uDF39",verse:"\"So now faith, hope, and love abide, these three; but the greatest of these is love.\"",ref:"1 Corinthians 13:13 (ESV)"},
];

function renderScriptures() {
  const el = document.getElementById("scripture-scroll");
  if (!el) return;
  // Shuffle
  const shuffled = [...LOVE_SCRIPTURES];
  for (let i=shuffled.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
  }
  // Pick 8 random ones to display in the scroll
  const selected = shuffled.slice(0, 8);
  el.innerHTML = selected.map(function(s, i) {
    return '<div class="sc-card"><span class="sc-ico">' + s.ico + '</span><p class="sc-verse">' + s.verse + '</p><p class="sc-ref">\u2014 ' + s.ref + '</p></div>';
  }).join("\n        ");
}
renderScriptures();

// ══════════════════════════════════════════════════════════════════
// EMAIL NOTIFICATION SYSTEM
// ══════════════════════════════════════════════════════════════════
let emailNotifTimer = null;
let emailNotifQueue = [];
let emailNotifActive = false;

function getUserEmail() {
  const el = document.getElementById('inp-email');
  return el ? el.value.trim() : '';
}

function maskEmail(email) {
  if (!email || !email.includes('@')) return '***@***.com';
  const parts = email.split('@');
  const name = parts[0];
  const domain = parts[1];
  const masked = name.substring(0,2) + '***';
  return masked + '@' + domain;
}

function sendEmailNotification(senderName, messagePreview) {
  if (!AppState.profileComplete) return;
  const email = getUserEmail();
  if (!email) return;

  // Queue the notification
  emailNotifQueue.push({
    sender: senderName,
    preview: messagePreview,
    email: email
  });

  // Process queue if not already showing
  if (!emailNotifActive) processEmailNotifQueue();
}

function processEmailNotifQueue() {
  if (emailNotifQueue.length === 0) { emailNotifActive = false; return; }
  emailNotifActive = true;
  const notif = emailNotifQueue.shift();

  const el = document.getElementById('email-notif');
  document.getElementById('en-title').textContent = '💌 New message from ' + notif.sender;
  document.getElementById('en-text').textContent = '"' + (notif.preview.length > 60 ? notif.preview.substring(0,57) + '...' : notif.preview) + '"';
  document.getElementById('en-email').textContent = '📩 Notification sent to: ' + maskEmail(notif.email);

  el.classList.add('show');
  clearTimeout(emailNotifTimer);
  emailNotifTimer = setTimeout(function() {
    el.classList.remove('show');
    setTimeout(processEmailNotifQueue, 400);
  }, 4500);

  // Log to console (in production this would be an API call)
  console.log('[Young Love] Email notification dispatched:', {
    to: notif.email,
    from: notif.sender,
    preview: notif.preview,
    timestamp: new Date().toISOString(),
    encrypted: true
  });
}

function dismissEmailNotif() {
  document.getElementById('email-notif').classList.remove('show');
  clearTimeout(emailNotifTimer);
  setTimeout(processEmailNotifQueue, 300);
}