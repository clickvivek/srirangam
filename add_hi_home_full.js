const fs = require('fs');
const path = require('path');

const hiPath = path.join(__dirname, 'src/dictionaries/hi.json');
const hi = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

hi.navigation = {
  "darshan": "मंदिर का समय",
  "deity": "देवता और सेवा",
  "history": "मंदिर का इतिहास",
  "map": "मंदिर का नक्शा",
  "surroundings": "आसपास के मंदिर",
  "seva": "सेवा बुकिंग",
  "prasadam": "अन्नदान / प्रसाद",
  "dharmaSalas": "होटल / धर्मशाला",
  "transport": "यातायात जानकारी",
  "gallery": "फोटो गैलरी"
};

hi.home = Object.assign({}, hi.home, {
  "title": "श्री रंगनाथस्वामी मंदिर",
  "subtitle": "श्रीरंगम रंगनाथर — श्रीरंगम, तमिलनाडु",
  "desc": "भगवान रंगनाथ (विष्णु) को समर्पित दुनिया का सबसे बड़ा कार्यरत हिंदू मंदिर। श्रीरंगम के पवित्र द्वीप पर स्थित एक प्रमुख वैष्णव दिव्य देशम।",
  "openToday": "आज खुला है",
  "slotsToday": "आज 4 स्लॉट",
  "todaysQueue": "आज की कतार",
  "waitMin": "~45 मिनट की प्रतीक्षा",
  "darshanSchedule": "दर्शन अनुसूची",
  "templeTimings": "मंदिर का समय",
  "timingsSub": "मंदिर का समय — प्रतिदिन 4 दर्शन स्लॉट",
  "explore": "देवता और सेवा",
  "quickAccess": "त्वरित पहुँच"
});

hi.footer = {
  "desc": "श्री रंगनाथस्वामी मंदिर, श्रीरंगम के लिए एक सूचनात्मक पोर्टल — दुनिया का सबसे बड़ा कार्यरत हिंदू मंदिर और एक प्रमुख वैष्णव दिव्य देशम।",
  "quickLinks": "त्वरित लिंक",
  "contact": "संपर्क",
  "contactForm": "संपर्क फ़ॉर्म",
  "disclaimer": "अस्वीकरण: यह श्री रंगनाथ मंदिर की आधिकारिक सरकारी वेबसाइट नहीं है। इस वेबसाइट का रखरखाव श्री रंगनाथर भक्तों (स्वयंसेवकों) द्वारा किया जाता है।"
};

fs.writeFileSync(hiPath, JSON.stringify(hi, null, 2));
console.log("Hindi homepage translations updated.");
