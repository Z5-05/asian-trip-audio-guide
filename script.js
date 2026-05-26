const DESTINATIONS = ['singapore', 'kuala-lumpur', 'bali'];

const DEMO_DATA = [
  {
    id: 'demo-sg-1',
    destination: 'singapore',
    title: 'Marina Bay Sands',
    description: 'Знаменитый курортный комплекс на берегу Marina Bay. Известен смотровой площадкой SkyPark и одним из самых больших в мире крышных бассейнов с панорамным видом на горизонт города.',
    googleMapsLink: 'https://maps.google.com/?q=Marina+Bay+Sands+Singapore',
    audioSrc: '',
    photos: [
      'https://picsum.photos/seed/sg-marina-1/400/250',
      'https://picsum.photos/seed/sg-marina-2/400/250',
      'https://picsum.photos/seed/sg-marina-3/400/250'
    ]
  },
  {
    id: 'demo-sg-2',
    destination: 'singapore',
    title: 'Gardens by the Bay',
    description: 'Футуристический природный парк площадью 101 гектар в центре Сингапура. Здесь расположены знаменитые башни Суперди, оранжерея Cloud Forest и Flower Dome — два крупнейших стеклянных купола в мире.',
    googleMapsLink: 'https://maps.google.com/?q=Gardens+by+the+Bay+Singapore',
    audioSrc: '',
    photos: [
      'https://picsum.photos/seed/sg-gardens-1/400/250',
      'https://picsum.photos/seed/sg-gardens-2/400/250'
    ]
  },
  {
    id: 'demo-sg-3',
    destination: 'singapore',
    title: 'Chinatown',
    description: 'Яркий исторический район с красочными домами-лавками, буддийскими и индуистскими храмами и оживлёнными уличными рынками. Одно из лучших мест, чтобы попробовать местную еду и купить сувениры.',
    googleMapsLink: 'https://maps.google.com/?q=Chinatown+Singapore',
    audioSrc: '',
    photos: [
      'https://picsum.photos/seed/sg-china-1/400/250',
      'https://picsum.photos/seed/sg-china-2/400/250'
    ]
  },
  {
    id: 'demo-kl-1',
    destination: 'kuala-lumpur',
    title: 'Petronas Twin Towers',
    description: 'Самые высокие башни-близнецы в мире высотой 452 метра. Символ современной Малайзии со знаменитым смотровым мостом на 41–42 этажах и обзорной площадкой на 86 этаже.',
    googleMapsLink: 'https://maps.google.com/?q=Petronas+Twin+Towers+Kuala+Lumpur',
    audioSrc: '',
    photos: [
      'https://picsum.photos/seed/kl-towers-1/400/250',
      'https://picsum.photos/seed/kl-towers-2/400/250',
      'https://picsum.photos/seed/kl-towers-3/400/250'
    ]
  },
  {
    id: 'demo-kl-2',
    destination: 'kuala-lumpur',
    title: 'Batu Caves',
    description: 'Комплекс известняковых пещер и индуистских храмов к северу от Куала-Лумпура. Вход охраняет золотая статуя Муругана высотой 42,7 метра, к которой ведут 272 яркие разноцветные ступени.',
    googleMapsLink: 'https://maps.google.com/?q=Batu+Caves+Malaysia',
    audioSrc: '',
    photos: [
      'https://picsum.photos/seed/kl-caves-1/400/250',
      'https://picsum.photos/seed/kl-caves-2/400/250'
    ]
  },
  {
    id: 'demo-kl-3',
    destination: 'kuala-lumpur',
    title: 'Central Market',
    description: 'Главный культурный центр Куала-Лумпура, расположенный в историческом здании арт-деко 1930-х годов. Отличное место для покупки традиционного батика, оловянных изделий и малайских сувениров.',
    googleMapsLink: 'https://maps.google.com/?q=Central+Market+Kuala+Lumpur',
    audioSrc: '',
    photos: [
      'https://picsum.photos/seed/kl-market-1/400/250',
      'https://picsum.photos/seed/kl-market-2/400/250'
    ]
  },
  {
    id: 'demo-bl-1',
    destination: 'bali',
    title: 'Tanah Lot Temple',
    description: 'Один из самых фотографируемых храмов Бали, расположенный на скалистом острове в океане. Лучше всего посещать на закате, когда силуэт храма на фоне неба выглядит особенно впечатляюще.',
    googleMapsLink: 'https://maps.google.com/?q=Tanah+Lot+Temple+Bali',
    audioSrc: '',
    photos: [
      'https://picsum.photos/seed/bl-tanah-1/400/250',
      'https://picsum.photos/seed/bl-tanah-2/400/250',
      'https://picsum.photos/seed/bl-tanah-3/400/250'
    ]
  },
  {
    id: 'demo-bl-2',
    destination: 'bali',
    title: 'Ubud Monkey Forest',
    description: 'Священный природный заповедник, где живут более 700 длиннохвостых макак. Утопает в тропическом лесу с древними храмами, каменными статуями и огромными баньянами.',
    googleMapsLink: 'https://maps.google.com/?q=Ubud+Monkey+Forest+Bali',
    audioSrc: '',
    photos: [
      'https://picsum.photos/seed/bl-monkey-1/400/250',
      'https://picsum.photos/seed/bl-monkey-2/400/250'
    ]
  },
  {
    id: 'demo-bl-3',
    destination: 'bali',
    title: 'Tegallalang Rice Terraces',
    description: 'Живописные рисовые террасы в холмах к северу от Убуда. Объект Всемирного наследия ЮНЕСКО, воплощающий древнюю балийскую систему орошения субак, которой насчитывается более тысячи лет.',
    googleMapsLink: 'https://maps.google.com/?q=Tegallalang+Rice+Terraces+Bali',
    audioSrc: '',
    photos: [
      'https://picsum.photos/seed/bl-terrace-1/400/250',
      'https://picsum.photos/seed/bl-terrace-2/400/250'
    ]
  }
];

