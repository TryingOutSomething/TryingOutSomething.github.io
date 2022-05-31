<template>
  <a :aria-label="ariaLabel" :href="link" rel="noopener noreferrer" target="_blank">
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
    },
    ariaLabel: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped>

</style>
