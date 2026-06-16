function renderHeader(activePage) {
  const navItems = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'consultants.html', label: 'Consultants', id: 'consultants' },
    { href: 'cart.html', label: 'Cart', id: 'cart' }
  ];

  const navLinks = navItems.map(item =>
    `<a href="${item.href}" class="nav-link${activePage === item.id ? ' active' : ''}">${item.label}</a>`
  ).join('');

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="index.html" class="logo">
          <span class="logo-icon">&#9829;</span>
          MindCare Center
        </a>
        <nav class="main-nav">${navLinks}</nav>
        <a href="cart.html" class="cart-link" aria-label="View cart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <span class="cart-badge" hidden>0</span>
        </a>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <strong>MindCare Center</strong>
          <p>Compassionate psychiatric care for depression, anxiety, and insomnia.</p>
        </div>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="consultants.html">Consultants</a>
          <a href="cart.html">Cart</a>
        </div>
        <p class="footer-copy">&copy; 2026 MindCare Center. All rights reserved.</p>
      </div>
    </footer>
  `;
}

function showToast(message, type = 'success') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `toast toast-${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function initPage(activePage) {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = renderHeader(activePage);
  if (footerEl) footerEl.innerHTML = renderFooter();
  updateCartBadge();
}
