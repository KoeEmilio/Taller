<script setup>
import { ref } from 'vue';
import video from '@/video/pixel_red.mp4'

const name = ref('');
const email = ref('');
const telefono = ref('');
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
  <v-container></v-container>
  <v-container></v-container>
  <V-App>
    <VAppBar app color="#7d0100" dark>
      <router-link to="/Clientes">
        <v-btn
          class="ma-3"
          color="white"
          icon="mdi-arrow-left-bold-circle-outline"
        ></v-btn>
      </router-link>
      <h1 class="text-center w-100">REGISTRAR CLIENTES</h1>
    </VAppBar>
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="name"
          :rules="[v => !!v || 'Nombre es requerido']"
          label="Nombre"
          required
        ></v-text-field>

        <v-text-field
          v-model="address"
          :rules="[v => !!v || 'Dirección es requerida']"
          label="Dirección"
          required
        ></v-text-field>

        <v-text-field
          v-model="phone"
          :rules="[v => !!v || 'Teléfono es requerido', v => /^\d+$/.test(v) || 'El teléfono debe ser un número válido']"
          label="Teléfono"
          required
        ></v-text-field>

        <v-text-field
          v-model="username"
          :rules="[v => !!v || 'Nombre de usuario es requerido']"
          label="Nombre de Usuario"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[v => !!v || 'Contraseña es requerida']"
          :type="showPassword ? 'text' : 'password'"
          label="Contraseña"
          @click:append="showPassword = !showPassword"
          required
        ></v-text-field>

        <v-text-field
          v-model="confirmPassword"
          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[
            v => !!v || 'Confirmar contraseña es requerida',
            v => v === password || 'Las contraseñas no coinciden'
          ]"
          :type="showConfirmPassword ? 'text' : 'password'"
          label="Confirmar Contraseña"
          @click:append="showConfirmPassword = !showConfirmPassword"
          required
        ></v-text-field>

        <!-- Nuevo campo para tipo de cliente -->
        <v-radio-group v-model="clientType" :rules="[v => !!v || 'Tipo de cliente es requerido']" label="Tipo de Cliente" required>
          <v-radio label="Físico" value="fisico"></v-radio>
          <v-radio label="Moral" value="moral"></v-radio>
        </v-radio-group>

        <v-btn :disabled="!valid" color="success" @click="submit">
          Registrar
        </v-btn>
      </v-form>
    </v-container>
  </V-App>
</template>

<style scoped>
  /* Puedes agregar estilos adicionales aquí si lo necesitas */
</style>
