<template>
  <v-row justify="end" class="mr-12">
    <text-button text="about" :colour="txtColour"/>
    <text-button text="projects" :colour="txtColour"/>
    <text-button text="resume" :colour="txtColour"/>
  </v-row>
</template>

<script>
export default {
  name: 'DesktopNavBar',
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
