<template>
  <v-app>
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list-item link>
          <v-img src="./assets/img/logo.png"></v-img>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item link to="#about" v-smooth-scroll>
          <v-list-item-title>{{$t('nav.about')}}</v-list-item-title>
        </v-list-item><v-list-item link to="#services" v-smooth-scroll>
          <v-list-item-title>{{$t('nav.services')}}</v-list-item-title>
        </v-list-item><v-list-item link to="#projects" v-smooth-scroll>
          <v-list-item-title>{{$t('nav.projects')}}</v-list-item-title>
        </v-list-item><v-list-item link to="#contact" v-smooth-scroll>
          <v-list-item-title>{{$t('nav.contact')}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
        flat
        absolute
        class="transparent"
        dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
      <v-img src="./assets/img/logo.png" max-width="150" height=""/>
      <v-layout class="justify-center align-center hidden-sm-and-down">
        <v-btn text class="link-item text-subtitle-1 mx-3" to="#about" v-smooth-scroll>{{$t('nav.about')}}</v-btn>
        <v-btn text class="link-item text-subtitle-1 mx-3" to="#services" v-smooth-scroll>{{$t('nav.services')}}</v-btn>
        <v-btn text class="link-item text-subtitle-1 mx-3" to="#projects" v-smooth-scroll>{{$t('nav.projects')}}</v-btn>
        <v-btn text class="link-item text-subtitle-1 mx-3" to="#contact" v-smooth-scroll>{{$t('nav.contact')}}</v-btn>
      </v-layout>

      <v-spacer></v-spacer>
      <v-btn text class="link-item text-subtitle-1 ml-4" @click="$i18n.locale='en'" v-if="$i18n.locale === 'fr'">EN</v-btn>
      <v-btn text class="link-item text-subtitle-1 ml-4" @click="$i18n.locale='fr'" v-if="$i18n.locale === 'en'">FR</v-btn>

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
    drawer: false
  }),
};
</script>

<style lang="scss">
$primary: #00baa0;
*{
  box-sizing: border-box;
}
.v-toolbar__content {
  .link-item {
    color: #fff !important;
    font-weight: bold;
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