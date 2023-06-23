import BeersDisplay from './BeersDisplay';
import '../styles/App.css';

function App() {

    return (
        <div className='app__container'>
            <div className='app__topbar'>
                <h1 className='app__title'>Brewdog Brewery</h1>
                <div>
                    Icons!
                </div>
            </div>
            <h2 className='app__subtitle'>Our beer selection</h2>
            <BeersDisplay />
        </div>
    );
}

export default App;
