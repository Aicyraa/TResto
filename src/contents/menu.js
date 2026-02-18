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
   const images = [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   ];
   const randomImg = images[data.id % images.length];

   return `
      <div class="food-card">
         <div class="food-image" style="background-image: url('${randomImg}')"></div>
         <div class="food-info">
            <h3 class="food-name">${data.name}</h3>
            <div class="food-footer">
               <span class="food-category">${data.category}</span>
               <span class="food-price">$${data.price.toFixed(2)}</span>
            </div>
            <button class="btn-add-to-cart">
               Add to Cart
            </button>
         </div>
      </div>
   `
}
