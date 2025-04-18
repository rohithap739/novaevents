// Floating particles background
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Scroll animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.reveal').forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power4.out"
  });
});
