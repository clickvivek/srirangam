const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'src/dictionaries/en.json');
const taPath = path.join(__dirname, 'src/dictionaries/ta.json');
const hiPath = path.join(__dirname, 'src/dictionaries/hi.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ta = JSON.parse(fs.readFileSync(taPath, 'utf8'));
const hi = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

// Common 'home' keys that the timings page uses for the main temple
hi.home = hi.home || {};
hi.home.viswaroopaDarshan = "विश्वरूप दर्शन";
hi.home.generalMorning = "सामान्य दर्शन (सुबह)";
hi.home.generalAfternoon = "सामान्य दर्शन (दोपहर)";
hi.home.generalEvening = "सामान्य दर्शन (शाम)";
hi.home.importantNote = "महत्वपूर्ण नोट";
hi.home.fullCalendar = "पूर्ण कैलेंडर";

const enTimings = {
  home: "Home",
  subtitle: "Darshan Schedule for all Deities",
  mainTemple: "Sri Ranganathaswamy Temple",
  mainTempleSub: "Sri Ranganathar",
  nachiyar: "Sri Ranga Nayaki (Nachiyar)",
  nachiyarSub: "Sri Ranganayaki Thayar",
  ramanujar: "Sri Ramanujar",
  ramanujarSub: "Sri Ramanujar",
  morningSeva1: "Morning Seva (Slot 1)",
  morningSeva2: "Morning Seva (Slot 2)",
  morningSeva: "Morning Seva",
  afternoonSeva: "Afternoon Seva",
  eveningSeva: "Evening Seva",
  notePrefix: "Note: ",
  chithiraiNote: "During Chithirai and Aippasi months, Vadai Ilai Pachai Karpuram and Kalavai Sathumurai takes place."
};

const taTimings = {
  home: "முகப்பு",
  subtitle: "கோயில் மற்றும் சன்னதி நேரங்கள்",
  mainTemple: "ஸ்ரீ ரங்கநாதசுவாமி கோயில்",
  mainTempleSub: "ஸ்ரீ ரங்கநாதர்",
  nachiyar: "ஸ்ரீ ரங்கநாயகி (நாச்சியார்)",
  nachiyarSub: "ஸ்ரீ ரங்கநாயகி தாயார்",
  ramanujar: "ஸ்ரீ ராமானுஜர்",
  ramanujarSub: "ஸ்ரீ ராமானுஜர்",
  morningSeva1: "காலை சேவை (பகுதி 1)",
  morningSeva2: "காலை சேவை (பகுதி 2)",
  morningSeva: "காலை சேவை",
  afternoonSeva: "பகல் சேவை",
  eveningSeva: "மாலை சேவை",
  notePrefix: "குறிப்பு: ",
  chithiraiNote: "சித்திரை மற்றும் ஐப்பசி மாதங்களில் வடை இலை பச்சைக் கற்பூரம் மற்றும் கலவைச் சாத்துமுறை நடைபெறும்."
};

const hiTimings = {
  home: "होम",
  subtitle: "सभी देवताओं के लिए दर्शन का समय",
  mainTemple: "श्री रंगनाथस्वामी मंदिर",
  mainTempleSub: "श्री रंगनाथर",
  nachiyar: "श्री रंगनायकी (नाचियार)",
  nachiyarSub: "श्री रंगनायकी तायर",
  ramanujar: "श्री रामानुजर",
  ramanujarSub: "श्री रामानुजर",
  morningSeva1: "सुबह की सेवा (स्लॉट 1)",
  morningSeva2: "सुबह की सेवा (स्लॉट 2)",
  morningSeva: "सुबह की सेवा",
  afternoonSeva: "दोपहर की सेवा",
  eveningSeva: "शाम की सेवा",
  notePrefix: "नोट: ",
  chithiraiNote: "चित्तिरै और ऐप्पसी महीनों के दौरान, वडै इलै पच्चै कर्पूरम और कलवै सात्तुमुराई होती है।"
};

en.timingsPage = enTimings;
ta.timingsPage = taTimings;
hi.timingsPage = hiTimings;

// Navigation translation for Hindi
hi.navigation = hi.navigation || {};
hi.navigation.darshan = "मंदिर का समय";

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(taPath, JSON.stringify(ta, null, 2));
fs.writeFileSync(hiPath, JSON.stringify(hi, null, 2));

console.log("Timings translations updated for EN, TA, and HI.");
