<template>
    <v-app>
      <v-navigation-drawer app color="primary" dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">📚 Library System</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense nav>
          <v-list-item to="/tasks" router exact>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tasks</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app color="primary" dark>
        <v-toolbar-title>Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- Later we can add user profile/logout -->
      </v-app-bar>
  
      <v-main class="bg-grey-lighten-4">
        <v-container fluid class="pa-6">
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  </script>
  