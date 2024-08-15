<script setup>
import { onMounted, ref,computed } from 'vue';



const dialog = ref(false)
const valorDialog = ref()
const estadoEstatus = ref('Pendiente')
const selectedIndex = ref(null);

const MostrarDialog = (pago, index) => {
  valorDialog.value = { ...pago }
  estadoEstatus.value = pago.Estatus_del_pago; 
  selectedIndex.value = index;

  if (dialog.value === false) {
    dialog.value = true
  }
  else if (dialog.value === true) {
    dialog.value = false
  }
}

// cambiar el estado del estatus
const liberarPago = () => {
  if (selectedIndex.value !== null) {
    datos.value[selectedIndex.value].Estatus_del_pago = 'Pagado';
    estadoEstatus.value = 'Pagado';
  }
}

const cancelarPago = () => {
  if (selectedIndex.value !== null) {
    datos.value[selectedIndex.value].Estatus_del_pago = 'Cancelado';
    estadoEstatus.value = 'Cancelado';
  }
}




const datos = ref([])
const mostrarPagos = () => {
  fetch('http://miproyecto.com/pagos')
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

// Propiedad computada para filtrar los datos basados en la búsqueda
const search = ref('');
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
        <router-link to="/MenuClientesEmpleados">
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
          <v-row  >
            <v-card  class="card" v-for="(pago,index) in filteredDatos" :key="index" >
              <div>
                <v-col>
                  <v-row class="titulo">
                    <h3>{{ pago.Cliente }}</h3>
                  </v-row>
                  <v-row>
                    <v-divider></v-divider>
                  </v-row>
                </v-col>


                <v-col>
                  <div>
                    <br>
                    <v-col>
                      <v-row > 
                        <h5>Fecha: {{ pago.Fecha }}</h5>
                      </v-row>
                      <br>
                      <br>
                      <v-row class="scrolling-row"> 
                        <h5 @click="MostrarDialog(pago, index)"  title="Toca para ver más." class="servicios"> Servicio(s): {{ pago.Servicios }} </h5>
                      </v-row>
                      <br>
                      <br>
                      <v-row>
                        <h5>Forma de pago: {{ pago.Forma_Pago }}</h5>
                      </v-row>
                      <br>
                      <br>
                      <v-row>
                        <h5>Monto: {{ pago.Cantidad_Total}}</h5>
                      </v-row>
                      <br>
                      <br>
                      <v-row>
                        <v-col>
                        <v-row class="estatus">Estado de pago: <h4 :class="['estatus', estadoEstatus.toLowerCase()]">&nbsp;  {{ estadoEstatus }}</h4> </v-row>

                        </v-col>
                        <br>
                        <br>
                        <br>
                      </v-row>
                      <v-row id="container-botones">
                        <p class="btn" id="btn-liberar" @click="liberarPago">Liberar</p>
                        <p class="btn" id="btn-cancelar" @click="cancelarPago">Cancelar</p>
                        <p class="btn" id="btn-abonar">Abonar</p>
                      </v-row>
                    </v-col>
                  </div>
                </v-col>
              </div>            
          </v-card>
          </v-row>
          </v-col>
        </v-container>

        
        <v-dialog class="container-dialog" v-model="dialog">
          <v-card class="card-dialog"> 
            <v-row>
              <v-col>
                <v-row>
                  <v-col  cols="11" > 
                    <v-row>
                      <v-col class="contenedor-datos-dialog">
                        <br>
                        <h2 class="cliente-dialog"> {{ valorDialog.Cliente }} </h2>
                        <br>
                        <v-row>
                          <v-divider></v-divider>
                        </v-row>
                        <br>
                        <br>
                          <h4>Fecha: {{ valorDialog.Fecha }}</h4>
                          <br>
                          <h4>Servicios: {{ valorDialog.Servicios }}</h4>
                          <br>
                          <h4>Forma de pago: {{ valorDialog.Forma_Pago }}</h4>
                          <br>
                          <h4>Monto: {{ valorDialog.Cantidad_Total }}</h4>
                          <br>
                          <h4 class="estatus">Estado de pago: <h4 :class="['estatus', estadoEstatus.toLowerCase()]"> &nbsp; {{ valorDialog.Estatus_del_pago }} </h4> </h4>
                      </v-col>
                    </v-row>
                    
                  </v-col>
                  <v-row>
                    
               
               
                  </v-row>
                  
                </v-row>

                
              </v-col>
            </v-row>
            

          </v-card>
        </v-dialog>
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
  margin: 10px;
  border-radius: 10px;
  flex-wrap: wrap;
  overflow: hidden; /* Evita que el contenido se salga de la tarjeta */
  cursor:context-menu;
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


.servicios {
  overflow: hidden; /* Oculta el contenido que se desborda */
  text-overflow: ellipsis; /* Muestra '...' si el texto es demasiado largo */
  white-space: nowrap; /* Evita el salto de línea */
  cursor: pointer;
}

.estatus{
  display: flex;
  border-radius: 10px;
  margin-top: 2px;
  color: black;
}
.estatus.pagado {
  color: green; /* Color para 'Pagado' */
}

.estatus.cancelado {
  color: red; /* Color para 'Cancelado' */
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
