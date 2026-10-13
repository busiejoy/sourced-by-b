"use strict";

const WHATSAPP_NUMBER = "2349021618472";

const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    category: "Sneakers",
    description: "Versatile sneakers for everyday outfits.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
    badge: "EVERYDAY STYLE"
  },
  {
    id: 2,
    name: "Retro Casual Sneakers",
    category: "Sneakers",
    description: "A sporty style for casual outings.",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=85",
    badge: "CASUAL STYLE"
  },
  {
    id: 3,
    name: "Minimalist Slides",
    category: "Footwear",
    description: "Simple slides for relaxed everyday wear.",
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=85",
    badge: "EASY WEAR"
  },
  {
    id: 4,
    name: "Elegant Heels",
    category: "Footwear",
    description: "Dressy footwear for special occasions.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=85",
    badge: "ELEVATED STYLE"
  },
  {
    id: 5,
    name: "Classic Shoulder Bag",
    category: "Bags",
    description: "A timeless accessory for everyday outfits.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85",
    badge: "TIMELESS"
  },
  {
    id: 6,
    name: "Chic Mini Bag",
    category: "Bags",
    description: "A compact bag for a polished look.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=85",
    badge: "STYLE PICK"
  },
  {
    id: 7,
    name: "Everyday Tote Bag",
    category: "Bags",
    description: "A versatile bag for daily essentials.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85",
    badge: "DAILY ESSENTIAL"
  },
  {
    id: 8,
    name: "Structured Handbag",
    category: "Bags",
    description: "A structured design for a refined appearance.",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=85",
    badge: "POLISHED STYLE"
  },
  {
    id: 9,
    name: "Elegant Casual Dress",
    category: "Clothing",
    description: "An easy-to-style piece for your wardrobe.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85",
    badge: "WARDROBE PICK"
  },
  {
    id: 10,
    name: "Classic Everyday Outfit",
    category: "Clothing",
    description: "A versatile look for casual occasions.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85",
    badge: "CASUAL CHIC"
  },
  {
    id: 11,
    name: "Elegant Evening Dress",
    category: "Clothing",
    description: "An occasion-ready style to explore.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85",
    badge: "OCCASION WEAR"
  },
  {
    id: 12,
    name: "Modern Wardrobe Essentials",
    category: "Clothing",
    description: "Explore versatile pieces for your personal style.",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=85",
    badge: "STYLE ESSENTIAL"
  },
  {
    id: 13,
    name: "Minimalist Wristwatch",
    category: "Accessories",
    description: "A classic accessory for everyday wear.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85",
    badge: "TIMELESS DETAIL"
  },
  {
    id: 14,
    name: "Vintage-Inspired Sunglasses",
    category: "Accessories",
    description: "A statement accessory for sunny days.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=85",
    badge: "FINISHING TOUCH"
  },
  {
    id: 15,
    name: "Everyday Jewellery",
    category: "Accessories",
    description: "Explore simple accessories for your collection.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85",
    badge: "SUBTLE DETAILS"
  },
  {
    id: 16,
    name: "Fashion Accessories",
    category: "Accessories",
    description: "Discover accessories to complement your outfits.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=85",
    badge: "STYLE PICK"
  }
];

function openWhatsApp(message) {
  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "product-card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-image-wrap";

  const image = document.createElement("img");
  image.className = "product-image";
  image.src = product.image;
  image.alt = product.name;
  image.loading = "lazy";

  image.onerror = function () {
    this.style.display = "none";
    imageWrap.classList.add("image-unavailable");
  };

  const badge = document.createElement("span");
  badge.className = "product-badge";
  badge.textContent = product.badge;

  imageWrap.append(image, badge);

  const details = document.createElement("div");
  details.className = "product-details";

  const category = document.createElement("span");
  category.className = "product-category";
  category.textContent = product.category;

  const name = document.createElement("h3");
  name.className = "product-name";
  name.textContent = product.name;

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "product-enquire";
  button.append(document.createTextNode("Enquire about this product "));

  const arrow = document.createElement("span");
  arrow.textContent = "↗";
  button.appendChild(arrow);

  button.addEventListener("click", function () {
    enquireAboutProduct(product);
  });

  details.append(category, name, description, button);
  article.append(imageWrap, details);

  return article;
}

