import { useState } from "react";
import BeersGrid from "./BeersGrid";
import BeersTable from "./BeersTable";
import { GridIcon, TableIcon } from "./Icons";
import '../styles/BeersView.css';

function BeersView({ beers, setSelection }) {
    const [gridView, setGridView] = useState(true);

    return (
        <>
            <button
                className='view__switcher'
                onClick={() => setGridView(!gridView)}
                title={`Change to ${gridView ? 'table' : 'grid'} view`}
            >
                {gridView ? <TableIcon /> : <GridIcon />}
                <span className='view__switcher-text'>
                    {`Show in ${gridView ? 'table' : 'grid'} view`}
                </span>
            </button>
            {
                gridView
                    ?
                    <BeersGrid beers={beers} setSelection={setSelection} />
                    :
                    <BeersTable beers={beers} setSelection={setSelection} />
            }
        </>
    );
}

export default BeersView;