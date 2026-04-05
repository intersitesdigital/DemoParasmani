/* ===== PARASMANI ENTERPRISES — CORE APP v2 ===== */
const APP = {
  name: 'Parasmani Enterprises',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'info@parasmani-enterprises.com',
  address: 'Main Road, Deoghar, Jharkhand 814112',
  gst: '20AABCP1234F1ZL',
};

/* ===== STORAGE HELPERS ===== */
const DB = {
  get(k, fb) { try { const d = localStorage.getItem('pe_' + k); return d ? JSON.parse(d) : fb; } catch { return fb; } },
  set(k, v) { localStorage.setItem('pe_' + k, JSON.stringify(v)); },
  remove(k) { localStorage.removeItem('pe_' + k); }
};

/* ===== CATEGORIES ===== */
const CATEGORIES = [
  { id: 'smart-lighting', name: 'Smart Lighting', icon: '💡', img: 'images/product-led.png' },
  { id: 'led-lights', name: 'LED Lights', icon: '🔆', img: 'images/product-led.png' },
  { id: 'chandeliers', name: 'Chandeliers', icon: '🪔', img: 'images/product-chandelier.png' },
  { id: 'fans', name: 'Fans', icon: '🌀', img: 'images/product-fan.png' },
  { id: 'tv', name: 'Television', icon: '📺', img: 'images/product-tv.png' },
  { id: 'ac', name: 'Air Conditioner', icon: '❄️', img: 'images/product-ac.png' },
  { id: 'refrigerator', name: 'Refrigerator', icon: '🧊', img: 'images/product-fridge.png' },
  { id: 'kitchen', name: 'Kitchen Appliances', icon: '🍳', img: 'images/product-kitchen.png' },
  { id: 'home-appliances', name: 'Home Appliances', icon: '🫧', img: 'images/product-washer.png' },
  { id: 'electronics', name: 'Electronics', icon: '📱', img: 'images/product-tv.png' },
];

