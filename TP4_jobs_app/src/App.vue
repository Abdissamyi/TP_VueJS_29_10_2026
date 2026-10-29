
<template>
  <div class="app-shell">
    <header class="site-header">
      <RouterLink to="/" class="brand">
        <span class="brand-mark">J</span>
        <span>Jobs<span class="brand-accent">App</span></span>
      </RouterLink>

      <nav class="main-nav">
        <RouterLink to="/" class="nav-link">
          Offres d'emploi
        </RouterLink>

        <RouterLink to="/add" class="nav-link nav-cta">
          + Ajouter une offre
        </RouterLink>
      </nav>
    </header>

    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <component
          :is="Component"
          @job-created="$router.push('/')"
        />
      </RouterView>
    </main>

    <footer class="site-footer">
      JobsApp · TP SPD 2 — Vue.js et JSON Server
    </footer>
  </div>
</template>