function enquireAboutProduct(product) {
  const message = [
    "Hello Sourced by B! 🤎",
    "",
    "I'm interested in a product in your catalogue.",
    "",
    `Product: ${product.name}`,
    `Category: ${product.category}`,
    "",
    "Please confirm availability and send me a quotation.",
    "",
    "Thank you!"
  ].join("\n");

  openWhatsApp(message);
}

function renderProducts(productList) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.replaceChildren();

  if (productList.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";

    const heading = document.createElement("h3");
    heading.textContent = "Nothing found just yet.";

    const paragraph = document.createElement("p");
    paragraph.textContent =
      "Try another search or request a product from us.";

    const link = document.createElement("a");
    link.className = "button button-dark";
    link.href = "#request-product";
    link.textContent = "Request a Product ↗";

    empty.append(heading, paragraph, link);
    grid.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  productList.forEach(function (product) {
    fragment.appendChild(createProductCard(product));
  });

  grid.appendChild(fragment);
}

function initialiseCatalogue() {
  const search = document.getElementById("productSearch");
  const filterButtons = document.querySelectorAll(".filter-button");

  let activeCategory = "All";

  function updateCatalogue() {
    const term = search ? search.value.trim().toLowerCase() : "";

    const filtered = products.filter(function (product) {
      const categoryMatches =
        activeCategory === "All" ||
        product.category === activeCategory ||
        (activeCategory === "Sneakers" &&
          product.category === "Footwear");

      const searchable = [
        product.name,
        product.category,
        product.description,
        product.badge
      ].join(" ").toLowerCase();

      return categoryMatches && searchable.includes(term);
    });

    renderProducts(filtered);
  }

  if (search) {
    search.addEventListener("input", updateCatalogue);
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      activeCategory = button.dataset.filter || "All";

      filterButtons.forEach(function (item) {
        const active = item === button;

        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      updateCatalogue();
    });
  });

  document.querySelectorAll(".category-card").forEach(function (card) {
    card.addEventListener("click", function () {
      const category = card.dataset.category;

      const matchingButton = Array.from(filterButtons).find(
        function (button) {
          return button.dataset.filter === category;
        }
      );

      if (matchingButton) matchingButton.click();

      const shop = document.getElementById("shop");

      if (shop) {
        shop.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  updateCatalogue();
}

function initialiseRequestForm() {
  const form = document.getElementById("customRequestForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const name = document.getElementById("customerName").value.trim();
    const category =
      document.getElementById("customerCategory").value;
    const description =
      document.getElementById("productDescription").value.trim();
    const budget =
      document.getElementById("productBudget").value.trim();
    const link =
      document.getElementById("productLink").value.trim();

    const message = [
      "Hello Sourced by B! 🤎",
      "",
      "I'd like to request a product.",
      "",
      `My name: ${name}`,
      `Product category: ${category}`,
      "",
      "What I'm looking for:",
      description,
      "",
      `My budget: ${budget || "Not specified"}`,
      `Product link or picture details: ${link || "Not provided"}`,
      "",
      "Please check availability and send me a quotation.",
      "",
      "I understand that the 50% deposit is payable",
      "after I agree to the quotation.",
      "",
      "Thank you!"
    ].join("\n");

    openWhatsApp(message);
  });
}

function initialiseMobileNavigation() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    toggle.textContent = "☰";
  }

  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    toggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) closeMenu();
  });
}

function initialiseCopyrightYear() {
  const year = document.getElementById("currentYear");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initialiseCatalogue();
  initialiseRequestForm();
  initialiseMobileNavigation();
  initialiseCopyrightYear();

  console.log("Sourced by B is ready. 🤎");
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(
    'a, button'
  );

  buttons.forEach(function (button) {
    if (
      button.textContent.trim().toLowerCase().includes(
        "enquire about this product"
      )
    ) {
      button.style.backgroundColor = "#6b4533";
      button.style.color = "#ffffff";
      button.style.border = "1px solid #6b4533"; button.style.borderRadius = "6px";
    }
  });
});