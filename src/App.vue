<template>
  <v-app>
    <main>
      <Portfolio/>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    Portfolio: () => import('@/views/Portfolio')
  }
}
</script>

<style lang="scss">
@import "./style/index";
</style>
