import React, { useState } from 'react';

const App = () => {
  const districts = [
    'Anantnag',
    'Bandipora',
    'Baramulla',
    'Budgam',
    'Doda',
    'Ganderbal',
    'Jammu',
    'Kathua',
    'Kishtwar',
    'Kulgam',
    'Kupwara',
    'Poonch',
    'Pulwama',
    'Rajouri',
    'Ramban',
    'Reasi',
    'Samba',
    'Shopian',
    'Srinagar',
    'Udhampur'
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredDistricts = districts.filter(district =>
    district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1>Jammu & Kashmir Districts</h1>
      <input
        type="text"
        placeholder="Search districts..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={styles.searchBox}
      />
      <ul style={styles.list}>
        {filteredDistricts.map((district, index) => (
          <li key={index} style={styles.listItem}>{district}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
  },
  searchBox: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    fontSize: '16px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
};

export default App;
