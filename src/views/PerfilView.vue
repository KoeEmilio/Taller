<script setup>
import { ref, onMounted } from 'vue';
import { useClientesStore } from '@/stores/clientesStore';
const tipoPersona = ref(['Fisico','Moral'])
const seleccionTipoPersona = ref('')

const store = useClientesStore()
const datosPerfil = ref([]);


const loadPerfil = async () => {
    const local = JSON.parse(localStorage.getItem('clienteLogueado'));
try {
    if (local.UsuarioID) {
    await store.fetchPerfil();
    datosPerfil.value = store.perfil;
    console.log(datosPerfil.value);
    } else {
    console.log('Cliente no está logueado o no tiene ID');
    }
} catch (error) {
    console.error('Error al cargar los vehículos:', error);

    datosPerfil.value = []; 
}
};

onMounted(() => {
loadPerfil();
});


</script>

<template>
    <div>
        <div class="first-container">
            <v-card class="card">
                <v-card-title id="card-title">Perfil</v-card-title>
                <v-divider></v-divider>
                <v-col>
                    <v-row>
                        <v-col>
                            <v-card-text>Nombre Completo</v-card-text>
                            <v-text-field
                                variant="solo"
                                v-if="datosPerfil[0]"
                                v-model="datosPerfil[0].Nombre"
                                disabled
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-card-text>Teléfono</v-card-text>
                            <v-text-field
                                variant="solo"
                                v-if="datosPerfil[0]"
                                v-model="datosPerfil[0].Telefono"
                                disabled
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card-text>Direccion</v-card-text>
                            <v-text-field
                                variant="solo"
                                v-if="datosPerfil[0]"
                                v-model="datosPerfil[0].Direccion"
                                disabled
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card-text>Tipo De Cliente</v-card-text>
                            <v-select
                                variant="solo"
                                :items="tipoPersona"
                                density="default"
                                label="Persona"
                                v-if="datosPerfil[0]"
                                v-model="datosPerfil[0].Tipo_Cliente"
                                disabled
                            ></v-select>
                            <v-card-text v-if="seleccionTipoPersona === 'Moral'">
                                Nombre De la Empresa
                            </v-card-text>
                            <v-text-field
                                variant="solo"
                                v-if="seleccionTipoPersona === 'Moral'"
                            ></v-text-field>
                        
                        </v-col>
                    </v-row>
                </v-col>
            </v-card>
        </div>
    </div>
</template>

<style scoped>
.first-container{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 100vh;
}

.card{
    grid-column: 2;
    background-color: white;
    width: 60vw;
    height: 100vh;
    overflow-y: auto;
}

#card-title{
    margin-top: 10px;
    font-size: xx-large;
    background-color: white;
}

.btn-agregar{
    background-color: rgb(220, 224, 245);
    transition: transform 0.2s ease; /* Transición suave */
}
.btn-agregar:hover {
    transform: translateY(4px); /* Desplazamiento hacia arriba al pasar el ratón */
}

</style>