<script setup>
import { ref } from 'vue';
import logo from '@/img/logonegro.png';
import video from '../video/taller.mp4';  
import { useUserStore } from '@/stores/userStore';
import router from '@/router';

const userStore = useUserStore();
const Usuario = ref('');
const Contrasena = ref('');
const showPassword = ref(false);

const login = async () => {
  try {
    const loginData = {
      Usuario: Usuario.value,
      Contrasena: Contrasena.value      
    };

    console.log('Datos enviados:', loginData);

    const response = await fetch('http://testpdocrudo.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });

    // Revisa el status de la respuesta para asegurar que sea 200 OK
    if (!response.ok) {
      throw new Error(`Error en la respuesta de la API: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Respuesta de la API:', data);

    // Verifica la estructura de la respuesta
    if (data && data.status === 200 && data.msg === 'success' && data.data) {
      const usuario = data.data.usuario;
      const token = data.data._token;

      if (usuario && token) {
        userStore.setUsuario(usuario);
        userStore.setToken(token);

        // Verifica si el rol está presente
        if (usuario.Rol) {
          // Redirige según el rol del usuario
          if (usuario.Rol === 'Administrador') {
            router.push({ name: 'MenuPrincipal' });
          } else if (usuario.Rol === 'Empleado') {
            router.push({ name: 'MenuEmpleados' });
          } else if (usuario.Rol === 'Cliente') {
            router.push({ name: 'VistaCliente' });
          } else {
            throw new Error('Rol de usuario desconocido.');
          }
        } else {
          throw new Error('Rol del usuario no está definido.');
        }
      } else {
        throw new Error('Respuesta de la API no contiene datos de usuario o token.');
      }
    } else {
      throw new Error('Respuesta de la API no contiene datos válidos.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error en la autenticación. Verifica tus credenciales.');
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
  .contenedor-inicio-sesion {
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