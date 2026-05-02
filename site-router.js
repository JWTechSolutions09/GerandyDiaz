(function () {
  function installGlobalMotion() {
    if (document.getElementById('gd-global-motion')) return;

    const style = document.createElement('style');
    style.id = 'gd-global-motion';
    style.textContent = `
      .gd-reveal { opacity: 0; transform: translateY(24px); transition: opacity 700ms ease, transform 700ms ease; }
      .gd-reveal.gd-visible { opacity: 1; transform: translateY(0); }
      .gd-nav-scrolled { background: rgba(18, 20, 21, 0.82) !important; border-color: rgba(233, 193, 118, 0.22) !important; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35); }
      .glass-morphism { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); background: rgba(18, 20, 21, 0.35); }
    `;
    document.head.appendChild(style);
  }

  function setupNavbarState() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 24) nav.classList.add('gd-nav-scrolled');
      else nav.classList.remove('gd-nav-scrolled');
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function setupActiveNavLink() {
    const path = window.location.pathname.toLowerCase();
    const links = Array.from(document.querySelectorAll('nav a[href="#"]'));
    if (!links.length) return;

    const activeByPath = [
      { match: '/gerandy_diaz_architectural_narrative_', label: 'narrative' },
      { match: '/gerandy_diaz_curated_showcase/', label: 'showcase' },
      { match: '/gerandy_diaz_showcase_gallery/', label: 'showcase' },
      { match: '/gerandy_diaz_architectural_philosophy/', label: 'architectural' },
      { match: '/about_gerandy_diaz_the_philosophy/', label: 'about' },
      { match: '/gerandy_diaz_contacto_privado/', label: 'contact' },
      { match: '/agendar_consulta_gerandy_diaz/', label: 'contact' },
      { match: '/index.html', label: 'narrative' }
    ];

    let activeLabel = 'narrative';
    for (const item of activeByPath) {
      if (path.includes(item.match)) {
        activeLabel = item.label;
        break;
      }
    }

    links.forEach((link) => {
      const label = normalize(link.textContent);
      link.classList.remove('text-amber-400', 'border-b', 'border-amber-400', 'pb-1');
      link.classList.add('text-white/60');

      if (label === activeLabel) {
        link.classList.remove('text-white/60');
        link.classList.add('text-amber-400', 'border-b', 'border-amber-400', 'pb-1');
      }
    });
  }

  function setupRevealAnimation() {
    const targets = Array.from(document.querySelectorAll('section, header, footer, .group, .glass-morphism'));
    targets.forEach((el, i) => {
      el.classList.add('gd-reveal');
      el.style.transitionDelay = `${Math.min((i % 6) * 80, 300)}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('gd-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
  }

  const routes = {
    portfolio: 'gerandy_diaz_curated_showcase/code.html',
    narrative: 'gerandy_diaz_architectural_narrative_1/code.html',
    narratives: 'gerandy_diaz_architectural_narrative_1/code.html',
    showcase: 'gerandy_diaz_showcase_gallery/code.html',
    architectural: 'gerandy_diaz_architectural_philosophy/code.html',
    about: 'about_gerandy_diaz_the_philosophy/code.html',
    advisory: 'agendar_consulta_gerandy_diaz/code.html',
    developments: 'gerandy_diaz_curated_showcase/code.html',
    concierge: 'agendar_consulta_gerandy_diaz/code.html',
    contact: 'gerandy_diaz_contacto_privado/code.html',
    consultation: 'agendar_consulta_gerandy_diaz/code.html',
    legal: 'agendar_consulta_gerandy_diaz/code.html',
    privacy: 'agendar_consulta_gerandy_diaz/code.html',
    licensing: 'agendar_consulta_gerandy_diaz/code.html',
    terms: 'agendar_consulta_gerandy_diaz/code.html',
    accessibility: 'gerandy_diaz_contacto_privado/code.html',
    instagram: 'gerandy_diaz_contacto_privado/code.html',
    linkedin: 'gerandy_diaz_contacto_privado/code.html'
  };

  function normalize(label) {
    return (label || '').trim().toLowerCase();
  }

  function basePrefix() {
    const path = window.location.pathname;
    if (/\/[^/]+\/code\.html$/i.test(path)) return '../';
    return './';
  }

  function buildUrl(relativePath) {
    return basePrefix() + relativePath;
  }

  function routeForText(text) {
    const key = normalize(text)
      .replace(/\s+policy$/, '')
      .replace(/\s+of\s+service$/, '')
      .replace(/\s+service$/, '');

    return routes[key] ? buildUrl(routes[key]) : null;
  }

  function go(path) {
    if (path) window.location.href = path;
  }

  installGlobalMotion();
  setupNavbarState();
  setupActiveNavLink();
  setupRevealAnimation();

  document.querySelectorAll('a[href="#"]').forEach((a) => {
    const icon = a.querySelector('[data-icon]');
    if (icon) {
      const iconName = normalize(icon.getAttribute('data-icon'));
      if (iconName === 'alternate_email') {
        a.setAttribute('href', buildUrl('gerandy_diaz_contacto_privado/code.html'));
      } else if (iconName === 'language') {
        a.setAttribute('href', buildUrl('about_gerandy_diaz_the_philosophy/code.html'));
      } else {
        a.setAttribute('href', buildUrl('agendar_consulta_gerandy_diaz/code.html'));
      }
      return;
    }

    const path = routeForText(a.textContent);
    if (!path) return;

    a.setAttribute('href', path);
    a.addEventListener('click', function (e) {
      e.preventDefault();
      go(path);
    });
  });

  document.querySelectorAll('button').forEach((button) => {
    const label = normalize(button.textContent);
    if (!label) return;

    if (
      label.includes('consult') ||
      label.includes('showing') ||
      label.includes('contact') ||
      label.includes('llamada') ||
      label.includes('portafolio')
    ) {
      button.addEventListener('click', function () {
        go(buildUrl('agendar_consulta_gerandy_diaz/code.html'));
      });
      button.style.cursor = 'pointer';
    }
  });
})();
