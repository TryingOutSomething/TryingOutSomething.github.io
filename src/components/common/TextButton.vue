<template>
  <base-button v-on="$listeners" text :color="colour">
    <template v-slot:text>
      {{ text }}
    </template>
  </base-button>
</template>

<script>
export default {
  name: 'TextButton',
  props: {
    text: {
      type: String,
      required: true
    },
    colour: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style scoped>

</style>
