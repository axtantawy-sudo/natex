/* ═══════════════════════════════════════════════════════════════
   NATEX × BBL — Bilingual engine v3 (EN/AR, 3-page version)
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var DICT = {
    'Home': 'الرئيسية',
    'Products': 'المنتجات',
    'Franchise': 'الامتياز',
    'Get in Touch': 'تواصل معنا',
    'Explore Products': 'استكشف المنتجات',
    'Shop Online': 'تسوّق أونلاين',
    'View All 45+ Products': 'عرض جميع المنتجات (+45)',
    'View Products': 'عرض المنتجات',
    'View line': 'عرض الخط',
    'Franchise Info': 'معلومات الامتياز',
    'Learn More': 'اعرف المزيد',
    'Enquire': 'استفسر',
    'Send Message': 'إرسال الرسالة',
    'Scroll': 'مرّر للأسفل',
    'Explore': 'استكشف',
    'Product Lines': 'خطوط المنتجات',
    'Franchise & B2B': 'الامتياز والتوريد للشركات',
    'bubbleeg.store': 'bubbleeg.store',
    'Beyond Basic Labs · by Natex Group': 'بيوند بيسك لابز · من مجموعة ناتكس',
    'Beyond Basic Labs · Brand Portfolio': 'بيوند بيسك لابز · محفظة العلامة',
    'Who We Are': 'من نحن',
    'Product Portfolio': 'محفظة المنتجات',
    'Refill Technology': 'تقنية إعادة التعبئة',
    'The Packaging Penalty': 'غرامة العبوة',
    'Tank capacity': 'سعة الخزان',
    'Precision': 'دقة التعبئة',
    'Refill time': 'زمن التعبئة',
    'Products · 6 lines': 'منتجًا · 6 خطوط',
    'Cheaper per litre': 'أوفر لكل لتر',
    'Branches in Cairo': 'فروع في القاهرة',
    '45+ products across 6 lines': 'أكثر من 45 منتجًا عبر 6 خطوط',
    'IoT-enabled DVM network': 'شبكة ماكينات ذكية متصلة بإنترنت الأشياء',
    'National franchise expansion 2026': 'توسّع وطني بنظام الامتياز 2026',
    'Everyday Home Care': 'العناية المنزلية اليومية',
    'Concentrated Performance': 'أداء مركّز',
    'Fabric Stain Treatment': 'معالجة بقع الأقمشة',
    'Personal Care': 'العناية الشخصية',
    'Fabric & Air Care': 'عناية الأقمشة والجو',
    'Household Essentials': 'أساسيات المنزل',
    'Basics': 'بيسكس',
    'Ninja': 'نينجا',
    'OxiActive': 'أوكسي أكتيف',
    'Calma': 'كالما',
    'Fresh': 'فريش',
    'BBL Home': 'BBL هوم',
    'Why BBL?': 'لماذا BBL؟',
    'Why BBL': 'لماذا BBL',
    'The foundational range': 'الخط الأساسي',
    '3-5x more concentrated': 'تركيز أعلى 3–5 مرات',
    'OxiActive Formula': 'تركيبة أوكسي أكتيف',
    'Skin-friendly formulas': 'تركيبات صديقة للبشرة',
    'Long-lasting freshness': 'انتعاش يدوم طويلًا',
    'The practical essentials': 'الأساسيات العملية',
    'Refill Available': 'متاح إعادة التعبئة',
    'In Store': 'في المتجر',
    'In Store & Online': 'في المتجر وأونلاين',
    'daily household use': 'استخدام منزلي يومي',
    'family homes': 'بيوت العائلات',
    'apartments': 'الشقق',
    'savvy consumers': 'مستهلكون أذكياء',
    'small apartments': 'شقق صغيرة',
    'heavy-use households': 'استخدام مكثف',
    'families with children': 'عائلات لديها أطفال',
    'sportswear': 'الملابس الرياضية',
    'whites': 'الملابس البيضاء',
    'bathrooms': 'الحمّامات',
    'guest spaces': 'أماكن الضيوف',
    'personal hygiene': 'النظافة الشخصية',
    'wardrobes': 'خزائن الملابس',
    'living rooms': 'غرف المعيشة',
    'cars': 'السيارات',
    'kitchen': 'المطبخ',
    'home organization': 'تنظيم المنزل',
    'The Opportunity': 'الفرصة',
    'Franchise Formats': 'نماذج الامتياز',
    'B2B / Bulk Supply': 'توريد بالجملة للشركات',
    'Ideal For': 'مثالي لـ',
    'What You Get': 'ماذا تحصل عليه',
    'Min. area: 4-12 sqm': 'الحد الأدنى: 4–12 م²',
    'Min. area: 2 sqm': 'الحد الأدنى: 2 م²',
    'Ready to start?': 'جاهز للبدء؟',
    'Ready to partner': 'جاهز للشراكة',
    'with Natex?': 'مع ناتكس؟',
    'Email': 'البريد الإلكتروني',
    'Phone': 'الهاتف',
    'Corporate Site': 'الموقع المؤسسي',
    'Online Store': 'المتجر الإلكتروني',
    'Name': 'الاسم',
    'Topic': 'الموضوع',
    'Select a topic': 'اختر الموضوع',
    'Company': 'الشركة',
    'Message': 'الرسالة',
    'General': 'عام',
    'General Enquiry': 'استفسار عام',
    'Full BBL Store Franchise': 'امتياز متجر BBL كامل',
    'Refill Partition Franchise': 'امتياز محطة التعبئة',
    'Franchise Enquiry': 'طلب امتياز تجاري',
    'Products & Orders': 'المنتجات والطلبات',
    'Send us a message': 'أرسل لنا رسالة',
    'Bulk Containers': 'عبوات الجملة',
    'Custom & Private Label': 'علامات خاصة حسب الطلب',
    'Volume Pricing': 'تسعير حسب الكمية',
    'Dedicated Account Management': 'إدارة حساب مخصصة',
    'View Pitch Deck': 'عرض ملف العرض',
    'See It In Action': 'شاهدها أثناء العمل',
    'Refill in under 60 seconds. Save up to 30%.': 'أعِد التعبئة في أقل من 60 ثانية. وفّر حتى 30%.',
    'Connected': 'متصلة'
  };

  var OVERRIDES = [
    { sel: '.hero h1.w-rise', ar: 'أنظف. أذكى.<br>أوفر.' },
    { sel: '.hero-sub', ar: 'العلامة المصرية للتنظيف القابل لإعادة التعبئة. أكثر من 45 منتجًا صُممت للبيوت المصرية، وموزّعة عبر <strong style="color:#fff;">أكثر من 20 محطة BBL</strong>.' },
    { sel: 'section[aria-label="Brand story"] h2.display', ar: 'وُجدنا لكسر <span class="hl-mark">غرامة العبوة.</span>' },
    { sel: 'section[aria-label="Product lines"] h2.display', ar: 'علامة واحدة. ستة خطوط.<br><span class="t-outline-dark">نظافة متكاملة.</span>' },
    { sel: 'section[aria-label="Refill technology"] h2.display', ar: 'توقّف عن شراء العبوات.<br><span class="t-grad">وابدأ بشراء المنتج.</span>' },
    { sel: 'section[aria-label="Franchise opportunity"] h2.display', ar: 'امتلك محطة BBL. <span class="hl-mark">وابنِ مشروعًا قائمًا على إعادة التعبئة.</span>' },
    { sel: '.page-hero h1.w-rise', page: 'products', ar: 'علامة واحدة. ستة خطوط. نظافة متكاملة.' },
    { sel: '.page-hero .lead', page: 'products', ar: 'تغطي BBL من ناتكس كل شيء من سلة الغسيل إلى حوض المطبخ. أكثر من 45 منتجًا عبر ستة خطوط.' },
    { sel: 'section[aria-label="Why buy BBL"] h2.display', ar: 'لماذا تشتري <span class="t-grad">BBL؟</span>' },
    { sel: '.page-hero h1.w-rise', page: 'franchise', ar: 'امتلك محطة BBL. وابنِ مشروعًا يعمل بإعادة التعبئة.' },
    { sel: 'section[aria-label="The opportunity"] h2.display', ar: 'سوق جاهز للتغيير. <span class="hl-mark">وعلامة جاهزة لاقتناصه.</span>' },
    { sel: 'section[aria-label="Franchise formats"] h2.display', ar: 'نموذجان. علامة واحدة.<br><span class="t-outline-dark">مشروعك أنت.</span>' },
    { sel: 'section[aria-label="B2B bulk supply"] h2.display', ar: 'توريد مباشر بالجملة <span class="t-grad">لعملاء الأعمال.</span>' }
  ];

  var current = 'en';
  var textNodes = [];
  var doneOverrides = [];

  function collectTextNodes() {
    textNodes = [];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
        if (p.closest('[data-no-i18n]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = walker.nextNode())) textNodes.push(n);
  }

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  function swapDeckLinks(toAr) {
    var sel = toAr ? 'a[href="franchise-pitch-deck.html"]' : 'a[href="franchise-pitch-deck-ar.html"]';
    var to = toAr ? 'franchise-pitch-deck-ar.html' : 'franchise-pitch-deck.html';
    document.querySelectorAll(sel).forEach(function (a) { a.setAttribute('href', to); });
  }

  function applyAr() {
    var page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
    OVERRIDES.forEach(function (o) {
      if (o.page && o.page !== page) return;
      var el = document.querySelector(o.sel);
      if (!el) return;
      doneOverrides.push({ el: el, en: el.innerHTML });
      el.innerHTML = o.ar;
      el.classList.add('is-in');
    });
    collectTextNodes();
    textNodes.forEach(function (n) {
      var key = norm(n.nodeValue);
      if (DICT[key]) {
        n.__en = n.nodeValue;
        n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), DICT[key]);
      }
    });
    swapDeckLinks(true);
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.body.classList.add('lang-ar');
    var btn = document.querySelector('.nav-lang');
    if (btn) btn.textContent = 'EN';
  }

  function applyEn() {
    textNodes.forEach(function (n) { if (n.__en != null) { n.nodeValue = n.__en; n.__en = null; } });
    doneOverrides.forEach(function (o) { o.el.innerHTML = o.en; });
    doneOverrides = [];
    swapDeckLinks(false);
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.body.classList.remove('lang-ar');
    var btn = document.querySelector('.nav-lang');
    if (btn) btn.textContent = 'AR';
  }

  window.NatexI18n = {
    init: function () {
      var btn = document.querySelector('.nav-lang');
      if (btn) {
        btn.addEventListener('click', function () {
          current = current === 'en' ? 'ar' : 'en';
          try { localStorage.setItem('natex_lang', current); } catch (e) {}
          if (current === 'ar') applyAr(); else applyEn();
        });
      }
      var saved = null;
      try { saved = localStorage.getItem('natex_lang'); } catch (e) {}
      if (saved === 'ar') { current = 'ar'; applyAr(); }
    }
  };
})();
