export default function Surroundings() {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1rem' }}>
      <h1>Nearby Temples</h1>
      <p style={{ maxWidth: '800px', fontSize: '1.2rem', marginBottom: '3rem' }}>
        Extend your spiritual journey by visiting these magnificent and powerful temples 
        located in and around the Trichy and Tanjore regions.
      </p>

      <div className="grid grid-2">
        <div className="glass" style={{ padding: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)' }}>Thiruvanaikaval Jambukeswarar Temple</h2>
          <p>
            One of the five major Shiva Temples of Tamil Nadu representing the Mahābhūta or five great elements. 
            This temple represents the element of water (Appu Lingam).
          </p>
        </div>

        <div className="glass" style={{ padding: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)' }}>Rockfort Ucchi Pillayar Temple</h2>
          <p>
            A historic temple dedicated to Lord Ganesha built on a 3-billion-year-old rock. 
            It offers panoramic views of Trichy and Srirangam.
          </p>
        </div>

        <div className="glass" style={{ padding: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)' }}>Samayapuram Mariamman Temple</h2>
          <p>
            A very popular and powerful temple dedicated to Goddess Mariamman, located 
            on the outskirts of Trichy.
          </p>
        </div>
        
        <div className="glass" style={{ padding: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)' }}>Uraiyur Vekkali Amman Temple</h2>
          <p>
            A unique and powerful temple in Uraiyur (the ancient Chola capital) where the sanctum 
            of the Goddess does not have a roof, symbolizing her connection to the sky and nature.
          </p>
        </div>
        
        <div className="glass" style={{ padding: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)' }}>Vayalur Murugan Temple</h2>
          <p>
            Located amidst lush green fields, this peaceful temple dedicated to Lord Murugan 
            is associated with the great saint Arunagirinathar.
          </p>
        </div>

        <div className="glass" style={{ padding: '2rem' }}>
          <h2 style={{ color: 'var(--primary-color)' }}>Tanjore Brahadeswara Temple</h2>
          <p>
            Also known as the Peruvudaiyar Kovil, this UNESCO World Heritage Site is one of the 
            largest and most magnificent Chola temples, located in Thanjavur.
          </p>
        </div>
      </div>
    </div>
  );
}
