/* ═══════════════════════════════════════════════════════════════
   NATEX × BBL — Bilingual engine (EN primary / AR secondary, RTL)
   Strategy: text-node dictionary swap + selector overrides for
   rich-markup blocks. Original EN content is cached for restore.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Simple text-node dictionary (normalized EN → AR) ────── */
  var DICT = {
    /* nav + global */
    'Home': 'الرئيسية',
    'About': 'من نحن',
    'Products': 'المنتجات',
    'Technology': 'التقنية',
    'Franchise': 'الامتياز',
    'Contact': 'اتصل بنا',
    'Get in Touch': 'تواصل معنا',
    'Explore': 'استكشف',
    'Explore Products': 'استكشف المنتجات',
    'See the Technology': 'شاهد التقنية',
    'View All 45+ Products': 'عرض جميع المنتجات (+45)',
    'View Products': 'عرض المنتجات',
    'View line': 'عرض الخط',
    'Learn Our Story': 'اعرف قصتنا',
    'Franchise Enquiry': 'طلب امتياز تجاري',
    'Franchise Prospectus': 'ملف الامتياز التجاري',
    'Request Franchise Prospectus': 'اطلب ملف الامتياز',
    'Enquire Now': 'استفسر الآن',
    'Contact Us': 'اتصل بنا',
    'See How It Works': 'شاهد كيف تعمل',
    'Explore the Technology': 'استكشف التقنية',
    'See DVM Technology': 'شاهد تقنية ماكينات التعبئة',
    'Send Message': 'إرسال الرسالة',
    'Scroll': 'مرّر للأسفل',

    /* footer */
    'Product Lines': 'خطوط المنتجات',
    'Refill Technology': 'تقنية إعادة التعبئة',
    'Franchise & B2B': 'الامتياز والتوريد للشركات',
    'About Natex': 'عن ناتكس',
    'bubbleeg.store — shop online': 'bubbleeg.store — تسوّق أونلاين',

    /* shared eyebrows / labels */
    'Our Story': 'قصتنا',
    'Product Portfolio': 'محفظة المنتجات',
    'Beyond Basic Labs · by Natex Group': 'بيوند بيسك لابز · من مجموعة ناتكس',
    'Beyond Basic Labs · Brand Portfolio': 'بيوند بيسك لابز · محفظة العلامة',
    'The Packaging Penalty': 'غرامة العبوة',
    'Tank capacity': 'سعة الخزان',
    'Tank Capacity': 'سعة الخزان',
    'Precision': 'دقة التعبئة',
    'Refill time': 'زمن التعبئة',
    'Refill Time': 'زمن التعبئة',
    'Per station': 'لكل محطة',
    'BBL Stations': 'محطات BBL',
    'IoT Network Live': 'شبكة إنترنت الأشياء تعمل',
    'Network Live': 'الشبكة تعمل',
    'Active': 'تعمل الآن',
    'Products · 6 lines': 'منتجًا · 6 خطوط',
    'Cheaper per litre': 'أوفر لكل لتر',
    'Social followers': 'متابع على السوشيال',

    /* marquee fragments */
    '— beyond basic labs': '— بيوند بيسك لابز',
    'Refill. Save. Repeat.': 'أعِد التعبئة. وفّر. كرّر.',
    'Pay for the product, not the packaging': 'ادفع ثمن المنتج، لا ثمن العبوة',
    '45+ products · 6 lines': 'أكثر من 45 منتجًا · 6 خطوط',
    '#1 eco-refill brand in Egypt': 'العلامة الأولى في إعادة التعبئة الصديقة للبيئة في مصر',
    'Save up to 30% per litre': 'وفّر حتى 30% لكل لتر',
    'Laundry Gel': 'جل الغسيل',
    'Fabric Softener': 'منعّم الأقمشة',
    'Dishwashing': 'غسيل الأطباق',
    'Ninja Concentrates': 'مركّزات نينجا',
    'OxiActive Stain Removal': 'مزيل البقع أوكسي أكتيف',
    'Hand Wash': 'غسول اليدين',
    'Air Care': 'معطرات الجو',

    /* home sections */
    'Refill in under 60 seconds.': 'أعِد التعبئة في أقل من 60 ثانية.',
    '45+ products, all refillable': 'أكثر من 45 منتجًا قابلًا لإعادة التعبئة',
    '45+ products across 6 lines': 'أكثر من 45 منتجًا عبر 6 خطوط',
    'IoT-enabled DVM network': 'شبكة ماكينات ذكية متصلة بإنترنت الأشياء',
    'National franchise expansion 2026': 'توسّع وطني بنظام الامتياز 2026',
    'Everyday Home Care': 'العناية المنزلية اليومية',
    'Concentrated Performance': 'أداء مركّز',
    'Fabric Stain Treatment': 'معالجة بقع الأقمشة',
    'Personal Care': 'العناية الشخصية',
    'Fabric & Air Care': 'عناية الأقمشة والجو',
    'Household Essentials': 'أساسيات المنزل',
    'The foundational range. Reliable, effective, everyday cleaning for the whole home.': 'الخط الأساسي: تنظيف يومي موثوق وفعّال للمنزل كله.',
    '3–5× more concentrated than conventional products. More power, less waste.': 'تركيز أعلى 3–5 مرات من المنتجات التقليدية. قوة أكبر وهدر أقل.',
    'OxiActive formula engineered for Egyptian fabrics and washing conditions.': 'تركيبة أوكسي أكتيف مصممة للأقمشة المصرية وظروف الغسيل المحلية.',
    'Gentle yet effective personal care with skin-friendly formulas.': 'عناية شخصية لطيفة وفعّالة بتركيبات صديقة للبشرة.',
    'Keep fabrics fresh between washes with long-lasting room scent.': 'انتعاش يدوم للأقمشة بين الغسلات وعطر طويل الأمد للغرف.',
    'The practical essentials that complete your cleaning routine.': 'الأساسيات العملية التي تُكمل روتين التنظيف لديك.',
    'Refill & Save with DVM': 'أعِد التعبئة ووفّر مع ماكينات DVM',
    'Ready to partner': 'جاهز للشراكة',
    'with Natex?': 'مع ناتكس؟',
    'Contact our business development team today.': 'تواصل مع فريق تطوير الأعمال لدينا اليوم.',

    /* technology */
    'BBL DVM Technology': 'تقنية ماكينات BBL الذكية',
    '400L Capacity': 'سعة 400 لتر',
    '±1% Precision': 'دقة ±1%',
    'IoT Monitored': 'مراقبة عبر إنترنت الأشياء',
    'No App Needed': 'بدون تطبيق',
    'How It Works': 'كيف تعمل',
    'The Problem': 'المشكلة',
    'Technical Specifications': 'المواصفات الفنية',
    'The Bigger Picture': 'الصورة الأكبر',
    'Station Locations': 'مواقع المحطات',
    'Dimensions': 'الأبعاد',
    'Capacity': 'السعة',
    'Connectivity': 'الاتصال',
    'Dispensing Accuracy': 'دقة الصرف',
    'Payment': 'الدفع',
    'Interface': 'الواجهة',
    'Footprint': 'المساحة المطلوبة',
    'Average Consumer Savings': 'متوسط توفير المستهلك',
    'Plastic Waste Per Refill': 'نفايات بلاستيكية لكل تعبئة',
    'Bottles Displaced in 2026': 'عبوة سيتم الاستغناء عنها في 2026',
    'New Cairo Station': 'محطة القاهرة الجديدة',
    '1st Settlement Station': 'محطة التجمع الأول',
    'Al-Zaytoun Station': 'محطة الزيتون',
    'New Nozha Station': 'محطة النزهة الجديدة',
    'Want a DVM': 'تريد ماكينة تعبئة',
    'in your location?': 'في موقعك؟',
    'Franchise enquiries welcome — two formats, full support, national expansion underway.': 'نرحب بطلبات الامتياز — نموذجان، دعم كامل، وتوسّع وطني جارٍ.',

    /* about */
    'Who We Are': 'من نحن',
    'Mission': 'رسالتنا',
    'Vision': 'رؤيتنا',
    'Key Milestones': 'محطات رئيسية',
    'Our Values': 'قيمنا',
    'The Question': 'السؤال',
    'The Formula': 'التركيبة',
    'The Technology': 'التقنية',
    'The Network': 'الشبكة',
    '2026 — Now': '2026 — الآن',
    'SKUs across 6 product lines': 'منتجًا عبر 6 خطوط إنتاج',
    'Retail branches in Cairo': 'فروع بيع في القاهرة',
    'Social media followers': 'متابع على وسائل التواصل',
    'National franchise expansion': 'توسّع وطني بنظام الامتياز',
    'Eco-friendly refill service in Egypt': 'خدمة إعادة التعبئة الصديقة للبيئة في مصر',
    'Quality First': 'الجودة أولًا',
    'Radical Value': 'قيمة حقيقية',
    'Built for Egypt': 'صُنع لمصر',
    'Sustainability with Substance': 'استدامة بمضمون',
    'Ready to see': 'جاهز لاستكشاف',
    'the products?': 'المنتجات؟',
    'Explore the full BBL portfolio — 45+ SKUs across 6 product lines.': 'استكشف محفظة BBL الكاملة — أكثر من 45 منتجًا عبر 6 خطوط.',

    /* products */
    'Basics': 'بيسكس',
    'Ninja': 'نينجا',
    'OxiActive': 'أوكسي أكتيف',
    'Calma': 'كالما',
    'Fresh': 'فريش',
    'BBL Home': 'BBL هوم',
    'Why BBL?': 'لماذا BBL؟',
    'Why BBL': 'لماذا BBL',
    'The foundational range': 'الخط الأساسي',
    '3–5× more concentrated': 'تركيز أعلى 3–5 مرات',
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

    /* franchise */
    'The Opportunity': 'الفرصة',
    'Franchise Formats': 'نماذج الامتياز',
    'B2B / Bulk Supply': 'توريد بالجملة للشركات',
    'Why Partner with Natex': 'لماذا الشراكة مع ناتكس',
    'Ideal For': 'مثالي لـ',
    'What You Get': 'ماذا تحصل عليه',
    'Min. floor area: 4–12 sqm': 'الحد الأدنى للمساحة: 4–12 م²',
    'Min. floor area: 2 sqm': 'الحد الأدنى للمساحة: 2 م²',
    'Ready to start?': 'جاهز للبدء؟',
    'Email': 'البريد الإلكتروني',
    'Phone': 'الهاتف',
    'Corporate Site': 'الموقع المؤسسي',
    'Consumer Store': 'المتجر الإلكتروني',
    'We Own the Supply Chain': 'نمتلك سلسلة التوريد',
    'We Own the Technology': 'نمتلك التقنية',
    "We're Scaling Fast": 'نتوسّع بسرعة',
    'Complete Partner Support': 'دعم كامل للشركاء',
    'Bulk Containers': 'عبوات الجملة',
    'Custom & Private Label': 'علامات خاصة حسب الطلب',
    'Volume Pricing': 'تسعير حسب الكمية',
    'Dedicated Account Management': 'إدارة حساب مخصصة',

    /* contact */
    'What brings you here?': 'ما الذي جاء بك إلينا؟',
    'Direct Contact': 'تواصل مباشر',
    'Active Locations': 'المواقع العاملة',
    'Follow BBL': 'تابع BBL',
    'New Cairo': 'القاهرة الجديدة',
    '1st Settlement': 'التجمع الأول',
    'Al-Zaytoun': 'الزيتون',
    'New Nozha': 'النزهة الجديدة',
    'Send us a message': 'أرسل لنا رسالة',
    'We respond to all enquiries within one business day.': 'نرد على جميع الاستفسارات خلال يوم عمل واحد.',
    'First Name': 'الاسم الأول',
    'Last Name': 'اسم العائلة',
    'Email Address': 'البريد الإلكتروني',
    'Phone Number': 'رقم الهاتف',
    'Topic': 'الموضوع',
    'Select a topic': 'اختر الموضوع',
    'Company / Organisation': 'الشركة / الجهة',
    'Message': 'الرسالة',
    'DVM / Technology': 'الماكينات / التقنية',
    'Products & Orders': 'المنتجات والطلبات',
    'Press & Media': 'الصحافة والإعلام',
    'Something Else': 'موضوع آخر',
    'Other': 'أخرى',
    'Start here →': 'ابدأ من هنا ←',
    '40,000+ followers across social. Join the community.': 'أكثر من 40,000 متابع. انضم إلى مجتمعنا.'
  };

  /* ── Rich-markup overrides (innerHTML swaps) ─────────────── */
  var OVERRIDES = [
    /* home */
    { sel: '.hero h1.w-rise', ar: 'أنظف. أذكى.<br>أسرع.' },
    { sel: '.hero-sub', ar: 'العلامة المصرية الرائدة في منتجات التنظيف القابلة لإعادة التعبئة. صُممت للبيوت المصرية، وموزّعة عبر <strong style="color:#fff;">أكثر من 20 محطة BBL</strong> — أعِد التعبئة في أقل من 60 ثانية.' },
    { sel: 'section[aria-label="Brand story"] h2.display', ar: 'وُجدنا لكسر <span class="hl-mark">غرامة العبوة.</span>' },
    { sel: 'section[aria-label="Brand story"] .lead', ar: 'ناتكس شركة مصرية لتصنيع السلع الاستهلاكية، متخصصة في العناية المنزلية والشخصية وأساسيات البيت. نحن صُنّاع <strong>BBL — بيوند بيسك لابز</strong> — العلامة المصرية الرائدة في التنظيف القابل لإعادة التعبئة.' },
    { sel: '.penalty-panel p', ar: 'حتى 30% مما تدفعه في زجاجة المنظف يذهب ثمنًا للعبوة البلاستيكية — لا للمنتج بداخلها. بنت ناتكس نظامًا أذكى لإلغاء هذه الغرامة نهائيًا.' },
    { sel: 'section[aria-label="Product lines"] h2.display', ar: 'علامة واحدة. ستة خطوط.<br><span class="t-outline-dark">نظافة متكاملة.</span>' },
    { sel: '.dvm-teaser-grid h2.display, section[aria-label="Refill technology"] h2.display', ar: 'توقّف عن شراء العبوات.<br><span class="t-grad">وابدأ بشراء المنتج.</span>' },
    { sel: 'section[aria-label="Refill technology"] .lead', ar: 'ماكينات التعبئة الذكية (DVM) هي محطات إعادة تعبئة متصلة بإنترنت الأشياء. أحضر عبوتك، عبّئ بدقة ±1%، ووفّر حتى 30% لكل لتر.' },
    { sel: 'section[aria-label="Franchise opportunity"] h2.display', ar: 'امتلك محطة BBL. <span class="hl-mark">وابنِ مشروعًا قائمًا على إعادة التعبئة.</span>' },
    { sel: 'section[aria-label="Franchise opportunity"] .lead', ar: 'نموذجان للامتياز التجاري، وتوريد بالجملة للشركات، وتوسّع وطني جارٍ في 2026. انضم مبكرًا.' },

    /* technology */
    { sel: '.tech-hero h1.w-rise', ar: 'توقّف عن شراء العبوات.<br>وابدأ بشراء المنتج.' },
    { sel: '.tech-hero .lead', ar: 'محطات إعادة تعبئة ذكية متصلة بإنترنت الأشياء. دقة صرف ±1%. أرخص حتى 30% لكل لتر. صفر نفايات بلاستيكية. بدون أي تطبيق.' },
    { sel: 'section[aria-label="The packaging penalty"] h2.display', ar: 'كل زجاجة جديدة تكلفك حتى <span class="hl-mark">30% أكثر</span> مما يجب.' },
    { sel: '.hiw-sticky h2.display', ar: 'أعِد التعبئة في خمس خطوات. <span class="t-grad">بدون تعقيد.</span>' },
    { sel: 'section[aria-label="Technical specifications"] h2.display', ar: 'صُممت للدقة.<br><span class="t-outline-dark">وبُنيت للتوسع.</span>' },
    { sel: 'section[aria-label="Sustainability impact"] h2.display', ar: 'استدامة <span class="hl-mark">منطقية اقتصاديًا.</span>' },
    { sel: 'section[aria-label="Station locations"] h2.display', ar: 'اعثر على أقرب ماكينة BBL <span class="t-grad">إليك.</span>' },

    /* about */
    { sel: '.page-hero h1.w-rise', page: 'about', ar: 'نصنع الأساسيات التي تعتمد عليها يوميًا —<br>ونعيد ابتكار طريقة حصولك عليها.' },
    { sel: 'section[aria-label="Who we are"] h2.display', ar: 'عند تقاطع السلع الاستهلاكية وابتكار التجزئة <span class="hl-mark">والتقنية الذكية.</span>' },
    { sel: 'section[aria-label="Our story"] h2.display', ar: 'كيف بدأت BBL.' },
    { sel: 'section[aria-label="Key milestones"] h2.display', ar: 'أين تقف BBL <span class="hl-mark">اليوم.</span>' },
    { sel: 'section[aria-label="Our values"] h2.display', ar: 'ما الذي نؤمن به.' },

    /* products */
    { sel: '.page-hero h1.w-rise', page: 'products', ar: 'علامة واحدة. ستة خطوط. نظافة متكاملة.' },
    { sel: '.page-hero .lead', page: 'products', ar: 'تغطي BBL من ناتكس كل شيء من سلة الغسيل إلى حوض المطبخ. أكثر من 45 منتجًا عبر ستة خطوط، جميعها مصممة للبيوت المصرية.' },
    { sel: 'section[aria-label="Why buy BBL"] h2.display', ar: 'لماذا تشتري <span class="t-grad">BBL؟</span>' },

    /* franchise */
    { sel: '.page-hero h1.w-rise', page: 'franchise', ar: 'امتلك محطة BBL. وابنِ مشروعًا يعمل بإعادة التعبئة.' },
    { sel: '.page-hero .lead', page: 'franchise', ar: 'سوق العناية المنزلية المصري ضخم وغير مُشبع وجاهز للتغيير. نموذجان للامتياز. دعم كامل لسلسلة التوريد. توسّع وطني في 2026.' },
    { sel: 'section[aria-label="The opportunity"] h2.display', ar: 'سوق جاهز للتغيير. <span class="hl-mark">وعلامة جاهزة لاقتناصه.</span>' },
    { sel: 'section[aria-label="Franchise formats"] h2.display', ar: 'نموذجان. علامة واحدة.<br><span class="t-outline-dark">مشروعك أنت.</span>' },
    { sel: 'section[aria-label="B2B bulk supply"] h2.display', ar: 'توريد مباشر بالجملة <span class="t-grad">لعملاء الأعمال.</span>' },
    { sel: 'section[aria-label="Why partner with Natex"] h2.display', ar: 'أربعة أسباب <span class="hl-mark">للانضمام مبكرًا.</span>' },

    /* contact */
    { sel: '.page-hero h1.w-rise', page: 'contact', ar: 'لنتحدث.<br>نحن جاهزون للنمو.' },
    { sel: '.page-hero .lead', page: 'contact', ar: 'استفسارات الامتياز، التوريد للشركات، الصحافة، أو أي سؤال — فريقنا جاهز. نرد خلال يوم عمل واحد.' },
    { sel: 'section[aria-label="Choose a topic"] h2.display', ar: 'تصل إلى الفريق الصحيح، <span class="hl-mark">بسرعة.</span>' }
  ];

  var current = 'en';
  var textNodes = [];   /* {node, en} */
  var doneOverrides = []; /* {el, en} */

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

  /* swap the franchise pitch-deck link to the matching language version */
  function swapDeckLinks(toAr) {
    var sel = toAr ? 'a[href="franchise-pitch-deck.html"]' : 'a[href="franchise-pitch-deck-ar.html"]';
    var to = toAr ? 'franchise-pitch-deck-ar.html' : 'franchise-pitch-deck.html';
    document.querySelectorAll(sel).forEach(function (a) { a.setAttribute('href', to); });
  }

  function applyAr() {
    /* rich overrides first (their text nodes will be replaced anyway) */
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
        n.nodeValue = n.nodeValue.replace(key.length ? n.nodeValue.trim() : n.nodeValue, DICT[key]);
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
