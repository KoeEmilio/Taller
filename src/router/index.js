import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/userStorage'
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
      meta: { requiresAuth: true }
    },
    { 
      //VISTA ADMINISTRADOR (VER INFORMACION DE LOS CLIENTES)
      path: '/InfoClientes',
      name: 'InfoClientes',
      component: ClientesInfoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (VER LAS ÓRDENES DE SERVICIO)
      path: '/InfoOrdenes',
      name: 'InfoOrdenes',
      component: VerOrdenesView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DEL ADMINISTRADOR (VER LA INFORMACIÓN DE LOS EMPLEADOS)
      path: '/InfoEmpleados',
      name: 'InfoEmpleados',
      component: InfoEmpleadosView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DEL ADMINISTRADOR (MENU DEL APARTADO DE VEHICULOS)
      path: '/Vehiculos',
      name: 'Vehiculos',
      component: VehiculosMenuView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DEL ADMINISTRADOR (REGISTRAR VEHICULOS)
      path: '/RegistroVehiculo',
      name: 'RegistroVehiculo',
      component: RegistroVehiculoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DEL ADMINISTRADOR (VER SERVICIOS)
      path: '/Servicios',
      name: 'Servicios',
      component: ServiciosView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR  (VER VEHICULOS)
      path: '/VehiculosInfo',
      name: 'VehiculosInfo',
      component: VehiculosInfoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADOS (MENU PRINCIPAL DE CUANDO SE INICIA COMO EMPLEADO)
      path: '/MenuEmpleados',
      name: 'MenuEmpleados',
      component: MenuEmpleadosView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADOS  (MENU DEL APARTADO DE VEHICULOS CUANDO SE INICIA COMO EMPLEADO)
      path: '/VehiculosEmpleados',
      name: 'VehiculosEmpleados',
      component: MenuVehiculosEmpleadosView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADOS (REGISTRO DE VEHICULOS)
      path: '/RegistroVehiculosEmpleados',
      name: 'RegistroVehiculosEmpleados',
      component: RegistroVehiculoEmpleadoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADOS (VER LOS VEHICULOS)
      path: '/VerVehiculosEmpleados',
      name: 'VerVehiculosEmpleados',
      component: VerVehiculosEmpleadosView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADOS (VER LOS SERVICIOS)
      path: '/ServiciosEmpleados',
      name: 'ServiciosEmpleados',
      component: ServiciosEmpleadosView,
      meta: { requiresAuth: true }
    },
    {
      
      //VISTA DE EMPLEADOS (VER CLIENTES)
      path: '/VerClientesEmpleados',
      name: 'VerClientesEmpleados',
      component: VerClientesEmpleadosView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADOS (DETALLES DE ORDENES)
      path: '/DetallesOrden',
      name: 'DetallesOrden',
      component: DetallesOrdenView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (CITAS)
      path: '/VerCitas',
      name: 'VerCitas',
      component: VerCitasView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADO (CITAS)
      path: '/VerCitasEmpleado',
      name: 'VerCitasEmpleado',
      component: VerCitasEmpleadoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (INICIO)
      path: '/MenuPrincipal',
      name: 'MenuPrincipal',
      component: MenuPrincipalView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (MENU DE LAS ORDENES)
      path: '/MenuOrdenes',
      name: 'MenuOrdenes',
      component: MenuOrdenesView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADO (MENU DE LAS ORDENES)
      path: '/MenuOrdenesEmpleado',
      name: 'MenuOrdenesEmpleado',
      component: MenuOrdenesEmpleadoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (VER LOS DETALLES DE ORDEN)
      path: '/VerDetalle',
      name: 'VerDetalle',
      component: VerDetalleView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADO (VER DETALLES DE ORDEN)
      path: '/VerDetalleEmpleado',
      name: 'VerDetalleEmpleado',
      component: VerDetalleEmpleadoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (REGISTRO DE USUARIO)
      path: '/RegistrarUsuario',
      name: 'RegistrarUsuario',
      component: RegistrarUsuarioView,
      meta: { requiresAuth: true }
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
      component: IngresosView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA PARA EMPLEADOS (REGISTRAR USUARIO)
      path: '/RegistrarUsuarioEmpleado',
      name: 'RegistrarUsuarioEmpleado',
      component: RegistrarUsuarioEmpleadoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA PARA ADMINISTRADOR (REGISTRAR ORDEN)
      path: '/RegistrarOrden',
      name: 'RegistrarOrden',
      component: RegistrarOrdenView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA PARA EMPLEADO (REGISTRAR ORDEN)
      path: '/RegistrarOrdenEmpleado',
      name: 'RegistrarOrdenEmpleado',
      component: RegistrarOrdenEmpleadoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (REGISTRAR SERVICIO)
      path: '/RegistrarServicio',
      name: 'RegistrarVehiculo',
      component: RegistrarServicioView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (PAGOS)
      path: '/Pagos',
      name: 'Pagos',
      component: PagosView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADOS (PAGOS)
      path: '/PagosEmpleados',
      name: 'PagosEmpleados',
      component: PagosEmpleadosView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DEL CLIENTE (PERFIL, VEHICULOS, ORDENES Y CITAS)
      path: '/VistaCliente',
      name: 'VistaCliente',
      redirect: '/VistaCliente/perfil',
      component: VistaClienteView,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'perfil',
          name: 'perfil',
          component: PerfilView,
          meta: { requiresAuth: true }
        },
        {
          path: 'misVehiculos',
          name: 'misVehiculos',
          component: MisVehiculosView,
          meta: { requiresAuth: true }
        },
        {
          path: 'detalleDeMisOrdenes',
          name: 'detalleDeMisOrdenes',
          component: DetalleDeMisOrdenesView,
          meta: { requiresAuth: true }
        },
        {
          path: 'MisCitas',
          name: 'MisCitas',
          component: CitasVistaClientesView,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      //VISTA DE EMPLEADOS (MENU DEL APARTADO CLIENTES)
      path: '/MenuClientesEmpleados',
      name: 'MenuClientesEmpleados',
      component: MenuClientesEmpleadosView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADOS (VER ORDENES)
      path: '/VerOrdenesEmpleados',
      name: 'VerOrdenesEmpleados',
      component: VerOrdenesEmpleadosView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (MENU DE LAS ORDENES Y DETALLES)
      path: '/MenuOrdenDetalle',
      name: 'MenuOrdenDetalle',
      component: MenuOrdenDetalleView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADO (MENU DE LAS ORDENES Y DETALLES)
      path: '/MenuOrdenDetalleEmpleado',
      name: 'MenuOrdenDetalleEmpleado',
      component: MenuOrdenDetalleEmpleadoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (MENU DE LOS DETALLES)
      path: '/MenuDetalles',
      name: 'MenuDetalles',
      component: MenuDetallesView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (VER DETALLES DE REFACCIONES)
      path: '/VerDetalleRefaccion',
      name: 'VerDetalleRefaccion',
      component: VerDetalleRefaccionView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADO (VER DETALLE DE REFACCION))
      path: '/VerDetalleRefaccionEmpleado',
      name: 'VerDetalleRefaccionEmpleado',
      component: VerDetalleRefaccionEmpleadoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (REGISTRAR DETALLES DE REFACCION)
      path: '/RegistrarDetalleRefaccion',
      name: 'RegistrarDetalleRefaccion',
      component: RegistrarDetalleRefaccionView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE ADMINISTRADOR (REGISTRAR SERVICIOS)
      path: '/RegistrarServicio',
      name: 'RegistrarServicio',
      component: RegistrarServicioView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADO (MENU DE DETALLES DE ORDEN)
      path: '/MenuDetallesEmpleado',
      name: 'MenuDetallesEmpleado',
      component: MenuDetallesEmpleadoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADOS (REGISTRAR DETALLE DE ORDEN)
      path: '/DetallesOrdenEmpleado',
      name: 'DetallesOrdenEmpleado',
      component: DetalleOrdenEmpleadoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADOS (REGISTRAR DETALLES DE REFACCIONES)
      path: '/RegistrarDetalleRefaccionEmpleado',
      name: 'RegistrarDetalleRefaccionEmpleado',
      component: RegistrarDetalleRefaccionEmpleadoView,
      meta: { requiresAuth: true }
    },
    {
      //VISTA DE EMPLEADO (REGISTRAR SERVICIOS)
      path: '/RegistrarServicioEmpleado',
      name: 'RegistrarServicioEmpleado',
      component: RegistrarServicioEmpleadoView,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore(); // Obtén el store del usuario

  if (to.meta.requiresAuth && !userStore.usuario) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router