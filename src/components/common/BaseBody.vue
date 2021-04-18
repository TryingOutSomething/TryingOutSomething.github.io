<template>
  <v-container class="pa-0" fluid>
    <v-card elevation="1" v-bind="$attrs">
      <slot/>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'BaseBody'
}
</script>

<style scoped>

</style>
