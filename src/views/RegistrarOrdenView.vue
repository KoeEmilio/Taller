<script setup>
import { ref, onMounted } from 'vue';

const fechaIngreso = ref(''); // Selección de fecha de ingreso
const horarioSeleccionado = ref(null); // Nuevo campo para seleccionar un horario
const empleado = ref(null);
const vehiculo = ref(null);
const motivo = ref('');
const cita = ref(null);
const estado = ref(null);

const empleados = ref([]);
const vehiculos = ref([]);
const citas = ref([]);      
const horarios = ref([]); // Almacena los horarios obtenidos
const estados = ref([]);    

const valid = ref(false);

const fetchEmpleados = async () => {
  try {
    const response = await fetch('http://testpdo.com/empleados');
    if (response.ok) {
      const json = await response.json();
      empleados.value = json.data; 
      console.log('Empleados obtenidos exitosamente', empleados.value);
    } else {
      console.error('Error al obtener la lista de empleados');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};

const fetchVehiculos = async () => {
  try {
    const response = await fetch('http://testpdo.com/vehiculos');
    if (response.ok) {
      const json = await response.json();
      vehiculos.value = json.data; 
      console.log('Vehículos obtenidos exitosamente', vehiculos.value);
    } else {
      console.error('Error al obtener la lista de vehículos');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};

const fetchCitas = async () => {
  try {
    const response = await fetch('http://testpdo.com/citas');
    if (response.ok) {
      const json = await response.json();
      citas.value = json.data; 
      console.log('Citas obtenidas exitosamente', citas.value);
    } else {
      console.error('Error al obtener la lista de citas');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};

const fetchHorarios = async () => {
  try {
    const response = await fetch('http://testpdo.com/horarios');
    if (response.ok) {
      const json = await response.json();
      horarios.value = json.data; 
      console.log('Horarios obtenidos exitosamente', horarios.value);
    } else {
      console.error('Error al obtener la lista de horarios');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};

const submit = async () => {
  if (valid.value) {
    const data = {
      FechaIngreso: fechaIngreso.value,
      Hora_Ingreso: horarioSeleccionado.value, // Se añade al envío de datos
      Empleado: empleado.value,
      Vehiculo: vehiculo.value,
      Motivo: motivo.value,
      Cita: cita.value,
      Estado: estado.value,
    };

    try {
      const response = await fetch('http://testpdo.com/registrarorden', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseText = await response.text(); // Obtener la respuesta como texto
      console.log('Respuesta del servidor:', responseText);

      try {
        const responseData = JSON.parse(responseText); // Intentar analizar como JSON
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
  fetchHorarios(); 
});
</script>

<template>
  <v-app>  
    <VAppBar app color="#1a1a1a" dark>
      <router-link to="MenuPrincipal">
        <v-btn color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="text-center w-100">REGISTRAR ORDEN</h1>
    </VAppBar>

    <div class="container">
      <div class="Card">
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid">
              <v-date-input label="Fecha de Ingreso" v-model="fechaIngreso"></v-date-input>

              <div>
                <label for="horarioSeleccionado">Seleccione un Horario:</label>
                <select id="horarioSeleccionado" v-model="horarioSeleccionado">
                  <option value="" disabled selected>Seleccione un horario</option>
                  <option v-for="horario in horarios" :key="horario.HorarioID" :value="horario.HorarioID">
                    {{ horario.Hora_Inicio }} - {{ horario.Hora_Fin }}
                  </option>
                </select>
              </div>

        
              <div>
                <label for="empleado">Empleado:</label>
                <select id="empleado" v-model="empleado">
                  <option value="" disabled selected>Seleccione un empleado</option>
                  <option v-for="emp in empleados" :key="emp.id" :value="emp.id">
                    {{ emp.nombre }}
                  </option>
                </select>
              </div>

            
              <div>
                <label for="vehiculo">Vehículo:</label>
                <select id="vehiculo" v-model="vehiculo">
                  <option value="" disabled selected>Seleccione un vehículo</option>
                  <option v-for="veh in vehiculos" :key="veh.id" :value="veh.id">
                    {{ veh.modelo }}
                  </option>
                </select>
              </div>

              
              <div>
                <label for="motivo">Motivo:</label>
                <input type="text" id="motivo" v-model="motivo" placeholder="Ingrese el motivo">
              </div>

              <div>
                <label for="cita">Cita:</label>
                <select id="cita" v-model="cita">
                  <option value="" disabled selected>Seleccione una cita</option>
                  <option v-for="cit in citas" :key="cit.id" :value="cit.id">
                    {{ cit.detalle }}
                  </option>
                </select>
              </div>

              <div>
                <label for="estado">Estado:</label>
                <select id="estado" v-model="estado">
                  <option value="" disabled selected>Seleccione un estado</option>
                  <option v-for="est in estados" :key="est.id" :value="est.id">
                    {{ est.nombre }}
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
  transition: transform 0.2s ease;
}

#btn-registrar:hover{
  transform: translateY(4px); 
}

select, input[type="datetime-local"], input[type="text"] {
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
