import useWindowSize from '../hooks/useWindowSize';
import '../styles/BeerEntry.css';

const SCREEN_BREAK_POINT = 768;

function BeerEntry({ beer, setSelection }) {
    const screenSize = useWindowSize();

    return (
        <button
            className='beer_entry__container'
            onClick={() => setSelection(beer)}
            title={`Show ${beer.name}`}
        >
            <h3 className='beer_entry__name'>{beer.name}</h3>
            <img
                className='beer_entry__image'
                src={beer.image_url}
                alt={`A ${beer.name} beer`}
            />
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