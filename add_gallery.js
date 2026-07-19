const fs = require('fs');
const path = require('path');

const locales = ['en', 'ta', 'te', 'hi', 'ml', 'kn'];

const content = {
  en: {
    galleryTitle: "Temple Gallery",
    gallerySubtitle: "A visual journey through Sri Ranganathaswamy Temple",
    noPhotos: "No photos have been uploaded yet. Please visit the Admin page to upload photos.",
    adminTitle: "Admin Photo Upload",
    adminSubtitle: "Upload photos to the public gallery",
    selectImage: "Select Image:",
    uploadBtn: "Upload Photo",
    uploadSuccess: "Photo uploaded successfully!",
    uploadFailed: "Upload failed.",
    uploading: "Uploading..."
  },
  ta: {
    galleryTitle: "கோவில் புகைப்படங்கள்",
    gallerySubtitle: "ஸ்ரீ ரங்கநாதசுவாமி கோவிலின் ஒரு காட்சிப் பயணம்",
    noPhotos: "புகைப்படங்கள் எதுவும் இன்னும் பதிவேற்றப்படவில்லை. புகைப்படங்களை பதிவேற்ற நிர்வாகி பக்கத்தைப் பார்வையிடவும்.",
    adminTitle: "புகைப்படப் பதிவேற்றம் (நிர்வாகி)",
    adminSubtitle: "பொதுப் பார்வைக்கான புகைப்படங்களைப் பதிவேற்றவும்",
    selectImage: "புகைப்படத்தைத் தேர்ந்தெடுக்கவும்:",
    uploadBtn: "பதிவேற்று",
    uploadSuccess: "புகைப்படம் வெற்றிகரமாக பதிவேற்றப்பட்டது!",
    uploadFailed: "பதிவேற்றம் தோல்வியடைந்தது.",
    uploading: "பதிவேற்றப்படுகிறது..."
  },
  te: {
    galleryTitle: "ఆలయ గ్యాలరీ",
    gallerySubtitle: "శ్రీ రంగనాథస్వామి ఆలయం యొక్క దృశ్య ప్రయాణం",
    noPhotos: "ఇంకా ఫోటోలు అప్‌లోడ్ చేయబడలేదు. దయచేసి ఫోటోలను అప్‌లోడ్ చేయడానికి అడ్మిన్ పేజీని సందర్శించండి.",
    adminTitle: "అడ్మిన్ ఫోటో అప్‌లోడ్",
    adminSubtitle: "పబ్లిక్ గ్యాలరీకి ఫోటోలను అప్‌లోడ్ చేయండి",
    selectImage: "చిత్రాన్ని ఎంచుకోండి:",
    uploadBtn: "ఫోటోను అప్‌లోడ్ చేయండి",
    uploadSuccess: "ఫోటో విజయవంతంగా అప్‌లోడ్ చేయబడింది!",
    uploadFailed: "అప్‌లోడ్ విఫలమైంది.",
    uploading: "అప్‌లోడ్ అవుతోంది..."
  },
  hi: {
    galleryTitle: "मंदिर गैलरी",
    gallerySubtitle: "श्री रंगनाथस्वामी मंदिर की एक दृश्य यात्रा",
    noPhotos: "अभी तक कोई फोटो अपलोड नहीं किया गया है। कृपया फोटो अपलोड करने के लिए एडमिन पेज पर जाएं।",
    adminTitle: "एडमिन फोटो अपलोड",
    adminSubtitle: "सार्वजनिक गैलरी में तस्वीरें अपलोड करें",
    selectImage: "छवि का चयन करें:",
    uploadBtn: "फोटो अपलोड करें",
    uploadSuccess: "तस्वीर सफलतापूर्वक अपलोड की गई!",
    uploadFailed: "अपलोड विफल रहा।",
    uploading: "अपलोड हो रहा है..."
  },
  ml: {
    galleryTitle: "ക്ഷേത്ര ഗാലറി",
    gallerySubtitle: "ശ്രീ രംഗനാഥസ്വാമി ക്ഷേത്രത്തിലൂടെയുള്ള ഒരു ദൃശ്യയാത്ര",
    noPhotos: "ഫോട്ടോകളൊന്നും ഇതുവരെ അപ്‌ലോഡ് ചെയ്തിട്ടില്ല. ഫോട്ടോകൾ അപ്‌ലോഡ് ചെയ്യാൻ അഡ്മിൻ പേജ് സന്ദർശിക്കുക.",
    adminTitle: "അഡ്മിൻ ഫോട്ടോ അപ്‌ലോഡ്",
    adminSubtitle: "പബ്ലിക് ഗാലറിയിലേക്ക് ഫോട്ടോകൾ അപ്‌ലോഡ് ചെയ്യുക",
    selectImage: "ചിത്രം തിരഞ്ഞെടുക്കുക:",
    uploadBtn: "ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക",
    uploadSuccess: "ഫോട്ടോ വിജയകരമായി അപ്‌ലോഡ് ചെയ്തു!",
    uploadFailed: "അപ്‌ലോഡ് പരാജയപ്പെട്ടു.",
    uploading: "അപ്‌ലോഡ് ചെയ്യുന്നു..."
  },
  kn: {
    galleryTitle: "ದೇವಾಲಯ ಗ್ಯಾಲರಿ",
    gallerySubtitle: "ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿ ದೇವಸ್ಥಾನದ ಮೂಲಕ ದೃಶ್ಯ ಪ್ರಯಾಣ",
    noPhotos: "ಯಾವುದೇ ಫೋಟೋಗಳನ್ನು ಇನ್ನೂ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿಲ್ಲ. ಫೋಟೋಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ದಯವಿಟ್ಟು ಅಡ್ಮಿನ್ ಪುಟಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.",
    adminTitle: "ಅಡ್ಮಿನ್ ಫೋಟೋ ಅಪ್‌ಲೋಡ್",
    adminSubtitle: "ಸಾರ್ವಜನಿಕ ಗ್ಯಾಲರಿಗೆ ಫೋಟೋಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    selectImage: "ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
    uploadBtn: "ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    uploadSuccess: "ಫೋಟೋವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ!",
    uploadFailed: "ಅಪ್‌ಲೋಡ್ ವಿಫಲವಾಗಿದೆ.",
    uploading: "ಅಪ್‌ಲೋಡ್ ಆಗುತ್ತಿದೆ..."
  }
};

locales.forEach(loc => {
  const p = path.join(__dirname, 'src/dictionaries', `${loc}.json`);
  let data = {};
  if (fs.existsSync(p)) {
    data = JSON.parse(fs.readFileSync(p, 'utf8'));
  }
  
  data.gallery = content[loc];
  
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
});

console.log("Gallery translations added for all locales.");
