export default function Darshan() {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1rem' }}>
      <h1>Darshan & Sevas</h1>
      <p style={{ maxWidth: '800px', fontSize: '1.2rem', marginBottom: '2rem' }}>
        Plan your visit and Darshan timings. For official bookings and e-hundi, please 
        visit the official Tamil Nadu HR&CE portal.
      </p>

      <div className="timings-section glass" style={{ margin: '0', maxWidth: '100%', boxShadow: 'none' }}>
        <h2>Complete Timings</h2>
        <div className="timings-grid grid-3">
          <div className="timing-card">
            <h3>Viswaroopa Darshan</h3>
            <p>06:00 AM - 07:15 AM</p>
          </div>
          <div className="timing-card">
            <h3>Pooja Time (No Darshan)</h3>
            <p>07:15 AM - 09:00 AM</p>
          </div>
          <div className="timing-card">
            <h3>General Darshan</h3>
            <p>09:00 AM - 12:00 PM</p>
          </div>
          <div className="timing-card">
            <h3>Pooja Time (No Darshan)</h3>
            <p>12:00 PM - 01:15 PM</p>
          </div>
          <div className="timing-card">
            <h3>General Darshan</h3>
            <p>01:15 PM - 05:45 PM</p>
          </div>
          <div className="timing-card">
            <h3>Pooja Time (No Darshan)</h3>
            <p>05:45 PM - 06:45 PM</p>
          </div>
          <div className="timing-card">
            <h3>General Darshan</h3>
            <p>06:45 PM - 09:00 PM</p>
          </div>
        </div>
        <br/>
        <a href="https://tnhrce.gov.in" target="_blank" rel="noopener noreferrer" className="btn">
          Proceed to Official Booking Site
        </a>
      </div>
    </div>
  );
}
