<template>
  <content-body id="about" rounded="0" :bg-colour="white">
    <template v-slot:title>
      <horizontal-padding height="3rem"/>

      <h1 class="topic-title my-12">
        About Me
      </h1>
    </template>

    <template v-slot:description>
      <v-row justify="center">
        <v-col sm="9" cols="10">
          <h3 class="text-sm-justify about-description mb-12 mt-sm-12">
            I’m a computer science student at Nanyang Technological University that does random projects during my free
            time. I love to try out new technologies that increase my work productivity and reading blog articles about
            tech-related implementations. I am eager to gain practical experience and apply the theory techniques learnt
            in school to build software.
          </h3>
        </v-col>
      </v-row>
    </template>

    <template v-slot:skill-icons>
      <v-row justify="center">
        <v-col lg="7" md="9" sm="11" cols="11">
          <v-col offset-sm="1" class="pl-sm-10 pl-md-11">
            <h2 class="mb-7 mt-5 subtitle-bold">
              Skills accumulated:
            </h2>
          </v-col>

          <skills-logo/>
        </v-col>
      </v-row>

      <horizontal-padding/>
    </template>
  </content-body>
</template>

<script>
import { palette } from '@/mixins/design'

export default {
  name: 'About',
  components: {
    SkillsLogo: () => import('@/components/about/SkillsLogo'),
    ContentBody: () => import('@/components/about/ContentBody')
  },
  mixins: [palette]
}
</script>

<style scoped>

</style>
