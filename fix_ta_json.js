const fs = require('fs');

const taDict = JSON.parse(fs.readFileSync('F:\\Srirangam-project\\src\\dictionaries\\ta.json', 'utf8'));

let taText = taDict.ranganathaPerumal.content;

const linesToBullet = [
    "திருவண்ணாழி திருச்சுற்று",
    "இராஜமகேந்திரன் திருச்சுற்று",
    "குலசேகரன் திருச்சுற்று",
    "ஆலிநாடன் திருச்சுற்று",
    "அகளங்கன் திருச்சுற்று",
    "திருவிக்கிரமன் திருச்சுற்று (உத்தர வீதி)",
    "கலிகண்டன் திருச்சுற்று (சித்திரை வீதி)",
    "தெற்கு நோக்கி அருள்பாலிக்கும் அபூர்வ திருக்கோலம்.",
    "திருமார்பில் பரமபதநாதனைப் போன்று ஒளிரும் கௌஸ்துப மணி.",
    "நெற்றியில் என்றும் அழியாத கஸ்தூரித் திலகம்.",
    "உலகை நீதி வழியில் காக்கும் அடையாளமாக செங்கோல்.",
    "ஒப்புயர்வற்ற திருமகிமையால் அழகிய மணவாளன் என்ற திருநாமம்.",
    "தலம், மூர்த்தம், தீர்த்தம்", // wait the actual lines might be different, let's just do a regex replace or just replace exact strings
    "வைகுண்ட ஏகாதசி",
    "பங்குனி உத்திரம்",
    "சித்திரை பிரம்மோற்சவம்",
    "வசந்த உற்சவம்",
    "ஜேஷ்டாபிஷேகம்",
    "பவித்ரோத்ஸவம்",
    "நவராத்திரி",
    "திருவாய்மொழி மற்றும் அத்யயன உற்சவம்",
    "கருட வாகனம்",
    "சேஷ வாகனம்",
    "யானை வாகனம்",
    "குதிரை வாகனம்",
    "அனுமன் வாகனம்",
    "பொன் பல்லக்கு",
    "பொன் தேர்",
    "சூரிய பிரபை",
    "சந்திர பிரபை",
    "மன அமைதி கிடைக்கும்.",
    "தடைகள் நீங்கும்.",
    "குடும்ப நலன் பெருகும்.",
    "இறைவனின் அருள் நாள் முழுவதும் காக்கும்.",
];

for(const line of linesToBullet) {
    // Replace exact lines with `- ` prepended, taking into account possible trailing spaces
    const regex = new RegExp(`^(${line})\\s*$`, 'gm');
    taText = taText.replace(regex, `- $1`);
}

taDict.ranganathaPerumal.content = taText;
fs.writeFileSync('F:\\Srirangam-project\\src\\dictionaries\\ta.json', JSON.stringify(taDict, null, 2));

console.log("Fixed ta.json lists");
