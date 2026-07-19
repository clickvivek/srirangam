const fs = require('fs');

const enJson = JSON.parse(fs.readFileSync('src/dictionaries/en.json', 'utf8'));
const taJson = JSON.parse(fs.readFileSync('src/dictionaries/ta.json', 'utf8'));

const enText = fs.readFileSync('en_thayar_clean.txt', 'utf8');
const taText = fs.readFileSync('ta_thayar_clean.txt', 'utf8');

enJson.thayar = {
    title: "Sri Ranga Nayaki",
    subheading: "Thayar / Amma Sannidhi",
    backLink: "Back to Deity & Pooja",
    content: enText
};

taJson.thayar = {
    title: "ஸ்ரீ ரங்கநாயகி",
    subheading: "தாயார் / அம்மா சந்நிதி",
    backLink: "பின் செல்ல",
    content: taText
};

fs.writeFileSync('src/dictionaries/en.json', JSON.stringify(enJson, null, 2));
fs.writeFileSync('src/dictionaries/ta.json', JSON.stringify(taJson, null, 2));

console.log('Dictionaries updated successfully.');
