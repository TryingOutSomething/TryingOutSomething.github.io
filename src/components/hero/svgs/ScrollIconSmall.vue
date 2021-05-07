<template>
  <svg width="30" height="93" viewBox="0 0 30 93" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="scroll-icon-small">
      <path
        :id="arrowId"
        d="M13.9393 92.0607C14.5251 92.6464 15.4749 92.6464 16.0607 92.0607L25.6066 82.5147C26.1924 81.9289 26.1924 80.9792 25.6066 80.3934C25.0208 79.8076 24.0711 79.8076 23.4853 80.3934L15 88.8787L6.51472 80.3934C5.92893 79.8076 4.97918 79.8076 4.3934 80.3934C3.80761 80.9792 3.80761 81.9289 4.3934 82.5147L13.9393 92.0607ZM13.5 90V91H16.5V90H13.5Z"
        :fill="txtColour"/>
      <rect id="curved-body" x="1.5" y="1.5" width="27" height="47" rx="3.5" stroke="#F9F9F9" stroke-width="3"/>
      <circle
        :id="scrollId"
        cx="15" cy="34" r="9" :fill="txtColour"/>
    </g>
  </svg>

</template>

<script>
import { designProps } from '@/mixins/design'
import { scrollAnimationProps } from '@/mixins/screen'

export default {
  name: 'ScrollIconSmall',
  mixins: [designProps, scrollAnimationProps]
}
</script>

<style scoped>

</style>
