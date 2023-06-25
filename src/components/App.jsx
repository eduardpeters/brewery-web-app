import { useEffect, useState } from 'react';
import BeersDisplay from './BeersDisplay';
import BeersSearch from './BeersSearch';
import beersAPI from '../services/beersService';
import '../styles/App.css';

function App() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        async function getBeers() {
            const beers = await beersAPI.getBeers();
            if (beers.error) {
                console.error(beers.error);
            } else {
                setBeers(beers);
            }
        }
        getBeers();
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
