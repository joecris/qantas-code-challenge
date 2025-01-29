This is the project for the Qantas senior engineer coding challenge.

The coding challenge instructions and files received can be found on the folder 'coding-challenge-files'.

This application was created with [Next.js](https://nextjs.org) using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Pre-requisites

- You would need [NodeJS](https://nodejs.org/en/download) and NPM installed on your machine to be able to run the application.

- After installing NodeJS and NPM, clone the project on your local machine.

- You would then need to install the dependencies by running 'npm install' once on the root directory.

## Getting Started
Run the development server using the command below:

```bash
npm run dev
```

This will start the application on port 3000 by default.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Running Tests

To run the tests, use the command

```bash
npm run test
```

## Project solution notes

The approach I have taken in building the requirements are the following:

First, from the given page mockup, I started with the general mental model of how I might organise the page and component structure and I came up with the following

```
Hotel Offers Page
+-------------------------------------------+
|  +-------------------------------------+  |
|  |     MainHeader                      |  |
|  |_____________________________________|  |
|  +-------------------------------------+  |
|  |     HotelOffers Component           |  |
|  |_____________________________________|  |
|___________________________________________|
```

The MainHeader component is simply a "header navigation bar" with the Qantas logo.

```
HotelOffers Components
+-------------------------------------------+
|  +-------------------------------------+  |
|  |     HotelOffersHeader               |  |
|  |_____________________________________|  |
|  +-------------------------------------+  |
|  |     HotelOffersList                 |  |
|  |_____________________________________|  |
|___________________________________________|
```

The **HotelOffersHeader** component will contain the 'summary text' of how many hotels are on the list for the location (ex. '5 hotels in Sydney.') and the select input for sorting by price.

The **HotelOffersList** will display the **HotelOfferCard** for each of the hotel offers on the retrieved list.

A flexbox approach was used to organise the "parts" of the HotelOfferCard

```
HotelOfferCard
+-------------------------------------------+
|  +------+ +----------------------------+  |
|  |      | | CardDetails                |  |
|  | Card | |                            |  |
|  | Image| |                            |  |
|  |      | |                            |  |
|  |______| |____________________________|  |
|___________________________________________|
```

**Note: A bit of responsive layout was attempted where for smaller width screens the CardImage goes on top of the CardDetails**

The **CardDetails** also used flexbox approach to handle the layout.

The **RatingsComponent** converts the given "type" and value to visual representations of either a "star" or "circle" icons. Main consideration when the component was implemented was that the ratings value can have a "half" rating (ex. 4.5). 

Note: SVGs where used to implement the RatingsIcon component and was taken from the [Qantas Hotels](https://www.qantas.com/hotels?mid=c1h) website.

Additional "helper/utility" functions where implemented to help get the display values from the raw values (ex. hotel name, price, etc.). These utility functions are simple at present adn may seem unnecessary, but I thought it would be good to create them because of high chance that these "raw-to-display" value conversions might change.