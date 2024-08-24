import { createRouter, createWebHistory } from 'vue-router'
import { useUsuarioStore } from '@/stores/UsuarioStore'
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
import UnauthorizedView from '@/views/UnauthorizedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
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
      path: '/Clientes',
      name: 'Clientes',
      component: ClientesMenuView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    { 
      path: '/InfoClientes',
      name: 'InfoClientes',
      component: ClientesInfoView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/InfoOrdenes',
      name: 'InfoOrdenes',
      component: VerOrdenesView,
      meta: { requiresAuth: true, roles: ['Administrador', 'Empleado'] }
    },
    {
      path: '/InfoEmpleados',
      name: 'InfoEmpleados',
      component: InfoEmpleadosView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/Vehiculos',
      name: 'Vehiculos',
      component: VehiculosMenuView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/RegistroVehiculo',
      name: 'RegistroVehiculo',
      component: RegistroVehiculoView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/Servicios',
      name: 'Servicios',
      component: ServiciosView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/VehiculosInfo',
      name: 'VehiculosInfo',
      component: VehiculosInfoView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/MenuEmpleados',
      name: 'MenuEmpleados',
      component: MenuEmpleadosView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/VehiculosEmpleados',
      name: 'VehiculosEmpleados',
      component: MenuVehiculosEmpleadosView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/RegistroVehiculosEmpleados',
      name: 'RegistroVehiculosEmpleados',
      component: RegistroVehiculoEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/VerVehiculosEmpleados',
      name: 'VerVehiculosEmpleados',
      component: VerVehiculosEmpleadosView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/ServiciosEmpleados',
      name: 'ServiciosEmpleados',
      component: ServiciosEmpleadosView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/VerClientesEmpleados',
      name: 'VerClientesEmpleados',
      component: VerClientesEmpleadosView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/DetallesOrden',
      name: 'DetallesOrden',
      component: DetallesOrdenView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/VerCitas',
      name: 'VerCitas',
      component: VerCitasView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/VerCitasEmpleado',
      name: 'VerCitasEmpleado',
      component: VerCitasEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/MenuPrincipal',
      name: 'MenuPrincipal',
      component: MenuPrincipalView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/MenuOrdenes',
      name: 'MenuOrdenes',
      component: MenuOrdenesView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/MenuOrdenesEmpleado',
      name: 'MenuOrdenesEmpleado',
      component: MenuOrdenesEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/VerDetalle',
      name: 'VerDetalle',
      component: VerDetalleView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/VerDetalleEmpleado',
      name: 'VerDetalleEmpleado',
      component: VerDetalleEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/RegistrarUsuario',
      name: 'RegistrarUsuario',
      component: RegistrarUsuarioView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/Ingresos',
      name: 'Ingresos',
      component: IngresosView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/RegistrarUsuarioEmpleado',
      name: 'RegistrarUsuarioEmpleado',
      component: RegistrarUsuarioEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/RegistrarOrden',
      name: 'RegistrarOrden',
      component: RegistrarOrdenView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/RegistrarOrdenEmpleado',
      name: 'RegistrarOrdenEmpleado',
      component: RegistrarOrdenEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/RegistrarServicio',
      name: 'RegistrarVehiculo',
      component: RegistrarServicioView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/Pagos',
      name: 'Pagos',
      component: PagosView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/PagosEmpleados',
      name: 'PagosEmpleados',
      component: PagosEmpleadosView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/VistaCliente',
      name: 'VistaCliente',
      redirect: '/VistaCliente/perfil',
      component: VistaClienteView,
      meta: { requiresAuth: true, roles: ['Cliente'] },
      children: [
        {
          path: 'perfil',
          name: 'perfil',
          component: PerfilView,
          meta: { requiresAuth: true, roles: ['Cliente'] }
        },
        {
          path: 'misVehiculos',
          name: 'misVehiculos',
          component: MisVehiculosView,
          meta: { requiresAuth: true, roles: ['Cliente'] }
        },
        {
          path: 'detalleDeMisOrdenes',
          name: 'detalleDeMisOrdenes',
          component: DetalleDeMisOrdenesView,
          meta: { requiresAuth: true, roles: ['Cliente'] }
        },
        {
          path: 'MisCitas',
          name: 'MisCitas',
          component: CitasVistaClientesView,
          meta: { requiresAuth: true, roles: ['Cliente'] }
        }
      ]
    },
    {
      path: '/MenuClientesEmpleados',
      name: 'MenuClientesEmpleados',
      component: MenuClientesEmpleadosView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/VerOrdenesEmpleados',
      name: 'VerOrdenesEmpleados',
      component: VerOrdenesEmpleadosView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/MenuOrdenDetalle',
      name: 'MenuOrdenDetalle',
      component: MenuOrdenDetalleView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/MenuOrdenDetalleEmpleado',
      name: 'MenuOrdenDetalleEmpleado',
      component: MenuOrdenDetalleEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/MenuDetalles',
      name: 'MenuDetalles',
      component: MenuDetallesView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/VerDetalleRefaccion',
      name: 'VerDetalleRefaccion',
      component: VerDetalleRefaccionView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/VerDetalleRefaccionEmpleado',
      name: 'VerDetalleRefaccionEmpleado',
      component: VerDetalleRefaccionEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/RegistrarDetalleRefaccion',
      name: 'RegistrarDetalleRefaccion',
      component: RegistrarDetalleRefaccionView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/RegistrarServicio',
      name: 'RegistrarServicio',
      component: RegistrarServicioView,
      meta: { requiresAuth: true, roles: ['Administrador'] }
    },
    {
      path: '/MenuDetallesEmpleado',
      name: 'MenuDetallesEmpleado',
      component: MenuDetallesEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/DetallesOrdenEmpleado',
      name: 'DetallesOrdenEmpleado',
      component: DetalleOrdenEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/RegistrarDetalleRefaccionEmpleado',
      name: 'RegistrarDetalleRefaccionEmpleado',
      component: RegistrarDetalleRefaccionEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/RegistrarServicioEmpleado',
      name: 'RegistrarServicioEmpleado',
      component: RegistrarServicioEmpleadoView,
      meta: { requiresAuth: true, roles: ['Empleado'] }
    },
    {
      path: '/Unauthorized',
      name: 'Unauthorized',
      component: UnauthorizedView,
      
    }
  ]
})

