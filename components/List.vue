<template>
  <v-sheet>
    <span v-if="items.length>0" class="text-caption text--secondary"> {{ items.length + ' ' + $t('results')}}</span>
    <v-card class="mx-auto" v-if="items.length>0">

      <v-list two-line>
        <template v-for="(item, index) in items">
          
          <v-list-item :key="index">
            <v-list-item-avatar>
              <v-img :src="item.album.cover_small"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title_short"></v-list-item-title>
              <v-list-item-subtitle v-html="item.artist.name"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action-text>
              <v-chip
                small
                v-if="item.explicit_content_lyrics"
                color="red"
                text-color="white"
              >
                {{ $t("explicit_content") }}
              </v-chip>
            </v-list-item-action-text>
          </v-list-item>

          <v-divider inset></v-divider>

        </template>
      </v-list>

    </v-card>
  </v-sheet>
</template>


<script>
import {mapState} from 'vuex';

export default {
  name: 'List',

  computed: {
    ...mapState({
      appLoading: state => state.loading,
      items: state => state.deezer.list,
    }),

  }

}

</script>