let attractions = [];

function generateId() {
  return 'att-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
}

async function loadData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error();
    const json = await res.json();
    if (Array.isArray(json) && json.length > 0) {
      attractions = json;
    } else {
      attractions = DEMO_DATA.map(a => ({ ...a }));
      await saveData();
    }
  } catch {
    attractions = DEMO_DATA.map(a => ({ ...a }));
    showSaveError('Не удалось подключиться к серверу. Данные не сохраняются.');
  }
}

async function saveData() {
  const res = await fetch('/api/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(attractions)
  });
  if (!res.ok) throw new Error();
}

function showSaveError(msg) {
  const el = document.getElementById('save-error');
  el.textContent = msg;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 6000);
}

function byDestination(dest) {
  return attractions.filter(a => a.destination === dest);
}

function findById(id) {
  return attractions.find(a => a.id === id) || null;
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = String(str);
  return d.innerHTML;
}

function isSafeUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://');
}

function parsePhotoUrls(text) {
  return text.split('\n').map(l => l.trim()).filter(l => l.length > 0 && isSafeUrl(l));
}

const PIN_SVG = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';

function buildGalleryHtml(photos) {
  if (!photos || photos.length === 0) return '';
  const singleClass = photos.length === 1 ? ' gallery-single' : '';
  const imgs = photos
    .filter(isSafeUrl)
    .map(url => `<img src="${escapeHtml(url)}" alt="" loading="lazy" onerror="this.style.display='none'">`)
    .join('');
  return imgs ? `<div class="card-gallery${singleClass}">${imgs}</div>` : '';
}

function buildCardHtml(att) {
  const mapsHref = isSafeUrl(att.googleMapsLink) ? escapeHtml(att.googleMapsLink) : '#';
  const audioBlock = att.audioSrc
    ? `<audio controls class="card-audio"><source src="${att.audioSrc}"></audio>`
    : `<p class="no-audio">Аудиогид ещё не добавлен</p>`;
  const galleryBlock = buildGalleryHtml(att.photos || []);

  return `
    <div class="card" data-id="${att.id}">
      ${galleryBlock}
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(att.title)}</h3>
        <p class="card-description">${escapeHtml(att.description)}</p>
        <a href="${mapsHref}" class="btn-maps" target="_blank" rel="noopener noreferrer">
          ${PIN_SVG} Открыть в Google Maps
        </a>
        ${audioBlock}
      </div>
      <div class="card-footer">
        <button class="btn-edit" data-id="${att.id}">Редактировать</button>
        <button class="btn-delete" data-id="${att.id}">Удалить</button>
      </div>
    </div>
  `;
}

function renderDestination(dest) {
  const grid = document.getElementById('grid-' + dest);
  const items = byDestination(dest);
  grid.innerHTML = items.length
    ? items.map(buildCardHtml).join('')
    : '<p class="empty-state">Мест пока нет. Нажмите <strong>+ Добавить место</strong>, чтобы начать.</p>';
}

function renderAll() {
  DESTINATIONS.forEach(renderDestination);
}

let editingId = '';
let editingDest = '';

