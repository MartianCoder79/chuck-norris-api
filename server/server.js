// const axios = require("axios");
import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
// const { request } = require('express');
import https from 'https';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 const chuckUrl = 'https://api.chucknorris.io/jokes/random';
 const chuckCategories = 'https://api.chucknorris.io/jokes/categories';

let joke = '';
let categories = '';

// gets jokes from chuck norris api
https.get(chuckUrl, (resp) => {
  resp.on('data', (chunk) => {
    joke += chunk;
  });
  resp.on('end', () => {
    console.log(JSON.parse(joke));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
app.get("/random", (req, res) => {
  res.json( joke);
})

//gets categories of jokes from the api
https.get(chuckCategories, (resp) => {
  resp.on('data', (chunk) => {
    categories += chunk;
  });
  resp.on('end', () => {
    console.log(JSON.parse(categories));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

app.get("/random", (req, res) => {
  res.json(categories);
})
app.get("/categories", (req, res) => {
  res.json(categories);
})

const port = 5001;

// react by default listens to port 3000, so we do port 5001 (why is 5000 already in use??) here.
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
