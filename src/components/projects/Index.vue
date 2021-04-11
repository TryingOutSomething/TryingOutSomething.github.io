<template>
  <v-container fluid>
    <v-row justify="center">
      <content-body>
        <template v-slot:title>
          Projects Created
        </template>

        <template v-slot:projects>
          <p>projects...</p>
        </template>
      </content-body>
    </v-row>
  </v-container>
</template>

<script>
import ContentBody from '@/components/projects/ContentBody'

export default {
  name: 'Projects',
  components: { ContentBody }
}
</script>

<style scoped>

</style>
