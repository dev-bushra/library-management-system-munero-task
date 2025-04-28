<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>
            <span class="headline">Welcome to the Library Management System</span>
          </v-card-title>
          <v-card-actions>
            <v-btn @click="goToLogin" color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>
