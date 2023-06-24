import '../styles/BeerProfile.css';

function BeerProfile({ beer, setSelection, dialogElement }) {

    function handleClose() {
        setSelection({});
        dialogElement.close();
    }
    console.log(beer);
    return (
        <main className='profile__container'>
            <h1 className='profile__name'>{beer.name}</h1>
            <div className='profile__default'>
                <img
                    className='profile_image'
                    src={beer.image_url}
                    alt={`A ${beer.name} beer`}
                />
                <div className='default__texts'>
                    <p className='profile__tagline'>{beer.tagline}</p>
                    <div className='profile__horizontal'>
                        <p className='profile__attribute'>
                            <span className='attribute__name'>ABV - </span>{beer.abv}%
                        </p>
                        <p className='profile__attribute'>
                            <span className='attribute__name'>IBU - </span>{beer.ibu}
                        </p>
                    </div>
                    <p className='profile__attribute'>
                        <span className='attribute__name'>Description - </span>{beer.description}
                    </p>
                </div>
            </div>
            <button className='profile__close' onClick={handleClose}>Close</button>
        </main>
    );
}

export default BeerProfile;