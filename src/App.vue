<template>
  <v-app>
    <main>
      <Portfolio/>
    </main>
  </v-app>
</template>

<script>
import Portfolio from '@/views/Portfolio'

export default {
  name: 'App',
  components: {
    Portfolio
  }
}
</script>

<style lang="scss">
@import "./style/index";
</style>
