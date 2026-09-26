/**
 * ID CAR KEY - Automotive Key Specialist
 * Vanilla JavaScript Interactivity
 */

// Sample Product Data
const productsData = [
    // ================= KATEGORI MOBIL (28 PRODUK) =================
    {
        id: 1,
        title: "Keyless Toyota All New Avanza",
        category: "mobil",
        compat: "Compatible: Avanza, Veloz, Rush",
        image: "assets/images/prod-avanza.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 2,
        title: "Keyless Honda HR-V",
        category: "mobil",
        compat: "Compatible: HR-V, BR-V, CR-V",
        image: "assets/images/prod-hrv.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 3,
        title: "Keyless Mitsubishi Pajero",
        category: "mobil",
        compat: "Compatible: Pajero Sport, Triton",
        image: "assets/images/prod-pajero.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 4,
        title: "Keyless Toyota Innova Zenix",
        category: "mobil",
        compat: "Compatible: Innova Zenix, Reborn, Venturer",
        image: "assets/images/prod-zenix.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 5,
        title: "Keyless Honda Brio",
        category: "mobil",
        compat: "Compatible: Brio RS, Mobilio, Jazz GK5",
        image: "assets/images/prod-brio.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 6,
        title: "Keyless Mitsubishi Xpander",
        category: "mobil",
        compat: "Compatible: Xpander, Xpander Cross",
        image: "assets/images/prod-xpander.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 7,
        title: "Keyless Daihatsu Rocky",
        category: "mobil",
        compat: "Compatible: Rocky, Raize, Xenia",
        image: "assets/images/prod-rocky.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 8,
        title: "Keyless Nissan Serena",
        category: "mobil",
        compat: "Compatible: Serena C26/C27, X-Trail T32",
        image: "assets/images/prod-serena.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 9,
        title: "Keyless Toyota Fortuner",
        category: "mobil",
        compat: "Compatible: Fortuner VRZ, Hilux",
        image: "assets/images/prod-fortuner.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 10,
        title: "Keyless Hyundai Creta",
        category: "mobil",
        compat: "Compatible: Creta, Stargazer, Santa Fe",
        image: "assets/images/prod-creta.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 11,
        title: "Keyless Suzuki Ertiga Hybrid",
        category: "mobil",
        compat: "Compatible: Ertiga, XL7 Hybrid",
        image: "assets/images/prod-ertiga.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 12,
        title: "Keyless Honda Civic Turbo",
        category: "mobil",
        compat: "Compatible: Civic FE/FC, Accord Turbo",
        image: "assets/images/prod-civic.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 13,
        title: "Keyless Toyota Alphard",
        category: "mobil",
        compat: "Compatible: Alphard, Vellfire Gen 3",
        image: "assets/images/prod-alphard.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 14,
        title: "Keyless Wuling Almaz",
        category: "mobil",
        compat: "Compatible: Almaz RS, Cortez, Air EV",
        image: "assets/images/prod-almaz.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 15,
        title: "Keyless Mazda CX-5",
        category: "mobil",
        compat: "Compatible: CX-5, CX-3, Mazda 2 Skyactiv",
        image: "assets/images/prod-cx5.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 16,
        title: "Keyless Toyota Yaris Cross",
        category: "mobil",
        compat: "Compatible: Yaris Cross, Agya GR",
        image: "assets/images/prod-yaris.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 17,
        title: "Keyless Daihatsu Terios",
        category: "mobil",
        compat: "Compatible: Terios, All New Rush",
        image: "assets/images/prod-terios.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 18,
        title: "Keyless Nissan Livina",
        category: "mobil",
        compat: "Compatible: Grand Livina, All New Livina",
        image: "assets/images/prod-livina.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 19,
        title: "Keyless Suzuki Baleno",
        category: "mobil",
        compat: "Compatible: Baleno Hatchback, Grand Vitara",
        image: "assets/images/prod-baleno.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 20,
        title: "Keyless Honda City Hatchback",
        category: "mobil",
        compat: "Compatible: City Hatchback RS, City Sedan",
        image: "assets/images/prod-city.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 21,
        title: "Keyless Toyota Agya GR",
        category: "mobil",
        compat: "Compatible: Agya, Calya (Convert Keyless)",
        image: "assets/images/prod-agya.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 22,
        title: "Keyless Daihatsu Ayla",
        category: "mobil",
        compat: "Compatible: Ayla, Sigra (Convert Keyless)",
        image: "assets/images/prod-ayla.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 23,
        title: "Keyless Honda CR-V Turbo",
        category: "mobil",
        compat: "Compatible: CR-V RW, Odyssey",
        image: "assets/images/prod-crv.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 24,
        title: "Keyless Toyota Raize",
        category: "mobil",
        compat: "Compatible: Raize Turbo, Rocky",
        image: "assets/images/prod-raize.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 25,
        title: "Keyless Suzuki Jimny 3D/5D",
        category: "mobil",
        compat: "Compatible: Jimny JB74, Ignis",
        image: "assets/images/prod-jimny.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 26,
        title: "Keyless Hyundai Ioniq 5",
        category: "mobil",
        compat: "Compatible: Ioniq 5, Ioniq 6, Kona EV",
        image: "assets/images/prod-ioniq.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 27,
        title: "Keyless Mitsubishi Outlander",
        category: "mobil",
        compat: "Compatible: Outlander Sport, Eclipse Cross",
        image: "assets/images/prod-outlander.jpg",
        badge: "Keyless Mobil"
    },
    {
        id: 28,
        title: "Keyless Chery Omoda 5",
        category: "mobil",
        compat: "Compatible: Omoda 5, Tiggo 7 Pro, Tiggo 8",
        image: "assets/images/prod-omoda.jpg",
        badge: "Keyless Mobil"
    },

    // ================= KATEGORI MOTOR (2 PRODUK) =================
    {
        id: 29,
        title: "Keyless Yamaha NMAX",
        category: "motor",
        compat: "Compatible: NMAX Turbo, Neo, Aerox",
        image: "assets/images/prod-nmax.jpg",
        badge: "Keyless Motor"
    },
    {
        id: 30,
        title: "Keyless Honda PCX 160",
        category: "motor",
        compat: "Compatible: PCX 150/160, ADV 150/160",
        image: "assets/images/prod-beat.jpg",
        badge: "Keyless Motor"
    }
];

// App State
let cart = JSON.parse(localStorage.getItem('IDCKEY_CART')) || [];

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
                <button class="btn btn-primary add-cart-btn" onclick="addToCart(${p.id})">
                    <i class="fa-solid fa-cart-plus"></i> Pesan
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
    
    // Auto open cart drawer
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

    cartBody.innerHTML = '';

    let totalQty = 0;

    if (cart.length === 0) {
        cartBody.innerHTML = '<p class="text-center" style="color: var(--text-sub); margin-top: 2rem;">Keranjang belanja Anda kosong.</p>';
    } else {
        cart.forEach(item => {
            totalQty += item.qty;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
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
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert('Keranjang belanja Anda masih kosong.');
        return;
    }

    let message = "Halo ID CAR KEY, saya ingin memesan kunci keyless berikut:\n\n";

    cart.forEach(item => {
        message += `• ${item.title}\n  Jumlah: ${item.qty} pcs\n\n`;
    });

    message += "Mohon informasi ketersediaan stok dan prosedur selanjutnya.";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281361164123?text=${encodedMessage}`, '_blank');
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
                    <div class="product-compat" style="margin-bottom: 0;">${p.compat}</div>
                </div>
                <button class="btn btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="addToCart(${p.id}); document.getElementById('search-modal').classList.remove('active');">
                    Pesan
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
