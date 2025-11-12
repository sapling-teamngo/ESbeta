// نظام الترجمة ثنائي اللغة
const translations = {
    ar: {
        // العناوين
        siteTitle: "احسب ابتسامة أرضك",
        
        // التنقل
        home: "الرئيسية",
        calculator: "الآلة الحاسبة", 
        documentation: "التوثيق",
        
        // الهيرو
        heroTitle: "احسب ابتسامة أرضك",
        heroSubtitle: "آلة حاسبة لمعرفة حجم نظام هلال الحصاد المائي المناسب لأرضك",
        heroDesc: "نظام متكامل يعتمد على معادلات علمية دقيقة لتصميم أنظمة حصاد مياه الأمطار في المناطق الجافة وشبه الجافة",
        getStarted: "ابدأ حساب أرضك",
        learnMore: "تعرف على النظام",
        
        // المميزات
        featuresTitle: "مميزات النظام",
        feature1Title: "معادلات علمية دقيقة",
        feature1Desc: "جميع الحسابات مبنية على أبحاث محكمة ومنشورة في مصادر موثوقة مثل FAO وICARDA",
        feature2Title: "مناسب للأردن والمنطقة", 
        feature2Desc: "مصمم خصيصاً لظروف المناطق الجافة وشبه الجافة في الأردن والشرق الأوسط",
        feature3Title: "وحدات قياس متعددة",
        feature3Desc: "يدعم الهكتار والفدان والدونم والمتر المربع لتلبية احتياجات جميع المستخدمين",
        feature4Title: "رسوم بيانية وتوضيحية",
        feature4Desc: "عرض النتائج برسوم بيانية تفاعلية ورسوم توضيحية للتصميم النهائي",
        
        // كيفية العمل
        howItWorksTitle: "كيف يعمل النظام",
        step1Title: "أدخل البيانات الأساسية",
        step1Desc: "أدخل معدل الأمطار، ميل الأرض، ونوع المحصول",
        step2Title: "اختر وحدة القياس", 
        step2Desc: "اختر وحدة القياس المناسبة (هكتار، فدان، دونم، متر مربع)",
        step3Title: "احصل على التصميم الأمثل",
        step3Desc: "استلم التصميم الكامل مع الرسوم البيانية والتفاصيل",
        
        // الإحصائيات
        stat1: "معادلة علمية",
        stat2: "موقع بحثي", 
        stat3: "نظام تجميع صغير",
        stat4: "مفتوح المصدر",
        
        // الحث على الإجراء
        ctaTitle: "جاهز لبدء التصميم؟",
        ctaDesc: "استخدم أداتنا المتقدمة لتصميم نظام حصاد مياه الأمطار الخاص بك", 
        startDesign: "ابدأ التصميم الآن",
        
        // الفوتر
        footerDesc: "نظام متكامل لتصميم أنظمة حصاد مياه الأمطار",
        links: "روابط سريعة",
        resources: "مصادر", 
        faq: "الأسئلة الشائعة",
        tutorials: "الدروس التعليمية", 
        research: "الأبحاث",
        designedBy: "صمم من قبل عمر ياسين",
        
        // الآلة الحاسبة
        calculatorTitle: "احسب ابتسامة أرضك",
        calculatorSubtitle: "آلة حاسبة لمعرفة حجم نظام هلال الحصاد المائي المناسب لأرضك",
        calculatorDesc: "أدخل بيانات أرضك للحصول على تصميم دقيق ومفصل لنظام حصاد مياه الأمطار",
        basicData: "البيانات الأساسية",
        rainfall: "معدل هطول الأمطار السنوي",
        rainfallHint: "يجب أن يكون بين 50 و 1200 مم/سنة", 
        slope: "ميل الأرض",
        slopeHint: "يجب أن يكون بين 0 و 25%",
        cropType: "نوع المحصول",
        selectCrop: "اختر نوع المحصول",
        olive: "الزيتون (Kc 0.65)",
        pomegranate: "الرمان (Kc 0.75)",
        almond: "اللوز (Kc 0.70)", 
        fig: "التين (Kc 0.60)",
        grape: "العنب (Kc 0.80)",
        atriplex: "القطف (Kc 0.55)",
        juniper: "العرعر (Kc 0.45)",
        thyme: "الزعتر البري (Kc 0.40)",
        sage: "الميرمية (Kc 0.50)",
        barley: "الشعير (Kc 0.85)",
        custom: "قيمة مخصصة",
        customKc: "قيمة Kc مخصصة",
        customKcHint: "معامل المحصول - اختياري (افتراضي 1 إذا لم تدخل قيمة)",
        areaData: "بيانات المساحة", 
        landArea: "مساحة الأرض",
        hectare: "هكتار",
        acre: "فدان",
        dunam: "دونم", 
        squareMeter: "متر مربع",
        soilType: "نوع التربة",
        sandy: "رملية",
        loamy: "طميية", 
        clay: "طينية",
        calculateDesign: "احسب التصميم",
        reset: "إعادة تعيين",
        
        // النتائج
        designResults: "نتائج التصميم",
        saveResults: "حفظ النتائج", 
        printResults: "طباعة النتائج",
        basicDimensions: "الأبعاد الأساسية",
        diameter: "قطر الهلال",
        height: "ارتفاع السد", 
        cultivatedArea: "مساحة الحوض الزراعي",
        spacingAreas: "المسافات",
        rowSpacing: "بين الصفوف",
        pitSpacing: "بين الهلالات", 
        betweenBunds: "المسافة بين الهلالات",
        catchmentArea: "مساحة منطقة التجميع",
        efficiency: "الكفاءة والتكثيف",
        caRatio: "نسبة التجميع إلى الزراعة (C:A)",
        pitsPerHectare: "عدد الهلالات/هكتار", 
        totalPits: "الإجمالي",
        designIllustration: "الرسم التوضيحي للتصميم",
        cultivationArea: "منطقة الزراعة",
        spacingExplanation: "تفسير المسافات والتباعد",
        whySpacing: "لماذا هذه المسافات المحددة؟",
        spacingReason: "تم حساب المسافات بناءً على الأبحاث الميدانية التي أظهرت أن التداخل بنسبة 5-10% بين الهلالات يمنع فقدان مياه الأمطار ويوفر تغطية مثالية للأرض.",
        howCalculated: "كيف تم حساب المسافات؟",
        calculationMethod: "المسافة بين الصفوف (L) = 0.75 × القطر - هذا يضمن تداخلاً رأسيًا يمنع تسرب المياه بين الصفوف.",
        calculationMethod2: "المسافة الأفقية (Y) = 1.10 × القطر - هذا يضمن تداخلاً أفقيًا بنسبة 10% لمنع وجود فجوات.",
        sourcesTitle: "المصادر العلمية",
        visualResults: "النتائج المرئية",
        
        // المعادلات
        eqE1: "E-1",
        eqE2: "E-2", 
        eqE3: "E-3",
        eqE4: "E-4",
        eqE5: "E-5",
        eqE6: "E-6",
        eqE7: "E-7", 
        eqE10: "E-10",

        // التوثيق
        docsDesc: "جميع المعادلات والمصادر والتفاصيل التقنية المستخدمة في تصميم النظام",
        tableOfContents: "جدول المحتويات",
        introduction: "المقدمة",
        equations: "المعادلات الأساسية",
        sources: "المصادر",
        variables: "تعريفات المتغيرات",
        methodology: "منهجية العمل",
        calculations: "شرح الحسابات",
        
        // New translations for charts
        validationData: "بيانات التحقق",
        designCharts: "الرسوم البيانية للتصميم",
        rainfallVsDiameter: "القطر مقابل الأمطار",
        diameterVsHeight: "الارتفاع مقابل القطر",
        catchmentRatios: "نسب التجميع",
        storageCapacity: "سعة التخزين"
    },
    en: {
        // Titles
        siteTitle: "Calculate Your Land's Smile",
        
        // Navigation
        home: "Home",
        calculator: "Calculator",
        documentation: "Documentation",
        
        // Hero
        heroTitle: "Calculate Your Land's Smile",
        heroSubtitle: "Calculator to determine the appropriate crescent water harvesting system size for your land",
        heroDesc: "A comprehensive system based on precise scientific equations for designing rainwater harvesting systems in arid and semi-arid regions",
        getStarted: "Calculate Your Land",
        learnMore: "Learn About System",
        
        // Features
        featuresTitle: "System Features",
        feature1Title: "Accurate Scientific Equations",
        feature1Desc: "All calculations are based on peer-reviewed research published in reliable sources like FAO and ICARDA",
        feature2Title: "Suitable for Jordan and Region",
        feature2Desc: "Specifically designed for arid and semi-arid conditions in Jordan and the Middle East",
        feature3Title: "Multiple Measurement Units",
        feature3Desc: "Supports hectare, acre, dunam, and square meter to meet all users' needs",
        feature4Title: "Charts and Illustrations",
        feature4Desc: "Display results with interactive charts and final design illustrations",
        
        // How it works
        howItWorksTitle: "How the System Works",
        step1Title: "Enter Basic Data",
        step1Desc: "Enter rainfall rate, land slope, and crop type",
        step2Title: "Choose Measurement Unit",
        step2Desc: "Select the appropriate measurement unit (hectare, acre, dunam, square meter)",
        step3Title: "Get Optimal Design",
        step3Desc: "Receive complete design with charts and details",
        
        // Statistics
        stat1: "Scientific Equation",
        stat2: "Research Site",
        stat3: "Micro-catchment System",
        stat4: "Open Source",
        
        // Call to Action
        ctaTitle: "Ready to Start Designing?",
        ctaDesc: "Use our advanced tool to design your rainwater harvesting system",
        startDesign: "Start Designing Now",
        
        // Footer
        footerDesc: "A comprehensive system for designing rainwater harvesting systems",
        links: "Quick Links",
        resources: "Resources",
        faq: "FAQ",
        tutorials: "Tutorials",
        research: "Research",
        designedBy: "Designed by Omar Yaseen",
        
        // Calculator
        calculatorTitle: "Calculate Your Land's Smile",
        calculatorSubtitle: "Calculator to determine the appropriate crescent water harvesting system size for your land",
        calculatorDesc: "Enter your land data to get a precise and detailed rainwater harvesting system design",
        basicData: "Basic Data",
        rainfall: "Annual Rainfall Rate",
        rainfallHint: "Should be between 50 and 1200 mm/year",
        slope: "Land Slope",
        slopeHint: "Should be between 0 and 25%",
        cropType: "Crop Type",
        selectCrop: "Select Crop Type",
        olive: "Olive (Kc 0.65)",
        pomegranate: "Pomegranate (Kc 0.75)",
        almond: "Almond (Kc 0.70)",
        fig: "Fig (Kc 0.60)",
        grape: "Grape (Kc 0.80)",
        atriplex: "Atriplex (Kc 0.55)",
        juniper: "Juniper (Kc 0.45)",
        thyme: "Wild Thyme (Kc 0.40)",
        sage: "Sage (Kc 0.50)",
        barley: "Barley (Kc 0.85)",
        custom: "Custom Value",
        customKc: "Custom Kc Value",
        customKcHint: "Crop coefficient - optional (default 1 if no value entered)",
        areaData: "Area Data",
        landArea: "Land Area",
        hectare: "Hectare",
        acre: "Acre",
        dunam: "Dunam",
        squareMeter: "Square Meter",
        soilType: "Soil Type",
        sandy: "Sandy",
        loamy: "Loamy",
        clay: "Clay",
        calculateDesign: "Calculate Design",
        reset: "Reset",
        
        // Results
        designResults: "Design Results",
        saveResults: "Save Results",
        printResults: "Print Results",
        basicDimensions: "Basic Dimensions",
        diameter: "Half-moon Diameter",
        height: "Bund Height", 
        cultivatedArea: "Cultivation Area",
        spacingAreas: "Spacing",
        rowSpacing: "Between Rows",
        pitSpacing: "Between Crescents", 
        betweenBunds: "Distance Between Bunds",
        catchmentArea: "Catchment Area",
        efficiency: "Efficiency and Density",
        caRatio: "Catchment to Cultivation Ratio (C:A)",
        pitsPerHectare: "Crescents/Hectare", 
        totalPits: "Total",
        designIllustration: "Design Illustration",
        cultivationArea: "Cultivation Area",
        spacingExplanation: "Spacing and Distance Explanation",
        whySpacing: "Why These Specific Distances?",
        spacingReason: "Distances were calculated based on field research that showed 5-10% overlap between crescents prevents rainwater loss and provides optimal land coverage.",
        howCalculated: "How Were Distances Calculated?",
        calculationMethod: "Row spacing (L) = 0.75 × Diameter - This ensures vertical overlap that prevents water leakage between rows.",
        calculationMethod2: "Horizontal spacing (Y) = 1.10 × Diameter - This ensures 10% horizontal overlap to prevent gaps.",
        sourcesTitle: "Scientific Sources",
        visualResults: "Visual Results",
        
        // Equations
        eqE1: "E-1",
        eqE2: "E-2",
        eqE3: "E-3",
        eqE4: "E-4",
        eqE5: "E-5",
        eqE6: "E-6",
        eqE7: "E-7",
        eqE10: "E-10",

        // Documentation
        docsDesc: "All equations, sources and technical details used in system design",
        tableOfContents: "Table of Contents",
        introduction: "Introduction",
        equations: "Basic Equations",
        sources: "Sources",
        variables: "Variable Definitions",
        methodology: "Methodology",
        calculations: "Calculation Explanation",
        
        // New translations for charts
        validationData: "Validation Data",
        designCharts: "Design Charts",
        rainfallVsDiameter: "Diameter vs Rainfall",
        diameterVsHeight: "Height vs Diameter",
        catchmentRatios: "Catchment Ratios",
        storageCapacity: "Storage Capacity"
    }
};