/* ===== DEFAULT PRODUCTS (30 items) ===== */
const DEFAULT_PRODUCTS = [
  { id:1, name:'Philips WiZ Smart LED Bulb 9W', cat:'smart-lighting', brand:'Philips', price:899, mrp:1299, stock:50, img:'images/product-led.png', desc:'WiFi enabled smart bulb with 16 million colors. Works with Alexa & Google.', rating:4.5, reviews:128, specs:{Wattage:'9W',Color:'RGBW',Connectivity:'WiFi',Warranty:'2 Years'} },
  { id:2, name:'Philips Smart LED Strip 5M', cat:'smart-lighting', brand:'Philips', price:1999, mrp:2999, stock:25, img:'images/product-led.png', desc:'App controlled LED strip with music sync and 16M colors.', rating:4.3, reviews:67, specs:{Length:'5 meters',Wattage:'24W',Connectivity:'WiFi + Bluetooth',Warranty:'1 Year'} },
  { id:3, name:'Smart Ceiling Panel Light 18W', cat:'smart-lighting', brand:'Philips', price:2499, mrp:3499, stock:18, img:'images/product-led.png', desc:'Dimmable smart ceiling light with warm to cool white adjustment.', rating:4.6, reviews:42, specs:{Wattage:'18W',Size:'Round 8 inch',Connectivity:'WiFi',Warranty:'2 Years'} },
  { id:4, name:'Philips LED Bulb 9W Pack of 4', cat:'led-lights', brand:'Philips', price:449, mrp:720, stock:200, img:'images/product-led.png', desc:'Energy efficient B22 LED bulbs, cool daylight. Save up to 80% electricity.', rating:4.7, reviews:356, specs:{Wattage:'9W',Base:'B22',Pack:'4 Bulbs',Warranty:'2 Years'} },
  { id:5, name:'Philips LED Tube Light 20W', cat:'led-lights', brand:'Philips', price:349, mrp:499, stock:150, img:'images/product-led.png', desc:'4 feet LED batten for bright uniform lighting.', rating:4.5, reviews:198, specs:{Wattage:'20W',Length:'4 feet',Lumens:'2000 lm',Warranty:'2 Years'} },
  { id:6, name:'Philips LED Downlight 15W', cat:'led-lights', brand:'Philips', price:599, mrp:899, stock:80, img:'images/product-led.png', desc:'Recessed LED downlight for false ceiling. Ultra slim design.', rating:4.4, reviews:89, specs:{Wattage:'15W',CutOut:'150mm',Type:'Recessed',Warranty:'2 Years'} },
  { id:7, name:'Crystal Chandelier 12 Light Gold', cat:'chandeliers', brand:'Philips', price:15999, mrp:22999, stock:5, img:'images/product-chandelier.png', desc:'Premium K9 crystal chandelier with gold finish. Perfect for living rooms.', rating:4.8, reviews:23, specs:{Lights:'12',Material:'K9 Crystal',Finish:'Gold',Warranty:'3 Years'} },
  { id:8, name:'Modern Pendant Chandelier 8 Light', cat:'chandeliers', brand:'Philips', price:8999, mrp:12999, stock:8, img:'images/product-chandelier.png', desc:'Contemporary pendant design with frosted glass globes.', rating:4.6, reviews:34, specs:{Lights:'8',Material:'Glass + Metal',Style:'Modern',Warranty:'2 Years'} },
  { id:9, name:'Mini Chandelier 5 Light', cat:'chandeliers', brand:'Philips', price:4999, mrp:6999, stock:12, img:'images/product-chandelier.png', desc:'Compact crystal chandelier ideal for bedrooms and dining.', rating:4.5, reviews:56, specs:{Lights:'5',Material:'Crystal',Diameter:'45cm',Warranty:'2 Years'} },
  { id:10, name:'Havells Stealth BLDC Fan', cat:'fans', brand:'Havells', price:4999, mrp:6499, stock:30, img:'images/product-fan.png', desc:'5-star rated BLDC ceiling fan. Saves up to 65% electricity. Remote controlled.', rating:4.7, reviews:245, specs:{Size:'1200mm',Motor:'BLDC',Control:'Remote',Warranty:'3 Years'} },
  { id:11, name:'Crompton Silent Pro Fan', cat:'fans', brand:'Crompton', price:2499, mrp:3199, stock:45, img:'images/product-fan.png', desc:'Ultra silent ceiling fan with aerodynamic blades. Elegant design.', rating:4.4, reviews:156, specs:{Size:'1200mm',Motor:'Copper',Noise:'Low',Warranty:'2 Years'} },
  { id:12, name:'Orient Aeroquiet Fan', cat:'fans', brand:'Orient', price:3299, mrp:4299, stock:35, img:'images/product-fan.png', desc:'Quiet performance with energy efficient BLDC motor.', rating:4.5, reviews:112, specs:{Size:'1200mm',Motor:'BLDC',Energy:'5 Star',Warranty:'3 Years'} },
  { id:13, name:'Samsung 55" Crystal 4K Smart TV', cat:'tv', brand:'Samsung', price:42999, mrp:64999, stock:10, img:'images/product-tv.png', desc:'Crystal UHD 4K display with smart Tizen OS. HDR10+ support.', rating:4.6, reviews:567, specs:{Size:'55 inch',Resolution:'4K UHD',OS:'Tizen',Warranty:'1 Year'} },
  { id:14, name:'LG 43" Full HD Smart TV', cat:'tv', brand:'LG', price:27999, mrp:38999, stock:15, img:'images/product-tv.png', desc:'WebOS smart TV with AI ThinQ. Dolby audio. Magic remote included.', rating:4.5, reviews:423, specs:{Size:'43 inch',Resolution:'Full HD',OS:'WebOS',Warranty:'1 Year'} },
  { id:15, name:'Sony Bravia 50" 4K Google TV', cat:'tv', brand:'Sony', price:54999, mrp:74999, stock:7, img:'images/product-tv.png', desc:'Triluminos display with Google TV. Dolby Vision & Atmos.', rating:4.8, reviews:289, specs:{Size:'50 inch',Resolution:'4K HDR',OS:'Google TV',Warranty:'1 Year'} },
  { id:16, name:'Daikin 1.5 Ton 5 Star Inverter AC', cat:'ac', brand:'Daikin', price:38999, mrp:52990, stock:12, img:'images/product-ac.png', desc:'Triple display, PM 2.5 filter, copper condenser. India\'s #1 AC brand.', rating:4.7, reviews:456, specs:{Capacity:'1.5 Ton',Rating:'5 Star',Type:'Inverter Split',Warranty:'5 Years'} },
  { id:17, name:'Voltas 1 Ton 3 Star Split AC', cat:'ac', brand:'Voltas', price:24999, mrp:34990, stock:20, img:'images/product-ac.png', desc:'Adjustable cooling with turbo mode. Anti-dust filter.', rating:4.3, reviews:312, specs:{Capacity:'1 Ton',Rating:'3 Star',Type:'Split',Warranty:'3 Years'} },
  { id:18, name:'LG 1.5 Ton AI Dual Inverter AC', cat:'ac', brand:'LG', price:42999, mrp:58990, stock:8, img:'images/product-ac.png', desc:'AI convertible 6-in-1 cooling. Wifi enabled with ThinQ app.', rating:4.6, reviews:234, specs:{Capacity:'1.5 Ton',Rating:'5 Star',Type:'Dual Inverter',Warranty:'5 Years'} },
  { id:19, name:'Samsung 253L Double Door Fridge', cat:'refrigerator', brand:'Samsung', price:22999, mrp:29990, stock:15, img:'images/product-fridge.png', desc:'Digital inverter technology. Convertible 5-in-1. Frost free.', rating:4.5, reviews:389, specs:{Capacity:'253L',Type:'Double Door',Technology:'Inverter',Warranty:'10 Years Compressor'} },
  { id:20, name:'LG 190L Single Door Fridge', cat:'refrigerator', brand:'LG', price:14999, mrp:19990, stock:25, img:'images/product-fridge.png', desc:'Smart inverter compressor. Anti-bacterial gasket.', rating:4.4, reviews:267, specs:{Capacity:'190L',Type:'Single Door',Rating:'4 Star',Warranty:'10 Years Compressor'} },
  { id:21, name:'Whirlpool 265L Frost Free Fridge', cat:'refrigerator', brand:'Whirlpool', price:25999, mrp:33990, stock:10, img:'images/product-fridge.png', desc:'IntelliFresh inverter with vitamin zone for freshness.', rating:4.5, reviews:178, specs:{Capacity:'265L',Type:'Double Door',Technology:'IntelliSense',Warranty:'10 Years'} },
  { id:22, name:'Prestige Iris 750W Mixer Grinder', cat:'kitchen', brand:'Prestige', price:2999, mrp:4499, stock:40, img:'images/product-kitchen.png', desc:'3-jar mixer grinder with stainless steel blades.', rating:4.4, reviews:567, specs:{Wattage:'750W',Jars:'3',Blade:'SS',Warranty:'2 Years'} },
  { id:23, name:'Philips Air Fryer HD9200', cat:'kitchen', brand:'Philips', price:6999, mrp:9995, stock:20, img:'images/product-kitchen.png', desc:'Rapid Air technology. Uses up to 90% less fat.', rating:4.6, reviews:234, specs:{Capacity:'4.1L',Power:'1400W',Technology:'Rapid Air',Warranty:'2 Years'} },
  { id:24, name:'Bajaj Induction Cooktop', cat:'kitchen', brand:'Bajaj', price:1999, mrp:2999, stock:35, img:'images/product-kitchen.png', desc:'2000W induction cooktop with auto-off feature.', rating:4.3, reviews:456, specs:{Power:'2000W',Preset:'8 Menus',Pan:'Tact Keys',Warranty:'1 Year'} },
  { id:25, name:'Samsung 7Kg Front Load Washer', cat:'home-appliances', brand:'Samsung', price:29999, mrp:38990, stock:12, img:'images/product-washer.png', desc:'Digital inverter motor with hygiene steam cycle.', rating:4.5, reviews:345, specs:{Capacity:'7 Kg',Type:'Front Load',Motor:'Digital Inverter',Warranty:'3 Years'} },
  { id:26, name:'LG 8Kg Top Load Washer', cat:'home-appliances', brand:'LG', price:18999, mrp:24990, stock:18, img:'images/product-washer.png', desc:'Smart inverter technology. TurboDrum for powerful washing.', rating:4.4, reviews:278, specs:{Capacity:'8 Kg',Type:'Top Load',Technology:'TurboDrum',Warranty:'3 Years'} },
  { id:27, name:'Kent Grand Plus Water Purifier', cat:'home-appliances', brand:'Kent', price:15999, mrp:21999, stock:22, img:'images/product-washer.png', desc:'RO+UV+UF+TDS control. 8L storage tank.', rating:4.5, reviews:456, specs:{Capacity:'8L',Technology:'RO+UV+UF',TDS:'Up to 2000ppm',Warranty:'1 Year'} },
  { id:28, name:'JBL Flip 6 Bluetooth Speaker', cat:'electronics', brand:'JBL', price:9999, mrp:14999, stock:25, img:'images/product-tv.png', desc:'Waterproof portable speaker with 12-hour battery.', rating:4.6, reviews:567, specs:{Battery:'12 Hours',Rating:'IP67',Driver:'2-way',Warranty:'1 Year'} },
  { id:29, name:'boAt Rockerz 550 Headphone', cat:'electronics', brand:'boAt', price:1799, mrp:2990, stock:50, img:'images/product-tv.png', desc:'Over-ear wireless headphone with 20H battery. ANC.', rating:4.3, reviews:890, specs:{Battery:'20 Hours',Driver:'50mm',ANC:'Yes',Warranty:'1 Year'} },
  { id:30, name:'Philips Trimmer QT4011', cat:'electronics', brand:'Philips', price:1599, mrp:2195, stock:40, img:'images/product-tv.png', desc:'DuraPower beard trimmer. 90min runtime. 20 Length settings.', rating:4.5, reviews:1234, specs:{Runtime:'90 min',Settings:'20',Charge:'1 Hour',Warranty:'2 Years'} },
];

