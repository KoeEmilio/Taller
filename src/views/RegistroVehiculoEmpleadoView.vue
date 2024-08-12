<script setup>
import { computed, ref, onMounted } from 'vue';

const marca = ref('');
const modelo = ref('');
const ano = ref('');
const color = ref('');
const tipoTransmision = ref('');
const numeroMatricula = ref('');
const propietario = ref('');

const tipoAutoEmpresarial = ref('');
const numeroUnidad = ref('');

const propietarios = ref([]);

const esMoral = computed(() => {
  const selectedPropietario = propietarios.value.find(p => p.id === propietario.value);
  return selectedPropietario ? selectedPropietario.tipo === 'moral' : false;
});

const valid = ref(false);
const form = ref(null);

const submit = () => {
  if (form.value.validate()) {
    alert('Registro exitoso');
    // Aquí puedes agregar la lógica para enviar los datos al servidor
  }
};

const fetchPropietarios = async () => {
  try {
    const response = await fetch('/api/propietarios'); // Ajusta la URL según tu API
    if (!response.ok) {
      throw new Error('Error fetching propietarios');
    }
    const data = await response.json();
    propietarios.value = data;
  } catch (error) {
    console.error('Error fetching propietarios:', error);
  }
};

onMounted(() => {
  fetchPropietarios();
});
</script>

<template>

<v-app>  
    <VAppBar app color="#1a1a1a" dark>
        <router-link to="/MenuEmpleados">
            <v-btn
                color="white"
                icon="mdi-arrow-left-bold-circle-outline"
            ></v-btn>
        </router-link>
        <h1 class="text-center w-100">REGISTRAR VEHÍCULO</h1>
    </VAppBar>

    <div class="container">
        <div class="Card">
            <v-card-text>
                <v-container>
                    <v-form ref="form" v-model="valid">
                        <v-text-field
                            v-model="marca"
                            :rules="[v => !!v || 'Marca es requerida']"
                            label="Marca"
                            variant="solo"
                        ></v-text-field>

                        <v-text-field
                            v-model="modelo"
                            :rules="[v => !!v || 'Modelo es requerido']"
                            label="Modelo"
                            variant="solo"
                        ></v-text-field>

                        <v-text-field
                            v-model="ano"
                            :rules="[v => !!v || 'Año es requerido', v => /^\d{4}$/.test(v) || 'Año debe ser un número de 4 dígitos']"
                            label="Año"
                            variant="solo"
                        ></v-text-field>

                        <v-text-field
                            v-model="color"
                            :rules="[v => !!v || 'Color es requerido']"
                            label="Color"
                            variant="solo"
                        ></v-text-field>

                        <v-select
                            v-model="tipoTransmision"
                            :items="['Manual', 'Automática']"
                            label="Tipo de Transmisión"
                            :rules="[v => !!v || 'Tipo de Transmisión es requerido']"
                            variant="solo"
                        ></v-select>

                        <v-text-field
                            v-model="numeroMatricula"
                            :rules="[v => !!v || 'Número de Matrícula es requerido']"
                            label="Número de Matrícula"
                            variant="solo"
                        ></v-text-field>

                        <v-select
                            v-model="propietario"
                            :items="propietarios"
                            item-text="nombre"
                            item-value="id"
                            label="Propietario"
                            :rules="[v => !!v || 'Propietario es requerido']"
                            variant="solo"
                        ></v-select>

                        <v-form v-if="esMoral === true" ref="form" v-model="valid">
                            <v-select
                                v-model="tipoAutoEmpresarial"
                                :items="['Camión', 'Camioneta', 'Automóvil']"
                                label="Tipo de Auto Empresarial"
                                :rules="[v => !!v || 'Tipo de Auto Empresarial es requerido']"
                                variant="solo"
                            ></v-select>

                            <v-text-field
                                v-model="numeroUnidad"
                                :rules="[v => !!v || 'Número de Unidad es requerido', v => /^\d+$/.test(v) || 'Solo se aceptan números']"
                                label="Número de Unidad"
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
  margin-top: 60px; /* Ajustar según la altura del VAppBar */
  background-color: gray;
}

.Card {
  height: auto;
  width: 80vw;
  background-color: rgb(223, 223, 223);
  margin-top: 16px;
}

#btn-registrar{
  transition: transform 0.2s ease; /* Transición suave */
}

#btn-registrar:hover{
  transform: translateY(4px); /* Desplazamiento hacia arriba al pasar el ratón */
}
</style>
