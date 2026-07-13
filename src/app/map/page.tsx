import Link from 'next/link';

export default function TempleMap() {
  return (
    <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <div className="section-title">
        <span>TEMPLE LAYOUT</span>
        <h2>Sri Ranganathaswamy Temple Map</h2>
        <p>Explore the layout of the 7 prakarams (enclosures) and 21 gopurams</p>
      </div>
      
      <div style={{ margin: '2rem auto', maxWidth: '100%', overflow: 'auto', backgroundColor: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)', position: 'relative', width: 'fit-content' }}>
        <img src="/srirangam/map-final.svg" alt="Srirangam Temple Map" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
        
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

      <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
        <Link href="/" className="btn btn-primary">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
