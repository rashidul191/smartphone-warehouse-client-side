import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {id} = useParams();
    return (
        <div className='container my-5'>
            <h2>Inventory : {id}</h2>
        </div>
    );
};

export default Inventory;