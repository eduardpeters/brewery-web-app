import { useState } from 'react';
import Button from './Button';
import { SearchIcon } from './Icons';
import '../styles/BeersSearch.css';

function BeersSearch() {
    const [showInput, setShowInput] = useState(false);

    function handleIconClick() {
        setShowInput(!showInput);
    }

    return (
        <div className='search__container'>
            <Button
                onClick={handleIconClick}
                title='Show search box'
            >
                <SearchIcon />
            </Button>
            {showInput &&
                <>
                    <input type='text'></input>
                    <Button
                        onClick={() => console.log('Do search!')}
                        title='Search beers'
                    >
                        Cheers!
                    </Button>
                </>
            }
        </div>
    );
}

export default BeersSearch;