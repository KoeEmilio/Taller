<script setup>

import { ref, onMounted } from 'vue'

const datos = ref([])

    const mostrarinfo  = () =>{
        fetch('http://testpdocrud.com/prueba')
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
    <v-app-bar app color="#1a1a1a" dark>
        <router-link to="MenuOrdenesEmpleado">
        <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
        ></v-btn>
        </router-link>
        <h1 class="text-center w-100">VER ÓRDENES</h1>
    </v-app-bar>

    <v-card
    flat
>
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
    :items="desserts"
    :search="search"
    ></v-data-table>
</v-card>
    </v-app>
</template>
<style scoped>

</style>