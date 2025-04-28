<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <span class="headline">404 - Not Found</span>
            </v-card-title>
            <v-card-actions>
              <v-btn @click="$router.push('/')" color="primary">Back to Home</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style scoped>
  .headline {
    font-weight: bold;
  }
  </style>
  