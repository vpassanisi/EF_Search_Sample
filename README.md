# ef-search-app

This is Vincent Passanisi's submission for the Everything Food code sample. All default scripts were used and can be seen below.

I used `tailwind.config.js` in the root directory to configure Tailwind. I extended the default Tailwind theme with a few classes, and I overwrote the default Tailwind color palette with my own color palette that follows the material design spec.

The html is fully responsive and works well on any screen from desktop to mobile.

# Functionality

To begin, simply type any search terms into the field in the navbar at the top and press enter, or click the search button. Nuxt will make a request to the provided API endpoint with your entered search term in the query string. You can then sort alphabetically by the products name, or by the products ABBScore. In addition, you can fillter the products by brand from the list which is created when the products load. On mobile screens, the filter section scrolls if it gets too long. The app always loads the first 20 products automatically, then you can load the next ten poducts by clicking the button at the end of the list of products.

If the product has more than one vendor price, the app lists a range of prices and displays the lowest price and the highest price separated by a dash. If no price is listed nothing will be rendered.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
