import React from 'react';

const TutorList = () => {
  // अभी के लिए हम नकली डेटा (Dummy Data) इस्तेमाल कर रहे हैं
  const tutors = [
    { id: 1, name: "Amit Sharma", subject: "Mathematics", district: "South Delhi", rating: 4.8 },
    { id: 2, name: "Priya Singh", subject: "Physics", district: "Central Delhi", rating: 4.9 },
    { id: 3, name: "Rahul Verma", subject: "English", district: "West Delhi", rating: 4.5 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Available Tutors in Your District</h2>
      <div style={styles.grid}>
        {tutors.map((tutor) => (
          <div key={tutor.id} style={styles.card}>
            <div style={styles.avatar}>👤</div>
            <h3>{tutor.name}</h3>
            <p><strong>Subject:</strong> {tutor.subject}</p>
            <p><strong>District:</strong> {tutor.district}</p>
            <p><strong>Rating:</strong> ⭐ {tutor.rating}</p>
            <button style={styles.button}>Contact Tutor</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px' },
  title: { textAlign: 'center', marginBottom: '30px', color: '#333' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  },
  avatar: { fontSize: '40px', marginBottom: '10px' },
  button: {
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default TutorList;
