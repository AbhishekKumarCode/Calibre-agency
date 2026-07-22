export function initKiranaBehavior() {

  // ==========================================================================
  // PRODUCT DATABASE
  // ==========================================================================
  const productsData = [
    // FRESH PRODUCE
    { id: 'fp-1', name: 'Tomatoes (1kg)', category: 'fresh-produce', price: 40, emoji: '🍅' },
    { id: 'fp-2', name: 'Onions (1kg)', category: 'fresh-produce', price: 35, emoji: '🧅' },
    { id: 'fp-3', name: 'Potatoes (1kg)', category: 'fresh-produce', price: 30, emoji: '🥔' },
    { id: 'fp-4', name: 'Bananas (dozen)', category: 'fresh-produce', price: 60, emoji: '🍌' },

    // DAIRY & EGGS
    { id: 'de-1', name: 'Amul Milk (1L)', category: 'dairy-eggs', price: 68, emoji: '🥛' },
    { id: 'de-2', name: 'Eggs (12 pack)', category: 'dairy-eggs', price: 84, emoji: '🥚' },
    { id: 'de-3', name: 'Paneer (200g)', category: 'dairy-eggs', price: 90, emoji: '🧀' },
    { id: 'de-4', name: 'Curd (400g)', category: 'dairy-eggs', price: 45, emoji: '🥛' },

    // SNACKS & BEVERAGES
    { id: 'sb-1', name: 'Lay\'s Chips (Family Pack)', category: 'snacks-beverages', price: 50, emoji: '🍿' },
    { id: 'sb-2', name: 'Parle-G Biscuits (Pack of 4)', category: 'snacks-beverages', price: 40, emoji: '🍪' },
    { id: 'sb-3', name: 'Coca-Cola (1.25L)', category: 'snacks-beverages', price: 70, emoji: '🥤' },
    { id: 'sb-4', name: 'Frooti (1L)', category: 'snacks-beverages', price: 65, emoji: '🧃' },

    // HOUSEHOLD ESSENTIALS
    { id: 'he-1', name: 'Surf Excel (1kg)', category: 'household-essentials', price: 165, emoji: '🧼' },
    { id: 'he-2', name: 'Vim Dishwash Bar (3 pack)', category: 'household-essentials', price: 45, emoji: '🧽' },
    { id: 'he-3', name: 'Harpic (500ml)', category: 'household-essentials', price: 95, emoji: '🧴' },
    { id: 'he-4', name: 'Garbage Bags (30 pcs)', category: 'household-essentials', price: 80, emoji: '🗑' },

    // MASALAS & SPICES
    { id: 'ms-1', name: 'Turmeric Powder (200g)', category: 'masalas-spices', price: 55, emoji: '🌶️' },
    { id: 'ms-2', name: 'Red Chilli Powder (200g)', category: 'masalas-spices', price: 60, emoji: '🌶️' },
    { id: 'ms-3', name: 'Garam Masala (100g)', category: 'masalas-spices', price: 85, emoji: '🧄' },
    { id: 'ms-4', name: 'MDH Mixed Masala (100g)', category: 'masalas-spices', price: 70, emoji: '🌿' },

    // ATTA, RICE & DAL
    { id: 'ar-1', name: 'Aashirvaad Atta (5kg)', category: 'atta-rice-dal', price: 240, emoji: '🌾' },
    { id: 'ar-2', name: 'Basmati Rice (5kg)', category: 'atta-rice-dal', price: 450, emoji: '🍚' },
    { id: 'ar-3', name: 'Toor Dal (1kg)', category: 'atta-rice-dal', price: 140, emoji: '🍲' },
    { id: 'ar-4', name: 'Moong Dal (1kg)', category: 'atta-rice-dal', price: 130, emoji: '🥣' }
  ];

  // Deals Data (With prefilled discounted prices)
  const dealsData = [
    { id: 'de-1', name: 'Amul Milk (1L)', priceOriginal: 68, priceDiscount: 58, discountPct: '15% Off', emoji: '🥛' },
    { id: 'sb-1', name: 'Lay\'s Chips (Family Pack)', priceOriginal: 50, priceDiscount: 40, discountPct: '20% Off', emoji: '🍿' },
    { id: 'ar-2', name: 'Basmati Rice (5kg)', priceOriginal: 450, priceDiscount: 399, discountPct: '₹51 Off', emoji: '🍚' }
  ];

  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================
  let cart = JSON.parse(localStorage.getItem('king_cart')) || [];

  // ==========================================================================
  // DOM SELECTORS
  // ==========================================================================
  const dealsGrid = document.getElementById('deals-grid');
  const catalogGrid = document.getElementById('catalog-grid');
  const searchInput = document.getElementById('catalog-search');
  const categoryTitle = document.getElementById('catalog-category-title');
  const categoryCards = document.querySelectorAll('.aisle-pill');

  const cartToggle = document.getElementById('cart-toggle');
  const cartClose = document.getElementById('cart-close');
  const cartContinueBtn = document.getElementById('cart-continue-btn');
  const cartPanel = document.getElementById('cart-panel');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartBadge = document.getElementById('cart-badge');

  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartEmptyVisual = document.getElementById('cart-empty-visual');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartDelivery = document.getElementById('cart-delivery');
  const cartTotal = document.getElementById('cart-total');
  const deliveryBanner = document.getElementById('delivery-banner');

  const checkoutBtn = document.getElementById('checkout-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  const modalClose = document.getElementById('modal-close');

  const userNameInput = document.getElementById('user-name');
  const userAddressInput = document.getElementById('user-address');
  const orderMessagePreview = document.getElementById('order-message-preview');
  const btnCopyMsg = document.getElementById('btn-copy-msg');
  const btnSendWa = document.getElementById('btn-send-wa');

  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Category titles mapping
  const categoryNameMap = {
    'all': 'All Items',
    'fresh-produce': 'Fresh Produce',
    'dairy-eggs': 'Dairy & Eggs',
    'snacks-beverages': 'Snacks & Beverages',
    'household-essentials': 'Household Essentials',
    'masalas-spices': 'Masalas & Spices',
    'atta-rice-dal': 'Atta, Rice & Dal'
  };

  // ==========================================================================
  // ICON SYSTEM (inline SVG, replaces emoji-as-icon usage)
  // Stroke-based icons matching the nav/cart SVG style used elsewhere on the page.
  // ==========================================================================
  const CATEGORY_ICONS = {
    'fresh-produce': '<svg viewBox="0 0 24 24" width="{size}" height="{size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19c8 0 14-6 14-14 -8 0-14 6-14 14z"></path><path d="M5 19c2-5 5-8 9-10"></path></svg>',
    'dairy-eggs': '<svg viewBox="0 0 24 24" width="{size}" height="{size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2h8l1 4-1 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8L7 6l1-4z"></path><line x1="8" y1="10" x2="16" y2="10"></line></svg>',
    'snacks-beverages': '<svg viewBox="0 0 24 24" width="{size}" height="{size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l-1.5 12a1.5 1.5 0 0 1-1.5 1.3H9a1.5 1.5 0 0 1-1.5-1.3L6 8z"></path><path d="M8 8l1-4h6l1 4"></path><path d="M10 12v6M14 12v6"></path></svg>',
    'household-essentials': '<svg viewBox="0 0 24 24" width="{size}" height="{size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="9" width="10" height="13" rx="2"></rect><path d="M10 9V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3"></path><path d="M14 4h3l2 2"></path></svg>',
    'masalas-spices': '<svg viewBox="0 0 24 24" width="{size}" height="{size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4c1 2-1 3-1 5"></path><path d="M11 9c4 0 7 3 7 7a4 4 0 0 1-8 0c0-3 1-5 1-7z"></path></svg>',
    'atta-rice-dal': '<svg viewBox="0 0 24 24" width="{size}" height="{size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16a8 6 0 0 1-16 0z"></path><path d="M12 12V6"></path><path d="M9 8l1.5-2M15 8l-1.5-2"></path></svg>'
  };
  const DEFAULT_ICON = '<svg viewBox="0 0 24 24" width="{size}" height="{size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8z"></path><path d="M9 8V6a3 3 0 0 1 6 0v2"></path></svg>';

  function categoryIcon(category, size) {
    const svg = CATEGORY_ICONS[category] || DEFAULT_ICON;
    return svg.split('{size}').join(size);
  }

  // Active category filter state
  let activeCategory = 'all';

  // ==========================================================================
  // RENDER DEALS SECTION
  // ==========================================================================
  function renderDeals() {
    dealsGrid.innerHTML = '';
    dealsData.forEach(deal => {
      const card = document.createElement('div');
      card.className = 'deal-card';
      const sourceProduct = productsData.find(p => p.id === deal.id);
      const dealCategory = sourceProduct ? sourceProduct.category : null;
      card.innerHTML = `
        <span class="deal-ribbon">${deal.discountPct}</span>
        <div class="deal-visual" aria-hidden="true">${categoryIcon(dealCategory, 48)}</div>
        <div>
          <div class="deal-name">${deal.name}</div>
          <div class="deal-pricing">
            <span class="deal-price-discount">₹${deal.priceDiscount}</span>
            <span class="deal-price-original">₹${deal.priceOriginal}</span>
          </div>
        </div>
        <button class="btn btn-primary btn-add-deal-cart" data-id="${deal.id}" data-name="${deal.name}" data-price="${deal.priceDiscount}">
          Add Deal
        </button>
      `;
      dealsGrid.appendChild(card);
    });

    // Setup add deals click handlers
    dealsGrid.querySelectorAll('.btn-add-deal-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const name = btn.getAttribute('data-name');
        const price = parseInt(btn.getAttribute('data-price'));

        addToCart({ id, name, price }, 1);

        // Visual feedback
        btn.classList.add('btn-whatsapp');
        btn.innerText = 'Added ✓';
        setTimeout(() => {
          btn.classList.remove('btn-whatsapp');
          btn.innerText = 'Add Deal';
        }, 1000);
      });
    });
  }

  renderDeals();

  // ==========================================================================
  // COUNTDOWN TIMER (Midnight)
  // ==========================================================================
  function updateCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // End of today (midnight)

    const diffMs = midnight - now;
    if (diffMs <= 0) {
      document.getElementById('countdown-clock').innerText = 'Ends in 00:00:00';
      return;
    }

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    const pad = (n) => n.toString().padStart(2, '0');
    document.getElementById('countdown-clock').innerText = `Ends in ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  // Initial call & Interval
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);

  // ==========================================================================
  // RENDER PRODUCT CATALOG
  // ==========================================================================
  function renderCatalog() {
    catalogGrid.style.opacity = '0';

    setTimeout(() => {
      catalogGrid.innerHTML = '';
      const query = searchInput.value.trim().toLowerCase();

      const filtered = productsData.filter(p => {
        const matchesCategory = (activeCategory === 'all' || p.category === activeCategory);
        const matchesSearch = p.name.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
      });

      const catalogCount = document.getElementById('catalog-count');

      if (filtered.length === 0) {
        catalogGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">No items match your search.</div>`;
        catalogGrid.style.opacity = '1';
        if (catalogCount) catalogCount.innerText = '0 items';
        return;
      }

      if (catalogCount) catalogCount.innerText = `${filtered.length} item${filtered.length === 1 ? '' : 's'}`;

      filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-row';
        card.setAttribute('data-product-id', p.id);

        card.innerHTML = `
          <div class="product-visual visual-${p.category}" aria-hidden="true">${categoryIcon(p.category, 22)}</div>
          <div class="product-info">
            <div class="product-name">${p.name}</div>
            <div class="product-price">₹${p.price}</div>
          </div>
          <div class="product-controls-row">
            <div class="stepper">
              <button class="stepper-btn btn-prod-minus" data-id="${p.id}" aria-label="Decrease quantity">—</button>
              <span class="stepper-val" id="val-${p.id}">1</span>
              <button class="stepper-btn btn-prod-plus" data-id="${p.id}" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn btn-accent btn-add-cart" data-id="${p.id}" aria-label="Add ${p.name} to cart">
              Add
            </button>
          </div>
        `;
        catalogGrid.appendChild(card);
      });

      catalogGrid.style.opacity = '1';

      // Set quantity stepper triggers inside cards
      filtered.forEach(p => {
        const cardEl = catalogGrid.querySelector(`[data-product-id="${p.id}"]`);
        let count = 1;

        cardEl.querySelector('.btn-prod-plus').addEventListener('click', () => {
          if (count < 20) {
            count++;
            cardEl.querySelector(`#val-${p.id}`).innerText = count;
          }
        });

        cardEl.querySelector('.btn-prod-minus').addEventListener('click', () => {
          if (count > 1) {
            count--;
            cardEl.querySelector(`#val-${p.id}`).innerText = count;
          }
        });

        // Add to cart click
        const addBtn = cardEl.querySelector('.btn-add-cart');
        addBtn.addEventListener('click', () => {
          addToCart(p, count);

          // Visual Added animation
          addBtn.classList.add('added');
          addBtn.innerText = 'Added ✓';

          setTimeout(() => {
            addBtn.classList.remove('added');
            addBtn.innerText = 'Add to Cart';
            // Reset card quantity values
            count = 1;
            cardEl.querySelector(`#val-${p.id}`).innerText = count;
          }, 1200);
        });
      });

    }, 200);
  }

  // Initial catalog render
  renderCatalog();

  function scrollToShop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('shop').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  // Sticky aisle-nav pill click filter triggers
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      categoryCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      activeCategory = card.getAttribute('data-filter');
      categoryTitle.innerText = categoryNameMap[activeCategory];
      searchInput.value = '';
      renderCatalog();
      scrollToShop();
    });
  });

  // Search input keyup triggers
  searchInput.addEventListener('input', renderCatalog);

  // ==========================================================================
  // HERO QUICK-ORDER SEARCH & ONE-TAP REORDER CHIPS
  // ==========================================================================
  const heroSearchForm = document.getElementById('hero-search-form');
  const heroSearchInput = document.getElementById('hero-search');

  heroSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    categoryCards.forEach(c => c.classList.remove('active'));
    const allPill = document.querySelector('.aisle-pill[data-filter="all"]');
    if (allPill) allPill.classList.add('active');
    activeCategory = 'all';
    categoryTitle.innerText = categoryNameMap['all'];
    searchInput.value = heroSearchInput.value.trim();
    renderCatalog();
    scrollToShop();
  });

  document.querySelectorAll('.quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const id = chip.getAttribute('data-id');
      const product = productsData.find(p => p.id === id);
      if (!product) return;

      addToCart(product, 1);

      chip.classList.add('added');
      setTimeout(() => chip.classList.remove('added'), 900);
    });
  });

  // ==========================================================================
  // LIVE CART DYNAMICS
  // ==========================================================================
  function saveCart() {
    localStorage.setItem('king_cart', JSON.stringify(cart));
    updateCartUI();
  }

  function addToCart(product, qty) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: qty
      });
    }
    saveCart();
    openCart();
  }

  function updateCartUI() {
    // Clear all item rows except the empty container template
    cartItemsContainer.querySelectorAll('.cart-item-row').forEach(row => row.remove());

    let totalItems = 0;
    let subtotal = 0;

    if (cart.length === 0) {
      cartEmptyVisual.style.display = 'flex';
      checkoutBtn.style.pointerEvents = 'none';
      checkoutBtn.style.opacity = '0.5';
    } else {
      cartEmptyVisual.style.display = 'none';
      checkoutBtn.style.pointerEvents = 'auto';
      checkoutBtn.style.opacity = '1';

      cart.forEach(item => {
        totalItems += item.quantity;
        const rowCost = item.price * item.quantity;
        subtotal += rowCost;

        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${item.price} each</div>
          </div>
          <div class="cart-item-actions">
            <div class="stepper" style="border-color: rgba(45, 80, 22, 0.15)">
              <button class="stepper-btn btn-cart-minus" data-id="${item.id}">—</button>
              <span class="stepper-val">${item.quantity}</span>
              <button class="stepper-btn btn-cart-plus" data-id="${item.id}">+</button>
            </div>
            <div class="cart-item-total">₹${rowCost}</div>
            <button class="btn-remove-item" data-id="${item.id}" aria-label="Remove Item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        `;
        cartItemsContainer.appendChild(row);
      });

      // Add quantity and delete triggers inside Cart
      cartItemsContainer.querySelectorAll('.btn-cart-plus').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const item = cart.find(c => c.id === id);
          if (item) {
            item.quantity += 1;
            saveCart();
          }
        });
      });

      cartItemsContainer.querySelectorAll('.btn-cart-minus').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const idx = cart.findIndex(c => c.id === id);
          if (idx > -1) {
            cart[idx].quantity -= 1;
            if (cart[idx].quantity <= 0) {
              cart.splice(idx, 1);
            }
            saveCart();
          }
        });
      });

      cartItemsContainer.querySelectorAll('.btn-remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const idx = cart.findIndex(c => c.id === id);
          if (idx > -1) {
            cart.splice(idx, 1);
            saveCart();
          }
        });
      });
    }

    // Update badge counts in Nav
    cartBadge.innerText = totalItems;
    if (totalItems > 0) {
      cartBadge.classList.add('active');
    } else {
      cartBadge.classList.remove('active');
    }

    // Delivery fee calculations: ₹0 if > ₹299, else ₹25
    let deliveryFee = 25;
    if (subtotal > 299 || subtotal === 0) {
      deliveryFee = 0;
    }

    // Update delivery thresholds details banners
    if (subtotal === 0) {
      deliveryBanner.style.display = 'none';
    } else if (subtotal > 299) {
      deliveryBanner.style.display = 'block';
      deliveryBanner.className = 'delivery-threshold-banner free';
      deliveryBanner.innerText = '⚡ Free Delivery applied to this order!';
    } else {
      deliveryBanner.style.display = 'block';
      deliveryBanner.className = 'delivery-threshold-banner';
      deliveryBanner.innerText = `Add ₹${300 - subtotal} more for FREE delivery`;
    }

    cartSubtotal.innerText = `₹${subtotal}`;
    cartDelivery.innerText = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
    cartTotal.innerText = `₹${subtotal + deliveryFee}`;
  }

  function openCart() {
    cartPanel.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartPanel.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Initial Cart UI Update
  updateCartUI();

  // Slide-in drawer toggles
  cartToggle.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartContinueBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // ==========================================================================
  // WHATSAPP CHECKOUT BUILDER MODAL
  // ==========================================================================
  function generateWhatsAppMessage() {
    const userName = userNameInput.value.trim() || '[Your Name]';
    const userAddress = userAddressInput.value.trim() || '[Your Address]';

    let msg = `*KIRANA KING GROCERY ORDER*\n`;
    msg += `------------------------\n`;
    msg += `*Name:* ${userName}\n`;
    msg += `*Address:* ${userAddress}\n`;
    msg += `------------------------\n`;

    let subtotal = 0;
    cart.forEach(item => {
      msg += `• ${item.quantity}x ${item.name} - ₹${item.price * item.quantity}\n`;
      subtotal += item.price * item.quantity;
    });

    const deliveryFee = subtotal > 299 ? 0 : 25;
    msg += `------------------------\n`;
    msg += `*Subtotal:* ₹${subtotal}\n`;
    msg += `*Delivery:* ${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}\n`;
    msg += `*Total Payable:* ₹${subtotal + deliveryFee}\n`;
    msg += `------------------------\n`;
    msg += `*Payment:* Cash on Delivery / UPI\n`;
    msg += `Thank you for shopping with Kirana King!`;

    orderMessagePreview.innerText = msg;
    return msg;
  }

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    closeCart();
    generateWhatsAppMessage();

    checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  // Update text live as user inputs details
  userNameInput.addEventListener('input', generateWhatsAppMessage);
  userAddressInput.addEventListener('input', generateWhatsAppMessage);

  // Close modal
  modalClose.addEventListener('click', () => {
    checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
  });

  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
      checkoutModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Copy to clipboard
  btnCopyMsg.addEventListener('click', () => {
    const text = orderMessagePreview.innerText;
    navigator.clipboard.writeText(text).then(() => {
      btnCopyMsg.innerText = 'Copied ✓';
      setTimeout(() => {
        btnCopyMsg.innerText = 'Copy Text';
      }, 1200);
    });
  });

  // Send to WhatsApp (open wa.me link)
  btnSendWa.addEventListener('click', () => {
    const text = encodeURIComponent(orderMessagePreview.innerText);
    const url = `https://wa.me/919811098110?text=${text}`;

    // Open WhatsApp web or app link
    window.open(url, '_blank');

    // Reset cart after checkout demo
    cart = [];
    saveCart();

    // Close Modal
    checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Hero direct whatsapp btn
  document.getElementById('hero-wa-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const welcomeText = encodeURIComponent("Hi Kirana King! I'd like to check out some fresh groceries. Can you share the latest rate list?");
    window.open(`https://wa.me/919811098110?text=${welcomeText}`, '_blank');
  });

  // ==========================================================================
  // SCROLL TRIGGERS & NAV EFFECTS
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Scroll navbar adjustments & links highlights
  const headerEl = document.getElementById('header');
  function handleWindowScroll() {
    if (window.scrollY > 40) {
      headerEl.classList.add('scrolled');
    } else {
      headerEl.classList.remove('scrolled');
    }

    const scrollPos = window.scrollY + 100;
    const navSections = ['shop', 'deals', 'how-it-works', 'contact'];

    navSections.forEach(secId => {
      const sec = document.getElementById(secId);
      if (sec) {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const link = document.querySelector(`.nav-link[href="#${secId}"]`);

        if (link) {
          if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      }
    });
  }
  window.addEventListener('scroll', handleWindowScroll);

  // Mobile Menu Actions
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  // Cleanup: remove listeners attached to window/document so they don't
  // leak or double-fire if this page unmounts/remounts.
  return function cleanupKiranaBehavior() {
    window.removeEventListener('scroll', handleWindowScroll);
    clearInterval(countdownInterval);
    revealObserver.disconnect();
  };
}
