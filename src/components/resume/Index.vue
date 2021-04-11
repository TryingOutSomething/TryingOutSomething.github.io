<template>
  <v-container fluid>
    <v-row justify="center">
      <content-body>
        <template v-slot:title>
          <p>Resume</p>
        </template>

        <template v-slot:pdf-viewer>
          <p>view pdf resume</p>
        </template>

        <template v-slot:download-button>
          <p>download resume</p>
        </template>
      </content-body>
    </v-row>
  </v-container>
</template>

<script>
import ContentBody from '@/components/resume/ContentBody'

export default {
  name: 'Resume',
  components: { ContentBody }
}
</script>

<style scoped>

</style>
