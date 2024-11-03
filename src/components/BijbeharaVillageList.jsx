import React, { useEffect, useState } from 'react';
import villageData from '../data/bijbeharaVillages.json'; // Adjust the path to your JSON file accordingly

const BijbeharaVillageList = () => {
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
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Bijbehara Taluka Village List
        </h1>
        <input
          type="text"
          placeholder="Search villages..."
          className="p-2 border border-gray-300 rounded mb-4 w-full"
          value={filter}
          onChange={handleFilterChange}
        />
        <table className="min-w-full divide-y divide-gray-200 mb-4">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Village Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Population</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredVillages.map((village, index) => (
              <tr key={index}>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{village.name}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{village.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BijbeharaVillageList;