// حالة اللغة الحالية
let currentLang = 'ar';

// وظيفة تغيير اللغة
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage();
    updateDirection();
}

// وظيفة تحديث النصوص
function updateLanguage() {
    console.log('Updating language to:', currentLang);
    
    // تحديث جميع العناصر التي تحتوي على data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // تحديث نص زر اللغة
    const langText = document.getElementById('lang-text');
    if (langText) {
        langText.textContent = currentLang === 'ar' ? 'English' : 'العربية';
    }
    
    // تحديث اتجاه النماذج
    updateFormDirection();
    
    // تحديث عناوين الصفحة
    updatePageTitles();
    
    // تحديث الرسوم البيانية إذا كانت موجودة
    updateChartsLanguage();
}

// تحديث الرسوم البيانية
function updateChartsLanguage() {
    if (window.designChart) {
        const labels = currentLang === 'ar' ? 
            ['القطر (م)', 'الارتفاع (سم)', 'مساحة الزراعة (م²)', 'مساحة التجميع (م²)'] :
            ['Diameter (m)', 'Height (cm)', 'Cultivation Area (m²)', 'Catchment Area (m²)'];
        
        window.designChart.data.labels = labels;
        window.designChart.options.plugins.title.text = currentLang === 'ar' ? 
            'ملخص قيم التصميم' : 'Design Values Summary';
        window.designChart.options.scales.y.title.text = currentLang === 'ar' ? 'القيمة' : 'Value';
        window.designChart.update();
    }
}

