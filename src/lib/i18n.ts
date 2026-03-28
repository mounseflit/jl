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
    "hero.title": "Your voice matters.\nMake it heard.",
    "hero.subtitle":
      "Share your experience in 30 seconds \u2014 text, audio, or AI-guided. Earn JABB Coins & XP. We deliver your review directly to the business so they can actually improve.",
    "hero.downloadOn": "Download on the",
    "hero.appStore": "App Store",
    "hero.getItOn": "Get it on",
    "hero.googlePlay": "Google Play",
    "hero.webDashboard": "Or access the web dashboard",

    // ── Stats ──
    "stats.jabbers": "JABBers",
    "stats.evaluations": "Reviews",
    "stats.cities": "Cities",
    "stats.accuracy": "Accuracy",

    // ── How It Works ──
    "howItWorks.title": "How It Works",
    "howItWorks.subtitle": "Review, earn & level up in 4 steps",

    "howItWorks.step1.title": "Download the App",
    "howItWorks.step1.desc":
      "Get JABB from the App Store or Google Play. Create your free account in under two minutes and start exploring.",
    "howItWorks.step2.title": "Share Your Experience",
    "howItWorks.step2.desc":
      "Rate a place, record an audio note, snap a photo, or let our AI guide you through deeper questions \u2014 all in 30 seconds.",
    "howItWorks.step3.title": "Earn Coins & XP",
    "howItWorks.step3.desc":
      "Every review earns you JABB Coins and XP. Level up, unlock perks, and redeem coins at partner businesses near you.",
    "howItWorks.step4.title": "Your Voice Gets Delivered",
    "howItWorks.step4.desc":
      "We send your structured feedback directly to the business. They act on it \u2014 and you get notified when they do.",

    // ── Services ──
    "services.mysteryShopping.title": "Mystery Shopping",
    "services.mysteryShopping.subtitle":
      "See your business through your customer\u2019s eyes",
    "services.mysteryShopping.desc":
      "Top-level JABBers with high XP get invited to mystery client missions. Execute structured audits at real locations with full reports, scoring, and GPS verification.",
    "services.mysteryShopping.cta": "Learn More",

    "services.cxAudits.title": "CX Audits",
    "services.cxAudits.subtitle":
      "360\u00B0 view of your entire customer journey",
    "services.cxAudits.desc":
      "Launch omnichannel CX missions. Your best JABBers execute in-store and digital audits with structured reports, scoring, and multi-site benchmarking.",
    "services.cxAudits.cta": "Request an Audit",

    "services.voiceOfCustomer.title": "Voice of Customer",
    "services.voiceOfCustomer.subtitle":
      "Capture what the silent majority really thinks",
    "services.voiceOfCustomer.desc":
      "96% of unhappy customers never complain \u2014 they just leave. JABB captures real feedback via audio, text, photos, and AI-driven Q&A before customers disappear.",
    "services.voiceOfCustomer.cta": "Capture Feedback",

    "services.dashboard.title": "Business Dashboard",
    "services.dashboard.subtitle": "Your CX command center, always on",
    "services.dashboard.desc":
      "Real-time dashboard with AI analysis by location, team, hour, and channel. Instant alerts, automated reports, and inter-site benchmarking \u2014 your single source of CX truth.",
    "services.dashboard.cta": "View Dashboard",

    "services.aiReports.title": "AI-Powered Reports",
    "services.aiReports.subtitle":
      "From raw feedback to strategic clarity",
    "services.aiReports.desc":
      "AI categorizes sentiment, detects issues, and generates actionable reports automatically. Faster analysis, smarter decisions \u2014 no manual processing needed.",
    "services.aiReports.cta": "Generate Report",

    "services.rewardSystem.title": "Coins & Rewards",
    "services.rewardSystem.subtitle":
      "Get rewarded for making your voice heard",
    "services.rewardSystem.desc":
      "Every review earns JABB Coins and XP. Level up through tiers, unlock mystery missions, and redeem coins at partner stores \u2014 turning your opinions into real perks.",
    "services.rewardSystem.cta": "Start Earning",

    // ── What You Get ──
    "whatYouGet.title": "What You Get",
    "whatYouGet.subtitle": "Benefits for everyone",
    "whatYouGet.tabJabbers": "For JABBers",
    "whatYouGet.tabBusinesses": "For Businesses",

    "whatYouGet.earnMoney.title": "Earn Coins & XP",
    "whatYouGet.earnMoney.desc":
      "Every review earns JABB Coins you can redeem at partner businesses, plus XP to level up.",
    "whatYouGet.flexibleSchedule.title": "30-Second Reviews",
    "whatYouGet.flexibleSchedule.desc":
      "Quick or deep \u2014 you choose. Star ratings, audio notes, photos, or full AI-guided Q&A.",
    "whatYouGet.easyMissions.title": "Mystery Missions",
    "whatYouGet.easyMissions.desc":
      "High-level JABBers unlock exclusive mystery client missions with bigger rewards.",

    "whatYouGet.realTimeCX.title": "Real-Time Feedback",
    "whatYouGet.realTimeCX.desc":
      "See customer reviews the moment they happen \u2014 by location, team, and hour.",
    "whatYouGet.gpsReports.title": "GPS-Verified Reports",
    "whatYouGet.gpsReports.desc":
      "Every review is geotagged and AI-analyzed for total authenticity.",
    "whatYouGet.aiInsights.title": "Closed-Loop CX",
    "whatYouGet.aiInsights.desc":
      "Customers are notified when you act on their feedback. Trust builds. Loyalty grows.",

    // ── Partners ──
    "partners.title": "Join the JABB ecosystem",
    "partners.subtitle":
      "Whether you want your voice heard or your business improved \u2014 JABB connects both sides.",
    "partners.jabber.title": "Become a JABBer",
    "partners.jabber.desc":
      "Download the app, review places you visit, and earn JABB Coins & XP. Redeem at partner stores. Level up to unlock mystery missions with bigger rewards.",
    "partners.jabber.cta": "Start reviewing",
    "partners.business.title": "Become a Partner",
    "partners.business.desc":
      "Get real-time, structured customer feedback delivered directly to your dashboard. AI-analyzed, GPS-verified, and actionable \u2014 from 250 MAD/month per location.",
    "partners.business.cta": "Partner with us",

    // ── FAQ ──
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Have a question? We are here to help.",
    "faq.anotherQuestion": "Have another question?",

    "faq.q1": "What is JABB?",
    "faq.a1":
      "JABB is the first universal Voice of Customer platform in Morocco. It lets everyday people share their experiences at businesses in 30 seconds \u2014 via text, audio, photos, or AI-guided Q&A \u2014 and delivers structured, actionable feedback directly to the business.",
    "faq.q2": "How do I become a JABBer?",
    "faq.a2":
      "Download the JABB app from the App Store or Google Play, create a free account, and start reviewing places you visit. No prior experience needed \u2014 just share your honest opinion.",
    "faq.q3": "How do rewards work?",
    "faq.a3":
      "Every review earns JABB Coins and XP. Coins can be redeemed at partner businesses (restaurants, stores, gas stations). XP levels you up \u2014 higher levels unlock exclusive mystery client missions with bigger rewards.",
    "faq.q4": "Is JABB available in my city?",
    "faq.a4":
      "JABB is currently launching in Casablanca and expanding to other major Moroccan cities. We\u2019re growing fast \u2014 follow us on the app to stay updated.",
    "faq.q5": "How does giving a review work?",
    "faq.a5":
      "You choose: Quick JABB (30 seconds \u2014 star rating, audio note, photo) or Tailored JABB (AI asks you personalized questions based on your context, swipe-style). Both earn coins.",
    "faq.q6": "What types of businesses can use JABB?",
    "faq.a6":
      "Any business: restaurants, retail stores, hotels, banks, telecom shops, gas stations, clinics, and more. JABB adapts to every sector with custom dashboards.",
    "faq.q7": "What are mystery missions?",
    "faq.a7":
      "Once you reach a high enough level and maintain good review quality, JABB invites you to mystery client missions \u2014 structured, in-depth audits at specific locations with premium coin rewards.",
    "faq.q8": "Is my data secure?",
    "faq.a8":
      "Absolutely. JABB uses industry-standard encryption and privacy-by-design principles. Your personal information is never shared with businesses \u2014 only your anonymized, structured feedback.",
    "faq.q9": "Does my feedback actually reach the business?",
    "faq.a9":
      "Yes! That\u2019s the whole point. We deliver your structured review directly to the business dashboard. They see it in real time, act on it, and you get notified when they do \u2014 closing the loop.",
    "faq.q10": "How do businesses access their reports?",
    "faq.a10":
      "Businesses use the JABB VOC dashboard \u2014 real-time AI analytics by location, team, hour, and channel. Instant alerts, automated reports, and inter-site benchmarking included.",

    // ── CTA ──
    "cta.title": "Your opinion is worth gold. Start sharing it.",
    "cta.subtitle":
      "Join 500+ JABBers already reviewing, earning coins, and making their voice heard across Morocco.",
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
    "hero.title": "Votre avis compte.\nFaites-le entendre.",
    "hero.subtitle":
      "Partagez votre exp\u00E9rience en 30 secondes \u2014 texte, audio ou guid\u00E9 par IA. Gagnez des JABB Coins et de l\u2019XP. Nous livrons votre avis directement au commerce pour qu\u2019il s\u2019am\u00E9liore.",
    "hero.downloadOn": "T\u00E9l\u00E9charger sur l\u2019",
    "hero.appStore": "App Store",
    "hero.getItOn": "Disponible sur",
    "hero.googlePlay": "Google Play",
    "hero.webDashboard": "Ou acc\u00E9der au tableau de bord web",

    // ── Stats ──
    "stats.jabbers": "JABBeurs",
    "stats.evaluations": "Avis",
    "stats.cities": "Villes",
    "stats.accuracy": "Pr\u00E9cision",

    // ── How It Works ──
    "howItWorks.title": "Comment \u00E7a marche",
    "howItWorks.subtitle": "\u00C9valuez, gagnez et progressez en 4 \u00E9tapes",

    "howItWorks.step1.title": "T\u00E9l\u00E9chargez l\u2019appli",
    "howItWorks.step1.desc":
      "T\u00E9l\u00E9chargez JABB depuis l\u2019App Store ou Google Play. Cr\u00E9ez votre compte gratuit en moins de deux minutes et commencez \u00E0 explorer.",
    "howItWorks.step2.title": "Partagez votre exp\u00E9rience",
    "howItWorks.step2.desc":
      "Notez un lieu, enregistrez une note audio, prenez une photo, ou laissez notre IA vous guider \u2014 le tout en 30 secondes.",
    "howItWorks.step3.title": "Gagnez Coins et XP",
    "howItWorks.step3.desc":
      "Chaque avis vous rapporte des JABB Coins et de l\u2019XP. Montez de niveau, d\u00E9bloquez des avantages et \u00E9changez vos coins chez nos partenaires.",
    "howItWorks.step4.title": "Votre voix est livr\u00E9e",
    "howItWorks.step4.desc":
      "Nous envoyons votre feedback structur\u00E9 directement au commerce. Il agit dessus \u2014 et vous \u00EAtes notifi\u00E9 quand c\u2019est fait.",

    // ── Services ──
    "services.mysteryShopping.title": "Mystery Shopping",
    "services.mysteryShopping.subtitle":
      "Voyez votre entreprise \u00E0 travers les yeux de vos clients",
    "services.mysteryShopping.desc":
      "Les JABBeurs de haut niveau avec un bon XP sont invit\u00E9s en missions client myst\u00E8re. Audits structur\u00E9s sur le terrain avec rapports complets, scoring et v\u00E9rification GPS.",
    "services.mysteryShopping.cta": "En savoir plus",

    "services.cxAudits.title": "Audits CX",
    "services.cxAudits.subtitle":
      "Vue \u00E0 360\u00B0 de votre parcours client",
    "services.cxAudits.desc":
      "Lancez des missions CX omnicanales. Vos meilleurs JABBeurs ex\u00E9cutent des audits en magasin et digitaux avec rapports structur\u00E9s, scoring et benchmarking multi-sites.",
    "services.cxAudits.cta": "Demander un audit",

    "services.voiceOfCustomer.title": "Voix du Client",
    "services.voiceOfCustomer.subtitle":
      "Capturez ce que la majorit\u00E9 silencieuse pense vraiment",
    "services.voiceOfCustomer.desc":
      "96% des clients insatisfaits ne se plaignent jamais \u2014 ils partent. JABB capture le feedback r\u00E9el via audio, texte, photos et Q&A pilot\u00E9 par IA avant qu\u2019ils ne disparaissent.",
    "services.voiceOfCustomer.cta": "Capturer les retours",

    "services.dashboard.title": "Tableau de Bord",
    "services.dashboard.subtitle":
      "Votre centre de commande CX, toujours actif",
    "services.dashboard.desc":
      "Dashboard temps r\u00E9el avec analyse IA par point de vente, \u00E9quipe, heure et canal. Alertes instantan\u00E9es, rapports automatis\u00E9s et benchmarking inter-sites.",
    "services.dashboard.cta": "Voir le tableau de bord",

    "services.aiReports.title": "Rapports IA",
    "services.aiReports.subtitle":
      "Du feedback brut \u00E0 la clart\u00E9 strat\u00E9gique",
    "services.aiReports.desc":
      "L\u2019IA cat\u00E9gorise le sentiment, d\u00E9tecte les probl\u00E8mes et g\u00E9n\u00E8re des rapports actionnables automatiquement. Analyse plus rapide, d\u00E9cisions plus intelligentes.",
    "services.aiReports.cta": "G\u00E9n\u00E9rer un rapport",

    "services.rewardSystem.title": "Coins et R\u00E9compenses",
    "services.rewardSystem.subtitle":
      "Soyez r\u00E9compens\u00E9 pour faire entendre votre voix",
    "services.rewardSystem.desc":
      "Chaque avis rapporte des JABB Coins et de l\u2019XP. Montez de niveau, d\u00E9bloquez des missions myst\u00E8re et \u00E9changez vos coins chez nos partenaires.",
    "services.rewardSystem.cta": "Commencer \u00E0 gagner",

    // ── What You Get ──
    "whatYouGet.title": "Ce que vous obtenez",
    "whatYouGet.subtitle": "Des avantages pour tous",
    "whatYouGet.tabJabbers": "Pour les JABBeurs",
    "whatYouGet.tabBusinesses": "Pour les Entreprises",

    "whatYouGet.earnMoney.title": "Gagnez Coins et XP",
    "whatYouGet.earnMoney.desc":
      "Chaque avis rapporte des JABB Coins \u00E9changeables chez nos partenaires, plus de l\u2019XP pour monter de niveau.",
    "whatYouGet.flexibleSchedule.title": "Avis en 30 secondes",
    "whatYouGet.flexibleSchedule.desc":
      "Rapide ou approfondi \u2014 vous choisissez. Notes, audio, photos ou Q&A guid\u00E9 par IA.",
    "whatYouGet.easyMissions.title": "Missions Myst\u00E8re",
    "whatYouGet.easyMissions.desc":
      "Les JABBeurs de haut niveau d\u00E9bloquent des missions client myst\u00E8re exclusives avec de plus grosses r\u00E9compenses.",

    "whatYouGet.realTimeCX.title": "Feedback en temps r\u00E9el",
    "whatYouGet.realTimeCX.desc":
      "Voyez les avis clients au moment o\u00F9 ils arrivent \u2014 par lieu, \u00E9quipe et heure.",
    "whatYouGet.gpsReports.title": "Rapports g\u00E9ov\u00E9rifi\u00E9s",
    "whatYouGet.gpsReports.desc":
      "Chaque avis est g\u00E9olocalis\u00E9 et analys\u00E9 par IA pour une authenticit\u00E9 totale.",
    "whatYouGet.aiInsights.title": "Boucle ferm\u00E9e CX",
    "whatYouGet.aiInsights.desc":
      "Les clients sont notifi\u00E9s quand vous agissez sur leur feedback. La confiance se construit. La fid\u00E9lit\u00E9 grandit.",

    // ── Partners ──
    "partners.title":
      "Rejoignez l\u2019\u00E9cosyst\u00E8me JABB",
    "partners.subtitle":
      "Que vous vouliez faire entendre votre voix ou am\u00E9liorer votre business \u2014 JABB connecte les deux c\u00F4t\u00E9s.",
    "partners.jabber.title": "Devenir JABBeur",
    "partners.jabber.desc":
      "T\u00E9l\u00E9chargez l\u2019appli, donnez votre avis sur les lieux que vous visitez, et gagnez des JABB Coins et XP. \u00C9changez chez nos partenaires. Montez de niveau pour d\u00E9bloquer des missions myst\u00E8re.",
    "partners.jabber.cta": "Commencer \u00E0 donner mon avis",
    "partners.business.title": "Devenir Partenaire",
    "partners.business.desc":
      "Recevez du feedback client structur\u00E9 et en temps r\u00E9el directement sur votre dashboard. Analys\u00E9 par IA, v\u00E9rifi\u00E9 par GPS, actionnable \u2014 d\u00E8s 250 MAD/mois par point de vente.",
    "partners.business.cta": "Devenez partenaire",

    // ── FAQ ──
    "faq.title": "Questions fr\u00E9quemment pos\u00E9es",
    "faq.subtitle":
      "Vous avez une question\u00A0? Nous sommes l\u00E0 pour vous aider.",
    "faq.anotherQuestion": "Vous avez une autre question\u00A0?",

    "faq.q1": "Qu\u2019est-ce que JABB\u00A0?",
    "faq.a1":
      "JABB est la premi\u00E8re plateforme universelle Voice of Customer au Maroc. Elle permet \u00E0 chacun de partager son exp\u00E9rience en 30 secondes \u2014 texte, audio, photos ou Q&A guid\u00E9 par IA \u2014 et livre le feedback structur\u00E9 directement au commerce.",
    "faq.q2": "Comment devenir JABBeur\u00A0?",
    "faq.a2":
      "T\u00E9l\u00E9chargez l\u2019appli JABB depuis l\u2019App Store ou Google Play, cr\u00E9ez un compte gratuit et commencez \u00E0 donner votre avis sur les lieux que vous visitez. Aucune exp\u00E9rience requise.",
    "faq.q3": "Comment fonctionnent les r\u00E9compenses\u00A0?",
    "faq.a3":
      "Chaque avis rapporte des JABB Coins et de l\u2019XP. Les coins sont \u00E9changeables chez nos partenaires (restaurants, commerces, stations-service). L\u2019XP vous fait monter de niveau \u2014 les niveaux \u00E9lev\u00E9s d\u00E9bloquent des missions client myst\u00E8re avec de plus grosses r\u00E9compenses.",
    "faq.q4": "JABB est-il disponible dans ma ville\u00A0?",
    "faq.a4":
      "JABB lance actuellement \u00E0 Casablanca et s\u2019\u00E9tend aux autres grandes villes marocaines. Nous grandissons vite \u2014 suivez-nous sur l\u2019appli pour rester inform\u00E9.",
    "faq.q5": "Comment donner un avis\u00A0?",
    "faq.a5":
      "Vous choisissez\u00A0: Quick JABB (30 secondes \u2014 note, audio, photo) ou Tailored JABB (l\u2019IA vous pose des questions personnalis\u00E9es, style swipe). Les deux rapportent des coins.",
    "faq.q6": "Quels types d\u2019entreprises peuvent utiliser JABB\u00A0?",
    "faq.a6":
      "Tout type d\u2019entreprise\u00A0: restaurants, commerces, h\u00F4tels, banques, t\u00E9l\u00E9com, stations-service, cliniques, et plus encore. JABB s\u2019adapte \u00E0 chaque secteur avec des dashboards personnalis\u00E9s.",
    "faq.q7": "Que sont les missions myst\u00E8re\u00A0?",
    "faq.a7":
      "Quand vous atteignez un niveau \u00E9lev\u00E9 et maintenez une bonne qualit\u00E9 d\u2019avis, JABB vous invite \u00E0 des missions client myst\u00E8re \u2014 des audits structur\u00E9s en profondeur dans des lieux sp\u00E9cifiques avec des r\u00E9compenses premium en coins.",
    "faq.q8": "Mes donn\u00E9es sont-elles s\u00E9curis\u00E9es\u00A0?",
    "faq.a8":
      "Absolument. JABB utilise des protocoles de chiffrement et de protection de donn\u00E9es conformes aux standards de l\u2019industrie. Vos informations personnelles ne sont jamais partag\u00E9es avec les commerces \u2014 uniquement votre feedback anonymis\u00E9 et structur\u00E9.",
    "faq.q9": "Mon feedback arrive-t-il vraiment au commerce\u00A0?",
    "faq.a9":
      "Oui\u00A0! C\u2019est tout le principe. Nous livrons votre avis structur\u00E9 directement sur le dashboard du commerce. Il le voit en temps r\u00E9el, agit dessus, et vous \u00EAtes notifi\u00E9 quand c\u2019est fait \u2014 la boucle est ferm\u00E9e.",
    "faq.q10": "Comment les entreprises acc\u00E8dent-elles \u00E0 leurs rapports\u00A0?",
    "faq.a10":
      "Les entreprises utilisent le dashboard JABB VOC \u2014 analytique IA en temps r\u00E9el par lieu, \u00E9quipe, heure et canal. Alertes instantan\u00E9es, rapports automatis\u00E9s et benchmarking inter-sites inclus.",

    // ── CTA ──
    "cta.title":
      "Votre avis vaut de l\u2019or. Commencez \u00E0 le partager.",
    "cta.subtitle":
      "Rejoignez plus de 500 JABBeurs qui donnent d\u00E9j\u00E0 leur avis, gagnent des coins et font entendre leur voix \u00E0 travers le Maroc.",
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
    "hero.title": "\u0631\u0623\u064A\u0643 \u0645\u0647\u0645.\n\u062E\u0644\u0651\u064A\u0647 \u064A\u0648\u0635\u0644.",
    "hero.subtitle":
      "\u0634\u0627\u0631\u0643 \u062A\u062C\u0631\u0628\u062A\u0643 \u0641\u064A 30 \u062B\u0627\u0646\u064A\u0629 \u2014 \u0646\u0635\u060C \u0635\u0648\u062A\u060C \u0623\u0648 \u0628\u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A. \u0627\u0631\u0628\u062D JABB Coins \u0648 XP. \u0646\u062D\u0646 \u0646\u0648\u0635\u0644 \u0631\u0623\u064A\u0643 \u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u0644\u0645\u062D\u0644 \u0628\u0627\u0634 \u064A\u062A\u062D\u0633\u0646.",
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
    "howItWorks.subtitle": "\u0642\u064A\u0651\u0645\u060C \u0627\u0631\u0628\u062D \u0648\u0627\u0631\u062A\u0642\u064A \u0641\u064A 4 \u062E\u0637\u0648\u0627\u062A",

    "howItWorks.step1.title": "\u062D\u0645\u0651\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642",
    "howItWorks.step1.desc":
      "\u062D\u0645\u0651\u0644 JABB \u0645\u0646 App Store \u0623\u0648 Google Play. \u0623\u0646\u0634\u0626 \u062D\u0633\u0627\u0628\u0643 \u0627\u0644\u0645\u062C\u0627\u0646\u064A \u0641\u064A \u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u062A\u064A\u0646 \u0648\u0627\u0628\u062F\u0623 \u0627\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641.",
    "howItWorks.step2.title": "\u0634\u0627\u0631\u0643 \u062A\u062C\u0631\u0628\u062A\u0643",
    "howItWorks.step2.desc":
      "\u0642\u064A\u0651\u0645 \u0645\u0643\u0627\u0646\u060C \u0633\u062C\u0651\u0644 \u0645\u0644\u0627\u062D\u0638\u0629 \u0635\u0648\u062A\u064A\u0629\u060C \u0635\u0648\u0651\u0631\u060C \u0623\u0648 \u062E\u0644\u0651\u064A \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u064A\u0648\u062C\u0647\u0643 \u2014 \u0643\u0644\u0634\u064A \u0641\u064A 30 \u062B\u0627\u0646\u064A\u0629.",
    "howItWorks.step3.title": "\u0627\u0631\u0628\u062D Coins \u0648 XP",
    "howItWorks.step3.desc":
      "\u0643\u0644 \u062A\u0642\u064A\u064A\u0645 \u064A\u0631\u0628\u062D\u0643 JABB Coins \u0648 XP. \u0627\u0631\u062A\u0642\u064A \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A\u060C \u0627\u0641\u062A\u062D \u0645\u0632\u0627\u064A\u0627\u060C \u0648\u0627\u0633\u062A\u0628\u062F\u0644 \u0639\u0645\u0644\u0627\u062A\u0643 \u0639\u0646\u062F \u0634\u0631\u0643\u0627\u0626\u0646\u0627.",
    "howItWorks.step4.title": "\u0635\u0648\u062A\u0643 \u064A\u0648\u0635\u0644",
    "howItWorks.step4.desc":
      "\u0646\u062D\u0646 \u0646\u0648\u0635\u0644 \u0631\u0623\u064A\u0643 \u0627\u0644\u0645\u0647\u064A\u0643\u0644 \u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u0644\u0645\u062D\u0644. \u0647\u0648 \u064A\u062A\u0635\u0631\u0641 \u2014 \u0648\u0623\u0646\u062A \u062A\u0648\u0635\u0644\u0643 \u0625\u0634\u0639\u0627\u0631 \u0645\u0644\u064A \u062F\u0627\u0631\u0648 \u0647\u0627\u062F\u0634\u064A.",

    // ── Services ──
    "services.mysteryShopping.title": "\u0627\u0644\u062A\u0633\u0648\u0642 \u0627\u0644\u062E\u0641\u064A",
    "services.mysteryShopping.subtitle":
      "\u0634\u0627\u0647\u062F \u0639\u0645\u0644\u0643 \u0628\u0639\u064A\u0648\u0646 \u0639\u0645\u0644\u0627\u0626\u0643",
    "services.mysteryShopping.desc":
      "\u0627\u0644\u0640 JABBers \u0644\u064A \u0639\u0646\u062F\u0647\u0645 \u0645\u0633\u062A\u0648\u0649 \u0639\u0627\u0644\u064A \u0648 XP \u0645\u0632\u064A\u0627\u0646 \u0643\u064A\u062A\u0648\u0635\u0644\u0648 \u062F\u0639\u0648\u0629 \u0644\u0645\u0647\u0627\u0645 \u0643\u0644\u064A\u0627\u0646 \u0645\u064A\u0633\u062A\u064A\u0631. \u062A\u062F\u0642\u064A\u0642\u0627\u062A \u0645\u0647\u064A\u0643\u0644\u0629 \u0641\u064A \u0627\u0644\u0645\u064A\u062F\u0627\u0646 \u0645\u0639 \u062A\u0642\u0627\u0631\u064A\u0631 \u0643\u0627\u0645\u0644\u0629 \u0648 GPS.",
    "services.mysteryShopping.cta": "\u0627\u0639\u0631\u0641 \u0623\u0643\u062B\u0631",

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
      "96% \u062F\u064A\u0627\u0644 \u0627\u0644\u0643\u0644\u064A\u0627\u0646 \u0627\u0644\u0645\u0627\u0634\u064A \u0631\u0627\u0636\u064A\u064A\u0646 \u0645\u0627 \u0643\u064A\u0634\u062A\u0643\u064A\u0648\u0634 \u2014 \u0643\u064A\u0645\u0634\u064A\u0648. JABB \u0643\u064A\u0644\u062A\u0642\u0637 \u0627\u0644\u0631\u0623\u064A \u0627\u0644\u062D\u0642\u064A\u0642\u064A \u0628\u0627\u0644\u0635\u0648\u062A\u060C \u0627\u0644\u0646\u0635\u060C \u0627\u0644\u0635\u0648\u0631 \u0648 Q&A \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0642\u0628\u0644 \u0645\u0627 \u064A\u062E\u062A\u0641\u064A\u0648.",
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

    "services.rewardSystem.title": "Coins \u0648\u0645\u0643\u0627\u0641\u0622\u062A",
    "services.rewardSystem.subtitle":
      "\u062A\u0648\u0635\u0644 \u0645\u0643\u0627\u0641\u0622\u062A \u0645\u0642\u0627\u0628\u0644 \u0635\u0648\u062A\u0643",
    "services.rewardSystem.desc":
      "\u0643\u0644 \u062A\u0642\u064A\u064A\u0645 \u0643\u064A\u0631\u0628\u062D\u0643 JABB Coins \u0648 XP. \u0627\u0631\u062A\u0642\u064A \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A\u060C \u0627\u0641\u062A\u062D \u0645\u0647\u0627\u0645 \u0645\u064A\u0633\u062A\u064A\u0631\u060C \u0648\u0627\u0633\u062A\u0628\u062F\u0644 \u0639\u0645\u0644\u0627\u062A\u0643 \u0639\u0646\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u0621.",
    "services.rewardSystem.cta": "\u0627\u0628\u062F\u0623 \u062A\u0631\u0628\u062D",

    // ── What You Get ──
    "whatYouGet.title": "\u0645\u0627\u0630\u0627 \u0633\u062A\u062D\u0635\u0644 \u0639\u0644\u064A\u0647",
    "whatYouGet.subtitle": "\u0645\u0632\u0627\u064A\u0627 \u0644\u0644\u062C\u0645\u064A\u0639",
    "whatYouGet.tabJabbers": "\u0644\u0644\u0645\u0642\u064A\u0651\u0645\u064A\u0646",
    "whatYouGet.tabBusinesses": "\u0644\u0644\u0634\u0631\u0643\u0627\u062A",

    "whatYouGet.earnMoney.title": "\u0627\u0631\u0628\u062D Coins \u0648 XP",
    "whatYouGet.earnMoney.desc":
      "\u0643\u0644 \u062A\u0642\u064A\u064A\u0645 \u0643\u064A\u0631\u0628\u062D\u0643 JABB Coins \u0644\u064A \u062A\u0642\u062F\u0631 \u062A\u0633\u062A\u0628\u062F\u0644\u0647\u0645 \u0639\u0646\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u0621\u060C \u0648 XP \u0628\u0627\u0634 \u062A\u0631\u062A\u0627\u0642\u064A.",
    "whatYouGet.flexibleSchedule.title": "\u062A\u0642\u064A\u064A\u0645 \u0641\u064A 30 \u062B\u0627\u0646\u064A\u0629",
    "whatYouGet.flexibleSchedule.desc":
      "\u0633\u0631\u064A\u0639 \u0623\u0648 \u0645\u0639\u0645\u0642 \u2014 \u0623\u0646\u062A \u062A\u062E\u062A\u0627\u0631. \u0646\u0642\u0637\u060C \u0635\u0648\u062A\u060C \u0635\u0648\u0631 \u0623\u0648 Q&A \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A.",
    "whatYouGet.easyMissions.title": "\u0645\u0647\u0627\u0645 \u0645\u064A\u0633\u062A\u064A\u0631",
    "whatYouGet.easyMissions.desc":
      "\u0627\u0644\u0640 JABBers \u0644\u064A \u0639\u0646\u062F\u0647\u0645 \u0645\u0633\u062A\u0648\u0649 \u0639\u0627\u0644\u064A \u0643\u064A\u0641\u062A\u062D\u0648 \u0645\u0647\u0627\u0645 \u0643\u0644\u064A\u0627\u0646 \u0645\u064A\u0633\u062A\u064A\u0631 \u062D\u0635\u0631\u064A\u0629 \u0628\u0645\u0643\u0627\u0641\u0622\u062A \u0623\u0643\u0628\u0631.",

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
    "partners.title": "\u0627\u0646\u0636\u0645 \u0644\u0646\u0638\u0627\u0645 JABB",
    "partners.subtitle":
      "\u0628\u063A\u064A\u062A\u064A \u0635\u0648\u062A\u0643 \u064A\u0648\u0635\u0644 \u0648\u0644\u0627 \u0628\u063A\u064A\u062A\u064A \u062A\u062D\u0633\u0646 \u0628\u064A\u0632\u0646\u0633\u0643 \u2014 JABB \u0643\u062A\u0631\u0628\u0637 \u0627\u0644\u0637\u0631\u0641\u064A\u0646.",
    "partners.jabber.title": "\u0648\u0644\u0651\u064A JABBer",
    "partners.jabber.desc":
      "\u062D\u0645\u0651\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u060C \u0642\u064A\u0651\u0645 \u0627\u0644\u0623\u0645\u0627\u0643\u0646 \u0644\u064A \u0643\u062A\u0632\u0648\u0631\u060C \u0648\u0627\u0631\u0628\u062D JABB Coins \u0648 XP. \u0627\u0633\u062A\u0628\u062F\u0644 \u0639\u0646\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u0621. \u0627\u0631\u062A\u0627\u0642\u064A \u0628\u0627\u0634 \u062A\u0641\u062A\u062D \u0645\u0647\u0627\u0645 \u0645\u064A\u0633\u062A\u064A\u0631.",
    "partners.jabber.cta": "\u0627\u0628\u062F\u0623 \u062A\u0642\u064A\u0651\u0645",
    "partners.business.title": "\u0643\u0646 \u0634\u0631\u064A\u0643\u064B\u0627",
    "partners.business.desc":
      "\u062A\u0648\u0635\u0644 feedback \u0645\u0647\u064A\u0643\u0644 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A \u0645\u0628\u0627\u0634\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u062F\u064A\u0627\u0644\u0643. \u0645\u062D\u0644\u0644 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A\u060C \u0645\u0648\u062B\u0642 \u0628\u0627\u0644\u0640 GPS \u2014 \u0645\u0646 250 \u062F\u0631\u0647\u0645/\u0634\u0647\u0631.",
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
    "cta.title": "\u0631\u0623\u064A\u0643 \u0643\u064A\u0633\u0648\u0649 \u0630\u0647\u0628. \u0627\u0628\u062F\u0623 \u0634\u0627\u0631\u0643\u0648.",
    "cta.subtitle":
      "\u0627\u0646\u0636\u0645 \u0644\u0623\u0643\u062B\u0631 \u0645\u0646 500 JABBer \u0644\u064A \u0643\u064A\u0642\u064A\u0651\u0645\u0648\u060C \u0643\u064A\u0631\u0628\u062D\u0648 coins\u060C \u0648\u0643\u064A\u0648\u0635\u0644\u0648 \u0635\u0648\u062A\u0647\u0645 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628.",
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
