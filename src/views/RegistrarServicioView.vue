<script setup>
import { ref } from 'vue';

const servicio = ref('');
const Tipo_Servicio = ref('');
const Descripcion = ref('');
const costo_del_servicio = ref();
const garantia = ref('')

</script>

<template>
  <v-app>  
    <VAppBar app color="#1a1a1a" dark>
      <router-link to="/Vehiculos">
        <v-btn color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="titulo-vehiculos text-center w-100">REGISTRAR SERVICIO</h1>
    </VAppBar>

    <div class="container">
      <div class="Card">
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid">
                <v-col>
                    <v-row>
                        <v-col>
                        <v-text-field
                            v-model="servicio"
                            :rules="[v => !!v || 'Servicio es requerido']"
                            label="Servicio"
                            variant="solo"
                        ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-select
                                v-model="Tipo_Servicio"
                                label="Tipo de servicio"
                                variant="solo"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            v-model="Descripcion"
                            :rules="[v => !!v || 'Descripcion es requerido']"
                            label="Descripcion del servicio"
                            variant="solo"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col> 
                            <v-text-field
                            v-model="costo_del_servicio"
                            :rules="[v => !!v || 'Costo es requerido']"
                            label="Costo del servicio"
                            variant="solo"
                            ></v-text-field>                            
                        </v-col>
                        <v-col>
                            <v-text-field
                            v-model="garantia"
                            :rules="[v => !!v || 'Garantía es requerido']"
                            label="Garantia"
                            variant="solo"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    
                </v-col>
                <v-btn id="btn-registrar"  color="#1a1a1a" @click="submit">
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
  margin-top: 50px; /* Ajustar según la altura del VAppBar */
  background-color: gray;
}

.Card {
  height: 85vh;
  width: 80vw;
  background-color: rgb(223, 223, 223);
}

#btn-registrar{
  transition: transform 0.2s ease; /* Transición suave */
  margin-top: 100px;
}

#btn-registrar:hover{
  transform: translateY(4px); /* Desplazamiento hacia arriba al pasar el ratón */
}

.propietario {
  margin-top: 16px;
  background-color: white;
  height: 60px;
  border: black .5px solid;
  align-content: center;
}

.propietario text{
  padding-left: 10px;
}

.opcion{
  background-color: gray;
  border: black 1px solid;
}

.titulo-vehiculos{
  font-size: 20px;
  padding-right: 40px;
}

@media (min-width: 768px) {
  .titulo-vehiculos{
  font-size: 40px;
  align-items: center;
}
}
</style>
