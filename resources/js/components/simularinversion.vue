<template>
  <v-container  grid-list-md text-xs-center>
    <v-card-title>
      <span class="headline">Simular inversión</span>
    </v-card-title>
    <v-layout row wrap>
      <v-card-text>
        <v-form v-model="validar">
          <v-container row wrap>
            <v-flex xs12 sm6 md6>
              <v-layout row wrap >
                <v-flex xs12 sm8 md8>
                  <v-text-field label="Monto" value="10000" prefix="$"></v-text-field>
                </v-flex>
                <v-flex xs12 sm8 md8>
                  <v-select label="Tipo de inversión"></v-select>
                </v-flex>
                <v-flex xs12 sm8 md8>
                  <v-select label="Plazo a invertir"></v-select>
                </v-flex>
                <v-flex xs12 sm8 md9>
                  <v-btn round color="primary">Simular</v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                  <v-img src="https://www.excelfreeblog.com/wp-content/uploads/2015/12/D1.png">
                    <div class="fill-height bottom-gradient"></div>
                  </v-img>
                </v-flex>
                <v-flex xs12 sm8 md9>
                  <v-btn href="/ingresar-datos" round color="primary">Invertir</v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-container>
        </v-form>
      </v-card-text>
    </v-layout>
  </v-container>
</template>