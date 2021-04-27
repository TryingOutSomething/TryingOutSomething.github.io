<template>
  <v-row justify="end" class="mr-12">
    <text-button text="about" :colour="txtColour" @click="scrollToAbout"/>
    <text-button text="projects" :colour="txtColour" @click="scrollToProjects"/>
    <text-button text="resume" :colour="txtColour" @click="scrollToResume"/>
  </v-row>
</template>

<script>
import { navbarScrollIds } from '@/mixins/screen'

export default {
  name: 'DesktopNavBar',
  mixins: [navbarScrollIds],
  props: {
    txtColour: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style scoped>

</style>
