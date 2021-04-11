<template>
  <div>
    <nav-bar/>

    <v-container fluid>
      <v-row justify="center">
        <hero-content>
          <template v-slot:title>
            <p>Hello There 👋</p>
          </template>

          <template v-slot:subtitle>
            <p>I'm Jan Owyeong!</p>
          </template>

          <template v-slot:scroll-icon>
            <p>scroll svg</p>
          </template>
        </hero-content>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from '@/components/hero/navbar/Main'
import HeroContent from '@/components/hero/ContentBody'

export default {
  name: 'Hero',
  components: {
    HeroContent,
    NavBar
  }
}
</script>

<style scoped>

</style>
