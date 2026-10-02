const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseModal = document.getElementById('surpriseModal');
const closeModal = document.getElementById('closeModal');
const confettiBtn = document.getElementById('confettiBtn');
const daysTogetherEl = document.getElementById('daysTogether');
const reveals = document.querySelectorAll('.reveal');
const heartsContainer = document.querySelector('.floating-hearts');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
}

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

function updateDaysTogether() {
  const start = new Date('2025-12-12T00:00:00');
  const today = new Date();
  const diff = today - start;
  const dayMs = 1000 * 60 * 60 * 24;
  const days = Math.max(0, Math.floor(diff / dayMs));
  if (daysTogetherEl) daysTogetherEl.textContent = days.toLocaleString();
}
updateDaysTogether();

function openModal() {
  surpriseModal.classList.add('is-open');
  surpriseModal.setAttribute('aria-hidden', 'false');
  launchConfetti();
}

function closeModalFn() {
  surpriseModal.classList.remove('is-open');
  surpriseModal.setAttribute('aria-hidden', 'true');
}

surpriseBtn?.addEventListener('click', openModal);
closeModal?.addEventListener('click', closeModalFn);
confettiBtn?.addEventListener('click', launchConfetti);

surpriseModal?.addEventListener('click', (e) => {
  if (e.target === surpriseModal) closeModalFn();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModalFn();
});

function spawnHeart() {
  const heart = document.createElement('span');
  heart.textContent = Math.random() > 0.5 ? '❤' : '♡';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 20}px`;
  heart.style.animationDuration = `${6 + Math.random() * 8}s`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 14000);
}

setInterval(spawnHeart, 900);
for (let i = 0; i < 8; i++) {
  setTimeout(spawnHeart, i * 220);
}

const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
let confettiPieces = [];
let animationId = null;

function resizeCanvas() {
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createConfetti() {
  const colors = ['#ff7fae', '#ffd36e', '#d3b2ff', '#8ed9ff', '#ffffff'];
  confettiPieces = Array.from({ length: 180 }, () => ({
    x: Math.random() * window.innerWidth,
    y: -20 - Math.random() * window.innerHeight,
    w: 6 + Math.random() * 8,
    h: 10 + Math.random() * 12,
    color: colors[Math.floor(Math.random() * colors.length)],
    velocity: 2 + Math.random() * 3.5,
    tilt: Math.random() * Math.PI * 2,
    tiltSpeed: 0.05 + Math.random() * 0.08,
    drift: -1.5 + Math.random() * 3,
  }));
}

function drawConfetti() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  confettiPieces.forEach((p) => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(Math.sin(p.tilt) * 0.7);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();

    p.y += p.velocity;
    p.x += p.drift;
    p.tilt += p.tiltSpeed;
  });

  confettiPieces = confettiPieces.filter(p => p.y < window.innerHeight + 30);

  if (confettiPieces.length > 0) {
    animationId = requestAnimationFrame(drawConfetti);
  } else {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    animationId = null;
  }
}

function launchConfetti() {
  if (animationId) cancelAnimationFrame(animationId);
  createConfetti();
  drawConfetti();
}
