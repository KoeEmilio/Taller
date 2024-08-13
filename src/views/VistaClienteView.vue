<script setup>
import { useProfileStore } from '@/stores/counter';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const drawer = ref(true);
const rail = ref(true);

const store = useProfileStore()
const nombreUsuario = computed(() => store.title); // Computed para reflejar el estado reactivo

const dialog = ref(false)
const imagenUrl = ref("https://randomuser.me/api/portraits/men/85.jpg")
const tempImagen = ref("")


const openDialog = () => {
  tempImagen.value = imagenUrl.value
  dialog.value = true
}

const closeDialog = () => {
  dialog.value = false
}

const aceptDialog = () => {
  imagenUrl.value = tempImagen.value;
  dialog.value = false
} 

const onImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      tempImagen.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

// Referencia al input file oculto
const fileInput = ref(null)

// Función para abrir el input file
const triggerFileInput = () => {
  fileInput.value.click();
};




</script>


<template>
  <div class="main-container">
    <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
      
        <v-list-item 
          :prepend-avatar="imagenUrl"
          :title="nombreUsuario"
          nav
          @click="openDialog"
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          
          <router-link to="/VistaCliente/perfil">
            <v-list-item prepend-icon="mdi-account"  title="Mi perfil" value="users"></v-list-item>
          </router-link>

          <router-link to="/VistaCliente/MisVehiculos">
            <v-list-item prepend-icon="mdi-car  " title="Mis vehículos" value="home"></v-list-item>
          </router-link>

          <router-link to="/VistaCliente/DetalleDeMisOrdenes">
            <v-list-item prepend-icon="mdi-folder-multiple" title="Detalles de mis ordenes" value="account"></v-list-item>
          </router-link>

        </v-list>
        <v-list class="btn-home" density="compact" nav>
          <router-link to="/">
            <v-list-item prepend-icon="mdi-home" title="Ir a Inicio" value="home"></v-list-item>
          </router-link>

        </v-list>
       
        

      </v-navigation-drawer>

      <v-main class="container-right">
        <router-view></router-view>
      </v-main>
      
      
    </v-layout>
  </v-card>

  <v-dialog v-model="dialog" >
    <v-row class="dialog"> 
         <v-card class="cambiarImagen-card">

            <v-card-title class="titulo">
              Nueva Imagen
            </v-card-title>

            <v-card-text >
              <v-col>
                <v-row class="contenido-card">
                  <v-btn  icon="mdi-camera" variant="outlined" class="rounded-circle"  @click="triggerFileInput"></v-btn>
            
                  <input
                    ref="fileInput"
                    type="file"
                    class="d-none"
                    @change="onImageChange"
                  />
                </v-row>
              </v-col>
              
              <br>

              <v-row class="contenido-card">Cambiar Imagen</v-row>
              <br>
              <v-divider></v-divider>

            </v-card-text>

            <div class="botones">
              <div>
                <v-btn class="btn-cancelar" @click="closeDialog">Cancelar</v-btn>
              </div>
              <div>
                <v-btn class="btn-aceptar" @click="aceptDialog">Aceptar</v-btn>
              </div>
            </div>
              
        </v-card>
    </v-row>
     
    </v-dialog>


  </div>
  
</template>

<style scoped>
.main-container a {
  text-decoration: none ;
  color: inherit ;
}
.container-right{
  width: 100vw;
  height: 100vh;
  background-color: rgb(247, 249, 255);
}
.dialog{
  display: flex;
  justify-content: center;
  align-items: center;
}
.titulo{
  text-align: center;
}
.cambiarImagen-card{
  height: 300px;
  width: 300px;
}
.contenido-card{
  justify-content: center;

}
.botones{
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 90px;
}

.btn-cancelar{
  background-color: rgb(255, 106, 106);
  color: white;
  width: 100px;    
  transition: transform 0.2s ease; /* Transición suave */

}
.btn-cancelar:hover{
  transform: translateY(4px); /* Desplazamiento hacia arriba al pasar el ratón */
}

.btn-aceptar{
  background-color: rgb(94, 146, 94);
  color: white;
  width: 100px;
  transition: transform 0.2s ease; /* Transición suave */
}
.btn-aceptar:hover{
  transform: translateY(4px);
}
.btn-home{
  width: 100vw;
  margin-top: 340px;
}
</style>
