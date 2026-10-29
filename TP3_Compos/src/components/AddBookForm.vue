
<template>
  <form class="book-form" @submit.prevent="submitBook">
    <h2>Ajouter un livre</h2>

    <input
      ref="titreInput"
      v-model="title"
      type="text"
      placeholder="Titre du livre"
      required
    />

    <input
      v-model="author"
      type="text"
      placeholder="Nom de l'auteur"
      required
    />

    <button type="submit">Ajouter</button>
  </form>
</template>

<script>
export default {
  emits: ['add-book'],

  data() {
    return {
      title: '',
      author: ''
    }
  },

  mounted() {
    this.$refs.titreInput.focus()
  },

  methods: {
    submitBook() {
      const title = this.title.trim()
      const author = this.author.trim()

      if (!title || !author) {
        return
      }

      this.$emit('add-book', {
        title: title,
        author: author
      })

      this.title = ''
      this.author = ''
    }
  }
}
</script>

<style scoped>
.book-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: #42b883;
  color: white;
}
</style>
