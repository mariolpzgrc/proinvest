<template>
  <div id="app">
    <main>
      <v-content grid-list-md fluid app>
        <router-view></router-view>
      </v-content>
      <v-footer class="primary" fluid app>
        <v-layout align-center align-content-center justify-center>
          <span class="white--text">&copy; Pro Invest 2019</span>
        </v-layout>
      </v-footer>
    </main>
  </div>
</template>