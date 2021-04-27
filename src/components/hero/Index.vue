<template>
  <div>
    <nav-bar :bg-colour="black" :txt-colour="white" :is-mobile-screen="isMobileScreen"/>

    <content-body :bg-colour="black">
      <template v-slot:title>
        <horizontal-padding :height="horizontalPaddingHeight"/>

        <hero-title :is-mobile-screen="isMobileScreen"/>
      </template>

      <template v-slot:subtitle>
        <h1 class="hero-subtitle custom-white text-center mb-12">I'm Jan Owyeong!</h1>
      </template>

      <template v-slot:scroll-icon>
        <v-row justify="center" class="pb-12 mb-5 pt-5">
          <scroll-icon-small v-if="isMobileDevice" :txt-colour="white" />

          <scroll-icon v-else :txt-colour="white"/>
        </v-row>
      </template>
    </content-body>
  </div>
</template>

<script>
import { palette } from '@/mixins/design'
import { screenSizeIdentifier } from '@/mixins/screen'

export default {
  name: 'Hero',
  components: {
    ScrollIcon: () => import('./svgs/ScrollIcon'),
    ScrollIconSmall: () => import('./svgs/ScrollIconSmall'),
    ContentBody: () => import('./ContentBody'),
    NavBar: () => import('./NavBar'),
    HeroTitle: () => import('./HeroTitle')
  },
  mixins: [palette, screenSizeIdentifier],

  computed: {
    horizontalPaddingHeight () {
      return this.isMobileScreen ? '1rem' : '10rem'
    }
  }
}
</script>

<style scoped>

</style>
