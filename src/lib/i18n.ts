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
    "services.cxAudits.cta": "Learn more",

    "services.voiceOfCustomer.title": "Voice of Customer",
    "services.voiceOfCustomer.subtitle":
      "Capture what the silent majority really thinks",
    "services.voiceOfCustomer.desc":
      "96% of unhappy customers never complain \u2014 they just leave. JABB captures real feedback via audio, text, photos, and AI-driven Q&A. You can also launch mystery client missions directly to our JABBers in-app for undercover evaluations of your locations.",
    "services.voiceOfCustomer.cta": "Discover how it works",

    "services.dashboard.title": "Business Dashboard",
    "services.dashboard.subtitle": "Your CX command center, always on",
    "services.dashboard.desc":
      "Real-time dashboard with AI analysis by location, team, hour, and channel. Instant alerts, automated reports, and inter-site benchmarking \u2014 your single source of CX truth.",
    "services.dashboard.cta": "See the dashboard",

    "services.aiReports.title": "AI-Powered Reports",
    "services.aiReports.subtitle":
      "From raw feedback to strategic clarity",
    "services.aiReports.desc":
      "AI categorizes sentiment, detects issues, and generates actionable reports automatically. Faster analysis, smarter decisions \u2014 no manual processing needed.",
    "services.aiReports.cta": "See how it works",

    "services.rewardSystem.title": "Coins & Rewards",
    "services.rewardSystem.subtitle":
      "Get rewarded for making your voice heard",
    "services.rewardSystem.desc":
      "Every review earns JABB Coins and XP. Level up through tiers, unlock mystery missions, and redeem coins at partner stores \u2014 turning your opinions into real perks.",
    "services.rewardSystem.cta": "Discover the rewards",

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
    "hero.title": "Votre avis a du pouvoir.\nFaites-le entendre.",
    "hero.subtitle":
      "30 secondes suffisent. Texte, audio ou IA \u2014 partagez votre v\u00E9cu, r\u00E9coltez des JABB Coins & XP, et votre avis arrive direct au commerce. Simple. Concret. R\u00E9compens\u00E9.",
    "hero.downloadOn": "T\u00E9l\u00E9charger sur l\u2019",
    "hero.appStore": "App Store",
    "hero.getItOn": "Disponible sur",
    "hero.googlePlay": "Google Play",
    "hero.webDashboard": "Ou acc\u00E9dez au tableau de bord web",

    // ── Stats ──
    "stats.jabbers": "JABBeurs",
    "stats.evaluations": "Avis",
    "stats.cities": "Villes",
    "stats.accuracy": "Pr\u00E9cision",

    // ── How It Works ──
    "howItWorks.title": "Comment \u00E7a marche",
    "howItWorks.subtitle": "Donnez votre avis, gagnez des r\u00E9compenses \u2014 en 4 \u00E9tapes",

    "howItWorks.step1.title": "T\u00E9l\u00E9chargez l\u2019appli",
    "howItWorks.step1.desc":
      "Installez JABB en un clic depuis l\u2019App Store ou Google Play. Compte gratuit, pr\u00EAt en 2 minutes.",
    "howItWorks.step2.title": "Partagez votre exp\u00E9rience",
    "howItWorks.step2.desc":
      "Notez, enregistrez un vocal, prenez une photo \u2014 ou laissez l\u2019IA creuser pour vous. 30 secondes chrono.",
    "howItWorks.step3.title": "R\u00E9coltez Coins & XP",
    "howItWorks.step3.desc":
      "Chaque avis = des JABB Coins + de l\u2019XP. Montez de niveau, d\u00E9bloquez des avantages, et d\u00E9pensez vos coins chez nos partenaires.",
    "howItWorks.step4.title": "Votre voix arrive \u00E0 destination",
    "howItWorks.step4.desc":
      "On livre votre feedback structur\u00E9 direct au commerce. Il agit, vous \u00EAtes notifi\u00E9. La boucle est boucl\u00E9e.",

    // ── Services ──
    "services.mysteryShopping.title": "Client Myst\u00E8re",
    "services.mysteryShopping.subtitle":
      "Vivez l\u2019exp\u00E9rience client comme si vous \u00E9tiez le client",
    "services.mysteryShopping.desc":
      "Les JABBeurs d\u2019\u00E9lite re\u00E7oivent des missions incognito. Audits terrain, rapports d\u00E9taill\u00E9s, scoring pr\u00E9cis et preuve GPS \u2014 la v\u00E9rit\u00E9 sur votre service, sans filtre.",
    "services.mysteryShopping.cta": "D\u00E9couvrir",

    "services.cxAudits.title": "Audits CX 360\u00B0",
    "services.cxAudits.subtitle":
      "Chaque \u00E9tape du parcours client, pass\u00E9e au crible",
    "services.cxAudits.desc":
      "Missions omnicanales ex\u00E9cut\u00E9es par vos meilleurs JABBeurs \u2014 en magasin et en ligne. Rapports structur\u00E9s, scoring standardis\u00E9 et benchmarking multi-sites pour voir clair.",
    "services.cxAudits.cta": "En savoir plus",

    "services.voiceOfCustomer.title": "Voix du Client",
    "services.voiceOfCustomer.subtitle":
      "\u00C9coutez ceux qui ne parlent jamais \u2014 avant qu\u2019ils partent",
    "services.voiceOfCustomer.desc":
      "96% des clients m\u00E9contents ne disent rien \u2014 ils disparaissent. JABB capte leur v\u00E9rit\u00E9 via audio, texte, photos et Q&A intelligent. Lancez aussi des missions client myst\u00E8re directement \u00E0 nos JABBeurs depuis l\u2019app pour des \u00E9valuations incognito de vos points de vente.",
    "services.voiceOfCustomer.cta": "D\u00E9couvrir comment \u00E7a marche",

    "services.dashboard.title": "Tableau de Bord",
    "services.dashboard.subtitle":
      "Votre QG exp\u00E9rience client, en temps r\u00E9el",
    "services.dashboard.desc":
      "Tout sous vos yeux : analyse IA par site, \u00E9quipe, heure et canal. Alertes instantan\u00E9es, rapports auto, benchmarking inter-sites. Z\u00E9ro angle mort.",
    "services.dashboard.cta": "Voir le dashboard",

    "services.aiReports.title": "Rapports IA",
    "services.aiReports.subtitle":
      "Vos donn\u00E9es brutes deviennent des d\u00E9cisions",
    "services.aiReports.desc":
      "L\u2019IA d\u00E9crypte le sentiment, rep\u00E8re les probl\u00E8mes et g\u00E9n\u00E8re des rapports actionnables en un clic. Fini le traitement manuel \u2014 place \u00E0 la strat\u00E9gie.",
    "services.aiReports.cta": "Voir comment \u00E7a marche",

    "services.rewardSystem.title": "Coins & R\u00E9compenses",
    "services.rewardSystem.subtitle":
      "Votre avis vous rapporte. Litt\u00E9ralement.",
    "services.rewardSystem.desc":
      "Chaque avis = des JABB Coins + de l\u2019XP. Grimpez les niveaux, d\u00E9bloquez des missions myst\u00E8re et d\u00E9pensez vos coins chez nos partenaires. Vos opinions valent quelque chose \u2014 ici, on le prouve.",
    "services.rewardSystem.cta": "D\u00E9couvrir les r\u00E9compenses",

    // ── What You Get ──
    "whatYouGet.title": "Pourquoi JABB",
    "whatYouGet.subtitle": "Tout le monde y gagne",
    "whatYouGet.tabJabbers": "Pour les JABBeurs",
    "whatYouGet.tabBusinesses": "Pour les Entreprises",

    "whatYouGet.earnMoney.title": "Coins & XP \u00E0 chaque avis",
    "whatYouGet.earnMoney.desc":
      "Des JABB Coins \u00E9changeables chez nos partenaires + de l\u2019XP pour grimper de niveau. Plus vous partagez, plus vous gagnez.",
    "whatYouGet.flexibleSchedule.title": "30 secondes, pas plus",
    "whatYouGet.flexibleSchedule.desc":
      "Flash ou approfondi \u2014 \u00E0 vous de voir. \u00C9toiles, vocal, photo ou Q&A guid\u00E9 par IA. C\u2019est vous le patron.",
    "whatYouGet.easyMissions.title": "Missions Myst\u00E8re",
    "whatYouGet.easyMissions.desc":
      "Atteignez le top niveau et d\u00E9bloquez des missions client myst\u00E8re exclusives. Grosses r\u00E9compenses \u00E0 la cl\u00E9.",

    "whatYouGet.realTimeCX.title": "Feedback instantan\u00E9",
    "whatYouGet.realTimeCX.desc":
      "Chaque avis vous parvient en temps r\u00E9el \u2014 filtr\u00E9 par lieu, \u00E9quipe et cr\u00E9neau horaire.",
    "whatYouGet.gpsReports.title": "Preuves GPS int\u00E9gr\u00E9es",
    "whatYouGet.gpsReports.desc":
      "Chaque avis est g\u00E9olocalis\u00E9 et pass\u00E9 au crible par l\u2019IA. Z\u00E9ro doute sur l\u2019authenticit\u00E9.",
    "whatYouGet.aiInsights.title": "Boucle ferm\u00E9e",
    "whatYouGet.aiInsights.desc":
      "Vos clients savent quand vous agissez. R\u00E9sultat : confiance en hausse, fid\u00E9lit\u00E9 en b\u00E9ton.",

    // ── Partners ──
    "partners.title":
      "Rejoignez l\u2019\u00E9cosyst\u00E8me JABB",
    "partners.subtitle":
      "Vous voulez faire entendre votre voix ou transformer votre CX ? JABB connecte les deux mondes.",
    "partners.jabber.title": "Devenez JABBeur",
    "partners.jabber.desc":
      "T\u00E9l\u00E9chargez, donnez votre avis, empochez des Coins & XP. D\u00E9pensez-les chez nos partenaires. Grimpez les niveaux, d\u00E9bloquez les missions myst\u00E8re \u2014 et faites de votre opinion un superpouvoir.",
    "partners.jabber.cta": "Je me lance",
    "partners.business.title": "Devenez Partenaire",
    "partners.business.desc":
      "Feedback client structur\u00E9, en temps r\u00E9el, direct sur votre dashboard. Analys\u00E9 par IA, v\u00E9rifi\u00E9 GPS, actionnable d\u00E8s le premier jour \u2014 \u00E0 partir de 250 MAD/mois par point de vente.",
    "partners.business.cta": "Devenir partenaire",

    // ── FAQ ──
    "faq.title": "Vos questions, nos r\u00E9ponses",
    "faq.subtitle":
      "Besoin d\u2019\u00E9claircissements\u00A0? On vous dit tout.",
    "faq.anotherQuestion": "Une autre question\u00A0?",

    "faq.q1": "C\u2019est quoi JABB, exactement\u00A0?",
    "faq.a1":
      "JABB est la premi\u00E8re plateforme citoyenne Voice of Customer au Maroc. N\u2019importe qui peut partager son exp\u00E9rience en 30 secondes \u2014 texte, vocal, photo ou Q&A pilot\u00E9 par IA \u2014 et le commerce re\u00E7oit un feedback structur\u00E9 et actionnable.",
    "faq.q2": "Comment je deviens JABBeur\u00A0?",
    "faq.a2":
      "T\u00E9l\u00E9chargez JABB (App Store / Google Play), cr\u00E9ez votre compte gratuit et c\u2019est parti. Z\u00E9ro exp\u00E9rience requise \u2014 juste votre honn\u00EAt\u00E9.",
    "faq.q3": "Comment marchent les r\u00E9compenses\u00A0?",
    "faq.a3":
      "Chaque avis rapporte des JABB Coins + XP. Les coins s\u2019\u00E9changent chez nos partenaires (restos, shops, stations). L\u2019XP fait monter de niveau \u2014 et les hauts niveaux d\u00E9bloquent des missions myst\u00E8re avec des r\u00E9compenses premium.",
    "faq.q4": "JABB est dispo dans ma ville\u00A0?",
    "faq.a4":
      "On d\u00E9marre \u00E0 Casablanca et on s\u2019\u00E9tend rapidement aux grandes villes marocaines. Restez branch\u00E9 sur l\u2019app pour ne rien louper.",
    "faq.q5": "Comment \u00E7a se passe pour donner un avis\u00A0?",
    "faq.a5":
      "\u00C0 vous de choisir : Quick JABB (30 sec \u2014 note, vocal, photo) ou Tailored JABB (l\u2019IA vous pose des questions sur mesure, style swipe). Les deux rapportent des coins.",
    "faq.q6": "Quels types de business peuvent utiliser JABB\u00A0?",
    "faq.a6":
      "Tous : restos, commerces, h\u00F4tels, banques, t\u00E9l\u00E9com, stations-service, cliniques\u2026 JABB s\u2019adapte \u00E0 chaque secteur avec des dashboards sur mesure.",
    "faq.q7": "C\u2019est quoi les missions myst\u00E8re\u00A0?",
    "faq.a7":
      "Quand vous atteignez un haut niveau avec des avis de qualit\u00E9, JABB vous invite \u00E0 des missions client myst\u00E8re \u2014 des audits terrain approfondis dans des lieux cibl\u00E9s, avec des r\u00E9compenses premium \u00E0 la cl\u00E9.",
    "faq.q8": "Mes donn\u00E9es sont prot\u00E9g\u00E9es\u00A0?",
    "faq.a8":
      "100%. Chiffrement de bout en bout, privacy by design. Vos infos perso ne sont jamais partag\u00E9es avec les commerces \u2014 seul votre feedback anonymis\u00E9 et structur\u00E9 leur parvient.",
    "faq.q9": "Mon avis arrive vraiment au commerce\u00A0?",
    "faq.a9":
      "Absolument. C\u2019est le c\u0153ur de JABB. Votre avis structur\u00E9 atterrit direct sur le dashboard du commerce. Il le voit, il agit, vous \u00EAtes notifi\u00E9 \u2014 boucle ferm\u00E9e.",
    "faq.q10": "Comment les entreprises voient leurs rapports\u00A0?",
    "faq.a10":
      "Via le dashboard JABB VOC \u2014 analytique IA en temps r\u00E9el par site, \u00E9quipe, heure et canal. Alertes instantan\u00E9es, rapports auto et benchmarking inter-sites inclus.",

    // ── CTA ──
    "cta.title":
      "Votre avis vaut de l\u2019or.\nCommencez \u00E0 le monnayer.",
    "cta.subtitle":
      "Rejoignez 500+ JABBeurs qui partagent d\u00E9j\u00E0 leur v\u00E9cu, r\u00E9coltent des coins et font bouger les choses au Maroc.",
    "cta.downloadApp": "T\u00E9l\u00E9charger l\u2019appli",
    "cta.partnerWithUs": "Devenir partenaire",

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
    "orbit.title": "Tous vos canaux, une seule plateforme",
    "orbit.subtitle": "JABB capte l\u2019exp\u00E9rience client partout \u2014 web, mobile, en magasin et au-del\u00E0.",

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
    "nav.becomeJabber": "\u0648\u0644\u0651\u064A JABBer",
    "nav.becomePartner": "\u0643\u0646 \u0634\u0631\u064A\u0643",
    "nav.services": "\u0627\u0644\u062E\u062F\u0645\u0627\u062A",
    "nav.cities": "\u0627\u0644\u0645\u062F\u0646",
    "nav.faq": "\u0623\u0633\u0626\u0644\u0629",
    "nav.about": "\u0645\u0646 \u0646\u062D\u0646",
    "nav.contact": "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",

    // ── Hero ──
    "hero.title": "\u0631\u0623\u064A\u0643 \u0639\u0646\u062F\u0648 \u0642\u064A\u0645\u0629.\n\u062E\u0644\u0651\u064A\u0647 \u064A\u0648\u0635\u0644.",
    "hero.subtitle":
      "30 \u062B\u0627\u0646\u064A\u0629 \u0643\u0627\u0641\u064A\u0629. \u0646\u0635\u060C \u0635\u0648\u062A\u060C \u0623\u0648 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u2014 \u0634\u0627\u0631\u0643 \u062A\u062C\u0631\u0628\u062A\u0643\u060C \u0627\u0631\u0628\u062D JABB Coins & XP\u060C \u0648\u0631\u0623\u064A\u0643 \u0643\u064A\u0648\u0635\u0644 \u062F\u064A\u0631\u0643\u062A \u0644\u0644\u0645\u062D\u0644. \u0628\u0633\u064A\u0637. \u0641\u0639\u0651\u0627\u0644. \u0645\u0631\u0628\u062D.",
    "hero.downloadOn": "\u062D\u0645\u0651\u0644 \u0645\u0646",
    "hero.appStore": "App Store",
    "hero.getItOn": "\u0645\u062A\u0648\u0641\u0631 \u0639\u0644\u0649",
    "hero.googlePlay": "Google Play",
    "hero.webDashboard": "\u0623\u0648 \u062F\u062E\u0648\u0644 \u0644\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0645\u0646 \u0627\u0644\u0648\u064A\u0628",

    // ── Stats ──
    "stats.jabbers": "JABBer",
    "stats.evaluations": "\u062A\u0642\u064A\u064A\u0645",
    "stats.cities": "\u0645\u062F\u064A\u0646\u0629",
    "stats.accuracy": "\u062F\u0642\u0629",

    // ── How It Works ──
    "howItWorks.title": "\u0643\u064A\u0641\u0627\u0634 \u0643\u064A\u062E\u062F\u0645",
    "howItWorks.subtitle": "\u0642\u064A\u0651\u0645\u060C \u0627\u0631\u0628\u062D \u0648\u0627\u0631\u062A\u0627\u0642\u064A \u0641\u064A 4 \u062E\u0637\u0648\u0627\u062A",

    "howItWorks.step1.title": "\u062D\u0645\u0651\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642",
    "howItWorks.step1.desc":
      "\u0646\u0632\u0651\u0644 JABB \u0645\u0646 App Store \u0648\u0644\u0627 Google Play. \u062D\u0633\u0627\u0628 \u0645\u062C\u0627\u0646\u064A\u060C \u062C\u0627\u0647\u0632 \u0641\u064A \u062F\u0642\u064A\u0642\u062A\u064A\u0646.",
    "howItWorks.step2.title": "\u0634\u0627\u0631\u0643 \u062A\u062C\u0631\u0628\u062A\u0643",
    "howItWorks.step2.desc":
      "\u0642\u064A\u0651\u0645\u060C \u0633\u062C\u0651\u0644 \u0635\u0648\u062A\u064A\u060C \u0635\u0648\u0651\u0631 \u2014 \u0648\u0644\u0627 \u062E\u0644\u0651\u064A \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u064A\u0648\u062C\u0647\u0643. \u0643\u0644\u0634\u064A \u0641\u064A 30 \u062B\u0627\u0646\u064A\u0629.",
    "howItWorks.step3.title": "\u062C\u0645\u0639 Coins & XP",
    "howItWorks.step3.desc":
      "\u0643\u0644 \u062A\u0642\u064A\u064A\u0645 = JABB Coins + XP. \u0637\u0644\u0639 \u0641\u064A \u0627\u0644\u0644\u064A\u0641\u0644\u060C \u0641\u062A\u062D \u0645\u0632\u0627\u064A\u0627 \u062D\u0635\u0631\u064A\u0629\u060C \u0648\u0627\u0633\u062A\u0639\u0645\u0644 \u0639\u0645\u0644\u0627\u062A\u0643 \u0639\u0646\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u0621.",
    "howItWorks.step4.title": "\u0635\u0648\u062A\u0643 \u0643\u064A\u0648\u0635\u0644",
    "howItWorks.step4.desc":
      "\u0631\u0623\u064A\u0643 \u0627\u0644\u0645\u0647\u064A\u0643\u0644 \u0643\u064A\u0645\u0634\u064A \u062F\u064A\u0631\u0643\u062A \u0644\u0644\u0645\u062D\u0644. \u0647\u0648 \u0643\u064A\u062A\u0635\u0631\u0641\u060C \u0648\u0623\u0646\u062A \u0643\u062A\u0648\u0635\u0644\u0643 \u0625\u0634\u0639\u0627\u0631. \u0627\u0644\u062D\u0644\u0642\u0629 \u0643\u062A\u0633\u062F.",

    // ── Services ──
    "services.mysteryShopping.title": "\u0639\u0645\u064A\u0644 \u0633\u0631\u064A",
    "services.mysteryShopping.subtitle":
      "\u0634\u0648\u0641 \u0628\u064A\u0632\u0646\u0633\u0643 \u0628\u0639\u064A\u0648\u0646 \u0627\u0644\u0643\u0644\u064A\u0627\u0646 \u062F\u064A\u0627\u0644\u0643",
    "services.mysteryShopping.desc":
      "\u0627\u0644\u0640 JABBers \u0627\u0644\u062A\u0648\u0628 \u0643\u064A\u062A\u0648\u0635\u0644\u0648 \u062F\u0639\u0648\u0629 \u0644\u0645\u0647\u0627\u0645 \u0643\u0644\u064A\u0627\u0646 \u0633\u0631\u064A. \u062A\u062F\u0642\u064A\u0642\u0627\u062A \u0645\u064A\u062F\u0627\u0646\u064A\u0629\u060C \u062A\u0642\u0627\u0631\u064A\u0631 \u062F\u0642\u064A\u0642\u0629\u060C scoring \u0648\u0625\u062B\u0628\u0627\u062A GPS \u2014 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0628\u0644\u0627 \u0641\u0644\u062A\u0631.",
    "services.mysteryShopping.cta": "\u0627\u0643\u062A\u0634\u0641",

    "services.cxAudits.title": "\u062A\u062F\u0642\u064A\u0642 CX 360\u00B0",
    "services.cxAudits.subtitle":
      "\u0643\u0644 \u062E\u0637\u0648\u0629 \u0641\u064A \u0645\u0633\u0627\u0631 \u0627\u0644\u0643\u0644\u064A\u0627\u0646\u060C \u062A\u062D\u062A \u0627\u0644\u0645\u062C\u0647\u0631",
    "services.cxAudits.desc":
      "\u0645\u0647\u0627\u0645 \u0634\u0627\u0645\u0644\u0629 \u0641\u064A \u0627\u0644\u0645\u064A\u062F\u0627\u0646 \u0648\u0627\u0644\u062F\u064A\u062C\u064A\u062A\u0627\u0644. \u0623\u062D\u0633\u0646 \u0627\u0644\u0640 JABBers \u0643\u064A\u0646\u0641\u0630\u0648 \u0627\u0644\u0623\u0648\u062F\u064A\u062A \u0628\u062A\u0642\u0627\u0631\u064A\u0631 \u0645\u0647\u064A\u0643\u0644\u0629\u060C scoring \u0648\u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u064A\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639. \u0634\u0648\u0641 \u0648\u0627\u0636\u062D.",
    "services.cxAudits.cta": "\u0627\u0639\u0631\u0641 \u0623\u0643\u062B\u0631",

    "services.voiceOfCustomer.title": "\u0635\u0648\u062A \u0627\u0644\u0639\u0645\u064A\u0644",
    "services.voiceOfCustomer.subtitle":
      "\u0633\u0645\u0639 \u0627\u0644\u0644\u064A \u0645\u0627 \u0639\u0645\u0631\u0647\u0645 \u0643\u064A\u0647\u0636\u0631\u0648 \u2014 \u0642\u0628\u0644 \u0645\u0627 \u064A\u0645\u0634\u064A\u0648",
    "services.voiceOfCustomer.desc":
      "96% \u062F\u064A\u0627\u0644 \u0627\u0644\u0643\u0644\u064A\u0627\u0646 \u0627\u0644\u0645\u0627\u0634\u064A \u0631\u0627\u0636\u064A\u064A\u0646 \u0645\u0627 \u0643\u064A\u0634\u062A\u0643\u064A\u0648\u0634 \u2014 \u0643\u064A\u0645\u0634\u064A\u0648 \u0648\u0635\u0627\u0641\u064A. JABB \u0643\u064A\u0644\u0642\u0637 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0628\u0627\u0644\u0635\u0648\u062A\u060C \u0627\u0644\u0646\u0635\u060C \u0627\u0644\u062A\u0635\u0627\u0648\u0631 \u0648 Q&A \u0630\u0643\u064A. \u062A\u0642\u062F\u0631 \u062D\u062A\u0649 \u062A\u0637\u0644\u0642 \u0645\u0647\u0627\u0645 \u0639\u0645\u064A\u0644 \u0633\u0631\u064A \u062F\u064A\u0631\u0643\u062A \u0644\u0644\u0640 JABBers \u0645\u0646 \u0627\u0644\u0623\u0628\u0644\u064A\u0643\u0627\u0633\u064A\u0648\u0646.",
    "services.voiceOfCustomer.cta": "\u0627\u0643\u062A\u0634\u0641 \u0643\u064A\u0641\u0627\u0634 \u0643\u064A\u062E\u062F\u0645",

    "services.dashboard.title": "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",
    "services.dashboard.subtitle":
      "QG \u062F\u064A\u0627\u0644 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0643\u0644\u064A\u0627\u0646\u060C \u062F\u0627\u064A\u0645\u0627 \u0641\u0627\u064A\u0642",
    "services.dashboard.desc":
      "\u0643\u0644\u0634\u064A \u0642\u062F\u0627\u0645 \u0639\u064A\u0646\u064A\u0643: \u062A\u062D\u0644\u064A\u0644 IA \u0628\u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0627\u0644\u0641\u0631\u064A\u0642\u060C \u0627\u0644\u0648\u0642\u062A \u0648\u0627\u0644\u0642\u0646\u0627\u0629. \u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0641\u0648\u0631\u064A\u0629\u060C \u062A\u0642\u0627\u0631\u064A\u0631 \u0623\u0648\u062A\u0648\u0645\u0627\u062A\u064A\u0643\u064A\u0629\u060C \u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u064A\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639. \u0632\u064A\u0631\u0648 \u0632\u0627\u0648\u064A\u0629 \u0645\u064A\u062A\u0629.",
    "services.dashboard.cta": "\u0634\u0648\u0641 \u0627\u0644\u062F\u0627\u0634\u0628\u0648\u0631\u062F",

    "services.aiReports.title": "\u062A\u0642\u0627\u0631\u064A\u0631 IA",
    "services.aiReports.subtitle":
      "\u0645\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u062E\u0627\u0645 \u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0630\u0643\u064A\u0629",
    "services.aiReports.desc":
      "\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0643\u064A\u0641\u0643\u0643 \u0627\u0644\u0645\u0634\u0627\u0639\u0631\u060C \u0643\u064A\u062D\u062F\u062F \u0627\u0644\u0645\u0634\u0627\u0643\u0644\u060C \u0648\u0643\u064A\u0648\u0644\u062F \u062A\u0642\u0627\u0631\u064A\u0631 \u062C\u0627\u0647\u0632\u0629 \u0628\u0643\u0644\u064A\u0643. \u0633\u0627\u0644\u0627 \u0645\u0646 \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u064A\u062F\u0648\u064A\u0629 \u2014 \u062F\u0627\u0628\u0627 \u0648\u0642\u062A \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629.",
    "services.aiReports.cta": "\u0634\u0648\u0641 \u0643\u064A\u0641\u0627\u0634 \u0643\u064A\u062E\u062F\u0645",

    "services.rewardSystem.title": "Coins & \u0645\u0643\u0627\u0641\u0622\u062A",
    "services.rewardSystem.subtitle":
      "\u0631\u0623\u064A\u0643 \u0643\u064A\u0631\u0628\u062D\u0643. \u0628\u0627\u0644\u062D\u0642.",
    "services.rewardSystem.desc":
      "\u0643\u0644 \u062A\u0642\u064A\u064A\u0645 = JABB Coins + XP. \u0637\u0644\u0639 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A\u060C \u0641\u062A\u062D \u0645\u0647\u0627\u0645 \u0633\u0631\u064A\u0629\u060C \u0648\u0627\u0633\u062A\u0639\u0645\u0644 \u0639\u0645\u0644\u0627\u062A\u0643 \u0639\u0646\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u0621 \u062F\u064A\u0627\u0644\u0646\u0627. \u0631\u0623\u064A\u0643 \u0639\u0646\u062F\u0648 \u0642\u064A\u0645\u0629 \u2014 \u0647\u0646\u0627 \u0643\u0646\u062B\u0628\u062A\u0648\u0647\u0627\u0644\u0643.",
    "services.rewardSystem.cta": "\u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A",

    // ── What You Get ──
    "whatYouGet.title": "\u0639\u0644\u0627\u0634 JABB",
    "whatYouGet.subtitle": "\u0627\u0644\u0643\u0644 \u0631\u0627\u0628\u062D",
    "whatYouGet.tabJabbers": "\u0644\u0644\u0640 JABBers",
    "whatYouGet.tabBusinesses": "\u0644\u0644\u0634\u0631\u0643\u0627\u062A",

    "whatYouGet.earnMoney.title": "Coins & XP \u0645\u0639 \u0643\u0644 \u062A\u0642\u064A\u064A\u0645",
    "whatYouGet.earnMoney.desc":
      "JABB Coins \u0644\u064A \u062A\u0633\u062A\u0628\u062F\u0644\u0647\u0645 \u0639\u0646\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u0621 + XP \u0628\u0627\u0634 \u062A\u0637\u0644\u0639. \u0643\u062B\u0631 \u0645\u0627 \u0634\u0627\u0631\u0643\u062A\u064A\u060C \u0643\u062B\u0631 \u0645\u0627 \u0631\u0628\u062D\u062A\u064A.",
    "whatYouGet.flexibleSchedule.title": "30 \u062B\u0627\u0646\u064A\u0629 \u0648\u0643\u0641\u0649",
    "whatYouGet.flexibleSchedule.desc":
      "\u0633\u0631\u064A\u0639 \u0648\u0644\u0627 \u0645\u0639\u0645\u0642 \u2014 \u0623\u0646\u062A \u0644\u064A \u062A\u0642\u0631\u0631. \u0646\u062C\u0648\u0645\u060C \u0635\u0648\u062A\u060C \u062A\u0635\u0627\u0648\u0631 \u0648\u0644\u0627 Q&A \u0630\u0643\u064A. \u0623\u0646\u062A \u0627\u0644\u0628\u0627\u0637\u0631\u0648\u0646.",
    "whatYouGet.easyMissions.title": "\u0645\u0647\u0627\u0645 \u0633\u0631\u064A\u0629",
    "whatYouGet.easyMissions.desc":
      "\u0648\u0635\u0644\u062A\u064A \u0644\u0644\u062A\u0648\u0628\u061F \u0643\u062A\u0641\u062A\u062D \u0645\u0647\u0627\u0645 \u0643\u0644\u064A\u0627\u0646 \u0633\u0631\u064A \u062D\u0635\u0631\u064A\u0629 \u0628\u0645\u0643\u0627\u0641\u0622\u062A \u0643\u0628\u0627\u0631.",

    "whatYouGet.realTimeCX.title": "Feedback \u0641\u0648\u0631\u064A",
    "whatYouGet.realTimeCX.desc":
      "\u0643\u0644 \u0631\u0623\u064A \u0643\u064A\u0648\u0635\u0644\u0643 \u0644\u062D\u0638\u0629 \u0628\u0644\u062D\u0638\u0629 \u2014 \u0628\u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0627\u0644\u0641\u0631\u064A\u0642 \u0648\u0627\u0644\u0648\u0642\u062A.",
    "whatYouGet.gpsReports.title": "\u0625\u062B\u0628\u0627\u062A GPS \u0645\u062F\u0645\u062C",
    "whatYouGet.gpsReports.desc":
      "\u0643\u0644 \u062A\u0642\u064A\u064A\u0645 \u0645\u0648\u0642\u0639 \u062C\u063A\u0631\u0627\u0641\u064A\u0627 \u0648\u0645\u062D\u0644\u0644 \u0628\u0627\u0644 IA. \u0632\u064A\u0631\u0648 \u0634\u0643 \u0641\u064A \u0627\u0644\u0645\u0635\u062F\u0627\u0642\u064A\u0629.",
    "whatYouGet.aiInsights.title": "\u0627\u0644\u062D\u0644\u0642\u0629 \u0643\u062A\u0633\u062F",
    "whatYouGet.aiInsights.desc":
      "\u0627\u0644\u0643\u0644\u064A\u0627\u0646 \u0643\u064A\u0639\u0631\u0641\u0648 \u0645\u0644\u064A \u062A\u0635\u0631\u0641\u062A\u064A. \u0627\u0644\u0646\u062A\u064A\u062C\u0629: \u062B\u0642\u0629 \u0643\u062A\u0637\u0644\u0639\u060C \u0648\u0644\u0627\u0621 \u0643\u064A\u062A\u0628\u0646\u0649.",

    // ── Partners ──
    "partners.title": "\u062F\u062E\u0648\u0644 \u0644\u0639\u0627\u0644\u0645 JABB",
    "partners.subtitle":
      "\u0628\u063A\u064A\u062A\u064A \u0635\u0648\u062A\u0643 \u064A\u0648\u0635\u0644 \u0648\u0644\u0627 \u0628\u063A\u064A\u062A\u064A \u062A\u062D\u0633\u0646 \u0628\u064A\u0632\u0646\u0633\u0643\u061F JABB \u0643\u062A\u0631\u0628\u0637 \u0627\u0644\u0637\u0631\u0641\u064A\u0646.",
    "partners.jabber.title": "\u0648\u0644\u0651\u064A JABBer",
    "partners.jabber.desc":
      "\u0646\u0632\u0651\u0644\u060C \u0642\u064A\u0651\u0645\u060C \u0627\u0631\u0628\u062D Coins & XP. \u0627\u0633\u062A\u0639\u0645\u0644\u0647\u0645 \u0639\u0646\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u0621. \u0637\u0644\u0639 \u0641\u064A \u0627\u0644\u0644\u064A\u0641\u0644 \u0648\u0641\u062A\u062D \u0645\u0647\u0627\u0645 \u0633\u0631\u064A\u0629 \u2014 \u062E\u0644\u0651\u064A \u0631\u0623\u064A\u0643 \u0633\u0648\u0628\u064A\u0631 \u0628\u0627\u0648\u0631.",
    "partners.jabber.cta": "\u064A\u0627\u0644\u0644\u0627\u0647 \u0646\u0628\u062F\u0627",
    "partners.business.title": "\u0643\u0646 \u0634\u0631\u064A\u0643",
    "partners.business.desc":
      "Feedback \u0645\u0647\u064A\u0643\u0644\u060C \u0641\u0648\u0631\u064A\u060C \u062F\u064A\u0631\u0643\u062A \u0639\u0644\u0649 \u0627\u0644\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u062F\u064A\u0627\u0644\u0643. \u0645\u062D\u0644\u0644 \u0628\u0627\u0644 IA\u060C \u0645\u0648\u062B\u0642 GPS \u0648\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u0646\u0641\u064A\u0630 \u0645\u0646 \u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0623\u0648\u0644 \u2014 \u0645\u0646 250 \u062F\u0631\u0647\u0645/\u0634\u0647\u0631.",
    "partners.business.cta": "\u0643\u0646 \u0634\u0631\u064A\u0643\u0646\u0627",

    // ── FAQ ──
    "faq.title": "\u0623\u0633\u0626\u0644\u062A\u0643\u0645\u060C \u0623\u062C\u0648\u0628\u062A\u0646\u0627",
    "faq.subtitle": "\u0639\u0646\u062F\u0643 \u062A\u0633\u0627\u0624\u0644\u061F \u0631\u0627\u0646\u0627 \u0647\u0646\u0627.",
    "faq.anotherQuestion": "\u0639\u0646\u062F\u0643 \u0633\u0624\u0627\u0644 \u0622\u062E\u0631\u061F",

    "faq.q1": "\u0634\u0646\u0648 \u0647\u064A\u0627 JABB\u061F",
    "faq.a1":
      "JABB \u0647\u064A \u0623\u0648\u0644 \u0645\u0646\u0635\u0629 \u0645\u0648\u0627\u0637\u0646\u064A\u0629 Voice of Customer \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628. \u0623\u064A \u0648\u0627\u062D\u062F \u064A\u0642\u062F\u0631 \u064A\u0634\u0627\u0631\u0643 \u062A\u062C\u0631\u0628\u062A\u0648 \u0641\u064A 30 \u062B\u0627\u0646\u064A\u0629 \u2014 \u0646\u0635\u060C \u0635\u0648\u062A\u060C \u062A\u0635\u0627\u0648\u0631 \u0648\u0644\u0627 Q&A \u0630\u0643\u064A \u2014 \u0648\u0627\u0644\u0645\u062D\u0644 \u0643\u064A\u062A\u0648\u0635\u0644 feedback \u0645\u0647\u064A\u0643\u0644 \u0648\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u0646\u0641\u064A\u0630.",
    "faq.q2": "\u0643\u064A\u0641\u0627\u0634 \u0646\u0648\u0644\u0651\u064A JABBer\u061F",
    "faq.a2":
      "\u0646\u0632\u0651\u0644 JABB (App Store / Google Play)\u060C \u0623\u0646\u0634\u0626 \u062D\u0633\u0627\u0628\u0643 \u0628\u0627\u0644\u0645\u062C\u0627\u0646 \u0648\u0633\u064A\u0631. \u0645\u0627 \u0643\u062A\u062D\u062A\u0627\u062C \u062D\u062A\u0627 \u062E\u0628\u0631\u0629 \u2014 \u063A\u064A\u0631 \u0631\u0623\u064A\u0643 \u0627\u0644\u0635\u0627\u062F\u0642.",
    "faq.q3": "\u0643\u064A\u0641\u0627\u0634 \u0643\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u0643\u0627\u0641\u0622\u062A\u061F",
    "faq.a3":
      "\u0643\u0644 \u062A\u0642\u064A\u064A\u0645 \u0643\u064A\u0631\u0628\u062D\u0643 JABB Coins + XP. \u0627\u0644 Coins \u0643\u062A\u0633\u062A\u0628\u062F\u0644\u0647\u0645 \u0639\u0646\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u0621 (\u0631\u064A\u0633\u062A\u0648\u0631\u0627\u0646\u0627\u062A\u060C \u0645\u062A\u0627\u062C\u0631\u060C \u0633\u062A\u0627\u0633\u064A\u0648\u0646\u0627\u062A). \u0627\u0644 XP \u0643\u064A\u0637\u0644\u0639\u0643 \u0641\u064A \u0627\u0644\u0644\u064A\u0641\u0644 \u2014 \u0648\u0627\u0644\u0644\u064A\u0641\u0644\u0627\u062A \u0627\u0644\u0639\u0627\u0644\u064A\u0629 \u0643\u062A\u0641\u062A\u062D \u0645\u0647\u0627\u0645 \u0633\u0631\u064A\u0629 \u0628\u0645\u0643\u0627\u0641\u0622\u062A \u0643\u0628\u0627\u0631.",
    "faq.q4": "JABB \u0645\u0648\u062C\u0648\u062F \u0641\u064A \u0645\u062F\u064A\u0646\u062A\u064A\u061F",
    "faq.a4":
      "\u0643\u0646\u0628\u062F\u0627\u0648 \u0641\u064A \u0643\u0627\u0632\u0627 \u0648\u0643\u0646\u062A\u0648\u0633\u0639\u0648 \u0628\u0627\u0644\u0632\u0631\u0628\u0629 \u0644\u0644\u0645\u062F\u0646 \u0627\u0644\u0643\u0628\u0627\u0631 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628. \u062A\u0627\u0628\u0639\u0646\u0627 \u0641\u064A \u0627\u0644\u0623\u0628\u0644\u064A\u0643\u0627\u0633\u064A\u0648\u0646 \u0628\u0627\u0634 \u0645\u0627 \u064A\u0641\u0648\u062A\u0643 \u0648\u0627\u0644\u0648.",
    "faq.q5": "\u0643\u064A\u0641\u0627\u0634 \u0646\u0639\u0637\u064A \u0631\u0623\u064A\u064A\u061F",
    "faq.a5":
      "\u0623\u0646\u062A \u0644\u064A \u062A\u062E\u062A\u0627\u0631: Quick JABB (30 \u062B\u0627\u0646\u064A\u0629 \u2014 \u0646\u062C\u0648\u0645\u060C \u0635\u0648\u062A\u064A\u060C \u062A\u0635\u0648\u064A\u0631\u0629) \u0648\u0644\u0627 Tailored JABB (\u0627\u0644 IA \u0643\u064A\u0633\u0648\u0644\u0643 \u0623\u0633\u0626\u0644\u0629 \u0639\u0644\u0649 \u0645\u0642\u0627\u0633\u0643\u060C \u0628\u0627\u0644 swipe). \u0628\u062C\u0648\u062C \u0643\u064A\u0631\u0628\u062D\u0648\u0643 coins.",
    "faq.q6": "\u0634\u0646\u0648 \u0627\u0644\u0628\u064A\u0632\u0646\u0633 \u0644\u064A \u064A\u0642\u062F\u0631 \u064A\u0633\u062A\u0639\u0645\u0644 JABB\u061F",
    "faq.a6":
      "\u0623\u064A \u0628\u064A\u0632\u0646\u0633: \u0631\u064A\u0633\u062A\u0648\u0631\u0627\u0646\u0627\u062A\u060C \u0645\u062A\u0627\u062C\u0631\u060C \u0628\u0646\u0648\u0643\u060C \u0641\u0646\u0627\u062F\u0642\u060C \u062A\u064A\u0644\u064A\u0643\u0648\u0645\u060C \u0633\u062A\u0627\u0633\u064A\u0648\u0646\u0627\u062A\u060C \u0641\u0627\u0631\u0645\u0627\u0633\u064A\u0627\u062A\u2026 JABB \u0643\u064A\u062A\u0623\u0642\u0644\u0645 \u0645\u0639 \u0643\u0644 \u0642\u0637\u0627\u0639 \u0628\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0639\u0644\u0649 \u0627\u0644\u0645\u0642\u0627\u0633.",
    "faq.q7": "\u0634\u0646\u0648 \u0647\u064A\u0627 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0633\u0631\u064A\u0629\u061F",
    "faq.a7":
      "\u0645\u0644\u064A \u062A\u0648\u0635\u0644 \u0644\u0644\u064A\u0641\u0644 \u0639\u0627\u0644\u064A \u0628\u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0645\u0632\u064A\u0627\u0646\u0629\u060C JABB \u0643\u062A\u0639\u0631\u0636 \u0639\u0644\u064A\u0643 \u0645\u0647\u0627\u0645 \u0643\u0644\u064A\u0627\u0646 \u0633\u0631\u064A \u2014 \u062A\u062F\u0642\u064A\u0642\u0627\u062A \u0645\u064A\u062F\u0627\u0646\u064A\u0629 \u0645\u0639\u0645\u0642\u0629 \u0641\u064A \u0623\u0645\u0627\u0643\u0646 \u0645\u062D\u062F\u062F\u0629\u060C \u0628\u0645\u0643\u0627\u0641\u0622\u062A \u0643\u0628\u064A\u0631\u0629.",
    "faq.q8": "\u0628\u064A\u0627\u0646\u0627\u062A\u064A \u0622\u0645\u0646\u0629\u061F",
    "faq.a8":
      "100%. \u062A\u0634\u0641\u064A\u0631 \u0645\u0646 \u0637\u0631\u0641 \u0644\u0637\u0631\u0641\u060C privacy by design. \u0645\u0639\u0644\u0648\u0645\u0627\u062A\u0643 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0645\u0627 \u0643\u062A\u062A\u0634\u0627\u0631\u0643 \u0645\u0639 \u062D\u062A\u0627 \u0634\u064A \u0645\u062D\u0644 \u2014 \u063A\u064A\u0631 \u0631\u0623\u064A\u0643 \u0627\u0644\u0645\u0647\u064A\u0643\u0644 \u0647\u0648 \u0644\u064A \u0643\u064A\u0648\u0635\u0644\u0647\u0645.",
    "faq.q9": "\u0631\u0623\u064A\u064A \u0643\u064A\u0648\u0635\u0644 \u0628\u0635\u062D \u0644\u0644\u0645\u062D\u0644\u061F",
    "faq.a9":
      "\u0637\u0628\u0639\u0627\u064B! \u0647\u0627\u062F\u064A \u0647\u064A\u0627 \u0627\u0644\u0641\u0643\u0631\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629. \u0631\u0623\u064A\u0643 \u0627\u0644\u0645\u0647\u064A\u0643\u0644 \u0643\u064A\u0637\u064A\u062D \u062F\u064A\u0631\u0643\u062A \u0641\u064A \u0627\u0644\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u062F\u064A\u0627\u0644 \u0627\u0644\u0645\u062D\u0644. \u0643\u064A\u0634\u0648\u0641\u0648\u060C \u0643\u064A\u062A\u0635\u0631\u0641\u0648\u060C \u0648\u0623\u0646\u062A \u0643\u062A\u0648\u0635\u0644\u0643 \u0625\u0634\u0639\u0627\u0631. \u0627\u0644\u062D\u0644\u0642\u0629 \u0643\u062A\u0633\u062F.",
    "faq.q10": "\u0643\u064A\u0641\u0627\u0634 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0643\u062A\u0634\u0648\u0641 \u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631\u061F",
    "faq.a10":
      "\u0639\u0628\u0631 \u062F\u0627\u0634\u0628\u0648\u0631\u062F JABB VOC \u2014 \u062A\u062D\u0644\u064A\u0644 IA \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0641\u0639\u0644\u064A \u0628\u0627\u0644\u0645\u0648\u0642\u0639\u060C \u0627\u0644\u0641\u0631\u064A\u0642\u060C \u0627\u0644\u0633\u0627\u0639\u0629 \u0648\u0627\u0644\u0642\u0646\u0627\u0629. \u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0641\u0648\u0631\u064A\u0629\u060C \u062A\u0642\u0627\u0631\u064A\u0631 \u0623\u0648\u062A\u0648\u060C \u0648\u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u064A\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639.",

    // ── CTA ──
    "cta.title": "\u0631\u0623\u064A\u0643 \u0643\u064A\u0633\u0648\u0649 \u0630\u0647\u0628.\n\u0628\u062F\u0627 \u0634\u0627\u0631\u0643\u0648.",
    "cta.subtitle":
      "\u0627\u0646\u0636\u0645 \u0644\u0640 500+ JABBer \u0644\u064A \u0643\u064A\u0634\u0627\u0631\u0643\u0648 \u062A\u062C\u0631\u0628\u062A\u0647\u0645\u060C \u0643\u064A\u0631\u0628\u062D\u0648 coins\u060C \u0648\u0643\u064A\u062D\u0631\u0643\u0648 \u0627\u0644\u0623\u0645\u0648\u0631 \u0641\u064A \u0627\u0644\u0645\u063A\u0631\u0628.",
    "cta.downloadApp": "\u062D\u0645\u0651\u0644 \u0627\u0644\u0623\u0628\u0644\u064A\u0643\u0627\u0633\u064A\u0648\u0646",
    "cta.partnerWithUs": "\u0643\u0646 \u0634\u0631\u064A\u0643\u0646\u0627",

    // ── Footer ──
    "footer.platform": "\u0627\u0644\u0645\u0646\u0635\u0629",
    "footer.solutions": "\u0627\u0644\u062D\u0644\u0648\u0644",
    "footer.company": "\u0627\u0644\u0634\u0631\u0643\u0629",
    "footer.cities": "\u0627\u0644\u0645\u062F\u0646",
    "footer.aboutUs": "\u0645\u0646 \u0646\u062D\u0646",
    "footer.contact": "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
    "footer.blog": "\u0627\u0644\u0645\u062F\u0648\u0646\u0629",
    "footer.howItWorks": "\u0643\u064A\u0641\u0627\u0634 \u0643\u064A\u062E\u062F\u0645 JABB",
    "footer.termsOfService": "\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645",
    "footer.privacyPolicy": "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629",
    "footer.cookiePolicy": "\u0633\u064A\u0627\u0633\u0629 \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637",
    "footer.allRightsReserved": "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 JABB",

    // ── Orbit ──
    "orbit.badge": "\u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0642\u0646\u0648\u0627\u062A",
    "orbit.title": "\u0643\u0644 \u0642\u0646\u0627\u0629\u060C \u0645\u0646\u0635\u0629 \u0648\u062D\u062F\u0629",
    "orbit.subtitle": "JABB \u0643\u064A\u0644\u0642\u0637 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0643\u0644\u064A\u0627\u0646 \u0641\u064A \u0643\u0644 \u0645\u0643\u0627\u0646 \u2014 \u0648\u064A\u0628\u060C \u0645\u0648\u0628\u0627\u064A\u0644\u060C \u0641\u064A \u0627\u0644\u0645\u062D\u0644 \u0648\u0623\u0643\u062B\u0631.",

    // ── Common ──
    "common.english": "English",
    "common.french": "Fran\u00E7ais",
    "common.arabic": "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    "common.dark": "\u062F\u0627\u0643\u0646",
    "common.light": "\u0641\u0627\u062A\u062D",
  },
} as const;
