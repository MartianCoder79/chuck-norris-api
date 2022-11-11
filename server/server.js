import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
//import fetch from 'node-fetch'
import https from 'https';

const app = express()
const port = 4000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const chuckUrl = 'https://api.chucknorris.io/jokes/random';
const chuckCategoriesUrl = 'https://api.chucknorris.io/jokes/categories'


app.get("/random", (req, res) => {
  let random = '';
  https.get(chuckUrl, (resp) => {
    resp.on('data', (chunk) => {
      random += chunk;
    });
    resp.on('end', () => {
      //console.log('random from server.js', JSON.parse(random));
      res.json(random);
      res.end();
    });
  }).on("error", (err) => {
    //console.log("Error: " + err.message);
    res.json( {});
      res.end();
  });
  
})

app.get("/categories", (req, res) => {
  let categories = '';
  https.get(chuckCategoriesUrl, (resp) => {
    resp.on('data', (chunk) => {
      categories += chunk;
    });
    resp.on('end', () => {
      //console.log('/categories from server.js ::', JSON.parse(categories));
      res.json(categories);
      res.end();
    });
  }).on("error", (err) => {
    //console.log("Error: " + err.message);
    res.json( {});
      res.end();
  });
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
