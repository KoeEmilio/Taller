<script setup>
</script>
<template>
    <div class="container-principal">
        <v-card class="first-card">

        </v-card>
    </div>
</template>
<style>
.container-principal{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 100vh;
}
.first-card{
    grid-column: 2;
    width: 56vw;
    height: 100vh;
    overflow-y: auto;
}

</style>