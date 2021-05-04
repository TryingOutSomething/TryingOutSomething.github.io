<template>
  <v-footer :color="black" class="py-6">
    <mobile-footer v-if="isMobileScreen"/>

    <desktop-footer v-else class="mx-md-12 px-md-12 px-sm-11"/>
  </v-footer>
</template>

<script>
import { palette } from '@/mixins/design'
import { screenSizeIdentifier } from '@/mixins/screen'
import MobileFooter from '@/components/credits/MobileFooter'

export default {
  name: 'Credits',
  components: {
    MobileFooter,
    DesktopFooter: () => import('./DesktopFooter')
  },
  mixins: [palette, screenSizeIdentifier]
}
</script>
