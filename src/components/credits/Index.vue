<template>
  <v-footer :color="black" class="py-6">
    <content-body class="mx-12 px-12">
      <template v-slot:tools-used>
        <div>
          <span class="footer">Created With:</span>

          <base-icon :class="iconPaddingBeforeText" icon="mdi-vuejs"/>
          <base-icon icon="mdi-vuetify"/>
        </div>
      </template>

      <template v-slot:copyright>
        <span class="footer">© 2021 Jan Owyeong Guo Yong | Singapore, Singapore</span>
      </template>

      <template v-slot:contact>
        <div>
          <span class="footer">Connect with me:</span>

          <base-icon :class="iconPaddingBeforeText" icon="mdi-email"/>
          <base-icon class="pr-2" icon="mdi-github"/>
          <base-icon icon="mdi-linkedin"/>
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
