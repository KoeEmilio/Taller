<script setup>

</script>

<template>
  <v-app>  
    <VAppBar app color="#1a1a1a" dark>
      <router-link to="MenuPrincipal">
        <v-btn color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="text-center w-100">REGISTRAR ORDEN</h1>
    </VAppBar>

    <div class="container">
      <div class="Card">
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-date-input label="Fecha de Ingreso"></v-date-input>

              <div>
                <label for="empleado">Seleccione un empleado:</label>
                <select id="empleado">
                  <option value="" disabled selected>Seleccione un empleado</option>
                </select>
              </div>

              <div>
                <label for="vehiculo">Vehículo:</label>
                <select id="vehiculo">
                  <option value="" disabled selected>Seleccione un vehículo:</option>
                </select>
              </div>

              <div>
                <label for="motivo">Motivo:</label>
                <input type="text" id="motivo" placeholder="Ingrese el motivo">
              </div>

              <div>
                <label for="cita">Cita:</label>
                <select id="cita">
                  <option value="" disabled selected>Seleccione una cita:</option>
                </select>
              </div>

              <div>
                <label for="estado">Estado:</label>
                <select id="estado">
                  <option value="" disabled selected>Estado de la orden:</option>
                </select>
              </div>

              <v-btn id="btn-registrar" color="#1a1a1a">
                Registrar
              </v-btn>
            </v-form>
          </v-container>
        </v-card-text>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh; 
  justify-content: center;
  align-items: center;
  background-color: gray;
}

.Card {
  height: auto;
  width: 80vw;
  background-color: rgb(223, 223, 223);
  margin-top: 16px;
}

#btn-registrar{
  margin-top: 16px;
  margin-left: 950px;
  transition: transform 0.2s ease;
}

#btn-registrar:hover{
  transform: translateY(4px); 
}

select, input[type="datetime-local"], input[type="text"] {
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
