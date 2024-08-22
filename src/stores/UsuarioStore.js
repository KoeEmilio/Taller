import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUsuarioStore = defineStore('UsuarioStore', () => {
    const usuario = ref({ usuario: null, _token: null, rol: null });

    function closeSession() {
        window.localStorage.clear();
        usuario.value = { usuario: null, _token: null, rol: null };
    }

    function setUser(user) {
        window.localStorage.clear();
        usuario.value = { ...usuario.value, ...user };
    }

    function setToken(token) {
        usuario.value._token = token;
    }

    return { usuario, closeSession, setUser, setToken };
}, { persist: true });