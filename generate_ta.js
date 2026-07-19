const fs = require('fs');

try {
  const tsCode = fs.readFileSync('src/data/historyContent.ts', 'utf8');
  
  const match = tsCode.match(/export const historyChapters: Chapter\[\] = (\[[\s\S]*\]);/);
  if (!match) throw new Error("Could not find historyChapters array");
  
  const arrayString = match[1];
  // Safe eval since we trust the source file
  const chapters = eval(arrayString);
  
  const md = fs.readFileSync('F:/srirangam project/srirangam-temple-history_Tamil.md', 'utf8');
  const lines = md.split('\n');
  
  let currentChapterIndex = -1;
  let currentParagraphs = [];
  
  for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      
      if (trimmed.startsWith('# ') || trimmed.startsWith('## ')) {
          if (currentChapterIndex >= 0) {
              chapters[currentChapterIndex].paragraphs = currentParagraphs;
          }
          currentChapterIndex++;
          currentParagraphs = [];
          chapters[currentChapterIndex].title = trimmed.replace(/^#+\s*/, '');
      } else {
          currentParagraphs.push(trimmed);
      }
  }
  if (currentChapterIndex >= 0) {
      chapters[currentChapterIndex].paragraphs = currentParagraphs;
  }
  
  const out = `import { Chapter } from './historyContent';\n\nexport const historyChaptersTa: Chapter[] = ${JSON.stringify(chapters, null, 2)};\n`;
  fs.writeFileSync('src/data/historyContentTa.ts', out);
  console.log('Successfully generated historyContentTa.ts');
} catch(e) {
  console.error(e);
}
