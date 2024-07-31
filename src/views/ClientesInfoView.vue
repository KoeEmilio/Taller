<script setup>

import { ref, onMounted } from 'vue'

const datos = ref([])

    const mostrarinfo  = () =>{
        fetch('http://pruebapdo.com/Clientes')
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
        <v-container></v-container>
        <v-container></v-container>
    <v-app-bar app color="#7d0100" dark>
        <router-link to="Clientes">
        <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
        ></v-btn>
        </router-link>
        <h1 class="text-center w-100">CLIENTES REGISTRADOS</h1>
    </v-app-bar>

    <template v-slot:text>
    <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
    ></v-text-field>
    </template>

    <v-data-table
    :headers="headers"
    :items="datos"
    :search="search"
    ></v-data-table>
    </v-app>
</template>
<style scoped>

</style>