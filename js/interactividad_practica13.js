(function P13() {

  function initChart() {
    const anchor = document.getElementById('tabla-ejemplo');
    if (!anchor) return;

    const section = document.createElement('section');
    section.id = 'p13-chart-section';
    section.className = 'p13-chart-section container my-5 text-center';
    section.innerHTML = `
      <h2 class="titulo-seccion mb-4 neon-text-title">Estadísticas de Ventas</h2>
      <p class="text-secondary mb-3">Visualización interactiva de popularidad y ventas estimadas por título.</p>
      <div class="p13-chart-controls mb-3 d-flex justify-content-center gap-2 flex-wrap">
        <button id="p13-btn-bar"  class="p13-btn p13-btn--active">Barras</button>
        <button id="p13-btn-line" class="p13-btn">Líneas</button>
        <button id="p13-btn-update" class="p13-btn">Actualizar datos</button>
      </div>
      <div class="p13-chart-wrapper mx-auto">
        <canvas id="p13-canvas-chart"></canvas>
      </div>
    `;
    anchor.insertAdjacentElement('afterend', section);

    const labels = ['Call of Duty', 'FIFA 26', 'Diablo IV', 'Cyberpunk', 'GTA V', 'Resident Evil 4', 'Among Us'];
    const generateData = () => labels.map(() => Math.floor(Math.random() * 800) + 200);

    const COLORS = {
      primary:   'rgba(0, 195, 255, 0.85)',
      secondary: 'rgba(0, 255, 180, 0.7)',
      border:    'rgba(0, 195, 255, 1)',
      grid:      'rgba(255,255,255,0.07)',
      text:      'rgba(200, 220, 255, 0.85)',
    };

    const ctx = document.getElementById('p13-canvas-chart').getContext('2d');
    let currentType = 'bar';

    const chart = new Chart(ctx, {
      type: currentType,
      data: {
        labels,
        datasets: [{
          label: 'Unidades vendidas (estimado)',
          data: generateData(),
          backgroundColor: COLORS.primary,
          borderColor: COLORS.border,
          borderWidth: 2,
          borderRadius: 6,
          pointBackgroundColor: COLORS.border,
          tension: 0.4,
          fill: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            labels: { color: COLORS.text, font: { family: 'Montserrat', size: 13 } }
          },
          tooltip: {
            backgroundColor: 'rgba(10,20,40,0.95)',
            titleColor: COLORS.border,
            bodyColor: '#fff',
            borderColor: COLORS.border,
            borderWidth: 1,
          }
        },
        scales: {
          x: {
            ticks: { color: COLORS.text, font: { size: 11 } },
            grid: { color: COLORS.grid }
          },
          y: {
            ticks: { color: COLORS.text },
            grid: { color: COLORS.grid }
          }
        }
      }
    });

    function setType(type) {
      currentType = type;
      chart.config.type = type;
      chart.update();
      document.querySelectorAll('.p13-btn').forEach(b => b.classList.remove('p13-btn--active'));
      document.getElementById(type === 'bar' ? 'p13-btn-bar' : 'p13-btn-line').classList.add('p13-btn--active');
    }

    document.getElementById('p13-btn-bar').addEventListener('click',    () => setType('bar'));
    document.getElementById('p13-btn-line').addEventListener('click',   () => setType('line'));
    document.getElementById('p13-btn-update').addEventListener('click', () => {
      chart.data.datasets[0].data = generateData();
      chart.update('active');
    });
  }


  function initAnime() {
    if (typeof anime === 'undefined') return;

    const tarjetas = document.querySelectorAll('#proyectos .tarjeta');
    tarjetas.forEach(t => { t.style.opacity = '0'; t.style.transform = 'translateY(40px)'; });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: tarjetas,
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 700,
            delay: anime.stagger(100),
            easing: 'easeOutCubic',
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });

    const section = document.getElementById('proyectos');
    if (section) observer.observe(section);

    tarjetas.forEach(tarjeta => {
      tarjeta.addEventListener('mouseenter', () => {
        anime({ targets: tarjeta, scale: 1.03, duration: 250, easing: 'easeOutQuad' });
      });
      tarjeta.addEventListener('mouseleave', () => {
        anime({ targets: tarjeta, scale: 1, duration: 250, easing: 'easeOutQuad' });
      });
    });

    document.querySelectorAll('.btn-add').forEach(btn => {
      btn.addEventListener('mousedown', () => {
        anime({ targets: btn, scale: 0.92, duration: 100, easing: 'easeInQuad' });
      });
      btn.addEventListener('mouseup', () => {
        anime({ targets: btn, scale: 1, duration: 200, easing: 'easeOutElastic(1, .5)' });
      });
      btn.addEventListener('mouseleave', () => {
        anime({ targets: btn, scale: 1, duration: 150, easing: 'easeOutQuad' });
      });
    });

    document.querySelectorAll('.nav-link, .custom-btn-nav').forEach(link => {
      link.addEventListener('mouseenter', () => {
        anime({ targets: link, translateY: -2, duration: 180, easing: 'easeOutQuad' });
      });
      link.addEventListener('mouseleave', () => {
        anime({ targets: link, translateY: 0, duration: 180, easing: 'easeOutQuad' });
      });
    });
  }


  function initCanvas() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const section = document.createElement('section');
    section.id = 'p13-canvas-section';
    section.className = 'p13-canvas-section container my-5 text-center';
    section.innerHTML = `
      <h2 class="titulo-seccion mb-4 neon-text-title">Zona Interactiva</h2>
      <p class="text-secondary mb-3">Mueve el cursor sobre el panel para interactuar con las partículas.</p>
      <div class="p13-canvas-wrapper mx-auto">
        <canvas id="p13-particle-canvas"></canvas>
      </div>
    `;
    footer.insertAdjacentElement('beforebegin', section);

    const wrapper = section.querySelector('.p13-canvas-wrapper');
    const canvas  = section.querySelector('#p13-particle-canvas');
    const ctx     = canvas.getContext('2d');

    function resize() {
      canvas.width  = wrapper.offsetWidth;
      canvas.height = wrapper.offsetHeight;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];

    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      for (let i = 0; i < 6; i++) {
        particles.push({
          x:     mx,
          y:     my,
          vx:    (Math.random() - 0.5) * 3.5,
          vy:    (Math.random() - 0.5) * 3.5,
          r:     Math.random() * 3 + 1.5,
          alpha: 1,
          hue:   Math.random() > 0.2 ? 195 + Math.random() * 25 : 210,
          light: Math.random() > 0.15 ? 55 : 85,
        });
      }
    });

    function loop() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.vy   += 0.04;
        p.vx   *= 0.97;
        p.vy   *= 0.97;
        p.x    += p.vx;
        p.y    += p.vy;
        p.alpha -= 0.022;
        p.r    *= 0.985;

        if (p.alpha <= 0 || p.r < 0.3) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha * 0.35;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${p.hue}, 100%, ${p.light}%)`;
        ctx.fill();

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${p.hue}, 100%, ${p.light}%)`;
        ctx.shadowBlur  = 12;
        ctx.shadowColor = `hsl(${p.hue}, 100%, 70%)`;
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(loop);
    }

    loop();
  }

  function waitFor(check, cb, tries = 0) {
    if (check()) { cb(); return; }
    if (tries > 50) return;
    setTimeout(() => waitFor(check, cb, tries + 1), 100);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCanvas();

    waitFor(() => typeof Chart !== 'undefined', initChart);

    waitFor(() => typeof anime !== 'undefined', initAnime);
  });

})();