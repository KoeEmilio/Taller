<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const noOrden = ref('');
const fechaEntrega = ref('');
const servicioProporcionado = ref('');
const costoManoObra = ref('');
const diasGarantia = ref('');
const mensaje = ref('');

const validarFormulario = () => {
    if (
        noOrden.value &&
        fechaEntrega.value &&
        servicioProporcionado.value &&
        costoManoObra.value &&
        diasGarantia.value
    ) {
        return true;
    }
    return false;
};

const registrarOrden = () => {
    if (validarFormulario()) {
        // Simulación de registro exitoso
        mensaje.value = 'Registro exitoso';
        // Lógica para guardar la nueva orden, puede ser un POST a una API
        console.log('Nueva Orden Registrada:', {
            noOrden: noOrden.value,
            fechaEntrega: fechaEntrega.value,
            servicioProporcionado: servicioProporcionado.value,
            costoManoObra: costoManoObra.value,
            diasGarantia: diasGarantia.value,
        });
    } else {
        mensaje.value = 'Algo salió mal con el registro, inténtalo de nuevo y asegúrate de ingresar cada dato correctamente';
    }
};

const retroceder = () => {
    router.back();
};
</script>

<template>
<div class="container">
    <v-app>
        <div class="barra-superior">
            <v-btn icon @click="retroceder" class="boton-retroceder">
                <v-icon color="white">mdi-arrow-left</v-icon>
            </v-btn>
        </div>
        <v-main>
            <v-container>
                <v-card class="pa-5">
                    <v-card-title>Detalles de la Orden</v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field class="custom-field" label="No. Orden" v-model="noOrden" color="black" required></v-text-field>
                            <v-text-field class="custom-field" label="Fecha de Entrega" v-model="fechaEntrega" type="date" color="black" required></v-text-field>
                            <v-text-field class="custom-field" label="Servicio Proporcionado" v-model="servicioProporcionado" color="black" required></v-text-field>
                            <v-text-field class="custom-field" label="Costo de la Mano de Obra" v-model="costoManoObra" type="number" color="black" required></v-text-field>
                            <v-text-field class="custom-field" label="Días de Garantía" v-model="diasGarantia" type="number" color="black" required></v-text-field>
                            <v-btn class="BtnGuindo" @click="registrarOrden">Guardar Detalles</v-btn>
                        </v-form>
                        <p>{{ mensaje }}</p>
                    </v-card-text>
                </v-card>  
            </v-container>
        </v-main>
    </v-app>
</div>
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.barra-superior {
    width: 100%;
    height: 2cm;
    background-color: red;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.boton-retroceder {
    position: absolute;
    top: 5px;
    left: 5px;
}

.v-card {
    width: 60%;
    margin-top: 3cm;
}

.custom-field {
    background-color: white;
    color: black;
    margin-bottom: 20px;
}


.v-card-title {
    color: black;
    font-weight: bold;
}
</style>
