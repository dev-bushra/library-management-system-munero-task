<template>
    <v-container>
      <v-form>
        <v-text-field label="Username" v-model="username" outlined></v-text-field>
        <v-text-field label="Password" v-model="password" type="password" outlined></v-text-field>
        <v-btn @click="login" color="primary">Login</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        if (this.username && this.password) {
          // Simulate login logic
          this.$router.push('/')
        } else {
          alert('Please fill in both fields.')
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Login view styles */
  </style>
  