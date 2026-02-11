// ===== PRODUCTS DATABASE =====
const products = [
    {
        id: 1,
        name: "Eje de Transmisión Industrial",
        category: "ejes",
        price: 2500,
        originalPrice: 3000,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='50' y='130' width='200' height='40' fill='%231a1a2e'/%3E%3Ccircle cx='70' cy='150' r='25' fill='%23ff6b35'/%3E%3Ccircle cx='230' cy='150' r='25' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Eje de transmisión de alta precisión fabricado en acero aleado",
        rating: 4.8,
        reviews: 125,
        inStock: true,
        stockQuantity: 45,
        specifications: {
            "Diámetro": "50mm",
            "Longitud": "500mm",
            "Material": "Acero AISI 4340",
            "Tolerancia": "±0.05mm"
        }
    },
    {
        id: 2,
        name: "Engranaje Cilíndrico Recto",
        category: "engranajes",
        price: 1800,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Ccircle cx='150' cy='150' r='90' fill='%231a1a2e'/%3E%3Ccircle cx='150' cy='150' r='70' fill='%23f0f0f0'/%3E%3Cline x1='150' y1='80' x2='150' y2='50' stroke='%23ff6b35' stroke-width='8'/%3E%3Cline x1='210' y1='150' x2='240' y2='150' stroke='%23ff6b35' stroke-width='8'/%3E%3C/svg%3E",
        description: "Engranaje cilíndrico recto de precisión para sistemas de transmisión",
        rating: 4.6,
        reviews: 89,
        inStock: true,
        stockQuantity: 32,
        specifications: {
            "Módulo": "4",
            "Dientes": "25",
            "Material": "Acero C45",
            "Acabado": "Templado y revenido"
        }
    },
    {
        id: 3,
        name: "Carcasa de Caja de Cambios",
        category: "carcasas",
        price: 5200,
        originalPrice: 6500,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='40' y='60' width='220' height='180' fill='%231a1a2e' rx='10'/%3E%3Crect x='60' y='80' width='180' height='140' fill='%23f0f0f0'/%3E%3Ccircle cx='90' cy='110' r='8' fill='%23ff6b35'/%3E%3Ccircle cx='210' cy='110' r='8' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Carcasa fundida de caja de cambios con acabado mecanizado",
        rating: 4.7,
        reviews: 56,
        inStock: true,
        stockQuantity: 12,
        specifications: {
            "Peso": "45kg",
            "Material": "Fundición nodular",
            "Acabado": "Mecanizado CNC",
            "Tolerancia": "±0.1mm"
        }
    },
    {
        id: 4,
        name: "Herramienta de Corte PVD",
        category: "herramientas",
        price: 450,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Cpolygon points='150,50 250,250 50,250' fill='%231a1a2e'/%3E%3Cpolygon points='150,70 230,240 70,240' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Herramienta de corte recubierta con PVD para máquinas CNC",
        rating: 4.9,
        reviews: 203,
        inStock: true,
        stockQuantity: 150,
        specifications: {
            "Tipo": "Fresa cilíndrica",
            "Diámetro": "10mm",
            "Recubrimiento": "TiN",
            "Vida útil": "500 horas"
        }
    },
    {
        id: 5,
        name: "Rodamiento Angular de Contacto",
        category: "consumibles",
        price: 350,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Ccircle cx='150' cy='150' r='80' fill='%231a1a2e'/%3E%3Ccircle cx='150' cy='150' r='60' fill='%23f0f0f0'/%3E%3Ccircle cx='150' cy='150' r='40' fill='%231a1a2e'/%3E%3C/svg%3E",
        description: "Rodamiento de contacto angular de precisión clase ABEC-7",
        rating: 4.5,
        reviews: 176,
        inStock: true,
        stockQuantity: 200,
        specifications: {
            "Tipo": "7010 AC",
            "Diámetro interior": "50mm",
            "Diámetro exterior": "80mm",
            "Ancho": "16mm"
        }
    },
    {
        id: 6,
        name: "Espárrago Métrico M20",
        category: "consumibles",
        price: 85,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='140' y='40' width='20' height='220' fill='%231a1a2e'/%3E%3Ccircle cx='150' cy='220' r='15' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Espárrago métrico M20 x 100 en acero inoxidable 304",
        rating: 4.4,
        reviews: 324,
        inStock: true,
        stockQuantity: 500,
        specifications: {
            "Métrica": "M20",
            "Longitud": "100mm",
            "Material": "Acero inoxidable 304",
            "Clase": "8.8"
        }
    },
    {
        id: 7,
        name: "Cilindro Neumático Doble Efecto",
        category: "ejes",
        price: 1200,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='60' y='120' width='180' height='60' fill='%231a1a2e' rx='30'/%3E%3Ccircle cx='80' cy='150' r='15' fill='%23ff6b35'/%3E%3Ccircle cx='220' cy='150' r='15' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Cilindro neumático doble efecto 40x200mm ISO 6432",
        rating: 4.7,
        reviews: 98,
        inStock: true,
        stockQuantity: 28,
        specifications: {
            "Diámetro": "40mm",
            "Carrera": "200mm",
            "Presión": "10 bar",
            "Puerto": "M5"
        }
    },
    {
        id: 8,
        name: "Placa Base de Precisión",
        category: "carcasas",
        price: 3800,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='40' y='80' width='220' height='140' fill='%231a1a2e'/%3E%3Ccircle cx='70' cy='100' r='6' fill='%23ff6b35'/%3E%3Ccircle cx='230' cy='100' r='6' fill='%23ff6b35'/%3E%3Ccircle cx='70' cy='200' r='6' fill='%23ff6b35'/%3E%3Ccircle cx='230' cy='200' r='6' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Placa base de precisión con cavidades mecanizadas",
        rating: 4.8,
        reviews: 45,
        inStock: false,
        stockQuantity: 0,
        specifications: {
            "Dimensiones": "500x400x50mm",
            "Material": "Aluminio 7075",
            "Planitud": "±0.05mm",
            "Acabado": "Anodizado"
        }
    },
    {
        id: 9,
        name: "Fluido de Corte Sintético",
        category: "consumibles",
        price: 280,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Cpath d='M150 50 Q180 120 180 200 Q180 240 150 250 Q120 240 120 200 Q120 120 150 50' fill='%231a1a2e'/%3E%3Cpath d='M150 70 Q170 120 170 200 Q170 235 150 242 Q130 235 130 200 Q130 120 150 70' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Fluido de corte sintético de alta performance para fresado y torneado",
        rating: 4.3,
        reviews: 67,
        inStock: true,
        stockQuantity: 85,
        specifications: {
            "Presentación": "Bidón 20L",
            "Viscosidad": "ISO VG 32",
            "Densidad": "0.87 g/cm³",
            "Vida útil": "6 meses"
        }
    },
    {
        id: 10,
        name: "Sensor de Proximidad Inductivo",
        category: "herramientas",
        price: 320,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Crect x='100' y='80' width='100' height='140' fill='%231a1a2e' rx='8'/%3E%3Ccircle cx='150' cy='140' r='25' fill='%23ff6b35'/%3E%3Crect x='140' y='240' width='20' height='30' fill='%231a1a2e'/%3E%3C/svg%3E",
        description: "Sensor de proximidad inductivo M18 PNP DC 24V",
        rating: 4.6,
        reviews: 112,
        inStock: true,
        stockQuantity: 65,
        specifications: {
            "Tipo": "Inductivo",
            "Tamaño": "M18",
            "Tensión": "DC 24V",
            "Rango": "10mm"
        }
    },
    {
        id: 11,
        name: "Tuerca Nylon Autoblocante",
        category: "consumibles",
        price: 45,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Cpolygon points='150,70 220,120 220,220 150,270 80,220 80,120' fill='%231a1a2e'/%3E%3Cpolygon points='150,90 200,130 200,210 150,250 100,210 100,130' fill='%23ff6b35'/%3E%3C/svg%3E",
        description: "Tuerca nylon autoblocante M10 DIN 985 acero inoxidable",
        rating: 4.5,
        reviews: 445,
        inStock: true,
        stockQuantity: 1200,
        specifications: {
            "Métrica": "M10",
            "Material": "Acero inoxidable A2",
            "Tipo": "Autoblocante",
            "Estándar": "DIN 985"
        }
    },
    {
        id: 12,
        name: "Piñón de Accionamiento",
        category: "engranajes",
        price: 950,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Ccircle cx='150' cy='150' r='60' fill='%231a1a2e'/%3E%3Ccircle cx='150' cy='150' r='40' fill='%23f0f0f0'/%3E%3Cline x1='150' y1='110' x2='150' y2='90' stroke='%23ff6b35' stroke-width='6'/%3E%3Cline x1='190' y1='150' x2='210' y2='150' stroke='%23ff6b35' stroke-width='6'/%3E%3C/svg%3E",
        description: "Piñón de accionamiento módulo 3 fabricado en acero mecanizado",
        rating: 4.7,
        reviews: 78,
        inStock: true,
        stockQuantity: 35,
        specifications: {
            "Módulo": "3",
            "Dientes": "20",
            "Material": "Acero C45",
            "Acabado": "Rectificado"
        }
    },
    {
        id: 13,
        name: "prueba 1",
        category: "engranajes",
        price: 100,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Ccircle cx='150' cy='150' r='60' fill='%231a1a2e'/%3E%3Ccircle cx='150' cy='150' r='40' fill='%23f0f0f0'/%3E%3Cline x1='150' y1='110' x2='150' y2='90' stroke='%23ff6b35' stroke-width='6'/%3E%3Cline x1='190' y1='150' x2='210' y2='150' stroke='%23ff6b35' stroke-width='6'/%3E%3C/svg%3E",
        description: "Piñón de accionamiento módulo 3 fabricado en acero mecanizado",
        rating: 4.7,
        reviews: 78,
        inStock: true,
        stockQuantity: 35,
        specifications: {   
            "Módulo": "3",
            "Dientes": "20",
            "Material": "Acero C45",
            "Acabado": "Rectificado"
        }
    }
];

