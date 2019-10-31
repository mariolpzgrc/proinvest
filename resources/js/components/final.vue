<template>
  <v-container grid-list-md text-xs-center align-center>
    <v-layout align-center justify-center column fill-height>
      <v-spacer></v-spacer>
      <v-card-title>
        <span class="headline" align-center>Solicitud completada</span>
      </v-card-title>
      <h4>Se ha concluido su inversión.</h4>
      <v-icon color="green" right x-large>check_circle</v-icon>
      <v-btn round href="/" color="primary" @click="snackbar = true">Salir</v-btn>
    </v-layout>
  </v-container>
</template>