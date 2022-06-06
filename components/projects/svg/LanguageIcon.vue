<template>
  <svg :height="height" :width="width" fill="none" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
    <circle id="language-logo" :fill="fillColour" cx="8.5" cy="8.50195" r="8.5"/>
  </svg>
</template>

<script>
export default {
  name: 'LanguageIcon',
  props: {
    width: {
      type: Number,
      default: 12
    },
    height: {
      type: Number,
      default: 12
    },
    fillColour: {
      type: String,
      default: '#C4C4C4'
    }
  }
};
</script>

<style scoped>

</style>
