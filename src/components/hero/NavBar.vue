<template>
  <v-app-bar elevation="0" :color="bgColour" height="100px">
    <v-row :justify="isMobileOrDesktopJustify" class="mr-md-12">
      <text-button text="about" :colour="txtColour" @click="scrollToAbout"/>
      <text-button text="projects" :colour="txtColour" @click="scrollToProjects"/>
      <text-button text="resume" :colour="txtColour" @click="scrollToResume"/>
    </v-row>
  </v-app-bar>
</template>

<script>
import { designProps } from '@/mixins/design'

export default {
  name: 'NavBar',
  mixins: [designProps],
  props: {
    txtColour: {
      type: String,
      default: 'black'
    },

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
