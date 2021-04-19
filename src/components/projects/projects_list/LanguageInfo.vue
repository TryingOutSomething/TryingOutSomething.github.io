<template>
  <v-row align="center">
    <v-col class="pr-0 mr-md-n2 mr-xl-n6" cols="2">
      <language-icon/>
    </v-col>

    <span class="card-footer">{{ language }}</span>
  </v-row>
</template>
<script>
import LanguageIcon from '@/components/projects/projects_list/LanguageIcon'

export default {
  name: 'language-info',
  components: { LanguageIcon },
  props: {
    language: {
      type: String,
      required: true
    }
  }
}
</script>
