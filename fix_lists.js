const fs = require('fs');

function fixLists(filePath) {
    let json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let content = json.thayar.content;
    let lines = content.split('\n');

    let isList = false;
    let listCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (!line) continue;
        
        // English and Tamil list headers
        if (line.includes('adorned with:') || line.includes('six principal qualities:') || 
            line.includes('Architectural Features') || line.includes('Selected References') || 
            line.includes('அவரது திருக்கோலம்:') || line.includes('ஆறு தெய்வீக குணங்களின்') || 
            line.includes('கட்டிடக்கலை சிறப்புகள்') || line.includes('முக்கிய குறிப்புகள்') || 
            line.includes('சுவாமி தேசிகன்') || line.includes('அழைக்கின்றனர்:') || 
            line.includes('affectionately address her as:')) {
            
            isList = true;
            listCount = 0; // reset
            if (line.includes('Architectural Features') || line.includes('கட்டிடக்கலை சிறப்புகள்') || line.includes('Selected References')) {
                // these are headings, so we shouldn't prefix them with '-'
                isList = true;
            }
            continue;
        }

        // Stop list mode if we hit a long paragraph
        if (isList && line.length > 80 && !line.includes('V. N. Hari') && !line.includes('Parthasarathy') && !line.includes('Seshadri')) {
            isList = false;
        }

        // If in list mode, prefix with '-'
        if (isList) {
            // Check if it's already a heading or too long
            if (!line.startsWith('-') && line.length < 100) {
                // Ignore empty lines
                if (line.trim().length > 0) {
                    lines[i] = '- ' + line;
                    listCount++;
                }
            }
            if (listCount >= 8) {
                isList = false;
            }
        }
    }

    json.thayar.content = lines.join('\n');
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
}

fixLists('src/dictionaries/en.json');
fixLists('src/dictionaries/ta.json');
console.log('Fixed additional lists in JSON.');
