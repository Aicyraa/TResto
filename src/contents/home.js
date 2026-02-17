export function home() {
   const container = document.createElement("div")
   container.className = "home"
   container.innerHTML = 
      `
         <div class="image_1" ></div>
         <div class="text_1" > 
            <h2> All out buffet..</h2>
            <p> Something ining ining something<p>
            <button type=button id=book> Book Now!</button>
         </div>
         <div class="image_2" ></div>
         <div class="text_2"> 
            <h2> 24/7</h2>
            <p> Something ining ining something<p>
            <button type=button id=book> Book Now!</button>
         </div>
         <div class="details" > 
            <div class="grp_dtls_1"> 
               <h2> Details 1</h2>
            </div>
            <div class="grp_dtls_1"> 
               <h2> Details 1</h2>
            </div>
            <div class="grp_dtls_1"> 
               <h2> Details 1</h2>
            </div>
         </div>
      
      `

   return container
}
