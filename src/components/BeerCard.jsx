import '../styles/BeerCard.css';

function BeerCard({ beer }) {

    return (
        <div className='beer_card__container'>
            <img
                className='beer_image'
                src={beer.image_url}
                alt={`A ${beer.name} beer`}
            />
            <h3 className='beer__name'>{beer.name}</h3>
            <p className='beer__tagline'>{beer.tagline}</p>
        </div>
    );
}

export default BeerCard;