<script setup>
import { computed, ref } from 'vue';


const Nombre = ref('');
const Direccion = ref('');
const Telefono = ref()
const Correo = ref('')
const RFC = ref('')
const Num_Seguro_Social = ref()
const Curp = ref('')
const puestoPersona = ref('') 
const esCliente = computed(() => puestoPersona.value === 'cliente')
const esEmpleado = computed(()=> puestoPersona.value === 'empleado')

const Tipo_Cliente = ref('')
const Nombre_empresa = ref('')

const tipoCliente = ref('');
const nombreEmpresa = ref('');

// Valor del campo de contraseña
const Usuario = ref('')
const Contrasena = ref('');

// Controla si la contraseña debe ser visible o no
const showPassword = ref(false);

// Función para alternar la visibilidad de la contraseña
const togglePasswordVisibility = () => {
  // Cambia el valor de 'showPassword' entre verdadero y falso
showPassword.value = !showPassword.value;
  showPassword.value = !showPassword.value;
};

const valid = ref(false);
const form = ref(null);

const submit = async () => {
if (valid.value) {
    const data = {
    Nombre: Nombre.value,
    Direccion: Direccion.value,
    Telefono: Telefono.value,
    Correo: Correo.value,
    RFC: RFC.value,
    Num_Seguro_Social: Num_Seguro_Social.value,
    CURP: CURP.value,
    Tipo_Cliente: Tipo_Cliente.value,
    Nombre_empresa: Nombre_empresa.value,
    };

    try {
    const response = await fetch('http://testpdo.com/registrovehiculos', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

      const responseText = await response.text(); // Obtener la respuesta como texto
    console.log('Respuesta del servidor:', responseText);

    try {
        const responseData = JSON.parse(responseText); // Intentar analizar como JSON
        if (response.ok) {
        console.log('Vehículo registrado exitosamente', responseData);
        } else {
        console.error('Error al registrar el vehículo:', responseData);
        }
    } catch (error) {
        console.error('Error al analizar la respuesta como JSON:', error);
    }
    } catch (error) {
    console.error('Error de red:', error);
    }
}
};

</script>

<template>
  <v-app>
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
                    <v-form  ref="form" v-model="valid">
                            <v-text-field
                                v-model="Nombre"
                                :rules="[v => !!v || 'Nombre es requerido']"
                                label="Nombre Completo"
                                variant="solo"
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
                                :rules="[v => !!v || 'Número de teléfono es requerido', v => /^\d+$/.test(v) || 'Solo se aceptan números', v => /^\d{10}$/.test(v) || 'El número de telefono debe tener 10 dígitos',]"
                                label="Telefono"
                                variant="solo"
                                required
                            ></v-text-field>

                            <v-text-field
                                v-model="Correo"
                                :rules="[v => !!v || 'Correo electronico es requerido', v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido']"
                                label="Correo Electronico"
                                variant="solo"
                                required
                            ></v-text-field>
                            

                            <br>
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
                            <br>

              <v-text-field
                v-model="correo"
                :rules="[v => !!v || 'Correo electronico es requerido', v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido']"
                label="Correo Electronico"
                variant="solo"
                required
              ></v-text-field>

                        <v-form v-if = "esEmpleado === true"  ref="form" v-model="valid">
                            <v-text-field
                                v-model="RFC"
                                :rules="[v => !!v || 'RFC es requerido']"
                                label="RFC"
                                variant="solo"
                            ></v-text-field>

                            <v-text-field
                                v-model="Num_Seguro_Social"
                                :rules="[v => !!v || 'Número de seguro social es requerido', v => /^\d{11}$/.test(v) || 'El número de seguro social debe tener 11 dígitos']"
                                label="Número de seguro social "
                                variant="solo"
                            ></v-text-field>

                            <v-text-field
                                v-model="Curp"
                                :rules="[ v => !!v || 'CURP es requerida',  v => v.length === 18 || 'CURP debe tener 18 caracteres',v => /^[A-Z0-9]{18}$/.test(v) || 'La CURP debe tener exactamente 18 caracteres y solo contener letras y números']"
                                label="CURP"
                                variant="solo"
                            ></v-text-field>

                    
                        </v-form>  
                        <v-form v-if = "esCliente === true"  ref="form" v-model="valid">
                                <v-select
                                    v-model="Tipo_Cliente"
                                    :items="['Físico', 'Moral']"
                                    label="Tipo de Cliente"
                                    :rules="[v => !!v || 'Tipo de Cliente es requerido']"
                                    variant="solo"
                                ></v-select>

                                <v-text-field
                                v-if="tipoCliente === 'Moral'"
                                v-model="Nombre_empresa"
                                :rules="[v => !!v || 'Nombre de la empresa es requerido']"
                                label="Nombre de la empresa"
                                variant="solo"
                                ></v-text-field>
                        </v-form>
                        
                        <v-btn id="btn-registrar" :disabled="!valid" color="#1a1a1a" @click="submit">
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
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  background-color: gray;
}

.Card {
  height: auto;
  width: 80vw;
  background-color: rgb(223, 223, 223);
  margin-top: 16px;
}

#titulo {
  background-color: #1a1a1a;
  color: white;
  box-shadow: -1px 2px 6px black;
  text-align: center;
}

.separador-datos-persona {
  display: flex;
}
#btn-registrar {
  transition: transform 0.2s ease;
}
#btn-registrar:hover {
  transform: translateY(4px);
}
</style>
