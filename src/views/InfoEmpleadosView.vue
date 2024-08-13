<script setup>
import { ref, onMounted } from 'vue';

const datos = ref([]);
const search = ref('');

const mostrarinfo = () => {
  fetch('http://testpdo.com/empleados')
    .then(response => response.json())
    .then(json => {
    if (json.status === 200) {
        datos.value = json.data;
    }
    });
};

onMounted(() => {
mostrarinfo();
});

</script>

<template>
    
    <v-app>
        
    <v-app-bar app color="#1a1a1a" dark>

        <router-link to="MenuPrincipal">
          <v-btn class="ma-3" color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
        </router-link>
        <h1 class="text-center w-100">EMPLEADOS REGISTRADOS</h1>
      </v-app-bar>
      
      <v-main>
        <v-container>
          <v-card flat>
            <v-card-text>
              <v-text-field
                v-model="search"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
                class="mx-4"
              ></v-text-field>
            </v-card-text>
            <v-data-table
            :headers="headers"
            :items="datos"
            :search="search"
            ></v-data-table>
        </v-card>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <style scoped>
  .v-application {
    background: #f5f5f5;
  }
  .v-card {
    margin-top: 20px;
  }
  .v-data-table {
    margin-top: 10px;
  }
  </style>