const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, search, replacement) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(search, replacement);
        fs.writeFileSync(filePath, content);
    }
}

// 1. Rename directory
const oldDir = 'src/app/[lang]/deity-pooja';
const newDir = 'src/app/[lang]/deity-seva';
if (fs.existsSync(oldDir)) {
    fs.renameSync(oldDir, newDir);
    console.log(`Renamed ${oldDir} to ${newDir}`);
}

// 2. Change text in deity-seva/page.tsx
replaceInFile(
    newDir + '/page.tsx', 
    />Deities & Poojas<\/h1>/g, 
    '>Deities and Seva</h1>'
);
replaceInFile(
    newDir + '/page.tsx', 
    /Back to Deity & Pooja/g, 
    'Back to Deity and Seva'
);

// 3. Update links in other files
const filesToUpdate = [
    'src/app/[lang]/page.tsx',
    'src/app/[lang]/chakrathalwar/page.tsx',
    'src/app/[lang]/dhanvantri/page.tsx',
    'src/app/[lang]/garudalwar/page.tsx',
    'src/app/[lang]/ramanujar/page.tsx',
    'src/app/[lang]/ranganatha-perumal/page.tsx',
    'src/app/[lang]/thayar/page.tsx',
    'src/app/[lang]/thulukka-nachiyar/page.tsx',
    'src/app/[lang]/viswaroopa-seva/page.tsx',
    'src/app/sitemap.ts'
];

filesToUpdate.forEach(file => {
    replaceInFile(file, /\/deity-pooja/g, '/deity-seva');
    replaceInFile(file, /Back to Deity & Pooja/g, 'Back to Deities and Seva');
});

// Update en.json and ta.json if they contain Deity & Pooja
replaceInFile('src/dictionaries/en.json', /Deity & Pooja/g, 'Deities and Seva');
replaceInFile('src/dictionaries/ta.json', /Deity & Pooja/g, 'Deities and Seva');
replaceInFile('src/dictionaries/en.json', /Deities & Poojas/g, 'Deities and Seva');
replaceInFile('src/dictionaries/ta.json', /Deities & Poojas/g, 'Deities and Seva');

// Also update the 'Quick Links' text in en.json
replaceInFile('src/dictionaries/en.json', /"deity_pooja"/g, '"deity_seva"');
replaceInFile('src/dictionaries/ta.json', /"deity_pooja"/g, '"deity_seva"');

console.log('Replacements done.');
