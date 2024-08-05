<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import video from '@/video/pixel_red.mp4';

const usuario = ref('');
const contrasena1 = ref('');
const showPassword = ref(false);
const router = useRouter();

const IngresarFormulario = () => {
  if (usuario.value === 'azael@gmail.com' && contrasena1.value === '1234') {
    router.push({ name: 'MenuEmpleados' });
  } else if (usuario.value === 'saul@gmail.com' && contrasena1.value === '1234') {
    router.push({ name: 'MenuPrincipal' });
  } else {
    alert('Correo o contraseña incorrectos');
  }
};
</script>

<template>
  <div class="page-container">
    <video autoplay muted loop id="background-video" :src="video"></video>
    <v-container class="d-flex align-center justify-center fill-height">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="2" lg="5" x->
          <v-card class="transparente">
            <v-card-title id="titulo" class="transparente-titulo" text-align="center">INICIA SESIÓN</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="usuario"
                label="Usuario"
                variant="solo"
                clearable
                clear-icon-color="black"
              ></v-text-field>
              <v-text-field
                v-model="contrasena1"
                label="Contraseña"
                variant="solo"
                type="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <v-btn class="botones-color" block @click="IngresarFormulario">Ingresar</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

#background-video {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1; /* Ensure the video is behind other content */
}

.page-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.transparente {
  background-color: rgba(255, 255, 255, 0.5) !important; /* Fondo blanco con 50% de opacidad */
  box-shadow: none !important;
}

.transparente-titulo {
  background-color: #7d0100; /* Fondo negro con 80% de opacidad */
  text-align: center;
}

#titulo {
  color: white;
  box-shadow: none;
}

.v-btn.botones-color {
  background-color: #7d0100;
  color: white;
  text-decoration: none;
}

body {
  font-family: 'Inter', sans-serif;
}
</style>
