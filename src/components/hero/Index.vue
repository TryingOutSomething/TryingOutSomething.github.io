<template>
  <div>
    <nav-bar :bg-colour="black" :txt-colour="white"/>

    <content-body :bg-colour="black">
      <template v-slot:title>
        <horizontal-padding/>

        <v-row justify="center">
          <h1 class="hero-title custom-white mb-12">Hello There</h1>
          <h1 class="hero-title custom-white mb-12 wave-hand">👋</h1>
        </v-row>
      </template>

      <template v-slot:subtitle>
        <h1 class="custom-white text-center mb-12">I'm Jan Owyeong!</h1>
      </template>

      <template v-slot:scroll-icon>
        <v-row justify="center" class="pb-12 mb-5 pt-5">
          <scroll-icon :txt-colour="white"/>
        </v-row>
      </template>
    </content-body>
  </div>
</template>

<script>
import { palette } from '@/mixins/design'

export default {
  name: 'Hero',
  components: {
    ScrollIcon: () => import('@/components/hero/svgs/ScrollIcon'),
    ContentBody: () => import('@/components/hero/ContentBody'),
    NavBar: () => import('@/components/hero/navbar/Main')
  },
  mixins: [palette]
}
</script>

<style scoped>

</style>
