import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

window.onload = function () {
   const btn = document.getElementById("btn")
   const arrPhotos = document.getElementsByClassName("photo")
   const arrTitle = document.getElementsByClassName("title")
   let photos = []
   let count

   btn.addEventListener("click", () => {
      
      count == undefined ? count = 0 : count = Math.floor(Math.random() * (photos.length - 6))
      
      const getPhotos = () => {
         fetch('https://jsonplaceholder.typicode.com/photos')
         .then(
            response => {

               if (response.status !== 200) {
                  console.log('Looks like there was a problem. Status Code: ' +
                              response.status)
                  return;  
               }

               response.json().then(data => {
                  photos = data
                  showPhotos()
               })
            }
         )
         .catch(err => { 
         console.log('Fetch Error :-S', err)
         })         
      }      
      
      const showPhotos = () => {
         for(let i = 0; i < 6; i++){
            arrPhotos[i].setAttribute("src", photos[i + count].url)
            arrTitle[i].innerHTML = photos[i + count].title
         }
      }
            
      !photos.length ? getPhotos() : showPhotos()
      
   })
   
   const toggler = document.getElementsByClassName("navbar-toggler")
   const navbar = document.getElementsByClassName("navbar")
   let background = false
   
   toggler[0].addEventListener("click", () => {
      
      background = !background
         
      if(background){
         navbar[0].style.backgroundColor = "#323650"
         navbar[0].style.opacity = 1
      }
      else{         
         const backgroundOff = () => {
            navbar[0].style.backgroundColor = null
            navbar[0].style.opacity = null
         }         
         setTimeout(backgroundOff, 300)
      }      
   })
}

import 'bootstrap/dist/css/bootstrap.min.css'
//import './css/style.css'
import './scss/style.scss'