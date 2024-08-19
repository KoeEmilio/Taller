
export default {
    getUserRole() {
      const token = sessionStorage.getItem('token'); // o localStorage
      if (!token) return null;
  
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.data.rol;
    },
  
    isAuthenticated() {
      return !!sessionStorage.getItem('token'); // o localStorage
    }
  };
  
