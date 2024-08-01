<script setup>
import { ref } from 'vue';

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
    
  }
};
</script>

<template>
  <v-app>
    <v-container>
      <v-app-bar app color="#7d0100" dark>
        <router-link to="/VehiculosEmpleados">
          <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
          ></v-btn>
        </router-link>
        <h1 class="text-center w-100">REGISTRAR VEHÍCULO</h1>
      </v-app-bar>
    </v-container>
    <v-container>
    </v-container>
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="brand"
          :rules="[v => !!v || 'La marca es requerida']"
          label="Marca"
          required
        ></v-text-field>

        <v-text-field
          v-model="model"
          :rules="[v => !!v || 'El modelo es requerido']"
          label="Modelo"
          required
        ></v-text-field>

        <v-text-field
          v-model="year"
          :rules="[v => !!v || 'El año es requerido', v => (v >= 1900 && v <= 2099) || 'El año debe estar entre 1900 y 2099']"
          label="Año"
          required
          type="number"
          min="1900"
          max="2099"
        ></v-text-field>

        <v-text-field
          v-model="color"
          :rules="[v => !!v || 'El color es requerido']"
          label="Color"
          required
        ></v-text-field>

        <v-select
          v-model="transmissionType"
          :items="['Manual', 'Automático']"
          :rules="[v => !!v || 'El tipo de transmisión es requerido']"
          label="Tipo de Transmisión"
          required
        ></v-select>

        <v-text-field
          v-model="registrationNumber"
          :rules="[v => !!v || 'La matrícula es requerida']"
          label="Matrícula"
          required
        ></v-text-field>

        <v-text-field
          v-model="ownerId"
          :rules="[v => !!v || 'El ID del propietario es requerido']"
          label="ID del Propietario"
          required
        ></v-text-field>

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