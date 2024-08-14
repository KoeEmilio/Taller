<script setup>
import { ref } from 'vue';
import logo from '@/img/logonegro.png';
import video from '../video/taller.mp4';  
import { useUserStore } from '@/stores/userStorage';
import router from '@/router';


const userStore = useUserStore();
const Usuario = ref('');
const Contrasena = ref('');

;
const showPassword = ref(false);

const login = async () => {
  try {
    const response = await fetch('http://testpdo.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Usuario: Usuario.value,
        Contrasena: Contrasena.value      
      })
    });

    if (!response.ok) {
      throw new Error('Error en la autenticación');
    }

    const data = await response.json();

    if (data.msg === 'success') {
      userStore.setUsuario(data.data.usuario);
      userStore.setToken(data.data._token);
      router.push({
        name:'MenuPrincipal',
      })
    }
  } catch (error) {
    console.error('Error:', error);
    alert('TONOTO');
  }
};
</script>

<template>
  <div class="page-container">
    <video autoplay muted loop playsinline id="background-video" :src="video"></video>
    <div class="contenedor">
      <v-container class="fill-height">
        <v-row id="Contenedor-login">
          <v-card  class="contenedor-inicio-sesion transparente">  
            <v-card-title id="titulo" class="transparente-titulo" style="text-align: center;">
              <img :src="logo" alt="Logo" id="logo">  
            </v-card-title>
            <div id="contenedor-formulario" class="transparente">
              <v-card-title id="titulo-formulario" style="text-align: center;">INICIA SESIÓN</v-card-title>
              <v-card-text>
                <v-container>
                  <v-row id="UserRow">
                    <v-text-field
                      v-model="Usuario"
                      label="Usuario"
                      variant="solo"
                      clearable
                      :clear-icon-color="'black'"
                    ></v-text-field>
                  </v-row>
                  <v-row id="PasswordRow">
                    <v-text-field
                      v-model="Contrasena"
                      label="Contraseña"
                      variant="solo"
                      :type="showPassword ? 'text' : 'password'"
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
                      <v-btn class="botones-color" block @click="login">Ingresar</v-btn>
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
  pointer-events: none;
  user-select: none; 
}

#Contenedor-login {
  display: flex;
  justify-content: center;
  max-height: 80%;
}

.contenedor-inicio-sesion{
width: 90%;
height: 100%;
}
@media (min-width: 768px) {
  .contenedor-inicio-sesion{
width: 400px;
} 
}
.transparente {
  background-color: rgba(255, 255, 255, 0.6) !important;
  box-shadow: none !important;
}

.transparente-titulo {
  background-color: rgba(255, 255, 255, 0.6) !important; 
}

#titulo {
  color: white;
  box-shadow: none;
}

#titulo-formulario {
  color: rgb(0, 0, 0);
  box-shadow: none;
  margin-top: 10px;
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

#logo {
  width: 60%; /* Ajusta el tamaño del logo según tus necesidades */
  margin: 0 auto;
}

.O {
  justify-content: center;
  text-decoration: none;
}

body {
  font-family: 'Inter', sans-serif;
}
</style>
