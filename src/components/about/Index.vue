<template>
  <v-container fluid>
    <v-row justify="center">
      <content-body>
        <template v-slot:title>
          <p>About Me</p>
        </template>

        <template v-slot:description>
          <p>description</p>
        </template>

        <template v-slot:skill-icons>
          <p>Skills accumulated:</p>
          <p>icons</p>
        </template>
      </content-body>
    </v-row>
  </v-container>
</template>

<script>
import ContentBody from '@/components/about/ContentBody'

export default {
  name: 'About',
  components: { ContentBody }
}
</script>

<style scoped>

</style>