router.beforeEach((to, from, next) => {
  const UsuarioStore = useUsuarioStore();
  const authToken = UsuarioStore.usuario._token;
  const rol = UsuarioStore.usuario.rol;

  console.log(`Intentando navegar a: ${to.name}`);
  console.log(`Token actual: ${authToken}`);
  console.log(`Rol del usuario: ${rol}`);

  if (to.name === 'Login' && authToken) {
    console.log('Usuario autenticado intentando acceder al login.');

    if (rol === 'Administrador') {
      console.log('Redirigiendo al MenuPrincipal.');
      next({ name: 'MenuPrincipal' });
    } else if (rol === 'Empleado') {
      console.log('Redirigiendo al MenuEmpleados.');
      next({ name: 'MenuEmpleados' });
    } else if (rol === 'Cliente') {
      console.log('Redirigiendo a VistaCliente.');
      next({ name: 'VistaCliente' });
    } else {
      console.log('Rol desconocido, redirigiendo a Unauthorized.');
      next('/unauthorized');
    }
  } else if (to.matched.some((route) => route.meta.requiresAuth)) {
    console.log(`La ruta ${to.name} requiere autenticación.`);

    if (authToken) {
      console.log('Usuario autenticado con token válido.');

      if (to.meta.roles && to.meta.roles.length > 0) {
        console.log(`Roles permitidos en la ruta: ${to.meta.roles}`);
        console.log(`Rol del usuario: ${rol}`);

        if (to.meta.roles.includes(rol)) {
          console.log('Acceso permitido, redirigiendo a la ruta solicitada.');
          next(); // Permitir el acceso
        } else {
          console.log('Acceso denegado, redirigiendo a Unauthorized.');
          next('/unauthorized'); // Redirigir a página no autorizada
        }
      } else {
        console.log('No se especifican roles en la ruta, acceso permitido.');
        next(); // Permitir acceso si no se especifican roles
      }
    } else {
      console.log('Token no válido o no presente, redirigiendo al Login.');
      next('/Login'); // Redirigir al login si no está autenticado
    }
  } else {
    console.log('La ruta no requiere autenticación, acceso permitido.');
    next(); // Permitir acceso si la ruta no requiere autenticación
  }
});

export default router