// ===== STATE MANAGEMENT =====
let cart = [];
let filteredProducts = [...products];
let currentFilter = {
    categories: new Set(['ejes', 'engranajes', 'carcasas', 'herramientas', 'consumibles']),
    priceMin: 0,
    priceMax: 50000,
    inStockOnly: false,
    searchQuery: ''
};

// ===== DOM ELEMENTS =====
const productsGrid = document.getElementById('productsGrid');
const noResults = document.getElementById('noResults');
const cartButton = document.getElementById('cartButton');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartCount = document.getElementById('cartCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartIGV = document.getElementById('cartIGV');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');
const filterCheckboxes = document.querySelectorAll('.filter-checkbox input[type="checkbox"]');
const priceMinInput = document.getElementById('priceMin');
const priceMaxInput = document.getElementById('priceMax');
const applyPriceFilter = document.getElementById('applyPriceFilter');
const clearFilters = document.getElementById('clearFilters');
const inStockCheckbox = document.getElementById('inStockOnly');
const filtersSidebar = document.getElementById('filtersSidebar');
const filtersToggle = document.getElementById('filtersToggle');
const filtersClose = document.getElementById('filtersClose');
const headerSearchInput = document.getElementById('headerSearchInput');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
    loadCartFromStorage();
});

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Cart
    cartButton.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    
    // Filters
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCategoryFilter);
    });
    applyPriceFilter.addEventListener('click', handlePriceFilter);
    clearFilters.addEventListener('click', resetFilters);
    inStockCheckbox.addEventListener('change', handleStockFilter);
    
    // Sorting
    sortSelect.addEventListener('change', handleSort);
    
    // Modal
    modalClose.addEventListener('click', closeModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
    });
    
    // Search
    headerSearchInput.addEventListener('input', handleSearch);
    
    // Mobile filters
    filtersToggle.addEventListener('click', () => {
        filtersSidebar.classList.add('active');
    });
    filtersClose.addEventListener('click', () => {
        filtersSidebar.classList.remove('active');
    });
    
    // Mobile menu close
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
    
    // Attach event listeners to product cards
    document.querySelectorAll('.btn-view-product').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openProductModal(parseInt(btn.dataset.productId));
        });
    });
    
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(btn.dataset.productId), 1);
        });
    });
    
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            openProductModal(parseInt(card.dataset.productId));
        });
    });
}

