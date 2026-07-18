const fs = require('fs');

const mdContent = fs.readFileSync('F:\\srirangam project\\srirangam-temple-history_12.md', 'utf-8');
const lines = mdContent.split('\n');

const chapters = [];
let currentChapter = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (!line) continue;

  if (line.startsWith('# ')) {
    currentChapter = { title: line.replace('# ', ''), paragraphs: [] };
    chapters.push(currentChapter);
  } else if (line.startsWith('## ')) {
    currentChapter = { title: line.replace('## ', ''), paragraphs: [] };
    chapters.push(currentChapter);
  } else {
    if (currentChapter) {
      currentChapter.paragraphs.push(line);
    }
  }
}

const tsContent = `export interface Chapter {
  title: string;
  paragraphs: string[];
}

export const historyChapters: Chapter[] = ${JSON.stringify(chapters, null, 2)};
`;

fs.writeFileSync('f:\\Srirangam-project\\src\\data\\historyContent.ts', tsContent, 'utf-8');
console.log('Successfully generated historyContent.ts');
