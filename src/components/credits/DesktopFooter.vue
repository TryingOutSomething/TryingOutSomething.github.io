<template>
  <v-row align="center" justify="space-between">
    <div>
      <span class="footer">{{ content.toolsCreated.title }}</span>

      <base-icon
        :class="iconPaddingBeforeText"
        :icon="content.toolsCreated.tools[0].icon"
        :title="content.toolsCreated.tools[0].alt"
      />
      <base-icon
        :icon="content.toolsCreated.tools[1].icon"
        :title="content.toolsCreated.tools[1].alt"
        class="pl-sm-0"/>
    </div>

    <span class="footer">{{ content.copyright.desktop }}</span>

    <div>
      <span class="footer">{{ content.socials.title }}</span>

      <a :href="content.socials.platform[0].url" aria-label="Email" rel="noopener noreferrer" target="_blank">
        <base-icon :class="iconPaddingBeforeText" :icon="content.socials.platform[0].icon"/>
      </a>
      <a :href="content.socials.platform[1].url" aria-label="Github" rel="noopener noreferrer" target="_blank">
        <base-icon class="pr-md-2 px-sm-1" :icon="content.socials.platform[1].icon"/>
      </a>
      <a :href="content.socials.platform[2].url" aria-label="Linkedin" rel="noopener noreferrer" target="_blank">
        <base-icon :icon="content.socials.platform[2].icon"/>
      </a>
    </div>
  </v-row>
</template>

<script>
import { staticContent } from '@/configs/footer'

export default {
  name: 'DesktopFooter',
  data () {
    return {
      iconPaddingBeforeText: 'px-2 pr-sm-1',
      content: staticContent
    }
  }
}
</script>
