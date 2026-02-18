export function home() {
   const container = document.createElement("div")
   container.className = "home"
   container.innerHTML = `
      <!-- Hero Section -->
      <section class="hero">
         <div class="hero-content">
            <h1>Welcome to TResto</h1>
            <p class="hero-subtitle">Discover Culinary Excellence</p>
            <p class="hero-description">Experience world-class dining with premium cuisine and exceptional service</p>
            <div class="hero-buttons">
               <button class="btn-primary">Explore Menu</button>
               <button class="btn-secondary">Visit Us</button>
            </div>
         </div>
         <div class="hero-image"></div>
      </section>

      <!-- Welcome Section -->
      <section class="welcome">
         <div class="welcome-content">
            <h2>About TResto</h2>
            <p>At TResto, we're passionate about delivering an unforgettable dining experience. From our carefully curated menu to our warm ambiance, every detail is crafted to perfection.</p>
         </div>
         <div class="welcome-features">
            <div class="feature-item">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-3.462 0-6.75.146-6.75.75S8.538 9.75 12 9.75s6.75-1.096 6.75-2.25-3.288-.75-6.75-.75zm9-1.62c-1.606-3.159-6.987-5.87-13.5-5.87S1.606 2.42 0 5.63m18 4.62v4.875c0 .297-.203.575-.5.676M2.5 15.128v4.875c0 .297.203.575.5.676" />
               </svg>
               <h3>Premium Cuisine</h3>
               <p>Expertly crafted dishes from our talented chefs</p>
            </div>
            <div class="feature-item">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h.008v.008H5.25v-.008zm4.5 0h.008v.008H9.75v-.008zm4.5 0h.008v.008h-.008v-.008zm4.5 0h.008v.008H18.75v-.008z" />
               </svg>
               <h3>24/7 Service</h3>
               <p>Always available for your convenience</p>
            </div>
            <div class="feature-item">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 3.077 16.2m0 0a11.544 11.544 0 0 0 2.546 5.036 4.125 4.125 0 0 0 7.533-2.493M6.601 18.301a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" />
               </svg>
               <h3>Friendly Staff</h3>
               <p>Exceptional service with a personal touch</p>
            </div>
         </div>
      </section>

      <!-- Highlights Section -->
      <section class="highlights">
         <div class="highlight-item">
            <div class="highlight-image" style="background-image: url('../images/menu_1.jpeg')"></div>
            <div class="highlight-content">
               <h3>All-Out Buffet</h3>
               <p>Indulge in our extensive buffet featuring a wide variety of dishes from around the world.</p>
               <button class="btn-outline">Learn More</button>
            </div>
         </div>

         <div class="highlight-item reverse">
            <div class="highlight-image" style="background-image: url('../images/menu_1.jpeg')"></div>
            <div class="highlight-content">
               <h3>Fine Dining Experience</h3>
               <p>Elevate your dining with our elegant ambiance and carefully crafted menu selections.</p>
               <button class="btn-outline">Reserve Table</button>
            </div>
         </div>
      </section>

      <!-- Stats Section -->
      <section class="stats">
         <div class="stat-box">
            <h3>500+</h3>
            <p>Happy Customers Daily</p>
         </div>
         <div class="stat-box">
            <h3>15+</h3>
            <p>Years of Excellence</p>
         </div>
         <div class="stat-box">
            <h3>4 Branches</h3>
            <p>Serving Across the City</p>
         </div>
         <div class="stat-box">
            <h3>50+</h3>
            <p>Signature Dishes</p>
         </div>
      </section>
   `

   return container
}
