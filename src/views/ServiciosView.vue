<script setup>
import { ref, onMounted } from 'vue';

const datos = ref([]);
const search = ref('');

const mostrarinfo = () => {
    fetch('http://testpdocrudo.com/servicios')
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

const headers = ref([
    
    { text: 'Nombre_Servicio', value: 'Nombre_Servicio' },
    { text: 'Descripción', value: 'Descripcion' },
    { text: 'Tipo_Servicio', value: 'Tipo_Servicio' },
    { text: 'Costo_Servicio', value: 'Costo_Servicio' },
    { text: 'Acciones', value: 'actions', sortable: false }
]);

const selectedCliente = ref({
Nombre_Servicio: '',
Descripcion: '',
Costo_Servicio: '',
Nombre_TS: '',
Tipo_ServicioID: '',
ServicioID: '' 
})

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
                <template v-slot:item.actions="{ item }">
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

<style scoped>
.v-data-table {
    margin-top: 20px;
}

</style>