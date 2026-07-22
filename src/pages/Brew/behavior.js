export function initBrewBehavior() {

  // ==========================================================================
  // DATABASE (MENU ITEMS)
  // ==========================================================================
  const menuData = [
    // ESPRESSO
    {
      id: 'esp-1',
      name: 'Classic Espresso',
      category: 'espresso',
      price: 160,
      desc: 'Single origin espresso shot, bold and bright with complex citrus notes.',
      tags: []
    },
    {
      id: 'esp-2',
      name: 'Cappuccino',
      category: 'espresso',
      price: 220,
      desc: 'Silky microfoam poured over standard double shot espresso, balanced and sweet.',
      tags: []
    },
    {
      id: 'esp-3',
      name: 'Flat White',
      category: 'espresso',
      price: 240,
      desc: 'Double ristretto extraction topped with warm velvety milk in a smaller glass.',
      tags: []
    },
    {
      id: 'esp-4',
      name: 'Caramel Macchiato',
      category: 'espresso',
      price: 260,
      desc: 'Espresso marked with vanilla milk, finished with a rich, house-made caramel drizzle.',
      tags: []
    },
    // COLD BREW
    {
      id: 'cb-1',
      name: 'Original Cold Brew',
      category: 'cold brew',
      price: 220,
      desc: '18-hour slow steeped single-origin beans, exceptionally smooth, served over block ice.',
      tags: []
    },
    {
      id: 'cb-2',
      name: 'Nitro Cold Brew',
      category: 'cold brew',
      price: 280,
      desc: 'Our signature cold brew infused with nitrogen gas, generating a thick cascading velvet head.',
      tags: []
    },
    {
      id: 'cb-3',
      name: 'Iced Caramel Latte',
      category: 'cold brew',
      price: 260,
      desc: 'Slow-dripped cold brew, organic milk, and custom golden caramel served over crushed ice.',
      tags: []
    },
    {
      id: 'cb-4',
      name: 'Coconut Cold Brew',
      category: 'cold brew',
      price: 270,
      desc: 'Steeped cold brew mixed with light organic coconut milk, subtly sweetened and refreshing.',
      tags: ['Vegan']
    },
    // ALL-DAY BREAKFAST
    {
      id: 'br-1',
      name: 'Avocado Toast',
      category: 'all-day breakfast',
      price: 320,
      desc: 'Freshly smashed Haas avocado on organic toasted sourdough, chili flakes, sea salt, and lime juice.',
      tags: []
    },
    {
      id: 'br-2',
      name: 'Eggs Benedict',
      category: 'all-day breakfast',
      price: 380,
      desc: 'Two poached farm eggs, buttered brioche toast, smoked chicken ham, blanketed in creamy hollandaise.',
      tags: []
    },
    {
      id: 'br-3',
      name: 'Shakshuka',
      category: 'all-day breakfast',
      price: 340,
      desc: 'Two eggs baked in a spiced cumin-tomato bell pepper sauce, served hot in a skillet with sourdough.',
      tags: ['Gluten-Free']
    },
    {
      id: 'br-4',
      name: 'Granola Bowl',
      category: 'all-day breakfast',
      price: 280,
      desc: 'Toasted oats granola, sweet wild berries, organic yogurt, sliced banana, and a drizzle of local honey.',
      tags: ['Vegan']
    },
    // PASTRIES
    {
      id: 'ps-1',
      name: 'Butter Croissant',
      category: 'pastries',
      price: 140,
      desc: 'Classic flaky butter croissant, baked fresh daily with French laminated pastry butter.',
      tags: []
    },
    {
      id: 'ps-2',
      name: 'Pain au Chocolat',
      category: 'pastries',
      price: 160,
      desc: 'Delicate puff pastry loaded with two bars of dark premium Belgian chocolate, served warm.',
      tags: []
    },
    {
      id: 'ps-3',
      name: 'Cinnamon Roll',
      category: 'pastries',
      price: 150,
      desc: 'Freshly baked roll filled with spiced brown sugar cinnamon, glazed with vanilla cream cheese frosting.',
      tags: []
    },
    {
      id: 'ps-4',
      name: 'Almond Croissant',
      category: 'pastries',
      price: 180,
      desc: 'Croissant filled with sweet almond frangipane paste, topped with sliced toasted almonds and powdered sugar.',
      tags: []
    }
  ];

  // ==========================================================================
  // STATE MANAGEMENT (LOCAL STORAGE PERSISTED)
  // ==========================================================================
  let cart = JSON.parse(localStorage.getItem('brew_cart')) || [];
  let loyaltyPoints = parseInt(localStorage.getItem('brew_loyalty_points'));

  // Seed loyalty points if empty
  if (isNaN(loyaltyPoints)) {
    loyaltyPoints = 65;
    localStorage.setItem('brew_loyalty_points', loyaltyPoints);
  }

  // ==========================================================================
  // DOM SELECTORS
  // ==========================================================================
  const menuGrid = document.getElementById('menu-grid');
  const tabs = document.querySelectorAll('.tab-btn');

  const cartToggle = document.getElementById('cart-toggle');
  const cartClose = document.getElementById('cart-close');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartBadge = document.getElementById('cart-badge');
  const cartContainer = document.getElementById('cart-items-container');
  const cartEmptyState = document.getElementById('cart-empty-state');

  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTax = document.getElementById('cart-tax');
  const cartTotal = document.getElementById('cart-total');
  const cartRewardsRow = document.getElementById('cart-rewards-row');
  const cartRewardsText = document.getElementById('cart-rewards-text');

  const clearCartBtn = document.getElementById('clear-cart-btn');
  const checkoutBtn = document.getElementById('checkout-btn');

  const loyaltyPointsVal = document.getElementById('loyalty-points-val');
  const loyaltyProgressBar = document.getElementById('loyalty-progress-bar');
  const loyaltyProgressText = document.getElementById('loyalty-progress-text');
  const loyaltyRewardsCount = document.getElementById('loyalty-rewards-count');

  const alertModal = document.getElementById('alert-modal');
  const alertTitle = document.getElementById('alert-title');
  const alertMsg = document.getElementById('alert-msg');
  const alertCloseBtn = document.getElementById('alert-close-btn');

  // Mobile Menu
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxContentBox = document.getElementById('lightbox-content-box');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryCards = document.querySelectorAll('.gallery-card');

  // ==========================================================================
  // RENDER MENU ITEMS
  // ==========================================================================
  function renderMenu(categoryFilter = 'espresso') {
    menuGrid.style.opacity = '0';

    setTimeout(() => {
      menuGrid.innerHTML = '';
      const filteredItems = menuData.filter(item => item.category === categoryFilter);

      filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-row';

        const tagsHTML = item.tags.map(tag => `<span class="menu-item-tag">${tag}</span>`).join('');

        card.innerHTML = `
          <div class="menu-row-top">
            <span class="menu-item-name">${item.name}</span>
            <span class="menu-row-leader"></span>
            <span class="menu-item-price">₹${item.price}</span>
          </div>
          ${tagsHTML ? `<div style="display: flex; gap: 4px;">${tagsHTML}</div>` : ''}
          <p class="menu-item-desc">${item.desc}</p>
          <button class="btn-add-order" data-id="${item.id}">
            <svg viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add to Order
          </button>
        `;
        menuGrid.appendChild(card);
      });

      menuGrid.style.opacity = '1';

      // Re-bind click events
      const addButtons = menuGrid.querySelectorAll('.btn-add-order');
      addButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = btn.getAttribute('data-id');
          const menuItem = menuData.find(item => item.id === id);
          if (menuItem) {
            addToCart(menuItem);

            // Visual click effect
            btn.style.transform = 'scale(0.95)';
            btn.innerHTML = `<svg viewBox="0 0 24 24" style="stroke: currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg> Added`;
            setTimeout(() => {
              btn.style.transform = '';
              btn.innerHTML = `<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Add to Order`;
            }, 1000);
          }
        });
      });
    }, 200);
  }

  // Initialize menu
  renderMenu('espresso');

  // Category filter click triggers
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-tab');
      renderMenu(category);
    });
  });

  // ==========================================================================
  // CART ACTIONS & DYNAMICS
  // ==========================================================================
  function saveCart() {
    localStorage.setItem('brew_cart', JSON.stringify(cart));
    updateCartUI();
  }

  function addToCart(item) {
    const existingItem = cart.find(c => c.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      });
    }
    saveCart();
    openCart();
  }

  function updateCartUI() {
    // Clear items display (except empty state)
    const itemElements = cartContainer.querySelectorAll('.cart-item');
    itemElements.forEach(el => el.remove());

    let totalItems = 0;
    let subtotal = 0;

    if (cart.length === 0) {
      cartEmptyState.style.display = 'flex';
      clearCartBtn.style.pointerEvents = 'none';
      clearCartBtn.style.opacity = '0.5';
      checkoutBtn.style.pointerEvents = 'none';
      checkoutBtn.style.opacity = '0.5';
      cartRewardsRow.style.display = 'none';
    } else {
      cartEmptyState.style.display = 'none';
      clearCartBtn.style.pointerEvents = 'auto';
      clearCartBtn.style.opacity = '1';
      checkoutBtn.style.pointerEvents = 'auto';
      checkoutBtn.style.opacity = '1';

      cart.forEach(item => {
        totalItems += item.quantity;
        const itemCost = item.price * item.quantity;
        subtotal += itemCost;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${item.price}</div>
          </div>
          <div class="cart-item-controls">
            <div class="stepper">
              <button class="stepper-btn minus" data-id="${item.id}">—</button>
              <span class="stepper-value">${item.quantity}</span>
              <button class="stepper-btn plus" data-id="${item.id}">+</button>
            </div>
            <div class="cart-item-total">₹${itemCost}</div>
          </div>
        `;
        cartContainer.appendChild(cartItemEl);
      });

      // Setup Stepper Listeners
      cartContainer.querySelectorAll('.stepper-btn.plus').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const cartItem = cart.find(c => c.id === id);
          if (cartItem) {
            cartItem.quantity += 1;
            saveCart();
          }
        });
      });

      cartContainer.querySelectorAll('.stepper-btn.minus').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const cartItemIndex = cart.findIndex(c => c.id === id);
          if (cartItemIndex > -1) {
            const cartItem = cart[cartItemIndex];
            cartItem.quantity -= 1;
            if (cartItem.quantity <= 0) {
              cart.splice(cartItemIndex, 1);
            }
            saveCart();
          }
        });
      });

      // Show estimated rewards points
      const pointsToEarn = Math.floor(subtotal / 10);
      if (pointsToEarn > 0) {
        cartRewardsRow.style.display = 'flex';
        cartRewardsText.innerText = `Earn +${pointsToEarn} Brew Rewards points`;
      } else {
        cartRewardsRow.style.display = 'none';
      }
    }

    // Badges & Totals
    cartBadge.innerText = totalItems;
    if (totalItems > 0) {
      cartBadge.classList.add('active');
    } else {
      cartBadge.classList.remove('active');
    }

    const tax = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + tax;

    cartSubtotal.innerText = `₹${subtotal}`;
    cartTax.innerText = `₹${tax}`;
    cartTotal.innerText = `₹${grandTotal}`;
  }

  function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Initial Cart UI Update
  updateCartUI();

  // Drawer Toggles
  cartToggle.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Cart Footer Triggers
  clearCartBtn.addEventListener('click', () => {
    cart = [];
    saveCart();
  });

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    let subtotal = 0;
    cart.forEach(item => { subtotal += item.price * item.quantity; });
    const pointsEarned = Math.floor(subtotal / 10);

    // Add loyalty points
    loyaltyPoints += pointsEarned;
    localStorage.setItem('brew_loyalty_points', loyaltyPoints);
    updateLoyaltyUI();

    // Close Cart
    closeCart();

    // Clear cart
    cart = [];
    saveCart();

    // Display Success Alert
    showCustomAlert(
      'Order Placed Successfully!',
      `Your order of ₹${subtotal + Math.round(subtotal * 0.05)} is sent to our barista desk.<br><br><strong>+${pointsEarned} Brew Rewards points</strong> have been credited to your rewards card.`
    );
  });

  // ==========================================================================
  // LOYALTY CARD UPDATE
  // ==========================================================================
  function updateLoyaltyUI() {
    loyaltyPointsVal.innerText = loyaltyPoints;

    const currentProgress = loyaltyPoints % 100;
    loyaltyProgressBar.style.width = `${currentProgress}%`;
    loyaltyProgressText.innerText = `${currentProgress}/100 points`;

    const freeCoffees = Math.floor(loyaltyPoints / 100);
    if (freeCoffees > 0) {
      loyaltyRewardsCount.style.display = 'block';
      loyaltyRewardsCount.innerText = `You have ${freeCoffees} Free Coffee${freeCoffees > 1 ? 's' : ''} ready to redeem!`;
    } else {
      loyaltyRewardsCount.style.display = 'none';
    }
  }

  // Initial loyalty update
  updateLoyaltyUI();

  // ==========================================================================
  // RESERVATION LOGIC WITH INLINE VALIDATIONS
  // ==========================================================================
  const bookingForm = document.getElementById('booking-form');
  const bookingSuccess = document.getElementById('booking-success');

  const guestMinus = document.getElementById('guest-minus');
  const guestPlus = document.getElementById('guest-plus');
  const guestVal = document.getElementById('guest-val');

  const btnResetBooking = document.getElementById('btn-reset-booking');

  // Guest Stepper values
  let guestCount = 2;
  guestMinus.addEventListener('click', () => {
    if (guestCount > 1) {
      guestCount--;
      guestVal.innerText = guestCount;
    }
  });
  guestPlus.addEventListener('click', () => {
    if (guestCount < 12) {
      guestCount++;
      guestVal.innerText = guestCount;
    }
  });

  // Dynamic date constraint (min = today)
  const bookingDateInput = document.getElementById('booking-date');
  const todayString = new Date().toISOString().split('T')[0];
  bookingDateInput.min = todayString;

  // Populate Time Dropdown (8:00 AM to 9:30 PM in 30-min increments)
  const bookingTimeSelect = document.getElementById('booking-time');
  const timeSlots = [];
  let hour = 8;
  let min = 0;

  while (hour < 21 || (hour === 21 && min <= 30)) {
    const suffix = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    const displayMin = min === 0 ? '00' : '30';
    const timeVal = `${displayHour}:${displayMin} ${suffix}`;
    timeSlots.push(timeVal);

    min += 30;
    if (min >= 60) {
      min = 0;
      hour++;
    }
  }

  // Add a placeholder and slots
  bookingTimeSelect.innerHTML = `<option value="" disabled selected>Select time slot</option>`;
  timeSlots.forEach(slot => {
    const option = document.createElement('option');
    option.value = slot;
    option.innerText = slot;
    bookingTimeSelect.appendChild(option);
  });

  // Submit Form Validation & Storage
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('booking-name');
    const phoneInput = document.getElementById('booking-phone');
    const dateInput = document.getElementById('booking-date');
    const timeInput = document.getElementById('booking-time');
    const notesInput = document.getElementById('booking-notes');

    // Error display blocks
    const errorName = document.getElementById('error-booking-name');
    const errorPhone = document.getElementById('error-booking-phone');
    const errorDate = document.getElementById('error-booking-date');
    const errorTime = document.getElementById('error-booking-time');

    // Reset errors
    errorName.style.display = 'none';
    errorPhone.style.display = 'none';
    errorDate.style.display = 'none';
    errorTime.style.display = 'none';

    let isValid = true;

    // Name verification
    if (!nameInput.value.trim()) {
      errorName.style.display = 'block';
      isValid = false;
    }

    // Phone validation (10 digits basic regex)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
      errorPhone.style.display = 'block';
      isValid = false;
    }

    // Date selection validation
    if (!dateInput.value) {
      errorDate.style.display = 'block';
      isValid = false;
    }

    // Time slot selection validation
    if (!timeInput.value) {
      errorTime.style.display = 'block';
      isValid = false;
    }

    if (!isValid) return;

    // Save Reservation data
    const confirmationNumber = 'BREW-' + Math.floor(1000 + Math.random() * 9000);
    const bookingDetail = {
      code: confirmationNumber,
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      date: dateInput.value,
      time: timeInput.value,
      guests: guestCount,
      notes: notesInput.value.trim()
    };

    const currentBookings = JSON.parse(localStorage.getItem('brew_reservations')) || [];
    currentBookings.push(bookingDetail);
    localStorage.setItem('brew_reservations', JSON.stringify(currentBookings));

    // Display confirmation summary
    document.getElementById('summary-name').innerText = bookingDetail.name;
    document.getElementById('summary-guests').innerText = `${bookingDetail.guests} Guest${bookingDetail.guests > 1 ? 's' : ''}`;

    // Format date beautifully
    const dateObj = new Date(bookingDetail.date);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    document.getElementById('summary-datetime').innerText = `${formattedDate} at ${bookingDetail.time}`;
    document.getElementById('summary-code').innerText = bookingDetail.code;

    // Smoothly transition forms
    bookingForm.style.opacity = '0';
    setTimeout(() => {
      bookingForm.style.display = 'none';
      bookingSuccess.style.display = 'flex';
      setTimeout(() => {
        bookingSuccess.classList.add('active');
      }, 50);
    }, 300);
  });

  // Reset Booking form trigger
  btnResetBooking.addEventListener('click', () => {
    bookingSuccess.classList.remove('active');
    setTimeout(() => {
      bookingSuccess.style.display = 'none';
      bookingForm.style.display = 'flex';
      bookingForm.reset();
      guestCount = 2;
      guestVal.innerText = guestCount;
      bookingTimeSelect.value = '';
      setTimeout(() => {
        bookingForm.style.opacity = '1';
      }, 50);
    }, 300);
  });

  // ==========================================================================
  // LIGHTBOX MODAL FUNCTIONALITY
  // ==========================================================================
  const galleryDescriptions = [
    "A spacious open roastery with soft skylights, warm wood structures, and custom coffee tables designed for relaxation and focus.",
    "Precision milk foaming and delicate pouring methods executed by our head barista using custom single-estate espresso roasts.",
    "Organically harvested green coffee beans directly traded from Baba Budangiri Hills, sun-dried to maintain a rich, authentic honey profile.",
    "Constant monitoring of heat variables, airflow, and timing curves ensures each roast profile highlights natural bean acidities.",
    "Enjoy slow mornings at the brew bar as our team conducts pour-overs using v60 copper drip cones and goose-neck kettles.",
    "Perfect warm morning rays cascading across steaming mugs of freshly extracted single-origin espresso in Delhi's Hauz Khas sanctuary."
  ];

  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const index = parseInt(card.getAttribute('data-gallery-index'));
      const title = card.querySelector('.gallery-label').innerText;
      const bgClass = card.querySelector('.gallery-gradient-bg').classList[1];

      lightboxTitle.innerText = title;
      lightboxDesc.innerText = galleryDescriptions[index] || '';

      // Clear previous backgrounds
      lightboxContentBox.className = 'lightbox-content';
      lightboxContentBox.classList.add(bgClass);

      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    // If cart isn't open, restore overflow
    if (!cartDrawer.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // ==========================================================================
  // SCROLL TRIGGERS & NAV HIGHLIGHTS
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

  // Scroll changes navigation styles
  const headerEl = document.getElementById('header');
  // Named (rather than inline anonymous) so it can be detached from `window` on unmount.
  function handleScroll() {
    if (window.scrollY > 50) {
      headerEl.classList.add('scrolled');
    } else {
      headerEl.classList.remove('scrolled');
    }

    // Highlight active nav link on scroll
    const scrollPosition = window.scrollY + 100;
    const sections = ['menu', 'reserve', 'about', 'gallery', 'contact'];

    sections.forEach(secId => {
      const sec = document.getElementById(secId);
      if (sec) {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const link = document.querySelector(`.nav-link[href="#${secId}"]`);

        if (link) {
          if (scrollPosition >= top && scrollPosition < top + height) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      }
    });
  }
  window.addEventListener('scroll', handleScroll);

  // Mobile navbar links close menu on click
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

  // ==========================================================================
  // CUSTOM ALERT MODAL
  // ==========================================================================
  function showCustomAlert(title, message) {
    alertTitle.innerText = title;
    alertMsg.innerHTML = message;
    alertModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCustomAlert() {
    alertModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  alertCloseBtn.addEventListener('click', closeCustomAlert);
  alertModal.addEventListener('click', (e) => {
    if (e.target === alertModal) closeCustomAlert();
  });

  // Cleanup: remove the window-level listener attached above so it doesn't
  // keep firing (and referencing stale/removed DOM nodes) after unmount.
  return function cleanup() {
    window.removeEventListener('scroll', handleScroll);
  };
}
