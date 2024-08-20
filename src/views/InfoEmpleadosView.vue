<script setup>
import { ref, onMounted } from 'vue';

const datos = ref([]);
const search = ref('');

const mostrarinfo = () => {
  fetch('http://testpdocrudo.com/empleados')
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

const selectedEmpleado = ref({
  Nombre: '',
  Correo: '',
  Telefono: '', 
  Direccion: '', 
  Estado: '', 
  PersonaID: '', // Se incluye PersonaID aquí, pero no se muestra en el formulario
});

const mostrarEditFormulario = (empleado) => {
  selectedEmpleado.value = { ...empleado };
  console.log("Empleado seleccionado para edición:", selectedEmpleado.value); // Aquí se obtiene el EmpleadoID
  showEditFormulario.value = true;
}

const editarEmpleado = async () => {
  try {
    console.log("Datos enviados para actualizar:", JSON.stringify(selectedEmpleado.value));
    const response = await fetch(`http://testpdocrudo.com/actualizarempleados`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedEmpleado.value)
    });

    if (response.ok) {
      mostrarinfo();
      showEditFormulario.value = false;
    } else {
      console.error('Error updating employee:', response.statusText);
    }
  } catch (error) {
    console.error('Error occurred during fetch:', error);
  }
};

const headers = [
  { text: 'Nombre', value: 'Nombre' },
  { text: 'Correo', value: 'Correo' },
  { text: 'Telefono', value: 'Telefono' },
  { text: 'Direccion', value: 'Direccion' },
  { text: 'Estado', value: 'Estado' },
  { text: 'Ordenes_Pendientes', value: 'Ordenes_Pendientes' },
  { text: 'Acciones', value: 'action', sortable: false }
];
</script>

<template>
  <v-app>
    <v-app-bar app color="#1a1a1a" dark>
      <router-link to="MenuPrincipal">
        <v-btn class="ma-3" color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="titulo-empleados text-center w-100">Empleados Registrados</h1>
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
          <v-row justify="start">

            <v-dialog v-model="showEditFormulario" max-width="500px">
              <div v-show="showEditFormulario === true">
                <v-card class="pa-5">
                  <v-card-title>Editar Empleado</v-card-title>
                  <v-card-text class="scrollable-content">
                    <v-text-field label="Nombre Completo" v-model="selectedEmpleado.Nombre"></v-text-field>
                    <v-text-field label="Correo" v-model="selectedEmpleado.Correo" type="email"></v-text-field>
                    <v-text-field label="Telefono" v-model="selectedEmpleado.Telefono" type="number"></v-text-field>
                    <v-text-field label="Dirección" v-model="selectedEmpleado.Direccion"></v-text-field>
                    <v-btn class="BtnGuindo" @click="editarEmpleado">Guardar</v-btn>
                  </v-card-text>
                </v-card>
              </div>
            </v-dialog>

          </v-row>
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
.titulo-empleados{
  font-size: 20px;
  padding-right: 40px;
}

@media (min-width: 768px) {
  .titulo-empleados{
  font-size: 40px;
  align-items: center;
}
}
</style>
