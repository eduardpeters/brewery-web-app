import { useState } from 'react';
import { SearchIcon, CloseIcon } from './Icons';
import '../styles/BeersSearch.css';

function BeersSearch({ query, setQuery }) {
    const [showInput, setShowInput] = useState(false);
    const [searchByName, setSearchByName] = useState(true);
    const [searchInput, setSearchInput] = useState('');

    function handleIconClick() {
        setShowInput(!showInput);
    }

    function toggleSearchOption(event, byName) {
        event.preventDefault();
        setSearchByName(byName);
    }

    function handleSearch(event) {
        event.preventDefault();
        const query = {
            byName: searchByName,
            searchString: searchInput,
        }
        setQuery(query);
        setShowInput(false);
    }

    return (
        <div className='search__container'>
            <div className='search__top_container'>
                <button
                    className='search__icon'
                    onClick={handleIconClick}
                    title={`${showInput ? 'Hide' : 'Show'} search box`}
                >
                    <span className='search__icon-text'>Search beers</span>
                    {showInput ? <CloseIcon /> : <SearchIcon />}
                </button>
                {query.searchString.length !== 0 &&
                    <button
                        className='search__clear'
                        onClick={() => setQuery({ ...query, searchString: '' })}
                        title='Clear search results'
                    >
                        Clear search
                    </button>
                }
            </div>
            {showInput &&
                <form
                    className='search__form'
                    onSubmit={event => handleSearch(event)}
                >
                    <label htmlFor='search_input'>{`Search by ${searchByName ? 'beer name' : 'food pairing'}`}</label>
                    <input
                        className='search__input'
                        id='search_input'
                        type='text'
                        onChange={event => setSearchInput(event.target.value)}
                        onKeyUp={event => event.key === 'Enter' && handleSearch(event)}
                    >
                    </input>
                    <div className='search__options'>
                        <button
                            onClick={event => toggleSearchOption(event, true)}
                            className={`option__button ${searchByName ? 'option__button-toggled' : 'option__button-not-toggled'}`}
                            title='Search by beer name'
                        >
                            Beer Name
                        </button>
                        <button
                            onClick={event => toggleSearchOption(event, false)}
                            className={`option__button ${searchByName ? 'option__button-not-toggled' : 'option__button-toggled'}`}
                            title='Search by food pairing'
                        >
                            Food Pairing
                        </button>
                    </div>
                    <button
                        className='search__button'
                        type='submit'
                        title='Search beers'
                    >
                        Cheers!
                    </button>
                </form>
            }
        </div>
    );
}

export default BeersSearch;