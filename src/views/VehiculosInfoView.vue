<script setup>
import { ref, onMounted } from 'vue';

const datos = ref([]);
const search = ref('');

const mostrarinfo = () => {
  fetch('http://testpdo.com/vehiculos')
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

const selectedVehiculo = ref({
  Marca: '',
  Modelo: '',
  Anio: '',
  Matricula:'',
  Color: '',
  Tipo_de_Transmision:'',
  Propietario: '',
  VehiculoID: ''
});

const mostrarEditFormulario = (vehiculo) => {
  selectedVehiculo.value = { ...vehiculo };
  console.log("Vehículo seleccionado para edición:", selectedVehiculo.value);
  showEditFormulario.value = true;
};

const editarVehiculo = async () => {
  try {
    console.log("Datos enviados para actualizar:", JSON.stringify(selectedVehiculo.value));
    const response = await fetch(`http://testpdo.com/actualizarvehiculos`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedVehiculo.value)
    });

    if (response.ok) {
      mostrarinfo();
      showEditFormulario.value = false;
    } else {
      console.error('Error updating vehicle:', response.statusText);
    }
  } catch (error) {
    console.error('Error occurred during fetch:', error);
  }
};

const headers = [
  { text: 'Marca', value: 'Marca' },
  { text: 'Modelo', value: 'Modelo' },
  { text: 'Anio', value: 'Anio' },
  { text: 'Matricula', value: 'Matricula' },
  { text: 'Color', value: 'Color' },
  { text: 'Tipo_de_Transmision', value: 'Tipo_de_Transmision' },
  { text: 'Propietario', value: 'Propietario' },
  { text: 'Acciones', value: 'action', sortable: false }
];
</script>

<template>
  <v-app>
    <v-app-bar app color="#1a1a1a" dark>
      <router-link to="Vehiculos">
        <v-btn class="ma-3" color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="text-center w-100">VEHÍCULOS REGISTRADOS</h1>
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
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
        
        <v-dialog v-model="showEditFormulario" max-width="500px">
          <div v-show="showEditFormulario === true">
            <v-card class="pa-5">
              <v-card-title>Editar Vehículo</v-card-title>
              <v-card-text class="scrollable-content">
                <v-text-field label="Marca" v-model="selectedVehiculo.Marca"></v-text-field>
                <v-text-field label="Modelo" v-model="selectedVehiculo.Modelo"></v-text-field>
                <v-text-field label="Año" v-model="selectedVehiculo.Anio" type="number"></v-text-field>
                <v-text-field label="Matricula" v-model="selectedVehiculo.Matricula"></v-text-field>
                <v-text-field label="Color" v-model="selectedVehiculo.Color"></v-text-field>
                <v-text-field label="Tipo_de_Transmision" v-model="selectedVehiculo.Tipo_de_Transmision"></v-text-field>
                
                <v-btn color="#1a1a1a" @click="editarVehiculo">
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
