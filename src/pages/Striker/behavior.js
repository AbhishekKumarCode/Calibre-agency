export function initStrikerBehavior() {
  // ==========================================
  // SHOP VIEW SCROLLING
  // ==========================================
  function scrollToShop() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToBulk() {
    document.getElementById('bulk').scrollIntoView({ behavior: 'smooth' });
  }

  // ==========================================
  // TOAST NOTIFICATIONS
  // ==========================================
  function triggerToast(itemName) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';

    toast.innerHTML = `
      <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
      <span>Added ${itemName} &mdash; Demo Mode</span>
    `;

    container.appendChild(toast);

    // Auto dismiss after 2 seconds
    setTimeout(() => {
      toast.classList.add('fade-out');
      toast.addEventListener('animationend', (e) => {
        if (e.animationName === 'striker-toastOut') {
          toast.remove();
        }
      });
    }, 2000);
  }

  // ==========================================
  // CATALOG DYNAMIC FILTER LOGIC (whole sport groups, not per-card)
  // ==========================================
  function setSelectorPillActive(sportCategory) {
    const tabs = document.querySelectorAll('.hero-sport-tab');
    tabs.forEach(tab => {
      const onclickAttr = tab.getAttribute('onclick') || '';
      if (onclickAttr.includes(`'${sportCategory}'`)) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  function setFilter(sportCategory) {
    // Toggle Active Tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      if (btn.id === `tab-${sportCategory}`) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Synchronize hero scoreboard tabs
    setSelectorPillActive(sportCategory);

    // Show/hide whole sport groups (team dividers), not individual cards
    const groups = document.querySelectorAll('.sport-group');
    groups.forEach(group => {
      const groupSport = group.getAttribute('data-sport-group');
      if (sportCategory === 'all' || groupSport === sportCategory) {
        group.classList.remove('hidden');
      } else {
        group.classList.add('hidden');
      }
    });
  }

  function scrollToAndFilter(sportCategory) {
    setFilter(sportCategory);
    scrollToShop();
  }

  // ==========================================
  // SIZE GUIDE DROPDOWN TOGGLER
  // ==========================================
  function toggleSizeTable() {
    const selectedValue = document.getElementById('size-category-select').value;
    const tables = document.querySelectorAll('.size-table-container');

    tables.forEach(table => {
      if (table.id === `table-${selectedValue}`) {
        table.classList.add('active');
      } else {
        table.classList.remove('active');
      }
    });
  }

  // ==========================================
  // BULK ORDER FORM SUBMISSION
  // ==========================================
  function handleFormSubmit(event) {
    event.preventDefault();

    // Clear Warnings
    document.getElementById('warn-name').style.display = 'none';
    document.getElementById('warn-org').style.display = 'none';
    document.getElementById('warn-qty').style.display = 'none';
    document.getElementById('warn-phone').style.display = 'none';

    // Load Inputs
    const clientName = document.getElementById('client-name').value.trim();
    const orgName = document.getElementById('org-name').value.trim();
    const sportVal = document.getElementById('sport-type').value;
    const qtyVal = parseInt(document.getElementById('quantity').value, 10);
    const phoneNo = document.getElementById('phone-no').value.trim();

    // Validation flags
    let isValid = true;

    if (!clientName) {
      document.getElementById('warn-name').style.display = 'block';
      isValid = false;
    }
    if (!orgName) {
      document.getElementById('warn-org').style.display = 'block';
      isValid = false;
    }
    if (isNaN(qtyVal) || qtyVal < 10) {
      document.getElementById('warn-qty').style.display = 'block';
      isValid = false;
    }
    const phoneDigitsOnly = phoneNo.replace(/[\s()+-]/g, '');
    if (!phoneNo || !/^\d{8,13}$/.test(phoneDigitsOnly)) {
      document.getElementById('warn-phone').style.display = 'block';
      isValid = false;
    }

    if (!isValid) return;

    // Show Success State
    const successText = `Thank you, ${clientName}. We have logged your B2B request for ${qtyVal} ${sportVal} gear units for ${orgName}. Our wholesale logistics desk will call you at ${phoneNo} shortly to deliver your custom quote.`;

    document.getElementById('success-summary-text').innerText = successText;
    document.getElementById('bulk-inquiry-form').style.display = 'none';
    document.getElementById('form-success-block').style.display = 'block';
  }

  function resetFormState() {
    // Reset input fields
    document.getElementById('bulk-inquiry-form').reset();

    // Toggle displays
    document.getElementById('form-success-block').style.display = 'none';
    document.getElementById('bulk-inquiry-form').style.display = 'block';
  }

  // ==========================================
  // HERO SCOREBOARD LIVE CLOCK
  // ==========================================
  function updateHeroClock() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const clockEl = document.getElementById('hero-clock');
    if (clockEl) {
      clockEl.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    }

    const hour = now.getHours();
    const isOpen = hour >= 9 && hour < 21;
    const statusEl = document.getElementById('hero-store-status');
    if (statusEl) {
      statusEl.classList.toggle('is-closed', !isOpen);
      statusEl.innerHTML = `<span class="hero-live-dot" aria-hidden="true"></span>${isOpen ? 'Store Open' : 'Store Closed'}`;
    }
  }

  updateHeroClock();
  const intervalId = setInterval(updateHeroClock, 1000);

  // Expose handlers referenced by inline onclick/onsubmit/onchange attributes
  // in the ported markup (dangerouslySetInnerHTML strips React's synthetic
  // event system, so these must live on window for the inline attributes to
  // resolve).
  window.scrollToShop = scrollToShop;
  window.scrollToBulk = scrollToBulk;
  window.triggerToast = triggerToast;
  window.setFilter = setFilter;
  window.scrollToAndFilter = scrollToAndFilter;
  window.toggleSizeTable = toggleSizeTable;
  window.handleFormSubmit = handleFormSubmit;
  window.resetFormState = resetFormState;

  return () => {
    clearInterval(intervalId);
    delete window.scrollToShop;
    delete window.scrollToBulk;
    delete window.triggerToast;
    delete window.setFilter;
    delete window.scrollToAndFilter;
    delete window.toggleSizeTable;
    delete window.handleFormSubmit;
    delete window.resetFormState;
  };
}
