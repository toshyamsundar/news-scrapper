# News Scraper - A Node JS application using Express and MongoDB

## About

The application uses cheerio to scrape and MongoDB to store the scraped data, which is then served to the front-end using node and express.

It is hosted on Heroku using mLab as add-on.

## Application Folder structure

```
.
|-- README.md
|-- models
|   |-- Article.js
|   |-- Note.js
|   `-- index.js
|-- package-lock.json
|-- package.json
|-- public
|   |-- css
|   |   `-- style.css
|   |-- images
|   |   `-- black-and-white-data-folded.jpg
|   |-- index.html
|   `-- js
|       `-- app.js
|-- routes
|   |-- api-routes.js
|   `-- html-routes.js
`-- server.js


```
## Prerequisites

- Verify you have node installed.
  ```
  $ node --version
  ```
- Download the repository to your computer
- Install dependencies using the Node Package Manager
  ```
  $ npm install
  ```

## How the application works

- After downloading the application and installing dependencies, start the server using
  ```
  $node server.js
  ```
- In your browser, type in the URL localhost:3000, which will launch the home page


