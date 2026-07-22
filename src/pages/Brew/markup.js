export const brewMarkup = `

  <!-- ==========================================================================
       NAVIGATION HEADER
       ========================================================================== -->
  <header class="header" id="header">
    <div class="container nav-wrapper">
      <a href="#header" class="logo">BREW & CO.</a>
      
      <ul class="nav-menu" id="nav-menu">
        <li><a href="#menu" class="nav-link">Menu</a></li>
        <li><a href="#reserve" class="nav-link">Reserve</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#gallery" class="nav-link">Gallery</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>

      <div class="nav-actions">
        <!-- Cart Trigger -->
        <button class="cart-toggle-btn" id="cart-toggle" aria-label="Open Cart">
          <svg viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-count" id="cart-badge">0</span>
        </button>

        <a href="#reserve" class="btn btn-primary">Reserve a Table</a>

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
       HERO SECTION
       ========================================================================== */ -->
  <section class="hero">
    <div class="hero-photo" role="img" aria-label="Interior of Brew & Co. roastery bathed in morning light"></div>
    <div class="hero-content">
      <div class="hero-ticket">
        <div class="hero-ticket-punch" aria-hidden="true"></div>
        <span class="hero-ticket-eyebrow">Roaster's Ticket · Hauz Khas</span>
        <h1 class="hero-headline">Where Every Cup Tells a Story.</h1>
        <p class="hero-subtext">Direct-trade beans from Coorg and Chikmagalur, roasted in small batches and poured slow, morning after morning.</p>
        <div class="hero-buttons">
          <a href="#menu" class="btn btn-primary">View Menu</a>
          <a href="#reserve" class="btn btn-outline">Reserve a Table</a>
        </div>
        <div class="hero-ticket-details">
          <div class="ticket-line"><span class="label">Open Daily</span><span class="leader"></span><span class="value">8AM – 10PM</span></div>
          <div class="ticket-line"><span class="label">Address</span><span class="leader"></span><span class="value">Hauz Khas, Delhi</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       MENU SECTION
       ========================================================================== -->
  <section class="section-spacing" id="menu">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">Our Menu</span>
        <h2 class="section-title">Sensory Brews & Bites</h2>
      </div>

      <!-- Categories tabs selector -->
      <div class="menu-tabs reveal">
        <button class="tab-btn active" data-tab="espresso">Espresso</button>
        <button class="tab-btn" data-tab="cold brew">Cold Brew</button>
        <button class="tab-btn" data-tab="all-day breakfast">All-Day Breakfast</button>
        <button class="tab-btn" data-tab="pastries">Pastries</button>
      </div>

      <!-- Grid of items -->
      <div class="menu-grid reveal" id="menu-grid">
        <!-- JS inserts items dynamically for correct transitions and state mapping -->
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       CART SIDEBAR PANEL (SLIDE IN)
       ========================================================================== -->
  <div class="cart-drawer-overlay" id="cart-overlay"></div>
  <div class="cart-drawer" id="cart-drawer">
    <div class="cart-header">
      <h3 class="cart-title">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        Your Order
      </h3>
      <button class="btn-close-cart" id="cart-close" aria-label="Close Cart">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Live Cart Items -->
    <div class="cart-items-container" id="cart-items-container">
      <!-- Empty State -->
      <div class="cart-empty-state" id="cart-empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <p>Your order is empty.<br>Add some fresh brews or hot pastries to start!</p>
      </div>
    </div>

    <!-- Cart Footer Summaries -->
    <div class="cart-footer">
      <div class="cart-summary-row">
        <span>Subtotal</span>
        <span id="cart-subtotal">₹0</span>
      </div>
      <div class="cart-summary-row">
        <span>GST (5%)</span>
        <span id="cart-tax">₹0</span>
      </div>
      <div class="cart-rewards-preview" id="cart-rewards-row" style="display: none;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        <span id="cart-rewards-text">Earn 0 Brew Rewards points</span>
      </div>
      <div class="cart-summary-row grand-total">
        <span>Total</span>
        <span id="cart-total">₹0</span>
      </div>
      <div class="cart-actions">
        <button class="btn btn-outline btn-clear-cart" id="clear-cart-btn">Clear</button>
        <button class="btn btn-accent" id="checkout-btn">Place Order</button>
      </div>
    </div>
  </div>

  <!-- ==========================================================================
       LOYALTY PROGRAM (BREW REWARDS)
       ========================================================================== -->
  <section class="loyalty-section reveal">
    <div class="container">
      <div class="loyalty-card">
        <!-- SVG Watermark Logo inside card -->
        <svg class="loyalty-badge-watermark" viewBox="0 0 24 24" width="240" height="240" fill="none" stroke="currentColor" stroke-width="0.5">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>

        <div class="loyalty-header">
          <div class="loyalty-title-group">
            <h3>Brew Rewards Status</h3>
            <p>Earn 1 point per ₹10 spent. Accumulate 100 points to redeem a Free Specialty Coffee.</p>
          </div>
          <div class="loyalty-points-display">
            <div class="loyalty-points-val" id="loyalty-points-val">65</div>
            <div class="loyalty-points-lbl">Active Points</div>
          </div>
        </div>

        <div class="loyalty-progress-container">
          <div class="loyalty-progress-bar-bg">
            <div class="loyalty-progress-bar" id="loyalty-progress-bar"></div>
          </div>
          <div class="loyalty-progress-meta">
            <span>0 Points</span>
            <span id="loyalty-progress-text">65/100 Points</span>
            <span>100 Points</span>
          </div>
        </div>

        <div class="loyalty-coffees-badge" id="loyalty-rewards-count" style="display: none;">
          You have 1 Free Coffee reward ready!
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       RESERVE A TABLE SECTION
       ========================================================================== -->
  <section class="section-spacing" id="reserve">
    <div class="container">
      <div class="reserve-layout">
        
        <!-- Left details panel -->
        <div class="reserve-info-panel reveal">
          <span class="section-eyebrow">Reservations</span>
          <h2>Secure Your Quiet Morning</h2>
          <p>We hold limited tables in our roastery greenhouse. Book ahead to ensure you have a space to work, write, or sit back and sip.</p>
          
          <div class="reserve-features">
            <div class="reserve-feature-item">
              <div class="reserve-feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div class="reserve-feature-text">
                <h4>Guaranteed Seating</h4>
                <p>Private workspace corners equipped with direct power outlets and reading lamps.</p>
              </div>
            </div>

            <div class="reserve-feature-item">
              <div class="reserve-feature-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div class="reserve-feature-text">
                <h4>Roaster Privileges</h4>
                <p>Access to trial pours of upcoming seasonal single-origins before they launch on the bar.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Reservation Form Card -->
        <div class="reserve-card reveal" id="reservation-card-box">
          <!-- Live Form -->
          <form class="reservation-form" id="booking-form" novalidate>
            <div class="form-group">
              <label class="form-label" for="booking-name">Name</label>
              <input type="text" id="booking-name" class="input-field" placeholder="E.g. Abhishek Kumar" required>
              <span class="error-text" id="error-booking-name">Please enter your name</span>
            </div>

            <div class="form-group">
              <label class="form-label" for="booking-phone">Phone Number</label>
              <input type="tel" id="booking-phone" class="input-field" placeholder="10-digit mobile number" required>
              <span class="error-text" id="error-booking-phone">Please enter a valid 10-digit mobile number</span>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label class="form-label" for="booking-date">Date</label>
                <input type="date" id="booking-date" class="input-field" required>
                <span class="error-text" id="error-booking-date">Please select a future date</span>
              </div>

              <div class="form-group">
                <label class="form-label" for="booking-time">Time</label>
                <select id="booking-time" class="input-field" required>
                  <!-- Dynamically populated in JavaScript from 8:00 AM to 9:30 PM -->
                </select>
                <span class="error-text" id="error-booking-time">Please select a reservation time</span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Number of Guests</label>
              <div class="guest-stepper-container">
                <span>Guests</span>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <button type="button" class="guest-stepper-btn" id="guest-minus" aria-label="Decrease guests">—</button>
                  <span class="guest-stepper-val" id="guest-val">2</span>
                  <button type="button" class="guest-stepper-btn" id="guest-plus" aria-label="Increase guests">+</button>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="booking-notes">Special Requests (Optional)</label>
              <textarea id="booking-notes" class="input-field" placeholder="Allergies, high-chairs, quiet corners..." style="resize: none; height: 80px;"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Confirm Reservation</button>
          </form>

          <!-- Confirmation Success Panel -->
          <div class="reservation-success" id="booking-success">
            <div class="success-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 class="success-headline">Reservation Confirmed!</h3>
            <p class="success-subtext">We have saved your table request. A copy of your details is listed below:</p>
            
            <div class="success-summary">
              <div class="success-summary-item">
                <span class="success-summary-lbl">Reserved For</span>
                <span class="success-summary-val" id="summary-name">Abhishek Kumar</span>
              </div>
              <div class="success-summary-item">
                <span class="success-summary-lbl">Guests</span>
                <span class="success-summary-val" id="summary-guests">2 Guests</span>
              </div>
              <div class="success-summary-item">
                <span class="success-summary-lbl">Date & Time</span>
                <span class="success-summary-val" id="summary-datetime">June 22, 2026 at 10:00 AM</span>
              </div>
              <div class="success-summary-item code">
                <span class="success-summary-lbl">Booking Reference</span>
                <span class="success-summary-val" id="summary-code">BREW-8422</span>
              </div>
            </div>

            <button class="btn btn-outline" id="btn-reset-booking" style="width: 100%;">Book Another Table</button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       ABOUT SECTION
       ========================================================================== -->
  <section class="section-spacing" id="about" style="background-color: var(--card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
    <div class="container">
      <div class="about-layout">
        
        <div class="about-content reveal">
          <span class="section-eyebrow">About Us</span>
          <h2>Sourced With Intention.</h2>
          <p>We work directly with farms in Coorg and Chikmagalur, roasting in small batches every week. Every cup is a choice — for quality, for craft, and for the people who grew it.</p>
          
          <div class="about-stats">
            <div class="stat-box">
              <span class="stat-number">12 Yrs</span>
              <span class="stat-label">Roasting</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">100%</span>
              <span class="stat-label">Direct Trade</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">4.9 ★</span>
              <span class="stat-label">Google Rating</span>
            </div>
          </div>
        </div>

        <div class="about-graphic reveal">
          <div class="about-graphic-pattern"></div>

          <!-- Signature element: our actual roast curve — bean temperature
               climbing to first crack — for the small-batch Coorg/Chikmagalur
               roasts described alongside this panel. -->
          <svg class="roast-curve" viewBox="0 0 400 180" preserveAspectRatio="none" aria-hidden="true">
            <polyline class="roast-curve-line" points="0,165 40,158 80,142 120,116 155,92 178,75 196,63 214,54 238,45 270,37 310,29 355,23 400,19"></polyline>
            <circle class="roast-curve-marker" cx="196" cy="63" r="4"></circle>
            <circle class="roast-curve-marker" cx="310" cy="29" r="4"></circle>
          </svg>
          <div class="roast-curve-label">
            <span class="label-main">Roast Curve — Coorg &amp; Chikmagalur</span>
            <span class="label-sub">First Crack 9:12 · Drop 12:40</span>
          </div>

          <div class="about-graphic-logo">BREW & CO.</div>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       GALLERY SECTION
       ========================================================================== -->
  <section class="section-spacing" id="gallery">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-eyebrow">Our Space & Craft</span>
        <h2 class="section-title">The Roastery Gallery</h2>
      </div>

      <div class="gallery-grid reveal">
        <!-- Card 1 — featured hero tile (spans both column and row for an editorial, non-uniform grid) -->
        <div class="gallery-card span-col-2 span-row-2" data-gallery-index="0">
          <div class="gallery-gradient-bg g-1">
            <div class="gallery-content-overlay"></div>
            <div>
              <span class="gallery-label">Interior Sanctuary</span>
              <span class="gallery-subtitle">Warm minimal aesthetic, oak wood benches & skylights</span>
            </div>
          </div>
        </div>

        <!-- Card 2 — tall portrait tile, breaks the row rhythm -->
        <div class="gallery-card span-row-2" data-gallery-index="1">
          <div class="gallery-gradient-bg g-2">
            <div class="gallery-content-overlay"></div>
            <div>
              <span class="gallery-label">Latte Art Craft</span>
              <span class="gallery-subtitle">Silky microfoam, hand-poured with love</span>
            </div>
          </div>
        </div>

        <!-- Card 3 (Span col 2) -->
        <div class="gallery-card span-col-2" data-gallery-index="2">
          <div class="gallery-gradient-bg g-3">
            <div class="gallery-content-overlay"></div>
            <div>
              <span class="gallery-label">Slow Sunrise Roast</span>
              <span class="gallery-subtitle">Handpicked green beans from Chikmagalur</span>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="gallery-card" data-gallery-index="3">
          <div class="gallery-gradient-bg g-4">
            <div class="gallery-content-overlay"></div>
            <div>
              <span class="gallery-label">Roaster Diagnostics</span>
              <span class="gallery-subtitle">Monitoring roast curvatures in small batches</span>
            </div>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="gallery-card" data-gallery-index="4">
          <div class="gallery-gradient-bg g-5">
            <div class="gallery-content-overlay"></div>
            <div>
              <span class="gallery-label">Pour-Over Ritual</span>
              <span class="gallery-subtitle">Precise extractions via copper v60 cones</span>
            </div>
          </div>
        </div>

        <!-- Card 6 — ink-blot silhouette, not another rounded rectangle -->
        <div class="gallery-card gallery-blob" data-gallery-index="5">
          <div class="gallery-gradient-bg g-6">
            <div class="gallery-content-overlay"></div>
            <div style="color: var(--primary);">
              <span class="gallery-label" style="text-shadow: none;">Slow Morning</span>
              <span class="gallery-subtitle" style="text-shadow: none; opacity: 0.9;">Warm light shining through coffee steam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Lightbox Modal -->
  <div class="lightbox" id="lightbox">
    <div class="lightbox-content" id="lightbox-content-box">
      <button class="btn-close-lightbox" id="lightbox-close" aria-label="Close Lightbox">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div>
        <h3 class="lightbox-label" id="lightbox-title">Interior Sanctuary</h3>
        <p class="lightbox-desc" id="lightbox-desc">Warm minimal aesthetic, oak wood benches & skylights. Sourced, roasted, and served on site in our open garden roastery.</p>
      </div>
    </div>
  </div>

  <!-- ==========================================================================
       CONTACT & MAP SECTION
       ========================================================================== -->
  <section class="section-spacing contact-section" id="contact">
    <div class="container">
      <div class="contact-layout">
        
        <!-- Left: Static Map Design -->
        <div class="map-placeholder reveal">
          <div class="map-graphic"></div>
          <div class="map-pin-container">
            <div class="map-pin">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <span class="map-label">Hauz Khas Village, Delhi</span>
          </div>
        </div>

        <!-- Right: Address Coordinates -->
        <div class="contact-details reveal">
          <div class="contact-group">
            <h4>Address</h4>
            <p>Shop 12A, Lakeside Boulevard,<br>Hauz Khas Village, New Delhi - 110016</p>
          </div>

          <div class="contact-group">
            <h4>Roastery Hours</h4>
            <p>Open Daily · 8:00 AM - 10:00 PM<br><em>Breakfast served till 4:00 PM</em></p>
          </div>

          <div class="contact-group">
            <h4>Get In Touch</h4>
            <p>Phone: +91 98108 55432<br>Email: hello@brewandco.in</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       FOOTER
       ========================================================================== -->
  <footer class="footer">
    <div class="container">
      <div class="footer-layout">
        
        <div class="footer-left">
          <span class="logo">BREW & CO.</span>
          <p>Direct-trade beans from Coorg and Chikmagalur, roasted on site in small weekly batches for Hauz Khas mornings.</p>
        </div>

        <div class="footer-right">
          <div class="footer-col">
            <h5>Navigation</h5>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reserve">Reserve</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Social</h5>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LBB Delhi</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Google Maps</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <span>© 2026 Brew & Co. Roasters. All rights reserved.</span>
        <span>Made with intention in Delhi, India</span>
      </div>

      <div class="footer-wordmark">BREW & CO.</div>
    </div>
  </footer>

  <!-- Custom Alert Modal (Success Notifications) -->
  <div class="alert-modal" id="alert-modal">
    <div class="alert-modal-content">
      <div class="alert-icon">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h3 class="alert-title" id="alert-title">Order Placed</h3>
      <p class="alert-msg" id="alert-msg">Your espresso order has been sent to our barista bar. Feel free to collect it from the counter soon!</p>
      <button class="btn btn-primary" id="alert-close-btn" style="width: 100%;">Awesome</button>
    </div>
  </div>

  <!-- ==========================================================================
       JAVASCRIPT LOGIC
       ========================================================================== -->
`;
