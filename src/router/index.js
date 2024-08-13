import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesMenuView from '@/views/ClientesMenuView.vue'
import EmpleadosView from '@/views/EmpleadosView.vue'
import InfoEmpleadosView from '@/views/InfoEmpleadosView.vue'
import ClientesInfoView from '@/views/ClientesInfoView.vue'
import VerOrdenesView from '@/views/VerOrdenesView.vue'
import VehiculosMenuView from '@/views/VehiculosMenuView.vue'
import ServiciosView from '@/views/ServiciosView.vue'
import RegistroEmpleadosView from '@/views/RegistroEmpleadosView.vue'
import RegistroVehiculoView from '@/views/RegistroVehiculoView.vue'
import VehiculosInfoView from '@/views/VehiculosInfoView.vue'
import RegistroClientesView from '@/views/RegistroClientesView.vue'
import MenuEmpleadosView from '@/views/MenuEmpleadosView.vue'
import MenuVehiculosEmpleadosView from '@/views/MenuVehiculosEmpleadosView.vue'
import RegistroVehiculoEmpleadoView from '@/views/RegistroVehiculoEmpleadoView.vue'
import ClientesEmpleadosView from '@/views/Empleados/ClientesEmpleadosView.vue'
import VerVehiculosEmpleadosView from '@/views/VerVehiculosEmpleadosView.vue'
import ServiciosEmpleadosView from '@/views/ServiciosEmpleadosView.vue'
import VerClientesEmpleadosView from '@/views/VerClientesEmpleadosView.vue'
import RegistroClientesEmpleadoView from '@/views/RegistroClientesEmpleadoView.vue'
import OrdenEmpleadoView from '@/views/OrdenEmpleadoView.vue'
import DetallesOrdenView from '@/views/DetallesOrdenView.vue'
import VerCitasView from '@/views/VerCitasView.vue'
import VerCitasEmpleadoView from '@/views/VerCitasEmpleadoView.vue'
import MenuPrincipalView from '@/views/MenuPrincipalView.vue'
import MenuOrdenesView from '@/views/MenuOrdenesView.vue'
import MenuOrdenesEmpleadoView from '@/views/MenuOrdenesEmpleadoView.vue'
import VerDetalleView from '@/views/VerDetalleView.vue'
import RegistrarUsuarioView from '@/views/RegistrarUsuarioView.vue'
import PagosView from '@/views/PagosView.vue'
import LoginView from '../views/LoginView.vue'


