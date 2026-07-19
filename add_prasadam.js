const fs = require('fs');
const path = require('path');

const locales = ['en', 'ta', 'te', 'hi', 'ml', 'kn'];

const content = {
  en: {
    heroTitle: "Annadhanam & Prasadam",
    heroSubtitle: "Free Meals Scheme (Nithya Annadhanam)",
    programTitle: "Nithya Annadhanam Program",
    programDesc1: "For the convenience of the devotees, the full-day Annadanam program has been running successfully since <strong>13-09-2012</strong>. Every single day, at least <strong>3,000 devotees</strong> are provided with wholesome, sacred meals as Prasadam.",
    locationTitle: "Location",
    locationDesc: "Dining Hall near to the Temple Rooftop View Point.",
    referMap: "Refer to the Temple Map",
    donationTitle: "Donation Details",
    oneDayTitle: "One-Day Scheme",
    oneDayDesc: "Provides Annadanam to 100 persons for a single day.",
    permanentTitle: "Permanent Endowment",
    permanentDesc: "Deposit for feeding 100 persons on a particular day every year.",
    multipleNote: "For multiple Annadanams, the amount will be calculated in the above ratio.",
    donateBtn: "Proceed to Online Donation"
  },
  ta: {
    heroTitle: "அன்னதானம் மற்றும் பிரசாதம்",
    heroSubtitle: "இலவச உணவுத் திட்டம் (நித்ய அன்னதானம்)",
    programTitle: "நித்ய அன்னதானத் திட்டம்",
    programDesc1: "பக்தர்களின் வசதிக்காக முழுநேர அன்னதானத் திட்டம் <strong>13-09-2012</strong> முதல் வெற்றிகரமாக நடைபெற்று வருகிறது. தினமும் குறைந்தபட்சம் <strong>3,000 பக்தர்களுக்கு</strong> பிரசாதமாக உணவு வழங்கப்படுகிறது.",
    locationTitle: "இடம்",
    locationDesc: "கோவில் மேற்கூரை பார்வை இடத்திற்கு அருகில் உள்ள உணவுக்கூடம்.",
    referMap: "கோவில் வரைபடத்தைப் பார்க்கவும்",
    donationTitle: "நன்கொடை விவரங்கள்",
    oneDayTitle: "ஒரு நாள் திட்டம்",
    oneDayDesc: "ஒரு நாளுக்கு 100 நபர்களுக்கு அன்னதானம் வழங்கப்படுகிறது.",
    permanentTitle: "நிரந்தர அறக்கட்டளை",
    permanentDesc: "ஒவ்வொரு ஆண்டும் ஒரு குறிப்பிட்ட நாளில் 100 பேருக்கு உணவளிக்க வைப்பு நிதி.",
    multipleNote: "பல அன்னதானங்களுக்கு, மேற்கண்ட விகிதத்தில் தொகை கணக்கிடப்படும்.",
    donateBtn: "ஆன்லைன் நன்கொடைக்குச் செல்லவும்"
  },
  hi: {
    heroTitle: "अन्नदानम और प्रसादम",
    heroSubtitle: "मुफ्त भोजन योजना (नित्य अन्नदानम)",
    programTitle: "नित्य अन्नदानम कार्यक्रम",
    programDesc1: "भक्तों की सुविधा के लिए, पूरे दिन का अन्नदानम कार्यक्रम <strong>13-09-2012</strong> से सफलतापूर्वक चल रहा है। हर एक दिन, कम से कम <strong>3,000 भक्तों</strong> को प्रसादम के रूप में भोजन प्रदान किया जाता है।",
    locationTitle: "स्थान",
    locationDesc: "मंदिर के छत के दृश्य बिंदु के पास डाइनिंग हॉल।",
    referMap: "मंदिर का नक्शा देखें",
    donationTitle: "दान विवरण",
    oneDayTitle: "एक दिवसीय योजना",
    oneDayDesc: "एक दिन के लिए 100 व्यक्तियों को अन्नदानम प्रदान करता है।",
    permanentTitle: "स्थायी बंदोबस्ती",
    permanentDesc: "हर साल किसी विशेष दिन 100 व्यक्तियों को भोजन कराने के लिए जमा राशि।",
    multipleNote: "कई अन्नदानम के लिए, राशि की गणना उपरोक्त अनुपात में की जाएगी।",
    donateBtn: "ऑनलाइन दान के लिए आगे बढ़ें"
  },
  te: {
    heroTitle: "అన్నదానం మరియు ప్రసాదం",
    heroSubtitle: "ఉచిత భోజన పథకం (నిత్య అన్నదానం)",
    programTitle: "నిత్య అన్నదానం కార్యక్రమం",
    programDesc1: "భక్తుల సౌకర్యార్థం, <strong>13-09-2012</strong> నుండి రోజంతా అన్నదాన కార్యక్రమం విజయవంతంగా నడుస్తోంది. ప్రతిరోజూ కనీసం <strong>3,000 మంది భక్తులకు</strong> ప్రసాదంగా పవిత్ర భోజనం అందిస్తారు.",
    locationTitle: "స్థానం",
    locationDesc: "ఆలయ రూఫ్‌టాప్ వ్యూ పాయింట్ సమీపంలో ఉన్న డైనింగ్ హాల్.",
    referMap: "ఆలయ మ్యాప్‌ను చూడండి",
    donationTitle: "విరాళం వివరాలు",
    oneDayTitle: "ఒక రోజు పథకం",
    oneDayDesc: "ఒక్క రోజు కోసం 100 మందికి అన్నదానం అందిస్తుంది.",
    permanentTitle: "శాశ్వత విరాళం",
    permanentDesc: "ప్రతి సంవత్సరం ఒక నిర్దిష్ట రోజున 100 మందికి ఆహారం అందించడానికి డిపాజిట్.",
    multipleNote: "బహుళ అన్నదానాలకు, పై నిష్పత్తిలో మొత్తం లెక్కించబడుతుంది.",
    donateBtn: "ఆన్‌లైన్ విరాళానికి వెళ్లండి"
  },
  ml: {
    heroTitle: "അന്നദാനവും പ്രസാദവും",
    heroSubtitle: "സൗജന്യ ഭക്ഷണ പദ്ധതി (നിത്യ അന്നദാനം)",
    programTitle: "നിത്യ അന്നദാന പദ്ധതി",
    programDesc1: "ഭക്തരുടെ സൗകര്യാർത്ഥം, <strong>13-09-2012</strong> മുതൽ മുഴുവൻ ദിവസത്തെ അന്നദാന പരിപാടി വിജയകരമായി നടന്നുവരുന്നു. എല്ലാ ദിവസവും കുറഞ്ഞത് <strong>3,000 ഭക്തർക്ക്</strong> പ്രസാദമായി ഭക്ഷണം നൽകുന്നു.",
    locationTitle: "സ്ഥലം",
    locationDesc: "ക്ഷേത്രത്തിന്റെ റൂഫ്‌ടോപ്പ് വ്യൂ പോയിന്റിന് സമീപമുള്ള ഡൈനിംഗ് ഹാൾ.",
    referMap: "ക്ഷേത്ര മാപ്പ് കാണുക",
    donationTitle: "സംഭാവന വിവരങ്ങൾ",
    oneDayTitle: "ഒരു ദിവസത്തെ പദ്ധതി",
    oneDayDesc: "ഒരു ദിവസത്തേക്ക് 100 പേർക്ക് അന്നദാനം നൽകുന്നു.",
    permanentTitle: "സ്ഥിരം നിക്ഷേപം",
    permanentDesc: "എല്ലാ വർഷവും ഒരു പ്രത്യേക ദിവസം 100 പേർക്ക് ഭക്ഷണം നൽകുന്നതിനുള്ള നിക്ഷേപം.",
    multipleNote: "ഒന്നിലധികം അന്നദാനങ്ങൾക്ക്, മുകളിലെ അനുപാതത്തിൽ തുക കണക്കാക്കുന്നതാണ്.",
    donateBtn: "ഓൺലൈൻ സംഭാവനയിലേക്ക് പോവുക"
  },
  kn: {
    heroTitle: "ಅನ್ನದಾನ ಮತ್ತು ಪ್ರಸಾದ",
    heroSubtitle: "ಉಚಿತ ಊಟದ ಯೋಜನೆ (ನಿತ್ಯ ಅನ್ನದಾನ)",
    programTitle: "ನಿತ್ಯ ಅನ್ನದಾನ ಕಾರ್ಯಕ್ರಮ",
    programDesc1: "ಭಕ್ತರ ಅನುಕೂಲಕ್ಕಾಗಿ, ಪೂರ್ಣ ದಿನದ ಅನ್ನದಾನ ಕಾರ್ಯಕ್ರಮವು <strong>13-09-2012</strong> ರಿಂದ ಯಶಸ್ವಿಯಾಗಿ ನಡೆಯುತ್ತಿದೆ. ಪ್ರತಿದಿನ ಕನಿಷ್ಠ <strong>3,000 ಭಕ್ತರಿಗೆ</strong> ಪ್ರಸಾದವಾಗಿ ಊಟವನ್ನು ನೀಡಲಾಗುತ್ತದೆ.",
    locationTitle: "ಸ್ಥಳ",
    locationDesc: "ದೇವಾಲಯದ ರೂಫ್‌ಟಾಪ್ ವ್ಯೂ ಪಾಯಿಂಟ್ ಬಳಿಯ ಡೈನಿಂಗ್ ಹಾಲ್.",
    referMap: "ದೇವಾಲಯದ ನಕ್ಷೆಯನ್ನು ನೋಡಿ",
    donationTitle: "ದೇಣಿಗೆ ವಿವರಗಳು",
    oneDayTitle: "ಒಂದು ದಿನದ ಯೋಜನೆ",
    oneDayDesc: "ಒಂದು ದಿನಕ್ಕೆ 100 ಜನರಿಗೆ ಅನ್ನದಾನವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    permanentTitle: "ಶಾಶ್ವತ ದತ್ತಿ",
    permanentDesc: "ಪ್ರತಿ ವರ್ಷ ನಿರ್ದಿಷ್ಟ ದಿನದಂದು 100 ಜನರಿಗೆ ಊಟ ನೀಡಲು ಠೇವಣಿ.",
    multipleNote: "ಬಹು ಅನ್ನದಾನಗಳಿಗೆ, ಮೇಲಿನ ಅನುಪಾತದಲ್ಲಿ ಮೊತ್ತವನ್ನು ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ.",
    donateBtn: "ಆನ್‌ಲೈನ್ ದೇಣಿಗೆಗೆ ಮುಂದುವರಿಯಿರಿ"
  }
};

locales.forEach(loc => {
  const p = path.join(__dirname, 'src/dictionaries', `${loc}.json`);
  let data = {};
  if (fs.existsSync(p)) {
    data = JSON.parse(fs.readFileSync(p, 'utf8'));
  }
  
  data.prasadam = content[loc];
  
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
});

console.log("Prasadam translations added for all locales.");
