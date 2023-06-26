import { useEffect, useRef, useState } from 'react';
import BeerProfile from './BeerProfile';
import '../styles/BeersDisplay.css';
import BeersView from './BeersView';

const DISPLAY_PAGE_SIZE = 10;

function BeersDisplay({ beers, getNextBeers, query }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageBeers, setPageBeers] = useState([]);
    const [selection, setSelection] = useState({});
    const profileDialogRef = useRef(null);

    useEffect(() => {
        setCurrentPage(1);
    }, [query]);

    useEffect(() => {
        const slice = beers.slice(DISPLAY_PAGE_SIZE * (currentPage - 1), DISPLAY_PAGE_SIZE * currentPage);
        setPageBeers(slice);
        window.scrollTo(0, 0);
    }, [currentPage, beers]);

    useEffect(() => {
        if (Object.keys(selection).length == 0 || !profileDialogRef.current)
            return;
        profileDialogRef.current.showModal();
    }, [selection]);

    async function handlePageChange(requestedPage) {
        if (requestedPage < 1)
            return;
        if (requestedPage > currentPage) {
            if (beers.length % DISPLAY_PAGE_SIZE !== 0)
                return;
            if ((DISPLAY_PAGE_SIZE * (requestedPage - 1)) >= beers.length) {
                await getNextBeers(requestedPage);
            }
        }
        setCurrentPage(requestedPage);
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
            <BeersView beers={pageBeers} setSelection={setSelection} />
            <div className='beers_display__pages'>
                {
                    currentPage > 1 &&
                    <button
                        className='page__button'
                        onClick={() => handlePageChange(currentPage - 1)}
                        title='Load previous page'
                    >
                        Previous page
                    </button>
                }
                {
                    beers.length % 10 === 0 &&
                    <button
                        className='page__button'
                        onClick={() => handlePageChange(currentPage + 1)}
                        title='Load previous page'
                    >
                        Next page
                    </button>
                }
            </div>
        </>
    );
}

export default BeersDisplay;