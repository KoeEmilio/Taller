<script setup>
import { ref, onMounted } from 'vue';

const datos = ref([]);
const search = ref('');

const mostrarinfo = () => {
  fetch('http://18.117.184.23/citas')
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

const selectedCita = ref({
  Cliente: '',
  Fecha: '',
  Hora: '',
  Estado: '',
  CitaID: ''
});

const mostrarEditFormulario = (cita) => {
  selectedCita.value = { ...cita };
  showEditFormulario.value = true;
};

const actualizarCita = async (estado) => {
  try {
    selectedCita.value.Estado = estado;
    const response = await fetch(`http://testpdo.com/actualizarcita`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedCita.value)
    });

    if (response.ok) {
      mostrarinfo();
      showEditFormulario.value = false;
    } else {
      console.error('Error al actualizar cita:', response.statusText);
    }
  } catch (error) {
    console.error('Ocurrió un error durante la actualización:', error);
  }
};

const headers = [
  { text: 'Cliente', value: 'Cliente' },
  { text: 'Fecha', value: 'Fecha' },
  { text: 'Hora', value: 'Hora' },
  { text: 'Estado', value: 'Estado' },
  { text: 'Acciones', value: 'action', sortable: false }
];
</script>

<template>
  <v-app>
    <v-app-bar app color="#1a1a1a" dark>
      <router-link to="/MenuClientesEmpleados">
        <v-btn class="ma-3" color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="text-center w-100">CITAS</h1>
    </v-app-bar>

    <v-main>
      <v-container>
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
          <v-data-table
            :headers="headers"
            :items="datos"
            :search="search"
          >
            <template v-slot:[`item.action`]="{ item }">
              <v-btn color="#1a1a1a" @click="mostrarEditFormulario(item)">
                <v-icon left>mdi-pencil</v-icon> 
                Editar
              </v-btn>
              <v-btn color="green" @click="actualizarCita('Confirmada')">
                <v-icon left>mdi-check-circle-outline</v-icon> 
                Aceptar
              </v-btn>
              <v-btn color="red" @click="actualizarCita('Cancelada')">
                <v-icon left>mdi-cancel"></v-icon> 
                Rechazar
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
        
        <v-dialog v-model="showEditFormulario" max-width="500px">
          <div v-show="showEditFormulario === true">
            <v-card class="pa-5">
              <v-card-title>Editar Cita</v-card-title>
              <v-card-text class="scrollable-content">
                <v-text-field label="Cliente" v-model="selectedCita.Cliente"></v-text-field>
                <v-text-field label="Fecha" v-model="selectedCita.Fecha" type="date"></v-text-field>
                <v-text-field label="Hora" v-model="selectedCita.Hora" type="time"></v-text-field>
                <v-text-field label="Estado" v-model="selectedCita.Estado" readonly></v-text-field>
                <v-btn color="#1a1a1a" @click="actualizarCita(selectedCita.value.Estado)">
                  <v-icon left>mdi-content-save</v-icon> 
                  Guardar
                </v-btn>
              </v-card-text>
            </v-card>
          </div>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-application {
  background: #f5f5f5;
}

.v-card {
  margin-top: 20px;
}

.v-data-table {
  margin-top: 10px;
}
</style>
