<template>
  <v-container fluid>
    <v-row justify="space-between">
      <slot name="tools-used"/>
      <slot name="copyright"/>
      <slot name="contact"/>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContentBody'
}
</script>

<style scoped>

</style>
