<script setup>
import { ref, onMounted } from 'vue';

const form = ref({
  nombreRefaccion: '',
  marca: '',
  cantidad: '',
  precio: '',
  noOrden: '',
  comprador: '',
});

const ordenes = ref([]);
const compradores = ref(['Cliente', 'Taller']);

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

// Ejecutar fetchOrdenes cuando el componente se monte
onMounted(() => {
  fetchOrdenes();
});

const submit = async () => {
  const datosRegistro = {
    nombreRefaccion: form.value.nombreRefaccion,
    marca: form.value.marca,
    cantidad: form.value.cantidad,
    precio: form.value.precio,
    noOrden: form.value.noOrden,
    comprador: form.value.comprador,
  };

  try {
    const response = await fetch('/api/detalle-refaccion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosRegistro),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Registro exitoso: ' + data.message);
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
    nombreRefaccion: '',
    marca: '',
    cantidad: '',
    precio: '',
    noOrden: '',
    comprador: '',
  };
};
</script>

<template>
    <v-container></v-container>
  <v-app>
    <v-app-bar app color="#1a1a1a" dark>
      <router-link to="/MenuDetalles">
        <v-btn color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="texto-refacciones text-center w-100">REGISTRAR DETALLE DE REFACCIÓN</h1>
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
select {
  background-color: white;
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

.texto-refacciones {
  padding-right: 30px;
  font-size: 20px;
}

@media (min-width: 768px) {
  .texto-refacciones {
    align-items: center;
  }
}
</style>
