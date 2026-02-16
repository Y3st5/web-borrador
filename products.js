// ===== PRODUCTS DATABASE =====
const products = [
    {
        id: 1,
        name: "Eje de Transmisión Industrial",
        category: "ejes",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='50' y='130' width='200' height='40' fill='%231a1a2e'/%3E%3Ccircle cx='70' cy='150' r='25' fill='%23ff6b35'/%3E%3Ccircle cx='230' cy='150' r='25' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Eje de transmisión de alta precisión fabricado en acero aleado. Ideal para aplicaciones industriales de alta exigencia.",
    },
    {
        id: 2,
        name: "Engranaje Cilíndrico Recto",
        category: "engranajes",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Ccircle cx='150' cy='150' r='90' fill='%231a1a2e'/%3E%3Ccircle cx='150' cy='150' r='70' fill='%23f0f0f0'/%3E%3Cline x1='150' y1='80' x2='150' y2='50' stroke='%23ff6b35' stroke-width='8'/%3E%3Cline x1='210' y1='150' x2='240' y2='150' stroke='%23ff6b35' stroke-width='8'/%3E%3C/svg%3E",
        description: "Engranaje cilíndrico recto de precisión para sistemas de transmisión. Acabado templado y revenido.",
    },
    {
        id: 3,
        name: "Carcasa de Caja de Cambios",
        category: "carcasas",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='40' y='60' width='220' height='180' fill='%231a1a2e' rx='10'/%3E%3Crect x='60' y='80' width='180' height='140' fill='%23f0f0f0'/%3E%3Ccircle cx='90' cy='110' r='8' fill='%23ff6b35'/%3E%3Ccircle cx='210' cy='110' r='8' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Carcasa fundida de caja de cambios con acabado mecanizado CNC. Fabricada en fundición nodular.",
    },
    {
        id: 4,
        name: "Herramienta de Corte PVD",
        category: "herramientas",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Cpolygon points='150,50 250,250 50,250' fill='%231a1a2e'/%3E%3Cpolygon points='150,70 230,240 70,240' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Herramienta de corte recubierta con PVD para máquinas CNC. Recubrimiento TiN de alta duración.",
    },
    {
        id: 5,
        name: "Rodamiento Angular de Contacto",
        category: "consumibles",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Ccircle cx='150' cy='150' r='80' fill='%231a1a2e'/%3E%3Ccircle cx='150' cy='150' r='60' fill='%23f0f0f0'/%3E%3Ccircle cx='150' cy='150' r='40' fill='%231a1a2e'/%3E%3C/svg%3E",
        description: "Rodamiento de contacto angular de precisión clase ABEC-7. Ideal para aplicaciones de alta velocidad.",
    },
    {
        id: 6,
        name: "Espárrago Métrico M20",
        category: "consumibles",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='140' y='40' width='20' height='220' fill='%231a1a2e'/%3E%3Ccircle cx='150' cy='220' r='15' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Espárrago métrico M20 x 100 en acero inoxidable 304. Clase de resistencia 8.8.",
    },
    {
        id: 7,
        name: "Cilindro Neumático Doble Efecto",
        category: "ejes",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='60' y='120' width='180' height='60' fill='%231a1a2e' rx='30'/%3E%3Ccircle cx='80' cy='150' r='15' fill='%23ff6b35'/%3E%3Ccircle cx='220' cy='150' r='15' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Cilindro neumásuro doble efecto 40x200mm ISO 6432. Presión máxima 10 bar.",
    },
    {
        id: 8,
        name: "Placa Base de Precisión",
        category: "carcasas",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='40' y='80' width='220' height='140' fill='%231a1a2e'/%3E%3Ccircle cx='70' cy='100' r='6' fill='%23ff6b35'/%3E%3Ccircle cx='230' cy='100' r='6' fill='%23ff6b35'/%3E%3Ccircle cx='70' cy='200' r='6' fill='%23ff6b35'/%3E%3Ccircle cx='230' cy='200' r='6' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Placa base de precisión con cavidades mecanizadas. Fabricada en aluminio 7075 con acabado anodizado.",
    },
    {
        id: 9,
        name: "Fluido de Corte Sintético",
        category: "consumibles",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Cpath d='M150 50 Q180 120 180 200 Q180 240 150 250 Q120 240 120 200 Q120 120 150 50' fill='%231a1a2e'/%3E%3Cpath d='M150 70 Q170 120 170 200 Q170 235 150 242 Q130 235 130 200 Q130 120 150 70' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Fluido de corte sintético de alta performance. Presentación bidón de 20 litros.",
    },
    {
        id: 10,
        name: "Sensor de Proximidad Inductivo",
        category: "herramientas",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='100' y='80' width='100' height='140' fill='%231a1a2e' rx='8'/%3E%3Ccircle cx='150' cy='140' r='25' fill='%23ff6b35'/%3E%3Crect x='140' y='240' width='20' height='30' fill='%231a1a2e'/%3E%3C/svg%3E",
        description: "Sensor de proximidad inductivo M18 PNP DC 24V. Rango de detección 10mm.",
    },
    {
        id: 11,
        name: "Tuerca Nylon Autoblocante",
        category: "consumibles",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Cpolygon points='150,70 220,120 220,220 150,270 80,220 80,120' fill='%231a1a2e'/%3E%3Cpolygon points='150,90 200,130 200,210 150,250 100,210 100,130' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Tuerca nylon autoblocante M10 DIN 985. Acero inoxidable A2 de alta calidad.",
    },
    {
        id: 12,
        name: "Piñón de Accionamiento",
        category: "engranajes",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Ccircle cx='150' cy='150' r='60' fill='%231a1a2e'/%3E%3Ccircle cx='150' cy='150' r='40' fill='%23f0f0f0'/%3E%3Cline x1='150' y1='110' x2='150' y2='90' stroke='%23ff6b35' stroke-width='6'/%3E%3Cline x1='190' y1='150' x2='210' y2='150' stroke='%23ff6b35' stroke-width='6'/%3E%3C/svg%3E",
        description: "Piñón de accionamiento módulo 3. Fabricado en acero C45 con acabado rectificado.",
    },
    {
        id: 13,
        name: "Llave Dinamométrica Digital",
        category: "herramientas",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='120' y='50' width='60' height='150' fill='%231a1a2e' rx='10'/%3E%3Crect x='130' y='60' width='40' height='130' fill='%23ff6b35'/%3E%3Crect x='140' y='210' width='20' height='40' fill='%231a1a2e'/%3E%3C/svg%3E",
        description: "Llave dinamométrica digital 1/2\" 20-200 Nm. Pantalla LCD con memoria de 10 lecturas.",
    },
        {
        id: 14,
        name: "llantas de acero para camiones",
        category: "herramientas",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='120' y='50' width='60' height='150' fill='%231a1a2e' rx='10'/%3E%3Crect x='130' y='60' width='40' height='130' fill='%23ff6b35'/%3E%3Crect x='140' y='210' width='20' height='40' fill='%231a1a2e'/%3E%3C/svg%3E",
        description: "Llantas de acero para camiones de carga pesada. Disponibles en tamaños 17.5 y 22.5 pulgadas.",
    }

];














