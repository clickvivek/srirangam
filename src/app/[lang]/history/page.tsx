import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#fdf0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link href={`/${lang}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#571a15', textDecoration: 'none', marginBottom: '2rem', fontWeight: 'bold' }}>
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <h1 style={{ color: '#571a15', marginBottom: '1.5rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '1rem' }}>
            Sri Ranganathaswamy Temple, Srirangam – History and Significance
          </h1>
          
          <p style={paragraphStyle}>
            Sri Ranganathaswamy Temple, located on the sacred island of Srirangam in Tiruchirappalli, Tamil Nadu, is one of the oldest, largest, and most revered Hindu temples dedicated to Lord Vishnu. Revered as the foremost among the 108 Divya Desams, it occupies a unique place in the hearts of millions of devotees and is regarded as the spiritual headquarters of Sri Vaishnavism. The temple has been glorified in the sacred hymns of the twelve Alwars, who praised Lord Ranganatha with profound devotion. Known as Bhooloka Vaikuntham (the earthly abode of Lord Vishnu) and Bhoga Mandapam, Srirangam is a destination where mythology, history, architecture, philosophy, and devotion come together in extraordinary harmony.
          </p>

          <h2 style={headingStyle}>The Divine Origin</h2>
          <p style={paragraphStyle}>
            According to the Sthala Purana, the story of Lord Ranganatha begins in the celestial realm. Lord Brahma, the creator, performed intense penance and received the divine idol of Lord Ranganatha reclining on the serpent Adisesha. Brahma worshipped the deity daily in Satya Loka.
          </p>
          <p style={paragraphStyle}>
            The sacred idol was later handed down to King Ikshvaku, the founder of the Solar Dynasty (Surya Vamsa), who brought it to Ayodhya. From generation to generation, the kings of the Ikshvaku dynasty worshipped the deity as their family deity (Kula Daivam). Among them was Lord Rama, who continued this tradition during his reign.
          </p>
          <p style={paragraphStyle}>
            After defeating Ravana in the Ramayana and crowning Vibhishana as the King of Lanka, Lord Rama gifted the sacred idol of Lord Ranganatha to Vibhishana as a symbol of gratitude and righteousness. While carrying the deity towards Lanka, Vibhishana stopped on the banks of the River Kaveri to perform his daily prayers.
          </p>
          <p style={paragraphStyle}>
            The deity had been placed on the ground with the condition that it should not be moved again. When Vibhishana attempted to lift it after completing his prayers, the idol remained firmly rooted. Lord Ranganatha revealed His divine will to stay at Srirangam permanently while facing south toward Lanka, blessing Vibhishana forever. Even today, the reclining deity faces south, a unique feature among major Vishnu temples and a reminder of the Lord's compassion.
          </p>

          <h2 style={headingStyle}>Growth Through the Ages</h2>
          <p style={paragraphStyle}>
            The temple that began as a modest shrine gradually evolved into one of the world's largest functioning temple complexes. Historical evidence suggests that the earliest structural additions date back to the early Chola period, although references to the temple appear much earlier in Tamil devotional literature.
          </p>
          <p style={paragraphStyle}>
            Successive dynasties enriched the temple over many centuries. The Early Cholas expanded the sanctum and initiated major construction projects. The Later Cholas added shrines, mandapams, and elaborate sculptures. The Pandya kings made generous donations of jewels, gold, and land for temple maintenance.
          </p>
          <p style={paragraphStyle}>
            During the Hoysala period, exquisite stone carvings and artistic pillars were added, enhancing the temple's architectural beauty. Later, the Vijayanagara Empire played a crucial role in restoring and expanding the complex after periods of political unrest. The Nayak rulers of Madurai further strengthened the temple by constructing grand halls, corridors, and festival mandapams that continue to attract visitors today.
          </p>
          <p style={paragraphStyle}>
            Each dynasty viewed service to Sri Ranganathaswamy Temple as both a religious duty and a royal privilege, resulting in the magnificent monument that stands today.
          </p>

          <h2 style={headingStyle}>The Temple During Medieval Invasions</h2>
          <p style={paragraphStyle}>
            The history of Srirangam also reflects periods of great adversity. In the early fourteenth century, invasions from the Delhi Sultanate disrupted temple life. To protect the principal deity, devoted priests and disciples secretly carried the processional idol (Namperumal) across South India.
          </p>
          <p style={paragraphStyle}>
            For several decades, the idol remained in various safe locations while devotees continued worship under difficult circumstances. Eventually, with the restoration of Hindu rule in the region, the deity was ceremoniously brought back to Srirangam. This return is remembered as one of the most significant events in the temple's history and symbolizes the resilience of faith and the dedication of generations of devotees.
          </p>

          <h2 style={headingStyle}>Sri Ramanujacharya and Srirangam</h2>
          <p style={paragraphStyle}>
            No account of Srirangam is complete without mentioning Sri Ramanujacharya (1017–1137 CE), one of India's greatest philosophers and theologians.
          </p>
          <p style={paragraphStyle}>
            Sri Ramanuja spent many years at Srirangam and transformed it into the principal center of the Sri Vaishnava tradition. He systematized temple worship, established detailed procedures for festivals and rituals, organized temple administration, and introduced methods to ensure that daily worship would continue without interruption.
          </p>
          <p style={paragraphStyle}>
            His teachings on Vishishtadvaita Vedanta—the philosophy of qualified non-dualism—spread from Srirangam throughout India and continue to influence millions of devotees today.
          </p>
          <p style={paragraphStyle}>
            One of the temple's greatest treasures is the preserved mortal remains of Sri Ramanuja, known as "Thaan Ana Thirumeni." Unlike a symbolic statue, this sacred form is traditionally believed to preserve the saint's physical body through ancient preservation methods. Devotees from around the world visit Srirangam to seek his blessings.
          </p>
          <p style={paragraphStyle}>
            Remarkably, the administrative system introduced by Sri Ramanuja nearly a thousand years ago continues to influence the temple's functioning even today.
          </p>

          <h2 style={headingStyle}>Architectural Grandeur</h2>
          <p style={paragraphStyle}>
            Sri Ranganathaswamy Temple covers approximately 156 acres, making it one of the largest functioning Hindu temple complexes in the world. The temple resembles a fortified sacred city rather than a single shrine.
          </p>
          <p style={paragraphStyle}>
            Its seven concentric enclosures, known as Saptha Prakarams, represent the seven spiritual planes leading devotees toward the divine presence of Lord Vishnu. These enclosures contain residential streets, shrines, gardens, mandapams, and ceremonial pathways.
          </p>
          <p style={paragraphStyle}>
            The temple features 21 magnificent gopurams, the tallest being the Rajagopuram, which rises to an impressive height of 236 feet (72 meters). Completed in 1987 based on traditional architectural plans, it remains one of the tallest temple towers in Asia.
          </p>
          <p style={paragraphStyle}>
            Within the complex are 52 sub-shrines, hundreds of beautifully carved pillars, sacred water tanks, ornate mandapams, and the famous Golden Vimanam above the sanctum, designed in the symbolic form of the sacred syllable Om (Pranava).
          </p>

          <h2 style={headingStyle}>Festivals and Living Traditions</h2>
          <p style={paragraphStyle}>
            Unlike many historic monuments, Srirangam remains a vibrant center of living worship. Festivals are celebrated throughout most of the year, reflecting centuries-old traditions.
          </p>
          <p style={paragraphStyle}>
            The most significant celebration is the Vaikunta Ekadasi Festival, during which the sacred Paramapada Vasal (Gateway to Heaven) is ceremonially opened. Lakhs of devotees gather to pass through this symbolic gateway, believing it represents the path to Vaikuntha, the eternal abode of Lord Vishnu.
          </p>
          <p style={paragraphStyle}>
            Other major festivals include Panguni Uthiram, Brahmotsavam, Chithirai Car Festival, Vasanthotsavam, Jyeshtabhishekam, and numerous monthly and seasonal celebrations. The processional deity, Namperumal, is taken through the temple streets on beautifully decorated mounts, allowing devotees to receive His blessings.
          </p>
          <p style={paragraphStyle}>
            Daily worship follows the Pancharatra Agama, specifically the Parameswara Samhita, preserving ritual traditions that have continued uninterrupted for centuries.
          </p>

          <h2 style={headingStyle}>A Timeless Spiritual Heritage</h2>
          <p style={paragraphStyle}>
            Today, Sri Ranganathaswamy Temple stands as far more than an architectural marvel. It is a living symbol of India's spiritual heritage, where mythology, philosophy, history, music, literature, and devotion have flourished together for over a thousand years.
          </p>
          <p style={paragraphStyle}>
            Surrounded by the sacred waters of the River Kaveri and the Kollidam River, Srirangam continues to inspire millions of pilgrims from across the world. Whether one visits to admire its magnificent architecture, study its rich history, experience its vibrant festivals, or seek the blessings of Lord Ranganatha, the temple offers a profound spiritual experience that has remained unchanged through the centuries.
          </p>
          <p style={paragraphStyle}>
            Sri Ranganathaswamy Temple is not merely a monument of the past—it is a living sanctuary where ancient traditions continue to thrive, making it one of the greatest centers of faith and culture in the world.
          </p>
        </div>
      </div>
    </div>
  );
}

const headingStyle = {
  color: '#d95c14',
  marginTop: '2rem',
  marginBottom: '1rem',
  fontSize: '1.5rem',
  fontWeight: 'bold'
};

const paragraphStyle = {
  color: '#444',
  lineHeight: '1.8',
  marginBottom: '1rem',
  fontSize: '1.05rem',
  textAlign: 'justify' as const
};
