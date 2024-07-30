<script setup>
import { RouterLink, RouterView } from 'vue-router'</script>

<template>
  <VApp>
    <VAppBar app color="#7d0100" dark>
      <h1 class="text-center w-100">INICIO</h1>
      <router-link to="/">
        <v-btn
        class="ma-3"
        color="white"
        icon="mdi-account"
      ></v-btn>
      </router-link>
    </VAppBar>
    <VContainer class="d-flex flex-column align-center fill-height">
      <VImg src="/src/img/logo.jpg" alt="logo" width="150" height="100" class="my-4" />
      <VRow class="menu flex-grow-1">
        <VCol cols="12" sm="3" class="d-flex justify-center">
          <RouterLink to="Clientes" class="menu-button text-decoration-none">
            <VBtn color="#7d0100" dark class="w-100 h-100">
              <div class="text-center">
                <v-icon :style="{ fontSize: '48px' }">mdi-account</v-icon>
                <h1>CLIENTE</h1>
              </div>
            </VBtn>
          </RouterLink>
        </VCol>
        <VCol cols="12" sm="3" class="d-flex justify-center">
          <RouterLink to="Empleados" class="menu-button text-decoration-none">
            <VBtn color="#7d0100" dark class="w-100 h-100">
              <div class="text-center">
                <v-icon :style="{ fontSize: '48px' }">mdi-account-tie</v-icon>
                <h1>Empleados</h1>
              </div>
            </VBtn>
          </RouterLink>
        </VCol>
        <VCol cols="12" sm="3" class="d-flex justify-center">
          <RouterLink to="/VerCitas" class="menu-button text-decoration-none">
            <VBtn color="#7d0100" dark class="w-100 h-100">
              <div class="text-center">
                <v-icon :style="{ fontSize: '48px' }">mdi-calendar-range</v-icon>
                <h1>Citas</h1>
              </div>
            </VBtn>
          </RouterLink>
        </VCol>
        <VCol cols="12" sm="3" class="d-flex justify-center">
          <RouterLink to="/Vehiculos" class="menu-button text-decoration-none">
            <VBtn color="#7d0100" dark class="w-100 h-100">
              <div class="text-center">
                <v-icon :style="{ fontSize: '48px' }">mdi-car-back</v-icon>
                <h1>Vehiculos</h1>
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