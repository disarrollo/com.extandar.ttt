<template>
  <v-app>
    <v-navigation-drawer 
      
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      :dark="dark"
    >
      <v-list>
        
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon color="red">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t("my_account")}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      
      </v-list>

      <template v-slot:append>
        <div class="py-1 px-1 text-caption">
            Version: v0.0.1
        </div>
      </template>

    </v-navigation-drawer>
    
    <v-app-bar  fixed app :dark="dark" style="background-color: white;">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" >
      </v-app-bar-nav-icon>
      <v-toolbar-title class="px-0 px-md-4">
        <router-link to="/">
          <TTTLogo />
        </router-link>
      </v-toolbar-title> 
      <v-spacer></v-spacer>
      
      <v-btn-toggle
        v-model="languaje"
        tile
        color="red accent-3"
        group
        mandatory
      >
        <v-btn value="es"  @click="switchLanguaje('es')">ES</v-btn>
        <v-btn value="en"  @click="switchLanguaje('en')">EN</v-btn>

      </v-btn-toggle>
    </v-app-bar>


    <v-main style="background-color: white;">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    
    <v-snackbar v-model="errorShowed" timeout="3000">
      {{ error }}
      <v-btn color="error" icon @click="hideError">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>

    <v-overlay :value="loading || appLoading">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

    <v-footer>

      <v-container>
        <v-row>
          <v-col cols="12" class="py-0 text-center">
            <span class="text-caption">&copy; 2022 - HaroldVillota</span>
          </v-col>
          <v-col cols="12" class="py-0 text-center">
            <span class="text-caption" v-if="appVersion">PWA v{{appVersion}}</span>
          </v-col>
        </v-row>
      </v-container>

    </v-footer>
 
    <div id="dz-root"></div>  
  </v-app>

</template>


<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex';

export default {
  name: 'DefaultLayout',
  data () {
    return {
      updateExists: false,
      loading: false,
      clipped: false,
      drawer: false,
      fixed: false,
      dark: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Comercyo',
      isLogged: false,
      languaje:'en'
    }
  },

  mounted(){
    this.initialize()
  },

  methods:{
    ...mapActions({
        initialize: 'deezer/initialize',
      }),

    ...mapMutations({
      showError: 'alerts/showError',
      hideError: 'alerts/hideError',
    }),

    switchLanguaje(value){
      this.languaje = value
      this.$i18n.setLocale(value)  
    }
  },


  computed: {
    ...mapState({
      error: state => state.alerts.error,
      isErrorShowed: state => state.alerts.isErrorShowed,
      appLoading: state => state.loading,
      appVersion: state => state.appVersion,
    }),
    ...mapGetters({
    }),

    locale(){
      return this.$i18n.locale
    },

    errorShowed:{
      get(){
         return this.isErrorShowed
      },
      set(value){
        if(value){
          this.showError()
        }else{
          this.hideError()
        }
      }
    },
  },

}


</script>


