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
  PersonaID: '' // Asegúrate de incluir PersonaID
})


const mostrarEditFormulario = (cliente) => {
selectedCliente.value = { ...cliente };
showEditFormulario.value = true;
}

const editarCliente = async () => {
    try {
        const response = await fetch(`http://testpdo.com/actualizarclientes`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedCliente.value)
        });

        if (response.ok) {
            mostrarinfo();
            showEditFormulario.value = false;
        } else {
            console.error('Error updating client:', response.statusText);
        }
    } catch (error) {
        console.error('Error occurred during fetch:', error);
    }
}

const headers = [
{ text: 'ID', value: 'ID' },
{ text: 'Nombre', value: 'Nombre' },
{ text: 'Correo', value: 'Correo' },
{ text: 'Telefono', value: 'Telefono' },
{ text: 'Tipo_De_Cliente', value: 'Tipo_De_Cliente' },
{ text: 'Acciones', value: 'actions', sortable: false }
];
</script>

<template>
<div class="container">
    <v-app>
    <v-app-bar app color="#1a1a1a" dark>
        <router-link to="Clientes">
        <v-btn class="ma-3" color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
        </router-link>
        <h1 class="text-center w-100">CLIENTES REGISTRADOS</h1>
      </v-app-bar>

      <v-main>
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
            <v-row justify="start">
          

              <v-dialog v-model="showEditFormulario" max-width="500px">
                <div v-show="showEditFormulario === true">
                  <v-card class="pa-5">
                    <v-card-title>Editar Cliente</v-card-title>
                    <v-card-text class="scrollable-content">
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
                </div>
              </v-dialog>
            </v-row>

            <v-col cols="10">
              <v-data-table
                id="Tabla"
                :items="datos"
                :headers="headers"
                :search="search"
                class="elevation-1"
              >
                <template #item="{ item }">
                  <v-btn icon @click="mostrarEditFormulario(item)">
                    <v-icon id="Editar">mdi-pencil</v-icon>
                  </v-btn>
                  <!-- Botón de eliminar puede ser añadido aquí -->
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style scoped>

.agregar-text {
  font-weight: bolder;
  padding: 4%;
}

.scrollable-content {
  max-height: 300px;
  overflow-y: auto;
}

#Tabla {
  margin-top: 10px;
  max-height: 500px;
  overflow-y: auto;
}

#guindo-btn {
  background-color:#1a1a1a;
  color: white; /* Color del icono */
  margin-left: 10px; /* Margen izquierdo */
  border-radius: 30%; /* Redondear el botón */
}

.BtnGuindo {
  background-color:#1a1a1a;
  color: white;
}

.v-application {
    background: #f5f5f5;
  }
  .v-card {
    margin-top: 20px;
  }

</style>
