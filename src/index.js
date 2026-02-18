// Handles logic for content loading
import "./style/main.css"
import { branch } from "./contents/branch.js"
import { home } from "./contents/home.js"
import { menu } from "./contents/menu.js"

const el = {
   nav: document.querySelector("#nav-bar"),
   content: document.querySelector("#content"),
}

function updateActiveTab(tabId) {
   document.querySelectorAll(".tabs").forEach(tab => {
      if (tab.dataset.tab === tabId) {
         tab.classList.add("active");
      } else {
         tab.classList.remove("active");
      }
   });
}

function switchTab(e) {
   const tabElement = e.target.closest(".tabs");
   if (!tabElement) return;

   const tabId = tabElement.dataset.tab;
   
   switch(tabId) {
      case "home":
         loadTab(home);
         break;
      case "menu":
         loadTab(menu);
         break;
      case "branch":
         loadTab(branch);
         break;
      default:
         return;
   }
   updateActiveTab(tabId);
}

function loadTab(currentTab) {
   el.content.innerHTML = "" 
   el.content.append(currentTab()) 
   window.scrollTo(0, 0);
}

(function(){
   loadTab(home) // initialize home tab
   el.nav.addEventListener("click", switchTab) 
})();