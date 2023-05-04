const fetch = require("node-fetch");
require('dotenv').config()


const api_key = process.env.Adzuna_API_KEY;
const api_id =  process.env.Adzuna_ID_KEY;
const url = `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${api_id}&app_key=${api_key}&results_per_page=20&what=javascript%20developer&content-type=application/json`


// feteching data from Azura
fetch(url)
.then(response => {
    console.log('Response size:', response.headers.get('Content-Length')); // Get the Content-Length header value
    return response.json(); // Turn the response into json
  })
  .then(data => {
	
	console.log(data.results[1].title)
	
  })

  .catch(error => {
    console.error(error);
  });