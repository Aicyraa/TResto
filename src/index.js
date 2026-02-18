// Handles logic for content loading
import "./style/main.css"
import "./style/home.css"
import "./style/menu.css"
import "./style/branch.css"
import { branch } from "./contents/branch.js"
import { home } from "./contents/home.js"
import { menu } from "./contents/menu.js"

const el = {
   nav: document.querySelector("nav"),
   content: document.querySelector("main"),

}

function switchTab(e) {
   const tabs = ["home", "menu", "branch"]
   const target = e.target;
   if (tabs.includes(target.id)) {
      switch(target.id) {
         case "home":
            loadTab(home)
            break;
         case "menu":
            loadTab(menu)
            break;
         case "branch":
            loadTab(branch)
            break;
         default:
            console.log(target.id);
      }   
   }
   
}

function loadTab(currentTab) {
   el.content.innerHTML = "" 
   el.content.append(currentTab()) 
}

(function(){
   loadTab(home) // initialize home tab
   el.nav.addEventListener("click", switchTab) // switch tab function

})();