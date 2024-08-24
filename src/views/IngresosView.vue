<script setup>
import { ref, onMounted,watch } from 'vue'


const snackbar = ref(false) // Estado del snackbar
const mensaje = ref('Selecciona el mes por el que filtraras los datos')
const selectedMonth = ref('')
const selectedYear = ref('')

const datos = ref([])
const showIngresos = (month , year ) => {    
    fetch(`http://testpdocrudo.com/ingresos/${month}/${year}`)
        .then(response => response.json())
        .then(json => {
            if (json.status === 200) {
              datos.value = json.data
              calcularTotal();
            } else {
                console.error('Error en la respuesta:', json.msg); 
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error); 
        });
}

const total = ref(0)

const calcularTotal = () => {
    total.value = datos.value.reduce((acc, item) => acc + parseFloat(item.Total), 0);
}

onMounted(() => {
  if (selectedMonth.value && selectedYear.value) {
    showIngresos(selectedMonth.value, selectedYear.value);
  }
});


// Reaccionar a cambios en selectedMonth y selectedYear
watch([selectedMonth, selectedYear], ([newMonth, newYear]) => {
    if (newMonth && newYear) {
        showIngresos(newMonth, newYear);
    }
});


const months = [
  { text: 'Enero', value: 1 },
  { text: 'Febrero', value: 2 },
  { text: 'Marzo', value: 3 },
  { text: 'Abril', value: 4 },
  { text: 'Mayo', value: 5 },
  { text: 'Junio', value: 6 },
  { text: 'Julio', value: 7 },
  { text: 'Agosto', value: 8 },
  { text: 'Septiembre', value: 9 },
  { text: 'Octubre', value: 10 },
  { text: 'Noviembre', value: 11 },
  { text: 'Diciembre', value: 12 }
];

const years = [
  { text:'2022', value: 2022 },
  { text:'2023', value: 2023 },
  { text:'2024', value: 2024 },  
  { text:'2025', value: 2025 },  
  { text:'2026', value: 2026 },  
  { text:'2027', value: 2027 },  
  { text:'2028', value: 2028 },  
  { text:'2029', value: 2029 },  
  { text:'2030', value: 2030 },  
  { text:'2031', value: 2031 },  
  { text:'2032', value: 2032 }
]
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
          <v-col cols="9" >
            <v-row>
              <p>Selecciona un mes: </p> &nbsp;
              <select v-model="selectedMonth" class="select">
                <option value="" disabled selected>Meses</option>
                <option v-for="month in months" :key="month.value" :value="month.value">
                  {{ month.text }}
                </option>
              </select>
              &nbsp;
              &nbsp;
              &nbsp;
              <p>Selecciona un año: </p>&nbsp;
              <select v-model="selectedYear" class="select">
                <option value="" disabled selected>Años</option>
                <option v-for="year in years" :key="year.value" :value="year.value">
                  {{ year.text }}
                </option>
              </select>
            </v-row>
            
          </v-col>
          <v-col cols="3">
            <v-card>
              <v-card-title>Total: </v-card-title>
              <v-card-title >${{ total }}</v-card-title>
            </v-card>
          </v-col>
          
        </v-row>
        <v-row class="contenedor-tabla">
          <v-col>
            <v-data-table-virtual
            :headers="headers"
            :items="datos"
            ></v-data-table-virtual>
          </v-col>          
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
  justify-content: center;
}

</style>