/* ===== DEFAULT STAFF ===== */
const DEFAULT_STAFF = [
  { id:1, empId:'EMP001', name:'Rahul Singh', role:'Sales Executive', phone:'9876543211', username:'staff1', password:'12345', salaryType:'monthly', salary:18000, hoursPerDay:8, rfidId:'RFID001', shift:'morning', performance:0 },
  { id:2, empId:'EMP002', name:'Sneha Kumari', role:'Cashier', phone:'9876543212', username:'staff2', password:'12345', salaryType:'monthly', salary:15000, hoursPerDay:8, rfidId:'RFID002', shift:'morning', performance:0 },
  { id:3, empId:'EMP003', name:'Vikash Yadav', role:'Store Helper', phone:'9876543213', username:'staff3', password:'12345', salaryType:'daily', salary:600, hoursPerDay:8, rfidId:'RFID003', shift:'evening', performance:0 },
];

/* ===== DEFAULT TESTIMONIALS ===== */
const DEFAULT_TESTIMONIALS = [
  { id:1, name:'Rajesh Kumar', role:'Homeowner', text:'Best electronics showroom in Deoghar! Bought a Samsung TV and Daikin AC. Excellent service and genuine products.', stars:5 },
  { id:2, name:'Priya Sharma', role:'Interior Designer', text:'I always recommend Parasmani Enterprises to my clients. Their lighting collection is superb and staff is very knowledgeable.', stars:5 },
  { id:3, name:'Amit Verma', role:'Shop Owner', text:'Upgraded entire shop to Philips LEDs. Electricity bill dropped by ₹3000/month! Great quality and excellent service.', stars:5 },
  { id:4, name:'Sunita Devi', role:'Homemaker', text:'Bought washing machine and refrigerator. Very happy with the prices and after-sales support. Highly recommended!', stars:5 },
];

