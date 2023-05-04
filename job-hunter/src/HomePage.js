import axios from 'axios'
import { useEffect } from 'react';

function HomePage(){
    // accessing api key from env (jooble)
    const jooble_url = 'https://jooble.p.rapidapi.com/?keywords=python';
    const api_key = '6ecc17f6ffmsh74a4769f07de774p11ab8ejsncb8e4c0fe5c4';


    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    console.log(api_key);
    xhr.open('GET', jooble_url);
    xhr.setRequestHeader('content-type', 'application/octet-stream');
    xhr.setRequestHeader('X-RapidAPI-Key', api_key);
    xhr.setRequestHeader('X-RapidAPI-Host', 'jooble.p.rapidapi.com');
    
    xhr.send(data);
/*
    useEffect( () => {
        const response = axios.get(url,{headers : {
            'Authorization': `Bearer ${client_id}:${secret}`
            }})
        .then(response => console.log(response)
        .catch(error => (console.log(error))));
    },[]);

*/
    

    return(
    <div class="container">
      <div class="rank"> 
          <h2> Framework ranks by popularity in job listings </h2>
          <li> First </li>
          <li> Second </li>
          
          <li> Also make a feature that keep track of changes AND present them like 2019 was react mroe popular than angular </li>
          
      </div>  

      <div class="rank"> 
          <h2> Skills ranks by popularity in job listings</h2>
          <li> First </li>
          <li> Second </li>
      </div>  

      <div class="rank"> 
          <h2> Programming Language ranks by popularity in job listings</h2>
          <li> First </li>
          <li> Second </li>
      </div>  

      <div class="rank"> 
          <h2> Soft skills ranks by popularity in job  listings</h2>
          <li> First </li>
          <li> Second </li>
      </div>  
    
    </div>
    );
}


export default HomePage;