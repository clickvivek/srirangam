"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract current language from pathname (e.g. /en/history -> en)
  const currentLang = pathname.split('/')[1] || 'en';

  const changeLanguage = (lang: string) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    router.push(segments.join('/') || '/');
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ta', label: 'த' },
    { code: 'hi', label: 'हि' },
    { code: 'te', label: 'తె' },
    { code: 'kn', label: 'ಕ' },
    { code: 'ml', label: 'മ' }
  ];

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div>
            Om Namo Narayanaya • ஓம் நமோ நாராயணாய • Jai Sri Ranganatha
          </div>
          <div>
            Srirangam, Tiruchirappalli District, Tamil Nadu
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container header-container">
          <Link href={`/${currentLang}`} className="logo-section">
            <img src="/srirangam/logo_new.png" alt="Srirangam Temple Logo" style={{ height: '60px', width: 'auto' }} />
            <div className="logo-text">
              <h2>Srirangam Temple Portal</h2>
              <p>ஸ்ரீரங்கம் ரங்கநாதர் கோவில் • Divya Desam</p>
            </div>
          </Link>
          
          <div className="language-selector">
            <span>Language:</span>
            {languages.map((lang) => (
              <button 
                key={lang.code}
                className={`lang-btn ${currentLang === lang.code ? 'active' : ''}`}
                onClick={() => changeLanguage(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

