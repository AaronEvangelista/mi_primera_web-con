const translations = {
    'nav-inicio': {
        'ca': '<i class="bi bi-house-door-fill"></i> Inici',
        'es': '<i class="bi bi-house-door-fill"></i> Inicio',
        'en': '<i class="bi bi-house-door-fill"></i> Home'
    },
    'nav-biblioteca': {
        'ca': '<i class="bi bi-book-fill"></i> Biblioteca',
        'es': '<i class="bi bi-book-fill"></i> Biblioteca',
        'en': '<i class="bi bi-book-fill"></i> Library'
    },
    'nav-contacto': {
        'ca': '<i class="bi bi-envelope-fill"></i> Contacte',
        'es': '<i class="bi bi-envelope-fill"></i> Contacto',
        'en': '<i class="bi bi-envelope-fill"></i> Contact'
    },
    'hero-titulo': {
        'ca': 'Power Botiga',
        'es': 'Power Tienda',
        'en': 'Power Store'
    },
    'hero-subtitulo': {
        'ca': 'El millor catàleg de jocs',
        'es': 'El mejor catálogo de juegos',
        'en': 'The best game catalog'
    },
    'ofertas-titulo': {
        'ca': 'Ofertes Exclusives',
        'es': 'Ofertas Exclusivas',
        'en': 'Exclusive Offers'
    },
    'ofertas-subtext': {
        'ca': 'Descomptes increïbles t\'esperen.',
        'es': 'Descuentos increíbles te esperan.',
        'en': 'Incredible discounts await you.'
    }
};

function setLanguage(lang) {
    for (let id in translations) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerHTML = translations[id][lang];
        }
    }
    savePreference(lang);
}

function savePreference(lang) {
    localStorage.setItem('userLang', lang);
}

document.getElementById('selector-idiomas').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const selectedLang = e.target.getAttribute('data-lang');
        setLanguage(selectedLang);
    }
});

function loadPreference() {
    let preferredLang = localStorage.getItem('userLang');
    if (!preferredLang) {
        preferredLang = 'es';
    }
    setLanguage(preferredLang);
}

window.onload = loadPreference;
