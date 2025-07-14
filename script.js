
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
      el.textContent = translations[lang][key];
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
});const translations = {
  en: {
    /* nav */
    home: "Home",
    about: "About Us",
    products: "Our Products",
    gallery: "Gallery",
    blogs: "Blogs",
    contact: "Contact Us",

    /* hero */
    hero_part1: "Freshly",
    hero_part2: "Frozen",
    hero_part3: "Naturally Vibrant",
    hero_desc:
      "Discover the taste of nature preserved at its peak! Our premium frozen vegetables and fruits are harvested fresh, flash–frozen to lock in flavor, nutrients, and vibrant colors. From farm to table, we bring you wholesome goodness with unmatched quality and convenience. Elevate your meals with the essence of nature, anytime, anywhere.",
    read_more: "Read more",
    contact_us: "Contact Us",

    /* slider cards */
    card_mango: "Mango boosts immunity and supports skin health.",
    card_pomegranate: "Pomegranate is great for the heart and memory.",
    card_molokhia: "Molokhia is rich in nutrients for bones and digestion.",
    card_berries: "Berries are packed with antioxidants and good for the brain.",

    /* about */
    about_title: "About Us",
    about_heading: "Our story stems from nature.",
    about_paragraph: `From fertile lands watered by the sweat of the earth and the warmth of the sun,
      the journey of every frozen fruit and vegetable begins at our company. Since our founding,
      we have been selecting the finest crops from trusted local farms.
      Some are only harvested hours before being frozen using advanced 
      <strong>IQF technology</strong>, which preserves flavor and nutrition.`,
    about_read_more: "Read more",

    /* products section */
    products_heading_line1: "Frozen Goodness,",
    products_heading_line2: "Packed Fresh for You.",
    products_paragraph:
      "Browse our handpicked selection of frozen fruits and vegetables—harvested at peak ripeness and flash-frozen to lock in nutrients and taste.",
    view_all_products: "View All Products",

    /* gallery section */
    gallery_title: "Our Gallery",
    gallery_heading: "Defrost your assumptions— it’s time to rethink frozen food.",
    view_all_gallery: "View All Gallery",
    
    blogs_title: "Blogs",
    blogs_subtitle: "From Farm to Freezer, Stories Unfold.",
    view_all_blogs: "View All Blogs",
    blogs_paragraph: "Step into The Redberry Zone—your go-to corner for flavorful inspiration, wellness tips, and clever kitchen hacks straight from the world of frozen fruits and veggies. Whether you're blending up a berry-packed smoothie, prepping a quick nutritious meal, or just curious about what’s in your freezer, we’ve got the crisp content to keep things cool.",
    /* ===== داخل translations.en ===== */
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
    /* nav */
    home: "الرئيسية",
    about: "من نحن",
    products: "منتجاتنا",
    gallery: "المعرض",
    blogs: "المدونة",
    contact: "اتصل بنا",

    /* hero */
    hero_part1: "طازج",
    hero_part2: "مجمد",
    hero_part3: "بشكل طبيعي ومشرق",
    hero_desc:
      "اكتشف طعم الطبيعة المحفوظة في ذروتها! يتم حصاد خضرواتنا وفواكهنا المجمدة الممتازة طازجة، وتُجمَّد سريعًا للحفاظ على النكهة، والعناصر الغذائية، والألوان الزاهية. من المزرعة إلى المائدة، نقدم لك طعامًا صحيًا بجودة لا مثيل لها وسهولة فائقة. ارتقِ بوجباتك بجوهر الطبيعة، في أي وقت، ومن أي مكان",
    read_more: "اقرأ المزيد",
    contact_us: "اتصل بنا",

    /* slider cards */
    card_mango: "المانجو تعزز المناعة وتدعم صحة البشرة.",
    card_pomegranate: "الرمان مفيد للقلب والذاكرة.",
    card_molokhia: "الملوخية غنية بالعناصر الغذائية للعظام والهضم.",
    card_berries: "التوت غني بمضادات الأكسدة ومفيد للدماغ.",

    /* about */
    about_title: "من نحن",
    about_heading: "قصتنا تنبع من الطبيعة.",
    about_paragraph: `من أراضٍ خصبة تُروى بعرق الأرض ودفء الشمس، تبدأ رحلة كل فاكهة وخضار مجمد في شركتنا.
      منذ تأسيسنا، ونحن نختار أفضل المحاصيل من مزارع محلية موثوقة.
      ويتم حصاد بعضها قبل ساعات فقط من تجميدها باستخدام 
      <strong>تقنية IQF</strong> المتطورة التي تحافظ على النكهة والقيمة الغذائية.`,
    about_read_more: "اقرأ المزيد",

    /* products section */
    products_heading_line1: "روعة مجمدة،",
    products_heading_line2: "معبأة طازجة من أجلك.",
    products_paragraph:
      "تصفح مجموعتنا المختارة من الفواكه والخضروات المجمدة—المحصودة في ذروة نضجها والمجمدة سريعًا للحفاظ على العناصر الغذائية والطعم.",
    view_all_products: "عرض جميع المنتجات",

    /* gallery section */
    gallery_title: "معرض الصور",
    gallery_heading: "حرّر افتراضاتك — حان وقت إعادة التفكير في الأطعمة المجمدة.",
    view_all_gallery: "عرض كل الصور",
    
    blogs_title: "المدونة",
    blogs_subtitle: "من المزرعة إلى الفريزر، قصص تُروى.",
    view_all_blogs: "عرض كل التدوينات",
    blogs_paragraph: "ادخل إلى منطقة Redberry — ركنك المفضل للإلهام اللذيذ، ونصائح الصحة، والحيل الذكية في المطبخ مباشرة من عالم الفواكه والخضروات المجمدة. سواء كنت تمزج عصيرًا غنيًا بالتوت، أو تحضّر وجبة سريعة مغذية، أو فقط فضوليًا بشأن ما يوجد في الفريزر، نحن نوفر لك محتوى رائعًا ليبقيك دائمًا منتعشًا.",
    
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


    (function () {
    const slides = document.querySelectorAll('#benefit-slider .slide');
    const dotsBox = document.querySelector('#benefit-slider .dots');
    let index = 0, timer;
  
    // إنشاء النقاط
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsBox.appendChild(dot);
    });
  
    const dots = dotsBox.querySelectorAll('.dot');
  
    function goToSlide(i) {
      slides[index].classList.remove('active');
      dots[index].classList.remove('active');
      index = (i + slides.length) % slides.length;
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    }
  
    function nextSlide() {
      goToSlide(index + 1);
    }
  
    function autoPlay() {
      timer = setInterval(nextSlide, 5000);
    }
  
    autoPlay();
  
    const slider = document.getElementById('benefit-slider');
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', autoPlay);
  })();

 const products = [
  /* --- المنتج 1 --- */
  {
    title: "IQF Mango",
    img: "pph1.jpg",
    alt: "IQF Mango",
    specs: [
      { label: "Available shapes", value: "10×10 mm or 20×20 mm slices or cubes", note: "(as per customer request)" },
      { label: "Varieties", value: "Zabidiya • Naomi • Kate", note: "(as per customer request)" },
      { label: "Packaging", value: "800 g / 1 kg / 2.5 kg / 10 kg", note: "(bulk)" },
      { label: "Shelf life", value: "18 months at –18 °C or cooler" },
      { label: "Country of origin", value: "Egypt 🇪🇬" }
    ]
  },

  /* --- المنتج 2 --- */
  {
    title: "IQF Redberry",
    img: "pph2.jpg",
    alt: "IQF Redberry",
    specs: [
      { label: "Available shapes", value: "Whole berries, halved, or diced", note: "(as per customer request)" },
      { label: "Varieties", value: "Red Pearl • Flame", note: "(seasonal)" },
      { label: "Packaging", value: "500 g / 1 kg / 2.5 kg", note: "(bulk or retail)" },
      { label: "Shelf life", value: "18 months at –18 °C or cooler" },
      { label: "Country of origin", value: "Egypt 🇪🇬" }
    ]
  },

  /* --- المنتج 3 --- */
  {
    title: "IQF Strawberry",
    img: "pph3.jpg",
    alt: "IQF Strawberry",
    specs: [
      { label: "Available shapes", value: "Whole, sliced, or diced", note: "(customizable)" },
      { label: "Varieties", value: "Festival • Camarosa" },
      { label: "Packaging", value: "1 kg / 2.5 kg / 5 kg", note: "(bulk only)" },
      { label: "Shelf life", value: "18 months at –18 °C or cooler" },
      { label: "Country of origin", value: "Egypt 🇪🇬" }
    ]
  },

  /* --- المنتج 4: جديد --- */
  {
    title: "IQF Peach",
    img: "pph4.jpg",
    alt: "IQF Peach",
    specs: [
      { label: "Available shapes", value: "Slices or cubes 15×15 mm", note: "(customizable)" },
      { label: "Varieties", value: "Desert • Earligrande" },
      { label: "Packaging", value: "1 kg / 2.5 kg / 10 kg", note: "(bulk)" },
      { label: "Shelf life", value: "24 months at –18 °C or cooler" },
      { label: "Country of origin", value: "Egypt 🇪🇬" }
    ]
  },

  /* --- المنتج 5: جديد --- */
  {
    title: "IQF Guava",
    img: "pph5.jpg",
    alt: "IQF Guava",
    specs: [
      { label: "Available shapes", value: "Chunks 20×20 mm", note: "(seedless)" },
      { label: "Varieties", value: "White • Pink" },
      { label: "Packaging", value: "800 g / 1 kg / 2.5 kg", note: "(bulk or retail)" },
      { label: "Shelf life", value: "18 months at –18 °C or cooler" },
      { label: "Country of origin", value: "Egypt 🇪🇬" }
    ]
  }
];


  const container = document.getElementById("productCards");

  products.forEach(product => {
    const specsList = product.specs.map(spec => {
      const note = spec.note ? ` <em>${spec.note}</em>` : "";
      return `<li><strong>${spec.label}:</strong><br>${spec.value}${note}</li>`;
    }).join("");

    const cardHTML = `
      <article class="card">
        <div class="img-wrapper">
          <img src="${product.img}" alt="${product.alt}">
        </div>
        <h3 class="card-title">${product.title}</h3>
        <ul class="card-info">
          ${specsList}
        </ul>
        <div class="card-actions">
          <a class="btn-outline" href="#">Read more</a>
          <a class="btn-fill" href="#">Contact Us <span>&#8594;</span></a>
        </div>
      </article>
    `;

    container.insertAdjacentHTML("beforeend", cardHTML);
  });
  function scrollLeft() {
    document.querySelector('.slider-container').scrollBy({ left: -400, behavior: 'smooth' });
  }
  function scrollRight() {
    document.querySelector('.slider-container').scrollBy({ left: 400, behavior: 'smooth' });
  }
  
  

const burger = document.getElementById('burger');        // الزر
const navMenu = document.querySelector('.main-nav');      // القائمة (باستخدام الـ class)

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');                     // يضيف/يحذف .active
});
