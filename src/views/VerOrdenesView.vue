<script setup>
import { ref, onMounted } from 'vue'
import { VDateInput } from 'vuetify/labs/VDateInput'

const showFormulario = ref(false)
const mostrarFormulario = () => {
    if (showFormulario.value === false) {
        showFormulario.value = true
    }
    else if(showFormulario.value === true) {
        showFormulario.value = false
    }
     
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
</script>

<template>
    <v-app>
    <v-app-bar app color="#1a1a1a" dark>
        <router-link to="MenuOrdenes">
        <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
        ></v-btn>
        </router-link>
        <h1 class="texto-ordenes text-center w-100">VER ORDEN</h1>
    </v-app-bar>
    <v-container></v-container>
    <v-container></v-container>
    <v-card>
    <template v-slot:text>
    </template>

    <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    ></v-data-table>
</v-card>
    </v-app>
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

.texto-ordenes{
  padding-right: 40px;
}

@media (min-width: 768px) {
  .texto-ordenes{
  align-items: center;
}
}
</style>