import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import UserHome from '../views/UserHome.vue'
import ReservationPage from '../views/ReservationPage.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/u/home',
        name: 'home',
        component: UserHome,
    },
    {
        path: '/u/reservation',
        name: 'reservation',
        component: ReservationPage,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
export default router
  