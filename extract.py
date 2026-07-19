import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def extract_text(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            
            # The namespace for Word XML
            WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
            PARA = WORD_NAMESPACE + 'p'
            TEXT = WORD_NAMESPACE + 't'
            
            paragraphs = []
            for paragraph in tree.iter(PARA):
                texts = [node.text for node in paragraph.iter(TEXT) if node.text]
                if texts:
                    paragraphs.append(''.join(texts))
            
            return '\n\n'.join(paragraphs)
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    en_text = extract_text('F:/srirangam project/Sri Ranga Nayaki Thayar_English.docx')
    ta_text = extract_text('F:/srirangam project/Sri Ranga Nayaki Thayar_Tamil.docx')
    
    with open('F:/Srirangam-project/en_thayar.txt', 'w', encoding='utf-8') as f:
        f.write(en_text)
    
    with open('F:/Srirangam-project/ta_thayar.txt', 'w', encoding='utf-8') as f:
        f.write(ta_text)
    
    print("Extraction complete")
