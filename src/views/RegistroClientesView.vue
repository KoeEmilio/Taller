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
        <router-link to="/Clientes">
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
                      v-model="telefono"
                      :rules="[v => !!v || 'Número de teléfono es requerido', v => /^\d{10}$/.test(v) || 'El número de telefono debe tener 10 dígitos']"
                      label="Telefono"
                      variant="solo"
                      required
                    ></v-text-field>

                    <v-radio-group v-model="Tipo" :rules="[v => !!v || 'Tipo de cliente es requerido']" label="Tipo de Cliente" required>
                    <v-radio label="Físico" value="fisico"></v-radio>
                    <v-radio label="Moral" value="moral"></v-radio>
                    </v-radio-group>

              <v-text-field
                v-if="Tipo === 'moral'"
                v-model="empresa"
                :rules="[v => !!v || 'Nombre de la empresa es requerido']"
                label="Nombre de la Empresa"
                variant="solo"
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
