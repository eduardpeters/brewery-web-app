import '../styles/BeerCard.css';

function BeerCard({ beer }) {

    return (
        <button
            className='beer_card__container'
            onClick={() => console.log(`Profile: ${beer.name}`)}
            title={`Show ${beer.name}`}
        >
            <img
                className='beer_image'
                src={beer.image_url}
                alt={`A ${beer.name} beer`}
            />
            <h3 className='beer__name'>{beer.name}</h3>
            <p className='beer__tagline'>{beer.tagline}</p>
        </button>
    );
}

export default BeerCard;