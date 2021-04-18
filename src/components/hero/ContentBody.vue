<template>
    <base-body :color="bgColour">
      <v-col>
        <slot name="title"/>
        <slot name="subtitle"/>
        <slot name="scroll-icon"/>
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
