
const config = {
  whatsappNumber: "237653366304",
  email: "fnzoche@gmail.com",
  currency: "FCFA"
};


const products = [
  { id: 'p1', name: 'Casque Bluetooth p9 Pro', price: 5000, img: 'images/p9 max 3.webp', category: 'Casques' },
  { id: 'p2', name: 'Ecouteurs True Wireless', price: 4000, img: 'images/m30 2.webp', category: 'Ecouteurs' },
  { id: 'p3', name: 'Powerbank 10000mAh', price: 10000, img: 'images/power.jpeg', category: 'Powerbanks' },
  { id: 'p4', name: 'Tondeuse Électrique', price: 15000, img: 'images/oraimo tdse.jpeg', category: 'Tondeuses' },
  { id: 'p5', name: 'AirPods-Pro 2ème Gen', price: 10000, img: 'images/pro.jpeg', category: 'Ecouteurs' },
  { id: 'p6', name: 'Casque Gamer RGB', price: 8500, img: 'images/17.jpg', category: 'Casques' },
  { id: 'p7', name: 'Chargeur Fast 30 & 50W', price: 5000, img: 'images/fast.jpeg', category: 'Chargeurs' },
  { id: 'p8', name: 'Casque Bluetooth JBL', price: 10000, img: 'images/35.jpg', category: 'Câbles' },
  { id: 'p9', name: 'Manette PS4', price: 8500, img: 'images/30.jpg', category: 'Accessoires' },
  { id: 'p10', name: 'Montre connecté', price: 7000, img: 'images/33.webp', category: 'Haut-parleurs' },
  { id: 'p11', name: 'Casque JBL Tune 520', price: 10000, img: 'images/20.jpg', category: 'Casques' },
  { id: 'p12', name: 'Ecouteur M20', price: 5000, img: 'images/m20 2.jpeg', category: 'Accessoires' },
  { id: 'p13', name: 'Casque CAT', price: 5000, img: 'images/cat 2.jpeg', category: 'Adaptateurs' },
  { id: 'p14', name: 'Ecouteur Bluetooth Boucle', price: 6500, img: 'images/22.jpg', category: 'Stockage' },
  { id: 'p15', name: 'Manette XBOX avec Fil', price: 10000, img: 'images/6.jpg', category: 'Gadgets' },
  { id: 'p16', name: 'Montre + Airpod', price: 6500, img: 'images/9.jpg', category: 'Webcams' },
  { id: 'p17', name: 'Airpod avec Ecran Tactile', price: 10000, img: 'images/49.webp', category: 'Chargeurs' },
  { id: 'p18', name: 'souris sans fil Gaming', price: 5000, img: 'images/images.jpeg', category: 'Périphériques' },
  { id: 'p19', name: 'Kit Videos', price: 5000, img: 'images/14.jpg', category: 'Périphériques' },
  { id: 'p20', name: 'Trepied 1.70m', price: 7000, img: 'images/trepied.jpeg', category: 'Accessoires' }
];

const cart = {};

function formatPrice(amount) { return amount.toLocaleString('fr-FR'); }


const productsGrid = document.getElementById('productsGrid');
const categoryList = document.getElementById('categoryList');
const catSelect = document.getElementById('catSelect');
const catProdList = document.getElementById('categoryProductsList');
const searchInput = document.getElementById('searchInput');

const cartCountEl = document.getElementById('cartCount');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');

const cartDrawer = document.getElementById('cartDrawer');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');

const sendWhatsBtn = document.getElementById('sendWhats');
const sendMailBtn = document.getElementById('sendMail');

const custName = document.getElementById('custName');
const custPhone = document.getElementById('custPhone');
const custAddress = document.getElementById('custAddress');

const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

document.getElementById('year').textContent = new Date().getFullYear();


renderCategories();
renderProducts('all');
updateCartUI();


