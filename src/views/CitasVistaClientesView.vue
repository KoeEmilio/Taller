<script setup>
import { onMounted, ref } from 'vue';


const datos = ref([])
const showDetails = () => {
    fetch('http://testpdocrud.com/citas')
        .then(response => response.json())
        .then(json => {
            if (json.status === 200) {
                datos.value = json.data
            }
             else {
                console.error('Error en la respuesta:', json.msg); 
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error); 
        });
}

onMounted(() => {
    showDetails();
});
</script>
<template>
    <div class="container-principal">
        <v-card class="first-card">
            <v-card-title class="card-title">Mis Citas</v-card-title>
            <v-divider></v-divider>
             <br>
                <v-row> 
                    <v-col cols="10" offset="1">
                        <div id="nombre-columnas">

                            <v-col class="column">
                                <v-row>
                                    <v-card-text>N° Cita</v-card-text>
                                </v-row>
                            </v-col>

                            <v-col class="column">
                                <v-row>
                                    <v-card-text>Cliente</v-card-text>
                                </v-row>
                            </v-col>

                            <v-col class="column">
                                <v-row>
                                    <v-card-text>Fecha cita</v-card-text>                                    
                                </v-row>
                            </v-col>
                            <v-col class="column">
                                <v-row>
                                    <v-card-text>Hora</v-card-text>                                    
                                </v-row>
                            </v-col>
                            <v-col class="column">
                                <v-row>
                                    <v-card-text>Estado</v-card-text>                                    
                                </v-row>
                            </v-col>
                            <v-col class="column">
                                <v-row>
                                    <v-card-text>Empleado</v-card-text>                                    
                                </v-row>
                            </v-col>
                            

                        </div>

                        <v-row>
                            <v-col>
                                <v-divider ></v-divider>
                            </v-col>
                        </v-row>

                        <v-row id="acomodado-interno"> 
                            
                                <template  v-for="cita in datos" :key="cita['N°Cita']"  >
                                        <div class="card-interna"  >
                                            <v-col >
                                                <v-card-text> {{ cita['N°Cita'] }} </v-card-text>
                                            </v-col>
                                            <v-col >
                                                <v-card-text>{{ cita['NombreCliente'] }} </v-card-text>
                                            </v-col>
                                            <v-col >
                                                <v-card-text> {{ cita['Fecha_Cita'] }}  </v-card-text> 
                                            </v-col> 
                                            <v-col >
                                                <v-card-text> {{ cita['Hora'] }}  </v-card-text> 
                                            </v-col>  
                                            <v-col >
                                                <v-card-text> {{ cita['Estado'] }}  </v-card-text> 
                                            </v-col>
                                            <v-col >
                                                <v-card-text> {{ cita['NombreEmpleado'] }}  </v-card-text> 
                                            </v-col>                                                                        
                                        </div>   
                                </template>
                            
                        </v-row>
                    </v-col>
                </v-row>
        </v-card>
    </div>
</template>
<style scoped>
.container-principal{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 100vh;
}
.first-card{
    grid-column: 2;
    width: 60vw;
    height: 100vh;
    overflow-y: auto;
}
.card-title{
    font-size: xx-large;
    margin-top: 10px;
}
#acomodado-interno{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-left: 1px;
}
#nombre-columnas{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-wrap: nowrap;
}
.card-interna{
    display: flex;
    height: 95px;
}

</style>