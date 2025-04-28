<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from '../../my-library-management/src/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
/* Global styles can go here */
</style>
