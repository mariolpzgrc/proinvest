<template>
  <v-container grid-list-md text-xs-center fluid app>
    <v-card-title>
      <span class="headline">Ingresé su dirección</span>
    </v-card-title>
    <h4>En esta sección ingresara su dirección.</h4>
    <v-form v-model="validar">
      <v-container>
        <v-layout row wrap>
          <!--v-flex de la zona izquierda-->
          <v-flex xs12 sm6 md8>
            <v-layout row wrap>
              <v-flex xs12 sm6 md6>
                <v-text-field
                  label="Calle"
                  :rules="[v=> !!v || 'La calle es obligatoria']"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs6 sm2 md3>
                <v-text-field
                  label="Número"
                  :rules="[v=> !!v || 'El número es obligatorio, en caso no tener numero ponga S/N']"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs6 sm2 md3>
                <v-text-field label="Interior"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Colonia" :rules="[v=> !!v || 'La colonia es obligatoria']"></v-text-field>
              </v-flex>
              <v-flex xs8 sm2 md5>
                <v-text-field
                  :counter="5"
                  append-icon="search"
                  label="Código Postal"
                  :rules="[(v) => !!v || 'El código postal es obligatorio', (v) => v && v.length == 5 || 'Formato invalido']"
                  mask="#####"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 sm6 md6>
                <v-select :rules="[v => !!v || 'Debe selecccionar un estado']" label="Estado"></v-select>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-select :rules="[v => !!v || 'Debe selecccionar un estado']" label="Municipio"></v-select>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-btn round color="primary" text-xs-right href="/registrar-datos-financieros">Continuar</v-btn>
  </v-container>
</template>
     