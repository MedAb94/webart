<template>
  <v-app>
    <v-app-bar
        flat
        absolute
        class="transparent"
        dark
    >
      <v-layout class="justify-center align-center">
        <v-img src="./assets/img/logo.png" max-width="180" height=""/>
        <v-btn text class="link-item text-subtitle-1 mx-3">About Us</v-btn>
        <v-btn text class="link-item text-subtitle-1 mx-3">Our Services</v-btn>
        <v-btn text class="link-item text-subtitle-1 mx-3">Projects</v-btn>
        <v-btn text class="link-item text-subtitle-1 mx-3">Contact</v-btn>
        <v-btn text class="link-item text-subtitle-1 ml-4">EN</v-btn>
      </v-layout>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">

$primary: #00baa0;

.v-toolbar__content {
  .link-item {
    color: #fff !important;
    font-weight: bold;
    font-size: 35px !important;
    transition: all 0.5s ease-in-out;
  }

  .link-item:hover,
  .link-item:active {
    border-bottom: 2px solid $primary;
    color: $primary !important;
    background: none;
  }
}
</style>