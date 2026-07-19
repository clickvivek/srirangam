const fs = require('fs');
const path = require('path');

const locales = ['en', 'ta', 'te', 'hi', 'ml', 'kn'];

const content = {
  en: {
    backToHome: "Back to Home",
    title: "Deities and Seva",
    subtitle: "Discover the divine shrines and deities of Srirangam",
    viewDetails: "View Details",
    deities: [
      {
        name: "Sri Ranganatha Perumal",
        title: "The Presiding Deity",
        description: "The presiding deity of the temple, Lord Ranganatha, is seen in a reclining posture (Anantha Sayanam) on the serpent Adisesha. He is the ultimate symbol of peace and grace, facing south towards Lanka to bless His great devotee, King Vibhishana."
      },
      {
        name: "Sri Ranga Nayaki",
        title: "Thayar / Amma Sannidhi",
        description: "Sri Ranga Nayaki, affectionately known as Thayar (Mother), is the divine consort of Lord Ranganatha. Her shrine is located in the fourth enclosure. According to tradition, Lord Ranganatha never leaves the temple without Her permission."
      },
      {
        name: "Sri Chakrathalvar",
        title: "Lord Sudarshana",
        description: "The Sri Chakrathalvar shrine is one of the most prominent sub-shrines. It houses the personification of Lord Vishnu's divine discus (Sudarshana Chakra). On the reverse of the idol is Lord Narasimha, offering dual blessings to devotees."
      },
      {
        name: "Sri Ramanujar",
        title: "The Great Preceptor",
        description: "The shrine of Sri Ramanujacharya holds his preserved mortal remains (Thaan Ana Thirumeni). He was the most important philosopher of the Sri Vaishnava tradition, and he administered the Srirangam temple for many decades during his lifetime."
      },
      {
        name: "Sri Thulakka Nachiyar",
        title: "The Celestial Princess",
        description: "Sri Thulakka Nachiyar (also known as Bibi Nachiyar or Surathani) is a unique and revered shrine dedicated to a Muslim princess from Delhi who fell deeply in love with the processional deity, Lord Namperumal. Her devotion represents the universal nature of the Lord's grace."
      },
      {
        name: "Sri Garudalwar Sannidhi",
        title: "The Divine Mount",
        description: "Located opposite the main sanctum, this impressive shrine features a towering 14-foot image of Garuda, Lord Vishnu's eagle mount. Uniquely, he is depicted in a seated posture, eternally waiting for the Lord's command."
      },
      {
        name: "Sri Dhavanthri Sannidhi",
        title: "The God of Medicine",
        description: "This shrine is dedicated to Lord Dhanvantari, the divine physician and avatar of Lord Vishnu who emerged with the nectar of immortality (Amrita). Devotees offer prayers here seeking good health, healing, and well-being."
      },
      {
        name: "Viswaroopam Seva",
        title: "Sacred Dawn Worship",
        description: "Vishwaroopam is the first and most sacred seva performed every day at dawn. It is the ritual of 'Palli Ezhuchi' — the ceremonial awakening of Namperumal from his divine slumber."
      }
    ]
  },
  ta: {
    backToHome: "முகப்புக்குத் திரும்பு",
    title: "தெய்வங்கள் மற்றும் சேவை",
    subtitle: "ஸ்ரீரங்கத்தின் தெய்வீக சன்னதிகளையும் தெய்வங்களையும் கண்டறியுங்கள்",
    viewDetails: "விவரங்களைக் காண்க",
    deities: [
      {
        name: "ஸ்ரீ ரங்கநாதப் பெருமாள்",
        title: "மூலவர்",
        description: "கோயிலின் மூலவரான ஸ்ரீ ரங்கநாதர், ஆதிசேஷன் மீது சயனக் கோலத்தில் (அனந்த சயனம்) காட்சியளிக்கிறார். மாபெரும் பக்தரான விபீஷணனுக்கு அருள்பாலிப்பதற்காக தெற்கே இலங்கை நோக்கி அமைதியாகவும் கருணையுடனும் அருள்பாலிக்கிறார்."
      },
      {
        name: "ஸ்ரீ ரங்கநாயகி",
        title: "தாயார் / அம்மா சன்னதி",
        description: "ரங்கநாயகி தாயார் ஸ்ரீ ரங்கநாதரின் தெய்வீகத் துணைவியாவார். இவரது சன்னதி நான்காம் பிரகாரத்தில் அமைந்துள்ளது. மரபுப்படி, தாயாரின் அனுமதியின்றி ரங்கநாதர் கோயிலை விட்டு வெளியேறுவதில்லை."
      },
      {
        name: "ஸ்ரீ சக்கரத்தாழ்வார்",
        title: "ஸ்ரீ சுதர்சனர்",
        description: "திருச்சக்கரத்தாழ்வார் சன்னதி மிகவும் முக்கியமான உப சன்னதிகளில் ஒன்றாகும். இது மகாவிஷ்ணுவின் சுதர்சன சக்கரத்தின் உருவகத்தைக் கொண்டுள்ளது. இதன் பின்புறம் நரசிம்மர் வீற்றிருந்து பக்தர்களுக்கு இருமடங்கு அருள்பாலிக்கிறார்."
      },
      {
        name: "ஸ்ரீ ராமானுஜர்",
        title: "மாபெரும் ஆச்சாரியர்",
        description: "ஸ்ரீ ராமானுஜரின் சன்னதியில் அவரது திருமேனி (தான் ஆன திருமேனி) இன்றும் பாதுகாக்கப்படுகிறது. ஸ்ரீ வைணவ மரபின் மிக முக்கியமான தத்துவஞானியான இவர், பல தசாப்தங்களாக ஸ்ரீரங்கம் கோயிலை நிர்வகித்தார்."
      },
      {
        name: "ஸ்ரீ துலுக்க நாச்சியார்",
        title: "தெய்வீக இளவரசி",
        description: "ஸ்ரீ துலுக்க நாச்சியார் (பீபி நாச்சியார் அல்லது சுரதானி) சன்னதி, உற்சவரான நம்பெருமாள் மீது ஆழமான காதல் கொண்ட டெல்லி முஸ்லீம் இளவரசிக்கான தனித்துவமான சன்னதியாகும்."
      },
      {
        name: "ஸ்ரீ கருடாழ்வார் சன்னதி",
        title: "தெய்வீக வாகனம்",
        description: "மூலஸ்தானத்திற்கு எதிரே அமைந்துள்ள இந்த பிரம்மாண்ட சன்னதியில் 14 அடி உயரமுள்ள கருடாழ்வார் காட்சியளிக்கிறார். இறைவனின் கட்டளைக்காகக் காத்திருக்கும் வகையில் அவர் அமர்ந்த நிலையில் உள்ளார்."
      },
      {
        name: "ஸ்ரீ தன்வந்திரி சன்னதி",
        title: "மருத்துவத்தின் கடவுள்",
        description: "அமிர்த கலசத்துடன் தோன்றிய ஆயுர்வேத கடவுளான தன்வந்திரிக்கு இச்சன்னதி அர்ப்பணிக்கப்பட்டுள்ளது. பக்தர்கள் உடல்நலம், நோய் நீக்கம் மற்றும் நல்வாழ்வுக்காக இங்கு பிரார்த்தனை செய்கிறார்கள்."
      },
      {
        name: "விஸ்வரூப சேவை",
        title: "புனிதமான அதிகாலை வழிபாடு",
        description: "விஸ்வரூபம் என்பது தினமும் அதிகாலையில் செய்யப்படும் முதல் மற்றும் மிக புனிதமான சேவையாகும். இது நம்பெருமாளை பள்ளியெழுப்பும் சடங்காகும்."
      }
    ]
  },
  hi: {
    backToHome: "होम पर वापस जाएँ",
    title: "देवता और सेवा",
    subtitle: "श्रीरंगम के दिव्य मंदिरों और देवताओं की खोज करें",
    viewDetails: "विवरण देखें",
    deities: [
      {
        name: "श्री रंगनाथ पेरुमल",
        title: "पीठासीन देवता",
        description: "मंदिर के पीठासीन देवता, भगवान रंगनाथ, आदिशेष पर शयन मुद्रा (अनंत शयनम) में हैं। वे शांति और कृपा के प्रतीक हैं, जो अपने महान भक्त राजा विभीषण को आशीर्वाद देने के लिए दक्षिण की ओर लंका की तरफ मुख किए हुए हैं।"
      },
      {
        name: "श्री रंग नायकी",
        title: "तायर / अम्मा सन्निधि",
        description: "श्री रंग नायकी, जिन्हें प्यार से तायर (माँ) कहा जाता है, भगवान रंगनाथ की दिव्य पत्नी हैं। परंपरा के अनुसार, भगवान रंगनाथ उनकी अनुमति के बिना कभी मंदिर नहीं छोड़ते।"
      },
      {
        name: "श्री चक्रथलावार",
        title: "भगवान सुदर्शन",
        description: "श्री चक्रथलावार मंदिर सबसे प्रमुख उप-मंदिरों में से एक है। यह भगवान विष्णु के दिव्य चक्र (सुदर्शन चक्र) का मानवीकरण है। मूर्ति के पीछे भगवान नरसिम्हा हैं।"
      },
      {
        name: "श्री रामानुजर",
        title: "महान गुरु",
        description: "श्री रामानुजाचार्य के मंदिर में उनके संरक्षित भौतिक अवशेष हैं। वे श्री वैष्णव परंपरा के सबसे महत्वपूर्ण दार्शनिक थे।"
      },
      {
        name: "श्री थुलुक्का नचियार",
        title: "दिव्य राजकुमारी",
        description: "श्री थुलुक्का नचियार (बीबी नचियार) दिल्ली की एक मुस्लिम राजकुमारी को समर्पित एक अनूठा मंदिर है, जिन्हें उत्सव मूर्ति, भगवान नामपेरुमल से गहरा प्रेम हो गया था।"
      },
      {
        name: "श्री गरुडालवार सन्निधि",
        title: "दिव्य वाहन",
        description: "मुख्य गर्भगृह के ठीक सामने स्थित, इस प्रभावशाली मंदिर में भगवान विष्णु के गरुड़ की 14 फुट ऊंची विशाल मूर्ति है।"
      },
      {
        name: "श्री धन्वंतरि सन्निधि",
        title: "चिकित्सा के भगवान",
        description: "यह मंदिर भगवान धन्वंतरि को समर्पित है। भक्त यहां अच्छे स्वास्थ्य और कल्याण की कामना के साथ प्रार्थना करते हैं।"
      },
      {
        name: "विश्वरूपम सेवा",
        title: "पवित्र भोर पूजा",
        description: "विश्वरूपम प्रतिदिन भोर में की जाने वाली पहली और सबसे पवित्र सेवा है। यह नामपेरुमल को जगाने का अनुष्ठान है।"
      }
    ]
  },
  te: {
    backToHome: "హోమ్‌కు తిరిగి వెళ్ళు",
    title: "దేవతలు మరియు సేవ",
    subtitle: "శ్రీరంగం యొక్క దివ్య సన్నిధులు మరియు దేవతలను అన్వేషించండి",
    viewDetails: "వివరాలను చూడండి",
    deities: [
      {
        name: "శ్రీ రంగనాథ పెరుమాళ్",
        title: "ప్రధాన దేవత",
        description: "ఆలయ ప్రధాన దేవత అయిన శ్రీ రంగనాథుడు ఆదిశేషునిపై శయన ముద్రలో (అనంత శయనం) దర్శనమిస్తాడు. తన భక్తుడైన విభీషణుడిని ఆశీర్వదించడానికి దక్షిణంగా లంక వైపు చూస్తూ ఉంటాడు."
      },
      {
        name: "శ్రీ రంగ నాయకి",
        title: "తాయార్ / అమ్మా సన్నిధి",
        description: "శ్రీ రంగ నాయకి, తాయార్ (తల్లి) శ్రీ రంగనాథుని దేవేరి. సంప్రదాయం ప్రకారం, శ్రీ రంగనాథుడు ఆమె అనుమతి లేకుండా ఆలయం విడిచి వెళ్లడు."
      },
      {
        name: "శ్రీ చక్రతాళ్వార్",
        title: "శ్రీ సుదర్శనుడు",
        description: "శ్రీ చక్రతాళ్వార్ సన్నిధి అత్యంత ప్రముఖ ఉప సన్నిధులలో ఒకటి. ఇది విష్ణువు యొక్క సుదర్శన చక్రానికి ప్రతిరూపం. విగ్రహం వెనుక భాగంలో నరసింహ స్వామి ఉంటారు."
      },
      {
        name: "శ్రీ రామానుజర్",
        title: "గొప్ప గురువు",
        description: "శ్రీ రామానుజాచార్యుల సన్నిధిలో ఆయన భౌతిక కాయం భద్రపరచబడి ఉంది. ఆయన శ్రీ వైష్ణవ సంప్రదాయంలో అత్యంత ముఖ్యమైన తత్వవేత్త."
      },
      {
        name: "శ్రీ తులుక్క నాచియార్",
        title: "దివ్య యువరాణి",
        description: "శ్రీ తులుక్క నాచియార్ (బీబీ నాచియార్) ఢిల్లీకి చెందిన ఒక ముస్లిం యువరాణికి అంకితం చేయబడిన ప్రత్యేకమైన సన్నిధి."
      },
      {
        name: "శ్రీ గరుడాళ్వార్ సన్నిధి",
        title: "దివ్య వాహనం",
        description: "ప్రధాన గర్భగుడికి ఎదురుగా ఉన్న ఈ అద్భుతమైన సన్నిధిలో 14 అడుగుల ఎత్తైన గరుత్మంతుని విగ్రహం ఉంది."
      },
      {
        name: "శ్రీ ధన్వంతరి సన్నిధి",
        title: "వైద్య దేవుడు",
        description: "ఈ సన్నిధి ఆయుర్వేద దేవుడైన ధన్వంతరికి అంకితం చేయబడింది. భక్తులు ఆరోగ్య ప్రాప్తి కోసం ఇక్కడ ప్రార్థిస్తారు."
      },
      {
        name: "విశ్వరూపం సేవ",
        title: "పవిత్ర ఉదయ ప్రార్థన",
        description: "విశ్వరూపం అనేది ప్రతిరోజూ వేకువజామున చేసే మొదటి మరియు అత్యంత పవిత్రమైన సేవ."
      }
    ]
  },
  ml: {
    backToHome: "ഹോമിലേക്ക് മടങ്ങുക",
    title: "ദേവതകളും സേവകളും",
    subtitle: "ശ്രീരംഗത്തിലെ ദിവ്യ സന്നിധികളും ദേവതകളും കണ്ടെത്തുക",
    viewDetails: "കൂടുതൽ വിവരങ്ങൾ",
    deities: [
      {
        name: "ശ്രീ രംഗനാഥ പെരുമാൾ",
        title: "പ്രധാന പ്രതിഷ്ഠ",
        description: "ക്ഷേത്രത്തിലെ പ്രധാന പ്രതിഷ്ഠയായ ഭഗവാൻ രംഗനാഥൻ ആദിശേഷന്റെ മേൽ ശയന രൂപത്തിലാണ് (അനന്ത ശയനം). ഭക്തനായ വിഭീഷണനെ അനുഗ്രഹിക്കാൻ തെക്കോട്ട് ലങ്കയ്ക്ക് നേരെ തിരിഞ്ഞാണ് കിടക്കുന്നത്."
      },
      {
        name: "ശ്രീ രംഗ നായകി",
        title: "തായർ / അമ്മ സന്നിധി",
        description: "ഭഗവാൻ രംഗനാഥന്റെ പത്നിയാണ് ശ്രീ രംഗ നായകി അഥവാ തായർ (അമ്മ). പാരമ്പര്യമനുസരിച്ച്, അവളുടെ അനുവാദമില്ലാതെ ഭഗവാൻ ഒരിക്കലും ക്ഷേത്രം വിട്ടുപോകില്ല."
      },
      {
        name: "ശ്രീ ചക്രത്താഴ്വാർ",
        title: "ഭഗവാൻ സുദർശനൻ",
        description: "ശ്രീ ചക്രത്താഴ്വാർ സന്നിധി പ്രധാന ഉപസന്നിധികളിലൊന്നാണ്. ഇത് വിഷ്ണുവിന്റെ ദിവ്യമായ സുദർശന ചക്രത്തിന്റെ മൂർത്തീകരണമാണ്. വിഗ്രഹത്തിന് പിന്നിൽ നരസിംഹസ്വാമിയുമുണ്ട്."
      },
      {
        name: "ശ്രീ രാമാനുജർ",
        title: "മഹാനായ ഗുരു",
        description: "ശ്രീ രാമാനുജാചാര്യരുടെ സന്നിധിയിൽ അദ്ദേഹത്തിന്റെ ഭൗതികശരീരം സൂക്ഷിച്ചിരിക്കുന്നു. അദ്ദേഹം ശ്രീ വൈഷ്ണവ പാരമ്പര്യത്തിലെ ഏറ്റവും പ്രധാനപ്പെട്ട തത്ത്വചിന്തകനായിരുന്നു."
      },
      {
        name: "ശ്രീ തുലുക്ക നാച്ചിയാർ",
        title: "ദിവ്യ രാജകുമാരി",
        description: "ഉത്സവമൂർത്തിയായ ഭഗവാൻ നമ്പെരുമാളോട് അതിയായ സ്നേഹം തോന്നിയ ഡൽഹിയിൽ നിന്നുള്ള ഒരു മുസ്ലീം രാജകുമാരിക്കായി സമർപ്പിച്ചിരിക്കുന്ന സവിശേഷമായ സന്നിധിയാണ് ശ്രീ തുലുക്ക നാച്ചിയാർ."
      },
      {
        name: "ശ്രീ ഗരുഡാഴ്വാർ സന്നിധി",
        title: "ദിവ്യ വാഹനം",
        description: "പ്രധാന ശ്രീകോവിലിന് എതിർവശത്തായി സ്ഥിതി ചെയ്യുന്ന ഈ സന്നിധിയിൽ ഭഗവാൻ വിഷ്ണുവിന്റെ വാഹനമായ ഗരുഡന്റെ 14 അടി ഉയരമുള്ള പ്രതിമയുണ്ട്."
      },
      {
        name: "ശ്രീ ധന്വന്തരി സന്നിധി",
        title: "വൈദ്യശാസ്ത്രത്തിന്റെ ദൈവം",
        description: "ഈ സന്നിധി ഭഗവാൻ ധന്വന്തരിക്കായി സമർപ്പിച്ചിരിക്കുന്നു. നല്ല ആരോഗ്യം തേടി ഭക്തർ ഇവിടെ പ്രാർത്ഥനകൾ അർപ്പിക്കുന്നു."
      },
      {
        name: "വിശ്വരൂപം സേവ",
        title: "പവിത്രമായ പ്രഭാത ആരാധന",
        description: "എല്ലാ ദിവസവും പുലർച്ചെ നടത്തുന്ന ആദ്യത്തെയും ഏറ്റവും പവിത്രവുമായ സേവയാണ് വിശ്വരൂപം."
      }
    ]
  },
  kn: {
    backToHome: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    title: "ದೇವರುಗಳು ಮತ್ತು ಸೇವೆ",
    subtitle: "ಶ್ರೀರಂಗಂನ ದಿವ್ಯ ಸನ್ನಿಧಿಗಳು ಮತ್ತು ದೇವರುಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    viewDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    deities: [
      {
        name: "ಶ್ರೀ ರಂಗನಾಥ ಪೆರುಮಾಳ್",
        title: "ಪ್ರಧಾನ ದೇವತೆ",
        description: "ದೇವಾಲಯದ ಪ್ರಧಾನ ದೇವತೆಯಾದ ಭಗವಾನ್ ರಂಗನಾಥನು ಆದಿಶೇಷನ ಮೇಲೆ ಶಯನ ಭಂಗಿಯಲ್ಲಿ (ಅನಂತ ಶಯನಂ) ಕಾಣಸಿಗುತ್ತಾನೆ. ಭಕ್ತ ವಿಭೀಷಣನಿಗೆ ಆಶೀರ್ವದಿಸಲು ದಕ್ಷಿಣಕ್ಕೆ ಲಂಕೆಯ ಕಡೆಗೆ ಮುಖ ಮಾಡಿದ್ದಾನೆ."
      },
      {
        name: "ಶ್ರೀ ರಂಗ ನಾಯಕಿ",
        title: "ತಾಯಾರ್ / ಅಮ್ಮ ಸನ್ನಿಧಿ",
        description: "ಶ್ರೀ ರಂಗ ನಾಯಕಿ, ಪ್ರೀತಿಯಿಂದ ತಾಯಾರ್ (ತಾಯಿ) ಎಂದು ಕರೆಯಲ್ಪಡುವ ಭಗವಾನ್ ರಂಗನಾಥನ ಪತ್ನಿ. ಸಂಪ್ರದಾಯದ ಪ್ರಕಾರ, ರಂಗನಾಥನು ಅವಳ ಅನುಮತಿಯಿಲ್ಲದೆ ದೇವಾಲಯವನ್ನು ಬಿಡುವುದಿಲ್ಲ."
      },
      {
        name: "ಶ್ರೀ ಚಕ್ರತ್ತಾಳ್ವಾರ್",
        title: "ಶ್ರೀ ಸುದರ್ಶನ",
        description: "ಶ್ರೀ ಚಕ್ರತ್ತಾಳ್ವಾರ್ ಸನ್ನಿಧಿಯು ಪ್ರಮುಖ ಉಪ-ಸನ್ನಿಧಿಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇದು ವಿಷ್ಣುವಿನ ಸುದರ್ಶನ ಚಕ್ರದ ಸಾಕಾರವಾಗಿದೆ. ವಿಗ್ರಹದ ಹಿಂಭಾಗದಲ್ಲಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ಇದ್ದಾರೆ."
      },
      {
        name: "ಶ್ರೀ ರಾಮಾನುಜರ್",
        title: "ಶ್ರೇಷ್ಠ ಗುರು",
        description: "ಶ್ರೀ ರಾಮಾನುಜಾಚಾರ್ಯರ ಸನ್ನಿಧಿಯಲ್ಲಿ ಅವರ ಭೌತಿಕ ದೇಹವನ್ನು ಸಂರಕ್ಷಿಸಲಾಗಿದೆ. ಅವರು ಶ್ರೀ ವೈಷ್ಣವ ಸಂಪ್ರದಾಯದ ಪ್ರಮುಖ ದಾರ್ಶನಿಕರಾಗಿದ್ದರು."
      },
      {
        name: "ಶ್ರೀ ತುಲುಕ್ಕ ನಾಚಿಯಾರ್",
        title: "ದಿವ್ಯ ರಾಜಕುಮಾರಿ",
        description: "ಶ್ರೀ ತುಲುಕ್ಕ ನಾಚಿಯಾರ್ (ಬೀಬಿ ನಾಚಿಯಾರ್) ದೆಹಲಿಯ ಮುಸ್ಲಿಂ ರಾಜಕುಮಾರಿಗೆ ಮೀಸಲಾದ ವಿಶಿಷ್ಟ ಸನ್ನಿಧಿ."
      },
      {
        name: "ಶ್ರೀ ಗರುಡಾಳ್ವಾರ್ ಸನ್ನಿಧಿ",
        title: "ದಿವ್ಯ ವಾಹನ",
        description: "ಮುಖ್ಯ ಗರ್ಭಗುಡಿಯ ಎದುರು ಇರುವ ಈ ಸನ್ನಿಧಿಯಲ್ಲಿ 14 ಅಡಿ ಎತ್ತರದ ಗರುಡನ ಭವ್ಯವಾದ ವಿಗ್ರಹವಿದೆ."
      },
      {
        name: "ಶ್ರೀ ಧನ್ವಂತರಿ ಸನ್ನಿಧಿ",
        title: "ವೈದ್ಯ ದೇವರು",
        description: "ಈ ಸನ್ನಿಧಿಯು ಆಯುರ್ವೇದದ ದೇವತೆಯಾದ ಧನ್ವಂತರಿಗೆ ಮೀಸಲಾಗಿದೆ. ಉತ್ತಮ ಆರೋಗ್ಯವನ್ನು ಕೋರಿ ಭಕ್ತರು ಇಲ್ಲಿ ಪ್ರಾರ್ಥಿಸುತ್ತಾರೆ."
      },
      {
        name: "ವಿಶ್ವರೂಪಂ ಸೇವೆ",
        title: "ಪವಿತ್ರ ಬೆಳಗಿನ ಪೂಜೆ",
        description: "ವಿಶ್ವರೂಪಂ ಪ್ರತಿದಿನ ಮುಂಜಾನೆ ನಡೆಯುವ ಮೊದಲ ಮತ್ತು ಅತ್ಯಂತ ಪವಿತ್ರವಾದ ಸೇವೆಯಾಗಿದೆ."
      }
    ]
  }
};

locales.forEach(loc => {
  const p = path.join(__dirname, 'src/dictionaries', `${loc}.json`);
  let data = {};
  if (fs.existsSync(p)) {
    data = JSON.parse(fs.readFileSync(p, 'utf8'));
  }
  
  data.deitySeva = content[loc];
  
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
});

console.log("Deity & Seva translations added for all locales.");
