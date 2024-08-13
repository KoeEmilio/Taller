<template>
  <v-app>
    <v-container class="container">
      <div class="header">
        <v-btn icon class="back-btn" @click="goBack">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="header-text">Pagos</span>
      </div>

      <v-card class="payment-card" v-for="pago in pagos" :key="pago.id">
        <v-card-title>{{ pago.servicio }}</v-card-title>
        <v-card-subtitle>Fecha: {{ pago.fecha }}</v-card-subtitle>
        <v-card-text>
          <div>Cliente: {{ pago.cliente }}</div>
          <div>Monto: {{ pago.monto }}</div>
          <div>Estatus del pago: 
            <v-chip :color="pago.estatus === 'completado' ? 'green' : 'red'" dark>
              {{ pago.estatus }}
            </v-chip>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="liberarPago(pago)" v-if="pago.estatus === 'pendiente'">Liberar</v-btn>
          <v-btn color="error" @click="cancelarPago(pago)" v-if="pago.estatus === 'pendiente'">Cancelar</v-btn>
          <v-btn color="secondary" @click="eliminarPago(pago)" v-if="pago.estatus === 'pendiente'">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const pagos = ref([
  { id: 1, servicio: 'Mantenimiento', fecha: '2024-08-01', cliente: 'Juan Perez', monto: 1500, estatus: 'pendiente' },
  { id: 2, servicio: 'Reparación', fecha: '2024-08-02', cliente: 'María Lopez', monto: 2000, estatus: 'completado' },
])

const liberarPago = (pago) => {
  pago.estatus = 'completado'
}

const cancelarPago = (pago) => {
  pago.estatus = 'cancelado'
}

const eliminarPago = (pago) => {
  const index = pagos.value.findIndex(p => p.id === pago.id)
  if (index !== -1) {
    pagos.value.splice(index, 1)
  }
}

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  padding-top: 100px;
}

.header {
  background-color: #1a1a1a;
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
}

.back-btn {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}

.header-text {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
}

.payment-card {
  margin-top: 20px;
  border: 2px solid black;
  border-radius: 8px;
}
</style>
