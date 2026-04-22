const config = {
  whatsappNumber: "237653366304",
  email: "fnzoche@gmail.com",
  currency: "FCFA",
  storageKey: "maison-du-bonheur-cart",
  maxCartQuantity: 20
};

const products = [
  { id: "p1", name: "Casque Bluetooth P9 Pro", price: 5000, img: "images/p9 max 3.webp", category: "Audio", shortDescription: "Un casque accessible pour les appels, la musique et un usage quotidien.", description: "Le P9 Pro offre un format confortable, une connexion Bluetooth simple et une presentation ideale pour une clientele qui cherche un casque pratique et abordable." },
  { id: "p2", name: "Ecouteurs True Wireless M30", price: 4000, img: "images/m30 2.webp", category: "Audio", shortDescription: "Des ecouteurs compacts avec boitier de recharge pour les deplacements.", description: "Un format sans fil pratique, adapte aux usages quotidiens: appels, musique, videos courtes et deplacements en ville." },
  { id: "p3", name: "Powerbank 10000 mAh", price: 10000, img: "images/power.jpeg", category: "Energie", shortDescription: "Une reserve d'energie utile pour smartphone et petits appareils.", description: "Cette powerbank 10000 mAh permet de garder vos appareils charges plus longtemps et repond a un besoin concret pour les utilisateurs mobiles." },
  { id: "p4", name: "Tondeuse Electrique Oraimo", price: 15000, img: "images/oraimo tdse.jpeg", category: "Maison & Soin", shortDescription: "Un accessoire pratique pour l'entretien personnel a domicile.", description: "Une tondeuse electrique au format moderne, facile a presenter a des clients qui recherchent un equipement utile et fiable." },
  { id: "p5", name: "AirPods Pro 2e generation", price: 10000, img: "images/pro.jpeg", category: "Audio", shortDescription: "Une solution premium pour les utilisateurs qui aiment le sans-fil.", description: "Un modele tres demande avec un design moderne et une prise en main rapide pour les appels et l'ecoute multimedia." },
  { id: "p6", name: "Casque Gamer RGB", price: 8500, img: "images/17.jpg", category: "Gaming", shortDescription: "Un casque au style affirme pour les joueurs et streamers debutants.", description: "Un casque gaming avec une presence visuelle forte, ideal pour la musique, les parties en ligne et les setups orientes jeu." },
  { id: "p7", name: "Chargeur Fast 30W / 50W", price: 5000, img: "images/fast.jpeg", category: "Energie", shortDescription: "Une charge plus rapide pour gagner du temps chaque jour.", description: "Un chargeur rapide utile pour les utilisateurs actifs qui veulent alimenter leurs appareils plus efficacement." },
  { id: "p8", name: "Casque Bluetooth JBL", price: 10000, img: "images/35.jpg", category: "Audio", shortDescription: "Un casque au design populaire pour les amateurs de son et de confort.", description: "Un produit facile a vendre grace a une silhouette reconnaissable et une promesse claire: confort, style et usage quotidien." },
  { id: "p9", name: "Manette PS4", price: 8500, img: "images/30.jpg", category: "Gaming", shortDescription: "Une manette utile pour completer un setup console.", description: "Une solution concrete pour les joueurs qui veulent remplacer ou ajouter une manette a leur equipement." },
  { id: "p10", name: "Montre connectee", price: 7000, img: "images/33.webp", category: "Objets connectes", shortDescription: "Une montre moderne pour notifications, style et usage quotidien.", description: "Un produit attractif pour les clients qui veulent associer aspect pratique et allure contemporaine." },
  { id: "p11", name: "Casque JBL Tune 520", price: 10000, img: "images/20.jpg", category: "Audio", shortDescription: "Un casque moderne pour ecouter, appeler et se deplacer avec confort.", description: "Le Tune 520 se distingue par son design propre et sa polyvalence, ce qui en fait un produit simple a recommander." },
  { id: "p12", name: "Ecouteurs M20", price: 5000, img: "images/m20 2.jpeg", category: "Audio", shortDescription: "Un format compact et tendance pour les utilisateurs mobiles.", description: "Une option accessible qui convient aux appels, a la musique et a une utilisation quotidienne sans complication." },
  { id: "p13", name: "Casque CAT", price: 5000, img: "images/cat 2.jpeg", category: "Audio", shortDescription: "Un casque original, visuel et facile a remarquer dans une boutique.", description: "Ce casque mise sur un style distinctif qui attire l'oeil et permet de varier l'offre au-dela des references classiques." },
  { id: "p14", name: "Ecouteur Bluetooth boucle", price: 6500, img: "images/22.jpg", category: "Audio", shortDescription: "Un modele pratique pour appels et usage leger au quotidien.", description: "Son format compact et sa portabilite en font une option claire pour les clients qui recherchent l'essentiel." },
  { id: "p15", name: "Manette Xbox filaire", price: 10000, img: "images/6.jpg", category: "Gaming", shortDescription: "Une prise en main directe pour le jeu sur console ou PC compatible.", description: "Une manette filaire pratique pour les joueurs qui veulent une solution stable, simple et rapide a utiliser." },
  { id: "p16", name: "Montre + AirPods", price: 6500, img: "images/9.jpg", category: "Objets connectes", shortDescription: "Un pack attractif pour les clients qui aiment les offres combinees.", description: "Une combinaison qui augmente la valeur percue et apporte une proposition facile a comprendre en boutique." },
  { id: "p17", name: "AirPods avec ecran tactile", price: 10000, img: "images/49.webp", category: "Audio", shortDescription: "Un produit moderne avec un boitier plus visuel et plus attractif.", description: "Un modele qui se differencie par son ecran tactile et qui attire les clients a la recherche de nouveaute." },
  { id: "p18", name: "Souris sans fil gaming", price: 5000, img: "images/images.jpeg", category: "Accessoires PC", shortDescription: "Une souris simple et visuelle pour la bureautique ou le gaming leger.", description: "Une reference utile pour les utilisateurs d'ordinateurs qui souhaitent un peripherique compact et sans fil." },
  { id: "p19", name: "Kit video createur", price: 5000, img: "images/14.jpg", category: "Creation", shortDescription: "Un kit pratique pour commencer la creation de contenu mobile.", description: "Un produit pertinent pour les vendeurs qui veulent adresser les besoins en tournage mobile, live et contenu social." },
  { id: "p20", name: "Trepied 1,70 m", price: 7000, img: "images/trepied.jpeg", category: "Creation", shortDescription: "Un support stable pour video, photo et prises de vue smartphone.", description: "Un accessoire utile pour la creation de contenu, les prises de vue en interieur et les presentations produits." }
];

