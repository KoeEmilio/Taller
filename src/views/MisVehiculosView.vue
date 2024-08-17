<script setup>
import { onMounted, ref } from 'vue';

const datosVehicuos = ref([])

const ShowAutos = () =>{
    fetch('http://18.117.184.23/misVehiculos')
    .then(response => response.json())
    .then(json=>{
        if(json.status === 200){
            datosVehicuos.value = json.data
        }
    })
}

onMounted (() => {
    ShowAutos()
})

</script>


<template>
    <div id="container">
        <v-card class="card">
            <v-card-title id="card-title">Vehiculos</v-card-title>
            <v-divider></v-divider>
            <br>
            <v-col>
                <v-row>
                    <v-col>
                        <v-data-table-virtual
                        :headers="headers"
                        :items="datosVehicuos"
                        height="400"
                        item-value="name"
                        ></v-data-table-virtual>
                    </v-col>
                </v-row>
            </v-col>

        </v-card>
    </div>
</template>
<style scoped>
#container{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 100vh;
}
.card{
    grid-column: 2; /* Coloca la tarjeta en la segunda columna */
    width: 60vw;
    height: 100vh;
    overflow-y: auto;
}
#card-title{
    margin-top: 10px;
    text-align:start;
    font-size: xx-large;
}
</style>