// وظيفة تحديث اتجاه الصفحة
function updateDirection() {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
}

// وظيفة تحديث اتجاه النماذج
function updateFormDirection() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr';
        input.style.textAlign = currentLang === 'ar' ? 'right' : 'left';
    });
}

// وظيفة تحديث عناوين الصفحة
function updatePageTitles() {
    const path = window.location.pathname;
    
    if (path.includes('calculator.html')) {
        document.title = currentLang === 'ar' ? 
            "احسب ابتسامة أرضك - الآلة الحاسبة" : 
            "Calculate Your Land's Smile - Calculator";
    } else if (path.includes('docs.html')) {
        document.title = currentLang === 'ar' ? 
            "احسب ابتسامة أرضك - التوثيق" : 
            "Calculate Your Land's Smile - Documentation";
    } else {
        document.title = currentLang === 'ar' ? 
            "احسب ابتسامة أرضك - نظام حصاد مياه الأمطار" : 
            "Calculate Your Land's Smile - Rainwater Harvesting System";
    }
}

// تهيئة القائمة المتنقلة
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// تهيئة السلايدرات
function initSliders() {
    // سلايدر المنطقة المناخية
    const climateSlider = document.getElementById('climate-zone');
    const climateValue = document.getElementById('climate-value');
    const rainfallInfo = document.getElementById('rainfall-info');
    const climateButtons = document.querySelectorAll('.form-section:nth-child(1) .option-btn');
    
    climateSlider.addEventListener('input', function() {
        updateClimateValue(this.value);
    });
    
    climateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            climateSlider.value = value;
            updateClimateValue(value);
            
            // تحديث حالة الأزرار
            climateButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    function updateClimateValue(value) {
        const climateZones = [
            { value: 0, label: 'جافة جداً (&lt; 250 ملم)', rainfall: 'معدل الأمطار السنوي: أقل من 250 ملم' },
            { value: 25, label: 'شبه جافة (250-500 ملم)', rainfall: 'معدل الأمطار السنوي: 250-500 ملم' },
            { value: 50, label: 'جافة (500-750 ملم)', rainfall: 'معدل الأمطار السنوي: 500-750 ملم' },
            { value: 75, label: 'شبه رطبة (750-1000 ملم)', rainfall: 'معدل الأمطار السنوي: 750-1000 ملم' },
            { value: 100, label: 'رطبة (&gt; 1000 ملم)', rainfall: 'معدل الأمطار السنوي: أكثر من 1000 ملم' }
        ];
        
        const closest = climateZones.reduce((prev, curr) => {
            return (Math.abs(curr.value - value) < Math.abs(prev.value - value) ? curr : prev);
        });
        
        climateValue.textContent = closest.label;
        rainfallInfo.textContent = closest.rainfall;
        
        // تحديث حالة الأزرار
        climateButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-value') == closest.value);
        });
    }
    
    // سلايدر الغرض من النظام
    const purposeSlider = document.getElementById('purpose');
    const purposeValue = document.getElementById('purpose-value');
    const purposeButtons = document.querySelectorAll('.form-section:nth-child(2) .option-btn');
    
    purposeSlider.addEventListener('input', function() {
        updatePurposeValue(this.value);
    });
    
    purposeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            purposeSlider.value = value;
            updatePurposeValue(value);
            
            // تحديث حالة الأزرار
            purposeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    function updatePurposeValue(value) {
        const purposes = [
            { value: 0, label: 'الرعي' },
            { value: 25, label: 'الشجيرات' },
            { value: 50, label: 'الأشجار' },
            { value: 75, label: 'النباتات العشبية' },
            { value: 100, label: 'تحسين التربة' }
        ];
        
        const closest = purposes.reduce((prev, curr) => {
            return (Math.abs(curr.value - value) < Math.abs(prev.value - value) ? curr : prev);
        });
        
        purposeValue.textContent = closest.label;
        
        // تحديث حالة الأزرار
        purposeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-value') == closest.value);
        });
    }
    
    // سلايدر ميل الأرض
    const slopeSlider = document.getElementById('slope');
    const slopeValue = document.getElementById('slope-value');
    const slopeButtons = document.querySelectorAll('.form-section:nth-child(3) .option-btn');
    
    slopeSlider.addEventListener('input', function() {
        updateSlopeValue(this.value);
    });
    
    slopeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            slopeSlider.value = value;
            updateSlopeValue(value);
            
            // تحديث حالة الأزرار
            slopeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    function updateSlopeValue(value) {
        slopeValue.textContent = `${value}%`;
        
        // تحديث حالة الأزرار
        slopeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-value') == value);
        });
    }
}

