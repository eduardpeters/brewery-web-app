import BeerEntry from './BeerEntry';
import useWindowSize from '../hooks/useWindowSize';
import '../styles/BeersTable.css';

import { SCREEN_BREAK_POINT } from '../constants/constants';

function BeersTable({ beers, setSelection }) {
    const screenSize = useWindowSize();

    return (
        <div className='beers_table__container'>
            <div className='beers_table__headers'>
                <p className='table__header'>Name</p>
                <p className='table__header'>Image</p>
                <p className='table__header'>Tag Line</p>
                {
                    screenSize.width >= SCREEN_BREAK_POINT &&
                    <>
                        <p className='table__header'>ABV</p>
                        <p className='table__header'>IBU</p>
                        <p className='table__header'>Since</p>
                    </>
                }
            </div>
            {beers.map(beer => <BeerEntry key={beer.id} beer={beer} setSelection={setSelection} screenSize={screenSize} />)}
        </div>
    );
}

export default BeersTable;