<script setup>
import { ref, onMounted } from 'vue'
import { VDateInput } from 'vuetify/labs/VDateInput'


const datos = ref([])
const showFormulario = ref(false)

const mostrarFormulario = () =>{
    if(showFormulario.value === false){
        showFormulario.value = true
    }
    else if (showFormulario.value === true){
        showFormulario.value = false
    }
}

const mostrarinfo = () =>{
        fetch('http://miproyecto.com/ordenes')
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

</script>

<template>
<div class="principal">


    <div class="container">
        <v-app>
            <v-app-bar app color="#7d0100" dark>
                <router-link to="/MenuOrdenesEmpleado">
                <v-btn
                    class="ma-3"
                    color="white"
                    icon="mdi-arrow-left-bold-circle-outline"
                > </v-btn>
                </router-link>
                <h1 class="text-center w-100">Ordenes</h1>
            </v-app-bar>
            
            <v-main>
                <v-container>
                    <v-row>
                        <v-row  justify="start">
                            <v-col cols="auto" class="d-flex align-center">
                                <div id="Cont">
                                    <p class="agregar-text">Agregar</p>
                                    <v-btn @click="mostrarFormulario" id="guindo-btn" icon="mdi-plus" size="x-small" ></v-btn>  
                                </div>
                            </v-col>
                            <v-dialog v-model="showFormulario" max-width="500px">
                                <div v-show="showFormulario === true" >
                                    <v-card class="pa-5">
                                        <v-card-title>Registrar Orden</v-card-title>
                                        <v-card-text class="scrollable-content">
                                           <v-date-input label="Fecha de Ingreso" v-model="fechaIngreso"></v-date-input>
                                            <v-select label="Empleado" :items="empleados" v-model="empleado"></v-select>
                                            <v-select label="Vehículo" :items="vehiculos" v-model="vehiculo"></v-select>
                                            <v-text-field label="Motivo" v-model="motivo"></v-text-field>
                                            <v-select label="Cita" :items="citas" v-model="cita"></v-select>
                                            <v-select label="Estado" :items="estados" v-model="estado"></v-select>
                                    </v-card-text>
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
  background-color: #7d0100 ; 
  color: white ;
  margin-left: 10px;
  border-radius: 30%;
}

.BtnGuindo{
    background-color: #7d0100 ;
    color: white ;
}
</style>