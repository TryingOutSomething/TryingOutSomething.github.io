<template>
  <v-footer>
    <content-body>
      <template v-slot:tools-used>
        <p>Created With:</p>
      </template>

      <template v-slot:copyright>
        <p>copyright</p>
      </template>

      <template v-slot:contact>
        <p>Connect with me:</p>
      </template>
    </content-body>
  </v-footer>
</template>

<script>
import ContentBody from '@/components/credits/ContentBody'

export default {
  name: 'Credits',
  components: { ContentBody }
}
</script>

<style scoped>

</style>
