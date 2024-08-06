<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import video from '@/video/taller.mp4';

const usuario = ref('');
const contrasena1 = ref('');
const router = useRouter();

const IngresarFormulario = () => {
  if (usuario.value === 'azael@gmail.com' && contrasena1.value === '1234') {
    router.push({ name: 'MenuEmpleados' });
  } else if (usuario.value === 'saul@gmail.com' && contrasena1.value === '1234') {
    router.push({ name: 'MenuPrincipal' });
  } else if (usuario.value === 'sal@gmail.com' && contrasena1.value === '1234') {
    router.push({ name: 'MenuPrincipal' });
  } else {
    alert('Correo o contraseña incorrectos');
  }
};
</script>

<template>
  <div class="page-container">
    <video autoplay muted loop playsinline id="background-video" :src="video"></video>
    <div class="contenedor">
      <v-container class="fill-height">
        <v-row id="Contenedor-login">
          <v-card class="transparente" width="30vw" height="80vh">
            <v-card-title id="titulo" class="transparente-titulo" style="text-align: center;">INICIA SESIÓN</v-card-title>
            <div id="contenedor-formulario" class="transparente">
              <v-card-text>
                <v-container>
                  <v-row id="UserRow">
                    <v-text-field
                      v-model="usuario"
                      label="Usuario"
                      variant="solo"
                      clearable
                      :clear-icon-color="'black'"
                    ></v-text-field>
                  </v-row>
                  <v-row id="PasswordRow">
                    <v-text-field
                      v-model="contrasena1"
                      label="Contraseña"
                      variant="solo"
                      type="password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                    ></v-text-field>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-container>
                  <v-row>
                    <v-col class="d-flex">
                      <v-btn class="botones-color" block @click="IngresarFormulario">Ingresar</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-actions>
            </div>
          </v-card>
        </v-row>
      </v-container>
    </div>
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
  pointer-events: none; /* Deshabilita la interacción con el video */
  user-select: none; /* Evita la selección del video */
}

#Contenedor-login {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 80%;
}

.transparente {
  background-color: rgba(255, 255, 255, 0.5) !important; /* Fondo blanco con 50% de opacidad */
  box-shadow: none !important;
}

.transparente-titulo {
  background-color: rgba(0, 0, 0, 0.8) !important; /* Fondo negro con 80% de opacidad */
}

#titulo {
  color: white;
  box-shadow: none;
}

#contenedor-formulario {
  width: 100%;
  height: 90%;
  padding-block: 10px;
}

#UserRow {
  padding-block: 8px;
}

#PasswordRow {
  padding-block: 10px;
}

.v-btn.botones-color {
  background-color: #000000;
  color: white;
  text-decoration: none;
}

.contenedor {
  height: 80vh;
}

.O {
  justify-content: center;
  text-decoration: none;
}

body {
  font-family: 'Inter', sans-serif;
}
</style>
