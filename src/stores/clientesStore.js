import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useUsuarioStore } from './UsuarioStore';

export const useClientesStore = defineStore('clientesStore', {
  state: () => ({
    clienteLogueado: reactive(JSON.parse(localStorage.getItem('clienteLogueado.PersonaID')) || {}),
    vehiculos: [],
    citas: [],
    ordenes:[],
}),
actions: {
    setClienteLogueado(cliente) {
    Object.assign(this.clienteLogueado, cliente);
    localStorage.setItem('clienteLogueado', JSON.stringify(cliente));
    },

    async fetchVehiculos() {
    const local = JSON.parse(localStorage.getItem('clienteLogueado'));
    const user = local.UsuarioID
    console.log(user)
    console.log(`http://testpdocrudo.com/misvehiculos/${user}`)
    const usuarioStore = useUsuarioStore(); 
    if (user) {
        try {
        const response = await fetch(`http://testpdocrudo.com/misvehiculos/${user}`, {
            headers: {
            'Authorization': `Bearer ${usuarioStore.token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (data.data) {
            console.log(data.data)
            this.vehiculos = data.data;
        } else {
            console.error('Datos inesperados:', data);
        }
        } catch (error) {
        console.error('Error al obtener los vehículos:', error);
        }
    } else {
        console.warn('ClienteID no disponible en clienteLogueado');
    }
    },


    async fetchCitas() {
        const local = JSON.parse(localStorage.getItem('clienteLogueado'));
        const user = local.UsuarioID
        console.log(user)
        console.log(`http://testpdocrudo.com/miscitas/${user}`)
        const usuarioStore = useUsuarioStore(); 
        
        if (user) {
        try {
            const response = await fetch(`http://testpdocrudo.com/miscitas/${user}`, {
            headers: {
                'Authorization': `Bearer ${usuarioStore.token}` 
            }
            });
            if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            if (data.data) {
            this.citas = data.data;
            } else {
            console.error('Datos inesperados:', data);
            }
        } catch (error) {
            console.error('Error al obtener los vehículos:', error);
        }
        } else {
        console.warn('ClienteID no disponible en clienteLogueado');
        }
    },

    async fetchOrdenes() {
        const local = JSON.parse(localStorage.getItem('clienteLogueado'));
        const user = local.UsuarioID
        console.log(user)
        const usuarioStore = useUsuarioStore(); 
        
        if (user) {
        try {
            const response = await fetch(`http://testpdocrudo.com/misordenes/${user}`, {
            headers: {
                'Authorization': `Bearer ${usuarioStore.token}` 
            }
            });
            if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            if (data.data) {
            this.ordenes = data.data;
            } else {
            console.error('Datos inesperados:', data);
            }
        } catch (error) {
            console.error('Error al obtener los vehículos:', error);
        }
        } else {
        console.warn('ClienteID no disponible en clienteLogueado');
        }
    }
},
getters: {
    vehiculosPorCliente: (state) => state.vehiculos,
    citasPorCliente: (state) => state.citas,
    ordenesPorCliente: (state) => state.ordenes,
},
});
