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
    <v-container class="container">
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
      <v-col>
        <v-row>
          <v-btn class="boton-ayuda" size="small" density="compact" icon @click="snackbar = true">
            <v-icon size="13px">mdi-help</v-icon> 
          </v-btn>
          <v-snackbar v-model="snackbar" class="mensaje" :timeout="2000"> 
             {{ mensaje }}
          </v-snackbar>
          <br>
          <br>
        </v-row>

        <v-row class="contenedor-botones">
          <p>Selecciona un mes: </p> &nbsp;
          <select v-model="selectedMonth" class="select">
            <option value="" disabled selected>Meses</option>
            <option value="">Ninguno</option>
            <option v-for="month in months" :key="month.value" :value="month.value">
              {{ month.text }}
            </option>
          </select>
        </v-row>
        <v-row class="contenedor-tabla">
          <v-data-table-virtual
          :headers="headers"
          :items="datos"
          ></v-data-table-virtual>
        </v-row>
      </v-col>  
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
