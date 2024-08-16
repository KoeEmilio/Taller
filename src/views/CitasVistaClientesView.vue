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
          <v-card-title id="card-title"> Mis Citas </v-card-title>
          <v-divider></v-divider>
          <br>

          <v-data-table-virtual
            :headers="headers"
            :items="datos"
            :search="search"
          >
          <template v-slot:[`item.action`]="{ item }">
            <v-btn class="boton-separado" color="#1a1a1a" @click="mostrarEditFormulario(item)">
              <v-icon left>mdi-pencil</v-icon> 
              Editar
            </v-btn>
          </template>
          </v-data-table-virtual>
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
#card-title{
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