/* ===== DEFAULT COUPONS ===== */
const DEFAULT_COUPONS = [
  { code:'WELCOME10', discount:10, type:'percent', minOrder:1000, active:true },
  { code:'DIWALI20', discount:20, type:'percent', minOrder:5000, active:true },
  { code:'FLAT500', discount:500, type:'flat', minOrder:3000, active:true },
  { code:'LOYAL20', discount:20, type:'percent', minOrder:2000, active:true },
];

/* ===== HINDI TRANSLATIONS ===== */
const LANG = {
  en: { shopNow:'Shop Now', whatsapp:'WhatsApp', aboutUs:'About Us', happyCust:'Happy Customers', products:'Products', energySave:'Energy Savings', yearsTrust:'Years Trust', shopByCat:'Shop By Category', exploreCat:'Explore our wide range of electronics and lighting products', topSelling:'Top Selling Products', topSellSub:'Our most popular products loved by thousands of customers', viewAll:'View All Products', trustedBrands:'Brands We Carry', brandSub:'Only genuine products from India\'s most trusted brands', testimonials:'What Customers Say', testSub:'Trusted by thousands of happy customers across Deoghar', addToCart:'Add to Cart', login:'Login', myAccount:'My Account', cart:'Cart', search:'Search TVs, ACs, lights, appliances...' },
  hi: { shopNow:'अभी खरीदें', whatsapp:'व्हाट्सएप', aboutUs:'हमारे बारे में', happyCust:'खुश ग्राहक', products:'उत्पाद', energySave:'ऊर्जा बचत', yearsTrust:'वर्षों का विश्वास', shopByCat:'श्रेणी से खरीदें', exploreCat:'हमारे इलेक्ट्रॉनिक्स और लाइटिंग उत्पादों की विस्तृत श्रृंखला', topSelling:'सबसे ज्यादा बिकने वाले', topSellSub:'हजारों ग्राहकों द्वारा पसंद किए गए उत्पाद', viewAll:'सभी उत्पाद देखें', trustedBrands:'विश्वसनीय ब्रांड', brandSub:'भारत के सबसे विश्वसनीय ब्रांडों के असली उत्पाद', testimonials:'ग्राहक क्या कहते हैं', testSub:'देवघर के हजारों खुश ग्राहकों द्वारा विश्वसनीय', addToCart:'कार्ट में जोड़ें', login:'लॉग इन', myAccount:'मेरा खाता', cart:'कार्ट', search:'टीवी, एसी, लाइट खोजें...' }
};
function t(key) { const lang = DB.get('lang', 'en'); return LANG[lang]?.[key] || LANG.en[key] || key; }

/* ===== INITIALIZE ===== */
function initApp() {
  if (!DB.get('products')) DB.set('products', DEFAULT_PRODUCTS);
  if (!DB.get('staff')) DB.set('staff', DEFAULT_STAFF);
  if (!DB.get('testimonials')) DB.set('testimonials', DEFAULT_TESTIMONIALS);
  if (!DB.get('coupons')) DB.set('coupons', DEFAULT_COUPONS);
  if (!DB.get('cart')) DB.set('cart', []);
  if (!DB.get('wishlist')) DB.set('wishlist', []);
  if (!DB.get('orders')) DB.set('orders', []);
  if (!DB.get('users')) DB.set('users', []);
  if (!DB.get('attendance')) DB.set('attendance', []);
  if (!DB.get('activity_log')) DB.set('activity_log', []);
  if (!DB.get('admin')) DB.set('admin', { user:'admin', pass:'admin123' });
  if (!DB.get('recently_viewed')) DB.set('recently_viewed', []);
  if (!DB.get('notifications')) DB.set('notifications', [
    { id:1, type:'offer', title:'Welcome Offer!', msg:'Use code WELCOME10 for 10% off your first order.', time: new Date().toISOString(), read:false },
    { id:2, type:'info', title:'Free Delivery', msg:'Free delivery on all orders above ₹999. Shop now!', time: new Date(Date.now()-3600000).toISOString(), read:false },
    { id:3, type:'offer', title:'Summer Sale Live!', msg:'Up to 40% off on ACs & Fans. Limited period offer.', time: new Date(Date.now()-86400000).toISOString(), read:true },
  ]);
  if (!DB.get('expenses')) DB.set('expenses', []);
  if (!DB.get('returns')) DB.set('returns', []);
  if (!DB.get('leave_requests')) DB.set('leave_requests', []);
  if (!DB.get('shifts')) DB.set('shifts', {});
  if (!DB.get('vendors')) DB.set('vendors', [
    { id:1, name:'Philips India', contact:'1800-102-7799', products:'Lighting, Smart Lights', email:'support@philips.in' },
    { id:2, name:'Samsung Electronics', contact:'1800-40-7267', products:'TV, AC, Fridge, Washer', email:'support@samsung.in' },
  ]);
}

