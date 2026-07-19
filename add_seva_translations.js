const fs = require('fs');

const en = JSON.parse(fs.readFileSync('./src/dictionaries/en.json', 'utf8'));
const ta = JSON.parse(fs.readFileSync('./src/dictionaries/ta.json', 'utf8'));

const enSeva = {
  title: "Seva Booking",
  subtitle: "Official Darshan & Services",
  noticeTitle: "Important Notice",
  noticeText: "srirangam.net is an informational portal and is not the official temple booking site. All seva and darshan bookings are securely processed through the official Tamil Nadu Government (HR&CE) website. The links below will redirect you to the official government portal for booking.",
  proceedToBooking: "Proceed to Official Booking",
  importantNoteLabel: "Important Note",
  items: {
    allSevas: {
      title: "All Seva Bookings",
      desc: "Explore and book all available Sevas and services."
    },
    vishwaroopam: {
      title: "Perumal Sannathi Vishwaroopam Sevai",
      desc: "Book tickets for the early morning Vishwaroopam Darshan of Lord Ranganatha.",
      timing: "Timing 5.30 AM to 7.00 AM. No Darshan on Festival days & Mid Dec to Mid Jan Marghazi month.",
      importantNote: "Only 150 people are allowed in for Viswaroopa Darshan at a time, so it's best to book your ticket online at least a week ahead. Tickets are also sold offline at the counter for ₹70, but that route is risky — there's no guarantee you'll reach the counter in time to get one."
    },
    perumalSpecial: {
      title: "Perumal Sannathi Special Entrance",
      desc: "Special entry tickets for Lord Ranganatha's main sanctum."
    },
    thayaarSpecial: {
      title: "Thayaar Sannathi Special Entrance",
      desc: "Special entry tickets for Goddess Sri Ranganayaki Thayar's sanctum."
    },
    thirumanjanam: {
      title: "Thirumanjanam Tanvandiri",
      desc: "Book Thirumanjanam service for Lord Dhanvantri."
    }
  }
};

const taSeva = {
  title: "சேவை முன்பதிவு",
  subtitle: "அதிகாரப்பூர்வ தரிசனம் மற்றும் சேவைகள்",
  noticeTitle: "முக்கிய அறிவிப்பு",
  noticeText: "srirangam.net ஒரு தகவல் தளம் மட்டுமே; இது அதிகாரப்பூர்வ கோவில் முன்பதிவு தளம் அல்ல. அனைத்து சேவை மற்றும் தரிசன முன்பதிவுகளும் அதிகாரப்பூர்வ தமிழ்நாடு அரசு (HR&CE) இணையதளம் மூலம் பாதுகாப்பாக செய்யப்படுகின்றன. கீழே உள்ள இணைப்புகள் முன்பதிவுக்காக அதிகாரப்பூர்வ அரசு தளத்திற்கு உங்களை வழிநடத்தும்.",
  proceedToBooking: "அதிகாரப்பூர்வ முன்பதிவுக்கு செல்லவும்",
  importantNoteLabel: "முக்கிய குறிப்பு",
  items: {
    allSevas: {
      title: "அனைத்து சேவை முன்பதிவுகளும்",
      desc: "கிடைக்கக்கூடிய அனைத்து சேவைகளையும் ஆராய்ந்து முன்பதிவு செய்யுங்கள்."
    },
    vishwaroopam: {
      title: "பெருமாள் சன்னதி விஸ்வரூப சேவை",
      desc: "ரங்கநாதப் பெருமாளின் அதிகாலை விஸ்வரூப தரிசனத்திற்கான டிக்கெட்டுகளை முன்பதிவு செய்யுங்கள்.",
      timing: "நேரம்: அதிகாலை 5.30 முதல் 7.00 வரை. திருவிழா நாட்களிலும், மார்கழி மாதத்திலும் தரிசனம் கிடையாது.",
      importantNote: "விஸ்வரூப தரிசனத்திற்கு ஒரு நேரத்தில் 150 நபர்கள் மட்டுமே அனுமதிக்கப்படுகிறார்கள், எனவே குறைந்தது ஒரு வாரத்திற்கு முன்பே ஆன்லைனில் டிக்கெட் முன்பதிவு செய்வது நல்லது. கவுண்டரில் ₹70 க்கு ஆஃப்லைனிலும் டிக்கெட்டுகள் விற்கப்படுகின்றன, ஆனால் அது உறுதியானது அல்ல."
    },
    perumalSpecial: {
      title: "பெருமாள் சன்னதி சிறப்பு தரிசனம்",
      desc: "ரங்கநாதப் பெருமாளின் மூலஸ்தானத்திற்கான சிறப்பு தரிசன டிக்கெட்டுகள்."
    },
    thayaarSpecial: {
      title: "தாயார் சன்னதி சிறப்பு தரிசனம்",
      desc: "ஸ்ரீ ரங்கநாயகி தாயார் சன்னதிக்கான சிறப்பு தரிசன டிக்கெட்டுகள்."
    },
    thirumanjanam: {
      title: "தன்வந்திரி திருமஞ்சனம்",
      desc: "ஸ்ரீ தன்வந்திரி பெருமாளுக்கான திருமஞ்சன சேவையை முன்பதிவு செய்யுங்கள்."
    }
  }
};

en.sevaBooking = enSeva;
ta.sevaBooking = taSeva;

fs.writeFileSync('./src/dictionaries/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('./src/dictionaries/ta.json', JSON.stringify(ta, null, 2));

console.log('Dictionaries updated successfully.');
