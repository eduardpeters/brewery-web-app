# brewery-web-app

## Description
This is a technical challenge making use of the [Punk API](https://punkapi.com/) to develop an application to browse available beers. It is built as a Single Page Application with React.

---

## Set up
Setting up the project locally is simple (bear in mind you will need [Nodejs](https://nodejs.org/en) installed beforehand):
- Clone the respository using `git clone` and `cd` into its directory 
- Run `npm install` to install the dependencies
- Run `npm run dev` to start the local development server
- Visit http://localhost:5173/ to view the application

---

## Development comments
React was chosen for this project as it provides a simple yet powerful tooling to develop web applications.
The project is structured around the App component, tasked with controlling the information fetched from the API and distributing it to its children components.

From the App component, the BeersDisplay component received what beers need to be rendered and this one in turn controls how they will be rendered (Card Grid or Table View). This component also holds a modal for when a beer is selected to show its profile with more detailed information.

Next to the BeersDisplay component is the BeersSearch component, which exposes a form to the user so that searches for beer name or food pairings may be made. The choice made here is lifted up to the App component to handle the new state of beers fetched from the API based on these queries.

API requests are sent using the native fetch API, as a lightweight option to send the GET requests required. For this a beersService file was written with functions to handle name or food queries, as well as the actual fetching function.
To reduce request volume, 30 beers are requested on each API call and these are stored with all previous results as pages advance to avoid requesting when moving back and forth between already visited pages.

---

## App improvements suggestions
- Sort results by a property such as ABV, IBU, etc.
- Let user choose page size
- Have a beer profile side by side compare button
- Place a beer order inside the app

---

### Pending bonus features approaches
**Select properties to display in card** is a feature I would approach by having the BeersGrid parent component hold a form where the user selects which properties they want to display in the card. This is stored in a state as an options object that is passed down to the BeerCard component to conditionally render the properties as specified by the user.

**Bookmarks and favorites filter** could be implementing by having each card and/or profile hold a bookmark button to identify favorites. I would store these favorites as an array of beer IDs in localStorage and use it to filter the API response array. This would be achieved by filtering the beers array to only keep those IDs that are contained within the user's favorite array. 

A filter button can be placed in the BeersDisplay so that displayed beers are only those contained in the array. The drawback here is that there could be none or very few beers left, depending on number of bookmarks and amount of beers already fetched.

Alternatively, an option in the main page can be set up to show all the user's bookmarks, fetching all beers from the API. This could be achieved with the API using the `ids` query parameter where all of the bookmarked IDs could be sent to the API as a string list to retrieve them.