<script setup>
import { ref, onMounted } from 'vue';

const datos = ref([]);
const search = ref('');

const mostrarinfo = () => {
  fetch('http://testpdocrud.com/vehiculos')
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
      <router-link to="VehiculosEmpleados">
        <v-btn class="ma-3" color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="text-center w-100">VEHÍCULOS REGISTRADOS</h1>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-card flat>
          <v-card-text>
            <v-text-field
              v-model="search"
              label="Buscar"
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
          >
          </v-data-table>
        </v-card>
        
        <v-dialog v-model="showEditFormulario" max-width="500px">
          <div v-show="showEditFormulario === true">
            <v-card class="pa-5">
              <v-card-title>Editar Vehículo</v-card-title>
              <v-card-text class="scrollable-content">
                <v-text-field label="Marca" v-model="selectedVehiculo.Marca"></v-text-field>
                <v-text-field label="Modelo" v-model="selectedVehiculo.Modelo"></v-text-field>
                <v-text-field label="Año" v-model="selectedVehiculo.Año" type="number"></v-text-field>
                <v-text-field label="Placa" v-model="selectedVehiculo.Placa"></v-text-field>
                <v-text-field label="Propietario" v-model="selectedVehiculo.Propietario"></v-text-field>
                <v-btn color="#1a1a1a" @click="editarVehiculo">
                  <v-icon left>mdi-content-save</v-icon> 
                  Guardar
                </v-btn>
              </v-card-text>
            </v-card>
          </div>
        </v-dialog>
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
