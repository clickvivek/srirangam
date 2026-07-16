import Link from 'next/link';

export default async function TempleMap({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <div className="section-title">
        <span>TEMPLE LAYOUT</span>
        <h2>Sri Ranganathaswamy Temple Map</h2>
        <p>Explore the layout of the 7 prakarams (enclosures) and 21 gopurams</p>
      </div>
      
      <div style={{ width: '100%', overflowX: 'auto', padding: '1rem 0' }}>
        <div style={{ 
          margin: '0 auto', 
          minWidth: '800px', 
          maxWidth: '1200px', 
          backgroundColor: 'white', 
          padding: '1rem', 
          borderRadius: '12px', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)', 
          border: '1px solid var(--border-color)', 
          position: 'relative' 
        }}>
          <img src="/srirangam/Temple_map_Srirangam3.PNG" alt="Srirangam Temple Map" style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
        
        {/* Paramapathavasal Hover Zone */}
        <div 
          className="map-hover-zone"
          style={{
            position: 'absolute',
            top: '28%',   /* ADJUST THESE PERCENTAGES TO ALIGN EXACTLY OVER THE DOOR */
            left: '50%',  /* ADJUST THESE PERCENTAGES TO ALIGN EXACTLY OVER THE DOOR */
            width: '40px',
            height: '40px',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <div className="popup-preview" style={{
            position: 'absolute',
            bottom: '80%', /* Overlaps the hover zone slightly to prevent gap */
            left: '50%',
            transform: 'translateX(-50%)',
            paddingBottom: '15px', /* Creates an invisible bridge for the mouse */
            width: '160px',
            opacity: 0,
            visibility: 'hidden',
            transition: 'all 0.2s ease',
            zIndex: 100
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '6px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              border: '2px solid var(--primary-color)',
              position: 'relative'
            }}>
              <img src="/srirangam/Paramapathavasal.png" alt="Paramapathavasal" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
              <div style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary-color)', marginTop: '4px' }}>
                Paramapathavasal
              </div>
              {/* Arrow pointer */}
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid var(--primary-color)'
              }}></div>
            </div>
          </div>
        </div>

        {/* Ranga Naachiyar Hover Zone */}
        <div 
          className="map-hover-zone"
          style={{
            position: 'absolute',
            top: '40%',   /* ADJUST THESE PERCENTAGES TO ALIGN EXACTLY OVER THE SHRINE */
            left: '35%',  /* ADJUST THESE PERCENTAGES TO ALIGN EXACTLY OVER THE SHRINE */
            width: '40px',
            height: '40px',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <div className="popup-preview" style={{
            position: 'absolute',
            bottom: '80%', /* Overlaps the hover zone slightly to prevent gap */
            left: '50%',
            transform: 'translateX(-50%)',
            paddingBottom: '15px', /* Creates an invisible bridge for the mouse */
            width: '160px',
            opacity: 0,
            visibility: 'hidden',
            transition: 'all 0.2s ease',
            zIndex: 100
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '6px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              border: '2px solid var(--primary-color)',
              position: 'relative'
            }}>
              <img src="/srirangam/RangaNayaki.png" alt="Ranga Naachiyar" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
              <div style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary-color)', marginTop: '4px' }}>
                Ranga Naachiyar
              </div>
              {/* Arrow pointer */}
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid var(--primary-color)'
              }}></div>
            </div>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          .map-hover-zone:hover .popup-preview {
            opacity: 1 !important;
            visibility: visible !important;
          }
        `}} />
        </div>
      </div>

      <div style={{ marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0 auto', textAlign: 'left', backgroundColor: 'var(--card-bg, #fff)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid var(--border-color, #eaeaea)' }}>
        <h3 style={{ color: 'var(--primary-color, #e06d06)', textAlign: 'center', marginBottom: '1rem' }}>Recommended Darshan Route</h3>
        <p style={{ textAlign: 'center', fontWeight: '500', marginBottom: '2rem' }}>Welcome to the sacred abode of Sri Ranganatha! 🙏<br/>To make your pilgrimage smooth, peaceful, and spiritually fulfilling, we recommend following the route below.</p>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color, #333)' }}>🚩 Step 1: Enter Through the South Rajagopuram</h4>
          <p>Begin your divine journey through the South Rajagopuram, the main and most convenient entrance to the temple.</p>
          <p>As you enter, you will be blessed with the majestic Sri Garudazhwar. Pause for a moment, offer your prayers, and seek His blessings before proceeding to the sanctum of Sri Ranganathar.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color, #333)' }}>🛕 Step 2: Choose Your Darshan Queue</h4>
          <p>You have two options for darshan:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '1rem 0' }}>
            <li style={{ marginBottom: '0.5rem' }}>🟢 <strong>Free Darshan:</strong> Entrance is located on the left side of the Sri Ranganathar Temple entrance. Suitable for devotees who prefer the regular queue.</li>
            <li>⭐ <strong>₹100 Special Darshan:</strong> Entrance is located on the right side. Offers a significantly faster darshan with shorter waiting times.</li>
          </ul>
          <p>Whichever option you choose, may Lord Ranganatha bless you with peace, happiness, and prosperity.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color, #333)' }}>🚗 Step 3: Visit Sri Ranganachiyaar (Ranganayaki Thayar) Temple</h4>
          <p>After completing your darshan of Sri Ranganathar, continue your pilgrimage to Sri Ranganachiyaar Thayar Temple (Ranganayaki Amma Temple).</p>
          <p>For your convenience:</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '1rem 0' }}>
            <li style={{ marginBottom: '0.5rem' }}>🚗 Battery-operated golf carts are available and provide the easiest way to reach the temple.</li>
            <li>🚶 Prefer walking? It takes approximately 10 minutes.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color, #333)' }}>🛕 Step 4: Visit Sri Chakrathazhwar Temple</h4>
          <p>After receiving the blessings of Sri Ranganayaki Thayar, walk to the nearby Sri Chakrathazhwar Temple, one of the closest shrines from there.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color, #333)' }}>🙏 Step 5: Seek the Blessings of Sri Ramanujar</h4>
          <p>Continue walking to the sacred Sri Ramanujar Temple, dedicated to the great Acharya who preserved and spread the Sri Vaishnava tradition.</p>
          <p>Many devotees consider this visit an essential part of their pilgrimage to Srirangam.</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-color, #333)' }}>🍛 Step 6: Receive the Blessings of Annadanam</h4>
          <p>As you return towards the main entrance, don't miss the opportunity to participate in Annadanam, the sacred offering of free meals to devotees.</p>
          <div style={{ backgroundColor: 'rgba(224, 109, 6, 0.05)', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Annadanam Timings</p>
            <p style={{ margin: '0 0 0.25rem 0' }}>📅 Every day throughout the year</p>
            <p style={{ margin: 0 }}>🕗 8:00 AM to approximately 8:30–9:00 PM</p>
          </div>
          <p>Sharing or receiving Annadanam is regarded as one of the highest forms of service and blessing.</p>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px solid var(--border-color, #eaeaea)', paddingTop: '2rem' }}>
          <h4 style={{ display: 'flex', justifySelf: 'center', alignItems: 'center', gap: '8px', color: 'var(--secondary-color, #333)' }}>🌺 Complete Your Pilgrimage</h4>
          <p>By following this recommended route, you can comfortably visit the major shrines within the Sri Ranganathaswamy Temple Complex in the most convenient and spiritually enriching order.</p>
          <p>May Sri Ranganatha, Sri Ranganayaki Thayar, Sri Chakrathazhwar, Sri Garudazhwar, and Sri Ramanujar shower you and your family with good health, happiness, prosperity, and divine grace.</p>
          <p style={{ fontWeight: 'bold', marginTop: '1rem', color: 'var(--primary-color, #e06d06)' }}>🙏 Wishing you a blessed and memorable darshan at the holy temple of Srirangam!</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
        <Link href={`/${lang}`} className="btn btn-primary">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
