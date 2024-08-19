import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesMenuView from '@/views/ClientesMenuView.vue'
import InfoEmpleadosView from '@/views/InfoEmpleadosView.vue'
import ClientesInfoView from '@/views/ClientesInfoView.vue'
import VerOrdenesView from '@/views/VerOrdenesView.vue'
import VehiculosMenuView from '@/views/VehiculosMenuView.vue'
import ServiciosView from '@/views/ServiciosView.vue'
import RegistroVehiculoView from '@/views/RegistroVehiculoView.vue'
import VehiculosInfoView from '@/views/VehiculosInfoView.vue'
import MenuEmpleadosView from '@/views/MenuEmpleadosView.vue'
import MenuVehiculosEmpleadosView from '@/views/MenuVehiculosEmpleadosView.vue'
import RegistroVehiculoEmpleadoView from '@/views/RegistroVehiculoEmpleadoView.vue'
import VerVehiculosEmpleadosView from '@/views/VerVehiculosEmpleadosView.vue'
import ServiciosEmpleadosView from '@/views/ServiciosEmpleadosView.vue'
import VerClientesEmpleadosView from '@/views/VerClientesEmpleadosView.vue'
import DetallesOrdenView from '@/views/DetallesOrdenView.vue'
import DetalleOrdenEmpleadoView from '@/views/DetalleOrdenEmpleadoView.vue'
import VerCitasView from '@/views/VerCitasView.vue'
import VerCitasEmpleadoView from '@/views/VerCitasEmpleadoView.vue'
import MenuPrincipalView from '@/views/MenuPrincipalView.vue'
import MenuOrdenesView from '@/views/MenuOrdenesView.vue'
import MenuOrdenesEmpleadoView from '@/views/MenuOrdenesEmpleadoView.vue'
import VerDetalleView from '@/views/VerDetalleView.vue'
import RegistrarUsuarioView from '@/views/RegistrarUsuarioView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrarUsuarioEmpleadoView from '@/views/RegistrarUsuarioEmpleadoView.vue'
import MisVehiculosView from '@/views/MisVehiculosView.vue'
import PerfilView from '@/views/PerfilView.vue'
import DetalleDeMisOrdenesView from '@/views/DetalleDeMisOrdenesView.vue'
import VistaClienteView from '@/views/VistaClienteView.vue'
import IngresosView from '@/views/IngresosView.vue'
import RegistrarOrdenView from '@/views/RegistrarOrdenView.vue'
import VistaCitasClientesView from '@/views/VistaCitasClientesView.vue'
import PagosView from '@/views/PagosView.vue'
import CitasVistaClientesView from '@/views/CitasVistaClientesView.vue'
import MenuClientesEmpleadosView from '@/views/MenuClientesEmpleadosView.vue'
import RegistrarOrdenEmpleadoView from '@/views/RegistrarOrdenEmpleadoView.vue'
import PagosEmpleadosView from '@/views/PagosEmpleadosView.vue'
import VerOrdenesEmpleadosView from '@/views/VerOrdenesEmpleadosView.vue'
import VerDetalleEmpleadoView from '@/views/VerDetalleEmpleadoView.vue'
import MenuOrdenDetalleView from '@/views/MenuOrdenDetalleView.vue'
import MenuDetallesView from '@/views/MenuDetallesView.vue'
import VerDetalleRefaccionView from '@/views/VerDetalleRefaccionView.vue'
import RegistrarDetalleRefaccionView from '@/views/RegistrarDetalleRefaccionView.vue'
import RegistrarServicioView from '@/views/RegistrarServicioView.vue'
import MenuDetallesEmpleadoView from '@/views/MenuDetallesEmpleadoView.vue'
import MenuOrdenDetalleEmpleadoView from '@/views/MenuOrdenDetalleEmpleadoView.vue'
import RegistrarDetalleRefaccionEmpleadoView from '@/views/RegistrarDetalleRefaccionEmpleadoView.vue'
import VerDetalleRefaccionEmpleadoView from '@/views/VerDetalleRefaccionEmpleadoView.vue'
import RegistrarServicioEmpleadoView from '@/views/RegistrarServicioEmpleadoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //INICIO DE LA PAGINA
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      //VISTA DE ADMINISTRADOR (MENU CLIENTES)
      path: '/Clientes',
      name: 'Clientes',
      component: ClientesMenuView,
    },
    { 
      //VISTA ADMINISTRADOR (VER INFORMACION DE LOS CLIENTES)
      path: '/InfoClientes',
      name: 'InfoClientes',
      component: ClientesInfoView
    },
    {
      //VISTA DE ADMINISTRADOR (VER LAS ÓRDENES DE SERVICIO)
      path: '/InfoOrdenes',
      name: 'InfoOrdenes',
      component: VerOrdenesView
    },
    {
      //VISTA DEL ADMINISTRADOR (VER LA INFORMACIÓN DE LOS EMPLEADOS)
      path: '/InfoEmpleados',
      name: 'InfoEmpleados',
      component: InfoEmpleadosView
    },
    {
      //VISTA DEL ADMINISTRADOR (MENU DEL APARTADO DE VEHICULOS)
      path: '/Vehiculos',
      name: 'Vehiculos',
      component: VehiculosMenuView,
    },
    {
      //VISTA DEL ADMINISTRADOR (REGISTRAR VEHICULOS)
      path: '/RegistroVehiculo',
      name: 'RegistroVehiculo',
      component: RegistroVehiculoView,
    },
    {
      //VISTA DEL ADMINISTRADOR (VER SERVICIOS)
      path: '/Servicios',
      name: 'Servicios',
      component: ServiciosView,
    },
    {
      //VISTA DE ADMINISTRADOR  (VER VEHICULOS)
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
      //VISTA DE EMPLEADOS (REGISTRO DE VEHICULOS)
      path: '/RegistroVehiculosEmpleados',
      name: 'RegistroVehiculosEmpleados',
      component: RegistroVehiculoEmpleadoView,
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
      //VISTA DE ADMINISTRADOR (MENU DE LAS ORDENES)
      path: '/MenuOrdenes',
      name: 'MenuOrdenes',
      component: MenuOrdenesView
    },
    {
      //VISTA DE EMPLEADO (MENU DE LAS ORDENES)
      path: '/MenuOrdenesEmpleado',
      name: 'MenuOrdenesEmpleado',
      component: MenuOrdenesEmpleadoView


    },
    {
      //VISTA DE ADMINISTRADOR (VER LOS DETALLES DE ORDEN)
      path: '/VerDetalle',
      name: 'VerDetalle',
      component: VerDetalleView
    },
    {
      //VISTA DE EMPLEADO (VER DETALLES DE ORDEN)
      path: '/VerDetalleEmpleado',
      name: 'VerDetalleEmpleado',
      component: VerDetalleEmpleadoView
    },

    //VISTA DE ADMINISTRADOR (REGISTRO DE USUARIO)
    {
      path: '/RegistrarUsuario',
      name: 'RegistrarUsuario',
      component: RegistrarUsuarioView
    },
    {
      //VISTA PARA TODOS (LOGIN INICIO DE SESION)
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
    {
      //VISTA PARA ADMINISTRADOR (REPORTE DE INGRESOS)
      path: '/Ingresos',
      name: 'Ingresos',
      component: IngresosView
    },
    {
      //VISTA PARA EMPLEADOS (REGISTRAR USUARIO)
      path: '/RegistrarUsuarioEmpleado',
      name: 'RegistrarUsuarioEmpleado',
      component: RegistrarUsuarioEmpleadoView
    },
    {
      //VISTA PARA ADMINISTRADOR (REGISTRAR ORDEN)
      path: '/RegistrarOrden',
      name: 'RegistrarOrden',
      component: RegistrarOrdenView
    },
    {
      //VISTA PARA EMPLEADO (REGISTRAR ORDEN)
      path: '/RegistrarOrdenEmpleado',
      name: 'RegistrarOrdenEmpleado',
      component: RegistrarOrdenEmpleadoView
    },
    {
      //VISTA DE ADMINISTRADOR (REGISTRAR SERVICIO)
      path: '/RegistrarServicio',
      name:'RegistrarVehiculo',
      component: RegistrarServicioView
    }
    ,
    {
      //VISTA DE ADMINISTRADOR (PAGOS)
      path: '/Pagos',
      name: 'Pagos',
      component: PagosView
    },
    {
      //VISTA DE EMPLEADOS (PAGOS)
      path: '/PagosEmpleados',
      name: 'PagosEmpleados',
      component: PagosEmpleadosView
    },
    {
      //VISTA DEL CLIENTE (PERFIL, VEHICULOS, ORDENES Y CITAS)
      path: '/VistaCliente',
      name: 'VistaCliente',
      redirect: '/VistaCliente/perfil',
      component: VistaClienteView,
      children: [
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
        },
        {
          path: 'MisCitas',
          name: 'MisCitas',
          component: CitasVistaClientesView
        }
      ]
    },
    {
      //ESTA CREO QUE SE ELIMINA
      path:'/VistaCitasClientes',
      name:'VistaCitasClientes',
      component: VistaCitasClientesView
    },
    {
      //VISTA DE EMPLEADOS (MENU DEL APARTADO CLIENTES)
      path:'/MenuClientesEmpleados',
      name:'MenuClientesEmpleados',
      component: MenuClientesEmpleadosView
    },
    {
      //VISTA DE EMPLEADOS (VER ORDENES)
      path:'/VerOrdenesEmpleados',
      name:'VerOrdenesEmpleados',
      component: VerOrdenesEmpleadosView
    },
    {
      //VISTA DE ADMINISTRADOR (MENU DE LAS ORDENES Y DETALLES
      path:'/MenuOrdenDetalle',
      name:'MenuOrdenDetalle',
      component: MenuOrdenDetalleView
    },
    {
      //VISTA DE EMPLEADO (MENU DE LAS ORDENES Y DETALLES)
      path:'/MenuOrdenDetalleEmpleado',
      name:'MenuOrdenDetalleEmpleado',
      component: MenuOrdenDetalleEmpleadoView
    },
    {
      //VISTA DE ADMINISTRADOR (MENU DE LOS DETALLES)
      path:'/MenuDetalles',
      name:'MenuDetalles',
      component: MenuDetallesView
    },
    {
      //VISTA DE ADMINISTRADOR (VER DETALLES DE REFACCIONES)
      path: '/VerDetalleRefaccion',
      name: 'VerDetalleRefaccion',
      component: VerDetalleRefaccionView
    },
    {
      //VISTA DE EMPLEADO (VER DETALLE DE REFACCION))
      path: '/VerDetalleRefaccionEmpleado',
      name: 'VerDetalleRefaccionEmpleado',
      component: VerDetalleRefaccionEmpleadoView
    },
    {
      //VISTA DE ADMINISTRADOR (REGISTRAR DETALLES DE REFACCION)
      path: '/RegistrarDetalleRefaccion',
      name: 'RegistrarDetalleRefaccion',
      component: RegistrarDetalleRefaccionView
    },
    {
      //VISTA DE ADMINISTRADOR (REGISTRAR SERVICIOS)
      path: '/RegistrarServicio',
      name: 'RegistrarServicio',
      component: RegistrarServicioView
    },
    {
      //VISTA DE EMPLEADO (MENU DE DETALLES DE ORDEN)
      path:'/MenuDetallesEmpleado',
      name:'MenuDetallesEmpleado',
      component: MenuDetallesEmpleadoView
    },
    {
      //VISTA DE EMPLEADOS (REGISTRAR DETALLE DE ORDEN)
      path: '/DetallesOrdenEmpleado',
      name: 'DetallesOrdenEmpleado',
      component: DetalleOrdenEmpleadoView
    },
    {
      //VISTA DE EMPLEADOS (REGISTRAR DETALLES DE REFACCIONES)
      path: '/RegistrarDetalleRefaccionEmpleado',
      name: 'RegistrarDetalleRefaccionEmpleado',
      component: RegistrarDetalleRefaccionEmpleadoView
    },
    {
      //VISTA DE EMPLEADO (REGISTRAR SERVICIOS)
      path: '/RegistrarServicioEmpleado',
      name: 'RegistrarServicioEmpleado',
      component: RegistrarServicioEmpleadoView
    },
  ]
})

export default router