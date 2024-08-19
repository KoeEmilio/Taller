<template>
  <v-app>
    <v-container class="container" fluid>
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

      <v-main>
        <v-container class="py-5">
          <v-row class="summary-options" justify="center">
            <v-col cols="12" md="4">
              <v-text-field 
                label="Fecha" 
                type="date" 
                v-model="selectedDate"
                :max="new Date().toISOString().substr(0, 10)"
                required>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-btn block @click="verResumen('semana')">Resumen de la Semana</v-btn>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn block @click="verResumen('mes')">Resumen del Mes</v-btn>
            </v-col>
          </v-row>

          <v-card class="total-card mb-5" outlined>
            <v-card-title>Total: {{ formatCurrency(total) }}</v-card-title>
          </v-card>

          <v-card class="income-card mb-3" v-for="orden in ordenesFiltradas" :key="orden.id">
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
      </v-main>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns'

const selectedDate = ref(new Date().toISOString().substr(0, 10))
const ordenesFiltradas = ref([])
const total = ref(0)

const verResumen = async (periodo) => {
  let inicioPeriodo, finPeriodo

  if (periodo === 'semana') {
    inicioPeriodo = startOfWeek(new Date(selectedDate.value), { weekStartsOn: 1 })
    finPeriodo = endOfWeek(new Date(selectedDate.value), { weekStartsOn: 1 })
  } else if (periodo === 'mes') {
    inicioPeriodo = startOfMonth(new Date(selectedDate.value))
    finPeriodo = endOfMonth(new Date(selectedDate.value))
  }

  const inicio = inicioPeriodo.toISOString().split('T')[0]
  const fin = finPeriodo.toISOString().split('T')[0]

  try {
    const response = await fetch(`http://testpdo.com/api/ordenes?inicio=${inicio}&fin=${fin}`)
    const data = await response.json()
    ordenesFiltradas.value = data
    total.value = ordenesFiltradas.value.reduce((acc, orden) => acc + orden.costo, 0)
  } catch (error) {
    console.error('Error fetching orders:', error)
  }
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(value)
}

const ordenesCliente = (cliente) => {
  return ordenesFiltradas.value.filter(orden => orden.cliente === cliente)
}
</script>
