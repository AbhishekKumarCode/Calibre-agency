export const verdantMarkup = `
  <!-- TOAST CONTAINER -->
  <div id="toast-container" class="toast-container"></div>

  <!-- NAVIGATION HEADER -->
  <header class="header" id="main-header">
    <div class="container nav-container">
      <a href="#hero" class="logo">VERDANT LIVING</a>
      <nav class="nav-links">
        <a href="#bestsellers" class="nav-link text-link-underline" onclick="setFilter('all')">Shop</a>
        <a href="#rooms" class="nav-link text-link-underline">Rooms</a>
        <a href="#journal" class="nav-link text-link-underline">The Edit</a>
        <a href="#footer" class="nav-link text-link-underline">About</a>
        <a href="#bestsellers" class="nav-link saved-count-link" id="saved-counter">Saved (0)</a>
      </nav>
    </div>
  </header>

  <!-- MOBILE NAVIGATION BAR (STICKY BOTTOM) -->
  <nav class="mobile-nav-bar">
    <div class="mobile-nav-bar-container">
      <a href="#bestsellers" class="mobile-nav-bar-link" onclick="setFilter('all')">Shop</a>
      <a href="#rooms" class="mobile-nav-bar-link">Rooms</a>
      <a href="#quiz" class="mobile-nav-bar-link">Quiz</a>
      <a href="#journal" class="mobile-nav-bar-link">The Edit</a>
      <a href="#bestsellers" class="mobile-nav-bar-link" id="saved-counter-mobile">Saved (0)</a>
    </div>
  </nav>

  <!-- HERO SECTION - MAGAZINE COVER / MASTHEAD -->
  <section class="cover-masthead-bar" id="hero">
    <div class="container cover-masthead-row">
      <a href="#hero" class="cover-logotype">Verdant Living</a>
      <span class="cover-issue-line">Issue No. 12 &middot; Considered Living &middot; 2026</span>
    </div>
  </section>

  <section class="cover-photo-frame">
    <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80" alt="Beautiful Minimalist Sage Living Room Corner">
    <div class="cover-scrim"></div>
    <div class="cover-overlay-content">
      <span class="cover-kicker">Featured Story</span>
      <h1 class="cover-headline">Make Your Space Speak.</h1>
      <p class="cover-dek">Thoughtfully designed home decor for considered living.</p>
      <a href="#bestsellers" class="cover-cta text-link-underline">Explore the collection &mdash;</a>
    </div>
  </section>

  <!-- SHOP BY ROOM - MAGAZINE SPREAD LAYOUT -->
  <section class="section rooms-section" id="rooms">
    <div class="container">
      <span class="label-caps">EXPLORE BY SPACE</span>
      <h2 class="section-title">Four rooms. One philosophy.</h2>

      <div class="rooms-layout-grid">
        <!-- Row 1: Living and Bedroom -->
        <div class="rooms-row-1">
          <div class="room-tile room-living" onclick="scrollToAndFilter('living-room')">
            <div class="img-hover-container">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" alt="Living Room Space Decor" loading="lazy">
            </div>
            <div class="room-name-wrapper">
              <span class="room-name gold-underline"><span class="room-glyph">&#10087;</span>&nbsp;LIVING ROOM</span>
              <span class="room-plate-no">Plate IV.</span>
            </div>
          </div>

          <div class="room-tile room-bedroom" onclick="scrollToAndFilter('bedroom')">
            <div class="img-hover-container">
              <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" alt="Considered Bed Textiles" loading="lazy">
            </div>
            <div class="room-name-wrapper">
              <span class="room-name gold-underline"><span class="room-glyph">&#10087;</span>&nbsp;BEDROOM</span>
              <span class="room-plate-no">Plate I.</span>
            </div>
          </div>
        </div>

        <!-- Row 2: Kitchen and Balcony -->
        <div class="rooms-row-2">
          <div class="room-tile room-kitchen" onclick="scrollToAndFilter('kitchen')">
            <div class="img-hover-container">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Warm Stoneware and Oak Kitchen Decor" loading="lazy">
            </div>
            <div class="room-name-wrapper">
              <span class="room-name gold-underline"><span class="room-glyph">&#10087;</span>&nbsp;KITCHEN</span>
              <span class="room-plate-no">Plate III.</span>
            </div>
          </div>

          <div class="room-tile room-balcony" onclick="scrollToAndFilter('balcony')">
            <div class="img-hover-container">
              <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80" alt="Plant Filled Green Balcony Cozy Setup" loading="lazy">
            </div>
            <div class="room-name-wrapper">
              <span class="room-name gold-underline"><span class="room-glyph">&#10087;</span>&nbsp;BALCONY</span>
              <span class="room-plate-no">Plate II.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- THE LOOKBOOK - EDITORIAL PLATE SPREAD -->
  <section class="section lookbook-section" id="lookbook">
    <div class="container">
      <div class="lookbook-intro-row">
        <div>
          <span class="label-caps">THE LOOKBOOK</span>
          <h2 class="section-title section-title--flush">Spaces, styled.</h2>
        </div>
        <p class="lookbook-intro-text">A running record of rooms we've dressed &mdash; three plates from the current issue, shot on location.</p>
      </div>

      <div class="lookbook-grid">
        <figure class="lookbook-plate lookbook-plate--tall">
          <div class="lookbook-plate-frame img-hover-container">
            <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80" alt="Rattan accent chair layered over a handwoven jute rug" loading="lazy">
          </div>
          <figcaption class="lookbook-caption"><span class="lookbook-cap-no">Plate I.</span>The rattan chair, layered over jute and pre-washed linen, in a Bengaluru living room.<span class="lookbook-credit">Styling &mdash; The Verdant Living Edit</span></figcaption>
        </figure>

        <figure class="lookbook-plate">
          <div class="lookbook-plate-frame img-hover-container">
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=80" alt="Bed layered with GOTS-certified linens" loading="lazy">
          </div>
          <figcaption class="lookbook-caption"><span class="lookbook-cap-no">Plate II.</span>Organic cotton, stonewashed linen, and mango wood, layered by lamplight.<span class="lookbook-credit">Styling &mdash; The Verdant Living Edit</span></figcaption>
        </figure>

        <figure class="lookbook-plate">
          <div class="lookbook-plate-frame img-hover-container">
            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80" alt="Terracotta planters and string lights on a balcony" loading="lazy">
          </div>
          <figcaption class="lookbook-caption"><span class="lookbook-cap-no">Plate III.</span>Unglazed terracotta and solar string lights, extending the room outward.<span class="lookbook-credit">Styling &mdash; The Verdant Living Edit</span></figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- BESTSELLERS - PRACTICAL CATALOG INDEX -->
  <section class="section bestsellers-section" id="bestsellers">
    <div class="container">
      <div class="bestsellers-header-flex">
        <div>
          <span class="label-caps">THE INDEX</span>
          <h2 class="section-title section-title--flush">Our Bestsellers.</h2>
          <p class="catalog-index-sub">Every plate above, sorted for shopping &mdash; browse the full catalog by room.</p>
        </div>
        <div class="bestsellers-filter-nav">
          <button class="filter-btn active" id="btn-all" onclick="setFilter('all')">All</button>
          <button class="filter-btn" id="btn-living" onclick="setFilter('living-room')">Living Room</button>
          <button class="filter-btn" id="btn-bedroom" onclick="setFilter('bedroom')">Bedroom</button>
          <button class="filter-btn" id="btn-kitchen" onclick="setFilter('kitchen')">Kitchen</button>
          <button class="filter-btn" id="btn-balcony" onclick="setFilter('balcony')">Balcony</button>
        </div>
      </div>

      <div class="bestsellers-list" id="bestsellers-list">
        <!-- Living Room -->
        <div class="product-row" data-room="living-room" data-id="lr-1">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=200&q=80" alt="Handwoven Jute Rug" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Handwoven Jute Rug, 6x9</h4>
              <p class="product-desc">A natural fibre rug, hand-loomed in Rajasthan.</p>
              <span class="product-tag">LIVING ROOM</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹4,200</span>
            <button class="add-to-bag-btn" onclick="addToBag('Handwoven Jute Rug, 6x9')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('lr-1')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="living-room" data-id="lr-2">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=200&q=80" alt="Ceramic Vase Set" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Ceramic Vase Set, 3 piece</h4>
              <p class="product-desc">Matte stoneware, each one unique.</p>
              <span class="product-tag">LIVING ROOM</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹1,800</span>
            <button class="add-to-bag-btn" onclick="addToBag('Ceramic Vase Set')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('lr-2')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="living-room" data-id="lr-3">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=200&q=80" alt="Linen Throw Pillow Covers" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Linen Throw Pillow Covers, set of 2</h4>
              <p class="product-desc">Pre-washed European linen.</p>
              <span class="product-tag">LIVING ROOM</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹1,200</span>
            <button class="add-to-bag-btn" onclick="addToBag('Linen Pillow Covers')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('lr-3')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="living-room" data-id="lr-4">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=200&q=80" alt="Rattan Accent Chair" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Rattan Accent Chair</h4>
              <p class="product-desc">Hand-woven rattan on oak frame.</p>
              <span class="product-tag">LIVING ROOM</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹8,500</span>
            <button class="add-to-bag-btn" onclick="addToBag('Rattan Accent Chair')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('lr-4')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <!-- Bedroom -->
        <div class="product-row" data-room="bedroom" data-id="br-1">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=200&q=80" alt="Organic Cotton Bedsheet Set" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Organic Cotton Bedsheet Set</h4>
              <p class="product-desc">GOTS certified, 300 thread count.</p>
              <span class="product-tag">BEDROOM</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹3,200</span>
            <button class="add-to-bag-btn" onclick="addToBag('Organic Cotton Bedsheet Set')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('br-1')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="bedroom" data-id="br-2">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=200&q=80" alt="Wooden Bedside Lamp" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Wooden Bedside Lamp</h4>
              <p class="product-desc">Solid mango wood, linen shade.</p>
              <span class="product-tag">BEDROOM</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹2,400</span>
            <button class="add-to-bag-btn" onclick="addToBag('Wooden Bedside Lamp')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('br-2')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="bedroom" data-id="br-3">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1528640938883-e1d8d44ddf1d?auto=format&fit=crop&w=200&q=80" alt="Macrame Wall Hanging" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Macrame Wall Hanging</h4>
              <p class="product-desc">Hand-knotted cotton cord.</p>
              <span class="product-tag">BEDROOM</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹1,500</span>
            <button class="add-to-bag-btn" onclick="addToBag('Macrame Wall Hanging')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('br-3')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="bedroom" data-id="br-4">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=200&q=80" alt="Linen Curtains" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Linen Curtains, pair</h4>
              <p class="product-desc">Light-filtering, stonewashed.</p>
              <span class="product-tag">BEDROOM</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹2,800</span>
            <button class="add-to-bag-btn" onclick="addToBag('Linen Curtains, pair')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('br-4')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <!-- Kitchen -->
        <div class="product-row" data-room="kitchen" data-id="kt-1">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=200&q=80" alt="Stoneware Dinner Set" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Stoneware Dinner Set, 16 piece</h4>
              <p class="product-desc">Reactive glaze, dishwasher safe.</p>
              <span class="product-tag">KITCHEN</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹5,500</span>
            <button class="add-to-bag-btn" onclick="addToBag('Stoneware Dinner Set')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('kt-1')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="kitchen" data-id="kt-2">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1594793740097-94d3e43f589d?auto=format&fit=crop&w=200&q=80" alt="Wooden Cutting Board Set" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Wooden Cutting Board Set</h4>
              <p class="product-desc">Acacia wood, three sizes.</p>
              <span class="product-tag">KITCHEN</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹1,400</span>
            <button class="add-to-bag-btn" onclick="addToBag('Wooden Cutting Board Set')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('kt-2')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="kitchen" data-id="kt-3">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1589363460779-cd717fc244ac?auto=format&fit=crop&w=200&q=80" alt="Glass Storage Jars" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Glass Storage Jars, set of 4</h4>
              <p class="product-desc">Borosilicate, airtight seals.</p>
              <span class="product-tag">KITCHEN</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹1,600</span>
            <button class="add-to-bag-btn" onclick="addToBag('Glass Storage Jars')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('kt-3')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="kitchen" data-id="kt-4">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=200&q=80" alt="Copper Water Bottles" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Copper Water Bottles, set of 2</h4>
              <p class="product-desc">Hand-hammered, Ayurvedic design.</p>
              <span class="product-tag">KITCHEN</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹1,900</span>
            <button class="add-to-bag-btn" onclick="addToBag('Copper Water Bottles')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('kt-4')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <!-- Balcony -->
        <div class="product-row" data-room="balcony" data-id="bl-1">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=200&q=80" alt="Terracotta Planters" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Terracotta Planters, set of 3</h4>
              <p class="product-desc">Hand-thrown, unglazed natural clay.</p>
              <span class="product-tag">BALCONY</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹1,800</span>
            <button class="add-to-bag-btn" onclick="addToBag('Terracotta Planters')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('bl-1')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="balcony" data-id="bl-2">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=200&q=80" alt="Outdoor Floor Cushions" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Outdoor Floor Cushions</h4>
              <p class="product-desc">Water-resistant structured canvas.</p>
              <span class="product-tag">BALCONY</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹2,200</span>
            <button class="add-to-bag-btn" onclick="addToBag('Outdoor Floor Cushions')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('bl-2')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="balcony" data-id="bl-3">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=200&q=80" alt="String Lights" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">String Lights, warm white, 10m</h4>
              <p class="product-desc">Solar powered copper wiring.</p>
              <span class="product-tag">BALCONY</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹900</span>
            <button class="add-to-bag-btn" onclick="addToBag('String Lights, warm white')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('bl-3')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-row" data-room="balcony" data-id="bl-4">
          <div class="product-left-cell">
            <div class="product-thumb">
              <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=200&q=80" alt="Hanging Plant Stand" loading="lazy">
            </div>
            <div class="product-meta">
              <h4 class="product-title">Hanging Plant Stand</h4>
              <p class="product-desc">Powder-coated minimalist steel.</p>
              <span class="product-tag">BALCONY</span>
            </div>
          </div>
          <div class="product-right-cell">
            <span class="product-price">₹2,600</span>
            <button class="add-to-bag-btn" onclick="addToBag('Hanging Plant Stand')">Add to bag</button>
            <button class="wishlist-btn" onclick="toggleWishlist('bl-4')" aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STYLE QUIZ - FULL-BLEED PERSONALITY QUIZ -->
  <section class="section quiz-section" id="quiz">
    <div class="container">
      <div class="quiz-card-wrapper">
        <span class="label-caps">A SHORT QUIZ</span>
        <h2 class="section-title">Find your style.</h2>

        <!-- Progress Indicator -->
        <div class="quiz-progress-dots" id="quiz-dots">
          <div class="quiz-dot active"></div>
          <div class="quiz-dot"></div>
          <div class="quiz-dot"></div>
        </div>

        <!-- Quiz Screens Container -->
        <div id="quiz-question-container" class="quiz-question-box">
          <!-- Populated dynamically via JS -->
        </div>

        <!-- Results Block -->
        <div id="quiz-results-container" class="quiz-results-box">
          <h3 class="style-title-reveal" id="results-style-name">Organic Minimalist</h3>
          <p class="style-description-reveal" id="results-style-desc">You appreciate neutral color tones, clean geometric lines, organic materials like linen and solid oak, and open, unhurried rooms.</p>

          <span class="recommendations-title">Recommended Curation</span>
          <div class="quiz-recs-list" id="quiz-recs-list">
            <!-- Recommended Bestseller rows injected here -->
          </div>

          <button class="retake-quiz-link" onclick="resetQuiz()">Retake the quiz</button>
        </div>
      </div>
    </div>
  </section>

  <!-- THE EDIT - JOURNAL FEATURE SPREAD -->
  <section class="section journal-section" id="journal">
    <div class="container">
      <span class="label-caps">JOURNAL</span>
      <h2 class="section-title">The Edit.</h2>

      <!-- Lead Feature Article -->
      <article class="journal-lead">
        <div class="journal-lead-img img-hover-container">
          <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80" alt="Jute Rug interior setup" loading="lazy">
        </div>
        <div>
          <span class="journal-tag">STYLING</span>
          <h3 class="journal-lead-title">Five ways to style a jute rug</h3>
          <p class="journal-lead-byline">Words by The Verdant Living Desk &nbsp;&middot;&nbsp; 6 min read</p>
          <div class="journal-lead-body journal-drop-cap">
            <p>Natural textures are the foundation of any warm minimalist environment. A handwoven jute rug, with its earthy variations in golden-brown tones, sets an unhurried, grounded canvas for furniture arrangements. Consider layering: centering a smaller, detailed wool rug over a larger jute base creates visual zoning and depth, particularly in seating areas with low-profile wooden frames.</p>
            <blockquote class="journal-pull-quote">&ldquo;Generous wood borders enhance the sense of space and structure.&rdquo;</blockquote>
            <p>Balance textures by pairing the rough, organic feel of jute with soft pre-washed linen drapery and smooth glazed ceramic vessels &mdash; the contrast highlights the individual beauty of each element. Leave at least 18 inches of exposed wooden floor framing the rug so the room can breathe.</p>
          </div>
          <button class="journal-lead-cta text-link-underline" onclick="openArticle(1)">Read the full story &mdash;</button>
        </div>
      </article>

      <!-- Secondary Articles -->
      <span class="journal-secondary-label">Also in this issue</span>
      <div class="journal-grid">
        <article class="journal-card">
          <div class="journal-img-container img-hover-container">
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80" alt="Bed layered with sheets" loading="lazy">
          </div>
          <div class="journal-meta-row">
            <span class="journal-tag">MATERIALS</span>
          </div>
          <h3 class="journal-title">The art of layering textiles</h3>
          <p class="journal-excerpt">An exploration of stonewashed European linens, GOTS organic cottons, and custom weaves that speak comfort.</p>
          <button class="journal-read-link text-link-underline" onclick="openArticle(2)">Read the story &mdash;</button>
        </article>

        <article class="journal-card">
          <div class="journal-img-container img-hover-container">
            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80" alt="Cozy green plants setup" loading="lazy">
          </div>
          <div class="journal-meta-row">
            <span class="journal-tag">OUTDOOR</span>
          </div>
          <h3 class="journal-title">Bringing the outdoors in: a balcony guide</h3>
          <p class="journal-excerpt">A quiet guide to setting up natural terracotta spaces, water-resistant floor cushions, and ambient solar string lights.</p>
          <button class="journal-read-link text-link-underline" onclick="openArticle(3)">Read the story &mdash;</button>
        </article>
      </div>
    </div>
  </section>

  <!-- GIFT REGISTRY - QUIET VISUAL SECTION -->
  <section class="section registry-section" id="registry">
    <div class="container registry-grid">
      <div class="registry-desc-container">
        <span class="label-caps">FOR ANY OCCASION</span>
        <h2 class="section-title">Create a registry.</h2>
        <p class="registry-body-text">
          Housewarming, wedding, or just because &mdash; build a list of jute rugs, ceramics, and linens you love, and share it with the people who'll want to spoil you.
        </p>

        <button class="registry-interactive-cta text-link-underline" id="start-registry-btn" onclick="showRegistryInput()">Start a registry &mdash;</button>

        <!-- Dynamic Registry Form -->
        <div class="registry-input-wrapper" id="registry-form-block">
          <div class="registry-input-inner">
            <input type="text" id="registry-user-name" class="registry-input-field" placeholder="Enter your full name" onkeydown="handleRegistrySubmit(event)">
            <button class="registry-submit-arrow" onclick="submitRegistryName()">&rarr;</button>
          </div>
        </div>

        <!-- Success link box -->
        <div class="registry-success-box" id="registry-success-block">
          <p>Your registry has been initialized. Share your curated selection with friends:</p>
          <span class="registry-success-link" id="registry-shareable-link">verdantliving.co/registry/anonymous</span>
        </div>
      </div>

      <!-- Mockup Visual Display -->
      <div class="registry-mockup-card">
        <h3 class="registry-mockup-title" id="registry-card-title">Ananya & Kabir's Housewarming</h3>

        <div class="registry-mockup-item">
          <div class="registry-item-left">
            <div class="registry-item-thumb">
              <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=200&q=80" alt="Jute Rug" loading="lazy">
            </div>
            <span class="registry-item-name">Handwoven Jute Rug, 6x9</span>
          </div>
          <div class="registry-item-right">
            <span class="registry-item-price">₹4,200</span>
            <span class="registry-check-status">
              <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
              Purchased
            </span>
          </div>
        </div>

        <div class="registry-mockup-item">
          <div class="registry-item-left">
            <div class="registry-item-thumb">
              <img src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=200&q=80" alt="Ceramic Vases" loading="lazy">
            </div>
            <span class="registry-item-name">Ceramic Vase Set, 3 piece</span>
          </div>
          <div class="registry-item-right">
            <span class="registry-item-price">₹1,800</span>
            <span class="registry-check-status" style="color: var(--primary);">
              Available
            </span>
          </div>
        </div>

        <div class="registry-mockup-item">
          <div class="registry-item-left">
            <div class="registry-item-thumb">
              <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=200&q=80" alt="Bedside Lamp" loading="lazy">
            </div>
            <span class="registry-item-name">Wooden Bedside Lamp</span>
          </div>
          <div class="registry-item-right">
            <span class="registry-item-price">₹2,400</span>
            <span class="registry-check-status">
              <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
              Purchased
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-top-grid">
        <div>
          <h4 class="footer-brand-title">VERDANT LIVING</h4>
          <p class="footer-brand-desc">An editorial shop for hand-loomed textiles, GOTS-certified linens, and small-batch ceramics, sourced from artisan workshops and styled for slow living.</p>
        </div>
        <div class="footer-nav-col">
          <h5>Spaces</h5>
          <ul class="footer-nav-links">
            <li><a href="#bestsellers" class="footer-nav-link" onclick="scrollToAndFilter('living-room')">Living Space</a></li>
            <li><a href="#bestsellers" class="footer-nav-link" onclick="scrollToAndFilter('bedroom')">Bed Chamber</a></li>
            <li><a href="#bestsellers" class="footer-nav-link" onclick="scrollToAndFilter('kitchen')">Kitchen Pantry</a></li>
            <li><a href="#bestsellers" class="footer-nav-link" onclick="scrollToAndFilter('balcony')">Verandah & Balcony</a></li>
          </ul>
        </div>
        <div class="footer-newsletter-col">
          <h5>The Journal</h5>
          <p class="footer-newsletter-desc">Subscribe to receive seasonal design edits, material explorations, and private collection launches.</p>
          <div class="newsletter-form-container">
            <input type="email" id="newsletter-email" class="newsletter-input" placeholder="Your email address" onkeydown="handleNewsletterSubmit(event)">
            <button class="newsletter-submit-btn" onclick="submitNewsletter()">&rarr;</button>
          </div>
        </div>
      </div>

      <div class="giant-footer-watermark">VERDANT LIVING</div>

      <div class="footer-bottom-row">
        <span>&copy; 2026 Verdant Living. All rights reserved.</span>
        <div class="footer-bottom-links">
          <a href="#" class="footer-nav-link">Privacy policy</a>
          <a href="#" class="footer-nav-link">Terms of service</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- ARTICLE DRAWER PANEL -->
  <div class="drawer-overlay" id="article-drawer-overlay" onclick="closeArticle()">
    <div class="drawer-panel" onclick="event.stopPropagation()">
      <div class="drawer-header">
        <span class="logo">THE JOURNAL</span>
        <button class="drawer-close-btn" onclick="closeArticle()">&times;</button>
      </div>
      <div class="drawer-body-content" id="drawer-body-content">
        <!-- populated dynamically -->
      </div>
    </div>
  </div>
`;
