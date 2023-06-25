const API_BASE_URL = 'https://api.punkapi.com/v2/beers';
const PAGE_SIZE = 10;

async function getBeers(url = API_BASE_URL, page = 1) {
    let requestUrl;
    if (url === API_BASE_URL) {
        requestUrl = url + '/?';
    } else {
        requestUrl = url + '&';
    }
    requestUrl = `${requestUrl}page=${page}&per_page=${PAGE_SIZE}`;
    const response = await fetch(requestUrl);
    if (response.ok) {
        return await response.json();
    } else {
        return { error: response.statusText }
    }
}

export default { getBeers };