<template>
  <div>
    <nav-bar :bg-colour="black" :txt-colour="white"/>

    <content-body :bg-colour="black">

      <template v-slot:title>
        <horizontal-padding/>

        <h1 class="hero-title custom-white mb-12">
          Hello There 👋
        </h1>
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
import NavBar from '@/components/hero/navbar/Main'
import ContentBody from '@/components/hero/ContentBody'
import ScrollIcon from '@/components/hero/svgs/ScrollIcon'
import { palette } from '@/mixins/design'

export default {
  name: 'Hero',
  components: {
    ScrollIcon,
    ContentBody,
    NavBar
  },
  mixins: [palette]
}
</script>

<style scoped>

</style>
