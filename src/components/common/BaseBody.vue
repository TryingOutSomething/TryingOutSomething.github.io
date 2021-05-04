<template>
  <v-container class="pa-0" fluid>
    <v-card elevation="0" v-bind="$attrs" v-on="$listeners">
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
