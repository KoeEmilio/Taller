<template>
  <v-app>
    <v-container class="container">
      <v-app-bar app color="#1a1a1a">
        <router-link to="/Clientes">
          <v-btn
            class="ma-3"
            color="white"
            icon="mdi-arrow-left-bold-circle-outline"
          ></v-btn>
        </router-link>
        <h1 class="text-center w-100">INGRESOS</h1>
      </v-app-bar>

      <v-row class="summary-options" justify="center">
        <v-btn @click="verResumen('semana')">Resumen de la Semana</v-btn>
        <v-btn @click="verResumen('mes')">Resumen del Mes</v-btn>
      </v-row>

      <v-card class="total-card" outlined>
        <v-card-title>Total: {{ formatCurrency(total) }}</v-card-title>
      </v-card>

      <v-card class="income-card" v-for="orden in ordenesFiltradas" :key="orden.id">
        <v-card-title>{{ orden.servicio }}</v-card-title>
        <v-card-subtitle>Fecha: {{ orden.fecha }}</v-card-subtitle>
        <v-card-text>
          <div>Costo: {{ formatCurrency(orden.costo) }}</div>
          <div>Realizado por: {{ orden.tecnico }}</div>
          <div>Detalles: {{ orden.detalles }}</div>
          <div v-if="ordenesCliente(orden.cliente).length > 1">
            <strong>Más órdenes de este cliente:</strong>
            <ul>
              <li v-for="otraOrden in ordenesCliente(orden.cliente)" :key="otraOrden.id">
                {{ otraOrden.servicio }} - {{ otraOrden.fecha }}
              </li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { isWithinInterval, subDays, subMonths } from 'date-fns'

const ordenes = ref([
  { id: 1, servicio: 'Cambio de Aceite', fecha: '2024-08-05', costo: 500, tecnico: 'Pepinillo Rick', detalles: 'Se realizó un cambio de aceite completo con filtro nuevo.', cliente: 'Juan Perez' },
  { id: 2, servicio: 'Alineación y Balanceo', fecha: '2024-08-12', costo: 800, tecnico: 'Homero Simpson', detalles: 'Se alinearon y balancearon las 4 ruedas.', cliente: 'María Lopez' },
  { id: 3, servicio: 'Cambio de Bujías', fecha: '2024-08-10', costo: 400, tecnico: 'Sr. Kenarvan', detalles: 'Se cambiaron todas las bujías del motor.', cliente: 'Juan Perez' },
])

const ordenesFiltradas = ref([])
const total = ref(0)

const verResumen = (periodo) => {
  const ahora = new Date()
  let inicioPeriodo

  if (periodo === 'semana') {
    inicioPeriodo = subDays(ahora, 7)
  } else if (periodo === 'mes') {
    inicioPeriodo = subMonths(ahora, 1)
  }

  ordenesFiltradas.value = ordenes.value.filter(orden => {
    return isWithinInterval(new Date(orden.fecha), { start: inicioPeriodo, end: ahora })
  })

  total.value = ordenesFiltradas.value.reduce((acc, orden) => acc + orden.costo, 0)
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(value)
}

const ordenesCliente = (cliente) => {
  return ordenes.value.filter(orden => orden.cliente === cliente)
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  padding-top: 100px;
}

.summary-options {
  margin-top: -4px; 
  margin-bottom: 20px;
  padding-top: 4px; 
}

.summary-options v-btn {
  margin: 0 10px;
}

.total-card {
  margin-top: 20px;
  padding: 16px;
  border: 2px solid black;
  border-radius: 8px;
  text-align: center;
}

.income-card {
  margin-top: 20px;
  border: 2px solid black;
  border-radius: 8px;
}
</style>
