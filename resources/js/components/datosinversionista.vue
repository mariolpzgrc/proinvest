<template>
  <v-container fluid>
    <v-card-title>
      <span class="headline">Ingresar datos</span>
    </v-card-title>
    <v-layout grid-list-md text-xs-center fluid>
      <v-card-text>
        <v-form v-model="validar">
          <v-container row wrap>
            <v-flex xs12 sm6 md6>
              <v-layout row wrap>
                <v-flex xs12 sm8 md8>
                  <v-text-field label="Nombre(s)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm8 md8>
                  <v-text-field label="Apellido paterno"></v-text-field>
                </v-flex>
                <v-flex xs12 sm8 md8>
                  <v-text-field label="Apellido materno"></v-text-field>
                </v-flex>
                <v-flex xs12 sm8 md8>
                  <v-text-field label="RFC"></v-text-field>
                </v-flex>
                <v-flex xs12 sm8 md8>
                  <v-select label="Grado acádemico"></v-select>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-layout row wrap>
                <v-flex xs12 sm8 md8>
                  <v-menu
                    ref="startMenu"
                    v-model="startMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="start"
                    transition="scale-transition"
                    min-width="290px"
                    lazy
                    offset-y
                    full-width
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="start"
                        label="Fecha de nacimiento"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="start" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="startMenu = false">Cancelar</v-btn>
                      <v-btn flat color="primary" @click="$refs.startMenu.save(start)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs12 sm8 md8>
                  <v-text-field label="Correo electrónico"></v-text-field>
                </v-flex>
                <v-flex xs12 sm8 md8>
                  <v-text-field label="Celular"></v-text-field>
                </v-flex>
                <v-flex xs12 sm8 md8>
                  <v-text-field label="Profesión"></v-text-field>
                </v-flex>
                <v-flex xs12 sm8 md8>
                  <v-text-field label="Empresa de trabajo"></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-container>
        </v-form>
        <v-btn round href="/verificar-datos" color="primary" @click="snackbar = true">Continuar</v-btn>
        <v-snackbar v-model="snackbar" :color="color" :vertical="mode === 'vertical'">
          Se envio un enlace a su correo.
          <v-btn dark flat @click="snackbar = false">Cerrar</v-btn>
        </v-snackbar>
      </v-card-text>
    </v-layout>
  </v-container>
</template>


<script>
const weekdaysDefault = [0, 1, 2, 3, 4, 5, 6];

const intervalsDefault = {
  first: 0,
  minutes: 60,
  count: 24,
  height: 40
};

const stylings = {
  default(interval) {
    return undefined;
  },
  workday(interval) {
    const inactive =
      interval.weekday === 0 ||
      interval.weekday === 6 ||
      interval.hour < 9 ||
      interval.hour >= 17;
    const startOfHour = interval.minute === 0;
    const dark = this.dark;
    const mid = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

    return {
      backgroundColor: inactive
        ? dark
          ? "rgba(0,0,0,0.4)"
          : "rgba(0,0,0,0.05)"
        : undefined,
      borderTop: startOfHour ? undefined : "1px dashed " + mid
    };
  },
  past(interval) {
    return {
      backgroundColor: interval.past
        ? this.dark
          ? "rgba(0,0,0,0.4)"
          : "rgba(0,0,0,0.05)"
        : undefined
    };
  }
};

export default {
  data: () => ({
    dark: false,
    startMenu: false,
    start: "2019-01-12",
    endMenu: false,
    end: "2019-01-27",
    nowMenu: false,
    alert: true,
    snackbar: false,
    color: "success",
    minWeeks: 1,
    now: null,
    type: "month",
    typeOptions: [
      { text: "Day", value: "day" },
      { text: "4 Day", value: "4day" },
      { text: "Week", value: "week" },
      { text: "Month", value: "month" },
      { text: "Custom Daily", value: "custom-daily" },
      { text: "Custom Weekly", value: "custom-weekly" }
    ],
    weekdays: weekdaysDefault,
    weekdaysOptions: [
      { text: "Sunday - Saturday", value: weekdaysDefault },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] }
    ],
    intervals: intervalsDefault,
    intervalsOptions: [
      { text: "Default", value: intervalsDefault },
      {
        text: "Workday",
        value: { first: 16, minutes: 30, count: 20, height: 40 }
      }
    ],
    maxDays: 7,
    maxDaysOptions: [
      { text: "7 days", value: 7 },
      { text: "5 days", value: 5 },
      { text: "4 days", value: 4 },
      { text: "3 days", value: 3 }
    ],
    styleInterval: "default",
    styleIntervalOptions: [
      { text: "Default", value: "default" },
      { text: "Workday", value: "workday" },
      { text: "Past", value: "past" }
    ],
    color: "primary",
    colorOptions: [
      { text: "Primary", value: "primary" },
      { text: "Secondary", value: "secondary" },
      { text: "Accent", value: "accent" },
      { text: "Red", value: "red" },
      { text: "Pink", value: "pink" },
      { text: "Purple", value: "purple" },
      { text: "Deep Purple", value: "deep-purple" },
      { text: "Indigo", value: "indigo" },
      { text: "Blue", value: "blue" },
      { text: "Light Blue", value: "light-blue" },
      { text: "Cyan", value: "cyan" },
      { text: "Teal", value: "teal" },
      { text: "Green", value: "green" },
      { text: "Light Green", value: "light-green" },
      { text: "Lime", value: "lime" },
      { text: "Yellow", value: "yellow" },
      { text: "Amber", value: "amber" },
      { text: "Orange", value: "orange" },
      { text: "Deep Orange", value: "deep-orange" },
      { text: "Brown", value: "brown" },
      { text: "Blue Gray", value: "blue-gray" },
      { text: "Gray", value: "gray" },
      { text: "Black", value: "black" }
    ]
  }),
  computed: {
    intervalStyle() {
      return stylings[this.styleInterval].bind(this);
    },
    hasIntervals() {
      return (
        this.type in
        {
          week: 1,
          day: 1,
          "4day": 1,
          "custom-daily": 1
        }
      );
    },
    hasEnd() {
      return (
        this.type in
        {
          "custom-weekly": 1,
          "custom-daily": 1
        }
      );
    }
  },
  methods: {
    showIntervalLabel(interval) {
      return interval.minute === 0;
    }
  }
};
</script>