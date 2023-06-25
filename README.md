# brewery-web-app

## Description
This is a technical challenge making use of the [Punk API](https://punkapi.com/) to develop an application to browse available beers. It is built as a Single Page Application with React.

## Set up
Setting up the project locally is simple (bear in mind you will need [Nodejs](https://nodejs.org/en) installed beforehand):
- Clone the respository using `git clone` and `cd` into its directory 
- Run `npm install` to install the dependencies
- Run `npm run dev` to start the local development server
- Visit http://localhost:5173/ to view the application

## Development comments
React was chosen for this project as it provides a simple yet powerful tooling to develop web applications.
The project is structured around the App component, tasked with controlling the information fetched from the API and distributing it to its children components.

From the App component, the BeersDisplay component received what beers need to be rendered and this one in turn controls how they will be rendered (Card Grid or Table View). This component also holds a modal for when a beer is selected to show its profile with more detailed information.

Next to the BeersDisplay component is the BeersSearch component, which exposes a form to the user so that searches for beer name or food pairings may be made. The choice made here is lifted up to the App component to handle the new state of beers fetched from the API based on these queries.