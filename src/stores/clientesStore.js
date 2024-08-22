import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useClientesStore = defineStore('clientesStore', {
  state: () => ({
    clienteLogueado: reactive({}),  
    vehiculos: [],
  }),
  actions: {
    setClienteLogueado(cliente) {
      Object.assign(this.clienteLogueado, cliente); 
    },
    async fetchVehiculos() {
        if (this.clienteLogueado && this.clienteLogueado.id) {
        try {
            const response = await fetch(`http://testpdocrudo.com/vehiculos/${this.clienteLogueado.PersonaID}`, {
            headers: {
                'Authorization': `Bearer ${UsuarioStore.token}` 
            }
            });
            const data = await response.json();
            this.vehiculos = data.vehiculos;
        } catch (error) {
            console.error('Error al obtener los vehículos:', error);
        }
        }
    }
},
getters: {
    vehiculosPorCliente: (state) => state.vehiculos,
},
});