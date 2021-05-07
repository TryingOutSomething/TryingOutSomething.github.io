<template>
  <content-body id="projects" :bg-colour="black" rounded="0">
    <template v-slot:title>
      <horizontal-padding height="3rem"/>

      <h1 class="topic-title my-12 custom-white">
        Projects Created
      </h1>
    </template>

    <template v-slot:projects>
      <v-row class="pt-12" justify="center">
        <project-list :bg-colour="white"/>
      </v-row>

      <horizontal-padding height="10rem"/>
    </template>
  </content-body>
</template>

<script>
import { palette } from '@/mixins/design'

export default {
  name: 'Projects',
  components: {
    ProjectList: () => import('@/components/projects/projects_list/Main'),
    ContentBody: () => import('@/components/projects/ContentBody')
  },
  mixins: [palette]
}
</script>
