<template>
  <DashboardLayout>
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h5 font-weight-bold">Your Loans 📚</h1>
    </div>

    <!-- Top 5 Most Borrowed Books -->
    <v-card elevation="2" rounded="xl" class="mb-6 pa-4">
      <h2 class="text-h6 font-weight-bold mb-3">Top 5 Most Borrowed Books 📈</h2>
      <v-list density="compact">
        <v-list-item v-for="(loan, index) in topLoans" :key="index" class="border-b">
          <v-list-item-content>
            <v-list-item-title>{{ loan.title }}</v-list-item-title>
            <v-list-item-subtitle>Borrowed {{ loan.borrow_count }} times</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

    <!-- Loans Table -->
    <v-card elevation="4" rounded="xl">
      <v-data-table :headers="headers" :items="loans" class="elevation-1" density="comfortable">
        <template #item.actions="{ item }">
          <v-btn icon size="small" color="primary" @click="returnLoan(item)">
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </DashboardLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const loans = ref([])
const topLoans = ref([])
const headers = [
  { text: '#', value: 'id' },
  { text: 'Book Title', value: 'title' },
  { text: 'User', value: 'user_id' },
  { text: 'Borrow Date', value: 'borrow_date' },
  { text: 'Return Date', value: 'return_date' },
  { text: 'Actions', value: 'actions', sortable: false },
]

const fetchLoans = async () => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get('http://localhost:5000/api/loans', {
      headers: { Authorization: `Bearer ${token}` }
    })
    loans.value = response.data
  } catch (error) {
    console.error('Failed to fetch loans', error)
  }
}

const fetchTopLoans = async () => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get('http://localhost:5000/api/loans/top-borrowed', {
      headers: { Authorization: `Bearer ${token}` }
    })
    topLoans.value = response.data
  } catch (error) {
    console.error('Failed to fetch top loans', error)
  }
}

const returnLoan = async (loan) => {
  try {
    const token = localStorage.getItem('token')
    await axios.put(`http://localhost:5000/api/loans/${loan.id}/return`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    })
    loans.value = loans.value.filter(l => l.id !== loan.id)
  } catch (error) {
    console.error('Failed to return loan', error)
  }
}

onMounted(() => {
  fetchLoans()
  fetchTopLoans()
})
</script>

<style scoped>
/* Custom styles */
</style>
