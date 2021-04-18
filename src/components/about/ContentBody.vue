<template>
  <base-body>
    <v-col>
      <slot name="title"/>
      <slot name="description"/>
      <slot name="skill-icons"/>
    </v-col>
  </base-body>
</template>

<script>
export default {
  name: 'ContentBody'
}
</script>

<style scoped>

</style>