function renderProducts(category='all', search='') {
  productsGrid.innerHTML = '';
  const list = products.filter(p => {
    const matchCat = category==='all' ? true : p.category===category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  if (list.length===0) { productsGrid.innerHTML = '<p>Aucun produit trouvé.</p>'; return; }
  for (const p of list) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="price">${formatPrice(p.price)} ${config.currency}</div>
      <div class="actions">
        <button class="btn btn-ghost" data-view="${p.id}">Voir</button>
        <button class="btn btn-primary" data-add="${p.id}">Ajouter au panier</button>
      </div>
    `;
    productsGrid.appendChild(card);
  }
}


function getCategories() { return Array.from(new Set(products.map(p=>p.category))); }
function renderCategories() {
  const cats = getCategories();
  categoryList.innerHTML = '';
  catSelect.innerHTML = '<option value="all">Toutes les catégories</option>';
  for (const c of cats) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type='button'; btn.textContent=c; btn.dataset.cat=c;
    btn.addEventListener('click', ()=> { setActiveCategory(c); renderProducts(c, searchInput.value); populateCategoryProducts(c); });
    li.appendChild(btn); categoryList.appendChild(li);
    const opt = document.createElement('option'); opt.value=c; opt.textContent=c; catSelect.appendChild(opt);
  }
  populateCategoryProducts('all');
}
function setActiveCategory(cat) {
  document.querySelectorAll('.category-list button').forEach(b=>b.classList.remove('active'));
  const btn = document.querySelector(`.category-list button[data-cat="${cat}"]`);
  if (btn) btn.classList.add('active');
}
function populateCategoryProducts(cat='all') {
  catProdList.innerHTML='';
  const list = products.filter(p => cat==='all' ? true : p.category===cat);
  for (const p of list) {
    const li = document.createElement('li');
    li.textContent = `${p.name}`;
    li.style.cursor='pointer';
    li.addEventListener('click', ()=> { renderProducts(cat,''); window.scrollTo({ top: document.getElementById('products').offsetTop - 80, behavior: 'smooth' }); });
    catProdList.appendChild(li);
  }
}


catSelect.addEventListener('change', ()=> {
  const val = catSelect.value; setActiveCategory(val); renderProducts(val, searchInput.value); populateCategoryProducts(val);
});
searchInput.addEventListener('input', ()=> { const cat = catSelect.value || 'all'; renderProducts(cat, searchInput.value); });


productsGrid.addEventListener('click', (e)=> {
  const addBtn = e.target.closest('button[data-add]');
  const viewBtn = e.target.closest('button[data-view]');
  if (addBtn) { const pid = addBtn.dataset.add; addToCart(pid); openCart(); }
  else if (viewBtn) { const pid = viewBtn.dataset.view; const prod = products.find(p=>p.id===pid); if (prod) alert(`${prod.name}\n\nPrix: ${formatPrice(prod.price)} ${config.currency}\nCatégorie: ${prod.category}`); }
});


function addToCart(pid, qty=1) { cart[pid] = (cart[pid]||0)+qty; updateCartUI(); }
function updateCartUI() {
  const totalQty = Object.values(cart).reduce((s,q)=>s+q,0);
  cartCountEl.textContent = totalQty;
  cartItemsEl.innerHTML='';
  for (const pid of Object.keys(cart)) {
    const product = products.find(p=>p.id===pid); if (!product) continue;
    const qty = cart[pid];
    const div = document.createElement('div'); div.className='cart-item';
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <div style="flex:1">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <strong>${product.name}</strong>
          <div>${formatPrice(product.price*qty)} ${config.currency}</div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
          <div class="qty">
            <button data-dec="${pid}">-</button>
            <div style="padding:6px 10px;border-radius:6px;border:1px solid #eee">${qty}</div>
            <button data-inc="${pid}">+</button>
          </div>
          <button data-del="${pid}" style="background:transparent;border:none;color:#c94b2e;cursor:pointer">Supprimer</button>
        </div>
      </div>
    `;
    cartItemsEl.appendChild(div);
  }
  const total = Object.entries(cart).reduce((s,[pid,q])=>{ const p=products.find(x=>x.id===pid); return s+(p? p.price*q:0); },0);
  cartTotalEl.textContent = formatPrice(total);
}


function openCart(){ cartDrawer.classList.add('open'); cartDrawer.setAttribute('aria-hidden','false'); openCartBtn.setAttribute('aria-expanded','true'); }
function closeCart(){ cartDrawer.classList.remove('open'); cartDrawer.setAttribute('aria-hidden','true'); openCartBtn.setAttribute('aria-expanded','false'); }
openCartBtn.addEventListener('click', ()=> { if (cartDrawer.classList.contains('open')) closeCart(); else openCart(); });
closeCartBtn && closeCartBtn.addEventListener('click', closeCart);


cartItemsEl.addEventListener('click', (e)=> {
  const inc = e.target.closest('button[data-inc]');
  const dec = e.target.closest('button[data-dec]');
  const del = e.target.closest('button[data-del]');
  if (inc) { const pid = inc.dataset.inc; cart[pid] = (cart[pid]||0)+1; updateCartUI(); }
  else if (dec) { const pid = dec.dataset.dec; cart[pid] = Math.max((cart[pid]||1)-1,0); if (cart[pid]===0) delete cart[pid]; updateCartUI(); }
  else if (del) { const pid = del.dataset.del; delete cart[pid]; updateCartUI(); }
});


function buildOrder() {
  const name = (custName.value||'').trim();
  const phone = (custPhone.value||'').trim();
  const address = (custAddress.value||'').trim();
  const items = Object.entries(cart).map(([pid,qty]) => {
    const p = products.find(x=>x.id===pid);
    return { name: p? p.name: pid, qty, price: p? p.price:0, subtotal: p? p.price*qty:0 };
  });
  const total = items.reduce((s,it)=>s+it.subtotal,0);
  return { name, phone, address, items, total };
}
function buildTextMessage(order) {
  const lines = [];
  lines.push("Nouvelle commande — La Maison du Bonheur");
  lines.push("");
  lines.push("Client:");
  lines.push(`- Nom: ${order.name || 'Non renseigné'}`);
  lines.push(`- Téléphone: ${order.phone || 'Non renseigné'}`);
  lines.push(`- Adresse: ${order.address || 'Non renseigné'}`);
  lines.push("");
  lines.push("Panier:");
  for (const it of order.items) lines.push(`- ${it.name} x${it.qty} -> ${formatPrice(it.subtotal)} ${config.currency}`);
  lines.push("");
  lines.push(`Total: ${formatPrice(order.total)} ${config.currency}`);
  lines.push("");
  lines.push("Merci !");
  return lines.join('\n');
}


sendWhatsBtn.addEventListener('click', ()=> {
  const order = buildOrder();
  if (order.items.length===0) { alert("Ton panier est vide."); return; }
  const msg = buildTextMessage(order);
  const encoded = encodeURIComponent(msg);
  const waLink = `https://wa.me/${config.whatsappNumber}?text=${encoded}`;
  window.open(waLink, '_blank');
});
sendMailBtn.addEventListener('click', ()=> {
  const order = buildOrder();
  if (order.items.length===0) { alert("Ton panier est vide."); return; }
  const subject = encodeURIComponent("Nouvelle commande - La Maison du Bonheur");
  const body = encodeURIComponent(buildTextMessage(order));
  window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;
});


document.addEventListener('click', (e)=> {
  if (!cartDrawer.classList.contains('open')) return;
  const inside = cartDrawer.contains(e.target);
  const btn = openCartBtn.contains(e.target);
  if (!inside && !btn) closeCart();
});


menuToggle.addEventListener('click', ()=> {
  const open = mobileNav.classList.toggle('open');
  mobileNav.setAttribute('aria-hidden', String(!open));
  menuToggle.setAttribute('aria-expanded', String(open));
});
mobileLinks.forEach(a => a.addEventListener('click', ()=> {
  mobileNav.classList.remove('open');
  mobileNav.setAttribute('aria-hidden','true');
  menuToggle.setAttribute('aria-expanded','false');
}));
