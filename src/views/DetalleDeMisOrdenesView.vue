<script setup>
import { onMounted, ref } from 'vue';


const dialog = ref(false)
const ordenSeleccionada = ref(null)


const MostrarDialog = (orden) =>{
    ordenSeleccionada.value = orden;
    dialog.value = !dialog.value;
}



const datos = ref([])
const showDetails = () => {
    fetch('http://miproyecto.com/detalles')
        .then(response => response.json())
        .then(json => {
            if (json.status === 200) {
                datos.value = json.data
            }
             else {
                console.error('Error en la respuesta:', json.msg); // Mostrar mensaje de error si el status no es 200
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Manejar errores
        });
}
onMounted(() => {
    showDetails();
})

</script>

<template>
    <div id="container">
        <v-card class="card"> 
            <v-card-title id="card-title">Mis Ordenes</v-card-title>
            <v-divider></v-divider>
            <br>
                <v-row> 
                    <v-col cols="10" offset="1">
                        <div id="nombre-columnas">

                            <v-col class="column" cols=3>
                                <v-row>
                                    <v-card-text>N° Orden</v-card-text>
                                </v-row>
                            </v-col>

                            <v-col class="column" cols="3">
                                <v-row>
                                    <v-card-text>Fecha De Entrega</v-card-text>
                                </v-row>
                            </v-col>

                            <v-col class="column" cols="6" offset="2">
                                <v-row>
                                    <v-card-text>Servicio</v-card-text>                                    
                                </v-row>
                            </v-col>

                        </div>

                        <v-row>
                            <v-col>
                                <v-divider ></v-divider>
                            </v-col>
                        </v-row>

                        <v-row id="acomodado-interno"> 
                            <v-tooltip  v-for="orden in datos" :key="orden['N° Orden']" location="end bottom" text="Tocar para ver más detalles">
                                <template #activator="{props}">
                                        <v-card class="card-interna" v-bind="props" @click="MostrarDialog(orden)" >

                                            <v-col cols="3">
                                                <v-card-text> {{ orden['N° Orden'] }} </v-card-text>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-card-text>{{ orden['Fecha de Entrega'] }} </v-card-text>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-card-text> {{ orden['Servicio'] }}  </v-card-text> 
                                            </v-col>  
                                            
                                        </v-card>   
                                </template>
                            </v-tooltip>
                            
                        </v-row>
                    </v-col>
                </v-row>
                    

                    <v-dialog class="container-dialog" v-model="dialog" >
                        <v-card class="text-center" height="150">
                            <v-card-text>

                            <div>
                                <v-row v-if="ordenSeleccionada">
                                    <v-col>
                                        <div id="dialog">

                                            <v-col>
                                                <v-row>
                                                    <v-col>
                                                        <p>N° Orden</p>
                                                        <v-divider></v-divider>
                                                        <v-card-text> {{ ordenSeleccionada['N° Orden'] }} </v-card-text>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            
                                            <v-col>
                                                <v-row>
                                                    <v-col> 
                                                        <p>Fecha De Entrega</p>
                                                        <v-divider></v-divider>
                                                        <v-card-text>{{ ordenSeleccionada['Fecha de Entrega'] }} </v-card-text>
                                                    </v-col>
                                                </v-row>
                                            </v-col>

                                            <v-col>
                                                <v-row> 
                                                    <v-col>
                                                        <p>Servicio</p>
                                                        <v-divider></v-divider>
                                                        <v-card-text> {{ ordenSeleccionada['Servicio'] }}  </v-card-text>
                                                    </v-col>
                                                    
                                                </v-row>
                                            </v-col>

                                            <v-col>
                                                <v-row>
                                                    <v-col>
                                                        <p>Mano De Obra</p>
                                                        <v-divider></v-divider>
                                                        <v-card-text> {{ ordenSeleccionada['Costo de mano de obra'] }}</v-card-text>
                                                    </v-col>
                                                                                                
                                                </v-row>
                                            </v-col>

                                            <v-col>
                                                <v-row>
                                                    <v-col>
                                                        <p>Fin Garantía</p>
                                                        <v-divider></v-divider>
                                                        <v-card-text cols="4"> {{ ordenSeleccionada['Fecha Fin De Garantía'] }}</v-card-text>
                                                    </v-col>
                                                    
                                                </v-row>
                                            </v-col>
                                            
                                        </div>
                                        
                                    </v-col>

                                </v-row>                                                   
                            </div>

                            </v-card-text>
                        </v-card>
                    </v-dialog>
            
            </v-card>
    </div>
</template>
<style scoped>
#acomodado-interno{
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-left: 1px;
}
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
    margin-top: 10px;
    text-align: start;  
    font-size: xx-large;
}
#nombre-columnas{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-wrap: nowrap;
}
.column{
    display: flex;
    flex-wrap: nowrap;
}
.card-interna{
    display: flex;
    width: 630px;
    height: 70px;
    margin-bottom:10px;
    background-color: rgb(238, 238, 238);
    transition: transform 0.2s ease; /* Transición suave */
}
.card-interna:hover{
    transform: translateY(4px); /* Desplazamiento hacia arriba al pasar el ratón */
}
.card-interna v-card-text{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.text-center{
    background-color: rgb(238, 238, 238);
}

#dialog{
    display: flex;
    width: 100%;
    height: 100%;
}
.container-dialog{
    display: flex;
    width: 1000px;
}

</style>