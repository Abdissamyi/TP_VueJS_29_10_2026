
<template>
  <div class="app">
    <NavBar />

    <main>
      <RouterView v-slot="{ Component }">
        <component
          :is="Component"
          :books="books"
          :loading="loading"
          @add-book="addBook"
          @toggle-favorite="toggleFavorite"
          @delete-book="deleteBook"
        />
      </RouterView>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  },

  data() {
    return {
      books: [],
      loading: true,

      initialBooks: [
        {
          id: 1,
          title: 'Clean Code',
          author: 'Robert C. Martin',
          isFav: false
        },
        {
          id: 2,
          title: 'The Pragmatic Programmer',
          author: 'Andrew Hunt',
          isFav: true
        },
        {
          id: 3,
          title: 'JavaScript: The Good Parts',
          author: 'Douglas Crockford',
          isFav: false
        }
      ]
    }
  },

  mounted() {
    setTimeout(() => {
      this.books = [...this.initialBooks]
      this.loading = false
    }, 600)
  },

  methods: {
    toggleFavorite(id) {
      const book = this.books.find(book => book.id === id)

      if (book) {
        book.isFav = !book.isFav
      }
    },

    addBook(newBook) {
      const nextId = this.books.length
        ? Math.max(...this.books.map(book => book.id)) + 1
        : 1

      this.books.push({
        id: nextId,
        title: newBook.title,
        author: newBook.author,
        isFav: false
      })
    },

    deleteBook(id) {
      this.books = this.books.filter(book => book.id !== id)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #2c3e50;
  background: #f5f7fa;
}

.app {
  max-width: 1000px;
  margin: 25px auto;
  padding: 20px;
}

main {
  margin-top: 25px;
}
</style>
