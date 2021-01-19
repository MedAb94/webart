import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#00baa0',
                secondary: '#ba7c00',
                accent: '#8c9eff',
                error: '#b71c1c',
                black_: '#1b1b1b'
            },
        },
    },
});
