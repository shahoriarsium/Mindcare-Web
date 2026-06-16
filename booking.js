function renderConsultantPage(consultantId) {
  const c = getConsultantById(consultantId);
  if (!c) return;

  document.title = `${c.name} — MindCare Center`;
  document.getElementById('consultant-content').innerHTML = `
    <div class="detail-grid">
      <div>
        <img src="${c.image}" alt="${c.name}" class="detail-photo">
      </div>
      <div class="detail-info">
        <span class="card-tag">${c.specialty}</span>
        <h2>${c.name}</h2>
        <p class="detail-title">${c.title}</p>
        <p class="detail-bio">${c.bio}</p>

        <div class="detail-section">
          <h3>Qualifications</h3>
          <ul>${c.qualifications.map(q => `<li>${q}</li>`).join('')}</ul>
        </div>

        <div class="detail-section">
          <h3>Treatment Approach</h3>
          <p style="color: var(--color-text-muted); font-size: 0.9rem;">${c.approach}</p>
        </div>

        <div class="detail-section">
          <h3>Available Times</h3>
          <ul>${c.availability.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>
      </div>
    </div>

    <div class="booking-panel">
      <h3>Book a Session with ${c.name}</h3>
      <form id="booking-form">
        <div class="form-row">
          <div class="form-group">
            <label for="booking-date">Preferred Date</label>
            <input type="date" id="booking-date" required>
          </div>
          <div class="form-group">
            <label for="booking-time">Preferred Time</label>
            <select id="booking-time" required>
              <option value="">Select a time</option>
              ${c.availability.map(a => `<option value="${a}">${a}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="booking-price">
          <span>Session fee (${c.duration})</span>
          <strong class="price">${formatPrice(c.price)}</strong>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Add to Cart</button>
      </form>
    </div>
  `;

  const dateInput = document.getElementById('booking-date');
  const today = new Date();
  today.setDate(today.getDate() + 1);
  dateInput.min = today.toISOString().split('T')[0];

  document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;

    if (!date || !time) {
      showToast('Please select a date and time.', 'error');
      return;
    }

    const added = addToCart({
      consultantId: c.id,
      consultantName: c.name,
      specialty: c.specialty,
      price: c.price,
      duration: c.duration,
      date,
      time,
      image: c.image
    });

    if (added) {
      showToast('Session added to cart!');
      setTimeout(() => window.location.href = 'cart.html', 1200);
    } else {
      showToast('This session is already in your cart.', 'error');
    }
  });
}
