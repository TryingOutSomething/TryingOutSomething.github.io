<template>
  <v-row align="center" justify="space-between">
      <div>
        <span class="footer">Created With:</span>

        <base-icon :class="iconPaddingBeforeText" icon="mdi-vuejs"/>
        <base-icon class="pl-sm-0" icon="mdi-vuetify"/>
      </div>

      <span class="footer">© 2021 Jan Owyeong Guo Yong | Singapore, Singapore</span>

      <div>
        <span class="footer">Connect with me:</span>

        <base-icon :class="iconPaddingBeforeText" icon="mdi-email"/>
        <base-icon class="pr-md-2 px-sm-1" icon="mdi-github"/>
        <base-icon icon="mdi-linkedin"/>
      </div>
  </v-row>
</template>

<script>
export default {
  name: 'DesktopFooter',
  data () {
    return {
      iconPaddingBeforeText: 'px-2 pr-sm-1'
    }
  }
}
</script>
