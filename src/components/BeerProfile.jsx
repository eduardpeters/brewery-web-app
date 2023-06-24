function BeerProfile({ beer, setSelection, dialogElement }) {

    function handleClose() {
        setSelection({});
        dialogElement.close();
    }

    return (
        <div>
            <h1>PROFILE</h1>
            <h3 className='beer__name'>{beer.name}</h3>
            <p className='beer__tagline'>{beer.tagline}</p>
            <button onClick={handleClose}>Close</button>
        </div>
    );
}

export default BeerProfile;