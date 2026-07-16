export default function About() {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1rem' }}>
      <h1>About Sri Ranganathaswamy Temple</h1>
      <p style={{ maxWidth: '800px', fontSize: '1.2rem', marginBottom: '2rem' }}>
        Srirangam Temple is often listed as the largest functioning Hindu temple in the world. 
        Located on an island bounded by the Kaveri river and Kollidam river, it is dedicated to 
        Ranganatha, a reclining form of the Hindu deity Vishnu.
      </p>
      
      <div className="grid grid-2" style={{ gap: '2rem' }}>
        <div className="glass" style={{ padding: '2rem' }}>
          <h2>Architecture</h2>
          <p>
            The temple occupies an area of 156 acres (63 ha) with a perimeter of 4,116m (10,710 feet), 
            making it the largest temple in India and one of the largest religious complexes in the world. 
            It is enclosed by 7 concentric walls (prakarams) and features 21 towering gopurams.
          </p>
        </div>
        <div className="glass" style={{ padding: '2rem' }}>
          <h2>History & Legend</h2>
          <p>
            According to legend, the idol of Lord Ranganatha was originally worshipped by Lord Rama and 
            given to Vibhishana. When Vibhishana was carrying it to Lanka, he placed it on the ground at Srirangam. 
            The idol became permanently rooted there, facing south towards Lanka.
          </p>
        </div>
      </div>
    </div>
  );
}
