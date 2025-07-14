
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
    home: "Home",
    about: "About Us",
    products: "Our Products",
    gallery: "Gallery",
    blogs: "Blogs",
    contact: "Contact Us",
    blogs_paragraph: "Step into The Redberry Zone—your go-to corner for flavorful inspiration, wellness tips, and clever kitchen hacks straight from the world of frozen fruits and veggies. Whether you’re blending up a berry-packed smoothie, prepping a quick nutritious meal, or just curious about what’s in your freezer, we’ve got the crisp content to keep things cool.",
    blog_title_1: "From Freezer Aisle to Flavor File.",
    blog_title_2: "Naturally Frozen, Wonderfully Fresh Ideas",
    blog_title_3: "Bite-Sized Stories, Big Frozen Flavor",
    blog_title_4: "Healthy Living Starts in the Freezer",
    blog_title_5: "Chill Reads for Foodie Feeds.",
    read_more_btn: "Read more",
    
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
    home: "الرئيسية",
    about: "من نحن",
    products: "منتجاتنا",
    gallery: "المعرض",
    blogs: "المدونة",
    contact: "اتصل بنا",
      blogs_paragraph: "ادخل منطقة ريدبيري—ركنك المفضل للإلهام الشهي، ونصائح العافية، وحيل المطبخ الذكية من عالم الفواكه والخضروات المجمدة. سواء كنت تخلط عصيرًا مليئًا بالتوت، أو تُعد وجبة مغذية بسرعة، أو كنت فضوليًا بشأن ما في مجمدك، فلدينا محتوى طازج يبقي الأمور باردة وممتعة.",
      blog_title_1: "من الممر المجمد إلى ملف النكهة",
      blog_title_2: "مجمّد طبيعي، أفكار طازجة ومبهرة",
      blog_title_3: "قصص صغيرة، نكهة مجمدة كبيرة",
      blog_title_4: "الحياة الصحية تبدأ من الفريزر",
      blog_title_5: "قراءات منعشة لعشاق الطعام",
      read_more_btn: "اقرأ المزيد",
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
