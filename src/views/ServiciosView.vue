<script setup>

import { ref, onMounted } from 'vue'

const datos = ref([])

    const mostrarinfo  = () =>{
        fetch('http://testpdo.com/Servicios')
        .then(response => response.json())
        .then(json => {
            if(json.status=200){
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
        <router-link to="/Vehiculos">
        <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
        ></v-btn>
        </router-link>
        <h1 class="text-center w-100">SERVICIOS</h1>
    </v-app-bar>

    <v-main>
        <v-container>
        <v-data-table :items="datos" :headers="headers" class="elevation-1"></v-data-table>
        </v-container>
    </v-main>
</v-app>
</template>

<style scoped>
</style>