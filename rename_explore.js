const fs = require('fs');

function replaceInFile(filePath, search, replacement) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(search, replacement);
        fs.writeFileSync(filePath, content);
    }
}

const files = [
    'src/app/[lang]/deity-seva/layout.tsx',
    'src/dictionaries/en.json',
    'src/dictionaries/hi.json',
    'src/dictionaries/kn.json',
    'src/dictionaries/ml.json',
    'src/dictionaries/ta.json',
    'src/dictionaries/te.json'
];

files.forEach(file => {
    replaceInFile(file, /"Explore Temple"/g, '"Deities & Seva"');
});

console.log('Replacements done.');
