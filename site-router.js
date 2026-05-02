(function () {
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
