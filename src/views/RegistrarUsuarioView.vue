<script setup>
import { computed, ref } from 'vue';

const Nombre = ref('');
const Direccion = ref('');
const Telefono = ref();
const Correo = ref('');
const RFC = ref('');
const Num_Seguro_Social = ref();
const CURP = ref('');

const puestoPersona = ref('');
const esCliente = computed(() => puestoPersona.value === 'cliente');
const esEmpleado = computed(() => puestoPersona.value === 'empleado');

const Tipo_Cliente = ref('');
const Nombre_empresa = ref('');
const Usuario = ref('');
const Contrasena = ref('');

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const valid = ref(false);
const form = ref(null);

const handleSubmit = async () => {
  if (valid.value) {
    if (esEmpleado.value) {
      await submitEmpleado();
    } else if (esCliente.value) {
      await submitCliente();
    }
  }
};

const submitEmpleado = async () => {
  const data = {
    Nombre: Nombre.value,
    Direccion: Direccion.value,
    Telefono: Telefono.value,
    Correo: Correo.value,
    Usuario: Usuario.value,
    Contrasena: Contrasena.value,
    RFC: RFC.value,
    Num_Seguro_Social: Num_Seguro_Social.value,
    CURP: CURP.value,
  };

  try {
    const response = await fetch('http://testpdocrudo.com/registrousuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseText = await response.text();
    console.log('Respuesta del servidor:', responseText);

    try {
      const responseData = JSON.parse(responseText);
      if (response.ok) {
        console.log('Usuario registrado exitosamente', responseData);
      } else {
        console.error('Error al registrar el usuario:', responseData);
      }
    } catch (error) {
      console.error('Error al analizar la respuesta como JSON:', error);
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};

const submitCliente = async () => {
  const data = {
    Nombre: Nombre.value,
    Direccion: Direccion.value,
    Telefono: Telefono.value,
    Correo: Correo.value,
    Usuario: Usuario.value,
    Contrasena: Contrasena.value,
    Tipo_Cliente: Tipo_Cliente.value,
    Nombre_empresa: Nombre_empresa.value,
  };

  try {
    const response = await fetch('http://testpdocrudo.com/registrousuarioC', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseText = await response.text();
    console.log('Respuesta del servidor:', responseText);

    try {
      const responseData = JSON.parse(responseText);
      if (response.ok) {
        console.log('Usuario registrado exitosamente', responseData);
      } else {
        console.error('Error al registrar el usuario:', responseData);
      }
    } catch (error) {
      console.error('Error al analizar la respuesta como JSON:', error);
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
};
</script>

<template>
  <v-app style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
    <VAppBar app color="#1a1a1a" dark>
      <router-link to="/MenuPrincipal">
        <v-btn color="white" icon="mdi-arrow-left-bold-circle-outline"></v-btn>
      </router-link>
      <h1 class="text-center w-100">REGISTRAR USUARIO</h1>
    </VAppBar>

    <div class="container">
      <div class="Card">
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid">
              
              <v-radio-group v-model="puestoPersona" row>
                <v-radio label="Cliente" value="cliente"></v-radio>
                <v-radio label="Empleado" value="empleado"></v-radio>
              </v-radio-group>

              <v-text-field
                v-model="Nombre"
                :rules="[v => !!v || 'Dirección es requerida']"
                label="Nombre"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="Direccion"
                :rules="[v => !!v || 'Dirección es requerida']"
                label="Dirección"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="Telefono"
                :rules="[v => !!v || 'Número de teléfono es requerido', v => /^\d+$/.test(v) || 'Solo se aceptan números', v => /^\d{10}$/.test(v) || 'El número de teléfono debe tener 10 dígitos',]"
                label="Teléfono"
                variant="solo"
                required
              ></v-text-field>

              <v-text-field
                v-model="Correo"
                :rules="[v => !!v || 'Correo electrónico es requerido', v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido']"
                label="Correo Electrónico"
                variant="solo"
                required
              ></v-text-field>

              <v-row>
                <v-col>
                  <v-card-subtitle>Usuario</v-card-subtitle>
                  <v-text-field
                    variant="solo"
                    v-model="Usuario"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-card-subtitle>Contraseña</v-card-subtitle>
                  <v-text-field
                    variant="solo"
                    v-model="Contrasena"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="togglePasswordVisibility"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-form v-if="esEmpleado" ref="form" v-model="valid">
                <v-text-field
                  v-model="RFC"
                  :rules="[v => !!v || 'RFC es requerido']"
                  label="RFC"
                  variant="solo"
                ></v-text-field>

                <v-text-field
                  v-model="Num_Seguro_Social"
                  :rules="[v => !!v || 'Número de seguro social es requerido', v => /^\d{11}$/.test(v) || 'El número de seguro social debe tener 11 dígitos']"
                  label="Número de seguro social"
                  variant="solo"
                ></v-text-field>

                <v-text-field
                  v-model="CURP"
                  :rules="[v => !!v || 'CURP es requerida', v => v.length === 18 || 'CURP debe tener 18 caracteres', v => /^[A-Z0-9]{18}$/.test(v) || 'La CURP debe tener exactamente 18 caracteres y solo contener letras y números']"
                  label="CURP"
                  variant="solo"
                ></v-text-field>
              </v-form>  

              <v-form v-if="esCliente" ref="form" v-model="valid">
                <v-select
                  v-model="Tipo_Cliente"
                  :items="['Físico', 'Moral']"
                  label="Tipo de Cliente"
                  :rules="[v => !!v || 'Tipo de Cliente es requerido']"
                  variant="solo"
                ></v-select>

                <v-text-field
                  v-if="Tipo_Cliente === 'Moral'"
                  v-model="Nombre_empresa"
                  :rules="[v => !!v || 'Nombre de la empresa es requerido']"
                  label="Nombre de la empresa"
                  variant="solo"
                ></v-text-field>
              </v-form>

              <v-btn 
                id="btn-registrar" 
                :disabled="!valid" 
                color="#1a1a1a" 
                @click="handleSubmit"
              >
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: gray;
  padding: 20px;
  box-sizing: border-box;
}

.Card {
  width: 80%;
  max-width: 800px;
  background-color: rgb(223, 223, 223);
  margin-top: 16px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

#titulo {
  background-color: #1a1a1a;
  color: white;
  text-align: center;
}

#btn-registrar {
  transition: transform 0.2s ease;
  margin-top: 20px;
  width: 100%;
}

#btn-registrar:hover {
  transform: translateY(4px);
}
</style>
