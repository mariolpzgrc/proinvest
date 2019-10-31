<template>
  <v-container fluid grid-list-sm>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm4 md4>
        <h3 class="headline mb-0">Pro Invest</h3>
        <div>{{ card_text }}</div>
      </v-flex>

      <v-flex xs12 sm4 md4>
        <div class="title mb-1">Ejemplos de Inversión</div>
        <v-layout column>
          <v-img
            src="https://paraque.net/wp-content/uploads/2017/12/Para-qu%C3%A9-sirve-una-gr%C3%A1fica.png"
          ></v-img>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm4 md4>
        <v-layout align-center justify-center>
          <v-btn href="/simular-inversion" outline color="indigo">Iniciar Inversión</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      card_text:
        "Proinvest México nace en 2007 con la firme intención de crear un modelo de negocio enfocado en el beneficio del cliente. Este modelo busca darle a nuestros clientes y al público en general más y mejores herramientas para aprovechar los beneficios de los productos de inversión y de ahorro. Somos un equipo profesional que se basa en el conocimiento y la experiencia que aporta la banca patrimonial y el sector financiero. queremos compartirte las mejores estrategias para brindarte un  futuro financiero sólido"
    };
  }
};
</script>