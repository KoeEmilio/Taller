<template>
    <div class="container">
      <div class="header">
        <v-btn icon @click="goBack" class="back-btn">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="header-text">Detalles de la Orden</span>
      </div>
  
      <v-form @submit.prevent="submit">
        <v-text-field
          v-model="form.noOrden"
          :error-messages="errors.noOrden"
          label="Número de Orden"
          class="form-field"
        ></v-text-field>
  
        <v-text-field
          v-model="form.fechaEntrega"
          :error-messages="errors.fechaEntrega"
          label="Fecha de Entrega"
          class="form-field"
        ></v-text-field>
  
        <v-text-field
          v-model="form.servicioProporcionado"
          :error-messages="errors.servicioProporcionado"
          label="Servicio Proporcionado"
          class="form-field"
        ></v-text-field>
  
        <v-text-field
          v-model="form.costoManoObra"
          :error-messages="errors.costoManoObra"
          label="Costo de Mano de Obra"
          type="number"
          step="0.01"
          class="form-field"
        ></v-text-field>
  
        <v-text-field
          v-model="form.diasGarantia"
          :error-messages="errors.diasGarantia"
          label="Días de Garantía"
          type="number"
          step="1"
          class="form-field"
        ></v-text-field>
  
        <v-btn type="submit" color="primary" class="submit-btn">
          Guardar Detalles
        </v-btn>
      </v-form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const form = ref({
    noOrden: '',
    fechaEntrega: '',
    servicioProporcionado: '',
    costoManoObra: '',
    diasGarantia: '',
  })
  
  const errors = ref({
    noOrden: [],
    fechaEntrega: [],
    servicioProporcionado: [],
    costoManoObra: [],
    diasGarantia: [],
  })
  
  const validateForm = () => {
    let isValid = true
    errors.value = {
      noOrden: [],
      fechaEntrega: [],
      servicioProporcionado: [],
      costoManoObra: [],
      diasGarantia: [],
    }
  
    if (!form.value.noOrden) {
      errors.value.noOrden.push('El número de orden es requerido.')
      isValid = false
    }
  
    if (!form.value.fechaEntrega) {
      errors.value.fechaEntrega.push('La fecha de entrega es requerida.')
      isValid = false
    }
  
    if (!form.value.servicioProporcionado) {
      errors.value.servicioProporcionado.push(
        'El servicio proporcionado es requerido.'
      )
      isValid = false
    }
  
    const costoManoObra = parseFloat(form.value.costoManoObra)
    if (isNaN(costoManoObra) || costoManoObra <= 0) {
      errors.value.costoManoObra.push(
        'El costo de mano de obra es requerido y debe ser un número positivo.'
      )
      isValid = false
    }
  
    const diasGarantia = parseFloat(form.value.diasGarantia)
    if (isNaN(diasGarantia) || diasGarantia <= 0) {
      errors.value.diasGarantia.push(
        'Los días de garantía son requeridos y deben ser un número positivo.'
      )
      isValid = false
    }
  
    return isValid
  }
  
  const submit = () => {
    if (validateForm()) {
      alert('Registro exitoso')
      resetForm()
      router.push('/InfoClientes') 
    } else {
      alert(
        'Algo salió mal con el registro, inténtalo de nuevo y asegúrate de ingresar cada dato correctamente.'
      )
    }
  }
  
  const resetForm = () => {
    form.value = {
      noOrden: '',
      fechaEntrega: '',
      servicioProporcionado: '',
      costoManoObra: '',
      diasGarantia: '',
    }
    errors.value = {
      noOrden: [],
      fechaEntrega: [],
      servicioProporcionado: [],
      costoManoObra: [],
      diasGarantia: [],
    }
  }
  
  const goBack = () => {
    router.go(-1) // para regresar a la vista anterior 
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
    padding-top: 80px; 
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
  