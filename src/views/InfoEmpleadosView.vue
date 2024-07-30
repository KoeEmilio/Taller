<script setup>

</script>

<template>
    <v-app>
        <v-container></v-container>
    <v-app-bar app color="#7d0100" dark>
        <router-link to="Empleados">
        <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
        ></v-btn>
        </router-link>
        <h1 class="text-center w-100">EMPLEADOS REGISTRADOS</h1>
    </v-app-bar>

    <v-card
    title=""
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