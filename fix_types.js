const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('f:/Srirangam-project/src/app');
const searchStr = "Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> | { lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }";
const replaceStr = "Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }>";

let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes(searchStr)) {
        content = content.split(searchStr).join(replaceStr);
        fs.writeFileSync(file, content, 'utf8');
        console.log("Fixed " + file);
        count++;
    }
});
console.log(`Fixed ${count} files.`);
