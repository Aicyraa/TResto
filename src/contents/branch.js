export function branch() {
   const branchData = [
      {
         id: 1,
         name: "Downtown Bistro",
         address: "123 Main Street, New York, NY 10001",
         phone: "+1 (212) 555-0101",
         hours: "Mon-Thu: 10AM - 10PM, Fri-Sun: 10AM - 11PM",
         rating: 4.8,
         reviews: 342
      },
      {
         id: 2,
         name: "Uptown Grill",
         address: "456 Park Avenue, New York, NY 10022",
         phone: "+1 (212) 555-0102",
         hours: "Mon-Thu: 11AM - 10PM, Fri-Sun: 11AM - 12AM",
         rating: 4.9,
         reviews: 567
      },
      {
         id: 3,
         name: "Brooklyn Cafe",
         address: "789 Flatbush Avenue, Brooklyn, NY 11238",
         phone: "+1 (718) 555-0103",
         hours: "Mon-Sun: 8AM - 11PM",
         rating: 4.7,
         reviews: 289
      },
      {
         id: 4,
         name: "Queens Lounge",
         address: "321 Roosevelt Avenue, Queens, NY 11375",
         phone: "+1 (718) 555-0104",
         hours: "Tue-Thu: 10AM - 10PM, Fri-Sat: 10AM - 12AM, Sun: 10AM - 10PM",
         rating: 4.6,
         reviews: 198
      }
   ];

   const container = document.createElement("div");
   container.className = "branches-page";

   const headerSection = document.createElement("section");
   headerSection.className = "branches-header";
   headerSection.innerHTML = `
      <div class="branches-header-content">
         <h1>Our Branches</h1>
         <p>Visit us at any of our locations</p>
      </div>
   `;

   const listContainer = document.createElement("div");
   listContainer.className = "branches-grid";

   branchData.forEach(branch => {
      const branchCard = document.createElement("div");
      branchCard.className = "branch-card";
      branchCard.innerHTML = `
         <div class="branch-header">
            <h3 class="branch-name">${branch.name}</h3>
            <div class="branch-rating">
               <span class="stars">★ ${branch.rating}</span>
               <span class="reviews">(${branch.reviews} reviews)</span>
            </div>
         </div>
         <div class="branch-details">
            <div class="detail-item">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
               </svg>
               <span>${branch.address}</span>
            </div>
            <div class="detail-item">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
               </svg>
               <span>${branch.phone}</span>
            </div>
            <div class="detail-item">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5-15a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
               <span>${branch.hours}</span>
            </div>
         </div>
         <div class="branch-actions">
            <button class="btn-primary">Order Now</button>
            <button class="btn-secondary">Call</button>
         </div>
      `;
      listContainer.appendChild(branchCard);
   });

   container.appendChild(headerSection);
   container.appendChild(listContainer);

   return container;
}
