import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/CSVEditor/Home.vue'
import LoginForm from "../components/CSVEditor/Login/LoginForm";
import RegisterForm from "../components/CSVEditor/Register/RegisterForm";
import Clients from "../views/CSVEditor/Clients";
import ForgotPassword from "../components/CSVEditor/Login/ForgotPassword";
import AccountSettings from "../components/CSVEditor/Account/AccountSettings";
import Guest from "../views/CSVEditor/Guest";
import About from "../views/CSVEditor/About";

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
  {
    path: '/accountsettings',
    name: 'accountsettings',
    component: AccountSettings
  },
  {
    path: '/guest',
    name: 'guest',
    component: Guest
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
