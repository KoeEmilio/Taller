<script setup>
import { ref, onMounted } from 'vue';

const fechaIngreso = ref(''); 
const horarioSeleccionado = ref(''); 
const empleado = ref('');
const vehiculo = ref('');
const motivo = ref('');
const cita = ref('');
const estado = ref('');
const empleados = ref('');
const vehiculos = ref('');
const citas = ref('');      
const horarios = ref(''); 
const estados = ref('');    

const valid = ref(false);

const submit = () => {
  if (form.value.validate()) {
    alert('Registro exitoso');
  }
};


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
