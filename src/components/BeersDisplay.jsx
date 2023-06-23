import { useEffect, useState } from 'react';
import BeersGrid from './BeersGrid';
import '../styles/BeersDisplay.css'; 

import json from '../../beers.json';

function BeersDisplay() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        setBeers(json);
    }, []);

    return (
        <div className='beers_display__container'>
            <BeersGrid beers={beers} />
        </div>
    );
}

export default BeersDisplay;