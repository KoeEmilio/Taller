import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
  const title = ref('')
  const profileImage = ref('') // Aquí se almacenará la URL de la imagen


  // Cargar la imagen desde Local Storage al iniciar
   const initialize = () => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      profileImage.value = storedImage;
    }
   };
  
   // Ejecuta la inicialización del store
  initialize();

  function setTitle(newTitle) {
    title.value = newTitle
  }


  function setImagenPerfil(newImage) {
    profileImage.value = newImage; // Actualizar el estado del store
    localStorage.setItem('profileImage', newImage) // Guardar en Local Storage
  }

  return { title, setTitle,profileImage,setImagenPerfil }
})