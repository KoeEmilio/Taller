<template>
  <v-app>
    <v-app-bar app color="#1a1a1a" dark>
      <router-link to="MenuPrincipal">
        <v-btn class="ma-3" color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="text-center w-100">PAGOS</h1>
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
            <v-dialog v-model="showPagoPagadoAlert" max-width="500px">
              <v-card>
                <v-card-title class="headline">¡Pago ya abonado!</v-card-title>
                <v-card-text>
                  Este pago ya ha sido marcado como pagado. No se puede realizar más acciones sobre él.
                </v-card-text>
                <v-card-actions>
                  <v-btn color="green" @click="showPagoPagadoAlert = false">Aceptar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="showEditFormulario" max-width="500px">
              <v-card>
                <v-card-actions>
                  <v-col class="d-flex flex-column">
                    <v-btn v-if="parseFloat(selectedPago.Cantidad_Restante) > 0" class="mb-2" color="secondary" @click="abrirDialogoAbonar">Abonar</v-btn>
                    <v-btn v-if="selectedPago.Estado !== 'Pagado'" color="red" @click="cancelarEdicion">Cancelar</v-btn>
                  </v-col>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="showAbonarDialogo" max-width="400px">
              <v-card>
                <v-card-title>Abonar</v-card-title>
                <v-card-text>
                  <v-text-field 
                    label="Cantidad a Abonar" 
                    v-model="cantidadAbono" 
                    type="text"
                    :error-messages="[errorAbono]"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-col class="d-flex flex-column">
                    <v-btn class="mb-2" color="green" @click="submitAbono">Abonar</v-btn>
                    <v-btn color="red" @click="showAbonarDialogo = false">Salir</v-btn>
                  </v-col>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>

          <v-data-table
            :headers="headers"
            :items="datos"
            :search="search"
          >
            <template v-slot:item.actions="{ item }">
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

<script setup>
import { ref, onMounted } from 'vue';

const datos = ref([]);
const search = ref('');

const mostrarinfo = () => {
  fetch('http://testpdocrudo.com/pagos')
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
const showAbonarDialogo = ref(false);
const showPagoPagadoAlert = ref(false);
const cantidadAbono = ref('');
const errorAbono = ref('');

const selectedPago = ref({
  Vehiculo: '',
  Fecha_de_pago: '',
  Estado: '',
  Cantidad_Abonada: '',
  Cantidad_Restante: '',
  Cantidad_Total: '',
  OrdenID: '' 
});

const mostrarEditFormulario = (pago) => {
  selectedPago.value = { ...pago };
  console.log("Pago seleccionado para edición:", selectedPago.value);

  if (selectedPago.value.Estado === 'Pagado') {
    showPagoPagadoAlert.value = true;
  } else {
    showEditFormulario.value = true;
  }
};

const cancelarEdicion = () => {
  showEditFormulario.value = false;
};

const abrirDialogoAbonar = () => {
  cantidadAbono.value = '';
  errorAbono.value = ''; // Reset error message
  showAbonarDialogo.value = true;
};

const submitAbono = () => {
  realizarAbono();
};

const realizarAbono = () => {
  const cantidad = parseFloat(cantidadAbono.value);

  errorAbono.value = '';

  if (isNaN(cantidad) || cantidad <= 0) {
    errorAbono.value = 'La cantidad a abonar debe ser un número mayor que 0.';
  } else if (cantidad > parseFloat(selectedPago.value.Cantidad_Restante)) {
    errorAbono.value = 'La cantidad a abonar no puede exceder la cantidad restante.';
  } else {
    fetch('http://testpdocrudo.com/abonado', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        OrdenID: selectedPago.value.OrdenID,
        CantidadAbono: cantidad
      }),
    })
    .then(response => response.text()) // Leer la respuesta como texto
    .then(text => {
      try {
        const json = JSON.parse(text); // Intentar parsear como JSON
        if (json.status === 'success') { // Verificar estado de éxito
          // Actualizar datos del pago
          selectedPago.value.Cantidad_Abonada = parseFloat(selectedPago.value.Cantidad_Abonada) + cantidad;
          selectedPago.value.Cantidad_Restante = parseFloat(selectedPago.value.Cantidad_Restante) - cantidad;

          // Verificar si la cantidad restante es 0 para cambiar el estado a 'Pagado'
          if (selectedPago.value.Cantidad_Restante <= 0) {
            selectedPago.value.Estado = 'Pagado';
            selectedPago.value.Cantidad_Restante = 0; // Asegurarse de que la cantidad restante sea 0
          }

          showAbonarDialogo.value = false;
          editarPago();
        } else {
          console.error('Error al realizar el abono:', json.message);
        }
      } catch (e) {
        console.error('Error al parsear JSON:', e);
        console.error('Respuesta no válida:', text);
      }
    })
    .catch(error => {
      console.error('Error de red:', error);
    });
  }
};

const editarPago = () => {
  datos.value = datos.value.map(pago => 
    pago.OrdenID === selectedPago.value.OrdenID ? selectedPago.value : pago
  );
};

const headers = [
  { text: 'Vehiculo', value: 'Vehiculo' },
  { text: 'Fecha de pago', value: 'Fecha_de_pago' },
  { text: 'Estado', value: 'Estado' },
  { text: 'Cantidad Abonada', value: 'Cantidad_Abonada' },
  { text: 'Cantidad Restante', value: 'Cantidad_Restante' },
  { text: 'Cantidad Total', value: 'Cantidad_Total' },
  { text: 'Acciones', value: 'actions', sortable: false }
];
</script>

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

.editar{
  display: flex;
  justify-content: center;
}

.v-col {
  display: flex;
  flex-direction: column;
}
</style>
