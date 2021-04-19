<template>
  <base-body v-bind="$attrs">
    <v-col sm="10">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ description }}</v-card-text>
    </v-col>

    <language-info :language="language" class="px-6 pb-3"/>
  </base-body>
</template>
<script>
import LanguageInfo from '@/components/projects/projects_list/LanguageInfo'

export default {
  name: 'ProjectCard',
  components: { LanguageInfo },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    }
  }
}
</script>
