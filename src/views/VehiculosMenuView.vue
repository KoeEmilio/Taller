<script setup>
import { RouterLink, RouterView } from 'vue-router'</script>

<template>
  <VApp>
    <VAppBar app color="#1a1a1a" dark>
      <router-link to="/MenuPrincipal">
        <v-btn
        class="ma-3"
        color="white"
        icon="mdi-arrow-left-bold-circle-outline"
      ></v-btn>
      </router-link>
    <h1 class="text-center w-100">VEHICULOS</h1>
    </VAppBar>
    <VContainer class="d-flex flex-column align-center fill-height">
      <VImg src="/src/img/logonegro.png" alt="logo" width="150" height="100" class="my-4" />
      <VRow class="menu flex-grow-1">
        <VCol cols="12" sm="4" class="d-flex justify-center">
          <RouterLink to="/RegistroVehiculo" class="menu-button text-decoration-none">
            <VBtn color="#1a1a1a" dark class="w-100 h-100">
              <div class="text-center">
                <v-icon :style="{ fontSize: '48px' }">mdi-car-select</v-icon>
                <h2>REGISTRAR</h2>
                <h2>VEHICULO</h2>
              </div>
            </VBtn>
          </RouterLink>
        </VCol>
        <VCol cols="12" sm="4" class="d-flex justify-center">
          <RouterLink to="/VehiculosInfo" class="menu-button text-decoration-none">
            <VBtn color="#1a1a1a" dark class="w-100 h-100">
              <div class="text-center">
                <v-icon :style="{ fontSize: '48px' }">mdi-car-search</v-icon>
                <h2>VER</h2>
                <h2>VEHICULOS</h2>
              </div>
            </VBtn>
          </RouterLink>
        </VCol>
        <VCol cols="12" sm="4" class="d-flex justify-center">
          <RouterLink to="/Servicios" class="menu-button text-decoration-none">
            <VBtn color="#1a1a1a" dark class="w-100 h-100">
              <div class="text-center">
                <v-icon :style="{ fontSize: '48px' }">mdi-car-wrench</v-icon>
                <h1>SERVICIOS</h1>
              </div>
            </VBtn>
          </RouterLink>
        </VCol>
      </VRow>
    </VContainer>
  </VApp>
</template>

<style scoped>
.text-center {
  text-align: center;
}
.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}
.fill-height {
  height: 100vh;
}
.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
.menu-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 220px;
  border: 4px solid black;
  border-radius: 5%;
  background-color: #7d0100;
  color: white;
}
.text-decoration-none {
  text-decoration: none;
}
.my-4 {
  margin: 1rem 0;
}
</style>