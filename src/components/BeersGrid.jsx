function BeersGrid( { beers }) {

    return (
        <div className='beer_grid__container'>
            {beers.map(beer => <p key={beer}>Beer Card {beer}</p>)}
        </div>
    );
}

export default BeersGrid;