import React, { useEffect, useState } from 'react';
import villageData from '../data/bijbeharaVillages.json'; // Adjust the path to your JSON file accordingly

const VillageList = () => {
  const [villages, setVillages] = useState([]);
  const [filteredVillages, setFilteredVillages] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Load villages from the imported JSON file
    setVillages(villageData.villages);
    setFilteredVillages(villageData.villages); // Initialize filtered villages
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);
    setFilteredVillages(
      villages.filter((village) => village.name.toLowerCase().includes(value))
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          The Indian Village Information Directory for State, District and Taluka of India.
        </h1>
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-2">
          Vill Jammu and Kashmir Anantnag Bijbehara
        </h2>
        <h3 className="text-lg text-center text-gray-600 mb-4">
          Bijbehara Taluka Village Directory
        </h3>
        <input
          type="text"
          placeholder="Filter villages..."
          value={filter}
          onChange={handleFilterChange}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Village Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Census Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Geographical Area (sq km)</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Population</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredVillages.map((village) => (
              <tr key={village.censusCode} className="hover:bg-gray-100 transition duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{village.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{village.censusCode}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{village.geographicalArea}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{village.population !== null ? village.population : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VillageList;
