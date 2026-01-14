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
    },
    'biblioteca-titulo': {
        'ca': 'Biblioteca de Jocs',
        'es': 'Biblioteca de Juegos',
        'en': 'Game Library'
    },
    'precios-titulo': {
        'ca': 'Preus Destacats',
        'es': 'Precios Destacados',
        'en': 'Featured Prices'
    },
    'tabla-juego': {
        'ca': 'Joc',
        'es': 'Juego',
        'en': 'Game'
    },
    'tabla-plataforma': {
        'ca': 'Plataforma',
        'es': 'Plataforma',
        'en': 'Platform'
    },
    'tabla-precio': {
        'ca': 'Preu (€)',
        'es': 'Precio (€)',
        'en': 'Price (€)'
    },
    'contacto-titulo': {
        'ca': 'Contacta\'ns',
        'es': 'Contactanos',
        'en': 'Contact Us'
    },
    'contacto-nombre': {
        'ca': 'Nom',
        'es': 'Nombre',
        'en': 'Name'
    },
    'contacto-email': {
        'ca': 'Correu',
        'es': 'Correo',
        'en': 'Email'
    },
    'contacto-mensaje': {
        'ca': 'Missatge',
        'es': 'Mensaje',
        'en': 'Message'
    },
    'contacto-enviar': {
        'ca': 'Enviar Missatge',
        'es': 'Enviar Mensaje',
        'en': 'Send Message'
    },
    'contacto-info-titulo': {
        'ca': 'Informació de Contacte',
        'es': 'Información de Contacto',
        'en': 'Contact Information'
    },
    'contacto-correo': {
        'ca': 'Correu:',
        'es': 'Correo:',
        'en': 'Email:'
    },
    'contacto-telefono': {
        'ca': 'Telèfon:',
        'es': 'Teléfono:',
        'en': 'Phone:'
    },
    'contacto-direccion': {
        'ca': 'Adreça:',
        'es': 'Dirección:',
        'en': 'Address:'
    },
    'footer-descripcion': {
        'ca': 'Portant l\'experiència gaming al següent nivell. Troba els millors títols i ofertes exclusives en un sol lloc.',
        'es': 'Llevando la experiencia gaming al siguiente nivel. Encuentra los mejores títulos y ofertas exclusivas en un solo lugar.',
        'en': 'Taking the gaming experience to the next level. Find the best titles and exclusive offers in one place.'
    },
    'footer-navegacion': {
        'ca': 'Navegació',
        'es': 'Navegación',
        'en': 'Navigation'
    },
    'footer-redes': {
        'ca': 'Xarxes Socials',
        'es': 'Redes Sociales',
        'en': 'Social Networks'
    },
    'footer-derechos': {
        'ca': '© 2025 Ilerna Tots els drets reservats.',
        'es': '© 2025 Ilerna Todos los derechos reservados.',
        'en': '© 2025 Ilerna All rights reserved.'
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
