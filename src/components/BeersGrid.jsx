import BeerCard from './BeerCard';
import '../styles/BeersGrid.css';

function BeersGrid({ beers, setSelection }) {

    return (
        <div className='beers_grid__container'>
            {beers.map(beer => <BeerCard key={beer.id} beer={beer} setSelection={setSelection} />)}
        </div>
    );
}

export default BeersGrid;