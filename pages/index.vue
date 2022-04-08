<template>
  <v-sheet>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-sheet class="my-6">
          <Search />
          <List />
        </v-sheet>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  nuxtI18n: false,
  name: 'IndexPage'
}
</script>
