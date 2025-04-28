<template>
    <v-card class="mx-auto" max-width="344">
      <v-img :src="book.image" height="200px"></v-img>
      <v-card-title>{{ book.title }}</v-card-title>
      <v-card-subtitle>{{ book.author }}</v-card-subtitle>
      <v-card-actions>
        <v-btn text @click="showDetails">Details</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'BookCard',
    props: {
      book: Object
    },
    methods: {
      showDetails() {
        this.$router.push({ name: 'book-details', params: { id: this.book.id } })
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles for book card */
  </style>
  