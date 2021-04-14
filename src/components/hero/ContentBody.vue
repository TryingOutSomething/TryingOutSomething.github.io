<template>
  <base-card :color="bgColour">
    <slot name="title"/>
    <slot name="subtitle"/>
    <slot name="scroll-icon"/>
  </base-card>
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
