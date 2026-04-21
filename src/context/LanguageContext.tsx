"use client";
import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from "react";

const translations = {
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", products: "منتجاتنا", contact: "اتصل بنا" },
    hero: {
      welcome: "مرحباً بكم في",
      companyPart1: "شركة  ",
      companyPart2: " الرهاوي بايب",
      description: "شركة رائدة في مجال الآبار الخاصة باستخراج المياه الجوفية من باطن الأرض بكافة الطرق اليدوية والميكانيكية منذ سبعينيات القرن الماضي، وسابقة أعمال للعمل في كافة مشاريع وزارة الري وجميع القطاعات الخاصة و العامة.",
      btnPrimary: "استعرض منتجاتنا",
      btnSecondary: "اتصل بنا"
    },
    aboutHero: {
      title: "عن",
      companyName: "الرهاوي بايب",
      description: "إرث يمتد لأكثر من 40 عاماً في خدمة قطاع المياه والري في مصر، نجمع بين عراقة الماضي وتقنيات المستقبل.",
    },
    aboutStory: {
      badge: "إرث من الخبرة",
      title: "قصة نجاح تمتد لعقود",
      description1: "في شركة الرهاوي بايب نفخر بريادتنا في مجال حفر الآبار واستخراج المياه الجوفية منذ سبعينيات القرن الماضي، حيث جمعنا بين الخبرة الطويلة والتقنيات الحديثة لنقدم حلولاً متكاملة للمياه والطاقة.",
      description2: "على مدار عقود، ساهمنا في تنفيذ العديد من المشروعات الكبرى بالتعاون مع وزارة الري والقطاعات العامة والخاصة، مما جعلنا أحد الأسماء الموثوقة في هذا المجال.",
      listTitle: "نلتزم بتقديم خدمات عالية الجودة تشمل:",
      items: [
        "حفر الآبار اليدوية والميكانيكية بمختلف الأعماق والأقطار.",
        "تصنيع وتوريد مواسير PVC وخدمات القلاووظ والتخريم والسلك البلاستيك.",
        "تركيب وصيانة طلمبات الأعماق ومستلزماتها.",
        "توريد شبكات الري الحديثة بجميع المقاسات والضغوط.",
        "حلول الطاقة الشمسية لتشغيل طلمبات الأعماق بكفاءة واستدامة."
      ]
    },
    valuesSection: {
      badge: "مبادئنا الأساسية",
      title: "القيم التي تحرك",
      titleHighlight: "نجاحنا",
      items: [
        { title: "الالتزام بالجودة", desc: "نطبق أدق معايير الفحص والاختبار لضمان تقديم مواسير ومستلزمات تتحمل أصعب ظروف العمل." },
        { title: "الابتكار التقني", desc: "نواكب أحدث تكنولوجيا استخراج المياه الجوفية ونقدم حلولاً ذكية ترفع كفاءة الإنتاج." },
        { title: "النزاهة والأمانة", desc: "بنينا اسم 'الرهاوي' على مدار عقود من خلال الشفافية المطلقة مع عملائنا في كل توريد." },
        { title: "السرعة والدقة", desc: "نحن نقدر وقت عملائنا، لذا نلتزم بجداول زمنية صارمة في التوريد والتنفيذ دون مساومة على الدقة." },
        { title: "الشراكة الدائمة", desc: "علاقتنا بالعميل لا تنتهي ببيع المنتج، بل تبدأ كشراكة نجاح ممتدة من خلال الدعم الفني." },
        { title: "الرؤية الوطنية", desc: "نساهم بقوة في تطوير البنية التحتية الزراعية والصناعية بمصر لدعم الاقتصاد القومي." }
      ]
    },
    teamSection: {
      badge: "فريق العمل",
      title: "نخبة من الكوادر",
      titleHighlight: "المتميزة",
      departments: {
        finance: "الإدارة المالية",
        sales: "قطاع المبيعات والدعم الفني"
      },
      members: {
        finance: [
          { name: "أ. محمد السيد", role: "الإدارة المالية" },
          { name: "أ. محمد عيد", role: "الإدارة المالية" },
          { name: "أ. عيد محمد", role: "الإدارة المالية" },
          { name: "أ. علاء عبدرب النبى", role: "الإدارة المالية" }
        ],
        sales: [
          { name: "أ. أسامة مسعد", role: "قطاع المبيعات" },
          { name: "أ. مصطفى حمدى", role: "قطاع المبيعات" },
          { name: "أ. أحمد الشاذلى", role: "قطاع المبيعات" },
          { name: "م. خالد الأبيض", role: "مهندس كهرباء" }
        ]
      }
    },
    ctaAbout: {
      title: "هل أنت مستعد لتأمين احتياجات مشروعك بأعلى معايير الجودة؟",
      subtitle: "نحن هنا لنضع خبرة خمسين عاماً بين يديك. تواصل مع مستشارينا الفنيين الآن للحصول على أفضل الحلول لمشروعك.",
      buttonText: "تواصل معنا الآن",
      secondaryButton: "استعرض منتجاتنا"
    },
    productsHero: {
      badge: "كتالوج المنتجات",
      title1: "حلول متكاملة لآبار المياه",
      title2: "وشبكات الري الحديثة",
      description: "نوفر أجود أنواع المواسير البلاستيك (UPVC) وطلمبات الأعماق وأنظمة الطاقة الشمسية بمواصفات قياسية عالمية تلبي احتياجات كافة المشاريع الزراعية والصناعية.",
    },
    productCards: {
      btnText: "عرض التفاصيل",
      items: [
        {
          id: "upvc-pipes",
          title: "مواسير UPVC",
          image: "/product/product1.webp",
          features: [
            "مواسير بجميع الأقطار والضغوط.",
            "تصنيع، قلاووظ، تخريم بفلتر.",
            "سلك بلاستيك مانع لتسرب الرمال."
          ]
        },
        {
          id: "submersible-pumps",
          title: "مواتير وطلمبات الأعماق",
          image: "/product/product2.webp",
          features: [
            "طلمبات أعماق (زهر – استالس).",
            "كابلات بحرية مخصصة للأعماق.",
            "لوحات كهرباء ومحولات رفع جهد."
          ]
        },
        {
          id: "solar-systems",
          title: "أنظمة الطاقة الشمسية",
          image: "/product/product3.webp",
          features: [
            "ألواح شمسية لتشغيل طلمبات الأعماق.",
            "أنظمة ثابتة ومتحركة.",
            "جميع مستلزمات التركيب والتشغيل."
          ]
        },
        {
          id: "iron-pipes",
          title: "مواسير الحديد ومستلزماته",
          image: "/product/product4.webp",
          features: [
            "تصنيع بمعايير جودة عالمية لضمان المتانة.",
            "مقاومة للتآكل والظروف القاسية.",
            "متوفرة بمقاسات وسماكات متنوعة."
          ]
        },
        {
          id: "indian-pipes",
          title: "مواسير بلاستيك هندية",
          image: "/product/product5.webp",
          features: [
            "خامات عالية الجودة.",
            "متوفرة بجميع الأقطار.",
            "مثالية للآبار."
          ]
        },
        {
          id: "irrigation-systems",
          title: "أنظمة شبكات الري",
          image: "/product/product6.webp",
          features: [
            "مواسير عالية الجودة لشبكات الري.",
            "حلول توريد وتركيب وصيانة متكاملة.",
            "خبرة طويلة وجودة بأسعار تنافسية."
          ]
        }
      ]
    },
    upvcPage: {
      title: "مواسير UPVC – حلول عصرية للبنية التحتية بأعلى جودة",
      intro: "تُعد مواسير UPVC من العناصر الأساسية في مشروعات المياه والصرف الصحي والري وشبكات البنية التحتية. فهي ليست مجرد مواسير تقليدية، بل حلول هندسية متطورة تجمع بين القوة والمتانة وسهولة التركيب، مما يجعلها الخيار المثالي للمشروعات السكنية، التجارية، والزراعية.",
      companyInfo: "في هذا الإطار، توفر شركة الرهاوي بايب مجموعة شاملة من مواسير UPVC بأحجام وضغوط مختلفة، معتمدة وفقًا لأعلى المواصفات العالمية لضمان الأداء القوي والعمر التشغيلي الطويل.",
      featuresTitle: "مميزات مواسير UPVC",
      features: [
        { t: "متانة عالية", d: "مقاومة للتآكل والصدأ والعوامل الكيميائية." },
        { t: "خفة الوزن", d: "سهلة النقل والتركيب مقارنة بالأنواع التقليدية." },
        { t: "عمر افتراضي طويل", d: "تتحمل ظروف التشغيل القاسية دون تأثر." },
        { t: "كفاءة هيدروليكية", d: "سطح داخلي أملس يقلل من فقدان الضغط ويحسن تدفق المياه." },
        { t: "مقاومة للتسرب", d: "أنظمة وصلات آمنة تمنع أي فقد للمياه." },
        { t: "صديقة للبيئة", d: "قابلة لإعادة التدوير وتدعم الاستدامة." }
      ],
      appsTitle: "تطبيقات مواسير UPVC",
      apps: ["شبكات مياه الشرب", "الصرف الصحي", "الري الزراعي", "الصناعة", "البنية التحتية"],
      specsTitle: "منتجات مواسير UPVC من شركة الرهاوي بايب",
      specs: [
        "مواسير بأقطار متعددة (من ½ بوصة حتى 16 بوصة).",
        "ضغوط تشغيل مختلفة تناسب كافة التطبيقات (PN6 – PN10 – PN16).",
        "وصلات متنوعة: (جلبة – كوع – تيه – فلانشة) بجودة عالية.",
        "اعتماد من هيئات المواصفات والجودة المحلية والدولية."
      ],
      contactBtn: "تواصل معنا الآن"
    },
    stats: [
      { label: "عام من الخبرة", value: "35+" },
      { label: "بئر تم حفره", value: "1200+" },
      { label: "مشروع حكومي", value: "300+" },
      { label: "عميل يثق بنا", value: "4863+" },
    ],
    features: {
      mainTitle: "لماذا تختار",
      companyName: "الرهاوي بايب",
      f1_title: "خبرة عريقة",
      f1_desc: "نعمل في مجال المياه الجوفية منذ سبعينيات القرن الماضي بخبرة تتوارثها الأجيال.",
      f2_title: "أحدث التقنيات",
      f2_desc: "نستخدم الطرق اليدوية والميكانيكية المبتكرة لاستخراج المياه بأعلى كفاءة.",
      f3_title: "ثقة حكومية",
      f3_desc: "سابقة أعمال مشرفة مع وزارة الري وكبرى القطاعات الحكومية والخاصة.",
      f4_title: "دعم فني متكامل",
      f4_desc: "فريق متخصص لمتابعة تنفيذ المشاريع وضمان استدامة الآبار وشبكات الري."
    },
    servicesContent: {
      title: "خدماتنا",
      description: "نقدم حلولاً هندسية متكاملة لآبار المياه وشبكات الري بأحدث التقنيات العالمية.",
      btnAll: "استكشف جميع المنتجات",
      items: [
        { title: "مواسير UPVC", image: "/product/product1.webp", features: ["مواسير بجميع الأقطار والضغوط.", "تصنيع ، قلاووظ، تخريم ، فلاتر.", "سلك بلاستيك مانع لتسرب الرمال."] },
        { title: "مواتير وطلمبات الأعماق", image: "/product/product2.webp", features: ["طلمبات أعماق (زهر – استالس).", "كابلات بحرية مخصصة للأعماق.", "لوحات كهرباء ومحولات رفع جهد."] },
        { title: "أنظمة الطاقة الشمسية", image: "/product/product3.webp", features: ["ألواح شمسية لتشغيل طلمبات الأعماق.", "أنظمة ثابتة ومتحركة.", "جميع مستلزمات التركيب والتشغيل."] }
      ]
    },
    partners: { title: "شركاء النجاح", subtitle: "نفخر بثقة كبرى الشركات والقطاعات الحكومية في خبراتنا ومشاريعنا." },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تود معرفته عن خدمات حفر الآبار وتوريد المواسير",
      questions: [
        { q: "هل تقدمون خدمات الصيانة والإصلاح للمواتير والطلمبات ؟", a: "نعم، نحن نوفر فريقاً متخصصاً لصيانة وإصلاح كافة أنواع المواتير وطلمبات الأعماق. تشمل خدماتنا الفحص الدوري، وتوفير قطع الغيار الأصلية، وإصلاح الأعطال لضمان استمرارية تدفق المياه بأعلى كفاءة." },
        { q: "هل تركيب منظومة الطاقة الشمسية يوفر في تكاليف الكهرباء على المدى الطويل ؟", a: "بالتأكيد، تعتبر الطاقة الشمسية استثماراً ذكياً يوفر ما يصل إلى 70-90% من تكاليف الكهرباء الشهرية. بالإضافة إلى ذلك، فهي تتطلب صيانة محدودة جداً وتعمل بكفاءة لسنوات طويلة، مما يضمن لك استرداد تكلفة النظام في وقت قياسي." },
        { q: "هل تعمل الشركة في كافة محافظات مصر؟", a: "نعم، نمتلك أسطولاً من المعدات قادراً على الوصول والعمل في كافة مشاريع وزارة الري والقطاعات الخاصة في جميع أنحاء الجمهورية." }
      ]
    },
    ctaContent: {
      heading1: "هل أنت جاهز لبدء مشروعك القادم مع ",
      companyName: "الرهاوي",
      heading2: "؟",
      description: "نحن هنا لتزويدك بأفضل حلول استخراج المياه الجوفية وشبكات الري بأعلى معايير الجودة والاحترافية.",
      btnPrimary: "اتصل بنا الآن",
      btnSecondary: "استعرض منتجاتنا",
    },
    footer: {
      about: "تجارة المواسير البلاستيك وحفر الآبار وشبكات الري. خبرة تمتد لأجيال في خدمة القطاع الزراعي والصناعي.",
      locations: "مواقعنا",
      mainBranch: "الفرع الرئيسي",
      mainAddress: "منشأة القناطر - الجيزة",
      secondBranch: "الفرع الثاني",
      secondAddress: "فرع المنيا",
      contactUs: "اتصل بنا",
      pipesDept: "قسم المواسير",
      pumpsDept: "قسم الطلمبات",
      board: "مجلس الإدارة",
      role: "إدارة الشركة",
      call: "اتصال",
      whatsapp: "واتساب"
    }
  },
  en: {
    nav: { home: "Home", about: "About Us", products: "Products", contact: "Contact Us" },
    hero: {
      welcome: "Welcome to",
      companyPart1: "EL RAHAWY ",
      companyPart2: "PIPE",
      description: "A leading company in groundwater extraction wells since the 1970s, with a proven track record in Ministry of Irrigation projects and across private and public sectors.",
      btnPrimary: "Our Products",
      btnSecondary: "Contact Us"
    },
    aboutHero: {
      title: "About",
      companyName: "El-Rahawy Pipe",
      description: "A legacy extending over 40 years in Egypt's water and irrigation sector, combining deep expertise with future technologies.",
    },
    aboutStory: {
      badge: "Legacy of Experience",
      title: "A Success Story Spanning Decades",
      description1: "At Al-Rahawy Pipe, we take pride in our leadership in well drilling and groundwater extraction since the 1970s, combining decades of expertise with modern technologies.",
      description2: "Over the years, we have contributed to major projects in cooperation with the Ministry of Irrigation and both public and private sectors, becoming a trusted name in the field.",
      listTitle: "We are committed to providing high-quality services including:",
      items: [
        "Manual and mechanical well drilling at various depths and diameters.",
        "Manufacturing and supplying PVC pipes, threading, and perforation services.",
        "Installation and maintenance of submersible pumps and accessories.",
        "Supplying modern irrigation networks of all sizes and pressures.",
        "Solar energy solutions for efficient and sustainable pump operation."
      ]
    },
    valuesSection: {
      badge: "Our Core Principles",
      title: "Values That Drive Our",
      titleHighlight: "Success",
      items: [
        { title: "Commitment to Quality", desc: "We apply the strictest testing standards to ensure durable pipes and equipment." },
        { title: "Technical Innovation", desc: "Keeping pace with the latest groundwater extraction tech for smart, efficient solutions." },
        { title: "Integrity & Honesty", desc: "Built on decades of absolute transparency with our clients in every deal." },
        { title: "Speed & Precision", desc: "Strict adherence to delivery schedules without compromising on accuracy." },
        { title: "Lasting Partnership", desc: "Our relationship starts with a sale and continues with lifelong technical support." },
        { title: "National Vision", desc: "Actively contributing to Egypt's agricultural and industrial infrastructure." }
      ]
    },
    teamSection: {
      badge: "Our Team",
      title: "Elite Professional",
      titleHighlight: "Staff",
      departments: {
        finance: "Financial Department",
        sales: "Sales & Technical Support"
      },
      members: {
        finance: [
          { name: "Mr. Mohamed El-Sayed", role: "Finance Dept" },
          { name: "Mr. Mohamed Eid", role: "Finance Dept" },
          { name: "Mr. Eid Mohamed", role: "Finance Dept" },
          { name: "Mr. Alaa Abdel-Nabi", role: "Finance Dept" }
        ],
        sales: [
          { name: "Mr. Osama Mossad", role: "Sales Dept" },
          { name: "Mr. Mostafa Hamdy", role: "Sales Dept" },
          { name: "Mr. Ahmed Al-Shazly", role: "Sales Dept" },
          { name: "Eng. Khaled El-Abyad", role: "Electrical Engineer" }
        ]
      }
    },
    ctaAbout: {
      title: "Ready to secure your project needs with the highest quality standards?",
      subtitle: "We are here to put fifty years of experience in your hands. Contact our technical consultants now.",
      buttonText: "Contact Us Now",
      secondaryButton: "Browse Products"
    },
    productsHero: {
      badge: "Products Catalog",
      title1: "Integrated Solutions for Water Wells",
      title2: "& Modern Irrigation Systems",
      description: "We provide the finest types of UPVC pipes, submersible pumps, and solar energy systems with international standard specifications to meet all agricultural and industrial project needs.",
    },
    productCards: {
      btnText: "View Details",
      items: [
        {
          id: "upvc-pipes",
          title: "UPVC Pipes",
          image: "/product/product1.webp",
          features: ["All diameters & pressures", "Manufacturing & Threading", "Sand-preventing wire"]
        },
        {
          id: "submersible-pumps",
          title: "Submersible Pumps",
          image: "/product/product2.webp",
          features: ["Cast iron & Stainless", "Marine cables", "Control panels"]
        },
        {
          id: "solar-systems",
          title: "Solar Systems",
          image: "/product/product3.webp",
          features: ["Deep well solar panels", "Fixed & Tracking", "Installation accessories"]
        },
        {
          id: "iron-pipes",
          title: "Iron Pipes",
          image: "/product/product4.webp",
          features: ["Global quality standards", "Corrosion resistant", "Various thicknesses"]
        },
        {
          id: "indian-pipes",
          title: "Indian Pipes",
          image: "/product/product5.webp",
          features: ["High quality raw materials", "Available in all diameters", "Ideal for wells"]
        },
        {
          id: "irrigation-systems",
          title: "Irrigation Systems",
          image: "/product/product6.webp",
          features: ["High quality networks", "Turnkey solutions", "Competitive pricing"]
        }
      ]
    },
    upvcPage: {
      title: "UPVC Pipes – Modern Solutions with the Highest Quality",
      intro: "UPVC pipes are essential elements in water, sewage, irrigation, and infrastructure projects. They are modern engineering solutions that combine strength, durability, and ease of installation, making them ideal for residential, commercial, and agricultural projects.",
      companyInfo: "In this context, Al-Rahawy Pipe Company provides a comprehensive range of UPVC pipes in various sizes and pressures, certified to the highest international standards for long service life.",
      featuresTitle: "UPVC Pipes Features",
      features: [
        { t: "High Durability", d: "Resistant to corrosion, rust, and chemical factors." },
        { t: "Lightweight", d: "Easy to transport and install compared to traditional types." },
        { t: "Long Lifespan", d: "Withstands harsh operating conditions without impact." },
        { t: "Hydraulic Efficiency", d: "Smooth inner surface reduces pressure loss and improves flow." },
        { t: "Leak Resistance", d: "Secure joint systems prevent any water loss." },
        { t: "Eco-friendly", d: "Recyclable and supports sustainability." }
      ],
      appsTitle: "UPVC Pipes Applications",
      apps: ["Drinking Water Networks", "Sewage Systems", "Agricultural Irrigation", "Industrial Use", "Infrastructure"],
      specsTitle: "UPVC Products from Al-Rahawy Pipe Company",
      specs: [
        "Pipes in multiple diameters (from ½ inch to 16 inches).",
        "Operating pressures suitable for all apps (PN6 – PN10 – PN16).",
        "Various fittings: (Coupling – Elbow – Tee – Flange) with high quality.",
        "Certified by local and international quality standards."
      ],
      contactBtn: "Contact Us Now"
    },
    stats: [
      { label: "Years of Experience", value: "35+" },
      { label: "Wells Drilled", value: "1200+" },
      { label: "Government Projects", value: "300+" },
      { label: "Trusted Clients", value: "4863+" },
    ],
    features: {
      mainTitle: "Why Choose",
      companyName: "EL RAHAWY PIPE",
      f1_title: "Longstanding Experience",
      f1_desc: "Operating in the groundwater field since the 1970s with generations of expertise.",
      f2_title: "Latest Technologies",
      f2_desc: "We use innovative manual and mechanical methods for high-efficiency water extraction.",
      f3_title: "Government Trust",
      f3_desc: "An honorable track record with the Ministry of Irrigation and major sectors.",
      f4_title: "Integrated Technical Support",
      f4_desc: "Specialized team to follow up on projects and ensure the sustainability of wells."
    },
    servicesContent: {
      title: "Our Services",
      description: "We provide integrated engineering solutions for water wells and irrigation networks using the latest global technologies.",
      btnAll: "Explore All Products",
      items: [
        { title: "UPVC Pipes", image: "/product/product1.webp", features: ["Pipes of all diameters and pressures.", "Manufacturing, threading, perforating, filters.", "Plastic wire to prevent sand leakage."] },
        { title: "Submersible Motors & Pumps", image: "/product/product2.webp", features: ["Deep well pumps (Cast iron – Stainless).", "Marine cables for deep wells.", "Control panels and voltage transformers."] },
        { title: "Solar Energy Systems", image: "/product/product3.webp", features: ["Solar panels for deep well pumps.", "Fixed and tracking systems.", "All installation and operation accessories."] }
      ]
    },
    partners: { title: "Our Success Partners", subtitle: "We take pride in the trust of major companies and government sectors in our expertise." },
   
    faq: {
      title: "Common Questions",
      subtitle: "Everything you know about our services",
      questions: [
        { q: "Do you provide maintenance and repair services for motors and pumps ?", a: "Yes, we provide a specialized team for maintaining and repairing all types of motors and deep-well pumps. Our services include routine inspections, providing original spare parts, and emergency repairs to ensure continuous water flow at maximum efficiency." },
        { q: "Does installing a solar energy system save on electricity costs in the long run ?", a: "Absolutely. Solar energy is a smart investment that saves up to 70-90% on monthly electricity costs. Additionally, it requires very limited maintenance and operates efficiently for many years, ensuring you recover the system cost in record time." },
        { q: "Do you work all over Egypt ?", a: "Yes, we possess a fleet of equipment capable of reaching and operating in all Ministry of Irrigation projects and private sectors across the entire Republic." }
      ]
    },
    ctaContent: {
      heading1: "Ready to start your next project with ",
      companyName: "El-Rahawy",
      heading2: "?",
      description: "Professional groundwater solutions and irrigation networks.",
      btnPrimary: "Contact Now",
      btnSecondary: "Browse Products",
    },
    footer: {
      about: "Trading plastic pipes, drilling wells, and irrigation networks. Generations of expertise.",
      locations: "Our Locations",
      mainBranch: "Main Branch",
      mainAddress: "Manshiyat Al-Qanater - Giza",
      secondBranch: "Second Branch",
      secondAddress: "Minya Branch",
      contactUs: "Contact Us",
      pipesDept: "Pipes Dept",
      pumpsDept: "Solar Pumps Dept",
      board: "Board of Directors",
      role: "Company Management",
      call: "Call",
      whatsapp: "WhatsApp"
    }
  }
};

interface LanguageContextType {
  lang: string;
  t: typeof translations.ar;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // حالة اللغة المبدئية
  const [lang, setLang] = useState("ar");
  // حالة التأكد من أن الكود يعمل على المتصفح (client-side) لتجنب أخطاء الهيدريشن
  const [isReady, setIsReady] = useState(false);

  // قراءة اللغة المحفوظة فور تحميل المكون
  useEffect(() => {
    const savedLang = localStorage.getItem("appLang");
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLang(savedLang);
    }
    setIsReady(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    localStorage.setItem("appLang", newLang);
  };

  const t = useMemo(() => {
    return translations[lang as keyof typeof translations] || translations.ar;
  }, [lang]);

  // إذا لم يكن التطبيق جاهزاً (لم يقرأ الـ localStorage بعد)، لا تعرض شيئاً لمنع الوميض
  if (!isReady) return null;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} key={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};