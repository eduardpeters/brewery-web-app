import { useEffect, useState } from 'react';
import BeersDisplay from './BeersDisplay';
import BeersSearch from './BeersSearch';
import '../styles/App.css';

import json from '../../beers.json';

function App() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        setBeers(json);
    }, []);

    return (
        <div className='app__container'>
            <div className='app__topbar'>
                <h1 className='app__title'>Brewdog Brewery</h1>
                <div className='buttons__container'>
                    <BeersSearch /> 
                </div>
            </div>
            <h2 className='app__subtitle'>Our beer selection &#127866;</h2>
            <BeersDisplay beers={beers} />
        </div>
    );
}

export default App;
