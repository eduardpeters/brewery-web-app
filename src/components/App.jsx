import BeersDisplay from './BeersDisplay';
import '../styles/App.css';

function App() {

    return (
        <div className='app__container'>
            <h1 className='app__title'>Brewdog Brewery</h1>
            <h2 className='app__subtitle'>Our beer selection</h2>
            <BeersDisplay />
        </div>
    );
}

export default App;
