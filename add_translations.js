const fs = require('fs');

const en = JSON.parse(fs.readFileSync('./src/dictionaries/en.json', 'utf8'));
const ta = JSON.parse(fs.readFileSync('./src/dictionaries/ta.json', 'utf8'));

const enHome = {
  "title": "Sri Ranganathaswamy Temple",
  "subtitle": "ஸ்ரீரங்கம் ரங்கநாதர் — Srirangam, Tamil Nadu",
  "desc": "The largest functioning Hindu temple in the world, dedicated to Lord Ranganatha (Vishnu). A premier Vaishnava Divya Desam on the sacred island of Srirangam.",
  "openToday": "OPEN TODAY",
  "slotsToday": "4 Slots Today",
  "todaysQueue": "TODAY'S QUEUE",
  "waitMin": "~45 min wait",
  "darshanSchedule": "DARSHAN SCHEDULE",
  "templeTimings": "Temple Timings",
  "timingsSub": "கோயில் நேரம் — 4 Darshan Slots Daily",
  "explore": "Deities & Seva",
  "quickAccess": "QUICK ACCESS"
};

const enFooter = {
  "desc": "An informational portal for Sri Ranganathaswamy Temple, Srirangam — the world's largest functioning Hindu temple and a premier Vaishnava Divya Desam.",
  "quickLinks": "QUICK LINKS",
  "contact": "CONTACT",
  "contactForm": "Contact Form",
  "disclaimer": "Disclaimer: This is not the official government website of Sriranganatha temple. This website is maintained by Sri Ranganathar Devotees (Volunteers)."
};

const taHome = {
  "title": "ஸ்ரீ ரங்கநாதசுவாமி கோவில்",
  "subtitle": "ஸ்ரீரங்கம் ரங்கநாதர் — ஸ்ரீரங்கம், தமிழ்நாடு",
  "desc": "உலகின் மிகப்பெரிய செயல்படும் இந்து கோவில், ஸ்ரீ ரங்கநாதருக்கு (விஷ்ணு) அர்ப்பணிக்கப்பட்டுள்ளது. ஸ்ரீரங்கம் புனித தீவில் அமைந்துள்ள ஒரு முக்கிய வைணவ திவ்ய தேசம்.",
  "openToday": "இன்று திறந்துள்ளது",
  "slotsToday": "இன்று 4 சேவைகள்",
  "todaysQueue": "இன்றைய வரிசை",
  "waitMin": "~45 நிமிடம் காத்திருப்பு",
  "darshanSchedule": "தரிசன அட்டவணை",
  "templeTimings": "கோவில் நேரம்",
  "timingsSub": "கோயில் நேரம் — தினமும் 4 தரிசனங்கள்",
  "explore": "தெய்வங்கள் & சேவைகள்",
  "quickAccess": "விரைவு இணைப்புகள்"
};

const taFooter = {
  "desc": "ஸ்ரீ ரங்கநாதசுவாமி கோவில், ஸ்ரீரங்கம் — உலகின் மிகப்பெரிய செயல்படும் இந்து கோவில் மற்றும் ஒரு முக்கிய வைணவ திவ்ய தேசத்திற்கான ஒரு தகவல் இணையதளம்.",
  "quickLinks": "விரைவு இணைப்புகள்",
  "contact": "தொடர்பு கொள்ள",
  "contactForm": "தொடர்பு படிவம்",
  "disclaimer": "பொறுப்பு துறப்பு: இது ஸ்ரீ ரங்கநாதர் கோவிலின் அதிகாரப்பூர்வ அரசு இணையதளம் அல்ல. இந்த இணையதளம் ஸ்ரீ ரங்கநாதர் பக்தர்களால் (தன்னார்வலர்கள்) பராமரிக்கப்படுகிறது."
};

en.home = enHome;
en.footer = enFooter;

ta.home = taHome;
ta.footer = taFooter;

fs.writeFileSync('./src/dictionaries/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('./src/dictionaries/ta.json', JSON.stringify(ta, null, 2));
console.log('Done');
