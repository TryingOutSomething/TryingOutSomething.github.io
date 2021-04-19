<template>
  <content-body :bg-colour="black">
    <template v-slot:title>
      <horizontal-padding height="3rem"/>

      <h1 class="topic-title my-12 custom-white">
        Projects Created
      </h1>
    </template>

    <template v-slot:projects>
      <v-row class="pt-12" justify="center">
        <project-list/>
      </v-row>

      <horizontal-padding height="5rem"/>
    </template>
  </content-body>
</template>

<script>
import ContentBody from '@/components/projects/ContentBody'
import { palette } from '@/mixins/design'
import ProjectList from '@/components/projects/projects_list/Main'

export default {
  name: 'Projects',
  components: {
    ProjectList,
    ContentBody
  },
  mixins: [palette]
}
</script>
