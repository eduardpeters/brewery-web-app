import { useState } from 'react';
import '../styles/BeerProfile.css';
import { CloseIcon, CollapseIcon, ExpandIcon } from './Icons';

function BeerProfile({ beer, setSelection, dialogElement }) {
    const [showPairings, setShowPairings] = useState(false);

    function handleClose() {
        setShowPairings(false);
        setSelection({});
        dialogElement.close();
    }

    return (
        <main className='profile__container'>
            <h1 className='profile__name' autoFocus tabIndex='0'>{beer.name}</h1>
            <div className='profile__default'>
                <img
                    autoFocus
                    className='profile_image'
                    src={beer.image_url}
                    alt={`A ${beer.name} beer`}
                />
                <div className='default__texts'>
                    <p className='profile__tagline'>{beer.tagline}</p>
                    <div className='profile__horizontal'>
                        <p className='profile__attribute profile__attribute-short'>
                            <span className='attribute__name'>ABV </span>{beer.abv}%
                        </p>
                        <p className='profile__attribute profile__attribute-short'>
                            <span className='attribute__name'>IBU </span>{beer.ibu}
                        </p>
                        <p className='profile__attribute profile__attribute-short'>
                            <span className='attribute__name'>Since </span>{beer.first_brewed}
                        </p>
                    </div>
                    <p className='profile__attribute'>
                        <span className='attribute__name'>Description - </span>{beer.description}
                    </p>
                    <button
                        className='profile__pairings-btn'
                        onClick={() => setShowPairings(!showPairings)}
                        title={`${showPairings ? 'Hide' : 'Show'} food pairings`}
                    >
                        {showPairings ? <CollapseIcon /> : <ExpandIcon />}
                        Food pairings
                    </button>
                    {showPairings &&
                        <ul className='pairings__list'>
                            {beer.food_pairing.map(food => <li key={food}>{food}</li>)}
                        </ul>}
                </div>
            </div>
            <button
                className='profile__close'
                onClick={handleClose}
                title='Close profile'
            >
                <CloseIcon />
                Close
            </button>
        </main>
    );
}

export default BeerProfile;