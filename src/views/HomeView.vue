<script>
export default {
  data() {
    return {
      showDialog: false,
      selectedDate: null,
      selectedTime: null,
      times: [
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "01:00 PM",
        "01:30 PM",
        "02:00 PM",
        "02:30 PM",
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
        "05:00 PM",
        "05:30 PM"
      ],
    };
  },
  methods: {
    clicklogo() {
      document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
    },
    clickconocenos() {
      document.getElementById('conocenos').scrollIntoView({ behavior: 'smooth' });
    },
    clickcitas() {
      document.getElementById('citas').scrollIntoView({ behavior: 'smooth' });
    },
    clickcontacto() {
      document.getElementById('contactos').scrollIntoView({ behavior: 'smooth' });
    },
    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    submitForm() {
      if (this.selectedDate && this.selectedTime) {
        alert(`Cita agendada para el ${this.selectedDate} a las ${this.selectedTime}`);
        this.closeDialog();
      } else {
        alert("Por favor, completa todos los campos.");
      }
    }
  }
}
</script>

<template>
  <div class="page-container"> 
    <header id="inicio">
      <div class="header__contenedor">
        <div class="contenedor__imagen">
          <v-img id="logo" src="src/img/logo blanco.png" @click="clicklogo"></v-img>
        </div>
        <div class="navegacion">
          <v-btn variant="plain" class="navegacion__letras" @click="clicklogo">Inicio</v-btn>
          <v-btn variant="plain" class="navegacion__letras" @click="clickconocenos">Conocenos</v-btn>
          <v-btn variant="plain" class="navegacion__letras" @click="clickcitas">Citas</v-btn>
          <v-btn variant="plain" class="navegacion__letras" @click="clickcontacto">Contacto</v-btn>
        </div>
        <div class="usuario">
          <a href="#" class="usuario__icon">
            <router-link to="/Login">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </router-link>
          </a> 
        </div>
      </div>

      <div class="somos">
        <h2>EN</h2>
        <h2>DE LA ROSA MOTORS</h2>
        <h2>SOMOS TU MEJOR</h2>
        <h2>OPCIÓN</h2>
      </div>
    </header>

    <main class="contenedor">
      <section class="servicios">
        <div class="servicios__informacion">
          <div class="servicios_informacion_texto">
            <h2 class="informacion-titulo centrar-texto">AQUÍ EN DE LA ROSA MOTORS SOMOS EXPERTOS EN AUTOS.</h2>
            <ul class="servicios_informacion_texto--lista">
              <li>Mecánica en general</li>
              <li>Afineaciones</li>
              <li>Frenos</li>
              <li>Suspensiones</li>
              <li>Transmisiones y direcciones</li>
              <li>Reparación de motores</li>
              <li>Clutch</li>
              <li>Distribución</li>
              <li>Fuel injection</li>
              <li>Servicio de escáner</li>
              <li>Restauración de motores</li>
            </ul>
          </div>
          <div class="informacion__imagen">
            <img src="@/img/image.png" alt="informacion-imagen">
          </div>
        </div>
      </section>

      <section id="conocenos">
        <div class="contenedor-conocenos">
          <h1 class="centrar-texto">CONOCE UN POCO DE NUESTRA HISTORIA...</h1>
          <p class="texto-principal centrar-texto">
            La historia comienza en 1978 con un joven Manuel De La Rosa...
          </p>
        </div>
        <div class="contenedor__imagenes_taller">
          <img class="imagen_taller" src="@/img/taller1.jpeg" alt="">
          <img class="imagen_taller" src="@/img/taller2.jpeg" alt="">
          <img class="imagen_taller" src="@/img/taller3.jpeg" alt="">
        </div>
      </section>

      <section id="citas">
        <div class="cita__contenedor">
          <div class="cita__contenedor--texto">
            <h1 class="titulo-cita centrar-texto">Agenda Tu Cita</h1>
            <p class="centrar-texto">Agenda una cita con Nosotros</p>
            <p class="centrar-texto">Tenemos estos Horarios Disponibles:</p>
            <p class="centrar-texto">De 3 p.m a 5 p.m</p>
            <div class="contenedor-boton">
              <v-btn class="boton-agendar" @click="openDialog">Agendar Cita</v-btn>
            </div>
            <p class="informacion-cita">Para poder hacer una cita tienes que tener un perfil creado en la página. Si necesitas más información por favor contáctanos.</p>
          </div>
          <div class="contenedor__imagen--cita">
            <img src="@/img/car-parts-repair-garage.jpg" alt="">
          </div>
        </div>
      </section>

      <section id="contactos">
        <h1 class="titulo-c centrar-texto">Contacto</h1>
        <div class="contacto">
          <div class="contacto__informacion">
            <div class="contacto__informacion--texto">
              <p class="contacto-titulo">Dirección</p>
              <p>Tlahuacas 290, Santa María, 27020, Torreón, Coah.</p>
            </div>
            <div class="contacto__informacion--texto">
              <p class="contacto-titulo">Correo Electrónico</p>
              <p>Delarosamotors@gmail.com</p>
            </div>
            <div class="contacto__informacion--texto">
              <p class="contacto-titulo">Teléfonos</p>
              <p>871-896-7175</p>
              <p>871-220-1575</p>
            </div>
            <div class="contacto__informacion--texto">
              <p class="contacto-titulo">Horarios</p>
              <p>Lunes-Viernes: 10:30 AM a 6:00 PM</p>
              <p>Sábado: 10:30 AM a 1:00 PM</p>
            </div>
          </div>
          <div class="contacto__mapa">
            <iframe class="mapa" src="https://www.google.com/maps/embed?pb=..."></iframe>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="contenedor__footer">
        <div class="contenedor__texto">
          <h3 class="texto-footer centrar-texto">CONTACTANOS</h3>
          <h3 class="texto-footer centrar-texto">Telefono: 871-220-1575</h3>
          <h3 class="texto-footer centrar-texto">Correo: Delarosamotors@gmail.com</h3>
        </div>
        <div class="footer-redes">
          <h3 class="titulo-redes">Nuestras Redes Sociales</h3>
          <a href="https://www.facebook.com/profile.php?id=100064141721206" class="contenedor-letras-logo">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
            <p class="letras-redes">FACEBOOK</p>
          </a>
        </div>
        <p class="derechos"> Derechos Reservados 2024 ®</p>
      </div>
    </footer>
  </div>
  
  <!-- Modal de agendar cita -->
  <v-dialog v-model="showDialog" max-width="500px">
    <v-card>
      <v-card-title class="headline">Agendar Cita</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field 
                label="Fecha" 
                type="date" 
                v-model="selectedDate"
                :min="new Date().toISOString().substr(0, 10)"
                required>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="selectedTime"
                :items="times"
                label="Hora"
                required>
              </v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog">Cancelar</v-btn>
        <v-btn color="blue darken-1" text @click="submitForm">Agendar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
 /* Globales */
 main {
  flex: 1;
}
 .page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
 .contenedor{
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
 }
 h1,h2,h3,h4{
    line-height: 1.2;
 }
 ul{
  list-style-type: none;
 }
 img{
    max-width: 100%;
 }
 .no-margin{
    margin: 0;
 }
 .no-padding{
    padding: 0;
 }
 .centrar-texto{
    text-align: center;
 }
 main {
  flex: 1;
  padding-bottom: 60px; /* Espacio para el footer */
}
/* --------------------------------------------------------------------------- */
/* Header */
.contenedor__imagen{
  height: 90px;
  margin:10px;
  cursor: pointer;
}
.contenedor__imagen{
  padding-bottom: 20px;
}
#logo {
  height: 120px;
  width: 100x;
}
@media (min-width: 768px) {
  .contenedor__imagen{
  padding-bottom: 20px;
}
#logo{
  height: 90px;
  margin: 10px;
  width: 50%;
}
}
#inicio{
  background-image: url(@/img/tools-tool-tray-repairing-cars.jpg);
  height: 600px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding-bottom:30px;
}
@media (min-width: 768px) {
  .header{
    background-image: url(@/img/tools-tool-tray-repairing-cars.jpg);
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-bottom:30px;
  }
}
.header__contenedor{
  margin: 0 auto;
  display: grid;
  grid-template-columns:1fr 3fr 1fr;
  width: 100%;
  align-items: center;
  background-color:#1A1A1A;
  position: fixed;
}
.navegacion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
}
@media (min-width:768px) {
  .navegacion {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
  }
}
.navegacion__letras{
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 20px;
  padding: 5px;
  cursor: pointer;
}
.navegacion__letras:hover{
  cursor: pointer;
  background-color: white;
  color: black;
}
.usuario{
  display: grid;
  grid-template-columns: repeat(3,1fr);
}
.usuario__icon:hover{
  cursor: pointer;
}
.usuario__icon{
  max-width:60px;
  grid-column: 3 / 4;
  align-items: center;
  padding-left: 10px;
}
.somos {
  color: white;
  padding-top: 450px;
  font-size: 15px;
  padding-left:30px;
}
@media (min-width: 768px) {
  .somos{
    color: white;
    padding-top: 250px;
    padding-left: 50px;
  }
}

