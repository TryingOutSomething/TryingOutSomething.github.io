<template>
  <v-btn v-on="$listeners" v-bind="$attrs">
    <slot name="text"/>
  </v-btn>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style scoped>

</style>
