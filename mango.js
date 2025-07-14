
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
    mango_title: "IQF Mango",
  mango_desc: "We offer you premium frozen mangoes, selected from the finest Egyptian mango farms and frozen using IQF technology to preserve their natural taste, perfect texture, and rich golden color.",
  features_title: "Product Features:",
  feature_1: "Rich flavor and natural sugar content.",
  feature_2: "Permanent golden color after melting, with no change in color or taste.",
  feature_3: "Completely free of any additives or preservatives.",
  specs_title: "Product Specifications:",
  spec_shape: "10x10 mm or 20x20 mm slices or cubes (as per customer request)",
  spec_varieties: "Zabidiya – Naomi – Kate (as per customer request)",
  spec_packaging: "800 g / 1 kg / 2.5 kg / 10 kg bags (bulk)",
  spec_life: "18 months at -18°C or cooler.",
  spec_origin: "🇪🇬 Egypt",
  certifications_title: "Quality and Certifications:",
  
  more_products_title: "More products",
  view_all_btn: "View All Products",
  available_shapes: "Available shapes:",
  varieties: "Varieties:",
  packaging: "Packaging:",
  shelf_life: "Shelf life:",
  origin: "Country of origin:",
  read_more: "Read more",
  contact_us: "Contact Us",
  product_mango: "IQF Mango",
  
  redberry_title: "IQF Redberry",
  redberry_shapes: "10x10 mm or 20x20 mm slices or cubes",
  redberry_varieties: "Zabidiya – Naomi – Kate",
  redberry_packaging: "800 g / 1kg / 2.5kg / 10kg (bulk)",
  redberry_life: "18 months at -18°C or cooler.",
  redberry_origin: "Egypt 🇪🇬"
    
  },

  ar: {
    /* nav */
    home: "الرئيسية",
    about: "من نحن",
    products: "منتجاتنا",
    gallery: "المعرض",
    blogs: "المدونة",
    contact: "اتصل بنا",
    
  mango_title: "مانجو مجمدة (IQF Mango)",
  mango_desc: "نقدم لك مانجو مجمدة عالية الجودة، مختارة من أفضل مزارع مصر ومجمدة بتقنية IQF للحفاظ على الطعم الطبيعي، والملمس المثالي، واللون الذهبي الغني.",
  features_title: "مميزات المنتج:",
  feature_1: "نكهة غنية ومحتوى طبيعي من السكر.",
  feature_2: "احتفاظ دائم باللون الذهبي بعد الذوبان دون تغير في اللون أو الطعم.",
  feature_3: "خالية تمامًا من أي إضافات أو مواد حافظة.",
  specs_title: "المواصفات الفنية:",
  spec_shape: "شرائح أو مكعبات 10×10 مم أو 20×20 مم (حسب طلب العميل)",
  spec_varieties: "زبدية – ناعومي – كيت (حسب طلب العميل)",
  spec_packaging: "أكياس 800 جم / 1 كجم / 2.5 كجم / 10 كجم (بالجملة)",
  spec_life: "18 شهرًا عند -18 درجة مئوية أو أقل.",
  spec_origin: "🇪🇬 مصر",
  certifications_title: "الجودة والشهادات:",
  
  more_products_title: "منتجات أخرى",
  view_all_btn: "عرض كل المنتجات",
  available_shapes: "الأشكال المتاحة:",
  varieties: "الأنواع:",
  packaging: "التعبئة والتغليف:",
  shelf_life: "مدة الصلاحية:",
  origin: "بلد المنشأ:",
  read_more: "اقرأ المزيد",
  contact_us: "تواصل معنا",
  product_mango: "مانجو مجمدة",
  
  redberry_title: "توت أحمر مجمد (IQF)",
  redberry_shapes: "مكعبات أو شرائح 10×10 مم أو 20×20 مم",
  redberry_varieties: "زبيدية - نعومي - كيت",
  redberry_packaging: "800 جم / 1 كجم / 2.5 كجم / 10 كجم (بالجملة)",
  redberry_life: "مدة صلاحية 18 شهرًا عند -18°م أو أقل",
  redberry_origin: "مصر 🇪🇬"

  }
};


const burger = document.getElementById('burger');        // الزر
const navMenu = document.querySelector('.main-nav');      // القائمة (باستخدام الـ class)

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');                     // يضيف/يحذف .active
});
