<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>
            <span class="headline">Login</span>
          </v-card-title>
          <v-form @submit.prevent="login">
            <v-text-field label="Email" v-model="email" type="email" required></v-text-field>
            <v-text-field label="Password" v-model="password" type="password" required></v-text-field>
            <v-btn type="submit" color="primary" block>Login</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email: this.email,
          password: this.password
        })
        localStorage.setItem('token', response.data.token)
        this.$router.push('/dashboard')
      } catch (error) {
        alert('Invalid credentials')
      }
    }
  }
}
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>
