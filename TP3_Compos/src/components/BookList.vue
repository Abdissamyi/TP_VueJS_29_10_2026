
<template>
  <div class="book-list">
    <h2>Liste des livres</h2>

    <p v-if="books.length === 0">
      Aucun livre disponible.
    </p>

    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      @toggle-favorite="$emit('toggle-favorite', $event)"
      @delete-book="$emit('delete-book', $event)"
    >
      <template #actions>
        <button
          class="delete-button"
          @click="$emit('delete-book', book.id)"
        >
          Supprimer
        </button>
      </template>
    </BookCard>
  </div>
</template>

<script>
import BookCard from './BookCard.vue'

export default {
  components: {
    BookCard
  },

  props: {
    books: {
      type: Array,
      required: true
    }
  },

  emits: ['toggle-favorite', 'delete-book']
}
</script>

<style scoped>
.book-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.delete-button {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background: #e74c3c;
  color: white;
  cursor: pointer;
}
</style>
