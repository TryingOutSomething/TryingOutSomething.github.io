<template>
  <v-app-bar elevation="0" :color="bgColour" height="100px">
    <v-row :justify="isMobileOrDesktopJustify" class="mr-md-12">
      <text-button
        :color="bgColour"
        text="about"
        text-classes="custom-white"
        @click="scrollToAbout"
      />

      <text-button
        :color="bgColour"
        text="projects"
        text-classes="custom-white"
        @click="scrollToProjects"/>

      <text-button
        :color="bgColour"
        text="resume"
        text-classes="custom-white"
        @click="scrollToResume"/>
    </v-row>
  </v-app-bar>
</template>

<script>
import { designProps } from '@/mixins/design'

export default {
  name: 'NavBar',
  mixins: [designProps],
  props: {
    isMobileScreen: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    isMobileOrDesktopJustify () {
      return this.isMobileScreen ? 'center' : 'end'
    }
  },

  methods: {
    async scrollToAbout () {
      await this.$vuetify.goTo('#about')
    },
    async scrollToProjects () {
      await this.$vuetify.goTo('#projects')
    },
    async scrollToResume () {
      await this.$vuetify.goTo('#resume')
    }
  }
}
</script>

<style scoped>

</style>
