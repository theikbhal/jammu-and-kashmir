import React from 'react';
import TalukVillageList from '../TalukVillageList';
import dooruVillages from '../../data/dooruVillages.json'; // Adjust the path based on your project structure

const BijbeharaVillageList = () => {
    return (
        <div>
            <h1>Dooru Taluk Villages</h1>
            <TalukVillageList villages={dooruVillages} />
        </div>
    );
};

export default BijbeharaVillageList;
