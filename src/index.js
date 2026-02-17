// Handles logic for content loading
import "./style/main.css"
import { branch } from "./contents/branches.js"
import { home } from "./contents/home.js"
import { menu } from "./contents/menu.js"

const el = {
   nav: document.querySelector("nav"),
   content: document.querySelector("main"),

}

function switchTab(e) {
   const tabs = ["home", "menu", "branches"]
   const target = e.target;
   if (tabs.includes(target.id)) {
      switch(target.id) {
         
      }   
   }
   
}


function loadTab(currentTab) {
   
}

(function(){
   el.nav.addEventListener("click", switchTab) // switch tab function

})();