<script setup>
import { ref } from 'vue';
import video from '@/video/pixel_red.mp4';

const brand = ref('');
const model = ref('');
const year = ref('');
const color = ref('');
const transmissionType = ref('');
const registrationNumber = ref('');
const ownerId = ref('');  // Campo para el ID del propietario
const valid = ref(false);
const form = ref(null);

const submit = () => {
  if (form.value.validate()) {
    alert('Registro exitoso');
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  }
};
</script>

<template>
  <video autoplay muted loop id="fondo-video" :src="video"></video>

  <v-app>
    <v-app-bar app color="transparent">
        <router-link to="/Vehiculos">
        <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
        ></v-btn>
        </router-link>
        </v-app-bar>
    <div class="container">
      <v-card class="Card">
        <v-card-title id="titulo">Registrar Vehículo</v-card-title>
        <v-card-text>
          <v-container>
            <v-form id="interior-card" ref="form" v-model="valid">
              <v-text-field
                v-model="brand"
                :rules="[v => !!v || 'Marca es requerida']"
                label="Marca"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="model"
                :rules="[v => !!v || 'Modelo es requerido']"
                label="Modelo"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="year"
                :rules="[v => !!v || 'Año es requerido', v => /^\d{4}$/.test(v) || 'El año debe tener 4 dígitos']"
                label="Año"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="color"
                :rules="[v => !!v || 'Color es requerido']"
                label="Color"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="transmissionType"
                :rules="[v => !!v || 'Tipo de transmisión es requerido']"
                label="Tipo de Transmisión"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="registrationNumber"
                :rules="[v => !!v || 'Número de matrícula es requerido']"
                label="Número de Matrícula"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="ownerId"
                :rules="[v => !!v || 'ID del propietario es requerido']"
                label="ID del Propietario"
                variant="solo"
                required
              ></v-text-field>

              <v-btn :disabled="!valid" color="#7d0100" @click="submit">
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
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.Card {
  height: 80vh;
  width: 60vw;
  background-color: rgb(223, 223, 223);
  overflow-y: auto;
}

#titulo {
  background-color: rgb(230, 1, 1);
  color: white;
  box-shadow: -1px 2px 6px black;
  text-align: center;
}

#fondo-video {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}
</style>
