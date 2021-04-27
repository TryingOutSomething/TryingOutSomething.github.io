<template>
  <v-hover v-slot="{ hover:onHover }" :open-delay="hoverDelay" :close-delay="hoverDelay">
    <base-body v-bind="$attrs">
      <v-scroll-x-transition>
        <project-url :on-hover="onHover" :git-url="gitUrl" :project-url="projectUrl"/>
      </v-scroll-x-transition>

      <v-col sm="10">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
      </v-col>

      <language-info :language="language" class="px-6 pb-3"/>
    </base-body>
  </v-hover>
</template>

<script>
export default {
  name: 'ProjectCard',
  components: {
    ProjectUrl: () => import('./ProjectUrl'),
    LanguageInfo: () => import('./LanguageInfo')
  },
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
    },
    gitUrl: {
      type: String,
      required: true
    },
    projectUrl: {
      type: String
    }
  },

  data () {
    return {
      hoverDelay: 50
    }
  }
}
</script>
