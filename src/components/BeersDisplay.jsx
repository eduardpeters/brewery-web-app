import { useEffect, useRef, useState } from 'react';
import BeerProfile from './BeerProfile';
import BeersGrid from './BeersGrid';
import '../styles/BeersDisplay.css';

function BeersDisplay({ beers }) {
    const [selection, setSelection] = useState({});
    const profileDialogRef = useRef(null);

    useEffect(() => {
        if (Object.keys(selection).length == 0 || !profileDialogRef.current)
            return;
        profileDialogRef.current.showModal(); 
    }, [selection]);

    return (
        <>
            <dialog className='profile__dialog' ref={profileDialogRef}>
                <BeerProfile
                    beer={selection}
                    setSelection={setSelection}
                    dialogElement={profileDialogRef.current}
                />
            </dialog>
            <div className='beers_display__container'>
                <BeersGrid beers={beers} setSelection={setSelection} />
            </div>
        </>
    );
}

export default BeersDisplay;