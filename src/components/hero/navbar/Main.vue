<template>
  <v-app-bar elevation="0" color="blue">
    <desktop-nav-bar/>
  </v-app-bar>
</template>

<script>
import DesktopNavBar from '@/components/hero/navbar/DesktopNavBar'

export default {
  name: 'NavBar',
  components: { DesktopNavBar }
}
</script>

<style scoped>

</style>
