<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// Estado para controlar el menú desplegable
const menu = ref(false);
</script>

<template>
  <VApp>
    <VAppBar app color="#1a1a1a" dark>

      <h1 class="text-center w-100 TITULO">INICIO</h1>
      <VMenu v-model="menu" offset-y>
        <template #activator="{ props }">
          <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item>
            <RouterLink to="/Ingresos" class="texto-menu text-decoration-none">
              <v-list-item-title>Ingresos</v-list-item-title>
            </RouterLink>
          </v-list-item>
          <v-list-item>
            <RouterLink to="/CerrarSesion" class="texto-menu text-decoration-none">
              <v-list-item-title>Cerrar sesión</v-list-item-title>
            </RouterLink>
          </v-list-item>
        </v-list>
      </VMenu>
    
    </VAppBar>
    <v-container></v-container>
    <VContainer class="d-flex flex-column align-center fill-height">
      <VImg src="/src/img/logonegro.png" alt="logo" width="150" height="100" class="my-4" />
      <VRow class="menu flex-grow-1">
        <VCol cols="12" sm="3" class="d-flex justify-center">
          <RouterLink to="Clientes" class="menu-button text-decoration-none">
            <VBtn color="#1a1a1a" dark class="w-100 h-100">
              <div class="text-center">
                <v-icon :style="{ fontSize: '48px' }">mdi-account</v-icon>
                <h1>CLIENTE</h1>
              </div>
            </VBtn>
          </RouterLink>
        </VCol>
        <VCol cols="12" sm="3" class="d-flex justify-center">
          <RouterLink to="InfoEmpleados" class="menu-button text-decoration-none">
            <VBtn color="#1a1a1a" dark class="w-100 h-100">
              <div class="text-center">
                <v-icon :style="{ fontSize: '48px' }">mdi-account-tie</v-icon>
                <h1>Empleados</h1>
              </div>
            </VBtn>
          </RouterLink>
        </VCol>
        <VCol cols="12" sm="3" class="d-flex justify-center">
          <RouterLink to="/Vehiculos" class="menu-button text-decoration-none">
            <VBtn color="#1a1a1a" dark class="w-100 h-100">
              <div class="text-center">
                <v-icon :style="{ fontSize: '48px' }">mdi-car-back</v-icon>
                <h1>Vehiculos</h1>
              </div>
            </VBtn>
          </RouterLink>
        </VCol>
        <VCol cols="12" sm="3" class="d-flex justify-center">
          <RouterLink to="/RegistrarUsuario" class="menu-button text-decoration-none">
            <VBtn color="#1a1a1a" dark class="w-100 h-100">
              <div class="text-center">
                <v-icon :style="{ fontSize: '48px' }">mdi-account-plus</v-icon>
                <h1>REGISTRAR</h1>
                <h1>USUARIO</h1>
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
  color: white;
}
.text-decoration-none {
  text-decoration: none;
}
.my-4 {
  margin: 1rem 0;
}

.TITULO {
  align-items: center;
  padding-left: 60px;
}
.texto-menu{
  color: black;
}
</style>
