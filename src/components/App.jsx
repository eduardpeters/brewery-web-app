import { useEffect, useState } from 'react';
import BeersDisplay from './BeersDisplay';
import BeersSearch from './BeersSearch';
import beersAPI from '../services/beersService';
import '../styles/App.css';

function App() {
    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState({ byName: true, searchString: '' })

    useEffect(() => {
        async function getFirstPage() {
            const response = await getBeers();
            if (response.error) {
                console.error(beers.error);
            } else {
                setBeers(response);
            }
        }
        getFirstPage();
    }, [query]);

    async function getBeers(page = 1) {
        let beers;
        if (query.searchString.length !== 0) {
            if (query.byName) {
                beers = await beersAPI.getByName(query.searchString, page);
            } else {
                beers = await beersAPI.getByFood(query.searchString, page);
            }
        } else {
            beers = await beersAPI.getBeers({ page });
        }
        return beers;
    }

    async function getNextBeers(page) {
        const nextBeers = await getBeers(page);
        if (nextBeers.error) {
            console.error(beers.error);
        } else {
            setBeers([...beers, ...nextBeers]);
        }
    }

    return (
        <div className='app__container'>
            <div className='app__topbar'>
                <h1 className='app__title'>Brewdog Brewery</h1>
                <div className='buttons__container'>
                    <BeersSearch setQuery={setQuery} />
                </div>
            </div>
            <h2 className='app__subtitle'>Our beer selection &#127866;</h2>
            <BeersDisplay beers={beers} getNextBeers={getNextBeers} />
        </div>
    );
}

export default App;
