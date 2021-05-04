<template>
  <v-hover v-slot="{ hover:onHover }" :open-delay="hoverDelay" :close-delay="hoverDelay">
    <base-body
      v-bind="$attrs"
      v-on="pressEvent"
      width="350"
      :height="cardHeight"
      :color="bgColour"
    >
      <v-scroll-x-transition>
        <project-url :on-hover="onHover || showOverlay" :git-url="gitUrl" :project-url="projectUrl"/>
      </v-scroll-x-transition>

      <v-col sm="10">
        <h2 class="card-header pl-4 pt-3">{{ title }}</h2>
        <p class="card-description pl-4 mb-0 mt-5">{{ description }}</p>
      </v-col>

      <language-info :bg-colour="bgColour" :language="language" class="px-6 pb-3"/>
    </base-body>
  </v-hover>
</template>

<script>
import { designProps } from '@/mixins/design'

export default {
  name: 'ProjectCard',
  components: {
    ProjectUrl: () => import('./ProjectUrl'),
    LanguageInfo: () => import('./LanguageInfo')
  },
  mixins: [designProps],
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
    },
    cardHeight: {
      type: [Number, String]
    },
    isMobileDevice: {
      type: Boolean
    }
  },

  data () {
    return {
      hoverDelay: 50,
      showOverlay: false
    }
  },

  computed: {
    pressEvent () {
      return this.isMobileDevice ? { click: this.toggleOverlayOnMobile } : {}
    }
  },

  methods: {
    toggleOverlayOnMobile () {
      this.showOverlay = !this.showOverlay
    }
  }
}
</script>
