<template>
  <v-row justify="center">
    <v-col v-if="isMobileScreen">
      <h1 class="hero-title custom-white">Hello There</h1>

      <v-row justify="center">
        <v-col sm="2" cols="3">
          <h1
            class="hero-title custom-white mb-8 mt-4"
            :class="showAnimation"
            v-observe-visibility="trackViewportVisibilityConfig"
          >
            👋
          </h1>
        </v-col>
      </v-row>
    </v-col>

    <div v-else class="d-inline-flex">
      <h1 class="hero-title custom-white mb-md-12">Hello There</h1>
      <h1
        class="hero-title custom-white mb-12"
        :class="showAnimation"
        v-observe-visibility="trackViewportVisibilityConfig"
      >
        👋
      </h1>
    </div>
  </v-row>
</template>

<script>
import { determineElementViewport } from '@/mixins/screen'

export default {
  name: 'HeroTitle',
  mixins: [determineElementViewport],
  props: {
    isMobileScreen: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    showAnimation () {
      return this.toggleAnimationInView('wave-hand')
    }
  }
}
</script>

<style scoped>

</style>
