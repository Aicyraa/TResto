export function home() {
   const container = document.createElement("div")
   container.className = "home"
   container.innerHTML = `
      <!-- Hero Section -->
      <section class="hero">
         <div class="hero-content">
            <h1>Welcome to TResto</h1>
            <p class="hero-subtitle">Discover Culinary Excellence</p>
            <p class="hero-description">Experience world-class dining with premium cuisine and exceptional service. Every dish is a story, every meal an unforgettable memory.</p>
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
            <h2>Our Passion for Taste</h2>
            <p>At TResto, we combine traditional techniques with modern innovation to bring you the finest flavors from across the globe.</p>
         </div>
         <div class="welcome-features">
            <div class="feature-item">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
               </svg>
               <h3>Premium Ingredients</h3>
               <p>Sourced locally and sustainably for the freshest taste in every bite.</p>
            </div>
            <div class="feature-item">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5-15a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
               <h3>Exquisite Service</h3>
               <p>Dedicated staff providing a seamless and personalized dining experience.</p>
            </div>
            <div class="feature-item">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
               </svg>
               <h3>Master Chefs</h3>
               <p>Culinary experts crafting unique dishes that tantalize your taste buds.</p>
            </div>
         </div>
      </section>

      <!-- Highlights Section -->
      <section class="highlights">
         <div class="highlight-item">
            <div class="highlight-image" style="background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"></div>
            <div class="highlight-content">
               <h3>All-Out Buffet</h3>
               <p>Indulge in our extensive buffet featuring a wide variety of dishes from around the world. Perfect for celebrations and family gatherings.</p>
               <button class="btn-outline">Learn More</button>
            </div>
         </div>

         <div class="highlight-item reverse">
            <div class="highlight-image" style="background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"></div>
            <div class="highlight-content">
               <h3>Fine Dining Experience</h3>
               <p>Elevate your evening with our elegant ambiance and carefully crafted tasting menu. A journey of flavors awaits.</p>
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
            <h3>4</h3>
            <p>Signature Branches</p>
         </div>
         <div class="stat-box">
            <h3>50+</h3>
            <p>Signature Dishes</p>
         </div>
      </section>
   `

   return container
}
