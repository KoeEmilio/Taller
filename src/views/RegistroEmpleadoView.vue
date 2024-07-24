<script setup>
import { ref } from 'vue';

const rfc = ref('');
const socialSecurityNumber = ref('');
const curp = ref('');
const email = ref('');
const state = ref('');
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
  <v-app>
    <v-container>
      <v-app-bar app color="#7d0100" dark>
        <router-link to="/">
          <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
          ></v-btn>
        </router-link>
        <h1 class="text-center w-100">REGISTRAR EMPLEADOS</h1>
      </v-app-bar>
    </v-container>
    <v-container>
    </v-container>
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="rfc"
          :rules="[v => !!v || 'RFC es requerido']"
          label="RFC"
          required
        ></v-text-field>

        <v-text-field
          v-model="socialSecurityNumber"
          :rules="[v => !!v || 'Número de Seguro Social es requerido', v => /^\d{11}$/.test(v) || 'Número de Seguro Social debe tener 11 dígitos']"
          label="Número de Seguro Social"
          required
        ></v-text-field>

        <v-text-field
          v-model="curp"
          :rules="[v => !!v || 'CURP es requerido']"
          label="CURP"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="[v => !!v || 'Correo es requerido', v => /.+@.+\..+/.test(v) || 'Correo debe ser válido']"
          label="Correo"
          required
          type="email"
        ></v-text-field>

        <v-select
          v-model="state"
          :items="['LIBRE', 'OCUPADO']"
          :rules="[v => !!v || 'Estado es requerido']"
          label="Estado"
          required
        ></v-select>

        <v-btn :disabled="!valid" color="#7d0100" @click="submit">
          Registrar
        </v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
