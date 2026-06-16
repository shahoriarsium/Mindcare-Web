const CART_KEY = 'mindcare_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(
    i => i.consultantId === item.consultantId && i.date === item.date && i.time === item.time
  );
  if (existing) return false;

  cart.push({
    id: Date.now().toString(),
    consultantId: item.consultantId,
    consultantName: item.consultantName,
    specialty: item.specialty,
    price: item.price,
    duration: item.duration,
    date: item.date,
    time: item.time,
    image: item.image
  });
  saveCart(cart);
  return true;
}

function removeFromCart(itemId) {
  const cart = getCart().filter(i => i.id !== itemId);
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price, 0);
}

function getCartCount() {
  return getCart().length;
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.hidden = count === 0;
  });
}

function formatPrice(amount) {
  return '$' + amount.toFixed(2);
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
