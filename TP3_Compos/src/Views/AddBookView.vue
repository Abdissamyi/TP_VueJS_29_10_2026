
<template>
  <section>
    <AddBookForm @add-book="$emit('add-book', $event)" />
  </section>
</template>

<script>
import AddBookForm from '../components/AddBookForm.vue'

export default {
  components: {
    AddBookForm
  },

  emits: ['add-book']
}
</script>
