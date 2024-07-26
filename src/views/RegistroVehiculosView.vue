<template>
    <div>
    <nav class="navegacion">
        <h1>REGISTRO DE VEHICULOS</h1>
    </nav>
<div class="contenedor">
            <div class="contenedor-secundario">

                                <div class="formulario">
                                    <v-card >
                                            <v-text-field label="Marca" v-model="marca"></v-text-field>
                                            <v-text-field label="Modelo" v-model="modelo"></v-text-field>
                                            <v-text-field label="Color"  v-model="color"></v-text-field>
                                            <v-text-field label="Matricula"  v-model="vehiculo"></v-text-field>
                                            <v-select label="Propietario" :items="clientes" v-model="propietario"></v-select>
                                            <v-select label="Tipo de Transmision" :items="transmision" v-model="transmision"></v-select>
                                            <v-btn class="btn" @click="registrarOrden">Registrar</v-btn>
                                    </v-card>
                                </div>
                                <div class="imagen">
                                    <img src="@/assets/DE LA ROSA MOTORS.png"  />
                                </div>
            </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    marca: '',
    modelo: '',
    anio: '',
    color: '',
    propietario: '',
    matricula: ''
});

const clientes = ref([
    { id: 1, nombre: 'Cliente 1' },
    { id: 2, nombre: 'Cliente 2' },
    { id: 3, nombre: 'Cliente 3' },
    // Agrega más clientes según sea necesario
]);

const submitForm = () => {
    console.log(form.value);
    // Aquí puedes agregar la lógica para enviar el formulario
};
</script>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navegacion {
    background-color: #800000;
    color: white;
    text-align: center;
    padding: 15px;
    margin: 0;
}

.contenedor{
    display: flex;
    max-width: 100vw;
    max-height: 100vh;
    justify-content: center;
}

.contenedor-secundario{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 20px;
    margin: 20px;
    background-color: #f9f9f9;
}

.formulario {
    display: flex;
    flex-direction: column;
    width: 400px;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}



.btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #800000;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn:hover {
    background-color: #a00000;
}

.imagen {
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 50px;
}

.imagen img {
    width: 600px;
    height: 400px;

}
</style>