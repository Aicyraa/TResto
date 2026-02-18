export function menu() {
   const data = [
      {
         id: 1,
         name: "Classic Espresso",
         price: 3.50,
         category: "Beverages"
      },
      {
         id: 2,
         name: "Cappuccino",
         price: 4.75,
         category: "Beverages"
      },
      {
         id: 3,
         name: "Grilled Salmon Fillet",
         price: 16.99,
         category: "Mains"
      },
      {
         id: 4,
         name: "Mushroom Risotto",
         price: 13.50,
         category: "Mains"
      },
      {
         id: 5,
         name: "Chocolate Lava Cake",
         price: 7.99,
         category: "Desserts"
      },
      {
         id: 6,
         name: "Tiramisu",
         price: 6.50,
         category: "Desserts"
      },
      {
         id: 7,
         name: "Caesar Salad",
         price: 9.99,
         category: "Appetizers"
      },
      {
         id: 8,
         name: "Bruschetta Trio",
         price: 8.50,
         category: "Appetizers"
      },
      {
         id: 9,
         name: "Iced Lavender Latte",
         price: 5.25,
         category: "Beverages"
      },
      {
         id: 10,
         name: "Herb-Crusted Chicken Breast",
         price: 14.99,
         category: "Mains"
      }
   ];

   const container = document.createElement("div");
   container.className = "menu";
   data.forEach(d => {
      const generated = loadData(d)
      console.log(generated);
      
      container.innerHTML += generated
   }) 
   
   return container

}

function loadData(data) {
   return `
      <div class="food-card">
         <div class="food-image"></div>
         <div class="food-info">
            <h3 class="food-name">${data.name}</h3>
            <div class="food-footer">
               <span class="food-category">${data.category}</span>
               <span class="food-price">$${data.price.toFixed(2)}</span>
            </div>
            <button class="btn-add-to-cart">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>
               Add to Cart
            </button>
         </div>
      </div>
   `
}
