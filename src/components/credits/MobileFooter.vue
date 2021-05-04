<template>
  <v-col>
    <h3 class="custom-white mobile-footer text-center">Connect with me:</h3>

    <v-row class="mt-5 mb-7" justify="center">
      <base-icon
        :class="iconPaddingBeforeText"
        icon="mdi-email"
        :size="socialIconSize"
      />
      <base-icon
        class="pr-2"
        icon="mdi-github"
        :size="socialIconSize"
      />
      <base-icon
        icon="mdi-linkedin"
        :size="socialIconSize"
      />
    </v-row>

    <h5 class="custom-white mobile-footer text-center">
      © 2021 Jan Owyeong Guo Yong
    </h5>
    <h5 class="mt-1 custom-white mobile-footer text-center">
      Singapore, Singapore
    </h5>

    <v-row class="mt-5" justify="center" align="center">
      <h6 class="custom-white mobile-footer text-center">Created With:</h6>

      <base-icon
        :class="iconPaddingBeforeText"
        icon="mdi-vuejs"
        :size="toolsIconSize"
      />
      <base-icon
        icon="mdi-vuetify"
        :size="toolsIconSize"
      />
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: 'mobile-footer',
  data () {
    return {
      iconPaddingBeforeText: 'px-2',
      socialIconSize: '1.69rem',
      toolsIconSize: '1rem'
    }
  }
}
</script>
