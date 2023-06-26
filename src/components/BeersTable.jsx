import BeerEntry from './BeerEntry';
import '../styles/BeersTable.css';

function BeersTable({ beers, setSelection }) {

    return (
        <div className='beers_table__container'>
            {beers.map(beer => <BeerEntry key={beer.id} beer={beer} setSelection={setSelection} />)}
        </div>
    );
}

export default BeersTable;