function createProductCard(product) {
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    const stars = Array(5).fill(0).map((_, i) => 
        `<span class="star">${i < Math.floor(product.rating) ? '★' : '☆'}</span>`
    ).join('');
    
    let stockBadgeHTML = '';
    if (product.inStock) {
        if (product.stockQuantity <= 10) {
            stockBadgeHTML = `<div class="product-stock-badge low-stock">Pocas unidades</div>`;
        } else {
            stockBadgeHTML = `<div class="product-stock-badge">En Stock</div>`;
        }
    } else {
        stockBadgeHTML = `<div class="product-stock-badge out-of-stock">Agotado</div>`;
    }
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${discount > 0 ? `<div class="product-badge discount">-${discount}%</div>` : ''}
                ${stockBadgeHTML}
            </div>
            <div class="product-body">
                <div class="product-category">${getCategoryLabel(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span>(${product.reviews})</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="price">S/. ${product.price.toLocaleString('es-PE', {minimumFractionDigits: 2})}</span>
                    ${product.originalPrice ? `<span class="original-price">S/. ${product.originalPrice.toLocaleString('es-PE', {minimumFractionDigits: 2})}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn-view-product" data-product-id="${product.id}">Ver Detalles</button>
                    <button class="btn-add-cart" data-product-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Agregar al Carrito' : 'Agotado'}
                    </button>
                </div>
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

function handlePriceFilter() {
    const min = parseFloat(priceMinInput.value) || 0;
    const max = parseFloat(priceMaxInput.value) || 50000;
    
    if (min > max) {
        alert('El precio mínimo no puede ser mayor al precio máximo');
        return;
    }
    
    currentFilter.priceMin = min;
    currentFilter.priceMax = max;
    renderProducts();
    filtersSidebar.classList.remove('active');
}

function handleStockFilter(e) {
    currentFilter.inStockOnly = e.target.checked;
    renderProducts();
}

function handleSearch(e) {
    currentFilter.searchQuery = e.target.value.toLowerCase();
    renderProducts();
}

function applyFilters() {
    filteredProducts = products.filter(product => {
        // Category filter
        if (!currentFilter.categories.has(product.category)) return false;
        
        // Price filter
        if (product.price < currentFilter.priceMin || product.price > currentFilter.priceMax) return false;
        
        // Stock filter
        if (currentFilter.inStockOnly && !product.inStock) return false;
        
        // Search filter
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
    
    // Apply sorting
    const sortValue = sortSelect.value;
    sortProducts(sortValue);
}

function sortProducts(sortValue) {
    switch(sortValue) {
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'popularity':
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
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
        priceMin: 0,
        priceMax: 50000,
        inStockOnly: false,
        searchQuery: ''
    };
    
    filterCheckboxes.forEach(cb => {
        if (cb.value === 'all' || cb.value !== 'all') {
            cb.checked = true;
        }
    });
    
    priceMinInput.value = '0';
    priceMaxInput.value = '50000';
    inStockCheckbox.checked = false;
    headerSearchInput.value = '';
    sortSelect.value = 'newest';
    
    renderProducts();
    filtersSidebar.classList.remove('active');
}

// ===== PRODUCT MODAL =====
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductImage').alt = product.name;
    document.getElementById('modalProductPrice').textContent = `S/. ${product.price.toLocaleString('es-PE', {minimumFractionDigits: 2})}`;
    document.getElementById('modalProductDescription').innerHTML = `<p>${product.description}</p>`;
    document.getElementById('quantityInput').value = '1';
    document.getElementById('modalAddCart').dataset.productId = productId;
    
    // Rating
    const stars = Array(5).fill(0).map((_, i) => 
        `<span class="star">${i < Math.floor(product.rating) ? '★' : '☆'}</span>`
    ).join('');
    document.getElementById('modalProductRating').innerHTML = stars;
    document.getElementById('modalProductReviews').textContent = `(${product.reviews} reseñas)`;
    
    // Stock
    let stockHTML = '';
    if (product.inStock) {
        stockHTML = `<div class="product-stock in-stock">✓ En stock</div>`;
    } else {
        stockHTML = `<div class="product-stock out-of-stock">✗ Agotado</div>`;
    }
    document.getElementById('modalProductStock').innerHTML = stockHTML;
    
    // Specifications
    let specsHTML = '';
    for (const [key, value] of Object.entries(product.specifications)) {
        specsHTML += `<div class="spec-item"><span class="spec-label">${key}:</span><span class="spec-value">${value}</span></div>`;
    }
    document.getElementById('modalProductSpecs').innerHTML = specsHTML;
    
    // Original price
    const originalPriceEl = document.getElementById('modalProductOriginalPrice');
    if (product.originalPrice) {
        originalPriceEl.textContent = `S/. ${product.originalPrice.toLocaleString('es-PE', {minimumFractionDigits: 2})}`;
        originalPriceEl.style.display = 'inline';
    } else {
        originalPriceEl.style.display = 'none';
    }
    
    productModal.classList.add('active');
}

function closeModal() {
    productModal.classList.remove('active');
}

document.getElementById('modalAddCart')?.addEventListener('click', () => {
    const productId = parseInt(document.getElementById('modalAddCart').dataset.productId);
    const quantity = parseInt(document.getElementById('quantityInput').value);
    addToCart(productId, quantity);
    closeModal();
});

document.getElementById('quantityPlus')?.addEventListener('click', () => {
    const input = document.getElementById('quantityInput');
    input.value = parseInt(input.value) + 1;
});

document.getElementById('quantityMinus')?.addEventListener('click', () => {
    const input = document.getElementById('quantityInput');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
});

// ===== CART FUNCTIONS =====
function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCartToStorage();
    updateCart();
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCart();
}

function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCartToStorage();
        updateCart();
    }
}

function updateCart() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartEmpty.style.display = 'flex';
        return;
    }
    
    cartEmpty.style.display = 'none';
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">S/. ${item.price.toLocaleString('es-PE', {minimumFractionDigits: 2})}</div>
                <div class="cart-item-quantity">
                    <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})" style="padding: 4px 8px; background: none; border: 1px solid #ccc; cursor: pointer;">-</button>
                    <span style="margin: 0 8px;">${item.quantity}</span>
                    <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})" style="padding: 4px 8px; background: none; border: 1px solid #ccc; cursor: pointer;">+</button>
                </div>
                <span class="cart-item-remove" onclick="removeFromCart(${item.id})">Eliminar</span>
            </div>
        </div>
    `).join('');
    
    updateCartTotals();
}

function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const igv = subtotal * 0.18;
    const total = subtotal + igv;
    
    cartSubtotal.textContent = `S/. ${subtotal.toLocaleString('es-PE', {minimumFractionDigits: 2})}`;
    cartIGV.textContent = `S/. ${igv.toLocaleString('es-PE', {minimumFractionDigits: 2})}`;
    cartTotalPrice.textContent = `S/. ${total.toLocaleString('es-PE', {minimumFractionDigits: 2})}`;
}

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

document.getElementById('continueShopping')?.addEventListener('click', () => {
    closeCart();
    filtersSidebar.classList.remove('active');
});

document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (cart.length === 0) return;
    alert('Función de checkout: Redirigir a pasarela de pago. Carrito:\n' + 
          cart.map(item => `${item.name} x ${item.quantity}`).join('\n'));
});

// ===== LOCAL STORAGE =====
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
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
