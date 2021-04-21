<template>
  <v-footer :color="black" class="py-6">
    <content-body class="px-12">
      <template v-slot:tools-used>
        <div>
          <span class="footer">Created With:</span>

          <footer-icons :class="iconPaddingBeforeText" icon="mdi-vuejs"/>
          <footer-icons icon="mdi-vuetify"/>
        </div>
      </template>

      <template v-slot:copyright>
        <span class="footer">© 2021 Jan Owyeong Guo Yong | Singapore, Singapore</span>
      </template>

      <template v-slot:contact>
        <div>
          <span class="footer">Connect with me:</span>

          <footer-icons :class="iconPaddingBeforeText" icon="mdi-email"/>
          <footer-icons class="pr-2" icon="mdi-github"/>
          <footer-icons icon="mdi-linkedin"/>
        </div>
      </template>
    </content-body>
  </v-footer>
</template>

<script>
import { palette } from '@/mixins/design'

export default {
  name: 'Credits',
  components: {
    FooterIcons: () => import('./FooterIcons'),
    ContentBody: () => import('./ContentBody')
  },
  mixins: [palette],
  data () {
    return {
      iconPaddingBeforeText: 'px-2'
    }
  }
}
</script>

<style scoped>

</style>
