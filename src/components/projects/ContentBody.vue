<template>
  <base-body :color="bgColour">
    <v-col>
      <slot name="title"/>
      <slot name="projects"/>
    </v-col>
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