import MisVehiculosView from '@/views/MisVehiculosView.vue'
import PerfilView from '@/views/PerfilView.vue'
import DetalleDeMisOrdenesView from '@/views/DetalleDeMisOrdenesView.vue'
import VistaClienteView from '@/views/VistaClienteView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //VISTA ADMINISTRADOR (MENU PRINCIPAL)
      path: '/',
      name: 'Home',
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
      //VISTA ADMINISTRADOR (MENU CLIENTES)
      path: '/Clientes',
      name: 'Clientes',
      component: ClientesMenuView,
    },
    {
      //VISTA ADMINISTRADOR (VER CLIENTES)
      path: '/InfoClientes',
      name: 'InfoClientes',
      component: ClientesInfoView
    },
    {
      //VISTA ADMINISTRADOR (VER ORDENES)
      path: '/InfoOrdenes',
      name: 'InfoOrdenes',
      component: VerOrdenesView
    },
    {
      path: '/Pagos',
      name: 'Pagos',
      component: PagosView
    },
    {
      //VISTA DEL ADMINISTRADOR (MENU EMPLEADOS)
      //Eliminar esta vista al final
      path: '/Empleados',
      name: 'Empleados',
      component: EmpleadosView
    },
    {
      //VISTA DEL ADMINISTRADOR (VER EMPLEADOS)
      path: '/InfoEmpleados',
      name: 'InfoEmpleados',
      component: InfoEmpleadosView
    },
    {
      //Eliminar esta vista al final
      //VISTA DEL ADMINISTRADOR PARA REGISTRAR CLIENTES
      path: '/RegistroClientes',
      name: 'RegistroClientes',
      component: RegistroClientesView
    },
    {
      //Eliminar esta vista al final
      //VISTA DEL ADMINISTRADOR PARA REGISTRAR EMPLEADOS
      path: '/RegistroEmpleados',
      name: 'RegistroEmpleados',
      component: RegistroEmpleadosView
    },
    {
      //VISTA DEL ADMINISTRADOR (MENU DEL APARTADO DE VEHICULOS)
      path: '/Vehiculos',
      name: 'Vehiculos',
      component: VehiculosMenuView,
    },
    {
      //VISTA DEL ADMINISTRADOR DEL APARTADO REGISTRAR VEHICULOS
      path: '/RegistroVehiculo',
      name: 'RegistroVehiculo',
      component: RegistroVehiculoView,
    },
    {
      //VISTA DEL ADMINISTRADOR DEL APARTADO DE SERVICIOS
      path: '/Servicios',
      name: 'Servicios',
      component: ServiciosView,
    },
    {
      //VISTA DE ADMINISTRADOR DEL APARTADO VER VEHICULOS
      path: '/VehiculosInfo',
      name: 'VehiculosInfo',
      component: VehiculosInfoView,
    },
    {
      //VISTA DE EMPLEADOS (MENU PRINCIPAL DE CUANDO SE INICIA COMO EMPLEADO)
      path: '/MenuEmpleados',
      name: 'MenuEmpleados',
      component: MenuEmpleadosView,
    },
    {
      //VISTA DE EMPLEADOS  (MENU DEL APARTADO DE VEHICULOS CUANDO SE INICIA COMO EMPLEADO)
      path: '/VehiculosEmpleados',
      name: 'VehiculosEmpleados',
      component: MenuVehiculosEmpleadosView,
    },
    {
      //VISTA DE EMPLEADOS PARA EL REGISTRO DE VEHICULOS
      path: '/RegistroVehiculosEmpleados',
      name: 'RegistroVehiculosEmpleados',
      component: RegistroVehiculoEmpleadoView,
    },
    {
      //VISTA DE EMPLEADOS (MENU DEL APARTADO DE CLIENTES)
      path: '/ClientesEmpleados',
      name: 'ClientesEmpleados',
      component: ClientesEmpleadosView
    },
    {
      //VISTA DE EMPLEADOS (VER LOS VEHICULOS)
      path: '/VerVehiculosEmpleados',
      name: 'VerVehiculosEmpleados',
      component: VerVehiculosEmpleadosView
    },
    {
      //VISTA DE EMPLEADOS (VER LOS SERVICIOS)
      path: '/ServiciosEmpleados',
      name: 'ServiciosEmpleados',
      component: ServiciosEmpleadosView
    },
    {
      //VISTA DE EMPLEADOS (VER CLIENTES)
      path: '/VerClientesEmpleados',
      name: 'VerClientesEmpleados',
      component: VerClientesEmpleadosView
    },
    {
      //VISTA DE EMPLEADOS ( REGISTRO CLIENTES)
      path: '/RegistroClientesEmpleados',
      name: 'RegistroClientesEmpleados',
      component: RegistroClientesEmpleadoView
    },
    {
      //VISTA DE EMPLEADOS (ORDENES)
      path: '/OrdenEmpleado',
      name: 'OrdenEmpleado',
      component: OrdenEmpleadoView
    },
    {
      //VISTA DE EMPLEADOS (DETALLES DE ORDENES)
      path: '/DetallesOrden',
      name: 'DetallesOrden',
      component: DetallesOrdenView
    },
    {
      //VISTA DE ADMINISTRADOR (CITAS)
      path: '/VerCitas',
      name: 'VerCitas',
      component: VerCitasView
    },
    {
      //VISTA DE EMPLEADO (CITAS)
      path: '/VerCitasEmpleado',
      name: 'VerCitasEmpleado',
      component: VerCitasEmpleadoView
    },
    {
      //VISTA DE ADMINISTRADOR (INICIO)
      path: '/MenuPrincipal',
      name: 'MenuPrincipal',
      component: MenuPrincipalView
    },
    {
      //VISTA DE ADMINISTRADOR (ORDENES)
      path: '/MenuOrdenes',
      name: 'MenuOrdenes',
      component: MenuOrdenesView
    },
    {
      //VISTA DE ADMINISTRADOR (ORDENES)

      // FALTA CHECAR ESTA, Es la MISMA que la vista de ARRIBA............................................
      path: '/MenuOrdenesEmpleado',
      name: 'MenuOrdenesEmpleado',
      component: MenuOrdenesEmpleadoView


    },
    {
      //VISTA DE ADMINISTRADOR (ORDENES)
      path: '/VerDetalle',
      name: 'VerDetalle',
      component: VerDetalleView
    },
    //REGISTRO DE USUARIO
    {
      path: '/RegistrarUsuario',
      name: 'RegistrarUsuario',
      component: RegistrarUsuarioView
    },

    {
      path: '/Pagos',
      name: 'Pagos',
      component: PagosView
    },
    {
      path: '/Login',
      name: 'pagos',
      component: LoginView
    },
    {
      path: '/VistaCliente',
      name: 'VistaCliente',
      redirect: '/VistaCliente/perfil',
      component: VistaClienteView,
      children:[
        {
          path: 'perfil',
          name: 'perfil',
          component: PerfilView
        },
        {
          path: 'misVehiculos',
          name: 'misVehiculos',
          component: MisVehiculosView
        },
        {
          path: 'detalleDeMisOrdenes',
          name: 'detalleDeMisOrdenes',
          component: DetalleDeMisOrdenesView
        }
    ]



    }
  ]
})

export default router