// حساب تصميم حصاد مياه الأمطار (UPDATED EQUATIONS BASED ON SOURCES)
function calculateRainwaterHarvesting(climateValue, purposeValue, slopeValue) {
    // تحويل القيم إلى أرقام
    const climate = parseInt(climateValue);
    const purpose = parseInt(purposeValue);
    const slope = parseInt(slopeValue);
    
    // E-1: حساب القطر بناءً على المنطقة المناخية (معدل الأمطار)
    // بناءً على المصدر: https://www.greener.land/eyebrow-terraces-2/
    // في المناطق الجافة (أمطار أقل) يكون القطر أكبر، وفي المناطق الرطبة (أمطار أكثر) يكون أصغر
    let D;
    
    if (climate <= 25) { // جافة جداً وشبه جافة (< 500 ملم)
        // مناطق جافة: أحجام أكبر (8-12 متر)
        D = 8 + (purpose / 100) * 4;
    } else if (climate <= 75) { // جافة وشبه رطبة (500-1000 ملم)
        // مناطق متوسطة: أحجام متوسطة (6-10 متر)
        D = 6 + (purpose / 100) * 4;
    } else { // رطبة (> 1000 ملم)
        // مناطق رطبة: أحجام أصغر (4-8 متر)
        D = 4 + (purpose / 100) * 4;
    }
    
    // تعديل القطر بناءً على الغرض (بناءً على المصدر)
    // للرعي: أحجام أكبر، لتحسين التربة: أحجام أصغر
    if (purpose <= 25) { // الرعي - أحجام أكبر
        D += 1;
    } else if (purpose >= 75) { // تحسين التربة - أحجام أصغر
        D -= 1;
    }
    
    // ضمان الحدود (2-12 متر) حسب المصدر
    D = Math.max(2, Math.min(12, D));
    
    // E-2: حساب الارتفاع بناءً على القطر (30-50 سم حسب المصدر)
    let H = 30 + 2.5 * (D - 2);
    H = Math.max(30, Math.min(50, H));
    
    // E-3: حساب مساحة الحوض الزراعي (نصف دائرة)
    const A_cult = (Math.PI / 8) * Math.pow(D, 2);
    
    // E-4: حساب المسافة بين الصفوف (تداخل 25% حسب المصدر)
    const L = 0.75 * D;
    
    // E-5: حساب المسافة بين الحفر (تداخل 10% حسب المصدر)
    const Y = 1.10 * D;
    
    // حساب المسافة بين الهلالات
    const betweenBunds = Y - (D / 2);
    
    // E-6: حساب نسبة التجميع إلى الزراعة (C:A) - بناءً على المصدر
    let baseC_A;
    
    // حساب يعتمد على المنطقة المناخية (معدل الأمطار)
    if (climate <= 25) { // جافة جداً وشبه جافة (< 500 ملم)
        baseC_A = 3.0 + (purpose / 100) * 1.0; // نسب أعلى في المناطق الجافة
    } else if (climate <= 75) { // جافة وشبه رطبة (500-1000 ملم)
        baseC_A = 2.2 + (purpose / 100) * 0.8; // نسب متوسطة
    } else { // رطبة (> 1000 ملم)
        baseC_A = 1.6 + (purpose / 100) * 0.6; // نسب أقل في المناطق الرطبة
    }
    
    // تأثير الميل (زيادة 2% لكل 1% ميل حسب المصدر)
    let slopeEffect = 1 + (slope * 0.02);
    
    let C_A = baseC_A * slopeEffect;
    
    // ضمان الحدود المعقولة (1.0-4.0 حسب المصدر)
    C_A = Math.max(1.0, Math.min(4.0, C_A));
    
    // E-7: حساب مساحة منطقة التجميع
    const A_catch = C_A * A_cult;
    
    // E-10: حساب عدد الحفر في الهكتار
    const N_total_per_hectare = 10000 / (L * Y);
    
    // حساب إجمالي عدد الحفر للمساحة المحددة (افتراضي 1 هكتار)
    const total_pits = Math.round(N_total_per_hectare);
    
    return {
        diameter: D,
        height: H,
        cultArea: A_cult,
        rowSpacing: L,
        pitSpacing: Y,
        betweenBunds: betweenBunds,
        catchArea: A_catch,
        caRatio: C_A,
        pitsPerHectare: Math.round(N_total_per_hectare),
        totalPits: total_pits
    };
}

