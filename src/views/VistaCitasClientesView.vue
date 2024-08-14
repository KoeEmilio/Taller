<script setup>
import { ref, onMounted } from 'vue'
import { VDateInput } from 'vuetify/labs/VDateInput'

const showFormulario = ref(false)
const mostrarFormulario = () => {
    showFormulario.value = !showFormulario.value
}

const registrarOrden = () => {
    mostrarFormulario()
}

const datos = ref([])

const mostrarinfo  = () =>{
    fetch('http://pruebapdo.com/Ordenes')
    .then(response => response.json())
    .then(json => {
        if(json.status===200){
            datos.value = json.data
        }
    })
}

onMounted(() => {
    mostrarinfo()
})

// Nuevas variables y funciones
const selectedDate = ref('')
const selectedTime = ref('')
const times = ref(['09:00', '10:00', '11:00', '12:00', '13:00', '14:00']) // Ejemplo de horas disponibles

function submitForm() {
  if (selectedDate.value && selectedTime.value) {
    alert(`Cita agendada para el ${selectedDate.value} a las ${selectedTime.value}`)
    mostrarFormulario()
  } else {
    alert("Por favor, completa todos los campos.")
  }
}
</script>

<template>
<div class="principal">


    <div class="container">
        <v-app>
            <v-app-bar app color="#1a1a1a" dark>
                <router-link to="/MenuOrdenes">
                <v-btn
                    class="ma-3"
                    color="white"
                    icon="mdi-arrow-left-bold-circle-outline"
                > </v-btn>
                </router-link>
                <h1 class="text-center w-100">CITAS</h1>
            </v-app-bar>
            
            <v-main>
                <v-container>
                    <v-row>
                        <v-row  justify="start">
                            <v-col cols="auto" class="d-flex align-center">
                                <div id="Cont">
                                    <p class="agregar-text">Agendar Cita</p>
                                    <v-btn @click="mostrarFormulario" id="guindo-btn" icon="mdi-plus" size="x-small" ></v-btn>  
                                </div>
                            </v-col>
                            <v-dialog v-model="showFormulario" max-width="500px">
                                <div v-show="showFormulario === true" >
                                    <v-card class="pa-5">
    <v-card-title class="headline">Agendar Cita</v-card-title>
    <v-card-text>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field 
                        label="Fecha" 
                        type="date" 
                        v-model="selectedDate"
                        :min="new Date().toISOString().substr(0, 10)"
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-select
                        v-model="selectedTime"
                        :items="times"
                        label="Hora"
                        required>
                    </v-select>
                </v-col>
            </v-row>
        </v-container>
    </v-card-text>
    <v-btn class="BtnGuindo" @click="submitForm">Registrar</v-btn>
</v-card>
                                </div>
                            </v-dialog>
                        </v-row>
                        <v-col cols="10">
                            <v-data-table id="Tabla" :items="datos" :headers="headers" class="elevation-1">  </v-data-table> 
                        </v-col>
                    </v-row>
                </v-container>

            </v-main>
        </v-app>
    </div>   
</div>                  
</template>

<style scoped>

#Cont{
    display: flex;
    height: 67.7vh;
    width: 11.2vw;
    margin-left: 15%;
    justify-content: space-between;

}

.container{
    width: 87vw;
    height: 100vh;
    justify-content:space-around; 
  

}

.agregar-text {
    font-weight:bolder;
    padding: 4%;
}
.scrollable-content{
    max-height: 300px;
    overflow-y: auto;
}

#Tabla{
    max-height: 500px;
    overflow-y: auto;
}

#guindo-btn{
  background-color: #1a1a1a ; /* Color guindo */
  color: white ; /* Color del icono */
  margin-left: 10px; /* Margen izquierdo */
  border-radius: 30%; /* Redondear el botón */
}

.BtnGuindo{
    background-color: #1a1a1a;
    color: white ;
}
</style>