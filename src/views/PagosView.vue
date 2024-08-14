<script setup>
import { onMounted, ref } from 'vue';
import { computed } from 'vue';



const datos = ref([])
const mostrarPagos = () => {
  fetch('http://miproyecto.com/pagos')
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        datos.value = json.data;
      }
    })
}
onMounted(() => {
  mostrarPagos()
});

// Propiedad computada para filtrar los datos basados en la búsqueda
const search = ref('')
const filteredDatos = computed(() => {
  if (!search.value) return datos.value;
  return datos.value.filter(pago =>
    pago.Cliente.toLowerCase().includes(search.value.toLowerCase())
  );
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
        <br>
        <br>
        <br>
        <v-container class="container">
          <v-col>
          
          <v-text-field
            v-model="search"
            label="Buscar cliente"
            class="my-4"
            append-icon="mdi-magnify"
          ></v-text-field>
          <v-row>
            <v-card class="card" v-for="(pago,index) in filteredDatos" :key="index">
            <v-col>
              <v-row class="titulo">
                <h5>{{ pago.Nombre_servicio }}</h5>
              </v-row>
              <v-row>
                <v-divider></v-divider>
              </v-row>
            </v-col>
            <v-col>
              <div>
                <br>
                <v-row>
                  
                  <h5>Fecha: {{ pago.Fecha }}</h5>
                  <br>
                  <br>
                </v-row>
                <v-row>
                  <h5>Cliente: {{ pago.Cliente }}</h5>
                  <br>
                  <br>
                </v-row>
                <v-row>
                  <h5>Forma de pago: {{ pago.Forma_Pago }}</h5>
                  <br>
                  <br>
                </v-row>
                <v-row>
                  <h5>Monto: {{ pago.Cantidad_Total }}</h5>
                  <br>
                  <br>
                </v-row>
                <v-row>
                  <h5>Estado de pago: </h5>
                  <div class="estatus">&nbsp; {{ pago.Estatus_del_pago }}</div>
                  <br>
                  <br>
                </v-row>
                <v-row id="container-botones">
                  <p class="btn" id="btn-liberar">Liberar</p>
                  <p class="btn" id="btn-cancelar">Cancelar</p>
                  <p class="btn" id="btn-abonar">Abonar</p>
                </v-row>
              </div>
            </v-col>
            
          </v-card>
          </v-row>
          
          </v-col>
        </v-container>
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
  height: 350px;
  margin: 10px;
  border-radius: 10px;
  flex-wrap: wrap;
}
.card:hover{
  filter: brightness(96%); /* Oscurece la tarjeta al pasar el ratón */
}
.titulo{
  justify-content: center;
  align-items:center ;
  height: 50px;
  color: black ;
}

.estatus{
  border-radius: 10px;
  margin-top: -2px;
}
#container-botones{
  display: flex;
  text-align: center;  
}
.btn{
  width: 90px;
  margin-left: 0px;
  cursor: pointer; /* Cambia el cursor al pasar sobre el botón */

}
.btn:hover{
    filter: brightness(99%); /* Oscurece la tarjeta al pasar el ratón */
    
}
#btn-liberar:hover {
  color: #4caf50; /* Color de fondo para 'Liberar' */
}
#btn-cancelar:hover{
  color: #f30000; /* Color de fondo para 'Cancelar' */
}
#btn-abonar:hover {
  color: #21dbf3; /* Color de fondo para 'Abonar' */
}

</style>
