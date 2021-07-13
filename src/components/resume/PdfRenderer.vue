<template>
  <v-row justify="center">
    <object
      aria-label="Resume"
      :data="pdfSrc"
      class="pdf-display"
      type="application/pdf"/>
  </v-row>
</template>
<script>
export default {
  name: 'PdfRenderer',
  props: {
    pdfSrc: {
      type: String,
      required: true
    }
  }
}
</script>
