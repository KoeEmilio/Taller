<script setup>
import { ref } from 'vue';
import video from '@/video/pixel_red.mp4'

const name = ref('');
const email = ref('');
const telefono = ref('');
const valid = ref(false);
const form = ref(null);
const Tipo = ref(''); // Nuevo campo para tipo de cliente

const submit = () => {
  if (form.value.validate()) {
    alert('Registro exitoso');
  }
};
</script>

<template>

<v-app>
    <video autoplay muted loop id="fondo-video" :src="video"></video>
  
  <div class="container">
    <v-card class="Card">
      <v-card-title id="titulo" >Registrar Cliente</v-card-title>
      
        <v-card-text>
          <v-container>
            <v-form id="interior-card" ref="form" v-model="valid">
              
              <v-text-field
                v-model="name"
                :rules="[v => !!v || 'Nombre es requerido']"
                label="Nombre Completo"
                variant="solo"
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="[v => !!v || 'Correo es requerido', v => /.+@.+\..+/.test(v) || 'Correo debe ser válido']"
                label="Correo"
                variant="solo"
                required
                type="email"
              ></v-text-field>
              
              <v-text-field
                      v-model="telefono"
                      :rules="[v => !!v || 'Número de teléfono es requerido', v => /^\d{10}$/.test(v) || 'El número de telefono debe tener 10 dígitos']"
                      label="Telefono"
                      variant="solo"
                      required
                    ></v-text-field>

            <v-radio-group v-model="Tipo" :rules="[v => !!v || 'Tipo de cliente es requerido']" label="Tipo de Cliente" required>
              <v-radio label="Físico" value="fisico"></v-radio>
              <v-radio label="Moral" value="moral"></v-radio>
            </v-radio-group>

              
              <v-btn :disabled="!valid" color="#7d0100" @click="submit">
                Registrar
              </v-btn>
            </v-form>
      
          </v-container>
        </v-card-text>
    </v-card>
  </div>
</v-app>
</template>

<style scoped>

.container{
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
}

.Card{
height: 80vh;
width: 60vw;
background-color:rgb(223, 223, 223) ;
overflow-y: auto;

}

#titulo{
background-color: rgb(230, 1, 1);
color: white;
box-shadow: -1px 2px 6px black;
text-align: center;
}

.separador-datos-persona{
display: flex;
}

#fondo-video{
position: fixed;
width: 100%;
height: 100%;
top: 0%;
left: 0%;
object-fit: cover;
}
</style>
