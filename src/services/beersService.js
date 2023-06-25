const API_BASE_URL = 'https://api.punkapi.com/v2/beers';

async function getBeers(url = API_BASE_URL) {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    } else {
        return { error: response.statusText }
    }
}

export default { getBeers };