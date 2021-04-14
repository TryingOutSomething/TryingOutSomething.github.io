<template>
  <v-app-bar elevation="0" :color="bgColour" height="100px">
    <desktop-nav-bar :txt-colour="txtColour"/>
  </v-app-bar>
</template>

<script>
import DesktopNavBar from '@/components/hero/navbar/DesktopNavBar'
import { designProps } from '@/mixins/design'

export default {
  name: 'NavBar',
  components: { DesktopNavBar },
  mixins: [designProps]
}
</script>

<style scoped>

</style>
