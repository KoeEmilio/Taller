<script setup>
import { onMounted, ref } from 'vue';
import { useProfileStore } from '@/stores/counter';

const store = useProfileStore();
const datos = ref([]);

const showDetails = () => {
    fetch(`http://testpdocrudo.com/misordenes?userId=${store.userId}`)
    .then(response => response.json())
    .then(json => {
        if (json.status === 200) {
            datos.value = json.data;
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
    });
}

onMounted(() => {
    showDetails();
});
</script>

<template>
  <div class="container">
    <v-card class="data-table-card">
      <v-card-title id="card-title">Mis Órdenes</v-card-title>
      <v-data-table
        :headers="headers"
        :items="datos"
        :search="search"
        class="elevation-1"
      >
      </v-data-table>
    </v-card>
  </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.card{
    grid-column: 2;
    width: 56vw;
    height: 100vh;
    overflow-y: auto;
}

#card-title {
    text-align: start;  
    font-size: xx-large;
    margin-bottom: 20px;
}
</style>