// عرض النتائج
function displayResults(results) {
    // تحديث القيم النصية
    document.getElementById('result-diameter').textContent = `${results.diameter.toFixed(2)} م`;
    document.getElementById('result-height').textContent = `${results.height.toFixed(1)} سم`;
    document.getElementById('result-cult-area').textContent = `${results.cultArea.toFixed(2)} م²`;
    document.getElementById('result-row-spacing').textContent = `${results.rowSpacing.toFixed(2)} م`;
    document.getElementById('result-pit-spacing').textContent = `${results.pitSpacing.toFixed(2)} م`;
    document.getElementById('result-between-bunds').textContent = `${results.betweenBunds.toFixed(2)} م`;
    document.getElementById('result-catch-area').textContent = `${results.catchArea.toFixed(2)} م²`;
    document.getElementById('result-ca-ratio').textContent = `${results.caRatio.toFixed(2)}`;
    document.getElementById('result-pits-per-hectare').textContent = `${results.pitsPerHectare}`;
    document.getElementById('result-total-pits').textContent = `${results.totalPits}`;
    
    // تحديث ملخص النتائج
    document.getElementById('summary-diameter').textContent = `${results.diameter.toFixed(2)} م`;
    document.getElementById('summary-height').textContent = `${results.height.toFixed(1)} سم`;
    document.getElementById('summary-row-spacing').textContent = `${results.rowSpacing.toFixed(2)} م`;
    document.getElementById('summary-pit-spacing').textContent = `${results.pitSpacing.toFixed(2)} م`;
    document.getElementById('summary-pits-hectare').textContent = `${results.pitsPerHectare}`;
    document.getElementById('summary-total-pits').textContent = `${results.totalPits}`;
    
    // إنشاء الرسوم البيانية
    createCharts(results);
    
    // إظهار لوحة النتائج
    document.getElementById('results-panel').style.display = 'block';
    
    // التمرير إلى النتائج على الهواتف
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            document.getElementById('results-panel').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 300);
    }
}

