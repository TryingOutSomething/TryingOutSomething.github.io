<template>
  <a :download="pdfSrc" :href="pdfSrc" class="download-button">
    <text-button
      x-large
      :color="bgColour"
      class="px-12 py-7"
      icon-name="mdi-file-pdf"
      text="Download"
      text-classes="mt-1 custom-white"
    />
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
