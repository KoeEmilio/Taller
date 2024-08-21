<script setup>
import { useUsuarioStore } from '@/stores/UsuarioStore';

const UsuarioStore = useUsuarioStore();


const cerrarSession = () => {
  UsuarioStore.closeSession();
  router.push('/Login');
}

</script>

<template>
    
    <div class="Contenedor">
        <img src="@/img/FBIOPENUP.jpg" alt="">
    </div> 
    
</template>

<style>
img{
    width: 100%;
    height: auto;
    object-fit: cover;
    
}
</style>