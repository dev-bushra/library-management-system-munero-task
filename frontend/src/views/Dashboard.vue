<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <span class="headline">Dashboard</span>
            </v-card-title>
            <v-card-text>
              <p>Welcome to your dashboard. Your library management system is working!</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Dashboard'
  }
  </script>
  
  <style scoped>
  .headline {
    font-weight: bold;
  }
  </style>
  