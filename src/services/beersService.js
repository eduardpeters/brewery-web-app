const API_BASE_URL = 'https://api.punkapi.com/v2/beers';
const PAGE_SIZE = 30;

/*
The getBeers function must normalize the page to request, since it requests
more beers than are displayed per page to reduce request volume
Therefore, normalizedPage corrects for the current ratio of 30 beers requested
per 10 beers displayed beyond the first page.
*/
async function getBeers({ url = API_BASE_URL, page = 1 } = {}) {
    let requestUrl;
    if (url === API_BASE_URL) {
        requestUrl = url + '/?';
    } else {
        requestUrl = url + '&';
    }
    const normalizedPage = page === 1 ? page : (page + 2) / 3;
    requestUrl = `${requestUrl}page=${normalizedPage}&per_page=${PAGE_SIZE}`;
    const response = await fetch(requestUrl);
    if (response.ok) {
        return await response.json();
    } else {
        return { error: response.statusText }
    }
}

export default { getBeers };