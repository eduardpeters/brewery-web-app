import { useEffect, useRef, useState } from 'react';
import BeerProfile from './BeerProfile';
import BeersGrid from './BeersGrid';
import '../styles/BeersDisplay.css';

const DISPLAY_PAGE_SIZE = 10;

function BeersDisplay({ beers }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageBeers, setPageBeers] = useState([]);
    const [selection, setSelection] = useState({});
    const profileDialogRef = useRef(null);

    useEffect(() => {
        const slice = beers.slice(DISPLAY_PAGE_SIZE * (currentPage - 1), DISPLAY_PAGE_SIZE * currentPage);
        setPageBeers(slice);
    }, [currentPage, beers])

    useEffect(() => {
        if (Object.keys(selection).length == 0 || !profileDialogRef.current)
            return;
        profileDialogRef.current.showModal();
    }, [selection]);

    function handlePageChange(requestedPage) {
        if (requestedPage < 1)
            return;
        if (requestedPage > currentPage && beers.length % 10 != 0)
            return;
        console.log("Will move to page: ", requestedPage);
    }

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
                <BeersGrid beers={pageBeers} setSelection={setSelection} />
            </div>
            <div className='beers_display__pages'>
                <button
                    className='page__button'
                    onClick={() => handlePageChange(currentPage - 1)}
                    title='Load previous page'
                >
                    Previous page
                </button>
                <button
                   className='page__button'
                   onClick={() => handlePageChange(currentPage + 1)}
                   title='Load previous page' 
                >
                    Next page
                </button>
            </div>
        </>
    );
}

export default BeersDisplay;