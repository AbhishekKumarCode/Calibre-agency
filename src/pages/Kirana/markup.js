export const kiranaMarkup = `
  <!-- ==========================================================================
       NAVIGATION HEADER
       ========================================================================== -->
  <header class="header" id="header">
    <div class="container nav-wrapper">
      <a href="#header" class="logo">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M2 4l3 12h14l3-12-6 4-4-4-4 4-6-4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M5 16l1 5h12l1-5" stroke="currentColor" stroke-width="2"></path>
        </svg>
        KIRANA KING
      </a>

      <ul class="nav-menu" id="nav-menu">
        <li><a href="#shop" class="nav-link">Shop</a></li>
        <li><a href="#deals" class="nav-link">Deals</a></li>
        <li><a href="#how-it-works" class="nav-link">How It Works</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>

      <div class="nav-actions">
        <!-- Live Cart Toggle -->
        <button class="cart-toggle-btn" id="cart-toggle" aria-label="Open Shopping Cart">
          <svg viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-count" id="cart-badge">0</span>
        </button>

        <a href="#shop" class="btn btn-primary">Start Shopping</a>

        <!-- Mobile Menu Toggle Button -->
        <button class="mobile-menu-btn" id="mobile-toggle" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- ==========================================================================
       STICKY AISLE QUICK-NAV
       A persistent shop-by-aisle strip, not a one-off hero decoration —
       stays reachable the whole time someone is filling a basket.
       ========================================================================== -->
  <nav class="aisle-nav" id="aisle-nav" aria-label="Shop by aisle">
    <div class="container aisle-strip" id="aisle-strip">
      <button class="aisle-pill active" data-filter="all">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8z"></path><path d="M9 8V6a3 3 0 0 1 6 0v2"></path></svg>
        All Items
      </button>
      <button class="aisle-pill" data-filter="fresh-produce">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19c8 0 14-6 14-14 -8 0-14 6-14 14z"></path><path d="M5 19c2-5 5-8 9-10"></path></svg>
        Fresh Produce
      </button>
      <button class="aisle-pill" data-filter="dairy-eggs">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2h8l1 4-1 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8L7 6l1-4z"></path><line x1="8" y1="10" x2="16" y2="10"></line></svg>
        Dairy & Eggs
      </button>
      <button class="aisle-pill" data-filter="snacks-beverages">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l-1.5 12a1.5 1.5 0 0 1-1.5 1.3H9a1.5 1.5 0 0 1-1.5-1.3L6 8z"></path><path d="M8 8l1-4h6l1 4"></path><path d="M10 12v6M14 12v6"></path></svg>
        Snacks & Drinks
      </button>
      <button class="aisle-pill" data-filter="household-essentials">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="9" width="10" height="13" rx="2"></rect><path d="M10 9V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3"></path><path d="M14 4h3l2 2"></path></svg>
        House Essentials
      </button>
      <button class="aisle-pill" data-filter="masalas-spices">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4c1 2-1 3-1 5"></path><path d="M11 9c4 0 7 3 7 7a4 4 0 0 1-8 0c0-3 1-5 1-7z"></path></svg>
        Masalas & Spices
      </button>
      <button class="aisle-pill" data-filter="atta-rice-dal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16a8 6 0 0 1-16 0z"></path><path d="M12 12V6"></path><path d="M9 8l1.5-2M15 8l-1.5-2"></path></svg>
        Atta, Rice & Dal
      </button>
    </div>
  </nav>

  <!-- ==========================================================================
       HERO SECTION
       Built around the job people actually open a kirana site to do: find a
       staple fast and reorder it, not admire a lifestyle photo.
       ========================================================================== -->
  <section class="hero">
    <div class="container hero-top">
      <div class="delivery-badge">
        <span>⚡</span> 30-Min Delivery
      </div>
      <h1 class="hero-headline">Order today's groceries in three taps.</h1>
      <p class="hero-subtext">Fresh produce, dairy, spices and household staples from your Lajpat Nagar kirana — delivered in 30 minutes, no signup required.</p>

      <!-- Persistent quick-order search, wired straight into the catalog below -->
      <form class="quick-order-bar" id="hero-search-form" role="search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="search" id="hero-search" class="quick-order-input" placeholder="Search milk, atta, chips, dal…" aria-label="Search groceries">
        <button type="submit" class="btn btn-accent" id="hero-search-btn">Search</button>
      </form>

      <!-- One-tap reorder for the staples people buy every week -->
      <div class="quick-reorder-row">
        <span class="quick-reorder-label">Reorder fast:</span>
        <button type="button" class="quick-chip" data-id="de-1">🥛 Milk 1L — ₹68</button>
        <button type="button" class="quick-chip" data-id="ar-1">🌾 Atta 5kg — ₹240</button>
        <button type="button" class="quick-chip" data-id="de-2">🥚 Eggs 12 — ₹84</button>
        <button type="button" class="quick-chip" data-id="fp-1">🍅 Tomato 1kg — ₹40</button>
      </div>

      <div class="hero-trust-line" style="margin-top: 16px;">
        Serving Lajpat Nagar & Defence Colony since 2003 ·
        <a href="#whatsapp-order-direct" id="hero-wa-btn" style="color: var(--primary); font-weight: 700; text-decoration: underline;">Prefer WhatsApp? Order directly →</a>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       DAILY DEALS SECTION
       ========================================================================== -->
  <section class="deals-section" id="deals">
    <div class="container">
      <div class="deals-header-row reveal">
        <div class="deals-title-group">
          <span class="section-eyebrow">Flash Offers</span>
          <h2>Today's Deals ⚡</h2>
        </div>
        <div class="countdown-timer">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span id="countdown-clock">Ends in 00:00:00</span>
        </div>
      </div>

      <div class="deals-grid reveal" id="deals-grid">
        <!-- JS inserts deals here so they are interactive -->
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       PRODUCTS CATALOG
       ========================================================================== -->
  <section class="shop-section" id="shop">
    <div class="container">
      <!-- Search & Title -->
      <div class="catalog-header reveal">
        <span>
          <span class="catalog-title" id="catalog-category-title">All Items</span>
          <span class="catalog-count" id="catalog-count"></span>
        </span>
        <div class="search-wrapper">
          <input type="text" id="catalog-search" class="search-input" placeholder="Search groceries...">
        </div>
      </div>

      <!-- Dense scannable list of items -->
      <div class="products-grid reveal" id="catalog-grid">
        <!-- Dynamically loaded in JavaScript -->
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SHOPPING CART SIDEBAR PANEL (SLIDE-IN)
       ========================================================================== -->
  <div class="cart-overlay" id="cart-overlay"></div>
  <div class="cart-panel" id="cart-panel">
    <div class="cart-header">
      <h3 class="cart-title">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        Shopping Basket
      </h3>
      <button class="btn-close-cart" id="cart-close" aria-label="Close Cart">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Basket Items Container -->
    <div class="cart-items" id="cart-items-container">
      <!-- Empty state visual -->
      <div class="cart-empty" id="cart-empty-visual">
        <span class="cart-empty-icon" role="img" aria-label="Empty shopping cart">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </span>
        <p>Your basket is empty.<br>Browse the shop above to add your groceries.</p>
      </div>
    </div>

    <!-- Summary Details Footer -->
    <div class="cart-footer">
      <div class="cart-summary-line">
        <span>Basket Subtotal</span>
        <span id="cart-subtotal">₹0</span>
      </div>
      <div class="cart-summary-line">
        <span>Delivery Charge</span>
        <span id="cart-delivery">₹0</span>
      </div>

      <!-- Dynamic Banner -->
      <div class="delivery-threshold-banner" id="delivery-banner">
        Add ₹300 or more for FREE delivery
      </div>

      <div class="cart-summary-line grand-total">
        <span>Total Payable</span>
        <span id="cart-total">₹0</span>
      </div>

      <div class="cart-buttons">
        <button class="btn btn-whatsapp" id="checkout-btn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.689 2.008 14.218.983 11.603.982 6.162.982 1.74 5.352 1.736 10.783c-.002 1.736.46 3.428 1.341 4.93L2.09 20.355l4.557-1.201z"></path>
          </svg>
          Checkout via WhatsApp
        </button>
        <button class="btn btn-outline" id="cart-continue-btn">Continue Shopping</button>
      </div>
    </div>
  </div>

  <!-- ==========================================================================
       HOW IT WORKS SECTION
       ========================================================================== -->
  <section class="section-spacing" id="how-it-works" style="background-color: var(--card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">Service Flow</span>
        <h2 class="section-title">How Kirana King Works</h2>
      </div>

      <div class="steps-grid reveal">
        <div class="step-item">
          <span class="step-number">01</span>
          <h3 class="step-title">Browse & Add</h3>
          <p class="step-desc">Pick fresh vegetables, dairy, or essential daily staples from our online shop catalog.</p>
        </div>
        <div class="step-item">
          <span class="step-number">02</span>
          <h3 class="step-title">Review & WhatsApp</h3>
          <p class="step-desc">Click checkout to review your basket. We format a structured WhatsApp text listing all items.</p>
        </div>
        <div class="step-item">
          <span class="step-number">03</span>
          <h3 class="step-title">30-Min Delivery</h3>
          <p class="step-desc">Our delivery partner arrives at your door. Pay cash or UPI upon receiving your fresh groceries.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       DELIVERY ZONE SECTION
       ========================================================================== -->
  <section class="section-spacing" id="zones">
    <div class="container" style="text-align: center;">
      <div class="section-header reveal" style="margin-bottom: 30px;">
        <span class="section-eyebrow">Delivery Areas</span>
        <h2 class="section-title">Neighbourhoods We Serve</h2>
      </div>
      <p class="reveal" style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 30px auto; font-size: 15px;">We deliver across these South Delhi neighbourhoods, guaranteeing your order within 30 minutes.</p>

      <div class="zone-pills reveal">
        <span class="zone-pill">Lajpat Nagar</span>
        <span class="zone-pill">Defence Colony</span>
        <span class="zone-pill">Kalkaji</span>
        <span class="zone-pill">Greater Kailash (GK)</span>
        <span class="zone-pill">South Extension</span>
        <span class="zone-pill">Nehru Place</span>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       WHATSAPP CHECKOUT BUILDER MODAL
       ========================================================================== -->
  <div class="checkout-modal" id="checkout-modal">
    <div class="checkout-content">
      <div class="checkout-header">
        <h3 class="checkout-title">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style="color: #25D366;">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.689 2.008 14.218.983 11.603.982 6.162.982 1.74 5.352 1.736 10.783c-.002 1.736.46 3.428 1.341 4.93L2.09 20.355l4.557-1.201z"></path>
          </svg>
          Complete WhatsApp Order
        </h3>
        <button class="btn-close-cart" id="modal-close" aria-label="Close Checkout Modal">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="checkout-body">
        <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.5;">Add your name and address, and we'll prepare your order message. Tap "Send via WhatsApp" to place it directly with our store counter!</p>

        <div class="checkout-form-group">
          <label class="checkout-label" for="user-name">Your Name</label>
          <input type="text" id="user-name" class="checkout-input" placeholder="E.g. Abhishek Kumar">
        </div>

        <div class="checkout-form-group">
          <label class="checkout-label" for="user-address">Delivery Address</label>
          <input type="text" id="user-address" class="checkout-input" placeholder="Block & House No., Lajpat Nagar">
        </div>

        <div class="checkout-form-group">
          <label class="checkout-label">Message Preview (Formatted)</label>
          <div class="order-message-preview" id="order-message-preview">
            Message preview will load here...
          </div>
        </div>
      </div>

      <div class="checkout-actions">
        <button class="btn btn-outline" id="btn-copy-msg">Copy Text</button>
        <button class="btn btn-whatsapp" id="btn-send-wa">Send via WhatsApp</button>
      </div>
    </div>
  </div>

  <!-- ==========================================================================
       CONTACT & FOOTER
       ========================================================================== -->
  <footer class="footer" id="contact">
    <div class="container">
      <div class="footer-wrapper">

        <div class="footer-col brand">
          <span class="logo">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path d="M2 4l3 12h14l3-12-6 4-4-4-4 4-6-4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
              <path d="M5 16l1 5h12l1-5" stroke="currentColor" stroke-width="2"></path>
            </svg>
            KIRANA KING
          </span>
          <p style="font-size: 13.5px; line-height: 1.6; margin-top: 10px;">Your trusted Lajpat Nagar grocer. Delivering fresh produce, daily dairy products, spices, and household essentials in under 30 minutes.</p>
        </div>

        <div class="footer-col">
          <h5>Store Hours</h5>
          <ul>
            <li>Daily: 7:30 AM - 9:30 PM</li>
            <li>Delivery: 8:00 AM - 9:00 PM</li>
            <li>No Signup Required</li>
            <li>COD & UPI Accepted</li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Coordinates</h5>
          <ul>
            <li>Shop 14, Central Market, Delhi</li>
            <li>Phone: +91 98110 98110</li>
            <li>WhatsApp Support Available</li>
            <li>Est. 2003 in Lajpat Nagar</li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <span>© 2026 Kirana King Store. All rights reserved.</span>
        <span>Lajpat Nagar's Local Kirana, Online</span>
      </div>

      <div class="footer-wordmark">KIRANA KING</div>
    </div>
  </footer>
`;
