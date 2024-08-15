<script setup>
import { ref, computed } from 'vue';
import { useProfileStore } from '@/stores/counter';

const tipoPersona = ref(['Fisico','Moral'])
const seleccionTipoPersona = ref('')

const store = useProfileStore()

const title = computed ({
    get: () => store.title, // Obtén el valor actual del título desde la tienda
    set: (newTitle) => store.setTitle(newTitle) // Actualiza el título en la tienda
})

function Agregar() {
    console.log('Clickeado')
}

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
                                <v-text-field variant="solo" v-model="title"></v-text-field>
                                
                            </v-col>
                            <v-col>
                                <v-card-text>Teléfono</v-card-text>
                                <v-text-field variant="solo"></v-text-field>   
                            </v-col>
                            
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-card-text> Direccion</v-card-text>       
                                <v-text-field variant="solo"></v-text-field>   
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-card-text >Tipo De Cliente</v-card-text>
                                <v-select variant="solo" :items="tipoPersona" density="default" label="Persona" v-model="seleccionTipoPersona"> </v-select>                               
                                
                                <v-card-text v-if="seleccionTipoPersona === 'Moral'">Nombre De la Empresa</v-card-text>
                                <v-text-field variant="solo" v-if="seleccionTipoPersona === 'Moral'" > </v-text-field>
                                
                                <v-btn class="btn-agregar" title="Pulsa para agregar" @click="Agregar">Agregar</v-btn> 
                               
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