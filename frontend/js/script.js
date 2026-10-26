/**
 * Nova Store — Core Application JavaScript
 * Modular Cart, Catalog & Interactive Handlers
 */

// Global Product Catalog
const PRODUCTS_DATA = {
  "prod-watch": {
    "id": "prod-watch",
    "name": "Minimal Chronograph Watch",
    "category": "Accessories",
    "price": 8499,
    "originalPrice": 10999,
    "offer": "23% OFF",
    "tagline": "Festival Deal: Save \u20b92,500",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"
  },
  "prod-shoe": {
    "id": "prod-shoe",
    "name": "Urban Runner",
    "category": "Footwear",
    "price": 6999,
    "originalPrice": 8999,
    "offer": "22% OFF",
    "tagline": "Limited Deal: Save \u20b92,000",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
  },
  "prod-bag": {
    "id": "prod-bag",
    "name": "Everyday Backpack",
    "category": "Bags",
    "price": 4299,
    "originalPrice": 5999,
    "offer": "28% OFF",
    "tagline": "Special Offer: Save \u20b91,700",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"
  },
  "prod-sunglass": {
    "id": "prod-sunglass",
    "name": "Aero Sunglasses",
    "category": "Accessories",
    "price": 2499,
    "originalPrice": 3499,
    "offer": "29% OFF",
    "tagline": "Clearance Offer: Save \u20b91,000",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80"
  },
  "prod-headphone": {
    "id": "prod-headphone",
    "name": "Wireless Studio Headphones",
    "category": "Audio",
    "price": 5499,
    "originalPrice": 7999,
    "offer": "31% OFF",
    "tagline": "Audio Special: Save \u20b92,500",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80"
  },
  "prod-smartwatch": {
    "id": "prod-smartwatch",
    "name": "Smart Fitness Watch",
    "category": "Electronics",
    "price": 3299,
    "originalPrice": 4999,
    "offer": "34% OFF",
    "tagline": "Smart Deal: Save \u20b91,700",
    "image": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=700&q=80"
  },
  "prod-tee": {
    "id": "prod-tee",
    "name": "Classic Cotton Tee",
    "category": "Apparel",
    "price": 1299,
    "originalPrice": 1899,
    "offer": "32% OFF",
    "tagline": "Essential Deal: Save \u20b9600",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80"
  },
  "prod-wallet": {
    "id": "prod-wallet",
    "name": "Slim Leather Wallet",
    "category": "Accessories",
    "price": 1899,
    "originalPrice": 2699,
    "offer": "30% OFF",
    "tagline": "Handcrafted Deal: Save \u20b9800",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80"
  },
  "prod-speaker": {
    "id": "prod-speaker",
    "name": "Compact Bluetooth Speaker",
    "category": "Audio",
    "price": 3799,
    "originalPrice": 5299,
    "offer": "28% OFF",
    "tagline": "Weekend Deal: Save \u20b91,500",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80"
  },
  "prod-sneaker": {
    "id": "prod-sneaker",
    "name": "Classic Canvas Sneakers",
    "category": "Footwear",
    "price": 3499,
    "originalPrice": 4999,
    "offer": "30% OFF",
    "tagline": "Streetwear Deal: Save \u20b91,500",
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80"
  },
  "prod-tumbler": {
    "id": "prod-tumbler",
    "name": "Insulated Steel Tumbler",
    "category": "Lifestyle",
    "price": 1499,
    "originalPrice": 2199,
    "offer": "32% OFF",
    "tagline": "Eco Choice Deal: Save \u20b9700",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80"
  },
  "prod-keyboard": {
    "id": "prod-keyboard",
    "name": "Mechanical Desk Keyboard",
    "category": "Electronics",
    "price": 5999,
    "originalPrice": 8499,
    "offer": "29% OFF",
    "tagline": "Desk Setup Deal: Save \u20b92,500",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80"
  },
  "men-oxford": {
    "id": "men-oxford",
    "name": "Tailored Classic Oxford Shirt",
    "category": "Men's Shirts \u2022 Raymond",
    "quality": "100% Giza Egyptian Cotton",
    "price": 2799,
    "originalPrice": 3999,
    "offer": "30% OFF",
    "tagline": "Heritage Offer: Save \u20b91,200",
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80"
  },
  "men-linen": {
    "id": "men-linen",
    "name": "Breathable Casual Linen Shirt",
    "category": "Men's Shirts \u2022 Allen Solly",
    "quality": "Pure French Flax Linen",
    "price": 2499,
    "originalPrice": 3499,
    "offer": "29% OFF",
    "tagline": "Pure Flax Deal: Save \u20b91,000",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80"
  },
  "men-polo": {
    "id": "men-polo",
    "name": "Signature Pima Cotton Polo",
    "category": "Men's Shirts \u2022 Ralph Lauren",
    "quality": "Long-Staple Pima Cotton",
    "price": 3499,
    "originalPrice": 4999,
    "offer": "30% OFF",
    "tagline": "Signature Deal: Save \u20b91,500",
    "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=700&q=80"
  },
  "men-denim": {
    "id": "men-denim",
    "name": "511 Slim Fit Stretch Denim",
    "category": "Men's Pants \u2022 Levi's",
    "quality": "All-Day Flexible Selvedge",
    "price": 3999,
    "originalPrice": 5499,
    "offer": "27% OFF",
    "tagline": "Selvedge Deal: Save \u20b91,500",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80"
  },
  "men-chinos": {
    "id": "men-chinos",
    "name": "Smart 360 Flex Chinos",
    "category": "Men's Pants \u2022 Dockers",
    "quality": "Wrinkle-Free 4-Way Stretch",
    "price": 3299,
    "originalPrice": 4499,
    "offer": "27% OFF",
    "tagline": "360 Flex Offer: Save \u20b91,200",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80"
  },
  "men-derby": {
    "id": "men-derby",
    "name": "Craftmaster Leather Derby",
    "category": "Men's Shoes \u2022 Clarks",
    "quality": "Handcrafted Full-Grain Leather",
    "price": 7499,
    "originalPrice": 10499,
    "offer": "29% OFF",
    "tagline": "Handcrafted Offer: Save \u20b93,000",
    "image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80"
  },
  "men-runners": {
    "id": "men-runners",
    "name": "Air Max Urban Runners",
    "category": "Men's Shoes \u2022 Nike",
    "quality": "Engineered Mesh & Air Unit",
    "price": 6999,
    "originalPrice": 9499,
    "offer": "26% OFF",
    "tagline": "Air Max Special: Save \u20b92,500",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
  },
  "men-boots": {
    "id": "men-boots",
    "name": "Chelsea Heritage Boots",
    "category": "Men's Shoes \u2022 Timberland",
    "quality": "Waterproof Nubuck Leather",
    "price": 8999,
    "originalPrice": 12999,
    "offer": "31% OFF",
    "tagline": "Waterproof Deal: Save \u20b94,000",
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80"
  },
  "one8-maroon": {
    "id": "one8-maroon",
    "name": "one8 Virat Kohli Maroon Classic Sneaker",
    "category": "Men's Shoes \u2022 one8 by Virat Kohli",
    "quality": "Handcrafted Burgundy Napa & Gum Sole",
    "price": 4499,
    "originalPrice": 6999,
    "offer": "36% OFF",
    "tagline": "Virat Signature: Save \u20b92,500",
    "image": "images/one8-maroon-sneakers.jpg"
  },
  "one8-white": {
    "id": "one8-white",
    "name": "one8 Virat Kohli Court White & Teal Sneaker",
    "category": "Men's Shoes \u2022 one8 by Virat Kohli",
    "quality": "Crisp White Calfskin & Emerald Accent",
    "price": 3999,
    "originalPrice": 5999,
    "offer": "33% OFF",
    "tagline": "Court Edition: Save \u20b92,000",
    "image": "images/one8-white-court.jpg"
  },
  "one8-black": {
    "id": "one8-black",
    "name": "one8 Virat Kohli Core Black Urban Sneaker",
    "category": "Men's Shoes \u2022 one8 by Virat Kohli",
    "quality": "Matte Black Leather & Crimson Accent",
    "price": 4299,
    "originalPrice": 6499,
    "offer": "34% OFF",
    "tagline": "Stealth Edition: Save \u20b92,200",
    "image": "images/one8-black-urban.jpg"
  },
  "one8-runner": {
    "id": "one8-runner",
    "name": "Puma x one8 Virat Kohli V-Speed Slip-On",
    "category": "Men's Shoes \u2022 Puma x one8",
    "quality": "Breathable Knit Mesh & SoftFoam+ Cushioning",
    "price": 3499,
    "originalPrice": 4999,
    "offer": "30% OFF",
    "tagline": "Athletic Deal: Save \u20b91,500",
    "image": "images/one8-blue-runner.jpg"
  },
  "women-shirt": {
    "id": "women-shirt",
    "name": "Tailored Poplin Shirt",
    "category": "Women's Shirts \u2022 Zara Studio",
    "quality": "100% Crisp Organic Cotton",
    "price": 2999,
    "originalPrice": 4199,
    "offer": "29% OFF",
    "tagline": "Studio Offer: Save \u20b91,200",
    "image": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=700&q=80"
  },
  "women-blouse": {
    "id": "women-blouse",
    "name": "Silk Satin Drape Blouse",
    "category": "Women's Shirts \u2022 Mango",
    "quality": "100% Pure Mulberry Silk",
    "price": 3499,
    "originalPrice": 4999,
    "offer": "30% OFF",
    "tagline": "Mulberry Silk Deal: Save \u20b91,500",
    "image": "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=700&q=80"
  },
  "women-linen": {
    "id": "women-linen",
    "name": "Relaxed French Linen Shirt",
    "category": "Women's Shirts \u2022 Everlane",
    "quality": "Breathable French Flax Linen",
    "price": 2699,
    "originalPrice": 3799,
    "offer": "29% OFF",
    "tagline": "French Flax Deal: Save \u20b91,100",
    "image": "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80"
  },
  "women-trousers": {
    "id": "women-trousers",
    "name": "High-Rise Tailored Trousers",
    "category": "Women's Pants \u2022 Massimo Dutti",
    "quality": "Fine Wool Blend & Pleated Fit",
    "price": 4499,
    "originalPrice": 6299,
    "offer": "29% OFF",
    "tagline": "Tailored Wool Deal: Save \u20b91,800",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80"
  },
  "women-skinny": {
    "id": "women-skinny",
    "name": "721 High-Rise Skinny Denim",
    "category": "Women's Pants \u2022 Levi's",
    "quality": "Sculpting Stellar Stretch Denim",
    "price": 3799,
    "originalPrice": 5199,
    "offer": "27% OFF",
    "tagline": "Stellar Stretch Deal: Save \u20b91,400",
    "image": "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=700&q=80"
  },
  "women-pumps": {
    "id": "women-pumps",
    "name": "Grace Pointed Leather Pumps",
    "category": "Women's Shoes \u2022 Clarks",
    "quality": "Handcrafted Nappa Leather",
    "price": 6499,
    "originalPrice": 8999,
    "offer": "28% OFF",
    "tagline": "Cushion Plus Offer: Save \u20b92,500",
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80"
  },
  "women-heels": {
    "id": "women-heels",
    "name": "Classic Stiletto Pumps",
    "category": "Women's Shoes \u2022 Jimmy Choo",
    "quality": "Italian Suede & Ergonomic Arch",
    "price": 9999,
    "originalPrice": 13999,
    "offer": "29% OFF",
    "tagline": "Luxury Suede Deal: Save \u20b94,000",
    "image": "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=700&q=80"
  },
  "women-sneakers": {
    "id": "women-sneakers",
    "name": "Air Max Bella Luxe Sneakers",
    "category": "Women's Shoes \u2022 Nike",
    "quality": "Breathable Mesh & Max Air",
    "price": 6299,
    "originalPrice": 8499,
    "offer": "26% OFF",
    "tagline": "Max Air Offer: Save \u20b92,200",
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80"
  },
  "elec-sony-headphones": {
    "id": "elec-sony-headphones",
    "name": "Sony WH-1000XM5 ANC Headphones",
    "category": "Audio \u2022 Sony",
    "quality": "Industry-Leading ANC & 30h Battery",
    "price": 26990,
    "originalPrice": 34990,
    "offer": "23% OFF",
    "tagline": "Flagship Tech Deal: Save \u20b98,000",
    "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=80"
  },
  "elec-macbook-air": {
    "id": "elec-macbook-air",
    "name": "Apple MacBook Air 13\" M3",
    "category": "Computing \u2022 Apple",
    "quality": "Apple M3 Chip & Liquid Retina",
    "price": 97990,
    "originalPrice": 114900,
    "offer": "15% OFF",
    "tagline": "Pro Computing Deal: Save \u20b916,910",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80"
  },
  "elec-samsung-watch": {
    "id": "elec-samsung-watch",
    "name": "Samsung Galaxy Watch Ultra Titanium",
    "category": "Wearables \u2022 Samsung",
    "quality": "Titanium Grade 4 & Dual-Freq GPS",
    "price": 47999,
    "originalPrice": 59999,
    "offer": "20% OFF",
    "tagline": "Rugged Wearable Deal: Save \u20b912,000",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80"
  },
  "elec-bose-speaker": {
    "id": "elec-bose-speaker",
    "name": "Bose SoundLink Max Bluetooth Speaker",
    "category": "Audio \u2022 Bose",
    "quality": "Deep Stereo Bass & IP67 Rugged",
    "price": 31900,
    "originalPrice": 39900,
    "offer": "20% OFF",
    "tagline": "Audiophile Special: Save \u20b98,000",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80"
  },
  "elec-dell-monitor": {
    "id": "elec-dell-monitor",
    "name": "Dell UltraSharp 27\" 4K USB-C Hub Monitor",
    "category": "Displays \u2022 Dell",
    "quality": "IPS Black 4K & 90W Power Delivery",
    "price": 41999,
    "originalPrice": 52000,
    "offer": "19% OFF",
    "tagline": "Creator Display Offer: Save \u20b910,001",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80"
  },
  "elec-logitech-mouse": {
    "id": "elec-logitech-mouse",
    "name": "Logitech MX Master 3S Wireless Mouse",
    "category": "Peripherals \u2022 Logitech",
    "quality": "8K DPI Sensor & MagSpeed Wheel",
    "price": 7995,
    "originalPrice": 10995,
    "offer": "27% OFF",
    "tagline": "Desk Productivity Deal: Save \u20b93,000",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=700&q=80"
  },
  "elec-keychron-keyboard": {
    "id": "elec-keychron-keyboard",
    "name": "Keychron Q1 Pro Wireless Custom Keyboard",
    "category": "Peripherals \u2022 Keychron",
    "quality": "CNC Aluminum Body & QMK/VIA Hot-Swap",
    "price": 14499,
    "originalPrice": 18999,
    "offer": "24% OFF",
    "tagline": "Enthusiast Deal: Save \u20b94,500",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80"
  },
  "elec-sony-camera": {
    "id": "elec-sony-camera",
    "name": "Sony Alpha 7 IV Full-Frame Camera",
    "category": "Photography \u2022 Sony",
    "quality": "33MP BSI Exmor R & 4K 60p 10-Bit",
    "price": 198900,
    "originalPrice": 242490,
    "offer": "18% OFF",
    "tagline": "Cinema Deal: Save \u20b943,590",
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80"
  },
  "elec-anker-powerbank": {
    "id": "elec-anker-powerbank",
    "name": "Anker Prime 20,000mAh 200W Power Bank",
    "category": "Charging \u2022 Anker",
    "quality": "Smart Digital Display & 200W GaN",
    "price": 9749,
    "originalPrice": 12999,
    "offer": "25% OFF",
    "tagline": "Ultra-Fast Charge Deal: Save \u20b93,250",
    "image": "https://images.unsplash.com/photo-1609592426507-28d844c8f5f0?auto=format&fit=crop&w=700&q=80"
  },
  "elec-ipad-air": {
    "id": "elec-ipad-air",
    "name": "Apple iPad Air 11-inch M2",
    "category": "Tablets \u2022 Apple",
    "quality": "Apple M2 Silicon & Liquid Retina",
    "price": 52490,
    "originalPrice": 59900,
    "offer": "12% OFF",
    "tagline": "Apple Special Deal: Save \u20b97,410",
    "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80"
  },
  "elec-marshall-speaker": {
    "id": "elec-marshall-speaker",
    "name": "Marshall Stanmore III Bluetooth Speaker",
    "category": "Home Audio \u2022 Marshall",
    "quality": "Room-Filling Soundstage & Brass Trim",
    "price": 28999,
    "originalPrice": 36999,
    "offer": "22% OFF",
    "tagline": "Iconic Vintage Deal: Save \u20b98,000",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80"
  },
  "elec-dji-drone": {
    "id": "elec-dji-drone",
    "name": "DJI Mini 4 Pro 4K Drone",
    "category": "Drones \u2022 DJI",
    "quality": "Omnidirectional Sensing & 4K HDR",
    "price": 74990,
    "originalPrice": 89990,
    "offer": "17% OFF",
    "tagline": "Aerial Creator Deal: Save \u20b915,000",
    "image": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=700&q=80"
  }
};

