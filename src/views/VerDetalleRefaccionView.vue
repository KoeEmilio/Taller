<script setup>

</script>

<template>
    <v-app>
    <v-app-bar app color="#1a1a1a" dark>
        <router-link to="MenuDetalles">
        <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
        ></v-btn>
        </router-link>
        <h1 class="titulo-detalle text-center w-100">VER DETALLE REFACCION</h1>
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
.titulo-detalle{
  padding-right: 40px;
}

@media (min-width: 768px) {
  .titulo-detalel{
  font-size: 40px;
  align-items: center;
}
}
</style>