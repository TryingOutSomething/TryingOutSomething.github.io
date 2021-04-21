<template>
  <v-row align="center" justify="space-between">
    <slot name="tools-used"/>
    <slot name="copyright"/>
    <slot name="contact"/>
  </v-row>
</template>

<script>
export default {
  name: 'ContentBody'
}
</script>

<style scoped>

</style>
