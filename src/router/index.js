import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Register/RegisterForm";
import Clients from "../views/Clients";
import ForgotPassword from "../components/Login/ForgotPassword";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/forgotpsw',
    name: 'forgotpsw',
    component: ForgotPassword
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
