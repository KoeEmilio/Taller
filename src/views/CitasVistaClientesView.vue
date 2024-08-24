<script setup>
import { useClientesStore } from '@/stores/clientesStore';
import { onMounted, ref } from 'vue';

const store = useClientesStore();
const datosCitas = ref([]);



const loadCitas = async () => {
    const local = JSON.parse(localStorage.getItem('clienteLogueado'));
try {
    if (local.UsuarioID) {
    await store.fetchCitas();
    datosCitas.value = store.citas;
    } else {
    console.log('Cliente no está logueado o no tiene ID');
    }
} catch (error) {
    console.error('Error al cargar los vehículos:', error);

    datosVehiculos.value = []; 
}
};

onMounted(() => {
loadCitas();
});
</script>


<template>
    <div id="container">
        <v-card class="card">
            <v-card-title id="card-title"><strong>CITAS</strong></v-card-title>
            <v-divider></v-divider>
            <br>
            <v-col>
                <v-row>
                    <v-col>

                        <v-data-table
                        :headers="headers"
                        :items="datosCitas"
                        item-value="name"
                        ></v-data-table>

                    </v-col>
                </v-row>
            </v-col>

        </v-card>
    </div>
</template>
<style scoped>
#container{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 100vh;
}
.card{
    grid-column: 2; 
    width: 56vw;
    height: 100vh;
    overflow-y: auto;
}
#card-title{
    background-color: #1a1a1a;
    text-align:center;
    color: white;
    font-size: xx-large;
}
</style>