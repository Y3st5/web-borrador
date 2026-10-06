// ===== PRODUCTS DATABASE =====
const products = [
    {
        id: 1,
        name: "Cuchilla Circular HSS 90 x 25.4 x 1.2 mm",
        category: "industria-papel",
        image: "img/cuchilla-circular-hss.webp",
        description: "Medidas: 90 x 25.4 x 1.2 mm. Recomendado para corte de papel, tubos de cartón.",
        fullDescription: [
            "Medidas: 90 x 25.4 x 1.2 mm.",
            "Recomendado para corte de papel, tubos de cartón."
        ]
    },
    {
        id: 2,
        name: "Cuchilla Circular HSS 90 x 25.4 x 1.5 mm",
        category: "industria-papel",
        image: "img/cuchilla-circular-hss.webp",
        description: "Medidas: 90 x 25.4 x 1.5 mm. Recomendado para corte de papel, tubos de cartón.",
        fullDescription: [
            "Medidas: 90 x 25.4 x 1.5 mm.",
            "Recomendado para corte de papel, tubos de cartón."
        ]
    },
    {
        id: 3,
        name: "Cuchilla Circular Recubierto con Tungsteno 90 x 25.4 x 1.5 mm",
        category: "industria-papel",
        image: "img/cuchilla-circular-recubierto-con-tungsteno.webp",
        description: "Medidas: 90 x 25.4 x 1.5 mm. Recomendado para corte de papel, tubos de cartón, tubos de plástico.",
        fullDescription: [
            "Medidas: 90 x 25.4 x 1.5 mm.",
            "Recomendado para corte de papel, tubos de cartón, tubos de plástico."
        ]
    },
    {
        id: 4,
        name: "DOCTOR BLADE",
        category: "industria-grafica",
        image: "img/doctor-blade.webp",
        description: "Conocidas también como raclas, cuchillas o rasquetas, son una pieza importante en la industria flexográfica. Disponibles en acero inoxidable, acero al carbono, con revestimiento cerámico y con recubrimiento especial. Con diferentes formas del filo de la cuchilla y en variedad de medidas y espesores.",
        fullDescription: [
            "Conocidas también como raclas, cuchillas o rasquetas, son una pieza importante en la industria flexográfica.",
            "Disponibles en acero inoxidable, acero al carbono, con revestimiento cerámico y con recubrimiento especial.",
            "Con diferentes formas del filo de la cuchilla y en variedad de medidas y espesores."
        ]
    },
    {
        id: 5,
        name: "EJES DE ALUMINIO ANODIZADO",
        category: "industria-plastica",
        image: "img/ejes-de-aluminio-anodizado.webp",
        description: "Livianos pero con una superficie dura resistente a la fricción. Usado en la industria plástica. Medidas: Ø50 mm x 2.00 m. Consultar por otras medidas.",
        fullDescription: [
            "Livianos pero con una superficie dura resistente a la fricción. Usado en la industria plástica.",
            "Medidas: Ø50 mm x 2.00 m.",
            "Consultar por otras medidas."
        ]
    },
    {
        id: 6,
        name: "DISPENSADORES DE ETIQUETAS AUTOADHESIVAS",
        category: "manufactura",
        image: "img/dispensadores-de-etiquetas-autoadhesivas.webp",
        description: "Para uso industrial. No requiere herramientas y/o electricidad. Coloque el rollo, gire la manivela y la etiqueta queda a disposición del operador. Permite un trabajo limpio y ordenado. Ancho máximo: 105 mm.",
        fullDescription: [
            "Para uso industrial. No requiere herramientas y/o electricidad.",
            "Coloque el rollo, gire la manivela y la etiqueta queda a disposición del operador.",
            "Permite un trabajo limpio y ordenado.",
            "Ancho máximo: 105 mm."
        ]
    },
    {
        id: 7,
        name: "CUCHILLAS DENTADAS",
        category: "industria-papel",
        image: "img/cuchillas-dentadas.webp",
        description: "Cuchillas con filos dentados de diferentes medidas para uso en máquinas de embalaje de cajas.",
        fullDescription: [
            "Cuchillas con filos dentados de diferentes medidas para uso en máquinas de embalaje de cajas."
        ]
    }
];

// WhatsApp number
const WHATSAPP_NUMBER = "51980088991";

// ===== STATE MANAGEMENT =====
let filteredProducts = [...products];
let currentFilter = {
    categories: new Set(['industria-papel', 'industria-grafica', 'industria-plastica', 'manufactura']),
    searchQuery: ''
};
let lastFocusedElement = null;

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
const searchFilterInput = document.querySelector('.search-filter-input');