// إنشاء الرسوم البيانية
function createCharts(results) {
    const ctx = document.getElementById('design-chart');
    if (!ctx) return;
    
    const ctx2d = ctx.getContext('2d');
    
    // تدمير الرسم البياني السابق إذا كان موجوداً
    if (window.designChart) {
        window.designChart.destroy();
    }
    
    const labels = currentLang === 'ar' ? 
        ['القطر (م)', 'الارتفاع (سم)', 'مساحة الزراعة (م²)', 'مساحة التجميع (م²)'] :
        ['Diameter (m)', 'Height (cm)', 'Cultivation Area (m²)', 'Catchment Area (m²)'];
    
    window.designChart = new Chart(ctx2d, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLang === 'ar' ? 'قيم التصميم' : 'Design Values',
                data: [
                    results.diameter,
                    results.height,
                    results.cultArea,
                    results.catchArea
                ],
                backgroundColor: [
                    '#4caf50',
                    '#2196f3',
                    '#ff9800',
                    '#9c27b0'
                ],
                borderColor: [
                    '#388e3c',
                    '#1976d2',
                    '#f57c00',
                    '#7b1fa2'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: currentLang === 'ar' ? 'القيمة' : 'Value',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: currentLang === 'ar' ? 'ملخص قيم التصميم' : 'Design Values Summary',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        }
    });
}

