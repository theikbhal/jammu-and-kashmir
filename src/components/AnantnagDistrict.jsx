import React from 'react';
import { Link } from 'react-router-dom'; // Adjust this import if using Next.js or another routing library

const AnantnagDistrict = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          The Indian Village Information Directory for State, District and Taluka of India.
        </h1>
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-2">
          Vill Jammu and Kashmir Anantnag
        </h2>
        <h3 className="text-lg text-center text-gray-600 mb-4">
          Anantnag District Village Directory
        </h3>
        <p className="text-center text-gray-600 mb-4">
          As per 2011 Census Data, 342 villages are in Anantnag District of Jammu and Kashmir, India. These villages are located in the Anantnag, Bijbehara, Dooru, Kokernag, Pahalgam, and Shangus talukas. The total population of this district is 795,805+.
        </p>

        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Taluka-wise Village List with Census Taluka Codes
        </h4>
        <table className="min-w-full divide-y divide-gray-200 mb-4">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Sl. No.</th>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Taluka Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Census Code</th>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">No. of Villages</th>
              <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider">Tehsil Population+</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">1</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                <Link to="/villages/bijbehara" className="text-blue-500 hover:underline">
                  Anantnag
                </Link>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">00055</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">86</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">179530</td>
            </tr>
            <tr>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">2</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                <Link to="/villages/bijbehara" className="text-blue-500 hover:underline">
                  Bijbehara
                </Link>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">00054</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">52</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">112197</td>
            </tr>
            <tr>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">3</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">Dooru</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">00058</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">62</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">166590</td>
            </tr>
            <tr>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">4</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
              <Link to="/villages/kokernag" className="text-blue-500 hover:underline">
              Kokernag
                </Link>
              </td>
              
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">00057</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">51</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">167159</td>
            </tr>
            <tr>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">5</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">Pahalgam</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">00053</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">66</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">104101</td>
            </tr>
            <tr>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">6</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">Shangus</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">00056</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">25</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">66228</td>
            </tr>
          </tbody>
        </table>

        <p className="text-sm text-gray-600">
          +: Some village population data are not available. This is an approximate District/Taluka population data, according to the 2011 Census of India.
        </p>
        <p className="text-xs text-gray-500 mt-4">
          All survey data of Anantnag District villages are based on the Office of the Registrar General & Census Commissioner, Ministry of Home Affairs, Government of India, 2015 (censusindia.gov.in). Open Government Data Platform India. Published under National Data Sharing and Accessibility Policy (NDSAP).
        </p>
        <p className="text-xs text-gray-500 mt-4">
          Copyright © 2020-2021 Vill (vill.co.in). All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default AnantnagDistrict;
