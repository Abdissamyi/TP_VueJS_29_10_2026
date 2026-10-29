
<template>
  <section>
    <h1>Catalogue des livres</h1>

    <p v-if="loading">
      Chargement des livres...
    </p>

    <BookList
      v-else
      :books="books"
      @toggle-favorite="$emit('toggle-favorite', $event)"
      @delete-book="$emit('delete-book', $event)"
    />
  </section>
</template>

<script>
import BookList from '../components/BookList.vue'

export default {
  components: {
    BookList
  },

  props: {
    books: {
      type: Array,
      required: true
    },

    loading: {
      type: Boolean,
      required: true
    }
  },

  emits: ['toggle-favorite', 'delete-book']
}
</script>
