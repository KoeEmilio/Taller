<script setup>
import { ref, onMounted } from 'vue';

const Empleado_Que_Atendera = ref(null);
const Vehiculo = ref(null);
const Motivo = ref('');
const Cita = ref(null);
const Estado = ref('');
const valid = ref(false);
const Empleados = ref([]);
const Vehiculos = ref([]);
const Citas = ref([]);
const form = ref(null);
const tieneCita = ref(''); // Nueva referencia para el radio button

const fetchEmpleados = async () => {
  try {
    const response = await fetch('http://testpdocrudo.com/empleados');
    if (response.ok) {
      const json = await response.json();
      Empleados.value = json.data; 
      console.log('Empleados obtenidos exitosamente', Empleados.value);
    } else {
      console.error('Error al obtener la lista de empleados');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};

const fetchVehiculos = async () => {
  try {
    const response = await fetch('http://testpdocrudo.com/vehiculos');
    if (response.ok) {
      const json = await response.json();
      Vehiculos.value = json.data; 
      console.log('Vehículos obtenidos exitosamente', Vehiculos.value);
    } else {
      console.error('Error al obtener la lista de vehículos');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};

const fetchCitas = async () => {
  try {
    const response = await fetch('http://testpdocrudo.com/vercitas');
    if (response.ok) {
      const json = await response.json();
      Citas.value = json.data; 
      console.log('Citas obtenidas exitosamente', Citas.value);
    } else {
      console.error('Error al obtener la lista de citas');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};

const submit = async () => {
  const isValid = await form.value.validate();

  if (isValid) {
    const data = {
      Empleado_Que_Atendera: Empleado_Que_Atendera.value,
      Vehiculo: Vehiculo.value,
      Motivo: Motivo.value,
      Cita: Cita.value,
      Estado: Estado.value,
    };

    try {
      const response = await fetch('http://testpdocrudo.com/registrarorden', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseText = await response.text();
      console.log('Respuesta del servidor:', responseText);

      try {
        const responseData = JSON.parse(responseText);
        if (response.ok) {
          console.log('Orden registrada exitosamente', responseData);
        } else {
          console.error('Error al registrar la orden:', responseData);
        }
      } catch (error) {
        console.error('Error al analizar la respuesta como JSON:', error);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  }
};

onMounted(() => {
  fetchEmpleados();
  fetchVehiculos();
  fetchCitas();
});
</script>


<template>
  <v-app>
    <VAppBar app color="#1a1a1a" dark>
      <router-link to="/MenuOrdenes">
        <v-btn color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="texto-ordenes text-center w-100">REGISTRAR ORDEN</h1>
    </VAppBar>

    <div class="container">
      <div class="Card">
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid">
              <div>
                <label for="empleado">Seleccione un empleado:</label>
                <select id="empleado" v-model="Empleado_Que_Atendera">
                  <option value="" disabled selected></option>
                  <option v-for="option in Empleados" :key="option.EmpleadoID" :value="option.EmpleadoID">
                    {{ option.Nombre }} - {{ option.Estado }}
                  </option>
                </select>
              </div>

              <div>
                <label for="vehiculo">Vehículo:</label>
                <select id="vehiculo" v-model="Vehiculo">
                  <option value="" disabled selected></option>
                  <option v-for="option in Vehiculos" :key="option.VehiculoID" :value="option.VehiculoID">
                    {{ option.Marca }} - {{ option.Modelo }} - {{ option.Matricula }}
                  </option>
                </select>
              </div>

              <div>
                <label for="motivo">Motivo:</label>
                <input type="text" id="motivo" v-model="Motivo" placeholder="">
              </div>

              <v-radio-group v-model="tieneCita" inline> Tiene Cita:
                <v-radio label="Si" value="si"></v-radio>
                <v-radio label="No" value="no"></v-radio>
              </v-radio-group>

              <!-- Mostrar solo si tieneCita es "si" -->
              <div v-if="tieneCita === 'si'">
                <label for="cita">Seleccione una cita:</label>
                <select id="cita" v-model="Cita">
                  <option value="" disabled selected></option>
                  <option v-for="option in Citas" :key="option.CitaID" :value="option.CitaID">
                    {{ option.Fecha }} - {{ option.Hora }}
                  </option>
                </select>
              </div>


              <v-btn id="btn-registrar" :disabled="!valid" color="#1a1a1a" @click="submit">
                Registrar
              </v-btn>
            </v-form>
          </v-container>
        </v-card-text>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh; 
  justify-content: center;
  align-items: center;
  background-color: gray;
}

.Card {
  height: auto;
  width: 80vw;
  background-color: rgb(223, 223, 223);
  margin-top: 16px;
}

#btn-registrar{
  margin-top: 16px;
  margin-left: 900px;
  transition: transform 0.2s ease;
}

#btn-registrar:hover{
  transform: translateY(4px); 
}

select, input[type="text"] {
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.texto-ordenes{
  padding-right: 40px;
  font-size: 20px;
}

@media (min-width: 768px) {
  .texto-ordenes{
  align-items: center;
  font-size: 30px;
}
}
</style>