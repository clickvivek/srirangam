const fs = require('fs');

function extract(filePath) {
    const xml = fs.readFileSync(filePath, 'utf8');
    const matches = xml.match(/<w:t[^>]*>(.*?)<\/w:t>/g);
    if (!matches) return '';
    
    let text = matches.map(m => m.replace(/<[^>]+>/g, '')).join('');
    
    // Sometimes paragraphs are split by <w:p>
    // Let's just do a simpler tag stripping but preserve paragraphs.
    const paras = xml.split('<w:p ');
    const output = paras.map(p => {
        const tMatches = p.match(/<w:t[^>]*>.*?<\/w:t>/g);
        if (!tMatches) return '';
        return tMatches.map(m => m.replace(/<[^>]+>/g, '')).join('');
    }).filter(p => p.trim() !== '');
    
    return output.join('\n\n');
}

fs.writeFileSync('F:/Srirangam-project/en_thayar_clean.txt', extract('F:/srirangam project/temp_en/word/document.xml'));
fs.writeFileSync('F:/Srirangam-project/ta_thayar_clean.txt', extract('F:/srirangam project/temp_ta/word/document.xml'));
