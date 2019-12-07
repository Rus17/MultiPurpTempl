import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

window.onload = function () {
   let btn = document.getElementById("btn")
   let photos = []

   btn.addEventListener("click", function(){

      fetch('https://jsonplaceholder.typicode.com/photos')  
      .then(
         function(response) {

            if (response.status !== 200) { 
               console.log('Looks like there was a problem. Status Code: ' +  
                           response.status)
               return;  
            }

            response.json().then(function(data) {
               photos = data
               let arrPhotos = document.getElementsByClassName("photo")
               let arrTitle = document.getElementsByClassName("title")

               for(let i = 0; i < 6; i++){
                  arrPhotos[i].setAttribute("src", photos[i].url)
                  arrTitle[i].innerHTML = photos[i].title
               }
            })
         }
      )
      .catch(function(err) {  
      console.log('Fetch Error :-S', err)
      })
   })
}

import 'bootstrap/dist/css/bootstrap.min.css'
//import './css/style.css'
import './scss/style.scss'