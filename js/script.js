/**
 * ID CAR KEY - Automotive Key Specialist
 * Vanilla JavaScript Interactivity
 */

// Sample Product Data
const productsData = [
    {
        id: 1,
        title: "Keyless Toyota All New Avanza",
        category: "mobil",
        compat: "Compatible: Avanza, Veloz, Rush",
        price: 1250000,
        image: "assets/images/prod-avanza.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 2,
        title: "Keyless Honda HR-V",
        category: "mobil",
        compat: "Compatible: HR-V, BR-V, CR-V",
        price: 1350000,
        image: "assets/images/prod-hrv.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 3,
        title: "Keyless Yamaha NMAX",
        category: "motor",
        compat: "Compatible: NMAX, Aerox, Lexi",
        price: 850000,
        image: "assets/images/prod-nmax.jpg",
        badge: "Keyless Motor"
    },
    {
        id: 4,
        title: "Keyless Honda Beat",
        category: "motor",
        compat: "Compatible: Beat, Scoopy, Genio",
        price: 750000,
        image: "assets/images/prod-beat.jpg",
        badge: "Keyless Motor"
    },
    {
        id: 5,
        title: "Keyless Mitsubishi Pajero",
        category: "mobil",
        compat: "Compatible: Pajero Sport, Triton",
        price: 1450000,
        image: "assets/images/prod-pajero.jpg",
        badge: "Keyless Mobil"
    }
];

// App State
let cart = JSON.parse(localStorage.getItem('IDCKEY_CART')) || [];

// Helper: Format Rupiah
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
}

// DOM Loaded Initialization
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    renderProducts('all');
    initProductFilters();
    initFAQ();
    initCart();
    initSearch();
});

/* --------------------------------------------------------------------------
   1. HEADER & STICKY NAV
   -------------------------------------------------------------------------- */
function initHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* --------------------------------------------------------------------------
   2. MOBILE HAMBURGER MENU
   -------------------------------------------------------------------------- */
function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('open');
        });
    });
}

/* --------------------------------------------------------------------------
   3. PRODUCT RENDER & FILTERING
   -------------------------------------------------------------------------- */
function renderProducts(filter = 'all') {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    const filtered = filter === 'all' 
        ? productsData 
        : productsData.filter(p => p.category === filter);

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-box">
                <span class="product-badge">${p.badge}</span>
                <img src="${p.image}" alt="${p.title}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.title}</h3>
                <p class="product-compat">${p.compat}</p>
                <div class="product-price">${formatRupiah(p.price)}</div>
                <button class="btn btn-primary add-cart-btn" onclick="addToCart(${p.id})">
                    <i class="fa-solid fa-cart-plus"></i>  Pesan
                </button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
        });
    });
}

/* --------------------------------------------------------------------------
   4. SHOPPING CART SYSTEM
   -------------------------------------------------------------------------- */
function initCart() {
    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-drawer-overlay');
    const checkoutBtn = document.getElementById('checkout-wa-btn');

    cartToggleBtn.addEventListener('click', () => {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('active');
    });

    const closeCart = () => {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('active');
    };

    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    checkoutBtn.addEventListener('click', checkoutWhatsApp);

    updateCartUI();
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    updateCartUI();
    
    // Auto open cart
    document.getElementById('cart-drawer').classList.add('open');
    document.getElementById('cart-drawer-overlay').classList.add('active');
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('IDCKEY_CART', JSON.stringify(cart));
}

function updateCartUI() {
    const cartBody = document.getElementById('cart-drawer-body');
    const cartBadge = document.getElementById('cart-badge-count');
    const totalCountEl = document.getElementById('cart-total-count');
    const totalPriceEl = document.getElementById('cart-total-price');

    cartBody.innerHTML = '';

    let totalQty = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        cartBody.innerHTML = '<p class="text-center" style="color: var(--text-sub); margin-top: 2rem;">Keranjang belanja Anda kosong.</p>';
    } else {
        cart.forEach(item => {
            totalQty += item.qty;
            totalPrice += item.price * item.qty;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${formatRupiah(item.price)}</div>
                    <div class="cart-qty-ctrl">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="qty-count">${item.qty}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            `;
            cartBody.appendChild(itemEl);
        });
    }

    cartBadge.textContent = totalQty;
    totalCountEl.textContent = totalQty;
    totalPriceEl.textContent = formatRupiah(totalPrice);
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert('Keranjang belanja Anda masih kosong.');
        return;
    }

    let message = "Halo ID CAR KEY, saya ingin membeli:\n\n";
    let total = 0;

    cart.forEach(item => {
        const itemSubtotal = item.price * item.qty;
        total += itemSubtotal;
        message += `• ${item.title}\n  Jumlah: ${item.qty}\n  Harga: ${formatRupiah(itemSubtotal)}\n\n`;
    });

    message += `*Total: ${formatRupiah(total)}*\n\nMohon informasi selanjutnya.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, '_blank');
}

/* --------------------------------------------------------------------------
   5. SEARCH SYSTEM
   -------------------------------------------------------------------------- */
function initSearch() {
    const searchBtn = document.getElementById('search-toggle-btn');
    const closeSearchBtn = document.getElementById('close-search-btn');
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results-container');

    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchInput.focus();
    });

    closeSearchBtn.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            resultsContainer.innerHTML = '<p class="search-placeholder-text">Ketik kata kunci untuk mencari produk keyless...</p>';
            return;
        }

        const filtered = productsData.filter(p => 
            p.title.toLowerCase().includes(query) || 
            p.compat.toLowerCase().includes(query)
        );

        resultsContainer.innerHTML = '';
        if (filtered.length === 0) {
            resultsContainer.innerHTML = '<p class="search-placeholder-text">Produk tidak ditemukan.</p>';
            return;
        }

        filtered.forEach(p => {
            const item = document.createElement('div');
            item.className = 'cart-item';
            item.style.marginBottom = '0.8rem';
            item.innerHTML = `
                <img src="${p.image}" alt="${p.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${p.title}</div>
                    <div class="cart-item-price">${formatRupiah(p.price)}</div>
                </div>
                <button class="btn btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="addToCart(${p.id}); document.getElementById('search-modal').classList.remove('active');">
                    Beli
                </button>
            `;
            resultsContainer.appendChild(item);
        });
    });
}

/* --------------------------------------------------------------------------
   6. FAQ ACCORDION
   -------------------------------------------------------------------------- */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Open clicked if was not active
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
}
