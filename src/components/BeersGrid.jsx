import BeerCard from './BeerCard';

function BeersGrid( { beers }) {

    return (
        <div className='beer_grid__container'>
            {beers.map(beer => <BeerCard beer={beer}/>)}
        </div>
    );
}

export default BeersGrid;