function openAddModal(dest) {
  editingId = '';
  editingDest = dest;
  document.getElementById('modal-heading').textContent = 'Добавить место';
  document.getElementById('field-title').value = '';
  document.getElementById('field-description').value = '';
  document.getElementById('field-maps').value = '';
  document.getElementById('field-photos').value = '';
  document.getElementById('field-audio').value = '';
  document.getElementById('audio-hint').textContent = '';
  clearErrors();
  showModal();
}

function openEditModal(id) {
  const att = findById(id);
  if (!att) return;
  editingId = id;
  editingDest = att.destination;
  document.getElementById('modal-heading').textContent = 'Редактировать место';
  document.getElementById('field-title').value = att.title;
  document.getElementById('field-description').value = att.description;
  document.getElementById('field-maps').value = att.googleMapsLink;
  document.getElementById('field-photos').value = att.photos ? att.photos.join('\n') : '';
  document.getElementById('field-audio').value = '';
  document.getElementById('audio-hint').textContent = att.audioSrc
    ? 'Аудио загружено. Загрузите новый файл, чтобы заменить.'
    : 'Аудио ещё не добавлено.';
  clearErrors();
  showModal();
}

function showModal() {
  document.getElementById('modal-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('field-title').focus(), 40);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

function clearErrors() {
  ['title', 'description', 'maps'].forEach(f => {
    document.getElementById('err-' + f).textContent = '';
    document.getElementById('field-' + f).classList.remove('error');
  });
}

function setError(field, msg) {
  document.getElementById('err-' + field).textContent = msg;
  document.getElementById('field-' + field).classList.add('error');
}

function validateForm() {
  let ok = true;
  const title = document.getElementById('field-title').value.trim();
  const desc  = document.getElementById('field-description').value.trim();
  const maps  = document.getElementById('field-maps').value.trim();

  if (!title) { setError('title', 'Название обязательно.'); ok = false; }
  if (!desc)  { setError('description', 'Описание обязательно.'); ok = false; }
  if (!maps) {
    setError('maps', 'Ссылка на Google Maps обязательна.');
    ok = false;
  } else if (!isSafeUrl(maps)) {
    setError('maps', 'Ссылка должна начинаться с http:// или https://');
    ok = false;
  }
  return ok;
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleSubmit(e) {
  e.preventDefault();
  clearErrors();
  if (!validateForm()) return;

  const title  = document.getElementById('field-title').value.trim();
  const desc   = document.getElementById('field-description').value.trim();
  const maps   = document.getElementById('field-maps').value.trim();
  const photos = parsePhotoUrls(document.getElementById('field-photos').value);
  const file   = document.getElementById('field-audio').files[0];
  const saveBtn = document.getElementById('btn-save');

  saveBtn.disabled = true;
  saveBtn.textContent = 'Сохранение…';

  try {
    const currentAudio = editingId ? (findById(editingId) || {}).audioSrc || '' : '';
    const audioSrc = file ? await fileToBase64(file) : currentAudio;

    if (editingId) {
      const idx = attractions.findIndex(a => a.id === editingId);
      if (idx !== -1) {
        attractions[idx] = { ...attractions[idx], title, description: desc, googleMapsLink: maps, photos, audioSrc };
      }
    } else {
      attractions.push({
        id: generateId(),
        destination: editingDest,
        title,
        description: desc,
        googleMapsLink: maps,
        photos,
        audioSrc
      });
    }

    await saveData();
    renderDestination(editingDest);
    closeModal();
  } catch {
    alert('Ошибка при сохранении. Проверьте подключение к серверу.');
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = 'Сохранить';
  }
}

async function handleDelete(id) {
  const att = findById(id);
  if (!att) return;
  if (!confirm(`Удалить «${att.title}»?`)) return;

  attractions = attractions.filter(a => a.id !== id);
  renderDestination(att.destination);

  try {
    await saveData();
  } catch {
    showSaveError('Ошибка при удалении. Перезагрузите страницу.');
  }
}

async function init() {
  await loadData();
  renderAll();

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + tab).classList.add('active');
    });
  });

  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => openAddModal(btn.dataset.destination));
  });

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('btn-cancel').addEventListener('click', closeModal);

  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target.id === 'modal-overlay') closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('attraction-form').addEventListener('submit', handleSubmit);

  document.body.addEventListener('click', e => {
    if (e.target.classList.contains('btn-delete')) handleDelete(e.target.dataset.id);
    if (e.target.classList.contains('btn-edit'))   openEditModal(e.target.dataset.id);
  });

  ['title', 'description', 'maps'].forEach(f => {
    document.getElementById('field-' + f).addEventListener('input', () => {
      document.getElementById('err-' + f).textContent = '';
      document.getElementById('field-' + f).classList.remove('error');
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
