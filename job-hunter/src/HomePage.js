import axios from 'axios'
import { useEffect } from 'react';

function HomePage(){

    

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