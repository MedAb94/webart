<template>
    <v-app class="theme--dark">
        <section class=" header">
            <v-layout fill-height column justify-center align-center>
                <h1 class="display-1 font-weight-bold mb-2 text-center">{{$t('hero.title')}}</h1>
                <h1 class="mx-3 text-center">{{$t('hero.subtitle')}}</h1>
              <a href="#contact" v-smooth-scroll>
                <v-btn text class="primary mt-4" width="250" rounded>{{$t('hero.soumission')}}</v-btn>
              </a>
            </v-layout>
        </section>
        <v-container>
            <v-row class="what-we-do overflow-hidden" id="about">
                <v-col cols="12" md="6">
                    <div class="black-col black_ pa-8">
                        <h1 class="display-2" style="color: #00baa0">{{$t('nav.about')}}</h1>
                        <!--            <h1 class="display-2" style="color: #ba7c00 !important;">we provide many information technology-->
                        <!--              information</h1>-->
                        <p class="text-h5 mt-4">
                            {{$t('about.title')}}
                        </p>
                        <h3 class="font-weight-bold">
                            {{$t('about.offres.title')}}
                        </h3>

                        <ul>
                            <li>{{$t('about.offres.1')}}</li>
                            <li>{{$t('about.offres.2')}}</li>
                            <li>{{$t('about.offres.3')}}</li>
                            <li>{{$t('about.offres.4')}}</li>
                        </ul>

                    </div>
                </v-col>
                <v-col md="6">
                    <div class="bg"></div>
                </v-col>
            </v-row>
        </v-container>
        <section id="services" class="services pa-sm-9 pa-md-16">
            <h1 class=" text-center text-uppercase" style="color: #00baa0">{{$t('nav.services')}}</h1>
           <v-container>
             <v-row justify="center" align="stretch" class="mt-4">
               <v-col cols="12" md="6" lg="4" class="pa-2 pa-md-5 d-flex">
                 <v-card>
                   <v-img
                       height="250"
                       src="../assets/img/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg"
                   ></v-img>
                   <v-card-title style="color: #ba7c00" class="text-center">{{$t('services.1.title')}}
                   </v-card-title>
                   <v-card-text>
                     <p class="text-center">{{$t('services.1.text')}}</p>
                   </v-card-text>

                 </v-card>
               </v-col>
               <v-col cols="12" md="6" lg="4" class="pa-2 pa-md-5 d-flex">
                 <v-card>
                   <v-img
                       height="250"
                       src="../assets/img/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg"
                   ></v-img>

                   <v-card-title style="color: #ba7c00" class="text-center">{{$t('services.2.title')}}
                   </v-card-title>

                   <v-card-text>
                     <p class="text-center">{{$t('services.2.text')}}</p>
                   </v-card-text>
                 </v-card>
               </v-col>
               <v-col cols="12" md="6" lg="4" class="pa-2 pa-md-5 d-flex">
                 <v-card>
                   <v-img
                       height="250"
                       src="../assets/img/headway-jfR5wu2hMI0-unsplash.jpg"
                   ></v-img>

                   <v-card-title style="color: #ba7c00" class="text-center">{{$t('services.3.title')}}
                   </v-card-title>

                   <v-card-text>
                     <p class="text-center">{{$t('services.3.text')}}</p>
                   </v-card-text>
                 </v-card>
               </v-col>
               <v-col cols="12" md="6" lg="4" class="pa-2 pa-md-5 d-flex">
                 <v-card>
                   <v-img
                       height="250"
                       src="../assets/img/sigmund-6jaBQAURBgI-unsplash.jpg"
                   ></v-img>

                   <v-card-title style="color: #ba7c00" class="text-center">{{$t('services.4.title')}}
                   </v-card-title>

                   <v-card-text>
                     <p class="text-center">{{$t('services.4.text')}}</p>
                   </v-card-text>
                 </v-card>
               </v-col>
               <v-col cols="12" md="6" lg="4" class="pa-2 pa-md-5 d-flex">
                 <v-card>
                   <v-img
                       height="250"
                       src="../assets/img/dashboard.jpeg"
                   ></v-img>

                   <v-card-title style="color: #ba7c00" class="text-center">{{$t('services.5.title')}}
                   </v-card-title>

                   <v-card-text>
                     <p class="text-center">{{$t('services.5.text')}}</p>
                   </v-card-text>
                 </v-card>
               </v-col>

             </v-row>
           </v-container>

        </section>
        <section id="projects" class="services black_ mt-10" style="padding-top: 30px; padding-bottom: 20px">
            <h1 class="display-2 text-center text-uppercase" style="color: #00baa0">{{$t('nav.projects')}}</h1>
            <h1 class="display-1 text-center text-capitalize" style="color: #ba7c00">{{$t('projects.title')}}</h1>
            <div class="container py-6">
                <v-row class="my-6">
                    <v-col cols="12" md="5">
                        <v-img src="../assets/img/Group 10166@3x.png"></v-img>
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-card-title class="display-1 text-uppercase" style="color: #00baa0">{{$t('projects.1.title')}}
                        </v-card-title>
                        <v-card-text>
                            <p class="title">{{$t('projects.1.text')}}

                                <v-btn
                                        text
                                        class="primary float-right mt-4"
                                        rounded
                                        small
                                        width="150"
                                        href="https://instantaclasse.ca/"
                                        target="_blank"
                                >
                                    {{$t('projects.visit')}}
                                </v-btn>
                            </p>
                        </v-card-text>
                    </v-col>

                </v-row>
                <hr class="primary">
                <v-row class="my-6">
                    <v-col cols="12" md="5">
                        <v-img src="../assets/img/gogive.png"></v-img>
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-card-title class="display-1 text-uppercase" style="color: #00baa0">
                            {{$t('projects.2.title')}}
                        </v-card-title>
                        <v-card-text>
                            <p class="title">{{$t('projects.2.text')}}

                                <v-btn
                                        text
                                        class="primary float-right mt-4"
                                        rounded
                                        small
                                        width="150"
                                        href="https://gogivego.com/en/"
                                        target="_blank"
                                >
                                    {{$t('projects.visit')}}
                                </v-btn>
                            </p>
                        </v-card-text>
                    </v-col>

                </v-row>
                <hr class="primary">
                <v-row class="my-6">
                    <v-col cols="12" md="5">
                        <v-img src="../assets/img/12.png"></v-img>
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-card-title class="display-1 text-uppercase" style="color: #00baa0">
                            {{$t('projects.3.title')}}
                        </v-card-title>
                        <v-card-text>
                            <p class="title">{{$t('projects.3.text')}}
                                <v-btn
                                        text
                                        class="primary float-right mt-4"
                                        rounded
                                        small
                                        width="150"
                                        href="https://mobile-sigma.vercel.app"
                                        target="_blank"
                                >
                                    {{$t('projects.visit')}}
                                </v-btn>
                            </p>
                        </v-card-text>
                    </v-col>

                </v-row>
            </div>

        </section>
        <section id="contact" class="container pa-3  pa-md-10">
            <v-card class="black_ pa-3  pa-md-10">
                <h1 class="display-2 text-center text-uppercase" style="color: #00baa0">{{$t('nav.contact')}}</h1>
                <h1 class="display-1 text-center text-capitalize" style="color: #ba7c00">Contact us for any question or
                    comments</h1>
                <v-form class="pa-3 pa-md-10">

                    <v-text-field :label="$t('contact.name')" placeholder="Enter your name here" outlined/>
                    <v-text-field type="email" label="E-Mail"  outlined/>
                    <v-text-field :label="$t('contact.phone')"  outlined/>
                    <v-text-field :label="$t('contact.subject')" outlined/>
                    <v-textarea label="Message" outlined/>
                    <v-layout justify-center>
                        <v-btn class="primary" rounded text width="150">{{$t('contact.send')}}</v-btn>
                    </v-layout>
                </v-form>
            </v-card>
        </section>
      <v-btn
          v-scroll="onScroll"
          v-show="fab"
          fab
          dark
          fixed
          bottom
          right
          color="primary"
          @click="toTop"
      >
        <v-icon>mdi-chevron-up </v-icon>
      </v-btn>
        <!--    Footer-->
        <v-footer class="black_ pa-10">
            <v-container>
                <v-row justify="center" align="center">
                    <v-col cols="12" sm="6" md="3">
                        <div class="pa-2 text-center">
                            <v-img src="../assets/img/logo.png" class="mb-3"/>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <div class="pa-2 text-center">
                            <h3>Quick links</h3>
                            <v-list class="transparent">
                                <v-list-item link>
                                    <v-list-item-title>About Us</v-list-item-title>
                                </v-list-item>
                                <v-list-item link>
                                    <v-list-item-title>Our Services</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <div class="pa-2 text-center">
                            <v-list class="transparent">
                              <v-list-item link>
                                <v-list-item-title>Projects</v-list-item-title>
                              </v-list-item>
                              <v-list-item link>
                                <v-list-item-title>Contact</v-list-item-title>
                              </v-list-item>
                            </v-list>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <div class="pa-2 text-center">
                            <h3>Contact Info</h3>
                            <v-list class="transparent">
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-phone</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>514-865-8488</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-email</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>info@sitewebart.ca</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="justify-lg-space-between">
                    <v-col cols="12"  class="text-center">
                        &copy;SITEWEBART .all right are reserved
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: 'Home',
      data: () => ({
        fab: false,
        valid: true,
        name: '',
        nameRules: [
          v => !!v || this.$i18n.locale === 'fr' ? 'Veillez saisir votre nom' : 'Name is required',
        ],
        email: '',
        emailRules: [
          v => !!v || this.$i18n.locale === 'fr' ? 'Veillez saisir votre couriel' : 'Email is required',
          v => /.+@.+\..+/.test(v) || 'E-mail Invalide',
        ],
        select: null,
      }),

      methods: {
        validate() {
          this.$refs.form.validate()
        },
        onScroll(e) {
          if (typeof window === 'undefined') return
          const top = window.pageYOffset || e.target.scrollTop || 0
          this.fab = top > 20
        },
        toTop() {
          this.$vuetify.goTo(0)
        }

      },
    }
</script>

<style lang="scss" scoped>
    $primary: #00baa0;
    .header {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url("../assets/img/domenico-loia-hGV2TfOh0ns-unsplash.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;

        .text-primary {
            color: $primary !important;
        }
    }

    .what-we-do {
        .bg {
            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url("../assets/img/campaign-creators-iEiUITs149M-unsplash.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%;
        }

        .black-col {
            position: relative;
            //padding-left: ;
            //width: 100% !important;
        }

        .black-col::after {
            position: absolute;
            content: "";
            width: 100px;
            top: 0;
            bottom: 0;
            background: #1b1b1b;
            right: -60px;
            transform: skewX(-6deg);
        }
    }

    @media screen and (max-width: 970px) {
        .what-we-do {
            .black-col::after {
                display: none;
            }

            .bg {
                display: none;
            }
        }
    }

    @media screen and (max-width: 720px) {
        .display-1 {
            font-size: 1.9rem !important;
        }
        .display-2 {
            font-size: 2.3rem !important;
        }
    }
</style>
