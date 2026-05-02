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

  function installResponsiveStyles() {
    if (document.getElementById('gd-responsive-styles')) return;

    const style = document.createElement('style');
    style.id = 'gd-responsive-styles';
    style.textContent = `
      html, body { overflow-x: hidden; }
      img { max-width: 100%; height: auto; }

      @media (max-width: 767px) {
        nav > div {
          padding-left: 1rem !important;
          padding-right: 1rem !important;
          padding-top: 0.75rem !important;
          padding-bottom: 0.75rem !important;
          gap: 0.5rem !important;
        }

        nav .text-xl {
          font-size: 1rem !important;
          letter-spacing: 0.02em !important;
        }

        nav .text-\\[10px\\] {
          font-size: 9px !important;
          letter-spacing: 0.12em !important;
        }

        nav > div > button {
          padding: 0.5rem 0.75rem !important;
          font-size: 11px !important;
          line-height: 1.2 !important;
        }

        .text-display-xl,
        .font-display-xl {
          font-size: clamp(2rem, 9vw, 2.9rem) !important;
          line-height: 1.1 !important;
        }

        .text-headline-lg {
          font-size: clamp(1.6rem, 7vw, 2.1rem) !important;
          line-height: 1.2 !important;
        }

        .text-headline-md {
          font-size: clamp(1.2rem, 5.8vw, 1.6rem) !important;
          line-height: 1.25 !important;
        }

        .text-body-lg {
          font-size: 1rem !important;
          line-height: 1.6 !important;
        }

        .text-body-md {
          font-size: 0.95rem !important;
          line-height: 1.55 !important;
        }

        section, header, footer {
          scroll-margin-top: 88px;
        }

        .gd-mobile-menu {
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          z-index: 45;
          background: rgba(18, 20, 21, 0.96);
          border-bottom: 1px solid rgba(233, 193, 118, 0.2);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          transform: translateY(-12px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 250ms ease, transform 250ms ease;
          padding: 0.6rem 1rem 1rem;
        }

        .gd-mobile-menu.gd-open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .gd-mobile-menu a {
          display: block;
          padding: 0.7rem 0;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .gd-mobile-menu a.gd-active {
          color: #fbbf24;
          border-bottom-color: rgba(251, 191, 36, 0.5);
        }

        .gd-mobile-toggle {
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.02);
        }

        .px-8,
        .px-10,
        .px-12,
        .p-8,
        .p-10,
        .p-12 {
          padding-left: 1rem !important;
          padding-right: 1rem !important;
        }

        .py-\\[120px\\],
        .py-section-padding {
          padding-top: 4.5rem !important;
          padding-bottom: 4.5rem !important;
        }

        .pt-24,
        .pt-\\[92px\\],
        .pt-\\[120px\\] {
          padding-top: 5.5rem !important;
        }

        .grid {
          gap: 1rem !important;
        }

        .h-screen {
          min-height: 78vh !important;
          height: auto !important;
        }

        .aspect-\\[16\\/10\\],
        .aspect-\\[16\\/9\\],
        .aspect-\\[4\\/5\\],
        .aspect-\\[3\\/4\\] {
          aspect-ratio: auto !important;
        }

        form .grid.grid-cols-1.md\\:grid-cols-2,
        form .grid.grid-cols-2,
        form .grid.grid-cols-3 {
          grid-template-columns: 1fr !important;
        }
      }

      @media (min-width: 768px) and (max-width: 1100px) {
        nav > div {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }

        .text-display-xl,
        .font-display-xl {
          font-size: clamp(2.8rem, 6.2vw, 4.4rem) !important;
        }

        .text-headline-lg {
          font-size: clamp(2rem, 3.8vw, 2.5rem) !important;
        }

        .px-12 {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }
      }
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

  function setupMobileNav() {
    if (window.innerWidth >= 768) return;
    if (document.getElementById('gd-mobile-menu')) return;

    const nav = document.querySelector('nav');
    const navRow = nav ? nav.querySelector('div') : null;
    const desktopLinksWrap = nav ? nav.querySelector('.hidden.md\\:flex') : null;
    const ctaButton = navRow ? navRow.querySelector('button') : null;
    if (!nav || !navRow || !desktopLinksWrap || !ctaButton) return;

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'gd-mobile-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    toggle.innerHTML = '<span class="material-symbols-outlined">menu</span>';

    navRow.insertBefore(toggle, ctaButton);

    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'gd-mobile-menu';
    mobileMenu.className = 'gd-mobile-menu';

    const links = Array.from(desktopLinksWrap.querySelectorAll('a'));
    links.forEach((link) => {
      const clone = link.cloneNode(true);
      clone.className = '';
      if (link.classList.contains('text-amber-400')) clone.classList.add('gd-active');
      mobileMenu.appendChild(clone);
    });

    document.body.appendChild(mobileMenu);

    const closeMenu = () => {
      mobileMenu.classList.remove('gd-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    };

    toggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('gd-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.innerHTML = `<span class="material-symbols-outlined">${isOpen ? 'close' : 'menu'}</span>`;
    });

    mobileMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) closeMenu();
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
  installResponsiveStyles();
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

  setupMobileNav();
})();
