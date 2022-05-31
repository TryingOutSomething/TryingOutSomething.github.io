<template>
  <a :href="link" rel="noopener noreferrer" target="_blank">
    <slot/>
  </a>
</template>

<script>
export default {
  name: 'ClickableIcon',
  props: {
    link: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped>

</style>
