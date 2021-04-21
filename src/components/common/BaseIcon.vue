<template>
  <v-icon :color="white" :size="size">{{ icon }}</v-icon>
</template>

<script>
import { palette } from '@/mixins/design'

export default {
  name: 'BaseIcon',
  props: {
    size: {
      type: String,
      default: '1.25rem'
    },
    icon: {
      type: String,
      required: true
    }
  },
  mixins: [palette]
}
</script>

<style scoped>

</style>
