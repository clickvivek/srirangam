import React from 'react';

export default function TestTicketBooking() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#fdf0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ color: '#571a15', marginBottom: '2rem', textAlign: 'center' }}>Test Ticket Booking</h1>
        
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1.5rem', fontWeight: 'bold' }}>Pilgrim Details - Person 1</h2>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '2 1 150px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Name <span style={{color: 'red'}}>*</span></label>
              <input type="text" style={inputStyle} />
            </div>
            
            <div style={{ flex: '0 1 60px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Age <span style={{color: 'red'}}>*</span></label>
              <input type="number" style={inputStyle} />
            </div>
            
            <div style={{ flex: '1 1 100px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Gender <span style={{color: 'red'}}>*</span></label>
              <select style={inputStyle} defaultValue="">
                <option value="" disabled></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div style={{ flex: '1 1 130px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Photo ID Proof <span style={{color: 'red'}}>*</span></label>
              <select style={inputStyle} defaultValue="">
                <option value="" disabled></option>
                <option value="Aadhaar Card">Aadhaar Card</option>
                <option value="Passport">Passport</option>
                <option value="Voter ID">Voter ID</option>
              </select>
            </div>
            
            <div style={{ flex: '1 1 150px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Photo Id Number <span style={{color: 'red'}}>*</span></label>
              <input type="text" style={inputStyle} />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1.5rem', fontWeight: 'bold' }}>Pilgrim Details - Person 2</h2>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '2 1 150px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Name <span style={{color: 'red'}}>*</span></label>
              <input type="text" style={inputStyle} />
            </div>
            
            <div style={{ flex: '0 1 60px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Age <span style={{color: 'red'}}>*</span></label>
              <input type="number" style={inputStyle} />
            </div>
            
            <div style={{ flex: '1 1 100px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Gender <span style={{color: 'red'}}>*</span></label>
              <select style={inputStyle} defaultValue="">
                <option value="" disabled></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div style={{ flex: '1 1 130px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Photo ID Proof <span style={{color: 'red'}}>*</span></label>
              <select style={inputStyle} defaultValue="">
                <option value="" disabled></option>
                <option value="Aadhaar Card">Aadhaar Card</option>
                <option value="Passport">Passport</option>
                <option value="Voter ID">Voter ID</option>
              </select>
            </div>
            
            <div style={{ flex: '1 1 150px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Photo Id Number <span style={{color: 'red'}}>*</span></label>
              <input type="text" style={inputStyle} />
            </div>
          </div>
        </div>
        
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1.5rem', fontWeight: 'bold' }}>General Details</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 200px' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Email <span style={{color: 'red'}}>*</span></label>
                <input type="email" style={inputStyle} />
              </div>
              <div style={{ flex: '1 1 200px' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Country <span style={{color: 'red'}}>*</span></label>
                <select style={inputStyle} defaultValue="">
                  <option value="" disabled></option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 200px' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>State <span style={{color: 'red'}}>*</span></label>
                <select style={inputStyle} defaultValue="">
                  <option value="" disabled></option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
              </div>
              <div style={{ flex: '1 1 200px' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>City <span style={{color: 'red'}}>*</span></label>
                <input type="text" style={inputStyle} />
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 200px', maxWidth: 'calc(50% - 0.75rem)' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Pincode <span style={{color: 'red'}}>*</span></label>
                <input type="text" style={inputStyle} />
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button style={{
            backgroundColor: '#571a15',
            color: 'white',
            border: 'none',
            padding: '12px 32px',
            fontSize: '1.1rem',
            borderRadius: '100px',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Submit Details
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '8px 0',
  border: 'none',
  borderBottom: '1px solid #ccc',
  fontSize: '1rem',
  color: '#333',
  outline: 'none',
  backgroundColor: 'transparent'
};
