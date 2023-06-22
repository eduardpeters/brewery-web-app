function BeerCard( { beer }) {

    return (
        <div className='beer_card__container'>
            <p>{beer.name}</p>
            <img src={beer.image_url} alt={`A ${beer.name} beer`} height={100} width={100} />
            <p>{beer.tagline}</p>
        </div>
    );
}

export default BeerCard;