import BeersGrid from './BeersGrid';
import '../styles/BeersDisplay.css'; 

function BeersDisplay({ beers }) {
    return (
        <div className='beers_display__container'>
            <BeersGrid beers={beers} />
        </div>
    );
}

export default BeersDisplay;