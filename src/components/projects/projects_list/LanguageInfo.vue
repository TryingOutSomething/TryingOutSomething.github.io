<template>
  <v-row align="center">
    <v-col class="pr-0 mr-md-n2 mr-xl-n6" cols="2">
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
