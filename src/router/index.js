import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesMenuView from '@/views/ClientesMenuView.vue'
import EmpleadosView from '@/views/EmpleadosView.vue'
import InfoEmpleadosView from '@/views/InfoEmpleadosView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistroClientesView from '@/views/RegistroClienteVIew.vue'
import ClientesInfoView from '@/views/ClientesInfoView.vue'
import ClientesOrdenesView from '@/views/ClientesOrdenesView.vue'
import VehiculosMenuView from '@/views/VehiculosMenuView.vue'
import ServiciosView from '@/views/ServiciosView.vue'
import RegistroEmpleadoView from '@/views/RegistroEmpleadoView.vue'
import RegistroVehiculoView from '@/views/RegistroVehiculoView.vue'
import VehiculosInfoView from '@/views/VehiculosInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Clientes',
      name: 'Clientes',
      component: ClientesMenuView,
    },
    {
      path:'/InfoClientes',
      name: 'InfoClientes',
      component: ClientesInfoView
    },
    {
      path:'/InfoOrdenes',
      name: 'InfoOrdenes',
      component: ClientesOrdenesView
    },
    {
      path: '/Empleados',
      name: 'Empleados',
      component: EmpleadosView
    },
    {
      path:'/InfoEmpleados',
      name: 'InfoEmpleados',
      component: InfoEmpleadosView
    },
    {
      path:'/RegistroEmpleado',
      name: 'RegistroEmpleado',
      component: RegistroEmpleadoView
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/RegistroClientes',
      name: 'RegistroClientes',
      component: RegistroClientesView
    },
    {
      path: '/Vehiculos',
      name: 'Vehiculos',
      component: VehiculosMenuView,
    },
    {
      path: '/RegistroVehiculo',
      name: 'RegistroVehiculo',
      component: RegistroVehiculoView,
    },
    {
      path: '/Servicios',
      name: 'Servicios',
      component: ServiciosView,
    },
    {
      path: '/VehiculosInfo',
      name: 'VehiculosInfo',
      component:VehiculosInfoView,
    }
  ]
})

export default router
