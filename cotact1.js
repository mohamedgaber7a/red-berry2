
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

    /* about section */
    about_title: "Our story stems from nature.",
    about_paragraph: `From fertile lands watered by the sweat of the earth and the warmth of the sun, the journey of every frozen fruit and vegetable begins at our company. Since our founding, we have been selecting the finest crops from trusted local farms. Some are only harvested hours before being frozen using advanced <span class="highlight">IQF technology</span>, which preserves flavor and nutrition.`,
    quality_subtitle: "Our Values",
    quality_title: "Quality First – Trust Always",
    quality_description: "We believe that quality is non-negotiable. Therefore, our products undergo a strict quality control process:",
    quality_left1: "Field inspection of farms",
    quality_left2: "Meticulous cleaning and sorting of produce",
    quality_right1: "Immediate freezing",
    quality_right2: "Repeated laboratory testing",
    quality_footer: "This approach reflects our commitment to providing a superior quality product that meets the highest international food safety standards.",
    vision_subtitle: "Our Vision",
    vision_title: "Global Taste – Local Impact",
    vision_paragraph:
      "We strive to deliver our products to every home worldwide, transcending borders and seasons. We are committed to excellence in packaging, speedy delivery, and outstanding customer service. We shorten distances and bring everything fresh closer to you, bringing it to your fingertips.",
      innovation_title: "Innovation for the Future",
    innovation_paragraph: `We keep up with the latest strategies to reduce energy consumption in freezing and storage,
    and we work with local sources that support farmers’ development and strengthen the community’s economy.
    We integrate the spirit of ‘sustainability’ into every step, just like agricultural companies that invest in
    dialogue with farmers and consumers.`,
    trust_title: "Partnership that builds trust",

    trust_card1_title: "Trusted Partnership",
    trust_card1_desc: "We are true partners, not just suppliers.",

    trust_card2_title: "<span dir='ltr'>24/7</span> Technical Support",
    trust_card2_desc: "We reply within 12 hours aligned with top global standards.",

    trust_card3_title: "Complete Transparency",
    trust_card3_desc: "You're instantly updated on your order and delivery timeline.",

    trust_card4_title: "No Surprises",
    trust_card4_desc: "We keep you informed for your peace of mind.",
    
    story_text:
      "Ultimately… Our story is one of ambition, beginning with a fresh fruit, frozen in an instant, and delivered to you in all its flavor and color. We love being a part of your day, through a journey that satisfies your taste and well-being, while supporting nature and the local community.",
      
footer_desc:
"Discover the taste of nature preserved at its peak! Our premium frozen vegetables and fruits are harvested fresh, flash-frozen to lock in flavor, nutrients, and vibrant colors. From farm to table, we bring you wholesome goodness with unmatched quality and convenience. Elevate your meals with the essence of nature, anytime, anywhere.",
footer_links_title:  "Quick Links",
footer_about:        "About Us",
footer_products:     "Our Products",
footer_gallery:      "Gallery",
footer_blogs:        "Blogs",
footer_contact:      "Contact Us",
footer_contact_title:"Contacts:",
  },

  ar: {
  },
  ar: {
    /* nav */
    home: "الرئيسية",
    about: "من نحن",
    products: "منتجاتنا",
    gallery: "المعرض",
    blogs: "المدونة",
    contact: "اتصل بنا",

    /* about section */
    about_title: "قصتنا تنبع من الطبيعة.",
    about_paragraph: `من أراضٍ خصبةٍ سُقيت بعرق الأرض ودفء الشمس، تبدأ رحلة كل ثمرة وخضار مجمدة من شركتنا. منذ تأسيسنا، ونحن نختار أجود المحاصيل من المزارع المحلية الموثوقة. بعضها يُحصد قبل ساعات فقط من تجميده باستخدام تقنية <span class="highlight">IQF</span> المتقدمة التي تحفظ النكهة والقيمة الغذائية.`,
    quality_subtitle: "قيمنا",
    quality_title: "الجودة أولاً – الثقة دائماً",
    quality_description: "نؤمن أن الجودة ليست قابلة للتفاوض. لذلك، تخضع منتجاتنا لعملية صارمة من الرقابة على الجودة:",
    quality_left1: "تفتيش المزارع ميدانياً",
    quality_left2: "تنظيف وفرز دقيق للمنتجات",
    quality_right1: "تجميد فوري",
    quality_right2: "اختبارات مخبرية متكررة",
    quality_footer: "يعكس هذا النهج التزامنا بتقديم منتج عالي الجودة يفي بأعلى معايير سلامة الغذاء العالمية.", vision_subtitle: "رؤيتنا",
    vision_title: "نكهة عالمية – تأثير محلي",
    vision_paragraph:
      "نسعى لتوصيل منتجاتنا إلى كل منزل في جميع أنحاء العالم، متجاوزين الحدود والفصول. نحن ملتزمون بالتميز في التعبئة، والتوصيل السريع، وخدمة العملاء المميزة. نقرّب المسافات ونقرب كل ما هو طازج إليك، حتى يصبح في متناول يديك.",
      innovation_title: "الابتكار من أجل المستقبل",
      innovation_paragraph: `نواكب أحدث الاستراتيجيات لتقليل استهلاك الطاقة في التجميد والتخزين،
      ونعمل مع مصادر محلية تدعم تنمية المزارعين وتعزز اقتصاد المجتمع.
      ندمج روح "الاستدامة" في كل خطوة، تمامًا مثل الشركات الزراعية التي تستثمر في الحوار مع المزارعين والمستهلكين.`,
      trust_title: "شراكة تبني الثقة",

      trust_card1_title: "شراكة موثوقة",
      trust_card1_desc: "نحن شركاء حقيقيون، ولسنا مجرد موردين.",
  
      trust_card2_title: "<span dir='ltr'>24/7</span> الدعم الفني",
      trust_card2_desc: "نرد خلال 12 ساعة وفقًا لأعلى المعايير العالمية.",
  
      trust_card3_title: "شفافية كاملة",
      trust_card3_desc: "نُطلعك مباشرة على حالة الطلب وجدول التسليم.",
  
      trust_card4_title: "بدون مفاجآت",
      trust_card4_desc: "نبقيك دائمًا على اطلاع لراحة بالك.",
      story_text:
      "في النهاية… قصتنا هي قصة طموح تبدأ بثمرة طازجة تُجمَّد في لحظة، وتصل إليك بكل نكهتها ولونها. نحب أن نكون جزءًا من يومك عبر رحلة تُرضي ذوقك وصحتك، مع دعم الطبيعة والمجتمع المحلي.",
      
/* ===== داخل translations.ar ===== */
footer_desc:
"اكتشف طعم الطبيعة المحفوظة في ذروتها! يتم حصاد خضرواتنا وفواكهنا المجمدة الممتازة طازجة، وتُجمَّد سريعًا للحفاظ على النكهة، والعناصر الغذائية، والألوان الزاهية. من المزرعة إلى المائدة، نقدم لك طعامًا صحيًا بجودة لا مثيل لها وسهولة فائقة. ارتقِ بوجباتك بجوهر الطبيعة، في أي وقت، ومن أي مكان.",
footer_links_title:  "روابط سريعة",
footer_about:        "من نحن",
footer_products:     "منتجاتنا",
footer_gallery:      "المعرض",
footer_blogs:        "المدونة",
footer_contact:      "اتصل بنا",
footer_contact_title:"معلومات التواصل:",
  
   }
  
};


const burger = document.getElementById('burger');        // الزر
const navMenu = document.querySelector('.main-nav');      // القائمة (باستخدام الـ class)

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');                     // يضيف/يحذف .active
});
