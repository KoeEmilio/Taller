<script setup>
import { onMounted, ref } from 'vue';

const search = ref('')



const datos = ref([])
const mostrarPagos = () => {
  fetch('http:/testpdocrudo.com/pagos')
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        datos.value = json.data;
        console.log(datos)
      }
    })
}

onMounted(() => {
  mostrarPagos()
});


</script>

<template>
  <v-app>
    <v-app-bar app color="#1a1a1a">
        <router-link to="/Clientes">
        <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
        ></v-btn>
        </router-link>
        <h1 class="text-center w-100">Pagos</h1>
        </v-app-bar>

        <main>
          <v-container>
            <br>
            <br>
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
              <v-row justfy="start">
                <v-col>
                  <v-data-table
                  :headers="headers"
                  :items="datos"
                  :search="search"
                ></v-data-table>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </main>
        
  </v-app>
</template>

<style scoped>
.container{
  display: flex;
  height:99vh;
  width:100vw;
}
.card{
  background-color: rgb(245, 245, 245);
  color: rgb(80, 80, 80);
  width: 272px;
  height: 390px;
  margin: 10px;border-radius: 10px;
  flex-wrap: wrap;
  overflow: hidden; 
  cursor:context-menu;
}
.card:hover{
  filter: brightness(96%); 
}
.titulo{
  justify-content: center;
  align-items:center ;
  height: 50px;
  color: black ;
}


.servicios {
  overflow: hidden; 
  text-overflow: ellipsis; 
  white-space: nowrap;
  cursor: pointer;
}

.estatus
{
  border-radius: 10px;
  margin-top: 2px;
  color: black;
}
.estatus.pagado {
  color: green; 
}

.estatus.cancelado {
  color: red; 
}

#container-botones{
  display: flex;
  text-align: center;  
}

.btn{
  width: 80px;
  cursor: pointer;
}
.btn:hover{
  filter: brightness(99%); 
    
}
#btn-liberar:hover {
  color: #4caf50; 
}
#btn-cancelar:hover{
  color: #f30000; 
}
#btn-abonar:hover {
  color: #21dbf3; 
}
.container-dialog{
  width: 400px;
}
.card-dialog{
  background-color: rgb(223, 223, 223);
  height: 500px;
  width: 360px;
}
.contenedor-datos-dialog{
  margin-left: 30px;
}
.cliente-dialog{
  text-align: center;
}

</style>
