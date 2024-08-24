  import { ref } from 'vue'
  import { defineStore } from 'pinia'

  export const useProfileStore = defineStore('profile', () => {
    const title = ref('')
    const profileImage = ref('') 


    
    const initialize = () => {
      const storedImage = localStorage.getItem('profileImage');
      if (storedImage) {
        profileImage.value = storedImage;
      }
    };
    
    
    initialize();

    function setTitle(newTitle) {
      title.value = newTitle
    }


    function setImagenPerfil(newImage) {
      profileImage.value = newImage; 
      localStorage.setItem('profileImage', newImage) 
    }

    return { title, setTitle,profileImage,setImagenPerfil }
  })