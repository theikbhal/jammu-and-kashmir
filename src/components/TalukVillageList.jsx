import React, { useState } from 'react';

const TalukVillageList = ({ villages }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter villages based on the search term
    const filteredVillages = villages.filter(village =>
        village.villageName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-5 bg-yellow-300 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Villages List</h2>
            <input
                type="text"
                placeholder="Search villages..."
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table className="min-w-full border-collapse border border-green-600">
                <thead>
                    <tr className="bg-yellow-200 text-green-600">
                        <th className="border border-green-600 p-2">Village Name</th>
                        <th className="border border-green-600 p-2">Census Code</th>
                        <th className="border border-green-600 p-2">Geographical Area (sq km)</th>
                        <th className="border border-green-600 p-2">Population</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredVillages.length > 0 ? (
                        filteredVillages.map((village, index) => (
                            <tr key={index} className="hover:bg-yellow-100 transition duration-150">
                                <td className="border border-green-600 p-2 text-green-600">{village.villageName}</td>
                                <td className="border border-green-600 p-2 text-green-600">{village.censusCode}</td>
                                <td className="border border-green-600 p-2 text-green-600">{village.geographicalArea}</td>
                                <td className="border border-green-600 p-2 text-green-600">
                                    {village.population !== null ? village.population : 'Data not available'}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="border border-green-600 p-2 text-center text-gray-500">No villages found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TalukVillageList;
