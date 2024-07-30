<script setup>
import { ref } from 'vue';
import video from '@/video/pixel_red.mp4'

const name = ref('');
const numberPhone = ref();
const address = ref('')

const rfc = ref('');
const socialSecurityNumber = ref('');
const curp = ref('');
const email = ref('');
const valid = ref(false);
const form = ref(null);

const submit = () => {
  if (form.value.validate()) {
    alert('Registro exitoso');
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  }
};

const toUpperCase = (event) =>{
  event.target.value = event.target.value.toUpperCase();
}

</script>

<template>
      <video autoplay muted loop id="fondo-video" :src="video"></video>

  <v-app>
      <div class="container">
        <v-card class="Card">
          <v-card-title id="titulo" >Registrar Empleado</v-card-title>
            <v-card-text>
              <v-container>
                <v-form id="interior-card" ref="form" v-model="valid">
                  
                  <v-text-field
                    v-model="name"
                    :rules="[v => !!v || 'Nombre es requerido']"
                    label="Nombre Completo"
                    variant="solo"
                  ></v-text-field>

                  <v-row>
                    <v-col>
                      <v-text-field
                      v-model="address"
                      :rules="[v => !!v || 'Dirección es requerido']"
                      label="Dirección"
                      variant="solo"
                      required
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                      v-model="numberPhone"
                      :rules="[v => !!v || 'Número de teléfono es requerido',v => /^\d+$/.test(v) || 'El número de teléfono solo puede contener números', v => /^\d{10}$/.test(v) || 'El número de telefono debe tener 10 dígitos']"
                      label="Telefono"
                      variant="solo"
                      required
                    ></v-text-field>
                    </v-col>

                  </v-row>
                 
                  <br/>
                  <br/>
                 
                  <v-text-field
                    v-model="rfc"
                    @input="toUpperCase"
                    :rules="[v => !!v || 'RFC es requerido']"
                    label="RFC"
                    variant="solo"
                    required  
                  ></v-text-field>

                  <v-text-field
                    v-model="socialSecurityNumber"
                    :rules="[v => !!v || 'Número de Seguro Social es requerido', v => /^\d{11}$/.test(v) || 'Número de Seguro Social debe tener 11 dígitos']"
                    label="Número de Seguro Social"
                    variant="solo"
                    type="tel"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="curp"
                    @input="toUpperCase"
                    :rules="[v => !!v || 'CURP es requerido', v => /^[A-Z0-9]{18}$/.test(v) || 'La CURP debe tener exactamente 18 caracteres y solo contener letras y números']"
                    label="CURP"
                    variant="solo"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    :rules="[v => !!v || 'Correo es requerido', v => /.+@.+\..+/.test(v) || 'Correo debe ser válido']"
                    label="Correo"
                    variant="solo"
                    required
                    type="email"
                  ></v-text-field>
                  
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
}
</style>
