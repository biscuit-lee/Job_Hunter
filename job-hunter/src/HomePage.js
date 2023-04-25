import axios from 'axios'
import { useEffect } from 'react';

function HomePage(){


    
    const url = 'https://indeed12.p.rapidapi.com/job/b762b8d1132bd276'

    
    useEffect( () => {
        const response = axios.get(url,{headers : {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
            }})
        .then(response => console.log(response)
        .catch(error => (console.log(error))));
    },[]);

    
    

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