<template>
  <v-col>
    <h3 class="custom-white mobile-footer text-center">{{ content.socials.title }}</h3>

    <v-row class="mt-5 mb-7" justify="center">
      <a :href="content.socials.platform[0].url" target="_blank">
        <base-icon
          :class="iconPaddingBeforeText"
          :icon="content.socials.platform[0].icon"
          :size="socialIconSize"
        />
      </a>
      <a :href="content.socials.platform[1].url" target="_blank">
        <base-icon
          class="pr-2"
          :icon="content.socials.platform[1].icon"
          :size="socialIconSize"
        />
      </a>
      <a :href="content.socials.platform[2].url" target="_blank">
        <base-icon
          :icon="content.socials.platform[2].icon"
          :size="socialIconSize"
        />
      </a>
    </v-row>

    <h5 class="custom-white mobile-footer text-center">
      {{ content.copyright.mobile.author }}
    </h5>
    <h5 class="mt-1 custom-white mobile-footer text-center">
      {{ content.copyright.mobile.location }}
    </h5>

    <v-row class="mt-5" justify="center" align="center">
      <h6 class="custom-white mobile-footer text-center">{{ content.toolsCreated.title }}</h6>

      <base-icon
        :class="iconPaddingBeforeText"
        :icon="content.toolsCreated.tools[0].icon"
        :size="toolsIconSize"
      />
      <base-icon
        :icon="content.toolsCreated.tools[1].icon"
        :size="toolsIconSize"
      />
    </v-row>
  </v-col>
</template>

<script>
import { staticContent } from '@/configs/footer'

export default {
  name: 'mobile-footer',
  data () {
    return {
      iconPaddingBeforeText: 'px-2',
      socialIconSize: '1.69rem',
      toolsIconSize: '1rem',
      content: staticContent
    }
  }
}
</script>
