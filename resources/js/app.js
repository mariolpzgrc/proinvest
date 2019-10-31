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

import holaMundo from './components/HolaMundo';
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
                path: "/",
                name: "inicio",
                component: home,
                children: [
                    {
                        path: "",
                        name: "intro",
                        component: intro,
                        link: "/"
                    },
                    {
                        path: "/simular-inversion",
                        name: "simular",
                        component: simular,
                        link: "/"
                    },
                    {
                        path: "/ingresar-datos",
                        name: "datos",
                        component: ingresardatos,
                        link: "/"
                    }, 
                    {
                        path: "/verificar-datos",
                        name: "verificarcion",
                        component: verificar,
                        link: "/"
                    },
                    {
                        path: "/registrar-direccion",
                        name: "direccion",
                        component: direccion,
                        link: "/"
                    },
                    {
                        path: "/registrar-datos-financieros",
                        name: "datosfinancieros",
                        component: datosfinancieros,
                        link: "/"
                    },
                    {
                        path: "/terminar-registro",
                        name: "firma",
                        component: firma,
                        link: "/"
                    },
                    {
                        path: "/terminar-inversion",
                        name: "final",
                        component: final,
                        link: "/"
                    }
                ]
            }
        ]
    })
});
