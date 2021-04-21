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
          :pdf-src="pdfSrc"
          :bg-colour="brown"
          :txt-colour="white"
        />
      </v-row>

      <horizontal-padding height="3rem"/>
    </template>
  </content-body>
</template>

<script>
import { palette } from '@/mixins/design'

export default {
  name: 'Resume',
  components: {
    DownloadResume: () => import('@/components/resume/DownloadResume'),
    PdfRenderer: () => import('@/components/resume/PdfRenderer'),
    ContentBody: () => import('@/components/resume/ContentBody')
  },
  mixins: [palette],

  data () {
    return {
      pdfSrc: 'Jan_Owyeong_Resume_2021.pdf'
    }
  }
}
</script>
