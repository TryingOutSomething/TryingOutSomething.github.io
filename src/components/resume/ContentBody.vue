<template>
  <base-body :color="bgColour">
    <slot name="title"/>
    <slot name="pdf-viewer"/>
    <slot name="download-button"/>
  </base-body>
</template>

<script>
import { designProps } from '@/mixins/design'

export default {
  name: 'ContentBody',
  mixins: [designProps]
}
</script>

<style scoped>

</style>
