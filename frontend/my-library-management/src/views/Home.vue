<template>
    <v-container>
        <h1>hisdf</h1>
      <v-row>
        <v-col v-for="book in books" :key="book.id" cols="12" md="4">
          <BookCard :book="book" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import BookCard from '../components/BookCard.vue'
  
  export default {
    name: 'Home',
    components: {
      BookCard
    },
    data() {
      return {
        books: [
          { id: 1, title: 'Book 1', author: 'Author 1', image: 'https://placeimg.com/200/300/tech' },
          { id: 2, title: 'Book 2', author: 'Author 2', image: 'https://placeimg.com/200/300/nature' },
          // Add more books here
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Home view styles */
  </style>
  