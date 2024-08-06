<script setup>
import { ref } from 'vue';
import video from '@/video/pixel_red.mp4'

const name = ref('');
const address = ref('');
const phone = ref('');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const valid = ref(false);
const form = ref(null);
const clientType = ref('');

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
        <router-link to="/ClientesEmpleados">
        <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
        ></v-btn>
        </router-link>
        </v-app-bar>
    <div class="container">
      <v-card class="Card">
        <v-card-title id="titulo">Registrar Cliente</v-card-title>
        <v-card-text>
          <v-container>
            <v-form id="interior-card" ref="form" v-model="valid">
              <v-text-field
                v-model="name"
                :rules="[v => !!v || 'Nombre es requerido']"
                label="Nombre Completo"
                variant="solo"
              ></v-text-field>

              <v-text-field
                v-model="address"
                :rules="[v => !!v || 'Dirección es requerida']"
                label="Dirección"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="phone"
                :rules="[v => !!v || 'Número de teléfono es requerido', v => /^\d{10}$/.test(v) || 'El número de teléfono debe tener 10 dígitos']"
                label="Teléfono"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="username"
                :rules="[v => !!v || 'Nombre de usuario es requerido']"
                label="Nombre de Usuario"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="[v => !!v || 'Contraseña es requerida']"
                :type="showPassword ? 'text' : 'password'"
                label="Contraseña"
                variant="solo"
                required
                append-icon="mdi-eye"
                @click:append="showPassword = !showPassword"
              ></v-text-field>

              <v-text-field
                v-model="confirmPassword"
                :rules="[v => !!v || 'Confirmación de contraseña es requerida', v => v === password.value || 'Las contraseñas no coinciden']"
                :type="showConfirmPassword ? 'text' : 'password'"
                label="Confirmar Contraseña"
                variant="solo"
                required
                append-icon="mdi-eye"
                @click:append="showConfirmPassword = !showConfirmPassword"
              ></v-text-field>

              <v-select
                v-model="clientType"
                :items="['Fisica', 'Moral']"
                label="Tipo de Cliente"
                variant="solo"
                required
              ></v-select>

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
