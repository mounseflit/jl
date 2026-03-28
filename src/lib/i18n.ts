export type Locale = "en" | "fr" | "ar";

export const locales: Locale[] = ["en", "fr", "ar"];

export const rtlLocales: Locale[] = ["ar"];

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  /* ══════════════════════════════════════════════════
     ENGLISH
     ══════════════════════════════════════════════════ */
  en: {
    // ── Nav / Header ──
    "nav.becomeJabber": "Become a JABBer",
    "nav.becomePartner": "Become a Partner",
    "nav.services": "Services",
    "nav.cities": "Cities",
    "nav.faq": "FAQ",
    "nav.about": "About",
    "nav.contact": "Contact",

    // ── Hero ──
    "hero.title": "All your CX insights\u2026 in one single app",
    "hero.subtitle":
      "JABB, the 1st citizen-powered mystery shopping platform, delivers GPS-verified field intelligence to your dashboard \u2014 fast, reliable, and professional.",
    "hero.downloadOn": "Download on the",
    "hero.appStore": "App Store",
    "hero.getItOn": "Get it on",
    "hero.googlePlay": "Google Play",
    "hero.webDashboard": "Or access the web dashboard",

    // ── Stats ──
    "stats.jabbers": "JABBers",
    "stats.evaluations": "Evaluations",
    "stats.cities": "Cities",
    "stats.accuracy": "Accuracy",

    // ── How It Works ──
    "howItWorks.title": "How It Works",
    "howItWorks.subtitle": "Start earning in 4 simple steps",

    "howItWorks.step1.title": "Download the App",
    "howItWorks.step1.desc":
      "Get JABB from the App Store or Google Play and create your free account in under two minutes.",
    "howItWorks.step2.title": "Accept a Mission",
    "howItWorks.step2.desc":
      "Browse available mystery shopping missions near you and choose the ones that fit your schedule.",
    "howItWorks.step3.title": "Evaluate & Submit",
    "howItWorks.step3.desc":
      "Visit the location, complete the GPS-verified checklist, and submit your evaluation with photos.",
    "howItWorks.step4.title": "Get Paid",
    "howItWorks.step4.desc":
      "Once your report is validated, earnings go to your JABB wallet. Cash out anytime.",

    // ── Services ──
    "services.mysteryShopping.title": "Mystery Shopping",
    "services.mysteryShopping.subtitle":
      "See your business through your customer\u2019s eyes",
    "services.mysteryShopping.desc":
      "Deploy citizen shoppers to evaluate real customer experiences across your locations. GPS-verified, unbiased, and actionable insights delivered fast.",
    "services.mysteryShopping.cta": "Start Evaluating",

    "services.cxAudits.title": "CX Audits",
    "services.cxAudits.subtitle":
      "360\u00B0 view of your entire customer journey",
    "services.cxAudits.desc":
      "Comprehensive audits from first impression to final checkout. Identify gaps, benchmark against competitors, and improve satisfaction scores.",
    "services.cxAudits.cta": "Request an Audit",

    "services.voiceOfCustomer.title": "Voice of Customer",
    "services.voiceOfCustomer.subtitle":
      "Hear what the silent majority really thinks",
    "services.voiceOfCustomer.desc":
      "Capture authentic customer feedback through in-person interviews, post-visit surveys, and AI sentiment analysis. Go beyond online reviews.",
    "services.voiceOfCustomer.cta": "Capture Feedback",

    "services.dashboard.title": "Business Dashboard",
    "services.dashboard.subtitle": "Your CX command center, always on",
    "services.dashboard.desc":
      "Track KPIs, monitor trends, and visualize performance data in real time. One dashboard for all your CX intelligence needs.",
    "services.dashboard.cta": "View Dashboard",

    "services.aiReports.title": "AI Reports",
    "services.aiReports.subtitle":
      "From scattered data to strategic clarity",
    "services.aiReports.desc":
      "Leverage artificial intelligence to transform raw field data into strategic recommendations. Faster analysis, smarter decisions.",
    "services.aiReports.cta": "Generate Report",

    "services.rewardSystem.title": "Reward System",
    "services.rewardSystem.subtitle":
      "Get paid for sharing honest experiences",
    "services.rewardSystem.desc":
      "Complete missions, earn JABB coins, level up through tiers, and cash out instantly. The more you evaluate, the more you earn.",
    "services.rewardSystem.cta": "Earn Rewards",

    // ── What You Get ──
    "whatYouGet.title": "What You Get",
    "whatYouGet.subtitle": "Benefits for everyone",
    "whatYouGet.tabJabbers": "For JABBers",
    "whatYouGet.tabBusinesses": "For Businesses",

    "whatYouGet.earnMoney.title": "Earn Money",
    "whatYouGet.earnMoney.desc":
      "Get paid for every validated mission you complete.",
    "whatYouGet.flexibleSchedule.title": "Flexible Schedule",
    "whatYouGet.flexibleSchedule.desc":
      "Work when you want, where you want. No fixed hours.",
    "whatYouGet.easyMissions.title": "Easy Missions",
    "whatYouGet.easyMissions.desc":
      "Simple checklists guide you through each evaluation.",

    "whatYouGet.realTimeCX.title": "Real-Time CX Data",
    "whatYouGet.realTimeCX.desc":
      "Monitor customer experience metrics as they happen.",
    "whatYouGet.gpsReports.title": "GPS-Verified Reports",
    "whatYouGet.gpsReports.desc":
      "Every evaluation is geotagged for total authenticity.",
    "whatYouGet.aiInsights.title": "AI-Powered Insights",
    "whatYouGet.aiInsights.desc":
      "Smart analytics transform raw data into strategy.",

    // ── Partners ──
    "partners.title": "Your opportunity to succeed starts here!",
    "partners.subtitle":
      "Whether you are a professional evaluator or a business owner, we are here to support you every step of the way.",
    "partners.jabber.title": "Become a JABBer",
    "partners.jabber.desc":
      "Download the app, complete missions near you, and earn money for each validated evaluation. No experience required.",
    "partners.jabber.cta": "Start earning now",
    "partners.business.title": "Become a Partner",
    "partners.business.desc":
      "Get real-time CX intelligence for your brand. Our citizen shoppers deliver GPS-verified, unbiased field reports.",
    "partners.business.cta": "Partner with us",

    // ── FAQ ──
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Have a question? We are here to help.",
    "faq.anotherQuestion": "Have another question?",

    "faq.q1": "What is JABB?",
    "faq.a1":
      "JABB is the first citizen-powered mystery shopping platform in Morocco. It connects businesses seeking real customer experience data with everyday citizens who get paid to evaluate services at physical locations.",
    "faq.q2": "How do I become a JABBer?",
    "faq.a2":
      "Simply download the JABB app from the App Store or Google Play, create a free account, and start browsing available missions near you. No prior experience is needed.",
    "faq.q3": "How does payment work?",
    "faq.a3":
      "After each mission is validated, your earnings are credited to your JABB wallet. You can cash out at any time through the available withdrawal methods.",
    "faq.q4": "Is JABB available in my city?",
    "faq.a4":
      "JABB is currently active in major Moroccan cities including Casablanca, Rabat, Marrakech, Tangier, Fes, Agadir, and more. We are expanding rapidly.",
    "faq.q5": "How are evaluations verified?",
    "faq.a5":
      "Every evaluation is GPS-verified, meaning you must be physically present at the location. We also use photo verification and AI-powered quality checks to ensure accuracy.",
    "faq.q6": "What types of businesses can use JABB?",
    "faq.a6":
      "Any business with physical locations can benefit: retail stores, restaurants, banks, hotels, telecom shops, gas stations, pharmacies, and more.",
    "faq.q7": "How much can I earn as a JABBer?",
    "faq.a7":
      "Earnings vary by mission type and complexity. The more missions you complete and the higher your accuracy, the more you earn. Top JABBers unlock premium missions with higher payouts.",
    "faq.q8": "Is my data secure?",
    "faq.a8":
      "Absolutely. JABB uses industry-standard encryption and data protection protocols. Your personal information is never shared with third parties without your consent.",
    "faq.q9": "Can I do missions part-time?",
    "faq.a9":
      "Yes! JABB is designed to be flexible. You choose when and where to work. Many JABBers do it alongside their regular jobs or studies.",
    "faq.q10": "How do businesses access their reports?",
    "faq.a10":
      "Businesses access real-time reports through the JABB web dashboard. It includes KPI tracking, trend analysis, AI-powered insights, and exportable data.",

    // ── CTA ──
    "cta.title": "Ready to transform your customer experience?",
    "cta.subtitle":
      "Join 500+ JABBers and businesses already using JABB to deliver GPS-verified CX intelligence across Morocco.",
    "cta.downloadApp": "Download App",
    "cta.partnerWithUs": "Partner With Us",

    // ── Footer ──
    "footer.platform": "Platform",
    "footer.solutions": "Solutions",
    "footer.company": "Company",
    "footer.cities": "Cities",
    "footer.aboutUs": "About Us",
    "footer.contact": "Contact",
    "footer.blog": "Blog",
    "footer.howItWorks": "How JABB Works",
    "footer.termsOfService": "Terms of Service",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.cookiePolicy": "Cookie Policy",
    "footer.allRightsReserved": "All rights reserved JABB",

    // ── Orbit ──
    "orbit.badge": "Omnichannel",
    "orbit.title": "Every touchpoint, one platform",
    "orbit.subtitle": "JABB captures customer experience data across all channels — web, mobile, in-store, and beyond.",

    // ── Common ──
    "common.english": "English",
    "common.french": "Fran\u00E7ais",
    "common.arabic": "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    "common.dark": "Dark",
    "common.light": "Light",
  },

  /* ══════════════════════════════════════════════════
     FRENCH
     ══════════════════════════════════════════════════ */
  fr: {
    // ── Nav / Header ──
    "nav.becomeJabber": "Devenir JABBeur",
    "nav.becomePartner": "Devenir Partenaire",
    "nav.services": "Services",
    "nav.cities": "Villes",
    "nav.faq": "FAQ",
    "nav.about": "\u00C0 propos",
    "nav.contact": "Contact",

    // ── Hero ──
    "hero.title":
      "Tous vos insights CX\u2026 dans une seule application",
    "hero.subtitle":
      "JABB, la 1\u00E8re plateforme de mystery shopping citoyenne, fournit des donn\u00E9es terrain g\u00E9ov\u00E9rifi\u00E9es \u00E0 votre tableau de bord \u2014 rapide, fiable et professionnel.",
    "hero.downloadOn": "T\u00E9l\u00E9charger sur l\u2019",
    "hero.appStore": "App Store",
    "hero.getItOn": "Disponible sur",
    "hero.googlePlay": "Google Play",
    "hero.webDashboard": "Ou acc\u00E9der au tableau de bord web",

    // ── Stats ──
    "stats.jabbers": "JABBeurs",
    "stats.evaluations": "\u00C9valuations",
    "stats.cities": "Villes",
    "stats.accuracy": "Pr\u00E9cision",

    // ── How It Works ──
    "howItWorks.title": "Comment \u00E7a marche",
    "howItWorks.subtitle": "Commencez \u00E0 gagner en 4 \u00E9tapes simples",

    "howItWorks.step1.title": "T\u00E9l\u00E9chargez l\u2019appli",
    "howItWorks.step1.desc":
      "T\u00E9l\u00E9chargez JABB depuis l\u2019App Store ou Google Play et cr\u00E9ez votre compte gratuit en moins de deux minutes.",
    "howItWorks.step2.title": "Acceptez une mission",
    "howItWorks.step2.desc":
      "Parcourez les missions de mystery shopping disponibles pr\u00E8s de chez vous et choisissez celles qui correspondent \u00E0 votre emploi du temps.",
    "howItWorks.step3.title": "\u00C9valuez et soumettez",
    "howItWorks.step3.desc":
      "Rendez-vous sur place, compl\u00E9tez la checklist g\u00E9ov\u00E9rifi\u00E9e et soumettez votre \u00E9valuation avec photos.",
    "howItWorks.step4.title": "Soyez pay\u00E9",
    "howItWorks.step4.desc":
      "Une fois votre rapport valid\u00E9, vos gains sont vers\u00E9s dans votre portefeuille JABB. Retirez \u00E0 tout moment.",

    // ── Services ──
    "services.mysteryShopping.title": "Mystery Shopping",
    "services.mysteryShopping.subtitle":
      "Voyez votre entreprise \u00E0 travers les yeux de vos clients",
    "services.mysteryShopping.desc":
      "D\u00E9ployez des clients myst\u00E8res citoyens pour \u00E9valuer l\u2019exp\u00E9rience r\u00E9elle dans vos points de vente. Donn\u00E9es g\u00E9ov\u00E9rifi\u00E9es, impartiales et exploitables.",
    "services.mysteryShopping.cta": "Commencer l\u2019\u00E9valuation",

    "services.cxAudits.title": "Audits CX",
    "services.cxAudits.subtitle":
      "Vue \u00E0 360\u00B0 de votre parcours client",
    "services.cxAudits.desc":
      "Des audits complets de la premi\u00E8re impression jusqu\u2019au passage en caisse. Identifiez les lacunes, comparez-vous aux concurrents et am\u00E9liorez vos scores de satisfaction.",
    "services.cxAudits.cta": "Demander un audit",

    "services.voiceOfCustomer.title": "Voix du Client",
    "services.voiceOfCustomer.subtitle":
      "\u00C9coutez ce que la majorit\u00E9 silencieuse pense vraiment",
    "services.voiceOfCustomer.desc":
      "Capturez les retours clients authentiques via des entretiens en personne, des enqu\u00EAtes post-visite et l\u2019analyse de sentiments par IA. Allez au-del\u00E0 des avis en ligne.",
    "services.voiceOfCustomer.cta": "Capturer les retours",

    "services.dashboard.title": "Tableau de Bord",
    "services.dashboard.subtitle":
      "Votre centre de commande CX, toujours actif",
    "services.dashboard.desc":
      "Suivez vos KPI, surveillez les tendances et visualisez les donn\u00E9es de performance en temps r\u00E9el. Un seul tableau de bord pour toute votre intelligence CX.",
    "services.dashboard.cta": "Voir le tableau de bord",

    "services.aiReports.title": "Rapports IA",
    "services.aiReports.subtitle":
      "Des donn\u00E9es \u00E9parses \u00E0 une clart\u00E9 strat\u00E9gique",
    "services.aiReports.desc":
      "Exploitez l\u2019intelligence artificielle pour transformer les donn\u00E9es terrain en recommandations strat\u00E9giques. Analyse plus rapide, d\u00E9cisions plus intelligentes.",
    "services.aiReports.cta": "G\u00E9n\u00E9rer un rapport",

    "services.rewardSystem.title": "Syst\u00E8me de R\u00E9compenses",
    "services.rewardSystem.subtitle":
      "Soyez pay\u00E9 pour partager vos exp\u00E9riences honn\u00EAtes",
    "services.rewardSystem.desc":
      "Compl\u00E9tez des missions, gagnez des JABB coins, progressez dans les niveaux et retirez instantan\u00E9ment. Plus vous \u00E9valuez, plus vous gagnez.",
    "services.rewardSystem.cta": "Gagner des r\u00E9compenses",

    // ── What You Get ──
    "whatYouGet.title": "Ce que vous obtenez",
    "whatYouGet.subtitle": "Des avantages pour tous",
    "whatYouGet.tabJabbers": "Pour les JABBeurs",
    "whatYouGet.tabBusinesses": "Pour les Entreprises",

    "whatYouGet.earnMoney.title": "Gagnez de l\u2019argent",
    "whatYouGet.earnMoney.desc":
      "Soyez pay\u00E9 pour chaque mission valid\u00E9e que vous compl\u00E9tez.",
    "whatYouGet.flexibleSchedule.title": "Horaires flexibles",
    "whatYouGet.flexibleSchedule.desc":
      "Travaillez quand vous voulez, o\u00F9 vous voulez. Pas d\u2019horaires fixes.",
    "whatYouGet.easyMissions.title": "Missions simples",
    "whatYouGet.easyMissions.desc":
      "Des checklists simples vous guident \u00E0 travers chaque \u00E9valuation.",

    "whatYouGet.realTimeCX.title": "Donn\u00E9es CX en temps r\u00E9el",
    "whatYouGet.realTimeCX.desc":
      "Surveillez les m\u00E9triques d\u2019exp\u00E9rience client en direct.",
    "whatYouGet.gpsReports.title": "Rapports g\u00E9ov\u00E9rifi\u00E9s",
    "whatYouGet.gpsReports.desc":
      "Chaque \u00E9valuation est g\u00E9olocalis\u00E9e pour une authenticit\u00E9 totale.",
    "whatYouGet.aiInsights.title": "Insights aliment\u00E9s par l\u2019IA",
    "whatYouGet.aiInsights.desc":
      "Des analyses intelligentes transforment les donn\u00E9es brutes en strat\u00E9gie.",

    // ── Partners ──
    "partners.title":
      "Votre opportunit\u00E9 de r\u00E9ussir commence ici\u00A0!",
    "partners.subtitle":
      "Que vous soyez \u00E9valuateur professionnel ou propri\u00E9taire d\u2019entreprise, nous sommes l\u00E0 pour vous accompagner \u00E0 chaque \u00E9tape.",
    "partners.jabber.title": "Devenir JABBeur",
    "partners.jabber.desc":
      "T\u00E9l\u00E9chargez l\u2019appli, compl\u00E9tez des missions pr\u00E8s de chez vous et gagnez de l\u2019argent pour chaque \u00E9valuation valid\u00E9e. Aucune exp\u00E9rience requise.",
    "partners.jabber.cta": "Commencer \u00E0 gagner",
    "partners.business.title": "Devenir Partenaire",
    "partners.business.desc":
      "Obtenez des donn\u00E9es CX en temps r\u00E9el pour votre marque. Nos \u00E9valuateurs citoyens livrent des rapports terrain g\u00E9ov\u00E9rifi\u00E9s et impartiaux.",
    "partners.business.cta": "Devenez partenaire",

    // ── FAQ ──
    "faq.title": "Questions fr\u00E9quemment pos\u00E9es",
    "faq.subtitle":
      "Vous avez une question\u00A0? Nous sommes l\u00E0 pour vous aider.",
    "faq.anotherQuestion": "Vous avez une autre question\u00A0?",

    "faq.q1": "Qu\u2019est-ce que JABB\u00A0?",
    "faq.a1":
      "JABB est la premi\u00E8re plateforme de mystery shopping citoyenne au Maroc. Elle connecte les entreprises en qu\u00EAte de donn\u00E9es r\u00E9elles sur l\u2019exp\u00E9rience client avec des citoyens r\u00E9mun\u00E9r\u00E9s pour \u00E9valuer les services sur le terrain.",
    "faq.q2": "Comment devenir JABBeur\u00A0?",
    "faq.a2":
      "T\u00E9l\u00E9chargez simplement l\u2019appli JABB depuis l\u2019App Store ou Google Play, cr\u00E9ez un compte gratuit et commencez \u00E0 parcourir les missions disponibles pr\u00E8s de chez vous. Aucune exp\u00E9rience pr\u00E9alable n\u2019est n\u00E9cessaire.",
    "faq.q3": "Comment fonctionne le paiement\u00A0?",
    "faq.a3":
      "Apr\u00E8s chaque mission valid\u00E9e, vos gains sont cr\u00E9dit\u00E9s dans votre portefeuille JABB. Vous pouvez retirer \u00E0 tout moment via les m\u00E9thodes de retrait disponibles.",
    "faq.q4": "JABB est-il disponible dans ma ville\u00A0?",
    "faq.a4":
      "JABB est actuellement actif dans les principales villes marocaines dont Casablanca, Rabat, Marrakech, Tanger, F\u00E8s, Agadir et bien d\u2019autres. Nous nous d\u00E9veloppons rapidement.",
    "faq.q5": "Comment les \u00E9valuations sont-elles v\u00E9rifi\u00E9es\u00A0?",
    "faq.a5":
      "Chaque \u00E9valuation est g\u00E9ov\u00E9rifi\u00E9e, ce qui signifie que vous devez \u00EAtre physiquement pr\u00E9sent sur le lieu. Nous utilisons \u00E9galement la v\u00E9rification photo et des contr\u00F4les qualit\u00E9 assist\u00E9s par IA.",
    "faq.q6": "Quels types d\u2019entreprises peuvent utiliser JABB\u00A0?",
    "faq.a6":
      "Toute entreprise avec des points de vente physiques : commerces, restaurants, banques, h\u00F4tels, boutiques t\u00E9l\u00E9com, stations-service, pharmacies, et plus encore.",
    "faq.q7": "Combien puis-je gagner en tant que JABBeur\u00A0?",
    "faq.a7":
      "Les gains varient selon le type et la complexit\u00E9 de la mission. Plus vous compl\u00E9tez de missions et plus votre pr\u00E9cision est \u00E9lev\u00E9e, plus vous gagnez. Les meilleurs JABBeurs d\u00E9bloquent des missions premium mieux r\u00E9mun\u00E9r\u00E9es.",
    "faq.q8": "Mes donn\u00E9es sont-elles s\u00E9curis\u00E9es\u00A0?",
    "faq.a8":
      "Absolument. JABB utilise des protocoles de chiffrement et de protection des donn\u00E9es conformes aux standards de l\u2019industrie. Vos informations personnelles ne sont jamais partag\u00E9es avec des tiers sans votre consentement.",
    "faq.q9": "Puis-je faire des missions \u00E0 temps partiel\u00A0?",
    "faq.a9":
      "Oui\u00A0! JABB est con\u00E7u pour \u00EAtre flexible. Vous choisissez quand et o\u00F9 travailler. Beaucoup de JABBeurs le font en parall\u00E8le de leur emploi ou de leurs \u00E9tudes.",
    "faq.q10": "Comment les entreprises acc\u00E8dent-elles \u00E0 leurs rapports\u00A0?",
    "faq.a10":
      "Les entreprises acc\u00E8dent aux rapports en temps r\u00E9el via le tableau de bord web JABB. Il inclut le suivi des KPI, l\u2019analyse des tendances, des insights IA et des donn\u00E9es exportables.",

    // ── CTA ──
    "cta.title":
      "Pr\u00EAt \u00E0 transformer votre exp\u00E9rience client\u00A0?",
    "cta.subtitle":
      "Rejoignez plus de 500 JABBeurs et entreprises qui utilisent d\u00E9j\u00E0 JABB pour fournir une intelligence CX g\u00E9ov\u00E9rifi\u00E9e \u00E0 travers le Maroc.",
    "cta.downloadApp": "T\u00E9l\u00E9charger l\u2019appli",
    "cta.partnerWithUs": "Devenez partenaire",

    // ── Footer ──
    "footer.platform": "Plateforme",
    "footer.solutions": "Solutions",
    "footer.company": "Entreprise",
    "footer.cities": "Villes",
    "footer.aboutUs": "\u00C0 propos",
    "footer.contact": "Contact",
    "footer.blog": "Blog",
    "footer.howItWorks": "Comment JABB fonctionne",
    "footer.termsOfService": "Conditions d\u2019utilisation",
    "footer.privacyPolicy": "Politique de confidentialit\u00E9",
    "footer.cookiePolicy": "Politique de cookies",
    "footer.allRightsReserved": "Tous droits r\u00E9serv\u00E9s JABB",

    // ── Orbit ──
    "orbit.badge": "Omnicanal",
    "orbit.title": "Chaque point de contact, une plateforme",
    "orbit.subtitle": "JABB capture les donn\u00E9es d\u2019exp\u00E9rience client sur tous les canaux \u2014 web, mobile, en magasin et au-del\u00E0.",

    // ── Common ──
    "common.english": "English",
    "common.french": "Fran\u00E7ais",
    "common.arabic": "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    "common.dark": "Sombre",
    "common.light": "Clair",
  },

  /* ══════════════════════════════════════════════════
     ARABIC  (natural Moroccan-audience Arabic)
     ══════════════════════════════════════════════════ */
  ar: {
    // ── Nav / Header ──
    "nav.becomeJabber": "\u0627\u0646\u0636\u0645 \u0643\u0640 JABBer",
    "nav.becomePartner": "\u0643\u0646 \u0634\u0631\u064A\u0643\u064B\u0627",
    "nav.services": "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
    "nav.cities": "\u0627\u0644\u0645\u062F\u0646",
    "nav.faq": "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    "nav.about": "\u0645\u0646 \u0646\u062D\u0646",
    "nav.contact": "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",

    // ── Hero ──
    "hero.title": "\u0643\u0644 \u0631\u0624\u0649 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0644\u2026 \u0641\u064A \u062A\u0637\u0628\u064A\u0642 \u0648\u0627\u062D\u062F",
    "hero.subtitle":
      "JABB\u060C \u0623\u0648\u0644 \u0645\u0646\u0635\u0629 \u0645\u0648\u0627\u0637\u0646\u064A\u0629 \u0644\u0644\u062A\u0633\u0648\u0642 \u0627\u0644\u062E\u0641\u064A\u060C \u062A\u0648\u0641\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u064A\u062F\u0627\u0646\u064A\u0629 \u0645\u0648\u062B\u0642\u0629 \u0628\u0627\u0644\u0640 GPS \u0639\u0644\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u2014 \u0628\u0633\u0631\u0639\u0629 \u0648\u0645\u0648\u062B\u0648\u0642\u064A\u0629 \u0648\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629.",
    "hero.downloadOn": "\u062D\u0645\u0651\u0644 \u0645\u0646",
    "hero.appStore": "App Store",
    "hero.getItOn": "\u0645\u062A\u0648\u0641\u0631 \u0639\u0644\u0649",
    "hero.googlePlay": "Google Play",
    "hero.webDashboard": "\u0623\u0648 \u0627\u062F\u062E\u0644 \u0644\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0639\u0628\u0631 \u0627\u0644\u0648\u064A\u0628",

    // ── Stats ──
    "stats.jabbers": "\u0645\u0642\u064A\u0651\u0645\u0648\u0646",
    "stats.evaluations": "\u062A\u0642\u064A\u064A\u0645\u0627\u062A",
    "stats.cities": "\u0645\u062F\u0646",
    "stats.accuracy": "\u062F\u0642\u0629",

    // ── How It Works ──
    "howItWorks.title": "\u0643\u064A\u0641 \u064A\u0639\u0645\u0644",
    "howItWorks.subtitle": "\u0627\u0628\u062F\u0623 \u0627\u0644\u0631\u0628\u062D \u0641\u064A 4 \u062E\u0637\u0648\u0627\u062A \u0628\u0633\u064A\u0637\u0629",

    "howItWorks.step1.title": "\u062D\u0645\u0651\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642",
    "howItWorks.step1.desc":
      "\u062D\u0645\u0651\u0644 JABB \u0645\u0646 App Store \u0623\u0648 Google Play \u0648\u0623\u0646\u0634\u0626 \u062D\u0633\u0627\u0628\u0643 \u0627\u0644\u0645\u062C\u0627\u0646\u064A \u0641\u064A \u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u062A\u064A\u0646.",
    "howItWorks.step2.title": "\u0627\u0642\u0628\u0644 \u0645\u0647\u0645\u0629",
    "howItWorks.step2.desc":
      "\u062A\u0635\u0641\u062D \u0645\u0647\u0627\u0645 \u0627\u0644\u062A\u0633\u0648\u0642 \u0627\u0644\u062E\u0641\u064A \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0628\u0627\u0644\u0642\u0631\u0628 \u0645\u0646\u0643 \u0648\u0627\u062E\u062A\u0631 \u0645\u0627 \u064A\u0646\u0627\u0633\u0628 \u062C\u062F\u0648\u0644\u0643.",
    "howItWorks.step3.title": "\u0642\u064A\u0651\u0645 \u0648\u0623\u0631\u0633\u0644",
    "howItWorks.step3.desc":
      "\u0632\u0631 \u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0623\u0643\u0645\u0644 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0645\u0648\u062B\u0642\u0629 \u0628\u0627\u0644\u0640 GPS\u060C \u0648\u0623\u0631\u0633\u0644 \u062A\u0642\u064A\u064A\u0645\u0643 \u0645\u0639 \u0627\u0644\u0635\u0648\u0631.",
    "howItWorks.step4.title": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0623\u062C\u0631\u0643",
    "howItWorks.step4.desc":
      "\u0628\u0639\u062F \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062A\u0642\u0631\u064A\u0631\u0643\u060C \u062A\u064F\u0636\u0627\u0641 \u0623\u0631\u0628\u0627\u062D\u0643 \u0625\u0644\u0649 \u0645\u062D\u0641\u0638\u0629 JABB. \u0627\u0633\u062D\u0628 \u0623\u0645\u0648\u0627\u0644\u0643 \u0645\u062A\u0649 \u0634\u0626\u062A.",

    // ── Services ──
    "services.mysteryShopping.title": "\u0627\u0644\u062A\u0633\u0648\u0642 \u0627\u0644\u062E\u0641\u064A",
    "services.mysteryShopping.subtitle":
      "\u0634\u0627\u0647\u062F \u0639\u0645\u0644\u0643 \u0628\u0639\u064A\u0648\u0646 \u0639\u0645\u0644\u0627\u0626\u0643",
    "services.mysteryShopping.desc":
      "\u0623\u0631\u0633\u0644 \u0645\u062A\u0633\u0648\u0642\u064A\u0646 \u0633\u0631\u064A\u064A\u0646 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0637\u0646\u064A\u0646 \u0644\u062A\u0642\u064A\u064A\u0645 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0641\u064A \u0646\u0642\u0627\u0637 \u0628\u064A\u0639\u0643. \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0648\u062B\u0642\u0629 \u0628\u0627\u0644\u0640 GPS\u060C \u0645\u062D\u0627\u064A\u062F\u0629 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0646\u0641\u064A\u0630.",
    "services.mysteryShopping.cta": "\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u0642\u064A\u064A\u0645",

    "services.cxAudits.title": "\u062A\u062F\u0642\u064A\u0642 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0644",
    "services.cxAudits.subtitle":
      "\u0631\u0624\u064A\u0629 \u0634\u0627\u0645\u0644\u0629 360\u00B0 \u0644\u0645\u0633\u0627\u0631 \u0639\u0645\u064A\u0644\u0643 \u0628\u0627\u0644\u0643\u0627\u0645\u0644",
    "services.cxAudits.desc":
      "\u062A\u062F\u0642\u064A\u0642 \u0634\u0627\u0645\u0644 \u0645\u0646 \u0627\u0644\u0627\u0646\u0637\u0628\u0627\u0639 \u0627\u0644\u0623\u0648\u0644 \u062D\u062A\u0649 \u0627\u0644\u062F\u0641\u0639. \u062D\u062F\u062F \u0627\u0644\u062B\u063A\u0631\u0627\u062A\u060C \u0642\u0627\u0631\u0646 \u0645\u0639 \u0627\u0644\u0645\u0646\u0627\u0641\u0633\u064A\u0646\u060C \u0648\u062D\u0633\u0651\u0646 \u0645\u0639\u062F\u0644\u0627\u062A \u0627\u0644\u0631\u0636\u0627.",
    "services.cxAudits.cta": "\u0627\u0637\u0644\u0628 \u062A\u062F\u0642\u064A\u0642\u064B\u0627",

    "services.voiceOfCustomer.title": "\u0635\u0648\u062A \u0627\u0644\u0639\u0645\u064A\u0644",
    "services.voiceOfCustomer.subtitle":
      "\u0627\u0633\u0645\u0639 \u0645\u0627 \u062A\u0641\u0643\u0631 \u0641\u064A\u0647 \u0627\u0644\u0623\u063A\u0644\u0628\u064A\u0629 \u0627\u0644\u0635\u0627\u0645\u062A\u0629 \u0641\u0639\u0644\u0627\u064B",
    "services.voiceOfCustomer.desc":
      "\u0627\u0644\u062A\u0642\u0637 \u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0639\u0628\u0631 \u0645\u0642\u0627\u0628\u0644\u0627\u062A \u0645\u0628\u0627\u0634\u0631\u0629\u060C \u0627\u0633\u062A\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0632\u064A\u0627\u0631\u0629\u060C \u0648\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0645\u0634\u0627\u0639\u0631 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A. \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A.",
    "services.voiceOfCustomer.cta": "\u0627\u0644\u062A\u0642\u0637 \u0627\u0644\u0622\u0631\u0627\u0621",

    "services.dashboard.title": "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",
    "services.dashboard.subtitle":
      "\u0645\u0631\u0643\u0632 \u0642\u064A\u0627\u062F\u0629 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0644\u060C \u062F\u0627\u0626\u0645\u064B\u0627 \u0641\u064A \u0627\u0644\u062E\u062F\u0645\u0629",
    "services.dashboard.desc":
      "\u062A\u0627\u0628\u0639 \u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0623\u062F\u0627\u0621\u060C \u0631\u0627\u0642\u0628 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A\u060C \u0648\u062A\u0635\u0648\u0651\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u062F\u0627\u0621 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A. \u0644\u0648\u062D\u0629 \u0648\u0627\u062D\u062F\u0629 \u0644\u0643\u0644 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A\u0643.",
    "services.dashboard.cta": "\u0639\u0631\u0636 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",

    "services.aiReports.title": "\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",
    "services.aiReports.subtitle":
      "\u0645\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0628\u0639\u062B\u0631\u0629 \u0625\u0644\u0649 \u0648\u0636\u0648\u062D \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A",
    "services.aiReports.desc":
      "\u0627\u0633\u062A\u063A\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u064A\u062F\u0627\u0646\u064A\u0629 \u0625\u0644\u0649 \u062A\u0648\u0635\u064A\u0627\u062A \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629. \u062A\u062D\u0644\u064A\u0644 \u0623\u0633\u0631\u0639\u060C \u0642\u0631\u0627\u0631\u0627\u062A \u0623\u0630\u0643\u0649.",
    "services.aiReports.cta": "\u0623\u0646\u0634\u0626 \u062A\u0642\u0631\u064A\u0631\u064B\u0627",

    "services.rewardSystem.title": "\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A",
    "services.rewardSystem.subtitle":
      "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0645\u0642\u0627\u0628\u0644 \u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u062A\u062C\u0627\u0631\u0628\u0643 \u0628\u0635\u062F\u0642",
    "services.rewardSystem.desc":
      "\u0623\u0643\u0645\u0644 \u0627\u0644\u0645\u0647\u0627\u0645\u060C \u0627\u0631\u0628\u062D \u0639\u0645\u0644\u0627\u062A JABB\u060C \u0627\u0631\u062A\u0642\u0650 \u0639\u0628\u0631 \u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A\u060C \u0648\u0627\u0633\u062D\u0628 \u0641\u0648\u0631\u064B\u0627. \u0643\u0644\u0645\u0627 \u0642\u064A\u0651\u0645\u062A \u0623\u0643\u062B\u0631\u060C \u0631\u0628\u062D\u062A \u0623\u0643\u062B\u0631.",
    "services.rewardSystem.cta": "\u0627\u0631\u0628\u062D \u0645\u0643\u0627\u0641\u0622\u062A",

    // ── What You Get ──
    "whatYouGet.title": "\u0645\u0627\u0630\u0627 \u0633\u062A\u062D\u0635\u0644 \u0639\u0644\u064A\u0647",
    "whatYouGet.subtitle": "\u0645\u0632\u0627\u064A\u0627 \u0644\u0644\u062C\u0645\u064A\u0639",
    "whatYouGet.tabJabbers": "\u0644\u0644\u0645\u0642\u064A\u0651\u0645\u064A\u0646",
    "whatYouGet.tabBusinesses": "\u0644\u0644\u0634\u0631\u0643\u0627\u062A",

    "whatYouGet.earnMoney.title": "\u0627\u0631\u0628\u062D \u0627\u0644\u0645\u0627\u0644",
    "whatYouGet.earnMoney.desc":
      "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0623\u062C\u0631 \u0645\u0642\u0627\u0628\u0644 \u0643\u0644 \u0645\u0647\u0645\u0629 \u0645\u0639\u062A\u0645\u062F\u0629 \u062A\u0646\u062C\u0632\u0647\u0627.",
    "whatYouGet.flexibleSchedule.title": "\u062C\u062F\u0648\u0644 \u0645\u0631\u0646",
    "whatYouGet.flexibleSchedule.desc":
      "\u0627\u0634\u062A\u063A\u0644 \u0648\u0642\u062A \u0645\u0627 \u062A\u0628\u063A\u064A\u060C \u0648\u0623\u064A\u0646\u0645\u0627 \u062A\u0634\u0627\u0621. \u0628\u062F\u0648\u0646 \u0633\u0627\u0639\u0627\u062A \u0645\u062D\u062F\u062F\u0629.",
    "whatYouGet.easyMissions.title": "\u0645\u0647\u0627\u0645 \u0633\u0647\u0644\u0629",
    "whatYouGet.easyMissions.desc":
      "\u0642\u0648\u0627\u0626\u0645 \u062A\u062D\u0642\u0642 \u0628\u0633\u064A\u0637\u0629 \u062A\u0631\u0634\u062F\u0643 \u062E\u0644\u0627\u0644 \u0643\u0644 \u062A\u0642\u064A\u064A\u0645.",

    "whatYouGet.realTimeCX.title": "\u0628\u064A\u0627\u0646\u0627\u062A CX \u0641\u0648\u0631\u064A\u0629",
    "whatYouGet.realTimeCX.desc":
      "\u0631\u0627\u0642\u0628 \u0645\u0624\u0634\u0631\u0627\u062A \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 \u0644\u062D\u0638\u0629 \u0628\u0644\u062D\u0638\u0629.",
    "whatYouGet.gpsReports.title": "\u062A\u0642\u0627\u0631\u064A\u0631 \u0645\u0648\u062B\u0642\u0629 \u0628\u0627\u0644\u0640 GPS",
    "whatYouGet.gpsReports.desc":
      "\u0643\u0644 \u062A\u0642\u064A\u064A\u0645 \u0645\u0648\u0633\u0648\u0645 \u062C\u063A\u0631\u0627\u0641\u064A\u064B\u0627 \u0644\u0636\u0645\u0627\u0646 \u0627\u0644\u0645\u0635\u062F\u0627\u0642\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629.",
    "whatYouGet.aiInsights.title": "\u0631\u0624\u0649 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",
    "whatYouGet.aiInsights.desc":
      "\u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0630\u0643\u064A\u0629 \u062A\u062D\u0648\u0651\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0627\u0645 \u0625\u0644\u0649 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629.",

    // ── Partners ──
    "partners.title": "\u0641\u0631\u0635\u062A\u0643 \u0644\u0644\u0646\u062C\u0627\u062D \u062A\u0628\u062F\u0623 \u0645\u0646 \u0647\u0646\u0627!",
    "partners.subtitle":
      "\u0633\u0648\u0627\u0621 \u0643\u0646\u062A \u0645\u0642\u064A\u0651\u0645\u064B\u0627 \u0645\u062D\u062A\u0631\u0641\u064B\u0627 \u0623\u0648 \u0635\u0627\u062D\u0628 \u0634\u0631\u0643\u0629\u060C \u0646\u062D\u0646 \u0647\u0646\u0627 \u0644\u0645\u0631\u0627\u0641\u0642\u062A\u0643 \u0641\u064A \u0643\u0644 \u062E\u0637\u0648\u0629.",
    "partners.jabber.title": "\u0627\u0646\u0636\u0645 \u0643\u0640 JABBer",
    "partners.jabber.desc":
      "\u062D\u0645\u0651\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u060C \u0623\u0643\u0645\u0644 \u0645\u0647\u0627\u0645 \u0628\u0627\u0644\u0642\u0631\u0628 \u0645\u0646\u0643\u060C \u0648\u0627\u0631\u0628\u062D \u0645\u0642\u0627\u0628\u0644 \u0643\u0644 \u062A\u0642\u064A\u064A\u0645 \u0645\u0639\u062A\u0645\u062F. \u0644\u0627 \u062E\u0628\u0631\u0629 \u0633\u0627\u0628\u0642\u0629 \u0645\u0637\u0644\u0648\u0628\u0629.",
    "partners.jabber.cta": "\u0627\u0628\u062F\u0623 \u0627\u0644\u0631\u0628\u062D \u0627\u0644\u0622\u0646",
    "partners.business.title": "\u0643\u0646 \u0634\u0631\u064A\u0643\u064B\u0627",
    "partners.business.desc":
      "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A CX \u0641\u0648\u0631\u064A\u0629 \u0644\u0639\u0644\u0627\u0645\u062A\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629. \u0645\u0642\u064A\u0651\u0645\u0648\u0646\u0627 \u0627\u0644\u0645\u0648\u0627\u0637\u0646\u0648\u0646 \u064A\u0642\u062F\u0645\u0648\u0646 \u062A\u0642\u0627\u0631\u064A\u0631 \u0645\u064A\u062F\u0627\u0646\u064A\u0629 \u0645\u0648\u062B\u0642\u0629 \u0628\u0627\u0644\u0640 GPS \u0648\u0645\u062D\u0627\u064A\u062F\u0629.",
    "partners.business.cta": "\u0643\u0646 \u0634\u0631\u064A\u0643\u0646\u0627",

    // ── FAQ ──
    "faq.title": "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    "faq.subtitle": "\u0639\u0646\u062F\u0643 \u0633\u0624\u0627\u0644\u061F \u0646\u062D\u0646 \u0647\u0646\u0627 \u0644\u0645\u0633\u0627\u0639\u062F\u062A\u0643.",
    "faq.anotherQuestion": "\u0639\u0646\u062F\u0643 \u0633\u0624\u0627\u0644 \u0622\u062E\u0631\u061F",

    "faq.q1": "\u0645\u0627 \u0647\u0648 JABB\u061F",
    "faq.a1":
      "JABB \u0647\u064A \u0623\u0648\u0644 \u0645\u0646\u0635\u0629 \u0645\u0648\u0627\u0637\u0646\u064A\u0629 \u0644\u0644\u062A\u0633\u0648\u0642 \u0627\u0644\u062E\u0641\u064A \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628. \u062A\u0631\u0628\u0637 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0628\u062D\u062B \u0639\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u062D\u0642\u064A\u0642\u064A\u0629 \u0644\u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0645\u0648\u0627\u0637\u0646\u064A\u0646 \u064A\u062A\u0642\u0627\u0636\u0648\u0646 \u0623\u062C\u0631\u064B\u0627 \u0645\u0642\u0627\u0628\u0644 \u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0641\u0639\u0644\u064A\u0629.",
    "faq.q2": "\u0643\u064A\u0641 \u0623\u0635\u0628\u062D JABBer\u061F",
    "faq.a2":
      "\u062D\u0645\u0651\u0644 \u062A\u0637\u0628\u064A\u0642 JABB \u0645\u0646 App Store \u0623\u0648 Google Play\u060C \u0623\u0646\u0634\u0626 \u062D\u0633\u0627\u0628\u064B\u0627 \u0645\u062C\u0627\u0646\u064A\u064B\u0627\u060C \u0648\u0627\u0628\u062F\u0623 \u062A\u0635\u0641\u062D \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0628\u0627\u0644\u0642\u0631\u0628 \u0645\u0646\u0643. \u0644\u0627 \u062D\u0627\u062C\u0629 \u0644\u0623\u064A \u062E\u0628\u0631\u0629 \u0633\u0627\u0628\u0642\u0629.",
    "faq.q3": "\u0643\u064A\u0641 \u064A\u0639\u0645\u0644 \u0646\u0638\u0627\u0645 \u0627\u0644\u062F\u0641\u0639\u061F",
    "faq.a3":
      "\u0628\u0639\u062F \u0627\u0639\u062A\u0645\u0627\u062F \u0643\u0644 \u0645\u0647\u0645\u0629\u060C \u062A\u064F\u0636\u0627\u0641 \u0623\u0631\u0628\u0627\u062D\u0643 \u0625\u0644\u0649 \u0645\u062D\u0641\u0638\u0629 JABB. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0633\u062D\u0628 \u0641\u064A \u0623\u064A \u0648\u0642\u062A \u0639\u0628\u0631 \u0637\u0631\u0642 \u0627\u0644\u0633\u062D\u0628 \u0627\u0644\u0645\u062A\u0627\u062D\u0629.",
    "faq.q4": "\u0647\u0644 JABB \u0645\u062A\u0648\u0641\u0631 \u0641\u064A \u0645\u062F\u064A\u0646\u062A\u064A\u061F",
    "faq.a4":
      "JABB \u0646\u0634\u0637 \u062D\u0627\u0644\u064A\u064B\u0627 \u0641\u064A \u0623\u0643\u0628\u0631 \u0627\u0644\u0645\u062F\u0646 \u0627\u0644\u0645\u063A\u0631\u0628\u064A\u0629: \u0627\u0644\u062F\u0627\u0631 \u0627\u0644\u0628\u064A\u0636\u0627\u0621\u060C \u0627\u0644\u0631\u0628\u0627\u0637\u060C \u0645\u0631\u0627\u0643\u0634\u060C \u0637\u0646\u062C\u0629\u060C \u0641\u0627\u0633\u060C \u0623\u063A\u0627\u062F\u064A\u0631 \u0648\u063A\u064A\u0631\u0647\u0627. \u0648\u0646\u062D\u0646 \u0646\u062A\u0648\u0633\u0639 \u0628\u0633\u0631\u0639\u0629.",
    "faq.q5": "\u0643\u064A\u0641 \u064A\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A\u061F",
    "faq.a5":
      "\u0643\u0644 \u062A\u0642\u064A\u064A\u0645 \u0645\u0648\u062B\u0642 \u0628\u0627\u0644\u0640 GPS\u060C \u0645\u0645\u0627 \u064A\u0639\u0646\u064A \u0623\u0646\u0643 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u062D\u0627\u0636\u0631\u064B\u0627 \u0641\u0639\u0644\u064A\u064B\u0627 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639. \u0646\u0633\u062A\u062E\u062F\u0645 \u0623\u064A\u0636\u064B\u0627 \u0627\u0644\u062A\u062D\u0642\u0642 \u0628\u0627\u0644\u0635\u0648\u0631 \u0648\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062C\u0648\u062F\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A.",
    "faq.q6": "\u0645\u0627 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u064A \u064A\u0645\u0643\u0646\u0647\u0627 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 JABB\u061F",
    "faq.a6":
      "\u0623\u064A \u0634\u0631\u0643\u0629 \u0644\u0647\u0627 \u0646\u0642\u0627\u0637 \u0628\u064A\u0639 \u0641\u0639\u0644\u064A\u0629: \u0645\u062A\u0627\u062C\u0631\u060C \u0645\u0637\u0627\u0639\u0645\u060C \u0628\u0646\u0648\u0643\u060C \u0641\u0646\u0627\u062F\u0642\u060C \u0645\u062D\u0644\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644\u0627\u062A\u060C \u0645\u062D\u0637\u0627\u062A \u0627\u0644\u0648\u0642\u0648\u062F\u060C \u0635\u064A\u062F\u0644\u064A\u0627\u062A \u0648\u063A\u064A\u0631\u0647\u0627.",
    "faq.q7": "\u0643\u0645 \u064A\u0645\u0643\u0646\u0646\u064A \u0623\u0646 \u0623\u0631\u0628\u062D \u0643\u0640 JABBer\u061F",
    "faq.a7":
      "\u0627\u0644\u0623\u0631\u0628\u0627\u062D \u062A\u062E\u062A\u0644\u0641 \u062D\u0633\u0628 \u0646\u0648\u0639 \u0627\u0644\u0645\u0647\u0645\u0629 \u0648\u062A\u0639\u0642\u064A\u062F\u0647\u0627. \u0643\u0644\u0645\u0627 \u0623\u0643\u0645\u0644\u062A \u0645\u0647\u0627\u0645 \u0623\u0643\u062B\u0631 \u0648\u0632\u0627\u062F\u062A \u062F\u0642\u062A\u0643\u060C \u0631\u0628\u062D\u062A \u0623\u0643\u062B\u0631. \u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0642\u064A\u0651\u0645\u064A\u0646 \u064A\u0641\u062A\u062D\u0648\u0646 \u0645\u0647\u0627\u0645 \u0645\u0645\u064A\u0632\u0629 \u0628\u0639\u0648\u0627\u0626\u062F \u0623\u0639\u0644\u0649.",
    "faq.q8": "\u0647\u0644 \u0628\u064A\u0627\u0646\u0627\u062A\u064A \u0622\u0645\u0646\u0629\u061F",
    "faq.a8":
      "\u0628\u0627\u0644\u062A\u0623\u0643\u064A\u062F. JABB \u064A\u0633\u062A\u062E\u062F\u0645 \u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644\u0627\u062A \u062A\u0634\u0641\u064A\u0631 \u0648\u062D\u0645\u0627\u064A\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0641\u0642 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0635\u0646\u0627\u0639\u0629. \u0645\u0639\u0644\u0648\u0645\u0627\u062A\u0643 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0644\u0627 \u062A\u064F\u0634\u0627\u0631\u0643 \u0645\u0639 \u0623\u0637\u0631\u0627\u0641 \u062E\u0627\u0631\u062C\u064A\u0629 \u062F\u0648\u0646 \u0645\u0648\u0627\u0641\u0642\u062A\u0643.",
    "faq.q9": "\u0647\u0644 \u064A\u0645\u0643\u0646\u0646\u064A \u0627\u0644\u0642\u064A\u0627\u0645 \u0628\u0627\u0644\u0645\u0647\u0627\u0645 \u0628\u062F\u0648\u0627\u0645 \u062C\u0632\u0626\u064A\u061F",
    "faq.a9":
      "\u0646\u0639\u0645! JABB \u0645\u0635\u0645\u0645 \u0644\u064A\u0643\u0648\u0646 \u0645\u0631\u0646\u064B\u0627. \u0623\u0646\u062A \u062A\u062E\u062A\u0627\u0631 \u0645\u062A\u0649 \u0648\u0623\u064A\u0646 \u062A\u0634\u062A\u063A\u0644. \u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0645\u0642\u064A\u0651\u0645\u064A\u0646 \u064A\u0639\u0645\u0644\u0648\u0646 \u0628\u0627\u0644\u0645\u0648\u0627\u0632\u0627\u0629 \u0645\u0639 \u0648\u0638\u0627\u0626\u0641\u0647\u0645 \u0623\u0648 \u062F\u0631\u0627\u0633\u062A\u0647\u0645.",
    "faq.q10": "\u0643\u064A\u0641 \u062A\u0635\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0625\u0644\u0649 \u062A\u0642\u0627\u0631\u064A\u0631\u0647\u0627\u061F",
    "faq.a10":
      "\u062A\u0635\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0625\u0644\u0649 \u062A\u0642\u0627\u0631\u064A\u0631\u0647\u0627 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A \u0639\u0628\u0631 \u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 JABB \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629. \u062A\u0634\u0645\u0644 \u062A\u062A\u0628\u0639 \u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0623\u062F\u0627\u0621\u060C \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A\u060C \u0631\u0624\u0649 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A\u060C \u0648\u0628\u064A\u0627\u0646\u0627\u062A \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0635\u062F\u064A\u0631.",

    // ── CTA ──
    "cta.title": "\u0645\u0633\u062A\u0639\u062F \u0644\u062A\u062D\u0648\u064A\u0644 \u062A\u062C\u0631\u0628\u0629 \u0639\u0645\u0644\u0627\u0626\u0643\u061F",
    "cta.subtitle":
      "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0623\u0643\u062B\u0631 \u0645\u0646 500 \u0645\u0642\u064A\u0651\u0645 \u0648\u0634\u0631\u0643\u0629 \u064A\u0633\u062A\u062E\u062F\u0645\u0648\u0646 JABB \u0644\u062A\u0648\u0641\u064A\u0631 \u0630\u0643\u0627\u0621 CX \u0645\u0648\u062B\u0642 \u0628\u0627\u0644\u0640 GPS \u0639\u0628\u0631 \u0627\u0644\u0645\u063A\u0631\u0628.",
    "cta.downloadApp": "\u062D\u0645\u0651\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642",
    "cta.partnerWithUs": "\u0643\u0646 \u0634\u0631\u064A\u0643\u0646\u0627",

    // ── Footer ──
    "footer.platform": "\u0627\u0644\u0645\u0646\u0635\u0629",
    "footer.solutions": "\u0627\u0644\u062D\u0644\u0648\u0644",
    "footer.company": "\u0627\u0644\u0634\u0631\u0643\u0629",
    "footer.cities": "\u0627\u0644\u0645\u062F\u0646",
    "footer.aboutUs": "\u0645\u0646 \u0646\u062D\u0646",
    "footer.contact": "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
    "footer.blog": "\u0627\u0644\u0645\u062F\u0648\u0646\u0629",
    "footer.howItWorks": "\u0643\u064A\u0641 \u064A\u0639\u0645\u0644 JABB",
    "footer.termsOfService": "\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645",
    "footer.privacyPolicy": "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629",
    "footer.cookiePolicy": "\u0633\u064A\u0627\u0633\u0629 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637",
    "footer.allRightsReserved": "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 JABB",

    // ── Orbit ──
    "orbit.badge": "\u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0642\u0646\u0648\u0627\u062A",
    "orbit.title": "\u0643\u0644 \u0646\u0642\u0637\u0629 \u0627\u062A\u0635\u0627\u0644\u060C \u0645\u0646\u0635\u0629 \u0648\u0627\u062D\u062F\u0629",
    "orbit.subtitle": "JABB \u064A\u0644\u062A\u0642\u0637 \u0628\u064A\u0627\u0646\u0627\u062A \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0639\u0628\u0631 \u062C\u0645\u064A\u0639 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u2014 \u0627\u0644\u0648\u064A\u0628\u060C \u0627\u0644\u0647\u0627\u062A\u0641\u060C \u0627\u0644\u0645\u062A\u062C\u0631\u060C \u0648\u0623\u0643\u062B\u0631.",

    // ── Common ──
    "common.english": "English",
    "common.french": "Fran\u00E7ais",
    "common.arabic": "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    "common.dark": "\u062F\u0627\u0643\u0646",
    "common.light": "\u0641\u0627\u062A\u062D",
  },
} as const;
