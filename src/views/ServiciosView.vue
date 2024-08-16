<script setup>
import { ref, onMounted } from 'vue';

const datos = ref([]);
const search = ref('');

const mostrarinfo = () => {
<<<<<<< HEAD
  fetch('http://testpdocrud.com/servicios')
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        datos.value = json.data;
      }
    });
=======
    fetch('http://testpdocrud.com/Servicios')
        .then(response => response.json())
        .then(json => {
            if (json.status === 200) {
                datos.value = json.data;
            }
        });
>>>>>>> 4961e85a7a40a3922d4bee37df05c56ffe38b5fa
};

onMounted(() => {
    mostrarinfo();
});

const headers = ref([
    { text: 'ID Servicio', value: 'ServicioID' },
    { text: 'Nombre', value: 'Nombre_Servicio' },
    { text: 'Descripción', value: 'Descripcion' },
    { text: 'Costo', value: 'Costo_Servicio' },
    { text: 'Tipo de Servicio', value: 'Tipo_ServicioID' },
    { text: 'Acciones', value: 'actions', sortable: false }
]);

const editarServicio = (item) => 
{
    
    console.log('Editar servicio:', item);
};

const eliminarServicio = (item) => 
{ console.log('Eliminar servicio:', item);};
</script>

<template>
    <v-app>
        <v-container></v-container>
        <v-container></v-container>
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
        <v-container>
     <v-text-field
                v-model="search"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line ></v-text-field>
            <v-data-table
                :headers="headers"
                :items="datos"
                :search="search"
                class="elevation-1"
            >
                <template v-slot:item. actions="{ item }">
                    <v-btn icon @click="editarServicio(item)">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon @click="eliminarServicio(item)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-container>
    </v-app>
</template>

<style scoped></style>