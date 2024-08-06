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

const submit = async () => {
  if (form.value.validate()) {
    const datosregistro = {
      Nombre: name.value,
      Direccion: address.value,
      Telefono: numberPhone.value, 
      RFC: rfc.value,
      Num_Seguro_Social: socialSecurityNumber.value,
      CURP: curp.value,
      correo: email.value,
      Fecha_Ingreso: new Date().toISOString().slice(0, 10), // Fecha actual
      Estado: 'LIBRE'
    };

    try {
      const response = await fetch('http://testpdo.com/empleado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosregistro)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Empleado registrado:', data);
        alert('Registro exitoso');
      } else {
        console.error('Error al registrar empleado');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
  }
};
</script>


<template>
      

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
                      :rules="[v => !!v || 'Número de teléfono es requerido', v => /^\d{10}$/.test(v) || 'El número de telefono debe tener 10 dígitos']"
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
                    :rules="[v => !!v || 'CURP es requerido']"
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
  background-color: #1a1a1a;
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
  top: 0;
  left: 0;
  object-fit: cover;
}
</style>
