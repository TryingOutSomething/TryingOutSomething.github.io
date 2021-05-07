<template>
  <div>
    <nav-bar :bg-colour="black" :is-mobile-screen="isMobileScreen"/>

    <content-body :bg-colour="black" rounded="0">
      <template v-slot:title>
        <horizontal-padding :height="horizontalPaddingHeight"/>

        <hero-title :is-mobile-screen="isMobileScreen"/>
      </template>

      <template v-slot:subtitle>
        <h1 class="hero-subtitle custom-white text-center mb-12">I'm Jan Owyeong!</h1>
      </template>

      <template v-slot:scroll-icon>
        <v-row justify="center" class="pb-12 mb-5 pt-5">
          <scroll-icon-small
            v-if="isMobileDevice"
            :txt-colour="white"
            :arrow-id="toggleUseArrowAnimation"
            :scroll-id="toggleUseEllipseSmallAnimation"
            v-observe-visibility="trackViewportVisibilityConfig"
          />

          <scroll-icon
            v-else
            :txt-colour="white"
            :arrow-id="toggleUseArrowAnimation"
            :scroll-id="toggleUseEllipseAnimation"
            v-observe-visibility="trackViewportVisibilityConfig"
          />
        </v-row>
      </template>
    </content-body>
  </div>
</template>

<script>
import { palette } from '@/mixins/design'
import { determineElementViewport, screenSizeIdentifier } from '@/mixins/screen'

export default {
  name: 'Hero',
  components: {
    ScrollIcon: () => import('./svgs/ScrollIcon'),
    ScrollIconSmall: () => import('./svgs/ScrollIconSmall'),
    ContentBody: () => import('./ContentBody'),
    NavBar: () => import('./NavBar'),
    HeroTitle: () => import('./HeroTitle')
  },
  mixins: [palette, screenSizeIdentifier, determineElementViewport],

  computed: {
    horizontalPaddingHeight () {
      return this.isMobileScreen ? '1rem' : '10rem'
    },

    toggleUseEllipseAnimation () {
      return this.toggleAnimationInView('ellipse-wheel')
    },
    toggleUseEllipseSmallAnimation () {
      return this.toggleAnimationInView('ellipse-wheel-small')
    },
    toggleUseArrowAnimation () {
      return this.toggleAnimationInView('scroll-down-arrow')
    }
  }
}
</script>

<style scoped>

</style>
