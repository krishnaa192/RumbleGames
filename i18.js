import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const storedLang = localStorage.getItem('playbee-language') || 'en';
import LanguageDetector from 'i18next-browser-languagedetector'; 

const resources = {
  en: {
    translation: {
      home: "Home",
      tagline: "Come Play",
      language: "Language",
      games: "Games",
      topGames: "Top Games",
      mostPlayed: "Most Played",
      trending: "Trending",
      copyright: "@2025 Playbee. All Rights Reserved",
      account: "My Account",
      playNow: "Play Now",
      viewAll: "View All",
      light: "Light",
      similarGames: "Similar Games",
      terms: "Terms and Conditions",
      mobile_number_label: "Mobile Number with Country Code:",
      faq: "FAQ",
      privacy: "Privacy Policy",
      MyAccount:"My Account",
      dark: "Dark",
      status: "Status",
      Unsubsribe: "Unsubscribe",
      inactive: "Inactive",
      categories: {
        All: "All",
        Action: "Action",
        Adventure: "Adventure",
        Arcade: "Arcade",
        Board: "Board",
        Casual: "Casual",
        Puzzle: "Puzzle",
        Sports: "Sports and Racing"
      },
      termsText: [
        "After the unsubscription of the Daily package, the portal content can be accessed even after 24 hours.",
        "Data charges would apply for browsing & downloading contents on this portal.",
        "Contents are compatible with all handsets.",
        "To make use of this service, one must be more than 18 years old or have received permission from your parents or person who is authorized to pay your mobile bill.",
        "To unsubscribe the Service log into my account and click on unsubscribe."
      ],
      faqs: [
        {
          question: "What are the charges?",
          answer: "Current subscription pack charges will be applied according to the package."
        },
        {
          question: "How can I pay for the service?",
          answer: "You will be charged from your existing balance (prepaid) or monthly bill (Postpaid)."
        },
        {
          question: "Is this compatible with all phones?",
          answer: "Compatible with iOS, Android, Windows, and Symbian phones."
        },
        {
          question: "How many content pieces can I access?",
          answer: "You can access all content subscribed to the service."
        },
        {
          question: "How long can I use this service?",
          answer: "You can use the service as long as you're subscribed. The service auto-renews. To unsubscribe, deactivate it from your account."
        },
        {
          question: "What is the age criterion to avail this service?",
          answer: "You must be 18 years or older or have parental/guardian consent."
        }
      ]
    }
  },
  ar: {
    translation: {
      home: "الرئيسية",
      tagline: "العب دائماً",
      games: "ألعاب",
      language: "اللغة",
      topGames: "أفضل الألعاب",
      mostPlayed: "الأكثر لعبًا",
      trending: "الشائع",
      playNow: "العب الآن",
      similarGames: "ألعاب مشابهة",
      account: "عضوية",
      MyAccount:"حسابي",
     copyright: "@٢٠٢٥ بلايبي. جميع الحقوق محفوظة.",
      mobile_number_label: "رقم الهاتف مع رمز الدولة:",
      viewAll: "عرض الكل",
      light: "فاتح",
      terms: "الشروط والأحكام",
      faq: "الأسئلة الشائعة",
      privacy: "سياسة الخصوصية",
      dark: "داكن",
      status: "الحالة",
      Unsubsribe: "إلغاء الاشتراك",
      inactive: "غير نشط",
      categories: {
        All: "الكل",
        Action: "حركة",
        Adventure: "مغامرة",
        Arcade: "أركيد",
        Board: "لوحة",
        Casual: "غير رسمي",
        Puzzle: "ألغاز",
        Sports: "الرياضة والسباق"
      },
      termsText: [
        "بعد إلغاء اشتراك الحزمة اليومية، يمكن الوصول إلى المحتوى عبر البوابة حتى بعد 24 ساعة.",
        "سيتم تطبيق رسوم بيانات لتصفح وتنزيل المحتويات على هذه البوابة.",
        "المحتويات متوافقة مع جميع الأجهزة المحمولة.",
        "لاستخدام هذه الخدمة، يجب أن يكون عمر المستخدم أكثر من 18 عامًا أو لديه إذن من الوالدين أو الشخص المسؤول عن دفع فاتورة المحمول.",
        "لإلغاء اشتراك الخدمة، سجل الدخول إلى حسابي وانقر على إلغاء الاشتراك."
      ],
      faqs: [
        {
          question: "ما هي الرسوم؟",
          answer: "رسوم حزمة الاشتراك الحالية سيتم تطبيقها حسب الباقة."
        },
        {
          question: "كيف يمكنني الدفع مقابل الخدمة؟",
          answer: "سيتم خصم المبلغ من رصيدك الحالي (مدفوع مسبقًا) أو فاتورة شهرية (لاحق الدفع)."
        },
        {
          question: "هل هذه الخدمة متوافقة مع جميع الهواتف؟",
          answer: "متوافقة مع أجهزة iOS وAndroid وWindows وSymbian."
        },
        {
          question: "كم عدد المحتويات التي يمكنني الوصول إليها؟",
          answer: "يمكنك الوصول إلى جميع المحتويات المشترك بها في الخدمة."
        },
        {
          question: "إلى متى يمكنني استخدام هذه الخدمة؟",
          answer: "يمكنك استخدام الخدمة طالما أنك مشترك. تجدد تلقائيًا عند انتهاء الصلاحية. لإلغاء الاشتراك، قم بإلغاءها من حسابك."
        },
        {
          question: "ما هو العمر المطلوب للاستفادة من هذه الخدمة؟",
          answer: "يجب أن يكون عمرك 18 عامًا أو أكثر أو الحصول على موافقة الوالدين/الوصي."
        }
      ]
    }
  },
  pl: {
    translation: {
      home: "Strona główna",
      tagline: "Graj zawsze",
      games: "Gry",
      language: "Język",
      account: "Moje konto",
      topGames: "Najlepsze gry",
      trending:"Na topie",
      similarGames: "Podobne gry",
      mostPlayed: "Najczęściej grane",
      viewAll: "Zobacz wszystko",
      playNow: "Zagraj teraz",
      light: "Jasny",
      terms: "Regulamin",
      MyAccount:"Moje konto",
      faq: "FAQ",
      privacy: "Polityka prywatności",
      mobile_number_label: "Numer telefonu z kodem kraju:",
      dark: "Ciemny",
      status: "Status",
      Unsubsribe: "Anuluj subskrypcję",
      inactive: "Nieaktywny",
      copyright: "©2025 Playbee. Wszelkie prawa zastrzeżone.",
      categories: {
        All: "Wszystko",
        Action: "Akcja",
        Adventure: "Przygoda",
        Arcade: "Zręcznościowe",
        Board: "Planszowe",
        Casual: "Swobodne",
        Puzzle: "Układanki",
        Sports: "Sporty i wyścigi"
      },
      termsText: [
        "Po rezygnacji z codziennego pakietu, zawartość portalu można przeglądać nawet po 24 godzinach.",
        "Opłaty za dane będą naliczane za przeglądanie i pobieranie treści na tym portalu.",
        "Treści są kompatybilne ze wszystkimi telefonami.",
        "Aby korzystać z tej usługi, należy mieć ukończone 18 lat lub uzyskać zgodę rodziców lub osoby odpowiedzialnej za opłatę rachunku.",
        "Aby zrezygnować z usługi, zaloguj się na moje konto i kliknij 'anuluj subskrypcję'."
      ],
      faqs: [
        {
          question: "Jakie są opłaty?",
          answer: "Obowiązują opłaty zgodnie z bieżącym planem subskrypcji."
        },
        {
          question: "Jak mogę zapłacić za usługę?",
          answer: "Opłata zostanie pobrana z Twojego aktualnego salda (prepaid) lub miesięcznego rachunku (postpaid)."
        },
        {
          question: "Czy jest to kompatybilne ze wszystkimi telefonami?",
          answer: "Kompatybilne z telefonami iOS, Android, Windows i Symbian."
        },
        {
          question: "Ile treści mogę przeglądać?",
          answer: "Możesz uzyskać dostęp do wszystkich treści, na które się zapisałeś."
        },
        {
          question: "Jak długo mogę korzystać z usługi?",
          answer: "Możesz korzystać z usługi tak długo, jak długo jesteś subskrybentem. Usługa odnawia się automatycznie po wygaśnięciu. Aby zrezygnować, dezaktywuj ją w swoim koncie."
        },
        {
          question: "Jaki jest wymóg wiekowy, aby korzystać z usługi?",
          answer: "Musisz mieć co najmniej 18 lat lub uzyskać zgodę rodziców/opiekuna."
        }
      ]
    }
  },
  fr: {
    translation: {
      home: "Accueil",
      tagline: "Jouez toujours",
      games: "Jeux",
      language: "Langue",
      account: "Mon compte",
      topGames: "Jeux populaires",
      mostPlayed: "Les plus joués",
      trending:"Tendance",
      similarGames: "Jeux similaires",
      playNow: "Jouer maintenant",
      viewAll: "Voir tout",
      light: "Clair",
      terms: "Conditions générales",
      faq: "FAQ",
      privacy: "Politique de confidentialité",
      dark: "Sombre",
      status: "Statut",
      Unsubsribe: "Se désabonner",
      inactive: "Inactif",
      MyAccount:"Mon compte",
      copyright: "©2025 Playbee. Tous droits réservés.",
      mobile_number_label: "Numéro de mobile avec l'indicatif du pays :",
      categories: {
        All: "Tous",
        Action: "Action",
        Adventure: "Aventure",
        Arcade: "Arcade",
        Board: "Jeu de société",
        Casual: "Décontracté",
        Puzzle: "Casse-tête",
        Sports: "	Sports et courses"
      },
      termsText: [
        "Après la désinscription du forfait quotidien, le contenu du portail reste accessible même après 24 heures.",
        "Des frais de données s’appliquent pour la navigation et le téléchargement de contenu sur ce portail.",
        "Les contenus sont compatibles avec tous les téléphones portables.",
        "Pour utiliser ce service, vous devez avoir plus de 18 ans ou avoir obtenu l’autorisation de vos parents ou de la personne qui paie votre facture mobile.",
        "Pour vous désabonner, connectez-vous à mon compte et cliquez sur se désabonner."
      ],
      faqs: [
        {
          question: "Quels sont les frais ?",
          answer: "Les frais du forfait d’abonnement actuel seront appliqués en fonction du pack."
        },
        {
          question: "Comment puis-je payer le service ?",
          answer: "Le montant sera débité de votre solde existant (prépayé) ou de votre facture mensuelle (postpayé)."
        },
        {
          question: "Est‑ce compatible avec tous les téléphones ?",
          answer: "Compatible avec les téléphones iOS, Android, Windows et Symbian."
        },
        {
          question: "Combien de contenus puis‑je accéder ?",
          answer: "Vous pouvez accéder à tout le contenu auquel vous êtes abonné."
        },
        {
          question: "Combien de temps puis‑je utiliser ce service ?",
          answer: "Vous pouvez utiliser le service tant que vous êtes abonné. Le service est renouvelé automatiquement à expiration. Pour vous désabonner, désactivez‑le depuis votre compte."
        },
        {
          question: "Quel est le critère d’âge pour bénéficier de ce service ?",
          answer: "Vous devez avoir 18 ans ou plus ou avoir le consentement parental / du tuteur."
        }
      ]
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'playbee-language', // ✅ same key you're using to store it
    },
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;
