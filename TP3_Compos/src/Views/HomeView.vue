
<template>
  <section class="page">
    <h1>Bienvenue dans BookStore</h1>

    <p>
      Découvrez notre catalogue et gérez vos livres favoris.
    </p>

    <RouterLink to="/livres" class="button">
      Voir les livres
    </RouterLink>
  </section>
</template>

<style scoped>
.page {
  padding: 40px 20px;
  text-align: center;
}

.button {
  display: inline-block;
  margin-top: 15px;
  padding: 12px 18px;
  border-radius: 6px;
  background: #42b883;
  color: white;
  text-decoration: none;
}
</style>
