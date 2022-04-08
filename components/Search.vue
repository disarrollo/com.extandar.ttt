<template>
  <v-sheet class="text-center my-4">
    
  <v-text-field
    v-model="term"
    color="success"
    :loading="appLoading"
    :label="$t('type_the_name_of_your_favorite_artist')"
    class="centered-input"
  ></v-text-field>
  <v-btn @click="processSearch" color="red" dark>{{ $t("search")}}</v-btn>
  </v-sheet>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex';

export default {
  name: 'Search',
  data () {
    return {
      term : ''
    }
  },

  methods:{
    ...mapActions({
        search: 'deezer/search',
      }),
    ...mapMutations({
    }),
    processSearch(){
      this.search({term:this.term})
    }
  },

  computed: {
    ...mapState({
      appLoading: state => state.loading,
    }),
  }

}

</script>


