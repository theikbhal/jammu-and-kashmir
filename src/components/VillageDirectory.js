// src/components/VillageDirectory.js

import React, { useState } from 'react';

const VillageDirectory = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const villages = [
        { district: "Anantnag", censusCode: "014", numOfVillages: 342 },
        { district: "Badgam", censusCode: "002", numOfVillages: 474 },
        { district: "Bandipore", censusCode: "009", numOfVillages: 122 },
        { district: "Baramula", censusCode: "008", numOfVillages: 518 },
        { district: "Doda", censusCode: "016", numOfVillages: 406 },
        { district: "Ganderbal", censusCode: "011", numOfVillages: 115 },
        { district: "Jammu", censusCode: "021", numOfVillages: 852 },
        { district: "Kargil", censusCode: "004", numOfVillages: 127 },
        { district: "Kathua", censusCode: "007", numOfVillages: 512 },
        { district: "Kishtwar", censusCode: "018", numOfVillages: 157 },
        { district: "Kulgam", censusCode: "015", numOfVillages: 231 },
        { district: "Kupwara", censusCode: "001", numOfVillages: 362 },
        { district: "Leh(Ladakh)", censusCode: "003", numOfVillages: 112 },
        { district: "Pulwama", censusCode: "012", numOfVillages: 329 },
        { district: "Punch", censusCode: "005", numOfVillages: 178 },
        { district: "Rajouri", censusCode: "006", numOfVillages: 385 },
        { district: "Ramban", censusCode: "017", numOfVillages: 129 },
        { district: "Reasi", censusCode: "020", numOfVillages: 255 },
        { district: "Samba", censusCode: "022", numOfVillages: 376 },
        { district: "Shupiyan", censusCode: "013", numOfVillages: 229 },
        { district: "Srinagar", censusCode: "010", numOfVillages: 11 },
        { district: "Udhampur", censusCode: "019", numOfVillages: 331 },
    ];

    // Filter the villages based on the search term
    const filteredVillages = villages.filter(village =>
        village.district.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-2">Vill Jammu and Kashmir</h1>
            <h2 className="text-xl font-semibold mb-4">Jammu and Kashmir Village Directory</h2>
            <p className="mb-4">As per 2011 Census Data, 6553 villages are in Jammu and Kashmir state/union territory of India.</p>
            
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search District..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-md p-2 mb-4 w-full md:w-1/2"
            />

            <table className="min-w-full border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-200 px-4 py-2">Sl. No.</th>
                        <th className="border border-gray-200 px-4 py-2">District Name</th>
                        <th className="border border-gray-200 px-4 py-2">Census Code</th>
                        <th className="border border-gray-200 px-4 py-2">No. of Villages</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredVillages.map((village, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-200 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-200 px-4 py-2">{village.district}</td>
                            <td className="border border-gray-200 px-4 py-2">{village.censusCode}</td>
                            <td className="border border-gray-200 px-4 py-2">{village.numOfVillages}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <footer className="mt-6">
                <p className="text-sm text-gray-600">All survey data of Jammu and Kashmir villages are based on the Office of the Registrar General & Census Commissioner, Ministry of Home Affairs, Government of India, 2015 (censusindia.gov.in). Open Government Data Platform India. Published under National Data Sharing and Accessibility Policy (NDSAP).</p>
                <p className="text-sm text-gray-600">Copyright © 2020-2021 Vill (vill.co.in). All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default VillageDirectory;
