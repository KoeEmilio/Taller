<script setup>
import { ref, onMounted } from 'vue';

const Marca = ref(''); 
const Modelo = ref(''); 
const Anio = ref(0); 
const Color = ref('');
const Tipo_de_Transmision = ref('');
const Matricula = ref('');
const propietarioSeleccionado = ref(null);
const Tipo_de_vehiculo_Empresarial = ref('');
const Numero_de_Unidad = ref('');
const valid = ref(false);
const Propietarios = ref([]);

const fetchPropietarios = async () => {
  try {
    const response = await fetch('http://testpdocrudo.com/clientes');
    if (response.ok) {
      const json = await response.json();
      Propietarios.value = json.data; 
      console.log('Propietarios obtenidos exitosamente', Propietarios.value);
    } else {
      console.error('Error al obtener la lista de propietarios');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};

const submit = async () => {
  if (valid.value) {
    const data = {
      Marca: Marca.value,
      Modelo: Modelo.value,
      Anio: Anio.value,
      Color: Color.value,
      Tipo_de_Transmision: Tipo_de_Transmision.value,
      Matricula: Matricula.value,
      Propietario: propietarioSeleccionado.value,
      Tipo_de_vehiculo_Empresarial: Tipo_de_vehiculo_Empresarial.value,
      Numero_de_Unidad: Numero_de_Unidad.value,
    };

    try {
      const response = await fetch('http://testpdo.com/registrovehiculos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseText = await response.text(); 

      try {
        const responseData = JSON.parse(responseText); 
        if (response.ok) {
          console.log('Vehículo registrado exitosamente', responseData);
        } else {
          
          if (responseData.message === 'Ya existe un vehículo con los mismos datos y matrícula. No se puede duplicar.') {
            alert('Error: Ya existe un vehículo con los mismos datos y matrícula.');
          } else {
            console.error('Error al registrar el vehículo:', responseData);
          }
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
  fetchPropietarios();
});




</script>

<template>
  <v-app>  
    <VAppBar app color="#1a1a1a" dark>
      <router-link to="MenuPrincipal">
        <v-btn color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="text-center w-100">REGISTRAR VEHÍCULO</h1>
    </VAppBar>

    <div class="container">
      <div class="Card">
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="Marca"
                :rules="[v => !!v || 'Marca es requerida']"
                label="Marca"
                variant="solo"
              ></v-text-field>

              <v-text-field
                v-model="Modelo"
                :rules="[v => !!v || 'Modelo es requerido']"
                label="Modelo"
                variant="solo"
              ></v-text-field>

              <v-text-field
                v-model="Anio"
                :rules="[v => !!v || 'Año es requerido', v => /^\d{4}$/.test(v) || 'Año debe ser un número de 4 dígitos']"
                label="Año"
                variant="solo"
              ></v-text-field>

              <v-text-field
                v-model="Color"
                :rules="[v => !!v || 'Color es requerido']"
                label="Color"
                variant="solo"
              ></v-text-field>

              <v-select
                v-model="Tipo_de_Transmision"
                :items="['estandar', 'automatica']"
                label="Tipo de Transmisión"
                :rules="[v => !!v || 'Tipo de Transmisión es requerido']"
                variant="solo"
              ></v-select>

              <v-text-field
                v-model="Matricula"
                :rules="[v => !!v || 'Número de Matrícula es requerido']"
                label="Número de Matrícula"
                variant="solo"
              ></v-text-field>

              <div class="propietario">
                <label for="propietario">Propietario:  </label>
                <select id="propietario" v-model="propietarioSeleccionado">
                  <option class="opcion" value=""></option>
                  <option v-for="option in Propietarios" :key="option.PersonaID" :value="option.PersonaID">
                    {{ option.Nombre }}
                  </option>
                </select>
              </div>
              <br>
              <br>

              <v-select
                v-model="tipoPropietario"
                :items="['Físico', 'Moral']"
                label="Tipo de Propietario"
                :rules="[v => !!v || 'Tipo de Propietario es requerido']"
                variant="solo"
              ></v-select>

              <v-form v-if="tipoPropietario === 'Moral'" ref="form" v-model="valid">
                <v-select
                  v-model="Tipo_de_vehiculo_Empresarial"
                  :items="['Camión', 'Camioneta', 'Automóvil']"
                  label="Tipo de Auto Empresarial"
                  :rules="[v => !!v || 'Tipo de Auto Empresarial es requerido']"
                  variant="solo"
                ></v-select>

                <v-text-field
                  v-model="Numero_de_Unidad"
                  :rules="[v => !!v || 'Número de Unidad es requerido', v => /^\d+$/.test(v) || 'Solo se aceptan números']"
                  label="Número de Unidad"
                  variant="solo"
                ></v-text-field>
              </v-form>

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
  justify-content: center;
  align-items: center;
  margin-top: 60px; 
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

.propietario {
  margin-top: 16px;
  background-color: white;
  height: 60px;
  border: black .5px solid;
  align-content: center;
}

.propietario text{
  padding-left: 10px;
}

.opcion{
  background-color: gray;
  border: black 1px solid;}
</style>