import { useCallback, useEffect, useState } from 'react';
import BeersDisplay from './BeersDisplay';
import BeersSearch from './BeersSearch';
import beersAPI from '../services/beersService';
import '../styles/App.css';

function App() {
    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState({ byName: true, searchString: '' })

    const getBeers = useCallback(async (page = 1) => {
        let response;
        if (query.searchString.length !== 0) {
            if (query.byName) {
                response = await beersAPI.getByName(query.searchString, page);
            } else {
                response = await beersAPI.getByFood(query.searchString, page);
            }
        } else {
            response = await beersAPI.getBeers({ page });
        }
        return response;
    }, [query]);

    useEffect(() => {
        async function getFirstPage() {
            const response = await getBeers();
            if (response.error) {
                console.error(response.error);
            } else {
                setBeers(response);
            }
        }
        getFirstPage();
    }, [query, getBeers]);

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
                    <BeersSearch query={query} setQuery={setQuery} />
                </div>
            </div>
            <h2 className='app__subtitle'>Our beer selection &#127866;</h2>
            {
                beers.length !== 0
                    ?
                    <BeersDisplay beers={beers} getNextBeers={getNextBeers} query={query} />
                    :
                    <h2 className='app__subtitle'>Oops... no matching beers found...</h2>
            }
        </div>
    );
}

export default App;
