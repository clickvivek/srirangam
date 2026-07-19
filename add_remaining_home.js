const fs = require('fs');
const path = require('path');

const locales = ['te', 'ml', 'kn'];

const translations = {
  te: {
    navigation: {
      "darshan": "ఆలయ వేళలు",
      "deity": "దేవతలు & సేవ",
      "history": "ఆలయ చరిత్ర",
      "map": "ఆలయ మ్యాప్",
      "surroundings": "సమీప దేవాలయాలు",
      "seva": "సేవా బుకింగ్",
      "prasadam": "అన్నదానం / ప్రసాదం",
      "dharmaSalas": "హోటల్స్/బస",
      "transport": "రవాణా సమాచారం",
      "gallery": "ఫోటో గ్యాలరీ"
    },
    home: {
      "title": "శ్రీ రంగనాథస్వామి ఆలయం",
      "subtitle": "శ్రీరంగం రంగనాథర్ — శ్రీరంగం, తమిళనాడు",
      "desc": "ప్రపంచంలోనే అతిపెద్ద హిందూ దేవాలయం, భగవాన్ రంగనాథుడికి (విష్ణువు) అంకితం చేయబడింది. శ్రీరంగం పవిత్ర ద్వీపంలో ఉన్న ఒక ప్రధాన వైష్ణవ దివ్య దేశం.",
      "openToday": "ఈరోజు తెరిచి ఉంది",
      "slotsToday": "ఈరోజు 4 స్లాట్లు",
      "todaysQueue": "ఈనాటి క్యూ",
      "waitMin": "~45 నిమిషాల నిరీక్షణ",
      "darshanSchedule": "దర్శన షెడ్యూల్",
      "templeTimings": "ఆలయ వేళలు",
      "timingsSub": "ఆలయ వేళలు — ప్రతిరోజూ 4 దర్శన స్లాట్లు",
      "explore": "దేవతలు & సేవ",
      "quickAccess": "త్వరిత యాక్సెస్",
      "viswaroopaDarshan": "విశ్వరూప దర్శనం",
      "generalMorning": "సాధారణ దర్శనం (ఉదయం)",
      "generalAfternoon": "సాధారణ దర్శనం (మధ్యాహ్నం)",
      "generalEvening": "సాధారణ దర్శనం (సాయంత్రం)",
      "importantNote": "ముఖ్యమైన గమనిక",
      "fullCalendar": "పూర్తి క్యాలెండర్"
    },
    footer: {
      "desc": "శ్రీ రంగనాథస్వామి ఆలయం, శ్రీరంగం కొరకు ఒక సమాచార పోర్టల్ — ప్రపంచంలోని అతిపెద్ద హిందూ దేవాలయం మరియు ప్రధాన వైష్ణవ దివ్య దేశం.",
      "quickLinks": "త్వరిత లింకులు",
      "contact": "సంప్రదించండి",
      "contactForm": "సంప్రదింపు ఫారం",
      "disclaimer": "నిరాకరణ: ఇది శ్రీ రంగనాథస్వామి ఆలయం యొక్క అధికారిక ప్రభుత్వ వెబ్‌సైట్ కాదు. ఈ వెబ్‌సైట్‌ను శ్రీ రంగనాథుని భక్తులు (వాలంటీర్లు) నిర్వహిస్తున్నారు."
    }
  },
  ml: {
    navigation: {
      "darshan": "ക്ഷേത്ര സമയങ്ങൾ",
      "deity": "ദേവതകളും സേവകളും",
      "history": "ക്ഷേത്ര ചരിത്രം",
      "map": "ക്ഷേത്ര ഭൂപടം",
      "surroundings": "സമീപത്തെ ക്ഷേത്രങ്ങൾ",
      "seva": "സേവ ബുക്കിംഗ്",
      "prasadam": "അന്നദാനം / പ്രസാദം",
      "dharmaSalas": "ഹോട്ടലുകൾ/താമസം",
      "transport": "ഗതാഗത വിവരങ്ങൾ",
      "gallery": "ഫോട്ടോ ഗാലറി"
    },
    home: {
      "title": "ശ്രീ രംഗനാഥസ്വാമി ക്ഷേത്രം",
      "subtitle": "ശ്രീരംഗം രംഗനാഥർ — ശ്രീരംഗം, തമിഴ്നാട്",
      "desc": "ലോകത്തിലെ ഏറ്റവും വലിയ ഹിന്ദു ക്ഷേത്രം, ഭഗവാൻ രംഗനാഥന് (വിഷ്ണു) സമർപ്പിച്ചിരിക്കുന്നു. ശ്രീരംഗമെന്ന പുണ്യദ്വീപിലെ ഒരു പ്രധാന വൈഷ്ണവ ദിവ്യദേശം.",
      "openToday": "ഇന്ന് തുറന്നിരിക്കുന്നു",
      "slotsToday": "ഇന്ന് 4 സ്ലോട്ടുകൾ",
      "todaysQueue": "ഇന്നത്തെ വരി",
      "waitMin": "~45 മിനിറ്റ് കാത്തിരിപ്പ്",
      "darshanSchedule": "ദർശന സമയം",
      "templeTimings": "ക്ഷേത്ര സമയങ്ങൾ",
      "timingsSub": "ക്ഷേത്ര സമയങ്ങൾ — ദിവസവും 4 ദർശന സ്ലോട്ടുകൾ",
      "explore": "ദേവതകളും സേവകളും",
      "quickAccess": "പെട്ടെന്നുള്ള ആക്സസ്",
      "viswaroopaDarshan": "വിശ്വരൂപ ദർശനം",
      "generalMorning": "പൊതു ദർശനം (രാവിലെ)",
      "generalAfternoon": "പൊതു ദർശനം (ഉച്ചയ്ക്ക്)",
      "generalEvening": "പൊതു ദർശനം (വൈകുന്നേരം)",
      "importantNote": "പ്രധാന കുറിപ്പ്",
      "fullCalendar": "പൂർണ്ണ കലണ്ടർ"
    },
    footer: {
      "desc": "ശ്രീ രംഗനാഥസ്വാമി ക്ഷേത്രം, ശ്രീരംഗത്തിനായുള്ള ഒരു വിവര പോർട്ടൽ — ലോകത്തിലെ ഏറ്റവും വലിയ ഹിന്ദു ക്ഷേത്രവും പ്രധാന വൈഷ്ണവ ദിവ്യദേശവും.",
      "quickLinks": "പ്രധാന ലിങ്കുകൾ",
      "contact": "ബന്ധപ്പെടുക",
      "contactForm": "കോൺടാക്റ്റ് ഫോം",
      "disclaimer": "നിരാകരണം: ഇത് ശ്രീ രംഗനാഥസ്വാമി ക്ഷേത്രത്തിന്റെ ഔദ്യോഗിക സർക്കാർ വെബ്സൈറ്റ് അല്ല. ഈ വെബ്സൈറ്റ് പരിപാലിക്കുന്നത് ശ്രീ രംഗനാഥ ഭക്തരാണ് (വോളന്റിയർമാർ)."
    }
  },
  kn: {
    navigation: {
      "darshan": "ದೇವಾಲಯದ ಸಮಯ",
      "deity": "ದೇವರುಗಳು ಮತ್ತು ಸೇವೆ",
      "history": "ದೇವಾಲಯದ ಇತಿಹಾಸ",
      "map": "ದೇವಾಲಯದ ನಕ್ಷೆ",
      "surroundings": "ಹತ್ತಿರದ ದೇವಾಲಯಗಳು",
      "seva": "ಸೇವಾ ಬುಕಿಂಗ್",
      "prasadam": "ಅನ್ನದಾನ / ಪ್ರಸಾದ",
      "dharmaSalas": "ಹೋಟೆಲ್/ವಸತಿ",
      "transport": "ಸಾರಿಗೆ ಮಾಹಿತಿ",
      "gallery": "ಫೋಟೋ ಗ್ಯಾಲರಿ"
    },
    home: {
      "title": "ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿ ದೇವಾಲಯ",
      "subtitle": "ಶ್ರೀರಂಗಂ ರಂಗನಾಥರ್ — ಶ್ರೀರಂಗಂ, ತಮಿಳುನಾಡು",
      "desc": "ಭಗವಾನ್ ರಂಗನಾಥನಿಗೆ (ವಿಷ್ಣು) ಸಮರ್ಪಿತವಾದ ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ಹಿಂದೂ ದೇವಾಲಯ. ಶ್ರೀರಂಗಂನ ಪವಿತ್ರ ದ್ವೀಪದಲ್ಲಿರುವ ಪ್ರಮುಖ ವೈಷ್ಣವ ದಿವ್ಯ ದೇಶ.",
      "openToday": "ಇಂದು ತೆರೆದಿದೆ",
      "slotsToday": "ಇಂದು 4 ಸ್ಲಾಟ್‌ಗಳು",
      "todaysQueue": "ಇಂದಿನ ಸರತಿ",
      "waitMin": "~45 ನಿಮಿಷಗಳ ಕಾಯುವಿಕೆ",
      "darshanSchedule": "ದರ್ಶನ ವೇಳಾಪಟ್ಟಿ",
      "templeTimings": "ದೇವಾಲಯದ ಸಮಯ",
      "timingsSub": "ದೇವಾಲಯದ ಸಮಯ — ಪ್ರತಿದಿನ 4 ದರ್ಶನ ಸ್ಲಾಟ್‌ಗಳು",
      "explore": "ದೇವರುಗಳು ಮತ್ತು ಸೇವೆ",
      "quickAccess": "ತ್ವರಿತ ಪ್ರವೇಶ",
      "viswaroopaDarshan": "ವಿಶ್ವರೂಪ ದರ್ಶನ",
      "generalMorning": "ಸಾಮಾನ್ಯ ದರ್ಶನ (ಬೆಳಿಗ್ಗೆ)",
      "generalAfternoon": "ಸಾಮಾನ್ಯ ದರ್ಶನ (ಮಧ್ಯಾಹ್ನ)",
      "generalEvening": "ಸಾಮಾನ್ಯ ದರ್ಶನ (ಸಂಜೆ)",
      "importantNote": "ಪ್ರಮುಖ ಸೂಚನೆ",
      "fullCalendar": "ಪೂರ್ಣ ಕ್ಯಾಲೆಂಡರ್"
    },
    footer: {
      "desc": "ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿ ದೇವಾಲಯ, ಶ್ರೀರಂಗಂಗಾಗಿ ಒಂದು ಮಾಹಿತಿ ಪೋರ್ಟಲ್ — ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ಹಿಂದೂ ದೇವಾಲಯ ಮತ್ತು ಪ್ರಮುಖ ವೈಷ್ಣವ ದಿವ್ಯ ದೇಶ.",
      "quickLinks": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
      "contact": "ಸಂಪರ್ಕ",
      "contactForm": "ಸಂಪರ್ಕ ಫಾರ್ಮ್",
      "disclaimer": "ಹಕ್ಕುತ್ಯಾಗ: ಇದು ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿ ದೇವಾಲಯದ ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಅಲ್ಲ. ಈ ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ಶ್ರೀ ರಂಗನಾಥ ಭಕ್ತರು (ಸ್ವಯಂಸೇವಕರು) ನಿರ್ವಹಿಸುತ್ತಾರೆ."
    }
  }
};

locales.forEach(loc => {
  const p = path.join(__dirname, 'src/dictionaries', `${loc}.json`);
  let data = {};
  if (fs.existsSync(p)) {
    data = JSON.parse(fs.readFileSync(p, 'utf8'));
  }
  
  data.navigation = Object.assign({}, data.navigation || {}, translations[loc].navigation);
  data.home = Object.assign({}, data.home || {}, translations[loc].home);
  data.footer = Object.assign({}, data.footer || {}, translations[loc].footer);
  
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
});

console.log("Homepage translations updated for TE, ML, KN.");
