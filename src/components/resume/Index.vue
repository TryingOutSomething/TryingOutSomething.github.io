<template>
  <content-body :bg-colour="white">
    <template v-slot:title>
      <horizontal-padding height="3rem"/>

      <h1 class="topic-title my-12">Resume</h1>
    </template>

    <template v-slot:pdf-viewer>
      <pdf-renderer :pdf-src="pdfSrc" class="pt-12"/>
    </template>

    <template v-slot:download-button>
      <v-row class="my-12" justify="center">
        <download-resume
          :bg-colour="brown"
          :pdf-src="pdfSrc"
          :txt-colour="white"
        />
      </v-row>

      <horizontal-padding height="3rem"/>
    </template>
  </content-body>
</template>

<script>
import ContentBody from '@/components/resume/ContentBody'
import PdfRenderer from '@/components/resume/PdfRenderer'
import DownloadResume from '@/components/resume/DownloadResume'
import { palette } from '@/mixins/design'

export default {
  name: 'Resume',
  components: {
    DownloadResume,
    PdfRenderer,
    ContentBody
  },
  mixins: [palette],

  data () {
    return {
      pdfSrc: 'resume.pdf'
    }
  }
}
</script>
