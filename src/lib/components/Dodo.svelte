<script>
  import { onMount } from 'svelte';
  import { motion, AnimatePresence } from 'svelte-motion';
  import { inview } from 'svelte-inview';

  // Svelte 5 State
  // 0 = Center (Default), 1 = Right, 2 = Left
  let activeSection = $state(0);

  // Animation Variants for the Image
  // We use percentages to ensure it works on all screen sizes
  const imageVariants = {
    center: { x: "0%", rotate: 0, scale: 1, opacity: 1 },
    right: { x: "50%", rotate: 5, scale: 1.1, opacity: 1 },
    left: { x: "-50%", rotate: -5, scale: 1.1, opacity: 1 }
  };

  // Helper to determine which variant to use based on state
  function getVariant(section) {
    if (section === 1) return "right";
    if (section === 2) return "left";
    return "center";
  }

  // Handle Inview Changes
  const handleChange = (index) => (e) => {
    // e.detail.inView is true when the element enters the viewport
    if (e.detail.inView) {
      activeSection = index;
    }
  };

  // Basic Image URL
  const imgUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
</script>

<main class="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-500/30">
  
  <!-- HERO SECTION -->
  <section class="h-screen flex items-center justify-center border-b border-slate-800">
    <div class="text-center space-y-4">
      <h1 class="text-6xl font-bold tracking-tighter bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000">
        Svelte Motion
      </h1>
      <p class="text-slate-400 text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
        Scroll down to see the interaction
      </p>
      <div class="animate-bounce mt-8 text-slate-600">
        ↓
      </div>
    </div>
  </section>

  <!-- SCROLLYTELLING CONTAINER -->
  <!-- This container is tall (300vh) to allow scrolling while the sticky element stays put -->
  <div class="relative">
    
    <!-- STICKY BACKGROUND LAYER -->
    <!-- This stays fixed (sticky) as long as we are inside the parent relative div -->
    <div class="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center z-0 perspective-1000">
      
      <!-- BACKGROUND GRADIENT BLUR -->
      <div class="absolute inset-0 bg-slate-950/80 z-10 pointer-events-none"></div>
      
      <!-- ANIMATED IMAGE -->
      <!-- We wrap motion.div to control the animation -->
      <Motion 
        initial="center"
        animate={getVariant(activeSection)}
        variants={imageVariants}
        transition={{ type: "spring", stiffness: 60, damping: 20, mass: 1 }}
        let:motion
      >
        <div 
          use:motion 
          class="relative w-96 h-96 md:w-[600px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-slate-700/50 z-0 bg-slate-900"
        >
          <img 
            src={imgUrl} 
            alt="Abstract Motion" 
            class="object-cover w-full h-full opacity-80"
          />
          <!-- Overlay Text on Image -->
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-white/20 text-9xl font-black uppercase mix-blend-overlay">
              {activeSection === 0 ? 'Start' : activeSection === 1 ? 'Right' : 'Left'}
            </span>
          </div>
        </div>
      </Motion>

    </div>

    <!-- SCROLL TRIGGERS / TEXT LAYER -->
    <!-- These utilize absolute positioning 'on top' of the sticky layer logically in the flow, 
         but we ensure they have z-index to be clickable/viewable -->
    <div class="relative z-20 -mt-[100vh]">
      
      <!-- TRIGGER 1: CENTER -->
      <div 
        use:inview={{ threshold: 0.5 }} 
        on:change={handleChange(0)}
        class="h-screen flex items-center justify-center pointer-events-none"
      >
        <!-- Content Box -->
        <div class="bg-slate-900/80 backdrop-blur-md p-8 rounded-xl border border-slate-700/50 max-w-md pointer-events-auto transform transition-all duration-500
                    {activeSection === 0 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}">
          <h2 class="text-3xl font-bold mb-4 text-indigo-400">The Beginning</h2>
          <p class="text-slate-300 leading-relaxed">
            The image stays <strong>Centered</strong>. We are using <code class="bg-slate-800 px-1 py-0.5 rounded text-sm text-yellow-500">sticky</code> positioning to keep the visual anchored while you scroll through this narrative layer.
          </p>
        </div>
      </div>

      <!-- TRIGGER 2: MOVE RIGHT -->
      <div 
        use:inview={{ threshold: 0.5 }} 
        on:change={handleChange(1)}
        class="h-screen flex items-center justify-start px-8 md:px-24 pointer-events-none"
      >
        <div class="bg-slate-900/80 backdrop-blur-md p-8 rounded-xl border border-slate-700/50 max-w-md pointer-events-auto transform transition-all duration-500
                    {activeSection === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}">
          <h2 class="text-3xl font-bold mb-4 text-pink-400">Shift Right</h2>
          <p class="text-slate-300 leading-relaxed">
            As you scroll down, <code class="bg-slate-800 px-1 py-0.5 rounded text-sm text-yellow-500">svelte-inview</code> detects this section. The state updates, and <code class="bg-slate-800 px-1 py-0.5 rounded text-sm text-yellow-500">svelte-motion</code> springs the image to the <strong>Right</strong>.
          </p>
        </div>
      </div>

      <!-- TRIGGER 3: MOVE LEFT -->
      <div 
        use:inview={{ threshold: 0.5 }} 
        on:change={handleChange(2)}
        class="h-screen flex items-center justify-end px-8 md:px-24 pointer-events-none"
      >
        <div class="bg-slate-900/80 backdrop-blur-md p-8 rounded-xl border border-slate-700/50 max-w-md pointer-events-auto transform transition-all duration-500
                    {activeSection === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}">
          <h2 class="text-3xl font-bold mb-4 text-cyan-400">Shift Left</h2>
          <p class="text-slate-300 leading-relaxed">
            Finally, triggering this section moves the image to the <strong>Left</strong>. The text uses <code class="bg-slate-800 px-1 py-0.5 rounded text-sm text-yellow-500">tailwindcss-animate</code> principles for these fade transitions.
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- FOOTER -->
  <footer class="h-[50vh] bg-slate-900 flex items-center justify-center border-t border-slate-800 relative z-30">
    <div class="text-center">
      <h3 class="text-2xl font-semibold mb-2">End of Demo</h3>
      <p class="text-slate-500">Built with Svelte 5, Tailwind v4 & Motion</p>
    </div>
  </footer>

</main>

<style>
  /* Tailwind v4 compatibility tweaks. 
     In a real v4 setup, these @apply and @theme directives would be in CSS files.
     Here we rely on the CDN or standard utility classes loaded by the environment.
  */
  
  /* Adding a 3D perspective to the container for better depth on rotations */
  .perspective-1000 {
    perspective: 1000px;
  }
</style>

