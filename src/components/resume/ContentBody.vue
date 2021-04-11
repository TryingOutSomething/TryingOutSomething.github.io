<template>
  <base-card>
    <slot name="title"/>
    <slot name="pdf-viewer"/>
    <slot name="download-button"/>
  </base-card>
</template>

<script>
export default {
  name: 'ContentBody'
}
</script>

<style scoped>

</style>
