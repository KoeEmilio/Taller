<script setup>
import { ref, onMounted } from 'vue';

const form = ref({
  noOrden: '',
  fechaEntrega: '',
  servicioProporcionado: '',
  costoManoObra: '',
  diasGarantia: '',
  ordenID: '',
  nombreRefaccion: '',
  marca: '',
  cantidad: '',
  precio: '',
  comprador: '',
});

const compradores = ref(['Cliente', 'Taller']);
const servicios = ref([]);
const ordenes = ref([]);

// Obtener la lista de servicios disponibles
const fetchServicios = async () => {
  try {
    const response = await fetch('/api/servicios', {
      method: 'GET',
    });
    const data = await response.json();
    if (response.ok) {
      servicios.value = data.servicios;
    } else {
      alert('Error al obtener servicios: ' + data.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Obtener la lista de órdenes disponibles
const fetchOrdenes = async () => {
  try {
    const response = await fetch('/api/ordenes', {
      method: 'GET',
    });
    const data = await response.json();
    if (response.ok) {
      ordenes.value = data.ordenes;
    } else {
      alert('Error al obtener órdenes: ' + data.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Ejecutar fetchServicios y fetchOrdenes cuando el componente se monte
onMounted(() => {
  fetchServicios();
  fetchOrdenes();
});

const submit = async () => {
  const datosRegistro = {
    noOrden: form.value.noOrden,
    fechaEntrega: form.value.fechaEntrega,
    servicioProporcionado: form.value.servicioProporcionado,
    costoManoObra: form.value.costoManoObra,
    diasGarantia: form.value.diasGarantia,
    ordenID: form.value.ordenID,
    nombreRefaccion: form.value.nombreRefaccion,
    marca: form.value.marca,
    cantidad: form.value.cantidad,
    precio: form.value.precio,
    comprador: form.value.comprador,
  };

  try {
    const response = await fetch('/api/detalle-orden', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosRegistro),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Registro exitoso');
      resetForm();
    } else {
      console.error('Error en el registro');
    }
  } catch (error) {
    console.error('Error al conectar con el servidor:', error);
  }
};

const resetForm = () => {
  form.value = {
    noOrden: '',
    fechaEntrega: '',
    servicioProporcionado: '',
    costoManoObra: '',
    diasGarantia: '',
    ordenID: '',
    nombreRefaccion: '',
    marca: '',
    cantidad: '',
    precio: '',
    comprador: '',
  };
};
</script>

<template>
  <v-app>
    <v-app-bar app color="#1a1a1a" dark>
      <router-link to="/MenuOrdenes">
        <v-btn color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="texto-ordenes text-center w-100">REGISTRAR DETALLE</h1>
    </v-app-bar>

    <div class="container">
      <v-card class="Card">
        <v-card-text>
          <v-container>
            <v-form @submit.prevent="submit">
              <div class="form-group">
                <label for="noOrden">Seleccionar Número de Orden</label>
                <select id="noOrden" v-model="form.noOrden">
                  <option value="" disabled selected>Seleccione una orden</option>
                  <option v-for="orden in ordenes" :key="orden.id" :value="orden.id">
                    Orden #{{ orden.id }} - {{ orden.descripcion }}
                  </option>
                </select>
              </div>

              <v-text-field
                v-model="form.fechaEntrega"
                label="Fecha de Entrega"
                variant="solo"
                required
              ></v-text-field>

              <div class="form-group">
                <label for="servicioRealizado">Servicio Realizado</label>
                <select id="servicioRealizado" v-model="form.servicioProporcionado">
                  <option value="" disabled selected>Seleccione un servicio</option>
                  <option v-for="servicio in servicios" :key="servicio.id" :value="servicio.value">
                    {{ servicio.text }}
                  </option>
                </select>
              </div>

              <v-text-field
                v-model="form.costoManoObra"
                label="Costo de Mano de Obra"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.diasGarantia"
                label="Días de Garantía"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.nombreRefaccion"
                label="Nombre de Refacción"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.marca"
                label="Marca de Refacción"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.cantidad"
                label="Cantidad"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.precio"
                label="Precio"
                variant="solo"
                required
              ></v-text-field>

              <div class="form-group">
                <label for="comprador">Comprador</label>
                <select id="comprador" v-model="form.comprador">
                  <option value="" disabled selected>Seleccione un comprador</option>
                  <option v-for="comprador in compradores" :key="comprador" :value="comprador">
                    {{ comprador }}
                  </option>
                </select>
              </div>

              <v-btn color="#1a1a1a" @click="submit">
                Registrar
              </v-btn>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
}

.container {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: gray;
  padding: 20px;
}

.Card {
  width: 100%;
  max-width: 600px;
  background-color: rgb(223, 223, 223);
  padding: 20px;
  border-radius: 8px;
}

#titulo {
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 20px;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 16px;
}

select,
input[type="text"],
input[type="number"],
input[type="date"] {
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

@media (max-width: 768px) {
  .Card {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .Card {
    padding: 12px;
  }
}

.texto-ordenes{
  padding-right: 30px;
  font-size: 20px;
}

@media (min-width: 768px) {
  .texto-ordenes{
  align-items: center;
}
}
</style>
