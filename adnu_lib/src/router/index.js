import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import UserHome from '../views/UserHome.vue'
import ReservationPage from '../views/ReservationPage.vue'
import AdminHome from '../views/AdminHome.vue'

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
    },
    {
        path: '/a/Home',
        name: 'adminHome',
        component: AdminHome,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
export default router
  