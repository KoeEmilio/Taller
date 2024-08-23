<script setup>
import { useClientesStore } from '@/stores/clientesStore';
import { onMounted, ref } from 'vue';

const store = useClientesStore();
const datosOrdenes = ref([]);
const headers = ref([
  { text: 'Fecha_Ingreso', value: 'Fecha_Ingreso' },
  { text: 'Marca', value: 'Marca' },
  { text: 'Modelo', value: 'Modelo' },
  { text: 'Motivo', value: 'Motivo' },
  { text: 'Estado', value: 'Estado' },

]);


const loadOrdenes = async () => {
    const local = JSON.parse(localStorage.getItem('clienteLogueado'));
try {
    if (local.UsuarioID) {
    await store.fetchOrdenes();
    datosOrdenes.value = store.ordenes;
    } else {
    console.log('Cliente no está logueado o no tiene ID');
    }
} catch (error) {
    console.error('Error al cargar los vehículos:', error);

    datosOrdenes.value = []; 
}
};

onMounted(() => {
loadOrdenes();
});
</script>

<template>
  <div class="container">
    <v-card class="data-table-card">
      <v-card-title id="card-title">Mis Órdenes</v-card-title>
      <v-data-table
        :headers="headers"
        :items="datosOrdenes"
        :search="search"
        class="elevation-1"
      >
      </v-data-table>
    </v-card>
  </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.card{
    grid-column: 2;
    width: 56vw;
    height: 100vh;
    overflow-y: auto;
}

#card-title {
    text-align: start;  
    font-size: xx-large;
    margin-bottom: 20px;
}
</style>
