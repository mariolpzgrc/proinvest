/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require("./bootstrap");

import Vue from "vue";
import es from "vuetify/es5/locale/es";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

Vue.use(Vuetify, {
    iconfont: "md",
    lang: {
        locales: { es },
        current: "es"
    }
});
Vue.use(VueRouter);

import home from './components/home';
import intro from './components/introduccion';
import simular from './components/simularinversion';
import ingresardatos from './components/datosinversionista';
import verificar from './components/verificardatos';
import direccion from './components/direccioninversionista';
import datosfinancieros from './components/datosfinacieros';
import firma from './components/firmaelectronica';
import final from './components/final';
const app = new Vue({
    el: "#app",
    router: new VueRouter({
        mode: "history",
        routes: [
            {
                path: "",
                name: "home",
                component: home,
                children: [
                    {
                        path: "",
                        name: "intro",
                        component: intro,
                        link: "/"
                    },
                    {
                        path: "simular-inversion",
                        name: "simular",
                        component: simular,
                        link: "/simular-inversion"
                    },
                    {
                        path: "ingresar-datos",
                        name: "datos",
                        component: ingresardatos,
                        link: "/ingresar-datos"
                    },
                    {
                        path: "verificar-datos",
                        name: "verificarcion",
                        component: verificar,
                        link: "/verificar-datos"
                    },
                    {
                        path: "registrar-direccion",
                        name: "direccion",
                        component: direccion,
                        link: "/registrar-direccion"
                    },
                    {
                        path: "registrar-datos-financieros",
                        name: "datosfinancieros",
                        component: datosfinancieros,
                        link: "/registrar-datos-financieros"
                    },
                    {
                        path: "terminar-registro",
                        name: "firma",
                        component: firma,
                        link: "/terminar-registro"
                    },
                    {
                        path: "terminar-inversion",
                        name: "final",
                        component: final,
                        link: "/terminar-inversion"
                    }
                ]
            }
        ]
    })
});
