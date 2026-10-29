
<template>
  <nav class="navbar">
    <RouterLink to="/" class="logo">
      BookStore
    </RouterLink>

    <div class="nav-links">
      <RouterLink to="/" class="nav-link">
        Accueil
      </RouterLink>

      <RouterLink to="/livres" class="nav-link">
        Livres
      </RouterLink>

      <RouterLink to="/ajouter" class="nav-link">
        Ajouter un livre
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 25px;
  background: #2c3e50;
  border-radius: 10px;
}

.logo {
  color: #42b883;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #42b883;
}

.router-link-exact-active {
  font-weight: bold;
}

@media (max-width: 600px) {
  .navbar {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
