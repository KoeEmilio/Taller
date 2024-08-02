<template>
    <video autoplay muted loop id="fondo-video" :src="video"></video>
  
    <div class="container">
      <div class="header">
        <router-link to="/MenuOrdenesEmpleado">
          <v-btn
          class="ma-3"
          color="white"
          icon="mdi-arrow-left-bold-circle-outline"
        ></v-btn>
        </router-link>
        <span class="header-text">Detalles de la Orden</span>
      </div>
  
      <v-form @submit.prevent="submit">
        <!-- Formulario de Detalles de la Orden -->
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
  
        <!-- Formulario de Refacciones -->
        <v-text-field
          v-model="form.ordenID"
          :error-messages="errors.ordenID"
          label="Numero de Orden"
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
          label="Marca de la Refaccion"
          class="form-field"
        ></v-text-field>
  
        <v-text-field
          v-model="form.cantidad"
          :error-messages="errors.cantidad"
          label="Cantidad de Refacciones"
          type="number"
          class="form-field"
        ></v-text-field>
  
        <v-text-field
          v-model="form.precio"
          :error-messages="errors.precio"
          label="Precio de Refacciones"
          type="number"
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
  import { useRouter } from 'vue-router'
  import video from '@/video/pixel_red.mp4'
  
  const router = useRouter()
  
  const form = ref({
    noOrden: '',
    fechaEntrega: '',
    servicioProporcionado: '',
    costoManoObra: '',
    diasGarantia: '',
    ordenID: '',
    nombreRefaccion: '',
    marca: '',
    cantidad: '',
    precio: '',
    comprador: '',
  })
  
  const errors = ref({
    noOrden: [],
    fechaEntrega: [],
    servicioProporcionado: [],
    costoManoObra: [],
    diasGarantia: [],
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
      noOrden: [],
      fechaEntrega: [],
      servicioProporcionado: [],
      costoManoObra: [],
      diasGarantia: [],
      ordenID: [],
      nombreRefaccion: [],
      marca: [],
      cantidad: [],
      precio: [],
      comprador: [],
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
  
    if (!form.value.ordenID) {
      errors.value.ordenID.push('El numero de la orden es requerido.')
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
      ordenID: '',
      nombreRefaccion: '',
      marca: '',
      cantidad: '',
      precio: '',
      comprador: '',
    }
    errors.value = {
      noOrden: [],
      fechaEntrega: [],
      servicioProporcionado: [],
      costoManoObra: [],
      diasGarantia: [],
      ordenID: [],
      nombreRefaccion: [],
      marca: [],
      cantidad: [],
      precio: [],
      comprador: [],
    }
  }
  
  const goBack = () => {
    router.go(-1) // para regresar a la vista anterior 
  }
  
  const compradores = ref(['Cliente', 'Taller'])
  </script>
  
  <style scoped>
  #fondo-video {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
  }
  
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
    padding-top: 80px; 
    background-color: rgba(255, 255, 255, 10); /* Fondo blanco semi-transparente */
    border-radius: 8px; /* Bordes redondeados */
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
  