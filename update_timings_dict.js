const fs = require('fs');

const en = JSON.parse(fs.readFileSync('./src/dictionaries/en.json', 'utf8'));
const ta = JSON.parse(fs.readFileSync('./src/dictionaries/ta.json', 'utf8'));

Object.assign(en.home, {
  "viswaroopaDarshan": "Viswaroopa Darshan",
  "generalMorning": "General Darshan (Morning)",
  "generalAfternoon": "General Darshan (Afternoon)",
  "generalEvening": "General Darshan (Evening)",
  "importantNote": "Important note",
  "fullCalendar": "Full calendar"
});

Object.assign(ta.home, {
  "viswaroopaDarshan": "விஸ்வரூப தரிசனம்",
  "generalMorning": "பொது தரிசனம் (காலை)",
  "generalAfternoon": "பொது தரிசனம் (மதியம்)",
  "generalEvening": "பொது தரிசனம் (மாலை)",
  "importantNote": "முக்கிய குறிப்பு",
  "fullCalendar": "முழு நாள்காட்டி"
});

fs.writeFileSync('./src/dictionaries/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('./src/dictionaries/ta.json', JSON.stringify(ta, null, 2));
console.log('Timings added to dicts');
