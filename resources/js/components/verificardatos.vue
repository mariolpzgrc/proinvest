<template>
  <v-container grid-list-md text-xs-center align-center>
    <v-layout align-center justify-center column fill-height>
      <v-spacer></v-spacer>
      <v-card-title>
        <span class="headline" align-center>Verificar datos</span>
      </v-card-title>
      <h3>Has verificado correctamente tu email, ingresa el código que hemos enviado a tu celular para verificarlo.</h3>
      <h4>Correo electrónico</h4>
      <v-icon color="green" right x-large>check_circle</v-icon>
      <v-flex xs6 md6 sm6>
        <v-text-field label="Ingrese el código" single-line outline></v-text-field>
      </v-flex>
      <v-btn round href="/registrar-direccion" color="primary" @click="snackbar = true">Verificar</v-btn>
    </v-layout>
  </v-container>
</template>