/* ===== UTILITY FUNCTIONS ===== */
function formatPrice(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
function getDiscount(price, mrp) { return Math.round(((mrp - price) / mrp) * 100); }
function generateId() { return Date.now() + Math.floor(Math.random() * 1000); }
function getStars(r) { let s = ''; for (let i = 1; i <= 5; i++) s += i <= Math.floor(r) ? '★' : (i - 0.5 <= r ? '★' : '☆'); return s; }
function timeAgo(d) { const mins = Math.floor((Date.now() - new Date(d)) / 60000); if (mins < 60) return mins + 'm ago'; if (mins < 1440) return Math.floor(mins/60) + 'h ago'; return Math.floor(mins/1440) + 'd ago'; }

/* ===== TOAST ===== */
function toast(msg, type = 'success') {
  let t = document.getElementById('globalToast');
  if (!t) { t = document.createElement('div'); t.id = 'globalToast'; document.body.appendChild(t); }
  t.className = 'toast toast-' + type;
  t.textContent = (type === 'success' ? '✓ ' : type === 'error' ? '✕ ' : 'ℹ ') + msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

/* ===== CART HELPERS ===== */
function getCartCount() { return DB.get('cart', []).reduce((s, i) => s + i.qty, 0); }
function updateCartBadge() {
  document.querySelectorAll('.cart-count').forEach(el => {
    const c = getCartCount(); el.textContent = c; el.style.display = c > 0 ? 'flex' : 'none';
  });
}
function addToCart(productId, qty = 1) {
  const products = DB.get('products', []);
  const product = products.find(p => p.id === productId);
  if (!product) return;
  let cart = DB.get('cart', []);
  const existing = cart.find(i => i.id === productId);
  if (existing) { existing.qty += qty; } else { cart.push({ id: productId, qty }); }
  DB.set('cart', cart);
  updateCartBadge();
  toast(product.name + ' added to cart');
  // Add notification
  addNotification('order', 'Added to Cart', product.name + ' added to your cart.');
}
function toggleWishlist(productId) {
  let wl = DB.get('wishlist', []);
  if (wl.includes(productId)) { wl = wl.filter(id => id !== productId); toast('Removed from wishlist', 'info'); }
  else { wl.push(productId); toast('Added to wishlist'); }
  DB.set('wishlist', wl);
}
function addRecentlyViewed(productId) {
  let rv = DB.get('recently_viewed', []);
  rv = rv.filter(id => id !== productId);
  rv.unshift(productId);
  if (rv.length > 10) rv = rv.slice(0, 10);
  DB.set('recently_viewed', rv);
}

/* ===== AUTH HELPERS ===== */
function getCurrentUser() { return DB.get('current_user', null); }
function isLoggedIn() { return !!getCurrentUser(); }
function getUserRole() { const u = getCurrentUser(); return u ? u.role : null; }
function logout() { DB.remove('current_user'); window.location.href = 'login.html'; }
function logActivity(action) {
  const log = DB.get('activity_log', []);
  const user = getCurrentUser();
  log.push({ time: new Date().toISOString(), user: user ? user.name || user.username : 'System', action });
  DB.set('activity_log', log);
}

/* ===== NOTIFICATIONS ===== */
function addNotification(type, title, msg) {
  const notifs = DB.get('notifications', []);
  notifs.unshift({ id: generateId(), type, title, msg, time: new Date().toISOString(), read: false });
  if (notifs.length > 50) notifs.length = 50;
  DB.set('notifications', notifs);
  updateNotifBadge();
}
function updateNotifBadge() {
  const badge = document.querySelector('.notif-badge');
  if (!badge) return;
  const count = DB.get('notifications', []).filter(n => !n.read).length;
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}
function initNotifications() {
  const btn = document.querySelector('.notif-btn');
  const panel = document.querySelector('.notif-panel');
  if (!btn || !panel) return;
  updateNotifBadge();
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('show');
    if (panel.classList.contains('show')) renderNotifications();
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.notif-btn')) panel.classList.remove('show'); });
}
function renderNotifications() {
  const panel = document.querySelector('.notif-panel');
  if (!panel) return;
  const notifs = DB.get('notifications', []).slice(0, 15);
  panel.innerHTML = `<div class="notif-header"><span>🔔 Notifications</span><button onclick="markAllRead()" style="background:none;border:none;color:var(--gold);font-size:.78rem;cursor:pointer">Mark all read</button></div>` +
    (notifs.length ? notifs.map(n => `<div class="notif-item ${n.read ? '' : 'unread'}" onclick="markRead(${n.id})"><div class="notif-icon ${n.type}"><span>${n.type==='order'?'🛍️':n.type==='offer'?'🎉':'ℹ️'}</span></div><div class="notif-text"><p><strong>${n.title}</strong> ${n.msg}</p><div class="notif-time">${timeAgo(n.time)}</div></div></div>`).join('') : '<p style="padding:24px;text-align:center;color:var(--text3)">No notifications</p>');
}
function markRead(id) {
  let notifs = DB.get('notifications', []);
  notifs = notifs.map(n => n.id === id ? {...n, read: true} : n);
  DB.set('notifications', notifs);
  updateNotifBadge();
  renderNotifications();
}
function markAllRead() {
  let notifs = DB.get('notifications', []).map(n => ({...n, read: true}));
  DB.set('notifications', notifs);
  updateNotifBadge();
  renderNotifications();
}

/* ===== RENDER PRODUCT CARD (with Quick View) ===== */
function renderProductCard(p) {
  const wl = DB.get('wishlist', []);
  const isWished = wl.includes(p.id);
  const disc = getDiscount(p.price, p.mrp);
  return `<div class="product-card" onclick="window.location.href='product-details.html?id=${p.id}'">
    <div class="pc-img"><img src="${p.img}" alt="${p.name}" loading="lazy">
      ${disc > 0 ? `<span class="pc-badge">${disc}% OFF</span>` : ''}
      <button class="pc-wish ${isWished ? 'active' : ''}" onclick="event.stopPropagation();toggleWishlist(${p.id});this.classList.toggle('active');" title="Wishlist">${isWished ? '❤️' : '🤍'}</button>
      <button class="pc-quick" onclick="event.stopPropagation();openQuickView(${p.id})">👁️ Quick View</button>
    </div>
    <div class="pc-info">
      <span class="pc-brand">${p.brand}</span>
      <h3 class="pc-name">${p.name}</h3>
      <div class="pc-rating"><span class="stars">${getStars(p.rating)}</span> <span class="rc">(${p.reviews})</span></div>
      <div class="pc-price">
        <span class="price">${formatPrice(p.price)}</span>
        ${p.mrp > p.price ? `<span class="mrp">${formatPrice(p.mrp)}</span>` : ''}
      </div>
      <button class="pc-cart-btn" onclick="event.stopPropagation();addToCart(${p.id})">🛒 ${t('addToCart')}</button>
    </div>
  </div>`;
}

/* ===== SKELETON LOADER ===== */
function renderSkeletons(container, count = 8) {
  if (!container) return;
  container.innerHTML = Array(count).fill('<div class="skeleton skeleton-card"></div>').join('');
}

/* ===== QUICK VIEW ===== */
function openQuickView(id) {
  const products = DB.get('products', []);
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  let modal = document.getElementById('quickViewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quickViewModal';
    modal.className = 'qv-modal';
    document.body.appendChild(modal);
  }
  const disc = getDiscount(p.price, p.mrp);
  const specsHtml = p.specs ? Object.entries(p.specs).map(([k,v]) => `<tr><td style="color:var(--text3);padding:6px 0;font-size:.82rem">${k}</td><td style="padding:6px 0;font-size:.82rem">${v}</td></tr>`).join('') : '';
  modal.innerHTML = `
    <div class="qv-box" style="position:relative">
      <button class="qv-close" onclick="closeQuickView()">✕</button>
      <div class="qv-img"><img src="${p.img}" alt="${p.name}"></div>
      <div class="qv-info">
        <span class="pc-brand">${p.brand}</span>
        <h2>${p.name}</h2>
        <div style="margin:8px 0;color:var(--gold);font-size:.9rem">${getStars(p.rating)} <span style="color:var(--text3)">(${p.reviews} reviews)</span></div>
        <div style="display:flex;align-items:baseline;gap:12px;margin:12px 0">
          <span style="font-size:1.6rem;font-weight:800;color:var(--gold)">${formatPrice(p.price)}</span>
          ${p.mrp > p.price ? `<span style="font-size:1rem;color:var(--text3);text-decoration:line-through">${formatPrice(p.mrp)}</span><span style="background:var(--red);color:#fff;padding:3px 8px;border-radius:20px;font-size:.72rem;font-weight:700">${disc}% OFF</span>` : ''}
        </div>
        <p style="font-size:.88rem;color:var(--text2);margin:10px 0;line-height:1.5">${p.desc}</p>
        ${specsHtml ? `<table style="width:100%;margin:12px 0">${specsHtml}</table>` : ''}
        <div style="display:flex;gap:10px;margin-top:16px">
          <button class="btn btn-primary" onclick="addToCart(${p.id});closeQuickView()" style="flex:1;justify-content:center">🛒 Add to Cart</button>
          <a href="product-details.html?id=${p.id}" class="btn btn-outline" style="flex:1;justify-content:center">View Details →</a>
        </div>
      </div>
    </div>`;
  modal.classList.add('active');
  modal.addEventListener('click', (e) => { if (e.target === modal) closeQuickView(); });
}
function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
}

/* ===== LIVE CHAT WIDGET ===== */
const CHAT_RESPONSES = {
  greeting: ['Hi! 👋 Welcome to Parasmani Enterprises. How can I help you?', 'Hello! 🌟 Thank you for visiting. Ask me anything about our products!'],
  price: 'You can check product prices on our Products page. We offer the best prices in Deoghar with genuine warranty! 💰',
  delivery: 'We offer FREE delivery on orders above ₹999. Delivery typically takes 3-5 business days within Deoghar. 🚚',
  return: 'We have a 7-day return policy for defective products. Please visit our store with the receipt for returns. 🔄',
  offer: 'Check out our current offers! Use code WELCOME10 for 10% off your first order. We also have seasonal sales! 🎉',
  warranty: 'All products come with original manufacturer warranty. We provide warranty cards and bill for every purchase. ✅',
  address: `Our showroom is at ${APP.address}. Visit us anytime, we're open 10 AM - 9 PM! 📍`,
  default: 'Thank you for your message! For detailed queries, please call us at ' + APP.phone + ' or visit our showroom. Our team will be happy to help! 😊',
};
function initChat() {
  const widget = document.querySelector('.chat-widget');
  if (!widget) return;
  const toggle = widget.querySelector('.chat-toggle');
  const box = widget.querySelector('.chat-box');
  if (!toggle || !box) return;
  toggle.addEventListener('click', () => {
    box.classList.toggle('show');
    if (box.classList.contains('show')) {
      const msgs = box.querySelector('.chat-messages');
      if (msgs && msgs.children.length === 0) {
        appendChatMsg(msgs, 'bot', CHAT_RESPONSES.greeting[0]);
        setTimeout(() => appendChatMsg(msgs, 'bot', 'You can ask about products, prices, delivery, offers, warranty, or our store location!'), 1000);
      }
    }
  });
  const sendBtn = widget.querySelector('.chat-send');
  const input = widget.querySelector('.chat-input input');
  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => sendChat(input, box));
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChat(input, box); });
  }
}
function sendChat(input, box) {
  const msg = input.value.trim();
  if (!msg) return;
  const msgs = box.querySelector('.chat-messages');
  appendChatMsg(msgs, 'user', msg);
  input.value = '';
  setTimeout(() => {
    const reply = getChatReply(msg);
    appendChatMsg(msgs, 'bot', reply);
  }, 800);
}
function appendChatMsg(container, type, text) {
  const div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}