.servicios{
  padding-top:120px;
}
.informacion-titulo{
  font-size: 25px;
  padding-top: 85px;
  padding-bottom: 20px;
}
.servicios__informacion{
  background-color: #1A1A1A;
  color: white;
  gap: 20px;
  padding-bottom: 120px;
  padding-left: 20px;
}
@media (min-width: 768px) {
  .servicios__informacion{
    background-color: #1A1A1A;
    color: white;
    display: grid;
    font-size: 20px;
    padding-left: 30px;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;
    padding-bottom: 120px;
  }
}
.servicios_informacion_texto--lista{
  padding-left: 20px;
  padding-top:10px; 
  font-size: 20px;
}
.informacion__imagen{
  align-items: center;
  margin: 20px;
}
@media (min-width: 768px) {
  .informacion__imagen{
    padding-top: 50px;
    padding-right: 50px;
  }
}
/* --------------------------------------------------------------------------- */
/* Conocenos */
#conocenos{
  padding-top: 120px;
}
.contenedor-conocenos{
  display: grid;
  color: white;
  padding-top: 60px;
  padding-bottom: 20px;
  background-color: #1A1A1A
}
.texto-principal{
  font-size: 15px;
  padding-bottom:20px;
  color: white;
  margin: 20px;
}
@media (min-width:768px) {
  .texto-principal{
    font-size: 20px;
    padding-bottom:20px;
    color: white;
    margin: 20px;
  }
}

