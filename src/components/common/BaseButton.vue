<template>
  <v-btn v-on="$listeners" v-bind="$attrs">
    <slot name="text"/>
  </v-btn>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>

</style>