// Cart State Management
let cart = [];
let activeCoupon = null;
let toastTimer = null;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  updateCartUI();
});

/**
 * Load cart from LocalStorage
 */
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('nova_cart_items');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
}

/**
 * Save cart to LocalStorage
 */
function saveCartToStorage() {
  try {
    localStorage.setItem('nova_cart_items', JSON.stringify(cart));
  } catch (e) {}
}

/**
 * Format currency in Indian standard numbering
 */
function formatCurrency(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

/**
 * Add Product to Cart by ID or Object
 */
function addToCart(itemOrId) {
  let product = null;

  if (typeof itemOrId === 'string') {
    product = PRODUCTS_DATA[itemOrId];
  } else if (itemOrId && typeof itemOrId === 'object') {
    product = itemOrId;
  }

  if (!product || !product.id) return;

  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: Number(product.price),
      originalPrice: Number(product.originalPrice || product.price),
      offer: product.offer || '',
      image: product.image,
      qty: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added "${product.name}" to your cart!`);

  // Instantly open the cart drawer so customer sees their added item!
  openCart();
}

/**
 * Convenience helper for inline onclicks
 */
function addToCartById(id) {
  addToCart(id);
}

/**
 * Quantity increment / decrement
 */
function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  saveCartToStorage();
  updateCartUI();
}

/**
 * Remove single item from cart
 */
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCartToStorage();
  updateCartUI();
}

/**
 * Clear all cart contents
 */
function clearCart() {
  if (cart.length === 0) return;
  if (confirm('Are you sure you want to clear all items from your cart?')) {
    cart = [];
    activeCoupon = null;
    saveCartToStorage();
    updateCartUI();
  }
}

/**
 * Open Slide-in Cart Drawer
 */
function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Close Slide-in Cart Drawer
 */
function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/**
 * Apply promo / coupon discount code
 */
function applyCoupon() {
  const input = document.getElementById('cartCouponInput');
  const msg = document.getElementById('couponMessage');
  if (!input || !msg) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'NOVA10' || code === 'TECH10' || code === 'FEST10') {
    activeCoupon = { code: code, discountPercent: 10 };
    msg.className = 'coupon-message success';
    msg.textContent = `Coupon "${code}" applied! Extra 10% discount added.`;
  } else if (code === '') {
    activeCoupon = null;
    msg.className = 'coupon-message';
    msg.textContent = '';
  } else {
    activeCoupon = null;
    msg.className = 'coupon-message error';
    msg.textContent = 'Invalid promo code. Try NOVA10 or TECH10.';
  }
  updateCartUI();
}

/**
 * Update Cart Drawer and Counter UI
 */
function updateCartUI() {
  const totalCount = cart.reduce((sum, i) => sum + i.qty, 0);

  // Update Header and Drawer counters
  const headerCount = document.getElementById('cartCount');
  if (headerCount) headerCount.textContent = totalCount;

  const drawerCount = document.getElementById('drawerCartCount');
  if (drawerCount) drawerCount.textContent = `${totalCount} item${totalCount !== 1 ? 's' : ''}`;

  const cartList = document.getElementById('cartItemsList');
  const emptyState = document.getElementById('cartEmptyState');
  const cartFooter = document.getElementById('cartFooter');
  const shippingBar = document.getElementById('cartShippingBar');

  if (cart.length === 0) {
    if (cartList) cartList.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (cartFooter) cartFooter.style.display = 'none';
    if (shippingBar) shippingBar.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'flex';
  if (shippingBar) shippingBar.style.display = 'block';

  let subtotal = 0;
  let originalTotal = 0;

  // Render cart items
  if (cartList) {
    cartList.innerHTML = cart.map(item => {
      const itemSubtotal = item.price * item.qty;
      const itemOrigSubtotal = (item.originalPrice || item.price) * item.qty;
      subtotal += itemSubtotal;
      originalTotal += itemOrigSubtotal;

      return `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy" />
          <div class="cart-item-info">
            <div>
              <div class="cart-item-category">${item.category}</div>
              <div class="cart-item-name" title="${item.name}">${item.name}</div>
              ${item.offer ? `<span class="cart-item-offer">⚡ ${item.offer}</span>` : ''}
            </div>
            <div class="cart-item-footer">
              <div class="cart-item-pricing">
                <span class="cart-item-price">${formatCurrency(itemSubtotal)}</span>
                ${item.originalPrice > item.price ? `<span class="cart-item-orig">${formatCurrency(itemOrigSubtotal)}</span>` : ''}
              </div>
              <div class="cart-qty-group">
                <button class="cart-qty-btn" onclick="updateQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
                <span class="cart-qty-value">${item.qty}</span>
                <button class="cart-qty-btn" onclick="updateQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
            </div>
          </div>
          <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')" aria-label="Remove ${item.name}">✕</button>
        </div>
      `;
    }).join('');
  }

  // Summary calculations
  const savings = Math.max(0, originalTotal - subtotal);
  const subtotalElem = document.getElementById('cartSubtotal');
  if (subtotalElem) subtotalElem.textContent = formatCurrency(subtotal);

  const savingsRow = document.getElementById('cartSavingsRow');
  const savingsElem = document.getElementById('cartSavings');
  if (savingsRow && savingsElem) {
    if (savings > 0) {
      savingsRow.style.display = 'flex';
      savingsElem.textContent = `- ${formatCurrency(savings)}`;
    } else {
      savingsRow.style.display = 'none';
    }
  }

  // Coupon discount
  let couponDiscountAmount = 0;
  const couponRow = document.getElementById('couponDiscountRow');
  const couponElem = document.getElementById('couponDiscount');
  if (activeCoupon) {
    couponDiscountAmount = Math.round((subtotal * activeCoupon.discountPercent) / 100);
    if (couponRow && couponElem) {
      couponRow.style.display = 'flex';
      couponElem.textContent = `- ${formatCurrency(couponDiscountAmount)}`;
    }
  } else if (couponRow) {
    couponRow.style.display = 'none';
  }

  const grandTotal = Math.max(0, subtotal - couponDiscountAmount);
  const grandTotalElem = document.getElementById('cartGrandTotal');
  if (grandTotalElem) grandTotalElem.textContent = formatCurrency(grandTotal);

  // Free shipping threshold (₹999)
  const threshold = 999;
  const progress = Math.min(100, Math.round((subtotal / threshold) * 100));
  const fill = document.getElementById('shippingProgressFill');
  const text = document.getElementById('shippingProgressText');
  if (fill) fill.style.width = `${progress}%`;
  if (text) {
    if (subtotal >= threshold) {
      text.innerHTML = `🎉 <b>You've unlocked FREE Express Shipping!</b>`;
    } else {
      text.innerHTML = `Add <b>${formatCurrency(threshold - subtotal)}</b> more for <b>FREE Delivery</b>`;
    }
  }
}

