// const axios = require("axios");
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const { request } = require('express');
const https = require('https');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const options = {
//   method: 'GET',
//   url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search',
//   params: {query: 'food'},
//   headers: {
//     accept: 'application/json',
//     'x-rapidapi-key': 'cJvLRNK0GfdM9WSMbQe3inU7REn8JVy5',
//     'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

//const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=9bcfb7c4' ;
// const jokesUrl = 'https://official-joke-api.appspot.com/random_joke' ;
//const nasaUrl= 'https://api.nasa.gov/planetary/apod?api_key=ehSkrNQZQ2ItdhNJMmucjOoDuD93r7nvD4hDxmwg'
//const cardsUrl = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
 const chuckUrl = 'https://api.chucknorris.io/jokes/random';

let data = '';

https.get(chuckUrl, (resp) => {
  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    // resp.send(JSON.parse(data))
    
    console.log(JSON.parse(data));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

app.get("/users", (req, res) => {
  //res.json({ "users": ["aaaa", "bbbb", "cccc" ]});
  res.json( data);
  //console.log('👿',JSON.parse(data))
})


// app.get('/api/movies', function(req, res) {
//   req(url);
// })


// router.get('/api/omdb', function(request, response, next) {
//   request({
//     uri: url
//   }).pipe(response);
// });

// app.get('/api/movies', (req, res) => {
//   request.get
// })

const port = 5001;

// react by default listens to port 3000, so we do port 5001 (why is 5000 already in use??) here.
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})