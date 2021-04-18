<template>
  <v-card :height="height" color="transparent" elevation="0"/>
</template>

<script>
export default {
  name: 'HorizontalPadding',
  props: {
    height: {
      type: String,
      default: '10rem'
    }
  }
}
</script>

<style scoped>

</style>
