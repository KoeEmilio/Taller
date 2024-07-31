<template>
    <div class="container">
      <div class="header">
        <v-btn icon @click="goBack" class="back-btn">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="header-text">Refacciones</span>
      </div>
  
      <v-form @submit.prevent="submit">
        <v-text-field
          v-model="form.ordenID"
          :error-messages="errors.ordenID"
          label="Orden ID"
          class="form-field"
          type="number"
        ></v-text-field>
  
        <v-text-field
          v-model="form.nombreRefaccion"
          :error-messages="errors.nombreRefaccion"
          label="Nombre de Refacción"
          class="form-field"
        ></v-text-field>
  
        <v-text-field
          v-model="form.marca"
          :error-messages="errors.marca"
          label="Marca"
          class="form-field"
        ></v-text-field>
  
        <v-text-field
          v-model="form.cantidad"
          :error-messages="errors.cantidad"
          label="Cantidad"
          type="number"
          class="form-field"
        ></v-text-field>
  
        <v-text-field
          v-model="form.precio"
          :error-messages="errors.precio"
          label="Precio"
          type="number"
          step="0.01"
          class="form-field"
        ></v-text-field>
  
        <v-select
          v-model="form.comprador"
          :error-messages="errors.comprador"
          :items="compradores"
          label="Comprador"
          class="form-field"
        ></v-select>
  
        <v-btn type="submit" color="primary" class="submit-btn">
          Guardar Detalles
        </v-btn>
      </v-form>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
  
    const form = ref({
      ordenID: '',
      nombreRefaccion: '',
      marca: '',
      cantidad: '',
      precio: '',
      comprador: '',
    })
  
    const errors = ref({
      ordenID: [],
      nombreRefaccion: [],
      marca: [],
      cantidad: [],
      precio: [],
      comprador: [],
    })
  
    const validateForm = () => {
      let isValid = true
      errors.value = {
        ordenID: [],
        nombreRefaccion: [],
        marca: [],
        cantidad: [],
        precio: [],
        comprador: [],
      }
  
      if (!form.value.ordenID) {
        errors.value.ordenID.push('El ID de la orden es requerido.')
        isValid = false
      }
  
      if (!form.value.nombreRefaccion) {
        errors.value.nombreRefaccion.push(
          'El nombre de la refacción es requerido.'
        )
        isValid = false
      }
  
      if (!form.value.marca) {
        errors.value.marca.push('La marca es requerida.')
        isValid = false
      }
  
      const cantidad = parseInt(form.value.cantidad)
      if (isNaN(cantidad) || cantidad < 0) {
        errors.value.cantidad.push('La cantidad debe ser un número positivo.')
        isValid = false
      }
  
      const precio = parseFloat(form.value.precio)
      if (isNaN(precio) || precio < 0) {
        errors.value.precio.push('El precio debe ser un número positivo.')
        isValid = false
      }
  
      if (!form.value.comprador) {
        errors.value.comprador.push('El comprador es requerido.')
        isValid = false
      }
  
      return isValid
    }
  
    const submit = () => {
      if (validateForm()) {
        alert('Registro exitoso')
        resetForm()
      } else {
        alert(
          'Algo salió mal con el registro, inténtalo de nuevo y asegúrate de ingresar cada dato correctamente.'
        )
      }
    }
  
    const resetForm = () => {
      form.value = {
        ordenID: '',
        nombreRefaccion: '',
        marca: '',
        cantidad: '',
        precio: '',
        comprador: '',
      }
      errors.value = {
        ordenID: [],
        nombreRefaccion: [],
        marca: [],
        cantidad: [],
        precio: [],
        comprador: [],
      }
    }
  
    const goBack = () => {
      // Lógica para retroceder a la vista anterior
    }
  
    const compradores = ref(['Cliente', 'Taller'])
  </script>
  
  <style scoped>
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 16px;
      padding-top: 80px; /*no mover el scoped plis */
    }
  
    .header {
      background-color: #7d0100;
      color: white;
      padding: 16px;
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      height: 60px; 
    }
  
    .header-text {
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
  
    .back-btn {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
  
    .form-field {
      margin-bottom: 16px;
    }
  
    .submit-btn {
      margin-top: 16px;
    }
  </style>
  