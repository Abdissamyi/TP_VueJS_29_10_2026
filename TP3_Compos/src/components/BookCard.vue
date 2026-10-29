
<template>
  <div class="book-card">
    <h3>{{ book.title }}</h3>

    <p>Auteur : {{ book.author }}</p>

    <span v-if="book.isFav" class="favorite-badge">
      ⭐ Favori
    </span>

    <div class="actions">
      <button @click="$emit('toggle-favorite', book.id)">
        {{ book.isFav ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
      </button>

      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,

      validator(book) {
        return (
          typeof book.title === 'string' &&
          book.title.trim().length > 0
        )
      }
    }
  },

  emits: ['toggle-favorite', 'delete-book']
}
</script>

<style scoped>
.book-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.book-card h3 {
  margin-top: 0;
  color: #2c3e50;
}

.favorite-badge {
  display: inline-block;
  margin-bottom: 10px;
  color: #d68910;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

button {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background: #42b883;
  color: white;
  cursor: pointer;
}
</style>
