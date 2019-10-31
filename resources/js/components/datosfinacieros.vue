<template>
  <v-container grid-list-md text-xs-center fluid app>
    <v-card-tittle>
      <span class="headline">Ingresé sus datos financieros</span>
    </v-card-tittle>
    <h4>En esta sección debe de ingresar el origen de su inversión.</h4>
    <v-form v-model="validar">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md6 sm6>
            <v-layout row wrap>
              <v-flex xs12 sm12 md12>
                <v-select label="Origen de fondos"></v-select>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-select label="Banco"></v-select>
              </v-flex>
              <v-flex xs6 sm12 md12>
                <v-text-field label="Número de cuenta"></v-text-field>
              </v-flex>
              <v-flex xs6 sm12 md12>
                <v-text-field label="Clabe"></v-text-field>
              </v-flex>
            </v-layout>
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'Desea continuar!']"
              label="Acepto que esto es cierto, licito y eximo a la empresa de cualquier responsabilidad."
              required
            ></v-checkbox>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-btn round color="primary" text-xs-right href="/terminar-registro">Continuar</v-btn>
  </v-container>
</template>