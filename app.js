// ============================================================
// APP.JS — Filter & render logica voor de homepagina
// ============================================================

// Actieve filters bijhouden
const actieveFilters = {
  type: 'all',
  dieet: new Set(),
  tijd: null,
};

// ===== RENDER HOMEPAGE =====
function renderHomepage() {
  const grid = document.getElementById('recipeGrid');
  const noResults = document.getElementById('noResults');
  const count = document.getElementById('recipesCount');

  const gefilterd = recepten.filter(r => {
    if (actieveFilters.type !== 'all' && r.type !== actieveFilters.type) return false;
    if (actieveFilters.dieet.size > 0) {
      for (const d of actieveFilters.dieet) {
        if (!r.dieet.includes(d)) return false;
      }
    }
    if (actieveFilters.tijd && r.tijd !== actieveFilters.tijd) return false;
    return true;
  });

  // Teller
  count.textContent = `${gefilterd.length} recept${gefilterd.length !== 1 ? 'en' : ''} gevonden`;

  // Grid leegmaken
  grid.innerHTML = '';

  if (gefilterd.length === 0) {
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  gefilterd.forEach((recept, i) => {
    const kaart = maakReceptKaart(recept, i);
    grid.appendChild(kaart);
  });

  updateActieveFiltersDisplay();
}

function maakReceptKaart(r, index) {
  const a = document.createElement('a');
  a.className = 'recipe-card';
  a.href = `recepten/${r.id}.html`;
  a.style.animationDelay = `${index * 0.07}s`;

  const typeLabels = {
    ontbijt: '🥞 Ontbijt', lunch: '🥗 Lunch',
    avondeten: '🍝 Avondeten', dessert: '🍰 Dessert', snack: '🫙 Snack'
  };
  const dieetLabels = {
    vegetarisch: '🌱 Vegetarisch', vegan: '🌿 Vegan', glutenvrij: '🌾 Glutenvrij'
  };

  const tags = [
    `<span class="tag tag-type">${typeLabels[r.type] || r.type}</span>`,
    ...r.dieet.map(d => `<span class="tag tag-dieet">${dieetLabels[d] || d}</span>`),
    `<span class="tag tag-tijd">⏱ ${r.tijdLabel}</span>`
  ].join('');

  const fotoHtml = r.foto
    ? `<img src="../${r.foto}" alt="${r.titel}" loading="lazy">`
    : `<div class="card-img-placeholder">${r.emoji}</div>`;

  a.innerHTML = `
    <div class="card-img-wrap">
      ${fotoHtml}
      <div class="card-img-overlay"></div>
    </div>
    <div class="card-body">
      <div class="card-tags">${tags}</div>
      <div class="card-title">${r.titel}</div>
      <div class="card-desc">${r.beschrijving}</div>
      <div class="card-footer">
        <span>👥 ${r.porties} pers.</span>
        <span>⏱ ${r.tijdLabel}</span>
      </div>
    </div>
  `;
  return a;
}

// ===== FILTER LOGICA =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filterType = btn.dataset.filter;
    const val = btn.dataset.value;

    if (filterType === 'type') {
      // Eén type tegelijk
      document.querySelectorAll('[data-filter="type"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      actieveFilters.type = val;

    } else if (filterType === 'dieet') {
      // Meerdere diëten tegelijk
      if (actieveFilters.dieet.has(val)) {
        actieveFilters.dieet.delete(val);
        btn.classList.remove('active', 'active-secondary');
      } else {
        actieveFilters.dieet.add(val);
        btn.classList.add('active-secondary');
      }

    } else if (filterType === 'tijd') {
      // Toggle tijdfilter
      if (actieveFilters.tijd === val) {
        actieveFilters.tijd = null;
        btn.classList.remove('active', 'active-secondary');
      } else {
        document.querySelectorAll('[data-filter="tijd"]').forEach(b => b.classList.remove('active', 'active-secondary'));
        actieveFilters.tijd = val;
        btn.classList.add('active-secondary');
      }
    }

    renderHomepage();
  });
});

function resetFilters() {
  actieveFilters.type = 'all';
  actieveFilters.dieet.clear();
  actieveFilters.tijd = null;

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active', 'active-secondary'));
  document.querySelector('[data-filter="type"][data-value="all"]').classList.add('active');

  renderHomepage();
}

function updateActieveFiltersDisplay() {
  const container = document.getElementById('activeFilters');
  const tags = [];

  if (actieveFilters.type !== 'all') tags.push(actieveFilters.type);
  actieveFilters.dieet.forEach(d => tags.push(d));
  if (actieveFilters.tijd) tags.push(actieveFilters.tijd === 'snel' ? '< 30 min' : actieveFilters.tijd === 'medium' ? '30–60 min' : '> 60 min');

  container.innerHTML = tags.length
    ? tags.map(t => `<span class="active-tag">✓ ${t}</span>`).join('')
    : '';
}

// ===== START =====
renderHomepage();
