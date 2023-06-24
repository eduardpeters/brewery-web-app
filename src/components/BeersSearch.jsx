import { useState } from 'react';
import { SearchIcon } from './Icons';
import '../styles/BeersSearch.css';

function BeersSearch() {
    const [showInput, setShowInput] = useState(false);

    function handleIconClick() {
        setShowInput(!showInput);
    }

    return (
        <div className='search__container'>
            <button
                onClick={handleIconClick}
                title='Show search box'
            >
                <SearchIcon />
            </button>
            {showInput &&
                <>
                    <input type='text'></input>
                    <button
                        onClick={() => console.log('Do search!')}
                        title='Search beers'
                    >
                        Cheers!
                    </button>
                </>
            }
        </div>
    );
}

export default BeersSearch;