// حفظ النتائج
function saveResults() {
    const results = {
        diameter: document.getElementById('result-diameter').textContent,
        height: document.getElementById('result-height').textContent,
        cultArea: document.getElementById('result-cult-area').textContent,
        rowSpacing: document.getElementById('result-row-spacing').textContent,
        pitSpacing: document.getElementById('result-pit-spacing').textContent,
        betweenBunds: document.getElementById('result-between-bunds').textContent,
        catchArea: document.getElementById('result-catch-area').textContent,
        caRatio: document.getElementById('result-ca-ratio').textContent,
        pitsPerHectare: document.getElementById('result-pits-per-hectare').textContent,
        totalPits: document.getElementById('result-total-pits').textContent
    };
    
    const resultsText = currentLang === 'ar' ? `
نتائج تصميم نظام حصاد مياه الأمطار - احسب ابتسامة أرضك
==================================================
قطر الهلال (D): ${results.diameter}
ارتفاع السد (H): ${results.height}
مساحة الحوض الزراعي: ${results.cultArea}
المسافة بين الصفوف (L): ${results.rowSpacing}
المسافة بين الحفر (Y): ${results.pitSpacing}
المسافة بين الهلالات: ${results.betweenBunds}
مساحة منطقة التجميع: ${results.catchArea}
نسبة التجميع إلى الزراعة (C:A): ${results.caRatio}
عدد الحفر في الهكتار: ${results.pitsPerHectare}
إجمالي عدد الحفر: ${results.totalPits}

صمم من قبل عمر ياسين - 2025
    ` : `
Rainwater Harvesting Design Results - Calculate Your Land's Smile
==================================================
Half-moon Diameter (D): ${results.diameter}
Bund Height (H): ${results.height}
Cultivation Area: ${results.cultArea}
Row Spacing (L): ${results.rowSpacing}
Pit Spacing (Y): ${results.pitSpacing}
Distance Between Bunds: ${results.betweenBunds}
Catchment Area: ${results.catchArea}
Catchment to Cultivation Ratio (C:A): ${results.caRatio}
Pits per Hectare: ${results.pitsPerHectare}
Total Pits: ${results.totalPits}

Designed by Omar Yaseen - 2025
    `;
    
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentLang === 'ar' ? 'نتائج_تصميم_حصاد_المياه.txt' : 'rainwater_harvesting_results.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(currentLang === 'ar' ? 'تم حفظ النتائج بنجاح!' : 'Results saved successfully!');
}

