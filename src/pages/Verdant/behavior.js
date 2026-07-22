export function initVerdantBehavior() {
  // Global wishlist array loaded from localStorage
  let wishlist = [];

  // Quiz Questions Data
  const quizData = [
    {
      question: "Which best describes your ideal living room?",
      options: [
        { text: "Minimal and uncluttered", score: "minimalist" },
        { text: "Warm and layered with textures", score: "warm-layered" },
        { text: "Bold colors and statement pieces", score: "bold-statement" }
      ]
    },
    {
      question: "Pick a material you're drawn to:",
      options: [
        { text: "Natural wood and linen", score: "minimalist" },
        { text: "Rattan and woven textures", score: "warm-layered" },
        { text: "Stone, ceramic, and metal accents", score: "bold-statement" }
      ]
    },
    {
      question: "Your colour palette leans toward:",
      options: [
        { text: "Neutrals and warm whites", score: "minimalist" },
        { text: "Earthy greens and terracotta", score: "warm-layered" },
        { text: "Deep jewel tones", score: "bold-statement" }
      ]
    }
  ];

  // Quiz state
  let currentQuizIndex = 0;
  let quizScores = {
    "minimalist": 0,
    "warm-layered": 0,
    "bold-statement": 0
  };

  // Product definitions mapping for quiz recommendations
  const productData = [
    { id: "lr-1", name: "Handwoven Jute Rug, 6x9", price: "₹4,200", tag: "LIVING ROOM", img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=200&q=80", desc: "A natural fibre rug, hand-loomed in Rajasthan.", room: "living-room" },
    { id: "lr-2", name: "Ceramic Vase Set, 3 piece", price: "₹1,800", tag: "LIVING ROOM", img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=200&q=80", desc: "Matte stoneware, each one unique.", room: "living-room" },
    { id: "lr-3", name: "Linen Throw Pillow Covers, set of 2", price: "₹1,200", tag: "LIVING ROOM", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=200&q=80", desc: "Pre-washed European linen.", room: "living-room" },
    { id: "lr-4", name: "Rattan Accent Chair", price: "₹8,500", tag: "LIVING ROOM", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=200&q=80", desc: "Hand-woven rattan on oak frame.", room: "living-room" },
    { id: "br-1", name: "Organic Cotton Bedsheet Set", price: "₹3,200", tag: "BEDROOM", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=200&q=80", desc: "GOTS certified, 300 thread count.", room: "bedroom" },
    { id: "br-2", name: "Wooden Bedside Lamp", price: "₹2,400", tag: "BEDROOM", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=200&q=80", desc: "Solid mango wood, linen shade.", room: "bedroom" },
    { id: "br-3", name: "Macrame Wall Hanging", price: "₹1,500", tag: "BEDROOM", img: "https://images.unsplash.com/photo-1528640938883-e1d8d44ddf1d?auto=format&fit=crop&w=200&q=80", desc: "Hand-knotted cotton cord.", room: "bedroom" },
    { id: "br-4", name: "Linen Curtains, pair", price: "₹2,800", tag: "BEDROOM", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=200&q=80", desc: "Light-filtering, stonewashed.", room: "bedroom" },
    { id: "kt-1", name: "Stoneware Dinner Set, 16 piece", price: "₹5,500", tag: "KITCHEN", img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=200&q=80", desc: "Reactive glaze, dishwasher safe.", room: "kitchen" },
    { id: "kt-2", name: "Wooden Cutting Board Set", price: "₹1,400", tag: "KITCHEN", img: "https://images.unsplash.com/photo-1594793740097-94d3e43f589d?auto=format&fit=crop&w=200&q=80", desc: "Acacia wood, three sizes.", room: "kitchen" },
    { id: "kt-3", name: "Glass Storage Jars, set of 4", price: "₹1,600", tag: "KITCHEN", img: "https://images.unsplash.com/photo-1589363460779-cd717fc244ac?auto=format&fit=crop&w=200&q=80", desc: "Borosilicate, airtight seals.", room: "kitchen" },
    { id: "kt-4", name: "Copper Water Bottles, set of 2", price: "₹1,900", tag: "KITCHEN", img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=200&q=80", desc: "Hand-hammered, Ayurvedic design.", room: "kitchen" },
    { id: "bl-1", name: "Terracotta Planters, set of 3", price: "₹1,800", tag: "BALCONY", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=200&q=80", desc: "Hand-thrown, unglazed natural clay.", room: "balcony" },
    { id: "bl-2", name: "Outdoor Floor Cushions", price: "₹2,200", tag: "BALCONY", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=200&q=80", desc: "Water-resistant structured canvas.", room: "balcony" },
    { id: "bl-3", name: "String Lights, warm white, 10m", price: "₹900", tag: "BALCONY", img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=200&q=80", desc: "Solar powered copper wiring.", room: "balcony" },
    { id: "bl-4", name: "Hanging Plant Stand", price: "₹2,600", tag: "BALCONY", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=200&q=80", desc: "Powder-coated minimalist steel.", room: "balcony" }
  ];

  // Articles Content
  const articlesData = {
    1: {
      category: "STYLING",
      title: "Five ways to style a jute rug",
      img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      paragraphs: [
        "Natural textures are the foundation of any warm minimalist environment. A handwoven jute rug, with its earthy variations in golden-brown tones, sets an unhurried, grounded canvas for furniture arrangements.",
        "Firstly, consider layering. Centering a smaller, detailed wool rug over a larger jute base creates visual zoning and visual depth. This works particularly well in seating areas featuring low-profile wooden frames.",
        "Secondly, balance textures. Pair the rough, organic feel of jute with soft pre-washed linen drapery and smooth glazed ceramic vessels. The contrast between rough and refined highlights the individual beauty of each element.",
        "Thirdly, spatial margins are key. Leave at least 18 inches of exposed wooden floor framing the rug to allow the room to breathe. Generous wood borders enhance the sense of space and structure."
      ]
    },
    2: {
      category: "MATERIALS",
      title: "The art of layering textiles",
      img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
      paragraphs: [
        "Layering textiles is an exercise in subtle variation. Rather than using matching sets or heavy contrasting blocks, considered design blends complementary fibers and washed textures.",
        "Start with the base sheets. Organic, long-staple cotton beddings in warm off-white or sand tones provide a clean, structural background. This GOTS-certified base feels crisp yet soft to the touch.",
        "Introduce linen covers. A stonewashed European linen throw in earthy sage or clay adds structural weight and a beautiful relaxed rumple. The open weave of linen contrasts elegantly with dense cotton weaves.",
        "Finally, style with accent cushions. Bring in handwoven pillow covers with subtle woven patterns or fringe details in similar hues. Keep the palette tightly bound to natural gradients to maintain quiet luxury."
      ]
    },
    3: {
      category: "OUTDOOR",
      title: "Bringing the outdoors in: a balcony guide",
      img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      paragraphs: [
        "The transition between interior spaces and outer terraces should feel seamless. Verandahs and balconies are not isolated additions, but extensions of the living room philosophy.",
        "To achieve this, introduce unglazed terracotta planters. The porous, warm clay material patinates naturally over time, developing mineral variations that speak of natural growth and age.",
        "For seating, move away from rigid garden furniture. Implement comfortable, water-resistant floor cushions in heavy canvas. Keeping the seating height low-profile creates a highly relaxed, lounge-style feel.",
        "Complement the setup with delicate solar string lights and thin powder-coated steel plant stands. The structures keep plant foliage at different heights, simulating a natural canopy right outside your glass sliding doors."
      ]
    }
  };


  // ==========================================
  // BESTSELLERS FILTER LOGIC
  // ==========================================
  function setFilter(category) {
    // Update active button state
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Find which button triggered this and make it active
    let targetId = 'btn-all';
    if (category === 'living-room') targetId = 'btn-living';
    else if (category === 'bedroom') targetId = 'btn-bedroom';
    else if (category === 'kitchen') targetId = 'btn-kitchen';
    else if (category === 'balcony') targetId = 'btn-balcony';

    const activeBtn = document.getElementById(targetId);
    if (activeBtn) activeBtn.classList.add('active');

    // Filter product rows
    const rows = document.querySelectorAll('.product-row');
    rows.forEach(row => {
      const rowRoom = row.getAttribute('data-room');
      if (category === 'all' || rowRoom === category) {
        row.classList.remove('filtered-out');
      } else {
        row.classList.add('filtered-out');
      }
    });
  }

  function scrollToAndFilter(category) {
    setFilter(category);
    // Smooth scroll to bestsellers section
    const bestsellersSection = document.getElementById('bestsellers');
    bestsellersSection.scrollIntoView({ behavior: 'smooth' });
  }


  // ==========================================
  // WISHLIST LOGIC
  // ==========================================
  function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index === -1) {
      wishlist.push(productId);
      showToast('Item saved to your editorial collection.');
    } else {
      wishlist.splice(index, 1);
      showToast('Item removed from your collection.');
    }

    // Save state
    localStorage.setItem('verdant_wishlist', JSON.stringify(wishlist));

    // Update layouts
    updateWishlistUI();
  }

  function updateWishlistUI() {
    // Update heart button icons
    const rows = document.querySelectorAll('.product-row');
    rows.forEach(row => {
      const rowId = row.getAttribute('data-id');
      const wishlistBtn = row.querySelector('.wishlist-btn');
      if (wishlistBtn) {
        if (wishlist.includes(rowId)) {
          wishlistBtn.classList.add('active');
        } else {
          wishlistBtn.classList.remove('active');
        }
      }
    });

    // Update counters in headers
    const count = wishlist.length;
    document.getElementById('saved-counter').innerText = `Saved (${count})`;
    document.getElementById('saved-counter-mobile').innerText = `Saved (${count})`;
  }


  // ==========================================
  // TOAST NOTIFICATIONS
  // ==========================================
  function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';

    toast.innerHTML = `
      <svg class="toast-check-icon" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Trigger fade out after 3.5 seconds
    setTimeout(() => {
      toast.classList.add('fade-out');
      // Clean up node after transition completes
      toast.addEventListener('animationend', (e) => {
        if (e.animationName === 'toastFadeOut') {
          toast.remove();
        }
      });
    }, 3500);
  }

  function addToBag(itemName) {
    showToast(`"${itemName}" has been added to your bag.`);
  }


  // ==========================================
  // STYLE MATCHMAKER QUIZ LOGIC
  // ==========================================
  function renderQuizStep() {
    const container = document.getElementById('quiz-question-container');
    const dots = document.getElementById('quiz-dots').querySelectorAll('.quiz-dot');

    // Update Dot classes
    dots.forEach((dot, i) => {
      if (i <= currentQuizIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    const currentQData = quizData[currentQuizIndex];

    let optionsHTML = currentQData.options.map((opt, i) => `
      <button class="quiz-option-row" onclick="answerQuiz('${opt.score}')">
        <span>${opt.text}</span>
        <span class="quiz-option-arrow">&rarr;</span>
      </button>
    `).join('');

    container.innerHTML = `
      <h3 class="quiz-question-title">${currentQData.question}</h3>
      <div class="quiz-options-list">
        ${optionsHTML}
      </div>
    `;
  }

  function answerQuiz(score) {
    quizScores[score]++;

    if (currentQuizIndex < quizData.length - 1) {
      currentQuizIndex++;
      renderQuizStep();
    } else {
      showQuizResults();
    }
  }

  function showQuizResults() {
    // Hide quiz questions and dots
    document.getElementById('quiz-question-container').style.display = 'none';
    document.getElementById('quiz-dots').style.display = 'none';

    // Determine winning score
    let winningStyle = "minimalist";
    let highestVal = 0;
    for (const [key, value] of Object.entries(quizScores)) {
      if (value > highestVal) {
        highestVal = value;
        winningStyle = key;
      }
    }

    // Display results based on calculations
    const styleNameElem = document.getElementById('results-style-name');
    const styleDescElem = document.getElementById('results-style-desc');
    const recsListElem = document.getElementById('quiz-recs-list');

    let styleTitle = "";
    let styleDesc = "";
    let recommendedIds = [];

    if (winningStyle === "minimalist") {
      styleTitle = "Organic Minimalist";
      styleDesc = "Your design eye leans towards spacious structures, textured cream tones, and functional raw timbers. You seek quiet, uncluttered environments with high-quality statement ceramics.";
      recommendedIds = ["lr-2", "br-4", "kt-3"]; // Vase Set, Curtains, Storage Jars
    } else if (winningStyle === "warm-layered") {
      styleTitle = "Woven Rustic & Earthy Layered";
      styleDesc = "You love spaces that feel warm, layered, and tactile. Earthy terracotta clays, low-profile cushions, hand-loomed jute fibers, and cozy bedside linens call to your aesthetic.";
      recommendedIds = ["lr-1", "lr-4", "bl-1"]; // Jute Rug, Rattan Chair, Terracotta Planters
    } else {
      styleTitle = "Bespoke Sculptural & Mid-Century Crafted";
      styleDesc = "You prefer rich dark walnut frames, solid warm lighting, hand-hammered metals, and structured textile layers. Each piece in your room must act as a unique sculptural artifact.";
      recommendedIds = ["br-2", "kt-4", "bl-4"]; // Bedside Lamp, Copper Bottles, Plant Stand
    }

    styleNameElem.innerText = `Your style is: ${styleTitle}`;
    styleDescElem.innerText = styleDesc;

    // Filter and render recommendations in row format
    const recProducts = productData.filter(p => recommendedIds.includes(p.id));

    recsListElem.innerHTML = recProducts.map(p => `
      <div class="product-row" data-id="${p.id}">
        <div class="product-left-cell">
          <div class="product-thumb">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
          </div>
          <div class="product-meta">
            <h4 class="product-title">${p.name}</h4>
            <p class="product-desc">${p.desc}</p>
            <span class="product-tag">${p.tag}</span>
          </div>
        </div>
        <div class="product-right-cell">
          <span class="product-price">${p.price}</span>
          <button class="add-to-bag-btn" onclick="addToBag('${p.name}')">Add to bag</button>
          <button class="wishlist-btn ${wishlist.includes(p.id) ? 'active' : ''}" onclick="toggleWishlist('${p.id}')">
            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
        </div>
      </div>
    `).join('');

    // Show results block
    document.getElementById('quiz-results-container').style.display = 'block';
  }

  function resetQuiz() {
    currentQuizIndex = 0;
    quizScores = {
      "minimalist": 0,
      "warm-layered": 0,
      "bold-statement": 0
    };

    // Hide results
    document.getElementById('quiz-results-container').style.display = 'none';

    // Reset & show questions
    document.getElementById('quiz-question-container').style.display = 'flex';
    document.getElementById('quiz-dots').style.display = 'flex';

    renderQuizStep();
  }


  // ==========================================
  // ARTICLE DRAWER LOGIC
  // ==========================================
  function openArticle(articleId) {
    const data = articlesData[articleId];
    if (!data) return;

    const overlay = document.getElementById('article-drawer-overlay');
    const bodyContent = document.getElementById('drawer-body-content');

    // Build paragraph elements
    const paragraphHTML = data.paragraphs.map(p => `<p>${p}</p>`).join('');

    bodyContent.innerHTML = `
      <span class="drawer-article-category">${data.category}</span>
      <h2 class="drawer-article-title">${data.title}</h2>
      <div class="drawer-article-img">
        <img src="${data.img}" alt="${data.title}" loading="lazy">
      </div>
      <div class="drawer-article-text">
        ${paragraphHTML}
      </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  }

  function closeArticle() {
    const overlay = document.getElementById('article-drawer-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Unlock background scrolling
  }


  // ==========================================
  // GIFT REGISTRY LOGIC
  // ==========================================
  function showRegistryInput() {
    document.getElementById('start-registry-btn').style.display = 'none';
    document.getElementById('registry-form-block').style.display = 'block';
    document.getElementById('registry-user-name').focus();
  }

  function handleRegistrySubmit(event) {
    if (event.key === 'Enter') {
      submitRegistryName();
    }
  }

  function submitRegistryName() {
    const nameField = document.getElementById('registry-user-name');
    const name = nameField.value.trim() || "Anonymous Collection";

    // Update Mockup Card Title
    document.getElementById('registry-card-title').innerText = `${name}'s Curated Registry`;

    // Hide Form, Show success links
    document.getElementById('registry-form-block').style.display = 'none';

    const successBlock = document.getElementById('registry-success-block');
    const shareLink = document.getElementById('registry-shareable-link');
    const cleanUrl = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    shareLink.innerText = `verdantliving.co/registry/${cleanUrl || 'shared'}`;
    successBlock.style.display = 'block';

    showToast(`Registry created for ${name}.`);
  }


  // ==========================================
  // NEWSLETTER SUBMISSION
  // ==========================================
  function handleNewsletterSubmit(event) {
    if (event.key === 'Enter') {
      submitNewsletter();
    }
  }

  function submitNewsletter() {
    const emailField = document.getElementById('newsletter-email');
    const email = emailField.value.trim();
    if (!email) return;

    showToast('Thank you for subscribing to The Edit.');
    emailField.value = '';
  }

  // ==========================================
  // Initialize (originally wrapped in DOMContentLoaded)
  // ==========================================

  // Expose handlers used via inline onclick/onkeydown attributes in the markup
  // (the markup string is injected via dangerouslySetInnerHTML, so these
  // must be reachable as global functions for the inline handlers to work).
  window.setFilter = setFilter;
  window.scrollToAndFilter = scrollToAndFilter;
  window.toggleWishlist = toggleWishlist;
  window.addToBag = addToBag;
  window.answerQuiz = answerQuiz;
  window.resetQuiz = resetQuiz;
  window.openArticle = openArticle;
  window.closeArticle = closeArticle;
  window.showRegistryInput = showRegistryInput;
  window.handleRegistrySubmit = handleRegistrySubmit;
  window.submitRegistryName = submitRegistryName;
  window.handleNewsletterSubmit = handleNewsletterSubmit;
  window.submitNewsletter = submitNewsletter;

  // Load wishlist from localStorage
  const savedWishlist = localStorage.getItem('verdant_wishlist');
  if (savedWishlist) {
    wishlist = JSON.parse(savedWishlist);
  }
  updateWishlistUI();

  // Setup Header Scroll Effect
  const header = document.getElementById('main-header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);

  // Render first quiz screen
  renderQuizStep();

  // Cleanup: remove the window-level listener and the globals this page
  // attached, so they don't leak into other pages/routes.
  return function cleanupVerdantBehavior() {
    window.removeEventListener('scroll', handleScroll);
    delete window.setFilter;
    delete window.scrollToAndFilter;
    delete window.toggleWishlist;
    delete window.addToBag;
    delete window.answerQuiz;
    delete window.resetQuiz;
    delete window.openArticle;
    delete window.closeArticle;
    delete window.showRegistryInput;
    delete window.handleRegistrySubmit;
    delete window.submitRegistryName;
    delete window.handleNewsletterSubmit;
    delete window.submitNewsletter;
  };
}
