<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="page-container">
    <div class="contenedor">
      <v-container class="fill-height">
        <v-row>
          <v-col cols="6" offset="3">
            <v-card width="50vw">
              <v-card-title class="bg-red-darken-4" style="text-align: center;">Inicia Sesión</v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="3">Usuario</v-col>
                    <v-col>
                      <v-text-field label="Koe" variant="outlined"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">Contraseña</v-col>
                    <v-col>
                      <v-text-field label="password123" variant="outlined" type="password"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-container>
                  <v-row>
                    <v-col class="d-flex">
                      <v-btn color="primary" block>Ingresar</v-btn>
                    </v-col>
                    <v-col>
                      <router-link to="/RegistroClientes">
                        <v-btn color="primary" block>Registrarse</v-btn>
                      </router-link>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <router-view />
  </div>
</template>


<style>

.contenedor {
    height: 100vh;
    background-image: url('@/images/fondologin.jpg');
    background-size: cover
}

</style>