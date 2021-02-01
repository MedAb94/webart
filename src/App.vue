<template>
  <v-app>
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list-item link>
        <v-img src="./assets/img/logo.png"></v-img>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <a href="#about" v-smooth-scroll>
              <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.about') }}</v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-title>
            <a href="#services" v-smooth-scroll>
              <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.services') }}</v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-title>
            <a href="#projects" v-smooth-scroll>
              <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.projects') }}</v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item >
          <v-list-item-title>
            <a href="#contact" v-smooth-scroll>
              <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.contact') }}</v-btn>
            </a>
          </v-list-item-title>
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
        <a href="#about" v-smooth-scroll>
          <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.about') }}</v-btn>
        </a>
        <a href="#services" v-smooth-scroll>
          <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.services') }}</v-btn>
        </a>
        <a href="#projects" v-smooth-scroll>
          <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.projects') }}</v-btn>
        </a>
        <a href="#contact" v-smooth-scroll>
          <v-btn text class="link-item text-subtitle-1 mx-3">{{ $t('nav.contact') }}</v-btn>
        </a>
      </v-layout>

      <v-spacer></v-spacer>
      <v-btn text class="link-item text-subtitle-1 ml-4" @click="$i18n.locale='en'" v-if="$i18n.locale === 'fr'">EN
      </v-btn>
      <v-btn text class="link-item text-subtitle-1 ml-4" @click="$i18n.locale='fr'" v-if="$i18n.locale === 'en'">FR
      </v-btn>

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
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
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
/* custom scroll bar */
::-webkit-scrollbar {
  width: 8px;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: $primary;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: $primary;
}
</style>