<script setup>
import video from '@/video/pixel_red.mp4'
</script>

<template>
  <div class="page-container">
    <video autoplay muted loop id="background-video" :src="video"></video>
    <div class="contenedor">
      <v-container class="fill-height">
        
        <v-row id="Contenedor-login">
          <v-card  width="30vw" height="80vh">
            <v-card-title id="titulo" style="text-align: center;">Inicia Sesión</v-card-title>
              <div id="contenedor-formulario">
                <v-card-text>
                  <v-container>
                  <v-row id="UserRow">

                    <v-text-field label="Usuario" variant="solo" clearable></v-text-field>
                  </v-row>
                  <v-row id="PasswordRow">
                    <v-text-field label="Contraseña" variant="solo" type="password" ></v-text-field>
                  </v-row>
                  </v-container>
                    </v-card-text>
                      <v-card-actions>
                        <v-container >
                          <v-row>
                            <v-col class="d-flex">
                            <v-btn class="botones-color" block>Ingresar</v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
                  </v-card-actions>
                </div>
              </v-card>
            </v-row>
        </v-container>
      </div>
    <router-view/>
  </div>
  

</template>


<style>
#background-video{
  position: fixed;
}
#Contenedor-login{
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 80%;
}

#titulo{
  background-color: rgb(230, 1, 1);
  color: white;
  box-shadow: -1px 2px 6px black;
  
}

#contenedor-formulario{
  width:100%;
  height: 90%;
  padding-block: 10px;
}

#UserRow{
  padding-block: 8px;
}
#PasswordRow{
  padding-block: 10px;
}

.v-btn.botones-color{
  background-color: rgb(230, 1, 1) ;
  color: white ;
}
.contenedor {
    height: 80vh;
}


.O{
  justify-content: center;
  text-decoration: none;

}

</style>