<script setup>
import { ref, onMounted } from 'vue';

const datos = ref([]);
const search = ref('');


const mostrarinfo = () => {
fetch('http://testpdo.com/clientes')
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

const showFormulario = ref(false);

const mostrarFormulario = () => {
  showFormulario.value = !showFormulario.value;
};
</script>

<template>
  <div class="container">
    <v-app>
      <v-app-bar app color="#7d0100" dark>
        <router-link to="Clientes">
          <v-btn class="ma-3" color="white" icon="mdi-arrow-left-bold-circle-outline"> </v-btn>
        </router-link>
        <h1 class="text-center w-100">Clientes Registrados</h1>
      </v-app-bar>

    <template v-slot:text>
    <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
    ></v-text-field>
    </template>

    <v-data-table
    :headers="headers"
    :items="datos"
    :search="search"
    ></v-data-table>
    </v-app>
  </div>
</template>

<style scoped>
#Cont {
  display: flex;
  height: 67.7vh;
  width: 11.2vw;
  margin-left: 15%;
  justify-content: space-between;
}

.container {
  background-color: blue;
  width: 87vw;
  height: 100vh;
  justify-content: space-around;
}

.agregar-text {
  font-weight: bolder;
  padding: 4%;
}

.scrollable-content {
  max-height: 300px;
  overflow-y: auto;
}

#Tabla {
  max-height: 500px;
  overflow-y: auto;
}

#guindo-btn {
  background-color: #7d0100; /* Color guindo */
  color: white; /* Color del icono */
  margin-left: 10px; /* Margen izquierdo */
  border-radius: 30%; /* Redondear el botón */
}

.BtnGuindo {
  background-color: #7d0100;
  color: white;
}
</style>
