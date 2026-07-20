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
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ta', label: 'த', name: 'Tamil' },
    { code: 'hi', label: 'हि', name: 'Hindi' },
    { code: 'te', label: 'తె', name: 'Telugu' },
    { code: 'kn', label: 'ಕ', name: 'Kannada' },
    { code: 'ml', label: 'മ', name: 'Malayalam' }
  ];

  const headerSubtitle = {
    en: "Srirangam Ranganathar Temple • Divya Desam",
    ta: "ஸ்ரீரங்கம் ரங்கநாதர் கோவில் • திவ்ய தேசம்",
    hi: "श्रीरंगम रंगनाथर मंदिर • दिव्य देशम",
    te: "శ్రీరంగం రంగనాథస్వామి దేవస్థానం • దివ్య దేశం",
    kn: "ಶ್ರೀರಂಗಂ ರಂಗನಾಥಸ್ವಾಮಿ ದೇವಸ್ಥಾನ • ದಿವ್ಯ ದೇಶಂ",
    ml: "ശ്രീരംഗം രംഗനാഥസ്വാമി ക്ഷേത്രം • ദിവ്യ ദേശം"
  };

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
              <h2>Srirangam.net</h2>
              <p>{headerSubtitle[currentLang as keyof typeof headerSubtitle] || headerSubtitle['en']}</p>
            </div>
          </Link>
          
          <div className="language-selector">
            <span className="lang-label desktop-langs">Language:</span>
            <div className="desktop-langs">
              {languages.map((lang) => (
                <button 
                  key={lang.code}
                  className={`lang-btn ${currentLang === lang.code ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                  title={lang.name}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <select 
              className="mobile-langs"
              value={currentLang}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))}
            </select>
          </div>
        </div>
      </header>
    </>
  );
}

