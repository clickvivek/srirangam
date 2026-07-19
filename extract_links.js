const fs = require('fs');

const relsXml = fs.readFileSync('f:/Srirangam-project/temp_docx/word/_rels/document.xml.rels', 'utf8');
const docXml = fs.readFileSync('f:/Srirangam-project/temp_docx/word/document.xml', 'utf8');

const rels = {};
const relRegex = /<Relationship Id="([^"]+)" Type="[^"]*hyperlink"[^>]*Target="([^"]+)"/g;
let match;
while ((match = relRegex.exec(relsXml)) !== null) {
    rels[match[1]] = match[2];
}

const paragraphs = docXml.split(/<w:p [^>]*>|<w:p>/);
paragraphs.shift(); 

paragraphs.forEach(p => {
    let pText = '';
    const nodeRegex = /<w:hyperlink r:id="([^"]+)"[^>]*>(.*?)<\/w:hyperlink>|<w:t[^>]*>(.*?)<\/w:t>/g;
    
    let nodeMatch;
    while ((nodeMatch = nodeRegex.exec(p)) !== null) {
        if (nodeMatch[1]) {
            const rId = nodeMatch[1];
            const inner = nodeMatch[2];
            const url = rels[rId] || '#';
            
            const textRegex = /<w:t[^>]*>(.*?)<\/w:t>/g;
            let linkText = '';
            let tMatch;
            while ((tMatch = textRegex.exec(inner)) !== null) {
                linkText += tMatch[1];
            }
            pText += ` [${linkText}](${url}) `;
        } else if (nodeMatch[3]) {
            pText += nodeMatch[3];
        }
    }
    
    if (pText.trim()) {
        console.log(pText);
    }
});
