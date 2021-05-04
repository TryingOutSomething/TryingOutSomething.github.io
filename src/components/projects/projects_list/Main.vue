<template>
  <v-col xl="7" lg="8" md="9" sm="11" cols="11">
    <v-row>
      <v-col v-for="project in projects" :key="project.project_name" sm="4">
        <project-card
          :bg-colour="bgColour"
          :card-height="cardHeight"
          :is-mobile-device="isMobileDevice"
          :title="project.project_name"
          :description="project.description"
          :language="project.language"
          :language-colour="project.language_colour"
          :git-url="project.github_url"
          :project-url="project.demo_url"
        />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { getProjectList } from '@/configs/card_properties'
import { designProps } from '@/mixins/design'
import { screenSizeIdentifier } from '@/mixins/screen'

export default {
  name: 'ProjectList',
  components: { ProjectCard: () => import('./ProjectCard') },
  mixins: [designProps, screenSizeIdentifier],

  computed: {
    projects () {
      return getProjectList()
    },

    cardHeight () {
      let height

      if (this.isMobileScreen) {
        height = 250
      } else if (this.isTabletScreen) {
        height = 330
      } else if (this.isMediumDeviceScreen) {
        height = 305
      } else if (this.isLargeDeviceScreen) {
        height = 285
      } else {
        height = 250
      }

      return height
    }
  }
}
</script>