// Modal Elements
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalProductImage = document.getElementById('modalProductImage');
const modalProductCategory = document.getElementById('modalProductCategory');
const modalProductName = document.getElementById('modalProductName');
const modalProductDescription = document.getElementById('modalProductDescription');
const modalProductId = document.getElementById('modalProductId');
const modalProductCategoryName = document.getElementById('modalProductCategoryName');
const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    readUrlQuery();
    renderProducts();
    setupEventListeners();
});

// ===== URL QUERY (búsqueda desde el header/menú de otras páginas) =====
function readUrlQuery() {
    const params = new URLSearchParams(window.location.search);
    const q = (params.get('q') || '').trim();
    if (!q) return;
    currentFilter.searchQuery = q.toLowerCase();
    syncSearchInputs(q);
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCategoryFilter);
    });

    clearFilters.addEventListener('click', resetFilters);
    sortSelect.addEventListener('change', handleSort);
    if (searchFilterInput) {
        searchFilterInput.addEventListener('input', (e) => setSearchQuery(e.target.value));
    }

    document.querySelectorAll('.mobile-search').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('.search-input');
            setSearchQuery(input ? input.value : '');
        });
    });

    filtersToggle.addEventListener('click', () => {
        filtersSidebar.classList.add('active');
    });
    filtersClose.addEventListener('click', () => {
        filtersSidebar.classList.remove('active');
    });

    // Modal event listeners
    modalClose.addEventListener('click', closeModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && productModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Product card click delegation
    productsGrid.addEventListener('click', function(e) {
        const card = e.target.closest('.product-card');
        if (!card) return;
        const productId = parseInt(card.dataset.productId, 10);
        const product = products.find(p => p.id === productId);
        if (product) {
            openModal(product);
        }
    });
}

// ===== SEARCH SYNC =====
function syncSearchInputs(value) {
    if (searchFilterInput) {
        searchFilterInput.value = value;
    }
    document.querySelectorAll('.mobile-search .search-input').forEach(input => {
        input.value = value;
    });
}

function setSearchQuery(value) {
    currentFilter.searchQuery = value.toLowerCase();
    syncSearchInputs(value);
    renderProducts();
}

// ===== MODAL FUNCTIONS =====
function openModal(product) {
    lastFocusedElement = document.activeElement;

    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalProductCategory.textContent = getCategoryLabel(product.category);
    modalProductName.textContent = product.name;

    if (product.fullDescription) {
        modalProductDescription.innerHTML = product.fullDescription.map(line => `<p>${line}</p>`).join('');
    } else {
        modalProductDescription.textContent = product.description;
    }

    modalProductId.textContent = `#${product.id.toString().padStart(4, '0')}`;
    modalProductCategoryName.textContent = getCategoryLabel(product.category);

    const whatsappMessage = `Hola, me interesa el producto: ${product.name} (ID: ${product.id})`;
    modalWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    productModal.classList.add('active');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
}

function closeModal() {
    productModal.classList.remove('active');
    productModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement && lastFocusedElement.focus) {
        lastFocusedElement.focus();
    }
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

const PRODUCT_IMAGE_DIMENSIONS = {
    'cuchilla-circular-hss.webp': ['217', '210'],
    'cuchilla-circular-recubierto-con-tungsteno.webp': ['218', '212'],
    'doctor-blade.webp': ['594', '444'],
    'ejes-de-aluminio-anodizado.webp': ['197', '69'],
    'dispensadores-de-etiquetas-autoadhesivas.webp': ['511', '534'],
    'cuchillas-dentadas.webp': ['384', '512']
};

function getImageDimensions(image) {
    const fileName = image.split('/').pop();
    return PRODUCT_IMAGE_DIMENSIONS[fileName] || ['', ''];
}

function createProductCard(product) {
    const whatsappMessage = `Hola, me interesa el producto: ${product.name}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    const dimensions = getImageDimensions(product.image);

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" width="${dimensions[0]}" height="${dimensions[1]}" loading="lazy" decoding="async">
            </div>
            <div class="product-body">
                <div class="product-category">${getCategoryLabel(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                    <i class="fab fa-whatsapp" aria-hidden="true"></i>
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

    sortProducts(sortSelect.value);
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

function handleSort() {
    renderProducts();
}

function resetFilters() {
    currentFilter = {
        categories: new Set(['industria-papel', 'industria-grafica', 'industria-plastica', 'manufactura']),
        searchQuery: ''
    };

    filterCheckboxes.forEach(cb => {
        cb.checked = true;
    });

    if (searchFilterInput) {
        searchFilterInput.value = '';
    }
    sortSelect.value = 'newest';

    renderProducts();
    filtersSidebar.classList.remove('active');
}

// ===== UTILITY FUNCTIONS =====
function getCategoryLabel(category) {
    const labels = {
        'industria-papel': 'Industria del Papel',
        'industria-grafica': 'Industria Gráfica',
        'industria-plastica': 'Industria Plástica',
        'manufactura': 'Manufactura'
    };
    return labels[category] || category;
}