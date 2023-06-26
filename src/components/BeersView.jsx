import BeersGrid from "./BeersGrid";

function BeersView({ beers, setSelection }) {
    return (
        <BeersGrid beers={beers} setSelection={setSelection} />
    );
}

export default BeersView;