const state = {
  activeCategory: "all",
  searchTerm: "",
  selectedProductId: null,
  cart: loadCart()
};

const validProductIds = new Set(products.map((product) => product.id));

const productsGrid = document.getElementById("productsGrid");
const categoryList = document.getElementById("categoryList");
const catSelect = document.getElementById("catSelect");
const catProdList = document.getElementById("categoryProductsList");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");
const catalogTitle = document.getElementById("catalogTitle");
const catalogSummary = document.getElementById("catalogSummary");
const cartCountEl = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartDrawer = document.getElementById("cartDrawer");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const sendWhatsBtn = document.getElementById("sendWhats");
const sendMailBtn = document.getElementById("sendMail");
const custName = document.getElementById("custName");
const custPhone = document.getElementById("custPhone");
const custAddress = document.getElementById("custAddress");
const checkoutError = document.getElementById("checkoutError");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const mobileLinks = document.querySelectorAll(".mobile-link");
const productModal = document.getElementById("productModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalAddBtn = document.getElementById("modalAddBtn");

document.getElementById("year").textContent = new Date().getFullYear();

initialize();

function initialize() {
  renderCategoryControls();
  renderCatalog();
  updateCartUI();
  attachCheckoutGuards();
}

function loadCart() {
  try {
    const raw = localStorage.getItem(config.storageKey);
    return raw ? sanitizeCart(JSON.parse(raw)) : {};
  } catch {
    return {};
  }
}

function persistCart() {
  state.cart = sanitizeCart(state.cart);
  localStorage.setItem(config.storageKey, JSON.stringify(state.cart));
}

function formatPrice(amount) {
  return amount.toLocaleString("fr-FR");
}

function sanitizeCart(input) {
  if (!input || typeof input !== "object") return {};

  const safeCart = {};

  Object.entries(input).forEach(([productId, quantity]) => {
    if (!validProductIds.has(productId)) return;
    const normalizedQuantity = Math.min(Math.max(Number.parseInt(quantity, 10) || 0, 0), config.maxCartQuantity);
    if (normalizedQuantity > 0) {
      safeCart[productId] = normalizedQuantity;
    }
  });

  return safeCart;
}

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function setCheckoutError(message) {
  checkoutError.textContent = message;
  checkoutError.classList.toggle("visible", Boolean(message));
}

function setFieldValidity(field, isValid) {
  field.classList.toggle("is-invalid", !isValid);
  field.setAttribute("aria-invalid", String(!isValid));
}

function hasCheckoutRequirements() {
  const hasItems = Object.keys(state.cart).length > 0;
  const name = normalizeText(custName.value);
  const phone = custPhone.value.replace(/[^\d+]/g, "").trim();
  const address = normalizeText(custAddress.value);
  const phoneDigits = phone.replace(/\D/g, "");

  const nameValid = /^[A-Za-zÀ-ÿ' -]{3,80}$/.test(name);
  const phoneValid = /^\+?\d{9,15}$/.test(phone) && phoneDigits.length >= 9;
  const addressValid = address.length >= 8 && address.length <= 220;

  return hasItems && nameValid && phoneValid && addressValid;
}

function updateCheckoutActions() {
  const isReady = hasCheckoutRequirements();
  sendWhatsBtn.disabled = !isReady;
  sendMailBtn.disabled = !isReady;
}

function clearCheckoutFeedback() {
  setCheckoutError("");
  [custName, custPhone, custAddress].forEach((field) => setFieldValidity(field, true));
}

function validateOrderForm() {
  clearCheckoutFeedback();

  const name = normalizeText(custName.value);
  const phone = custPhone.value.replace(/[^\d+]/g, "").trim();
  const address = normalizeText(custAddress.value);
  const phoneDigits = phone.replace(/\D/g, "");
  const nameValid = /^[A-Za-zÀ-ÿ' -]{3,80}$/.test(name);
  const phoneValid = /^\+?\d{9,15}$/.test(phone) && phoneDigits.length >= 9;
  const addressValid = address.length >= 8 && address.length <= 220;

  custName.value = name;
  custPhone.value = phone;
  custAddress.value = address;

  if (!Object.keys(state.cart).length) {
    setCheckoutError("Ajoutez au moins un produit au panier avant d'envoyer la commande.");
    return null;
  }

  if (!nameValid) {
    setFieldValidity(custName, false);
    setCheckoutError("Entrez un nom complet valide.");
    custName.focus();
    return null;
  }

  if (!phoneValid) {
    setFieldValidity(custPhone, false);
    setCheckoutError("Entrez un numero de telephone valide.");
    custPhone.focus();
    return null;
  }

  if (!addressValid) {
    setFieldValidity(custAddress, false);
    setCheckoutError("Entrez une adresse ou une remarque suffisamment claire.");
    custAddress.focus();
    return null;
  }

  return { name, phone, address };
}

function attachCheckoutGuards() {
  [custName, custPhone, custAddress].forEach((field) => {
    field.addEventListener("input", () => {
      if (field.classList.contains("is-invalid") || checkoutError.classList.contains("visible")) {
        setFieldValidity(field, true);
        setCheckoutError("");
      }
      updateCheckoutActions();
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getCategories() {
  return [...new Set(products.map((product) => product.category))].sort((a, b) => a.localeCompare(b, "fr"));
}

function getFilteredProducts() {
  const term = state.searchTerm.trim().toLowerCase();
  return products.filter((product) => {
    const categoryMatches = state.activeCategory === "all" || product.category === state.activeCategory;
    const text = `${product.name} ${product.category} ${product.shortDescription}`.toLowerCase();
    return categoryMatches && (!term || text.includes(term));
  });
}

function renderCategoryControls() {
  const categories = getCategories();
  categoryList.innerHTML = "";
  catSelect.innerHTML = '<option value="all">Toutes les categories</option>';

  categoryList.appendChild(createCategoryChip("all", "Toutes"));

  categories.forEach((category) => {
    categoryList.appendChild(createCategoryChip(category, category));
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    catSelect.appendChild(option);
  });

  catSelect.value = state.activeCategory;
}

function createCategoryChip(value, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `category-chip${state.activeCategory === value ? " active" : ""}`;
  button.dataset.category = value;
  button.textContent = label;
  button.addEventListener("click", () => {
    state.activeCategory = value;
    catSelect.value = value;
    renderCategoryControls();
    renderCatalog();
  });
  return button;
}

function renderCatalog() {
  const list = getFilteredProducts();
  renderCatalogMeta(list);
  renderProductList(list);
  renderQuickProducts(list);
}

function renderCatalogMeta(list) {
  resultsCount.textContent = list.length;

  if (state.activeCategory === "all") {
    catalogTitle.textContent = "Tous les produits";
    catalogSummary.textContent = state.searchTerm ? `Resultats pour "${state.searchTerm}".` : "Explorez l'ensemble de notre selection.";
    return;
  }

  catalogTitle.textContent = state.activeCategory;
  catalogSummary.textContent = `${list.length} produit${list.length > 1 ? "s" : ""} dans cette categorie.`;
}

function renderProductList(list) {
  productsGrid.innerHTML = "";

  if (!list.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = "<strong>Aucun produit ne correspond a votre recherche.</strong><p>Essayez une autre categorie ou un mot-cle plus large.</p>";
    productsGrid.appendChild(empty);
    return;
  }

  list.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-media">
        <img src="${product.img}" alt="${product.name}">
        <span class="product-badge">${product.category}</span>
      </div>
      <div class="product-body">
        <p class="product-category">${product.category}</p>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.shortDescription}</p>
        <div class="product-footer">
          <div class="product-price">
            <span>Prix</span>
            <strong>${formatPrice(product.price)} ${config.currency}</strong>
          </div>
          <div class="product-actions">
            <button class="ghost-button" type="button" data-view="${product.id}">Details</button>
            <button class="primary-button" type="button" data-add="${product.id}">Ajouter</button>
          </div>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

function renderQuickProducts(list) {
  catProdList.innerHTML = "";
  const topList = list.slice(0, 6);

  if (!topList.length) {
    const item = document.createElement("li");
    item.innerHTML = '<button type="button" disabled><strong>Aucun resultat</strong><span>Modifiez vos filtres pour voir des produits.</span></button>';
    catProdList.appendChild(item);
    return;
  }

  topList.forEach((product) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<strong>${product.name}</strong><span>${formatPrice(product.price)} ${config.currency}</span>`;
    button.addEventListener("click", () => {
      document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
      openProductModal(product.id);
    });
    item.appendChild(button);
    catProdList.appendChild(item);
  });
}

function addToCart(productId, quantity = 1) {
  if (!validProductIds.has(productId)) return;
  state.cart[productId] = Math.min((state.cart[productId] || 0) + quantity, config.maxCartQuantity);
  persistCart();
  updateCartUI();
}

function updateCartUI() {
  const totalQuantity = Object.values(state.cart).reduce((sum, quantity) => sum + quantity, 0);
  const items = Object.entries(state.cart)
    .map(([productId, quantity]) => {
      const product = products.find((entry) => entry.id === productId);
      return product ? { product, quantity, subtotal: product.price * quantity } : null;
    })
    .filter(Boolean);

  cartCountEl.textContent = totalQuantity;
  cartItemsEl.innerHTML = "";

  if (!items.length) {
    cartItemsEl.innerHTML = '<div class="empty-cart"><strong>Votre panier est vide.</strong><p>Ajoutez des produits pour preparer votre commande.</p></div>';
  } else {
    items.forEach(({ product, quantity, subtotal }) => {
      const row = document.createElement("article");
      row.className = "cart-item";
      row.innerHTML = `
        <img src="${escapeHtml(product.img)}" alt="${escapeHtml(product.name)}">
        <div class="cart-meta">
          <div class="cart-row-head">
            <strong>${escapeHtml(product.name)}</strong>
            <span class="cart-total-value">${formatPrice(subtotal)} ${config.currency}</span>
          </div>
          <p>${escapeHtml(product.category)}</p>
          <div class="cart-row-footer">
            <div class="qty-control">
              <button type="button" data-dec="${escapeHtml(product.id)}" aria-label="Retirer une unite">-</button>
              <span>${quantity}</span>
              <button type="button" data-inc="${escapeHtml(product.id)}" aria-label="Ajouter une unite">+</button>
            </div>
            <button class="remove-item" type="button" data-del="${escapeHtml(product.id)}">Supprimer</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });
  }

  cartTotalEl.textContent = formatPrice(items.reduce((sum, item) => sum + item.subtotal, 0));
  updateCheckoutActions();
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  openCartBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  openCartBtn.setAttribute("aria-expanded", "false");
  if (!productModal.classList.contains("open")) {
    document.body.style.overflow = "";
  }
}

function openProductModal(productId) {
  const product = products.find((entry) => entry.id === productId);
  if (!product) return;

  state.selectedProductId = productId;
  modalImage.src = product.img;
  modalImage.alt = product.name;
  modalCategory.textContent = product.category;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalPrice.textContent = `${formatPrice(product.price)} ${config.currency}`;
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  state.selectedProductId = null;
  if (!cartDrawer.classList.contains("open")) {
    document.body.style.overflow = "";
  }
}

function buildOrder() {
  const validatedFields = validateOrderForm();
  if (!validatedFields) return null;

  const items = Object.entries(state.cart)
    .map(([productId, quantity]) => {
      const product = products.find((entry) => entry.id === productId);
      return product ? { name: normalizeText(product.name), quantity, subtotal: product.price * quantity } : null;
    })
    .filter(Boolean);

  return {
    name: validatedFields.name,
    phone: validatedFields.phone,
    address: validatedFields.address,
    items,
    total: items.reduce((sum, item) => sum + item.subtotal, 0)
  };
}

function buildTextMessage(order) {
  const lines = [
    "Nouvelle commande - La Maison du Bonheur",
    "",
    "Client",
    `- Nom: ${order.name || "Non renseigne"}`,
    `- Telephone: ${order.phone || "Non renseigne"}`,
    `- Adresse: ${order.address || "Non renseigne"}`,
    "",
    "Panier"
  ];

  order.items.forEach((item) => {
    lines.push(`- ${item.name} x${item.quantity} - ${formatPrice(item.subtotal)} ${config.currency}`);
  });

  lines.push("");
  lines.push(`Total: ${formatPrice(order.total)} ${config.currency}`);
  lines.push("");
  lines.push("Merci.");
  return lines.join("\n");
}

function sendOrderToWhatsApp() {
  const order = buildOrder();
  if (!order) {
    return;
  }

  window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(buildTextMessage(order))}`, "_blank", "noopener");
}

function sendOrderByEmail() {
  const order = buildOrder();
  if (!order) {
    return;
  }

  const subject = encodeURIComponent("Nouvelle commande - La Maison du Bonheur");
  const body = encodeURIComponent(buildTextMessage(order));
  window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;
}

searchInput.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  renderCatalog();
});

catSelect.addEventListener("change", (event) => {
  state.activeCategory = event.target.value;
  renderCategoryControls();
  renderCatalog();
});

productsGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const viewButton = event.target.closest("[data-view]");

  if (addButton) {
    addToCart(addButton.dataset.add);
    return;
  }

  if (viewButton) {
    openProductModal(viewButton.dataset.view);
  }
});

cartItemsEl.addEventListener("click", (event) => {
  const incButton = event.target.closest("[data-inc]");
  const decButton = event.target.closest("[data-dec]");
  const delButton = event.target.closest("[data-del]");

  if (incButton) {
    addToCart(incButton.dataset.inc);
    return;
  }

  if (decButton) {
    const id = decButton.dataset.dec;
    if (!validProductIds.has(id)) return;
    state.cart[id] = Math.max((state.cart[id] || 1) - 1, 0);
    if (state.cart[id] === 0) delete state.cart[id];
    persistCart();
    updateCartUI();
    return;
  }

  if (delButton) {
    if (!validProductIds.has(delButton.dataset.del)) return;
    delete state.cart[delButton.dataset.del];
    persistCart();
    updateCartUI();
  }
});

openCartBtn.addEventListener("click", () => {
  if (cartDrawer.classList.contains("open")) {
    closeCart();
  } else {
    openCart();
  }
});

closeCartBtn.addEventListener("click", closeCart);
sendWhatsBtn.addEventListener("click", sendOrderToWhatsApp);
sendMailBtn.addEventListener("click", sendOrderByEmail);

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

modalAddBtn.addEventListener("click", () => {
  if (!state.selectedProductId) return;
  addToCart(state.selectedProductId);
  closeProductModal();
});

closeModalBtn.addEventListener("click", closeProductModal);

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-drawer]")) closeCart();
  if (event.target.closest("[data-close-modal]")) closeProductModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProductModal();
    closeCart();
  }
});
