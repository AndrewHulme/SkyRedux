# Sky Tech Test

## Acknowledgement

This product uses the TMDb API but is not endorsed or certified by TMDb.

## Description

An application which allows a user to search for a movie, tv show or actor and be presented with a list of search results. Uses the TMDb API to source the data.

## Technology Used

- JavaScript
- React
- Jest
- Enzyme
- Cypress
- Istanbul
- HTML
- CSS

## Acceptance Criteria

- AC1: When a user first lands on the page, they are presented with a search input field and a search button.

- AC2: When a user first lands on the page, the search input field has focus.

- AC3: A user may type any text into the search input field then click on the search button to initiate a search.

- AC4: A user may type any text into the search input field then press the enter key to initiate a search.

- AC5: The search input field and the search button are always present on screen during all interactions with the application.

- AC6: Upon initiating a search, the user is presented with the search results.

- AC7: Clicking on one of the results, shows more details of that result.

- AC8: The details page will show a full list of cross referential data, ie. a show details page will list all major cast members in that show, an actor details page will list all the shows that the actor has appeared in.

- AC9: On the details page, the user can click to to make onwards searches, ie. on a show detail page, the user can click on a cast member to be taken to that actor’s details page, on an actors details page, the user can click on any show to be taken to that show’s details page.

- AC10: Near the search input field and the search button, add an interface element to allow the user to filter the search results for only actors, only movies, only tv shows, or all.

- AC11: When a user is typing text into the search input field, after at least 5 characters have been entered, a list of clickable search suggestions is presented to the user.

- AC12: Clicking on a search suggestion takes the user straight to the details page for that suggestion.

## Installation

- Clone this repository
  `$ git clone git@github.com:AndrewHulme/SkyTechTest.git`
- Navigate to local repository
  `$ cd SkyTechTest`
- Install npm
- Install all dependencies
  `$ npm install`
- Register for an API key by signing up to the [TMDb website](https://developers.themoviedb.org/3/getting-started/introduction). Put the key in a file called `.env` in the root of the folder as `REACT_APP_TMDB_KEY="YOUR API KEY HERE"`
- Start the server
  `$ npm start`
- Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

## Testing

### End to End

- Start Cypress to run the tests
  `$ npx cypress open`
- Click on `Run all specs` in Cypress

### Unit

- Start the tests using `$ npm test`
- Type `a` to view all tests

## Test Coverage

### End to End

- Start Cypress to run the tests
  `$ npx cypress open`
- Click on `Run all specs` in Cypress
- Navigate to `coverage/lcov-report` and open the `index.html` file in a browser

### Unit

- Start the tests with coverage using `$ npm run test:coverage`
- Type `a` to view all tests