// WhatsApp number
const WHATSAPP_NUMBER = "51980088991";

// ===== STATE MANAGEMENT =====
let filteredProducts = [...products];
let currentFilter = {
    categories: new Set(['ejes', 'engranajes', 'carcasas', 'herramientas', 'consumibles']),
    searchQuery: ''
};

// ===== DOM ELEMENTS =====
const productsGrid = document.getElementById('productsGrid');
const noResults = document.getElementById('noResults');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');
const filterCheckboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');
const clearFilters = document.getElementById('clearFilters');
const filtersSidebar = document.getElementById('filtersSidebar');
const filtersToggle = document.getElementById('filtersToggle');
const filtersClose = document.getElementById('filtersClose');
const headerSearchInput = document.getElementById('headerSearchInput');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCategoryFilter);
    });
    
    clearFilters.addEventListener('click', resetFilters);
    sortSelect.addEventListener('change', handleSort);
    headerSearchInput.addEventListener('input', handleSearch);
    
    filtersToggle.addEventListener('click', () => {
        filtersSidebar.classList.add('active');
    });
    filtersClose.addEventListener('click', () => {
        filtersSidebar.classList.remove('active');
    });
    
    document.getElementById('menuToggle')?.addEventListener('click', toggleMobileMenu);
    document.getElementById('mobileClose')?.addEventListener('click', closeMobileMenu);
}

