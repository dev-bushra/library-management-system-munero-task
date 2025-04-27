<template>
  <DashboardLayout>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h5 font-weight-bold">Your Tasks 📋</h1>
      <v-btn color="primary" rounded="xl" @click="handleAddTask">
        <v-icon start>mdi-plus</v-icon>
        New Task
      </v-btn>
    </div>

    <v-card elevation="4" rounded="xl">
      <v-data-table
        :headers="headers"
        :items="tasks"
        class="elevation-1"
        density="comfortable"
      >
        <template #item.actions="{ item }">
          <v-btn icon size="small" color="primary">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon size="small" color="error">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { ref } from 'vue'

const headers = [
  { text: '#', value: 'id' },
  { text: 'Title', value: 'title' },
  { text: 'Status', value: 'status' },
  { text: 'Due Date', value: 'dueDate' },
  { text: 'Actions', value: 'actions', sortable: false },
]

const tasks = ref([
  { id: 1, title: 'Finish frontend', status: 'Pending', dueDate: '2025-04-30' },
  { id: 2, title: 'API integration', status: 'In Progress', dueDate: '2025-05-05' },
])

const handleAddTask = () => {
  console.log('Redirect to Add Task page later')
}
</script>
