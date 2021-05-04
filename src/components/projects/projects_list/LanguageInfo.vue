<template>
  <v-row align="center">
    <v-col class="pr-0 mr-lg-2 mr-xl-1 mr-md-3 mr-sm-3 mr-2" cols="1">
      <language-icon/>
    </v-col>

    <span class="card-footer">{{ language }}</span>
  </v-row>
</template>

<script>
export default {
  name: 'language-info',
  components: { LanguageIcon: () => import('./LanguageIcon') },
  props: {
    language: {
      type: String,
      required: true
    }
  }
}
</script>
