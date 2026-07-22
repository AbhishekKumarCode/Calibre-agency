export const strikerMarkup = `
  <!-- TOAST CONTAINER -->
  <div id="toast-container" class="toast-container"></div>

  <!-- NAVIGATION HEADER -->
  <header class="header">
    <div class="container nav-container">
      <a href="/" class="nav-logo">
        <span>STRIKER</span> SPORTS
      </a>
      <nav class="nav-links">
        <a href="#products" class="nav-link" onclick="setFilter('all')">Shop</a>
        <a href="#size-guide" class="nav-link">Size Guide</a>
        <a href="#bulk" class="nav-link">Bulk Orders</a>
        <a href="#reviews" class="nav-link">Reviews</a>
        <button class="btn-athletic nav-cta" onclick="scrollToShop()">Shop Now</button>
      </nav>
    </div>
  </header>

  <!-- HERO SECTION: scoreboard readout, not a headline/subhead/CTA block -->
  <section class="section hero-section" id="hero">
    <div class="hero-accent-bg"></div>
    <div class="container">
      <div class="hero-scoreboard">

        <!-- Live status bar: real clock + store-open state, not decoration -->
        <div class="hero-scoreboard-bar">
          <span class="hero-store-status" id="hero-store-status"><span class="hero-live-dot"
              aria-hidden="true"></span>STORE OPEN</span>
          <span class="hero-location">Defence Colony &middot; New Delhi</span>
          <span class="hero-clock" id="hero-clock" aria-label="Current time">00:00:00</span>
        </div>

        <div class="hero-main-row">
          <div class="hero-numeral-wrap">
            <span class="hero-numeral" aria-hidden="true">24</span>
            <span class="hero-numeral-label">Hour<br>Delhi NCR<br><strong>Delivery</strong></span>
          </div>
          <div class="hero-copy-block">
            <span class="label-accent">Delhi's turf-side supplier</span>
            <h1 class="hero-headline">Bats Knocked In. <br>Boots Broken In.</h1>
            <p class="hero-subtext">SS and SG cricket kits, Nike and Adidas boots, Yonex rackets, and gym gear
              &mdash; in stock at our Defence Colony store and shipped across Delhi NCR in 24 hours.
            </p>
            <div class="hero-action-row">
              <button class="btn-athletic" onclick="scrollToShop()">Explore Collection</button>
              <button class="btn-athletic-outline" onclick="scrollToBulk()">Request Quote</button>
            </div>
          </div>
        </div>

        <!-- Sport filter recast as a scoreboard tab row -->
        <div class="hero-sport-row" role="tablist" aria-label="Filter equipment by sport">
          <button class="hero-sport-tab" onclick="scrollToAndFilter('cricket')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M18 3a2.1 2.1 0 0 1 4 4l-13 13a4 4 0 0 1-3 1H3v-3a4 4 0 0 1 1-3L18 3z" />
            </svg>
            Cricket
          </button>
          <button class="hero-sport-tab" onclick="scrollToAndFilter('football')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v20M2 12h20M12 12a5 5 0 1 0 0-10 5 5 0 1 0 0 10z" />
            </svg>
            Football
          </button>
          <button class="hero-sport-tab" onclick="scrollToAndFilter('badminton')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M12 2L4 18h16L12 2zM12 22a2 2 0 1 0 0-4 2 2 0 1 0 0 4z" />
            </svg>
            Badminton
          </button>
          <button class="hero-sport-tab" onclick="scrollToAndFilter('fitness')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path
                d="M6.5 6.5h11M6.5 17.5h11M3 9.5v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm13 0v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2z" />
            </svg>
            Fitness
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION DIVIDER -->
  <div class="divider-clip"></div>

  <!-- FEATURED PRODUCTS -->
  <section class="section products-section" id="products">
    <div class="container">
      <div class="products-header-flex">
        <div>
          <span class="label-accent">Performance catalog</span>
          <h2 class="section-title">Featured Equipment</h2>
        </div>
        <div class="products-tab-list">
          <button class="tab-btn active" id="tab-all" onclick="setFilter('all')">All</button>
          <button class="tab-btn" id="tab-cricket" onclick="setFilter('cricket')">Cricket</button>
          <button class="tab-btn" id="tab-football" onclick="setFilter('football')">Football</button>
          <button class="tab-btn" id="tab-badminton" onclick="setFilter('badminton')">Badminton</button>
          <button class="tab-btn" id="tab-fitness" onclick="setFilter('fitness')">Fitness</button>
        </div>
      </div>

      <!-- Catalog grouped by sport, each opening on a wide "captain's pick"
           banner card, separated by a team-divider header carrying real
           stock counts - not a single uniform 16-tile grid -->
      <div class="products-groups" id="products-grid">

        <!-- Cricket group -->
        <div class="sport-group" data-sport-group="cricket">
          <div class="sport-group-header">
            <h3 class="sport-group-name">Cricket</h3>
            <span class="sport-group-count">4 lines in stock</span>
          </div>

          <div class="product-card product-card-banner" data-sport="cricket">
            <span class="product-card-badge">Staff Pick</span>
            <div class="product-visual-wrapper">
              <img
                src="https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?auto=format&fit=crop&w=400&h=300&q=80"
                alt="Cricket stadium pitch" width="400" height="300" loading="lazy">
            </div>
            <div class="product-info">
              <div class="product-rating">
                <span class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                <span class="review-count">(124)</span>
              </div>
              <p class="product-featured-tag">"The willow our own coaches reach for first" &mdash; grade-1 English
                willow, hand-pressed for the Delhi academy circuit.</p>
              <h3 class="product-name">SS Ton Cricket Bat</h3>
              <div class="product-price-row">
                <span class="product-price">₹8,999</span>
                <button class="product-add-btn" onclick="triggerToast('SS Ton Cricket Bat')">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="sport-subgrid">
            <div class="product-card" data-sport="cricket">
              <div class="product-visual-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="SG Test cricket ball on grass" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                  <span class="review-count">(94)</span>
                </div>
                <h3 class="product-name">SG Test Ball (Box of 6)</h3>
                <div class="product-price-row">
                  <span class="product-price">₹2,400</span>
                  <button class="product-add-btn" onclick="triggerToast('SG Test Cricket Balls')">Add to Cart</button>
                </div>
              </div>
            </div>

            <div class="product-card" data-sport="cricket">
              <div class="product-visual-wrapper">
                <img src="https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Cricket ground" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                  <span class="review-count">(88)</span>
                </div>
                <h3 class="product-name">Cricket Pads (Pro Series)</h3>
                <div class="product-price-row">
                  <span class="product-price">₹3,200</span>
                  <button class="product-add-btn" onclick="triggerToast('Cricket Pads (Pro Series)')">Add to
                    Cart</button>
                </div>
              </div>
            </div>

            <div class="product-card" data-sport="cricket">
              <div class="product-visual-wrapper">
                <img src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Padded sports gloves" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="4 out of 5 stars">★★★★☆</span>
                  <span class="review-count">(72)</span>
                </div>
                <h3 class="product-name">Batting Gloves</h3>
                <div class="product-price-row">
                  <span class="product-price">₹1,800</span>
                  <button class="product-add-btn" onclick="triggerToast('Batting Gloves')">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Football group -->
        <div class="sport-group" data-sport-group="football">
          <div class="sport-group-header">
            <h3 class="sport-group-name">Football</h3>
            <span class="sport-group-count">4 lines in stock</span>
          </div>

          <div class="product-card product-card-banner" data-sport="football">
            <span class="product-card-badge">Elite</span>
            <div class="product-visual-wrapper">
              <img
                src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=400&h=300&q=80"
                alt="Football boot and ball on turf" width="400" height="300" loading="lazy">
            </div>
            <div class="product-info">
              <div class="product-rating">
                <span class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                <span class="review-count">(152)</span>
              </div>
              <p class="product-featured-tag">"Boot of choice for the Delhi NCR league circuit" &mdash; low-profile
                studs built for turf that turns to concrete by January.</p>
              <h3 class="product-name">Nike Phantom Boots</h3>
              <div class="product-price-row">
                <span class="product-price">₹6,500</span>
                <button class="product-add-btn" onclick="triggerToast('Nike Phantom Boots')">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="sport-subgrid">
            <div class="product-card" data-sport="football">
              <div class="product-visual-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1593766827228-8737b4534639?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Football and cleat close-up" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                  <span class="review-count">(110)</span>
                </div>
                <h3 class="product-name">Adidas Match Ball</h3>
                <div class="product-price-row">
                  <span class="product-price">₹2,200</span>
                  <button class="product-add-btn" onclick="triggerToast('Adidas Match Ball')">Add to Cart</button>
                </div>
              </div>
            </div>

            <div class="product-card" data-sport="football">
              <div class="product-visual-wrapper">
                <img src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Shin Guards Pro" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="4 out of 5 stars">★★★★☆</span>
                  <span class="review-count">(61)</span>
                </div>
                <h3 class="product-name">Shin Guards (Pro)</h3>
                <div class="product-price-row">
                  <span class="product-price">₹900</span>
                  <button class="product-add-btn" onclick="triggerToast('Shin Guards (Pro)')">Add to Cart</button>
                </div>
              </div>
            </div>

            <div class="product-card" data-sport="football">
              <div class="product-visual-wrapper">
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Training Cones" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="4 out of 5 stars">★★★★☆</span>
                  <span class="review-count">(45)</span>
                </div>
                <h3 class="product-name">Training Cones (Set of 20)</h3>
                <div class="product-price-row">
                  <span class="product-price">₹600</span>
                  <button class="product-add-btn" onclick="triggerToast('Training Cones (Set of 20)')">Add to
                    Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Badminton group -->
        <div class="sport-group" data-sport-group="badminton">
          <div class="sport-group-header">
            <h3 class="sport-group-name">Badminton</h3>
            <span class="sport-group-count">4 lines in stock</span>
          </div>

          <div class="product-card product-card-banner" data-sport="badminton">
            <span class="product-card-badge">Hot Seller</span>
            <div class="product-visual-wrapper">
              <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=400&h=300&q=80"
                alt="Yonex Astrox Racket" width="400" height="300" loading="lazy">
            </div>
            <div class="product-info">
              <div class="product-rating">
                <span class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                <span class="review-count">(136)</span>
              </div>
              <p class="product-featured-tag">"Our fastest-restocked racket, three seasons running" &mdash; the
                head-heavy swing weight Gurgaon academy players ask for by name.</p>
              <h3 class="product-name">Yonex Astrox Racket</h3>
              <div class="product-price-row">
                <span class="product-price">₹7,200</span>
                <button class="product-add-btn" onclick="triggerToast('Yonex Astrox Racket')">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="sport-subgrid">
            <div class="product-card" data-sport="badminton">
              <div class="product-visual-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Shuttlecock resting on a badminton racket" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="4 out of 5 stars">★★★★☆</span>
                  <span class="review-count">(78)</span>
                </div>
                <h3 class="product-name">Shuttlecocks (Tube of 12)</h3>
                <div class="product-price-row">
                  <span class="product-price">₹450</span>
                  <button class="product-add-btn" onclick="triggerToast('Shuttlecocks (Tube of 12)')">Add to
                    Cart</button>
                </div>
              </div>
            </div>

            <div class="product-card" data-sport="badminton">
              <div class="product-visual-wrapper">
                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Badminton Shoes" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                  <span class="review-count">(95)</span>
                </div>
                <h3 class="product-name">Badminton Shoes</h3>
                <div class="product-price-row">
                  <span class="product-price">₹3,500</span>
                  <button class="product-add-btn" onclick="triggerToast('Badminton Shoes')">Add to Cart</button>
                </div>
              </div>
            </div>

            <div class="product-card" data-sport="badminton">
              <div class="product-visual-wrapper">
                <img src="https://images.unsplash.com/photo-1588731234159-8b9963143fca?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Grip Tape" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="4 out of 5 stars">★★★★☆</span>
                  <span class="review-count">(54)</span>
                </div>
                <h3 class="product-name">Grip Tape (Pack of 3)</h3>
                <div class="product-price-row">
                  <span class="product-price">₹250</span>
                  <button class="product-add-btn" onclick="triggerToast('Grip Tape (Pack of 3)')">Add to
                    Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Fitness group -->
        <div class="sport-group" data-sport-group="fitness">
          <div class="sport-group-header">
            <h3 class="sport-group-name">Fitness</h3>
            <span class="sport-group-count">4 lines in stock</span>
          </div>

          <div class="product-card product-card-banner" data-sport="fitness">
            <span class="product-card-badge">20 KG</span>
            <div class="product-visual-wrapper">
              <img src="https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=400&h=300&q=80"
                alt="Adjustable Dumbbells" width="400" height="300" loading="lazy">
            </div>
            <div class="product-info">
              <div class="product-rating">
                <span class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                <span class="review-count">(118)</span>
              </div>
              <p class="product-featured-tag">"One pair, every plate" &mdash; dial-adjustable from 2.5&ndash;20kg for
                home gyms with no room for a rack.</p>
              <h3 class="product-name">Adjustable Dumbbells</h3>
              <div class="product-price-row">
                <span class="product-price">₹4,500</span>
                <button class="product-add-btn" onclick="triggerToast('Adjustable Dumbbells')">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="sport-subgrid">
            <div class="product-card" data-sport="fitness">
              <div class="product-visual-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Weight plates on a gym floor" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="4 out of 5 stars">★★★★☆</span>
                  <span class="review-count">(89)</span>
                </div>
                <h3 class="product-name">Resistance Bands Set</h3>
                <div class="product-price-row">
                  <span class="product-price">₹800</span>
                  <button class="product-add-btn" onclick="triggerToast('Resistance Bands Set')">Add to Cart</button>
                </div>
              </div>
            </div>

            <div class="product-card" data-sport="fitness">
              <div class="product-visual-wrapper">
                <img src="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Premium Yoga Mat" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                  <span class="review-count">(104)</span>
                </div>
                <h3 class="product-name">Premium Yoga Mat</h3>
                <div class="product-price-row">
                  <span class="product-price">₹1,200</span>
                  <button class="product-add-btn" onclick="triggerToast('Premium Yoga Mat')">Add to Cart</button>
                </div>
              </div>
            </div>

            <div class="product-card" data-sport="fitness">
              <div class="product-visual-wrapper">
                <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Gym Gloves" width="400" height="300" loading="lazy">
              </div>
              <div class="product-info">
                <div class="product-rating">
                  <span class="stars" role="img" aria-label="4 out of 5 stars">★★★★☆</span>
                  <span class="review-count">(67)</span>
                </div>
                <h3 class="product-name">Gym Gloves</h3>
                <div class="product-price-row">
                  <span class="product-price">₹650</span>
                  <button class="product-add-btn" onclick="triggerToast('Gym Gloves')">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- BRAND WALL (NIKE, ADIDAS, ETC) -->
  <section class="brand-section">
    <div class="container">
      <div class="brand-row">
        <span class="brand-item">NIKE</span>
        <span class="brand-item">ADIDAS</span>
        <span class="brand-item">SS</span>
        <span class="brand-item">SG</span>
        <span class="brand-item">YONEX</span>
        <span class="brand-item">PUMA</span>
      </div>
    </div>
  </section>

  <!-- SIZE GUIDE -->
  <section class="section size-section" id="size-guide">
    <div class="container size-grid">
      <div class="size-selector-panel">
        <span class="label-accent">Size charts</span>
        <h2 class="section-title">Fitment Guide</h2>
        <p class="size-desc-text">Select product category below to view precise sizing specifications for peak athletic
          safety and fit.</p>

        <div class="size-dropdown-wrapper">
          <select id="size-category-select" class="size-dropdown" onchange="toggleSizeTable()">
            <option value="shoes">Athletic Shoes</option>
            <option value="bat">Cricket Bats</option>
            <option value="gloves">Protective Gloves</option>
          </select>
        </div>
      </div>

      <!-- Size tables container block -->
      <div class="size-display-panel">

        <!-- Shoes Table -->
        <div class="size-table-container active" id="table-shoes">
          <h3 class="size-table-title">Shoe Sizes Conversion</h3>
          <table class="size-table">
            <thead>
              <tr>
                <th>UK / India</th>
                <th>US Men</th>
                <th>US Women</th>
                <th>EUR</th>
                <th>Length (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6</td>
                <td>6.5</td>
                <td>8</td>
                <td>39</td>
                <td>24.5</td>
              </tr>
              <tr>
                <td>7</td>
                <td>7.5</td>
                <td>9</td>
                <td>40.5</td>
                <td>25.4</td>
              </tr>
              <tr>
                <td>8</td>
                <td>8.5</td>
                <td>10</td>
                <td>42</td>
                <td>26.2</td>
              </tr>
              <tr>
                <td>9</td>
                <td>9.5</td>
                <td>11</td>
                <td>43</td>
                <td>27.1</td>
              </tr>
              <tr>
                <td>10</td>
                <td>10.5</td>
                <td>12</td>
                <td>44.5</td>
                <td>27.9</td>
              </tr>
              <tr>
                <td>11</td>
                <td>11.5</td>
                <td>13</td>
                <td>46</td>
                <td>28.8</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Cricket Bat Table -->
        <div class="size-table-container" id="table-bat">
          <h3 class="size-table-title">Cricket Bat Sizing</h3>
          <table class="size-table">
            <thead>
              <tr>
                <th>Bat Size</th>
                <th>Player Height</th>
                <th>Player Age</th>
                <th>Approx Bat Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Size 4</td>
                <td>4'9" &mdash; 5'0"</td>
                <td>9 &mdash; 11 Years</td>
                <td>29.75"</td>
              </tr>
              <tr>
                <td>Size 5</td>
                <td>5'0" &mdash; 5'3"</td>
                <td>10 &mdash; 12 Years</td>
                <td>30.75"</td>
              </tr>
              <tr>
                <td>Size 6</td>
                <td>5'3" &mdash; 5'5"</td>
                <td>11 &mdash; 13 Years</td>
                <td>31.75"</td>
              </tr>
              <tr>
                <td>Harrow</td>
                <td>5'5" &mdash; 5'8"</td>
                <td>12 &mdash; 15 Years</td>
                <td>32.75"</td>
              </tr>
              <tr>
                <td>Short Handle (SH)</td>
                <td>5'8" &mdash; 6'2"</td>
                <td>15+ Years (Adult)</td>
                <td>33.5"</td>
              </tr>
              <tr>
                <td>Long Handle (LH)</td>
                <td>6'2" +</td>
                <td>Adult (Tall)</td>
                <td>34.25"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Gloves Table -->
        <div class="size-table-container" id="table-gloves">
          <h3 class="size-table-title">Glove Size Standard</h3>
          <table class="size-table">
            <thead>
              <tr>
                <th>Glove Size</th>
                <th>Hand Length (cm)</th>
                <th>Suggested Age Group</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Boys</td>
                <td>16.5 cm &mdash; 17.5 cm</td>
                <td>9 &mdash; 12 Years</td>
              </tr>
              <tr>
                <td>Youths</td>
                <td>17.5 cm &mdash; 19.0 cm</td>
                <td>12 &mdash; 15 Years</td>
              </tr>
              <tr>
                <td>Adult Small</td>
                <td>19.0 cm &mdash; 20.0 cm</td>
                <td>Club Player (Small hand)</td>
              </tr>
              <tr>
                <td>Adult Medium</td>
                <td>20.0 cm &mdash; 21.0 cm</td>
                <td>Standard Men size</td>
              </tr>
              <tr>
                <td>Adult Large</td>
                <td>21.0 cm &mdash; 22.5 cm</td>
                <td>Adult (Large hand)</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </section>

  <!-- SECTION DIVIDER -->
  <div class="divider-clip-reverse"></div>

  <!-- BULK ORDERS SECTION (B2B) -->
  <section class="section bulk-section" id="bulk">
    <div class="container bulk-grid">
      <div class="bulk-content">
        <span class="label-accent">B2B institutional supply</span>
        <h2 class="section-title">Equipping Teams & Schools.</h2>
        <p class="bulk-text">
          Bulk pricing for schools, academies, and sports clubs. Get a custom quote for orders of 10+ units. We deliver
          premium equipment directly to your grounds across Delhi NCR and surrounding areas with verified GST invoicing.
        </p>
        <ul class="bulk-perks-list">
          <li class="bulk-perk">
            <span class="bulk-perk-icon">&bull;</span>
            <span>Flexible tier discounts (starting from 15% discount for 20+ items)</span>
          </li>
          <li class="bulk-perk">
            <span class="bulk-perk-icon">&bull;</span>
            <span>Custom school/academy logo engraving and uniform embossment options</span>
          </li>
          <li class="bulk-perk">
            <span class="bulk-perk-icon">&bull;</span>
            <span>Dedicated freight slot to your ground or campus, anywhere in Delhi NCR</span>
          </li>
        </ul>
      </div>

      <!-- Inquiry form box card -->
      <div class="bulk-form-card">
        <form id="bulk-inquiry-form" onsubmit="handleFormSubmit(event)">
          <div class="form-group">
            <label class="form-label" for="client-name">Your Full Name</label>
            <input type="text" id="client-name" class="form-input" placeholder="e.g. Vikram Singh">
            <div class="validation-warning" id="warn-name">Name is required.</div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label class="form-label" for="org-name">School / Club Name</label>
              <input type="text" id="org-name" class="form-input" placeholder="DPS Academy / Delhi FC">
              <div class="validation-warning" id="warn-org">Organization/School name is required.</div>
            </div>
            <div class="form-group">
              <label class="form-label" for="sport-type">Sport Category</label>
              <select id="sport-type" class="form-select">
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
                <option value="badminton">Badminton</option>
                <option value="fitness">Fitness / Multi</option>
              </select>
            </div>
          </div>

          <div class="form-row-2">
            <div class="form-group">
              <label class="form-label" for="quantity">Quantity Needed (10+ Units)</label>
              <input type="number" id="quantity" class="form-input" placeholder="e.g. 25" min="10">
              <div class="validation-warning" id="warn-qty">Minimum quantity is 10 units.</div>
            </div>
            <div class="form-group">
              <label class="form-label" for="phone-no">Phone Number</label>
              <input type="tel" id="phone-no" class="form-input" placeholder="e.g. +91 98765 43210">
              <div class="validation-warning" id="warn-phone">Valid phone number is required.</div>
            </div>
          </div>

          <div class="form-group form-group-last form-submit-row">
            <button type="submit" class="btn-athletic btn-block">Request Bulk Quote</button>
          </div>
        </form>

        <!-- Form success screen -->
        <div class="form-success-state" id="form-success-block">
          <div class="success-icon-wrapper">
            <svg viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 class="success-headline">Quote Requested.</h3>
          <p class="success-summary" id="success-summary-text">Thank you, Vikram. We have logged your request for 25
            Cricket equipment units. Our B2B logistics desk will contact you at +91 9876543210 in 2 hours.</p>
          <button class="btn-athletic-outline btn-block" onclick="resetFormState()">Submit New Request</button>
        </div>
      </div>
    </div>
  </section>

  <!-- CUSTOMER REVIEWS -->
  <section class="section reviews-section" id="reviews">
    <div class="container">
      <span class="label-accent">Athlete feedback</span>
      <h2 class="section-title">What They Say</h2>

      <div class="reviews-grid">
        <!-- Review 1 -->
        <div class="review-card">
          <div class="review-header">
            <div class="review-avatar">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Vikram Singh portrait" width="100" height="100" loading="lazy">
            </div>
            <div>
              <h4 class="review-user-name">Vikram Singh</h4>
              <span class="review-user-sub">Delhi Cricket Club</span>
            </div>
          </div>
          <div class="review-stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
          <p class="review-text">"Bought the SS bat for my son's school team. Quality is unmatched and delivery was
            fast."</p>
        </div>

        <!-- Review 2 -->
        <div class="review-card">
          <div class="review-header">
            <div class="review-avatar">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Priya Nair portrait" width="100" height="100" loading="lazy">
            </div>
            <div>
              <h4 class="review-user-name">Priya Nair</h4>
              <span class="review-user-sub">Gurgaon Badminton Academy</span>
            </div>
          </div>
          <div class="review-stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
          <p class="review-text">"Best badminton store online. The Yonex racket selection is incredible."</p>
        </div>

        <!-- Review 3 -->
        <div class="review-card">
          <div class="review-header">
            <div class="review-avatar">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Coach Rajesh portrait" width="100" height="100" loading="lazy">
            </div>
            <div>
              <h4 class="review-user-name">Coach Rajesh</h4>
              <span class="review-user-sub">DPS Sports Academy</span>
            </div>
          </div>
          <div class="review-stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
          <p class="review-text">"We order in bulk for our academy every season. Reliable every time."</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-top-grid">
        <div>
          <h4 class="nav-logo"><span>STRIKER</span> SPORTS</h4>
          <p class="footer-brand-desc">Delhi's premier high-energy sports retailer, supplying professional-grade
            gear to athletes, schools, and clubs from our Defence Colony store and to your door across Delhi NCR.</p>
        </div>
        <div>
          <h5 class="footer-title">Disciplines</h5>
          <ul class="footer-links-list">
            <li><a href="#products" class="footer-link" onclick="scrollToAndFilter('cricket')">Cricket gear</a></li>
            <li><a href="#products" class="footer-link" onclick="scrollToAndFilter('football')">Football gear</a></li>
            <li><a href="#products" class="footer-link" onclick="scrollToAndFilter('badminton')">Badminton sets</a></li>
            <li><a href="#products" class="footer-link" onclick="scrollToAndFilter('fitness')">Gym & Fitness</a></li>
          </ul>
        </div>
        <div>
          <h5 class="footer-title">Store & Contact</h5>
          <div class="footer-contact-info">
            <p>Defence Colony, Ring Rd</p>
            <p>New Delhi, 110024</p>
            <p style="margin-top: 10px;">hello@strikersports.in</p>
            <p>+91 11 4093 3020</p>
          </div>
        </div>
      </div>

      <!-- Watermark background -->
      <div class="footer-watermark">STRIKER SPORTS</div>

      <div class="footer-bottom-row">
        <span>&copy; 2026 Striker Sports Co. All rights reserved.</span>
        <div class="footer-links-list footer-legal-links">
          <a href="#" class="footer-link">Terms & Conditions</a>
          <a href="#" class="footer-link">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
`;
