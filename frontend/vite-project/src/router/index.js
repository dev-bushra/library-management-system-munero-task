import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import TasksPage from '../pages/TasksPage.vue'
import BooksPage from '../pages/BooksPage.vue'
import LoansPage from '../pages/LoansPage.vue'

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/tasks', component: TasksPage },
  { path: '/books', component: BooksPage },
  { path: '/loans', component: LoansPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
