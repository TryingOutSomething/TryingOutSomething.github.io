<template>
  <base-card :color="bgColour">
    <v-container fluid>
      <v-row>
        <slot/>

        <v-col>
          <slot name="title"/>
          <slot name="subtitle"/>
          <slot name="scroll-icon"/>
        </v-col>
      </v-row>
    </v-container>
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
