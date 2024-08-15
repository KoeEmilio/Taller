<script setup>
import { ref, onMounted } from 'vue';

const datos = ref([]);
const search = ref('');

const mostrarinfo = () => {
  fetch('http://pruebapdo.com/Clientes')
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

const showEditFormulario = ref(false);

const selectedCliente = ref({
  Nombre: '',
  Correo: '',
  Telefono: '',
  Tipo: '',
  PersonaID: '' 
});


const mostrarEditFormulario = (cliente) => {
  selectedCliente.value = { ...cliente };
  showEditFormulario.value = true;
};

const editarCliente = () => {
  fetch(`http://testpdo.com/actualizarclientes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(selectedCliente.value)
  })
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        mostrarinfo();
        showEditFormulario.value = false;
      }
    });
};

const headers = [
  { text: 'ID', value: 'PersonaID' },
  { text: 'Nombre', value: 'Nombre' },
  { text: 'Correo', value: 'Correo' },
  { text: 'Telefono', value: 'Telefono' },
  { text: 'Tipo', value: 'Tipo' },
  { text: 'Acciones', value: 'actions', sortable: false }
];
</script>

<template>
  <v-container></v-container>
  <v-container></v-container>
  <v-app>
    <v-app-bar app color="#1a1a1a" dark>
      <router-link to="MenuEmpleados">
        <v-btn class="ma-3" color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="text-center w-100">CLIENTES REGISTRADOS</h1>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <v-text-field
            v-model="search"
            label="Buscar"
            prepend-inner-icon="mdi-magnify"
            hide-details
            single-line
            outlined
            class="mx-4"
          ></v-text-field>
        </v-col>



        <v-dialog v-model="showEditFormulario" max-width="500px">
          <v-card>
            <v-card-title>Editar Cliente</v-card-title>
            <v-card-text>
              <v-text-field label="ID" v-model="selectedCliente.PersonaID"></v-text-field>
              <v-text-field label="Nombre Completo" v-model="selectedCliente.Nombre"></v-text-field>
              <v-text-field label="Correo" v-model="selectedCliente.Correo" type="email"></v-text-field>
              <v-text-field label="Telefono" v-model="selectedCliente.Telefono" type="number"></v-text-field>
              <v-radio-group v-model="selectedCliente.Tipo" label="Tipo de Cliente">
                <v-radio label="Físico" value="fisico"></v-radio>
                <v-radio label="Moral" value="moral"></v-radio>
              </v-radio-group>
              <v-btn class="BtnGuindo" @click="editarCliente">Guardar</v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>

        <v-col cols="12">
          <v-data-table
            :items="datos"
            :headers="headers"
            :search="search"
            class="elevation-1"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn icon @click="mostrarEditFormulario(item)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
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
  background-color: #1a1a1a;
  color: white;
  margin-left: 10px; 
  border-radius: 30%; 
}

.BtnGuindo {
  background-color: #1a1a1a;
  color: white;
}
</style>
