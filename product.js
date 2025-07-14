
const langButtons   = document.querySelectorAll('.lang-btn');
const i18nElements  = document.querySelectorAll('[data-i18n]');


langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) return;         

    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const lang = btn.textContent.trim().toLowerCase();   
    document.documentElement.lang = lang;

    i18nElements.forEach(el => {
      const key = el.dataset.i18n;                       
      el.innerHTML = translations[lang][key]; 
    });
  });
});const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    
    if (href.startsWith('#')) {
      e.preventDefault(); 

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
const translations = {
  en: {
    /* nav */
    home: "Home",
    about: "About Us",
    products: "Our Products",
    gallery: "Gallery",
    blogs: "Blogs",
    contact: "Contact Us",

    /* product section */
    products_section_title: "Our Products",
    all_products: "All Products",
    fruits: "Fruits",
    vegetables: "Vegetables",
    product_mango: "IQF Mango",
    product_strawberry: "IQF Strawberry",
    product_peas: "IQF Peas",
    available_shapes: "Available shapes:",
    varieties: "Varieties:",
    packaging: "Packaging:",
    shelf_life: "Shelf life:",
    origin: "Country of origin:",
    read_more: "Read more",
    contact_us: "Contact Us",

    /* product highlight intro */
    products_heading_line: "Frozen Goodness,<br>Packed Fresh for You.",
    products_paragraph: "Browse our handpicked selection of frozen fruits and vegetables—harvested at peak ripeness and flash–frozen to lock in nutrients and taste. Whether you’re craving smoothie–ready berries, garden–fresh greens, or quick–prep meal solutions, we’ve got your freezer covered with nature’s best.",

    /* footer */
    footer_desc: "Discover the taste of nature preserved at its peak! Our premium frozen vegetables and fruits are harvested fresh, flash-frozen to lock in flavor, nutrients, and vibrant colors. From farm to table, we bring you wholesome goodness with unmatched quality and convenience. Elevate your meals with the essence of nature, anytime, anywhere.",
    footer_links_title: "Quick Links",
    footer_about: "About Us",
    footer_products: "Our Products",
    footer_gallery: "Gallery",
    footer_blogs: "Blogs",
    footer_contact: "Contact Us",
    footer_contact_title: "Contacts:"
  },

  ar: {
    /* nav */
    home: "الرئيسية",
    about: "من نحن",
    products: "منتجاتنا",
    gallery: "المعرض",
    blogs: "المدونة",
    contact: "اتصل بنا",

    /* product section */
    products_section_title: "منتجاتنا",
    all_products: "كل المنتجات",
    fruits: "فاكهة",
    vegetables: "خضروات",
    product_mango: "مانجو مجمدة",
    product_strawberry: "فراولة مجمدة",
    product_peas: "بسلة مجمدة",
    available_shapes: "الأشكال المتاحة:",
    varieties: "الأنواع:",
    packaging: "التعبئة والتغليف:",
    shelf_life: "مدة الصلاحية:",
    origin: "بلد المنشأ:",
    read_more: "اقرأ المزيد",
    contact_us: "تواصل معنا",

    /* product highlight intro */
    products_heading_line: "الطعام المجمد الطازج،<br>مُعبأ بعناية لأجلك.",
    products_paragraph: "تصفح مجموعتنا المختارة بعناية من الفواكه والخضروات المجمدة — يتم حصادها في ذروة نضجها وتجميدها سريعًا للحفاظ على العناصر الغذائية والطعم. سواء كنت تبحث عن فواكه جاهزة للعصائر، أو خضروات طازجة، أو وجبات سريعة التحضير، نحن نغطي كل احتياجاتك الطبيعية من الفريزر.",

    /* footer */
    footer_desc: "اكتشف طعم الطبيعة المحفوظة في ذروتها! يتم حصاد خضرواتنا وفواكهنا المجمدة الممتازة طازجة، وتُجمَّد سريعًا للحفاظ على النكهة، والعناصر الغذائية، والألوان الزاهية. من المزرعة إلى المائدة، نقدم لك طعامًا صحيًا بجودة لا مثيل لها وسهولة فائقة. ارتقِ بوجباتك بجوهر الطبيعة، في أي وقت، ومن أي مكان.",
    footer_links_title: "روابط سريعة",
    footer_about: "من نحن",
    footer_products: "منتجاتنا",
    footer_gallery: "المعرض",
    footer_blogs: "المدونة",
    footer_contact: "اتصل بنا",
    footer_contact_title: "معلومات التواصل:"
  }
};


const burger = document.getElementById('burger');        // الزر
const navMenu = document.querySelector('.main-nav');      // القائمة (باستخدام الـ class)

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');                     // يضيف/يحذف .active
});
