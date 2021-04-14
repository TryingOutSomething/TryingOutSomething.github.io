<template>
  <div>
    <nav-bar :bg-colour="black" :txt-colour="white"/>

    <v-container class="pa-0" fluid>
      <content-body class="pt-12" :bg-colour="black">
        <template v-slot:title>
          <v-row justify="center" class="my-12">
            <h1 class="hero-title font-weight-bold custom-white">
              Hello There 👋
            </h1>
          </v-row>
        </template>

        <template v-slot:subtitle>
          <v-row justify="center" class="mb-12">
            <h1 class="custom-white">I'm Jan Owyeong!</h1>
          </v-row>
        </template>

        <template v-slot:scroll-icon>
          <v-row justify="center" class="pb-12 pt-5">
            <scroll-icon :txt-colour="white"/>
          </v-row>
        </template>
      </content-body>
    </v-container>
  </div>
</template>

<script>
import NavBar from '@/components/hero/navbar/Main'
import ContentBody from '@/components/hero/ContentBody'
import { palette } from '@/mixins/design'
import ScrollIcon from '@/components/hero/svgs/ScrollIcon'

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
