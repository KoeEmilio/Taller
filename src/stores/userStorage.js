// src/stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    usuario: null,
    token: null,
  }),
  actions: {
    setUsuario(usuario) {
      this.usuario = usuario;
    },
    setToken(token) {
      this.token = token;
    },
    logout() {
      this.usuario = null;
      this.token = null;
    }
},
  persist: true, // Esto permite que el estado persista en localStorage
});
