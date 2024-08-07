<script setup>

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
        <h1 class="text-center w-100">VER DETALLE</h1>
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

</style>