function getChatReply(msg) {
  const q = msg.toLowerCase();
  if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('kitna')) return CHAT_RESPONSES.price;
  if (q.includes('deliver') || q.includes('shipping') || q.includes('ship')) return CHAT_RESPONSES.delivery;
  if (q.includes('return') || q.includes('refund') || q.includes('exchange')) return CHAT_RESPONSES.return;
  if (q.includes('offer') || q.includes('discount') || q.includes('coupon') || q.includes('sale')) return CHAT_RESPONSES.offer;
  if (q.includes('warranty') || q.includes('guarantee')) return CHAT_RESPONSES.warranty;
  if (q.includes('address') || q.includes('location') || q.includes('store') || q.includes('shop') || q.includes('kahan')) return CHAT_RESPONSES.address;
  if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('namaste')) return CHAT_RESPONSES.greeting[1];
  return CHAT_RESPONSES.default;
}

/* ===== LANGUAGE ===== */
function initLanguage() {
  const btns = document.querySelectorAll('.lang-toggle button');
  const currentLang = DB.get('lang', 'en');
  btns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', () => {
      DB.set('lang', btn.dataset.lang);
      location.reload();
    });
  });
}

/* ===== GST INVOICE GENERATOR ===== */
function generateInvoice(orderId) {
  const orders = DB.get('orders', []);
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  const subtotal = order.items.reduce((s, i) => s + (i.price * i.qty), 0);
  const gst = Math.round(subtotal * 0.18);
  const w = window.open('', '_blank');
  w.document.write(`<!DOCTYPE html><html><head><title>Invoice ${orderId}</title><style>
    body{font-family:Inter,sans-serif;margin:0;padding:20px;color:#1a1a1a}
    .inv{max-width:800px;margin:0 auto;padding:40px;border:1px solid #ddd}
    .inv-header{display:flex;justify-content:space-between;border-bottom:3px solid #d4a853;padding-bottom:20px;margin-bottom:20px}
    .inv-header h1{color:#d4a853;font-size:1.4rem} .inv-meta{text-align:right;font-size:.85rem;color:#666}
    table{width:100%;border-collapse:collapse;margin:20px 0} th{background:#f5f5f0;padding:10px;text-align:left;font-size:.82rem;border-bottom:2px solid #ddd}
    td{padding:10px;border-bottom:1px solid #eee;font-size:.88rem}
    .total-section{text-align:right;margin-top:20px} .total-section p{margin:4px 0;font-size:.9rem} .grand{font-size:1.3rem;font-weight:700;color:#d4a853}
    .footer{margin-top:40px;padding-top:20px;border-top:1px solid #ddd;text-align:center;color:#888;font-size:.78rem}
    @media print{body{padding:0}.inv{border:none}}
  </style></head><body><div class="inv">
    <div class="inv-header"><div><h1>⚡ Parasmani Enterprises</h1><p style="font-size:.85rem;color:#666">${APP.address}</p><p style="font-size:.82rem;color:#888">GST: ${APP.gst}</p></div>
    <div class="inv-meta"><h2 style="color:#d4a853">TAX INVOICE</h2><p>Invoice #: ${orderId}</p><p>Date: ${new Date(order.date).toLocaleDateString()}</p></div></div>
    <div style="display:flex;justify-content:space-between;margin-bottom:20px"><div><strong>Bill To:</strong><p>${order.customer.name}<br>${order.customer.phone}<br>${order.customer.address}, ${order.customer.city}<br>${order.customer.pincode||''}</p></div>
    <div style="text-align:right"><strong>Payment:</strong><p>${order.payment?.toUpperCase()}</p><strong>Status:</strong><p style="color:#25d366">${order.status?.toUpperCase()}</p></div></div>
    <table><thead><tr><th>#</th><th>Product</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody>
    ${order.items.map((item, i) => `<tr><td>${i+1}</td><td>${item.name}</td><td>${item.qty}</td><td>₹${item.price?.toLocaleString()}</td><td>₹${(item.price*item.qty).toLocaleString()}</td></tr>`).join('')}
    </tbody></table>
    <div class="total-section"><p>Subtotal: ₹${subtotal.toLocaleString()}</p><p>CGST (9%): ₹${Math.round(gst/2).toLocaleString()}</p><p>SGST (9%): ₹${Math.round(gst/2).toLocaleString()}</p><p>Delivery: FREE</p><hr><p class="grand">Grand Total: ₹${(subtotal+gst).toLocaleString()}</p></div>
    <div class="footer"><p>Thank you for shopping at Parasmani Enterprises!</p><p>${APP.phone} | ${APP.email}</p><p>This is a computer generated invoice.</p></div>
  </div><script>setTimeout(()=>window.print(),500)<\/script></body></html>`);
}

