<template>
  <v-container grid-list-md text-xs-center fluid app>
    <v-card-tittle>
      <span class="headline">Último paso</span>
    </v-card-tittle>
    <h4>En esta sección debe de subir su documentación y registrar su firma electrónica.</h4>
    <v-form v-model="validar">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md6 sm6>
            <v-layout column>
              <v-flex xs8 md8 sm8>
                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="blue-grey"
                  class="white--text"
                  @click="loader = 'loading3'"
                >
                  Subir archivo 1
                  <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs8 md8 sm8>
                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="blue-grey"
                  class="white--text"
                  @click="loader = 'loading3'"
                >
                  Subir archivo 2
                  <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs8 md8 sm8>
                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="blue-grey"
                  class="white--text"
                  @click="loader = 'loading3'"
                >
                  Subir archivo 3
                  <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md6 sm6>
            <v-layout column>
              <span class="headline">Firma electrónica</span>
              <v-flex xs10 md12 sm12>
                <v-textarea  height="300" solo name="input-7-4"></v-textarea>
              </v-flex>
              <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'Desea continuar!']"
              label="Acepto términos y condiciones."
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'Desea continuar!']"
              label="Al dar click en el botón confirmo mi solicitud de inversión."
            ></v-checkbox>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-btn round color="primary" text-xs-right href="/terminar-inversion">Confirmar</v-btn>
  </v-container>
</template>