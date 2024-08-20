<script setup>
import { ref, onMounted,watch } from 'vue'


const snackbar = ref(false) // Estado del snackbar
const mensaje = ref('Selecciona el mes por el que filtraras los datos')
const selectedMonth = ref('')

const datos = ref([])
const showIngresos = (mes = '') => {
    let url = 'http://testpdocrud.com/Ingresos';
    if (mes) {
        url += `/${mes}`;  // Añadimos el parámetro del mes a la URL
    }

    fetch(url)
        .then(response => response.json())
        .then(json => {
            if (json.status === 200) {
              datos.value = json.data
            } else {
                console.error('Error en la respuesta:', json.msg); 
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error); 
        });
}
onMounted(() => {
    showIngresos();
});

// Escuchar cambios en `selectedMonth` para filtrar los datos
watch(selectedMonth, (newMonth) => {
    showIngresos(newMonth);  // Filtra los datos según el mes seleccionado
});

const months = [
  { text: 'Enero', value: '01' },
  { text: 'Febrero', value: '02' },
  { text: 'Marzo', value: '03' },
  { text: 'Abril', value: '04' },
  { text: 'Mayo', value: '05' },
  { text: 'Junio', value: '06' },
  { text: 'Julio', value: '07' },
  { text: 'Agosto', value: '08' },
  { text: 'Septiembre', value: '09' },
  { text: 'Octubre', value: '10' },
  { text: 'Noviembre', value: '11' },
  { text: 'Diciembre', value: '12' }
];
</script>

<template>
  <v-app>
    <v-container class="container" fluid>
      <v-app-bar app color="#1a1a1a">
        <router-link to="/Clientes">
          <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
          ></v-btn>
        </router-link>
        <h1 class="text-center w-100">INGRESOS</h1>
      </v-app-bar>

      <v-main>
        <v-container class="py-5">
          <v-row class="summary-options" justify="center">
            <v-col cols="12" md="4">
              <v-text-field 
                label="Fecha" 
                type="date" 
                v-model="selectedDate"
                :max="new Date().toISOString().substr(0, 10)"
                required>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-btn block @click="verResumen('semana')">Resumen de la Semana</v-btn>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn block @click="verResumen('mes')">Resumen del Mes</v-btn>
            </v-col>
          </v-row>

      <v-card class="total-card" outlined>
        <v-card-title>Total: {{ formatCurrency(total) }}</v-card-title>
      </v-card>

      <v-card class="income-card" v-for="orden in ordenesFiltradas" :key="orden.id">
        <v-card-title>{{ orden.servicio }}</v-card-title>
        <v-card-subtitle>Fecha: {{ orden.fecha }}</v-card-subtitle>
        <v-card-text>
          <div>Costo: {{ formatCurrency(orden.costo) }}</div>
          <div>Realizado por: {{ orden.tecnico }}</div>
          <div>Detalles: {{ orden.detalles }}</div>
          <div v-if="ordenesCliente(orden.cliente).length > 1">
            <strong>Más órdenes de este cliente:</strong>
            <ul>
              <li v-for="otraOrden in ordenesCliente(orden.cliente)" :key="otraOrden.id">
                {{ otraOrden.servicio }} - {{ otraOrden.fecha }}
              </li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  padding-top: 90px;
}
.contenedor-interno{
  display: flex;
  flex-direction: row;
  width: 100vw;
}
.boton-ayuda{
  background: black;
  color: white;
}
.contenedor-botones{
  display: flex;
  justify-content: start;
  width: 86vw;
}
.select{
  text-align: center;
  width: 200px;
  background: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 10px;
}
.mensaje{
  display: flex;
  justify-content: center;
}
.contenedor-tabla{
  width: 94vw;
  margin-left: -70px;
}

</style>