/* ===== CUSTOMER SEGMENTATION ===== */
function getCustomerSegment(user) {
  const spent = user.totalSpent || 0;
  const orders = user.totalOrders || 0;
  if (spent >= 50000 || orders >= 5) return { label: 'VIP', color: 'gold', icon: '👑' };
  if (spent >= 10000 || orders >= 2) return { label: 'Regular', color: 'blue', icon: '⭐' };
  return { label: 'New', color: 'green', icon: '🆕' };
}

/* ===== SMART SEARCH ===== */
function initSmartSearch() {
  const searchInput = document.getElementById('smartSearch');
  const suggestBox = document.getElementById('searchSuggestions');
  if (!searchInput || !suggestBox) return;
  searchInput.placeholder = t('search');
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (q.length < 2) { suggestBox.style.display = 'none'; return; }
    const products = DB.get('products', []);
    const matches = products.filter(p => p.name.toLowerCase().includes(q) || p.cat.includes(q) || p.brand.toLowerCase().includes(q)).slice(0, 6);
    if (matches.length === 0) { suggestBox.style.display = 'none'; return; }
    suggestBox.innerHTML = matches.map(p => `<a href="product-details.html?id=${p.id}" class="suggestion-item"><img src="${p.img}" alt=""><div><strong>${p.name}</strong><span>${formatPrice(p.price)}</span></div></a>`).join('');
    suggestBox.style.display = 'block';
  });
  document.addEventListener('click', e => { if (!e.target.closest('.search-wrapper')) suggestBox.style.display = 'none'; });
}

/* ===== DARK MODE ===== */
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const isDark = DB.get('darkMode', true);
  document.body.classList.toggle('light-mode', !isDark);
  if (toggle) toggle.textContent = isDark ? '☀️' : '🌙';
  if (toggle) toggle.addEventListener('click', () => {
    const nowDark = document.body.classList.toggle('light-mode');
    DB.set('darkMode', !nowDark);
    toggle.textContent = nowDark ? '🌙' : '☀️';
  });
}

/* ===== GLOBAL INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  updateCartBadge();
  initSmartSearch();
  initDarkMode();
  initNotifications();
  initChat();
  initLanguage();
});

/* ===== SERVICE WORKER & PWA ===== */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW registration failed: ', err));
  });
}