#citas{
  padding-top: 120px;
  padding-bottom: 90px;
}
.cita__contenedor{
  background-color: #1A1A1A;
  color: white;
}
@media (min-width: 768px) {
  .cita__contenedor{
    background-color: #1A1A1A;
    color: white;
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
}
.titulo-cita{
  padding-bottom: 20px;
}
.cita__contenedor--texto{
  padding-top: 50px;
  padding-right:40px;
  padding-bottom: 20px;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding-left:30px;
}
@media (min-width: 768px) {
  .cita__contenedor--texto{
    padding-top: 50px;
    padding-right:40px;
    padding-bottom: 20px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    padding-left:30px;
  }
}
.contenedor__imagen--cita{
  display: flex;
  align-items: center;
  text-align: center;
  padding: 20px;
}
@media (min-width: 768px) {
  .contenedor__imagen--cita img{
    padding: 20px;
  }
}
.contenedor-boton {
  align-items: center;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.boton-agendar {
  text-decoration: none;
  background-color: #413f3f;
  color: white;
  font-weight: 700;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
}
.contenedor-informacion-cita{
  padding: 20px;
}
.informacion-cita{
  background-color: red;
  font-size: 15px;
  text-align: center;
}
/* --------------------------------------------------------------------------- */
/* Contacto */
#contactos{
  padding-top: 50px;
  padding-bottom: 120px;
}
.contenedor__imagenes_taller{
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 20px;
}
.contacto{
  background-color: #1A1A1A;
  font-size: 10px;
  align-items: center;
  padding-bottom: 80px;
}
@media (min-width: 768px) {
  .contacto{
    background-color: #1A1A1A;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:20px;
    align-items: center;
    padding-bottom: 80px;
  }
}
.titulo-c{
  padding-top: 20px;
  background-color: #1A1A1A;
  color: white;
}
.contacto-titulo{
  font-weight: bold;
  color: white;
}
.contacto__informacion--texto{
  padding-bottom: 20px;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding-left:30px;
}
@media (min-width: 768px) {
  .contacto__informacion--texto{
    padding-bottom: 20px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    padding-left:30px;
  }
}
.contacto__mapa{
  display: grid;
  grid-template-columns:repeat(3,1fr);
}
.mapa{
  padding-top: 30px;
  grid-column: 2 / 3;
}
/* --------------------------------------------------------------------------- */
/* Footer */
.footer {
  background-color: #1A1A1A;
  color: white;
  padding: 30px;
  text-align: center;
  width: 100%;
  position: relative;
  bottom: 0;
}
.contenedor__footer{
  display: flex;
  flex-direction: column;
  width: 100%;  
  padding:30px;
  background-color: #1A1A1A;
  font-size: 10px;
  color: white;
}
@media (min-width: 768px) {
  .contenedor__footer{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    width: 100%;  
    padding:30px;
    background-color:#1A1A1A;
    font-size: 15px;
    color: white;
  }
}
.titulo-redes{
  padding-top: 30px;
}
@media (min-width: 768px) {
  .titulo-redes{
    padding-top: 0;
    font-size: 20px;
  }
}
.texto-footer{
  grid-column: 1 / 2;
}

.footer-redes{
  grid-column: 2 / 3;
}
.letras-redes{
  color: white;
  text-decoration: none;
  text-align: center;
  align-items: center;
  padding-left: 10px;
  font-weight: 700;
}
@media (min-width: 768px) {
  .letras-redes{
    color: white;
    text-decoration: none;
    text-align: center;
    align-items: center;
    padding-left: 10px;
    font-weight: 700;
    font-size: 20px;
  }
}
.contenedor-letras-logo{
  padding-top: 5px;
  text-align: center;
  align-items: center;
  display: flex;
  padding-left:80px; 
  text-decoration: none;
}

@media (min-width:767px) {
  .contenedor-letras-logo{
    padding-top: 20px;
    text-align: center;
    align-items: center;
    display: flex;
    padding-left:80px; 
    text-decoration: none;
    font-size: 20px;
  }
}
@media (min-width: 1000px) {
  .contenedor-letras-logo{
    padding-top: 20px;
    text-align: center;
    align-items: center;
    display: flex;
    padding-left:200px; 
    text-decoration: none;
    font-size: 20px;
  }
}


.derechos{
  font-size: 15px;
  padding-top: 50px;
  text-align: center;
  align-items: center;
}

@media (min-width: 768px) {
  .derechos{
    font-size: 25px;
    padding-top: 50px;
    grid-column: 1/ 3;
    grid-row: 2 / 3;
  }
}
</style>