/**
 * Toast notification
 */
function showToast(message) {
  const toast = document.getElementById('cartToast');
  const msg = document.getElementById('cartToastMessage');
  if (!toast || !msg) return;

  msg.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/**
 * Checkout modal dialog
 */
function openCheckoutModal() {
  if (cart.length === 0) return;

  const modal = document.getElementById('checkoutModalBackdrop');
  if (!modal) return;

  const totalCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const couponDiscount = activeCoupon ? Math.round((subtotal * activeCoupon.discountPercent) / 100) : 0;
  const finalTotal = subtotal - couponDiscount;

  document.getElementById('checkoutItemCount').textContent = `${totalCount} item${totalCount !== 1 ? 's' : ''}`;
  document.getElementById('checkoutTotalPayable').textContent = formatCurrency(finalTotal);

  modal.classList.add('open');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModalBackdrop');
  if (modal) modal.classList.remove('open');
}

function handlePlaceOrder(event) {
  event.preventDefault();
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const payment = document.getElementById('custPayment').value;

  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const couponDiscount = activeCoupon ? Math.round((subtotal * activeCoupon.discountPercent) / 100) : 0;
  const finalTotal = subtotal - couponDiscount;
  const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

  alert(`🎉 Order Confirmed!\n\nOrder ID: ${orderId}\nCustomer: ${name}\nPhone: ${phone}\nDeliver to: ${address}\nPayment: ${payment.toUpperCase()}\nAmount: ${formatCurrency(finalTotal)}\n\nThank you for shopping with us! Your items will be dispatched within 24 hours.`);

  // Reset cart after checkout
  cart = [];
  activeCoupon = null;
  saveCartToStorage();
  updateCartUI();
  closeCheckoutModal();
  closeCart();
}

// Keyboard accessibility (ESC to close)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCart();
    closeCheckoutModal();
  }
});
