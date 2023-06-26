import '../styles/BeerEntry.css';

function BeerEntry({ beer, setSelection }) {

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
        </button>
    );
}

export default BeerEntry;