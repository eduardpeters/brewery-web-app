import '../styles/BeerEntry.css';

import { SCREEN_BREAK_POINT } from '../constants/constants';

function BeerEntry({ beer, setSelection, screenSize }) {

    return (
        <button
            className='beer_entry__container'
            onClick={() => setSelection(beer)}
            title={`Show ${beer.name}`}
        >
            <h3 className='beer_entry__name'>{beer.name}</h3>
            <div className='entry_image__container'>
                <img
                    className='beer_entry__image'
                    src={beer.image_url}
                    alt={`A ${beer.name} beer`}
                />
            </div>
            <p className='beer_entry__tagline'>{beer.tagline}</p>
            {
                screenSize.width >= SCREEN_BREAK_POINT &&
                <>
                    <p className='beer_entry__more'>{beer.abv}%</p>
                    <p className='beer_entry__more'>{beer.ibu}</p>
                    <p className='beer_entry__more'>{beer.first_brewed}</p>
                </>
            }
        </button>
    );
}

export default BeerEntry;