<template>
  <a :download="pdfSrc" :href="pdfSrc" class="download-button">
    <base-button :color="bgColour" class="px-12 py-7" x-large>
      <template v-slot:text>
        <v-icon
          :color="txtColour"
          class="pr-2"
        >
          mdi-file-pdf
        </v-icon>

        <span class="mt-1 custom-white">Download</span>
      </template>
    </base-button>
  </a>
</template>
<script>
import { designProps } from '@/mixins/design'

export default {
  name: 'DownloadResume',
  props: {
    pdfSrc: {
      type: String,
      required: true
    }
  },
  mixins: [designProps]
}
</script>