// تهيئة الآلة الحاسبة
function initCalculator() {
    const calculatorForm = document.getElementById('rainwater-calculator');
    
    if (calculatorForm) {
        // معالجة إرسال النموذج
        calculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع البيانات من السلايدرات
            const climateValue = document.getElementById('climate-zone').value;
            const purposeValue = document.getElementById('purpose').value;
            const slopeValue = document.getElementById('slope').value;
            
            // حساب النتائج
            const results = calculateRainwaterHarvesting(climateValue, purposeValue, slopeValue);
            
            // عرض النتائج
            displayResults(results);
        });
        
        // زر حفظ النتائج
        const saveBtn = document.getElementById('save-results');
        if (saveBtn) {
            saveBtn.addEventListener('click', saveResults);
        }
        
        // زر طباعة النتائج
        const printBtn = document.getElementById('print-results');
        if (printBtn) {
            printBtn.addEventListener('click', function() {
                window.print();
            });
        }
    }
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // تهيئة القائمة المتنقلة
    initNavigation();
    
    // تهيئة السلايدرات
    initSliders();
    
    // تهيئة الآلة الحاسبة
    initCalculator();
    
    // إعداد مستمعي الأحداث
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
        console.log('Language toggle button found and event listener added');
    } else {
        console.log('Language toggle button not found');
    }
    
    // تحديث اللغة والاتجاه الأولي
    updateLanguage();
    updateDirection();
    
    // إضافة تأثيرات scroll للتنقل
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar && window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else if (navbar) {
            navbar.style.background = 'var(--surface-color)';
            navbar.style.backdropFilter = 'none';
        }
    });
});
