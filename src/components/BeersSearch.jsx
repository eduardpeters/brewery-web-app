import { useState } from 'react';
import { SearchIcon, CloseIcon } from './Icons';
import '../styles/BeersSearch.css';

function BeersSearch() {
    const [showInput, setShowInput] = useState(false);
    const [searchByName, setSearchByName] = useState(true);

    function handleIconClick() {
        setShowInput(!showInput);
    }

    function toggleSearchOption(byName) {
        setSearchByName(byName);
    }

    function handleSearch(event) {
        event.preventDefault();
        console.log("Now searching!");
    }

    return (
        <div className='search__container'>
            <button
                className='search__icon'
                onClick={handleIconClick}
                title={`${showInput ? 'Hide' : 'Show'} search box`}
            >
                <span className='search__icon-text'>Search beers</span>
                {showInput ? <CloseIcon /> : <SearchIcon />}
            </button>
            {showInput &&
                <form
                    className='search__form'
                    onSubmit={event => handleSearch(event)}
                >
                    <label htmlFor='search_input'>{`Search by ${searchByName ? 'beer name' : 'food pairing'}`}</label>
                    <input id='search_input' type='text' className='search__input'></input>
                    <div className='search__options'>
                        <button
                            onClick={() => toggleSearchOption(true)}
                            className={`option__button ${searchByName ? 'option__button-toggled' : 'option__button-not-toggled'}`}
                            title='Search by beer name'
                        >
                            Beer Name
                        </button>
                        <button
                            onClick={() => toggleSearchOption(false)}
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