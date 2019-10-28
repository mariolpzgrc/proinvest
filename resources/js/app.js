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

const app = new Vue({
    el: "#app",
    router: new VueRouter({
        mode: "history",
        routes: [
            {
                path: "/",
                name: "inicio",
                component: holaMundo
            }
        ]
    })
});
