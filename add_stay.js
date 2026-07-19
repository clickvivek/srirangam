const fs = require('fs');
const path = require('path');

const stayData = {
  "title": "Where to Stay in Srirangam",
  "subtitle": "A guide to hotels, lodges, and temple guest houses",
  "zonesTitle": "Two Main Zones to Choose From",
  "zonesIntro": "For a Srirangam pilgrimage, you've basically got two zones to choose from: right at the temple's doorstep (walk to darshan, no traffic hassle) or a bit further out (usually quieter, sometimes cheaper).",
  "walkingDistanceTitle": "Walking distance to the temple",
  "walkingDistanceDesc": "Best if you want to avoid autos during early-morning or late-night darshan:",
  "hotels": [
    {
      "name": "Anantha Shaiya",
      "link": "https://share.google/J6QbeiL3UNSdyGeK2",
      "desc": "About 30m from the South Gopuram, the closest option going. Small but very clean rooms, no elevator."
    },
    {
      "name": "Sri Maruti Inn",
      "link": "https://share.google/s8XcUQxbaxEmzwVom",
      "desc": "2 minutes from the darshan entrance, some rooms even have gopuram views."
    },
    {
      "name": "Sri Krishna Residency",
      "link": "https://share.google/PnHW0EAaEMg9QcBTt",
      "desc": "Spacious, clean rooms, also walking distance."
    },
    {
      "name": "SRI RANGANADHA NILAYAM",
      "link": "https://share.google/JAuCWraollwEqxpVk",
      "desc": "A more homely lodge with a shared kitchen if you want to cook your own food, popular with families doing multi-day visits."
    },
    {
      "name": "Yatri Nivas Guest House",
      "link": "https://share.google/R1hnduL9IAgUq0okv",
      "desc": "(on Kollidam Flood Bank Road) — Owned by the temple itself, large parking area, has an in-house veg restaurant. (Note: Cash-only, no online booking)."
    }
  ],
  "furtherOutTitle": "Slightly further out, quieter",
  "furtherOutDesc": "Good if you're also visiting Rockfort or Jambukeswarar Temple:",
  "furtherOutHotels": [
    {
      "name": "RJ Residency Srirangam",
      "link": "https://share.google/rxiguSlZbTxN4LyaJ",
      "desc": "Highest-rated of the lot (4.9), calm location, family-friendly."
    }
  ],
  "practicalNotesTitle": "Practical Notes",
  "practicalNotes": [
    "Book well ahead during festival season, especially around Vaikuntha Ekadasi (December–January) – rooms get scarce and some properties are known to hike prices last-minute.",
    "If you want AC and modern amenities, the private hotels near the South Gate are more reliable than the temple guest houses, which are more basic.",
    "Carry your own toiletries and a towel – several budget lodges near the temple don't provide them."
  ],
  "yatriNivasDetailsTitle": "Yatri Nivas Srirangam",
  "yatriNivasDetailsLink": "https://share.google/9fwkK4alV4UEDyOWT",
  "yatriNivasDetailsDesc": "The temple-run guest house – pulled together from booking guides, official temple contacts, and traveler reviews.",
  "basicsTitle": "The Basics",
  "basics": [
    "Location: Kollidam Flood Bank Road, Srirangam – about 2 km from the temple, not walking distance.",
    "Ownership: It's the official Sri Ranganathaswamy Devasthanam (temple) lodge, not a private hotel.",
    "Room types: 88 rooms plus separate cottages and dormitories.",
    "Booking: No official online booking exists. You book by phone (temple enquiry: 0431-2432246, lodge: 94864-82246) or by walking in. Fake sites exist, beware.",
    "Payment: Cash only at check-in – no cards, no UPI/GPay. Refundable deposit typically required.",
    "Rough tariffs: AC double rooms ~₹1750/night, four-bed AC cottages ~₹1750, dorms ₹800 (8-bed) to ₹1400 (14-bed)."
  ],
  "prosTitle": "Pros",
  "pros": [
    "Cheapest option in the area by a wide margin, especially for groups.",
    "Genuinely built for pilgrims – large parking (~30 cars), in-house veg restaurant, layout designed for groups/families.",
    "Peaceful setting – calmer and less commercial than lodges near temple gates.",
    "Ample space – large rooms, cottages, and dorms for bigger groups."
  ],
  "consTitle": "Cons",
  "cons": [
    "Not walking distance – needs an auto for every darshan.",
    "Inconsistent maintenance – worn bedding, mosquitoes (especially dorms), general upkeep issues.",
    "No hot water in dormitories (confirm if booking).",
    "Restaurant is average and pricier than expected.",
    "Booking uncertainty – no real online system, phone bookings sometimes not honored.",
    "Inconsistent service quality – check-in/out policies can be unclear."
  ],
  "bottomLineTitle": "Bottom Line",
  "bottomLineDesc": "Yatri Nivas is a solid pick if you're budget-conscious, traveling as a group, and don't mind commuting 2 km for darshan – but go in with realistic expectations. If proximity and consistent quality matter more, private lodges near the South Gate will likely serve you better."
};

const languages = ['en', 'ta', 'hi', 'te', 'ml', 'kn'];

for (const lang of languages) {
  const filePath = path.join(__dirname, 'src', 'dictionaries', `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.stay = stayData; // For now, using English for all to ensure structure exists. We can translate later.
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${lang}.json with stay data.`);
  }
}
