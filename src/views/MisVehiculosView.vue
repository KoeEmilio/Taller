<script setup>
import { useClientesStore } from '@/stores/clientesStore';
import { onMounted, ref } from 'vue';

const store = useClientesStore();
const datosVehiculos = ref([]);
const headers = ref([
  { text: 'Marca', value: 'marca' },
  { text: 'Modelo', value: 'modelo' },
  { text: 'Año', value: 'anio' },
  { text: 'Color', value: 'color' },
]);

const loadVehiculos = async () => {
try {
    if (store.clienteLogueado && store.clienteLogueado.PersonaID) {
    await store.fetchVehiculos();
    datosVehiculos.value = store.vehiculosPorCliente;
    } else {
    console.log('Cliente no está logueado o no tiene ID');
    }
} catch (error) {
    console.error('Error al cargar los vehículos:', error);

    datosVehiculos.value = []; 
}
};

onMounted(() => {
loadVehiculos();
});
</script>

<template>
  <div id="container">
    <v-card class="card">
      <v-card-title id="card-title">Vehículos</v-card-title>
      <v-divider></v-divider>
      <br>
      <v-col>
        <v-row>
          <v-col>
            <v-data-table
              :headers="headers"
              :items="datosVehiculos"
              item-value="name"
            ></v-data-table>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>

<style scoped>
#container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: 100vh;
}

.card {
  grid-column: 2; 
  width: 60vw;
  height: 100vh;
  overflow-y: auto;
}

#card-title {
  margin-top: 10px;
  text-align: start;
  font-size: xx-large;
}
</style>