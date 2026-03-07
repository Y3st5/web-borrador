// ===== PRODUCTS DATABASE =====
const products = [
    {
        id: 1,
        name: "Cuchilla Circular HSS 90 x 25.4 x 1.2 mm",
        category: "industria-papel",
        image: "CUCHILLA CIRCULAR HSS.png",
        description: "Medidas: 90 x 25.4 x 1.2 mm. Recomendado para corte de papel, tubos de cartón.",
    },
    {
        id: 2,
        name: "Cuchilla Circular HSS 90 x 25.4 x 1.5 mm",
        category: "industria-papel",
        image: "CUCHILLA CIRCULAR HSS.png",
        description: "Medidas: 90 x 25.4 x 1.5 mm. Recomendado para corte de papel, tubos de cartón.",
    },
    {
        id: 3,
        name: "Cuchilla Circular Recubierto con Tungsteno 90 x 25.4 x 1.5 mm",
        category: "industria-papel",
        image: "CUCHILLA CIRCULAR RECUBIERTO CON TUGSTENO.png",
        description: "Medidas: 90 x 25.4 x 1.5 mm. Recomendado para corte de papel, tubos de cartón, tubos de plástico.",
    },
    {
        id: 4,
        name: "DOCTOR BLADE ",
        category: "industria-grafica",
        image: "DOCTOR BLADE.png",
        description: "Conocidas tambièn como raclas, cuchillas o rasquetas, son una pieza importante en la industria flexográfica. Disponibles en acero inoxidable, acero al carbono, con revestimiento cerámico y con recubrimiento especial. Con diferentes formas del filo de la cuchilla.y en variedad de medidas y espesores.",
    },
    {
        id: 5,
        name: "EJES DE ALUMINIO ANODIZADO",
        category: "industria-plastica",
        image: "EJES DE ALUMINIO ANODIZADO.png",
        description: "Livianos pero con una superficie dura resistente a la fricción. Usado en la industria plástica. Medidas: Ø50 mm x 2.00 m. Consultar por otras medidas.",
    },
    {
        id: 6,
        name: "DISPENSADORES DE ETIQUETAS AUTOADHESIVAS",
        category: "manufactura",
        image: "DISPENSADORES DE ETIQUETAS AUTOADHESIVAS.png",
        description: "Para uso industrial. No requiere herramientas y/o electricidad. Coloque el rollo, gire la manivela y la etiqueta queda a disposición del operador. Permite un trabajo limpio y ordenado. Ancho máximo: 105 mm.",
    },
    {
        id: 7,
        name: "CUCHILLAS DENTADAS",
        category: "industria-papel",
        image: "CUCHILLAS DENTADAS.jpg",
        description: "Cuchillas con filos dentados de diferentes medidas para uso en máquinas de embalaje de cajas.",
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
const mobileSearchInput = document.getElementById('mobileSearchInput');
const mobileSearchButton = document.getElementById('mobileSearchButton');

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
    
    // Mobile search event listeners
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', handleMobileSearch);
    }
    if (mobileSearchButton) {
        mobileSearchButton.addEventListener('click', handleMobileSearchButton);
    }
    
    filtersToggle.addEventListener('click', () => {
        filtersSidebar.classList.add('active');
    });
    filtersClose.addEventListener('click', () => {
        filtersSidebar.classList.remove('active');
    });
    
    document.getElementById('menuToggle')?.addEventListener('click', toggleMobileMenu);
    document.getElementById('mobileClose')?.addEventListener('click', closeMobileMenu);
    
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
        console.log('Click detected on productsGrid');
        const card = e.target.closest('.product-card');
        if (card) {
            console.log('Product card clicked');
            const productId = parseInt(card.dataset.productId);
            const product = products.find(p => p.id === productId);
            if (product) {
                console.log('Opening modal for product:', product.name);
                openModal(product);
            }
        }
    });
}

// ===== MODAL FUNCTIONS =====
function openModal(product) {
    // Populate modal with product data
    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalProductCategory.textContent = getCategoryLabel(product.category);
    modalProductName.textContent = product.name;
    modalProductDescription.textContent = product.description;
    modalProductId.textContent = `#${product.id.toString().padStart(4, '0')}`;
    modalProductCategoryName.textContent = getCategoryLabel(product.category);
    
    // Set WhatsApp link
    const whatsappMessage = `Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}%20(ID:%20${product.id})`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
    modalWhatsappBtn.href = whatsappUrl;
    
    // Show modal
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
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
        <div class="product-card" data-product-id="${product.id}">
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
    const searchValue = e.target.value.toLowerCase();
    currentFilter.searchQuery = searchValue;
    // Also sync with mobile search input
    if (mobileSearchInput) {
        mobileSearchInput.value = searchValue;
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
        categories: new Set(['industria-papel', 'industria-grafica', 'industria-plastica', 'manufactura']),
        searchQuery: ''
    };
    
    filterCheckboxes.forEach(cb => {
        cb.checked = true;
    });
    
    headerSearchInput.value = '';
    // Also clear mobile search input
    if (mobileSearchInput) {
        mobileSearchInput.value = '';
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

function toggleMobileMenu() {
    document.getElementById('menuToggle').classList.toggle('active');
    document.getElementById('navMobile').classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('menuToggle').classList.remove('active');
    document.getElementById('navMobile').classList.remove('active');
}

// ===== MOBILE SEARCH FUNCTIONS =====
function handleMobileSearch(e) {
    const searchValue = e.target.value.toLowerCase();
    currentFilter.searchQuery = searchValue;
    // Also sync with header search input
    if (headerSearchInput) {
        headerSearchInput.value = searchValue;
    }
    renderProducts();
}

function handleMobileSearchButton(e) {
    e.preventDefault();
    const searchValue = mobileSearchInput.value.toLowerCase();
    currentFilter.searchQuery = searchValue;
    // Also sync with header search input
    if (headerSearchInput) {
        headerSearchInput.value = searchValue;
    }
    renderProducts();
}
