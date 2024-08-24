<script setup>
import { useClientesStore } from '@/stores/clientesStore';
import { useProfileStore } from '@/stores/counter';
import { useUsuarioStore } from '@/stores/UsuarioStore';


import { computed, ref} from 'vue';
import { RouterLink } from 'vue-router';

const store = useProfileStore()
const UsuarioStore = useUsuarioStore()
const ClientesStore = useClientesStore()
const datosPerfil = ref([])


const loadPerfil = async () => {
    const local = JSON.parse(localStorage.getItem('clienteLogueado'));
try {
    if (local.UsuarioID) {
    await ClientesStore.fetchPerfil();
    datosPerfil.value = ClientesStore.perfil;
    console.log(datosPerfil.value);
    } else {
    console.log('Cliente no está logueado o no tiene ID');
    }
} catch (error) {
    console.error('Error al cargar el perfil:', error);

    datosPerfil.value = []; 
}
};



const cerrarSession = () => {
  UsuarioStore.closeSession();
  router.push('/Login');
}


const drawer = ref(true);
const rail = ref(true);



const imagenUrl = computed(() => store.profileImage);
const tempImagen = ref(imagenUrl.value)
const dialog = ref(false)

const dialogg = ref(false)

const mostrarDialog = () => {
  if (dialogg.value === false) {
    dialogg.value=true
  }
  else {
    dialogg.value=false
  }
}

const openDialog = () => {
  tempImagen.value = imagenUrl.value  
  dialog.value = true
}

const closeDialog = () => {
  dialog.value = false
}

const updateImage = () => {
  store.setImagenPerfil(tempImagen.value); 
  closeDialog();
};

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


const handleCloseDialog = () => {
  tempImagen.value = imagenUrl.value;
  closeDialog();
};



const fileInput = ref(null)

const triggerFileInput = () => {
  fileInput.value.click();
};


const selectedDate = ref(new Date().toISOString().substr(0, 10));


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

          <router-link to="/VistaCliente/MisCitas">
            <v-list-item prepend-icon="mdi-calendar" title="Mis citas" value="appointment"></v-list-item>
          </router-link>

            <v-list-item @click="mostrarDialog" prepend-icon="mdi-calendar-clock" title="Agendar cita" value=""></v-list-item>

        </v-list>
        <v-list class="btn-home" density="compact" nav>
          <router-link to="/">
            <v-list-item prepend-icon="mdi-logout" title="Cerrar Sesion" value="home" @click="cerrarSession"></v-list-item>
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
                <v-btn class="btn-cancelar" @click="handleCloseDialog">Cancelar</v-btn>
              </div>
              <div>
                <v-btn class="btn-aceptar" @click="updateImage">Aceptar</v-btn>
              </div>
            </div>
              
        </v-card>
    </v-row>
     
    </v-dialog>
    <v-dialog v-model="dialogg" max-width="800px" >
      <v-card class="card-dialog">
         <v-col>
          <v-row class="contenedor-formularios">
            <h2>Agenda tu cita</h2>
          </v-row>
          <v-row class="contenedor-formularios">
            <v-text-field 
                class="formCita"
                label="Fecha" 
                type="date" 
                v-model="selectedDate"
                :min="new Date().toISOString().substr(0, 10)"
                required>
            </v-text-field>
          </v-row>
          <v-row class="contenedor-formularios">
            <v-select 
            class="formCita"
            label="Selecciona un horario"
            ></v-select>
          </v-row>
          <v-row class="contenedor-btn">
            <v-btn class="boton">Agendar</v-btn>
            
          </v-row>
        </v-col>
        
      </v-card>
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
  background-color: rgb(216, 216, 216);
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
  transition: transform 0.2s ease; 

}
.btn-cancelar:hover{
  transform: translateY(4px); 
}

.btn-aceptar{
  background-color: rgb(94, 146, 94);
  color: white;
  width: 100px;
  transition: transform 0.2s ease; 
}
.btn-aceptar:hover{
  transform: translateY(4px);
}
.btn-home{
  width: 100vw;
  margin-top: 340px;
}
.formCita{
  max-width: 600px;
  margin-top: 10px;
}
.card-dialog{
  height: 300px;
}
.contenedor-formularios{
  justify-content: center;
}
.contenedor-btn{
  margin-left: 90px;
}
.boton{
  width: 100px;
  margin-top: 20px;
  background-color:rgb(220, 224, 245);
}

</style>
