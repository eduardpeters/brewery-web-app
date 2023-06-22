import BeersGrid from './BeersGrid';
import '../styles/BeersDisplay.css'; 

function BeersDisplay() {
    const elements = Array.from(Array(50).keys());

    return (
        <div className='beers_display__container'>
            <p>Search Box</p>
            <BeersGrid beers={elements} />
        </div>
    );
}

export default BeersDisplay;