// ===== PRODUCT RENDERING =====
function renderProducts() {
    applyFilters();
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '';
        noResults.style.display = 'block';
        resultsCount.textContent = '0';
        return;
    }
    
    noResults.style.display = 'none';
    resultsCount.textContent = filteredProducts.length;
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const whatsappMessage = `Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
    
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-body">
                <div class="product-category">${getCategoryLabel(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <a href="${whatsappUrl}" target="_blank" class="btn-whatsapp">
                    <i class="fab fa-whatsapp"></i>
                     WhatsApp
                </a>
            </div>
        </div>
    `;
}

// ===== FILTER FUNCTIONS =====
function handleCategoryFilter(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (value === 'all') {
        if (isChecked) {
            filterCheckboxes.forEach(cb => {
                if (cb.value !== 'all') cb.checked = true;
                currentFilter.categories.add(cb.value);
            });
        } else {
            filterCheckboxes.forEach(cb => {
                if (cb.value !== 'all') cb.checked = false;
                currentFilter.categories.delete(cb.value);
            });
        }
    } else {
        if (isChecked) {
            currentFilter.categories.add(value);
        } else {
            currentFilter.categories.delete(value);
        }
        
        const allChecked = document.querySelectorAll('.filter-checkbox input[type="checkbox"]:not([value="all"])');
        const allCheckedItems = document.querySelectorAll('.filter-checkbox input[type="checkbox"]:not([value="all"]):checked');
        document.querySelector('[value="all"]').checked = allChecked.length === allCheckedItems.length;
    }
    
    renderProducts();
}

function handleSearch(e) {
    currentFilter.searchQuery = e.target.value.toLowerCase();
    renderProducts();
}

function applyFilters() {
    filteredProducts = products.filter(product => {
        if (!currentFilter.categories.has(product.category)) return false;
        
        if (currentFilter.searchQuery) {
            const query = currentFilter.searchQuery;
            if (!product.name.toLowerCase().includes(query) &&
                !product.description.toLowerCase().includes(query) &&
                !getCategoryLabel(product.category).toLowerCase().includes(query)) {
                return false;
            }
        }
        
        return true;
    });
    
    const sortValue = sortSelect.value;
    sortProducts(sortValue);
}

function sortProducts(sortValue) {
    switch(sortValue) {
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
}

function handleSort(e) {
    renderProducts();
}

function resetFilters() {
    currentFilter = {
        categories: new Set(['ejes', 'engranajes', 'carcasas', 'herramientas', 'consumibles']),
        searchQuery: ''
    };
    
    filterCheckboxes.forEach(cb => {
        cb.checked = true;
    });
    
    headerSearchInput.value = '';
    sortSelect.value = 'newest';
    
    renderProducts();
    filtersSidebar.classList.remove('active');
}

// ===== UTILITY FUNCTIONS =====
function getCategoryLabel(category) {
    const labels = {
        'ejes': 'Ejes y Componentes',
        'engranajes': 'Engranajes',
        'carcasas': 'Carcasas',
        'herramientas': 'Herramientas',
        'consumibles': 'Consumibles'
    };
    return labels[category] || category;
}

function toggleMobileMenu() {
    document.getElementById('menuToggle').classList.toggle('active');
    document.getElementById('navMobile').classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('menuToggle').classList.remove('active');
    document.getElementById('navMobile').classList.remove('active');
}
