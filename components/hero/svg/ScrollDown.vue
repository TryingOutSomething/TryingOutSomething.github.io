<template>
  <div>
    <scroll-icon
      :arrow-component-id="arrowComponentId"
      :ellipse-component-id="ellipseComponentId"
      class="hidden md:w-8 lg:w-auto md:flex md:justify-center"
    />
    <scroll-icon-small
      :arrow-component-id="`${arrowComponentId}Small`"
      :ellipse-component-id="`${ellipseComponentId}Small`"
      class="block md:hidden"
    />
  </div>
</template>

<script>
import ScrollIcon from '~/components/hero/svg/ScrollIcon';
import ScrollIconSmall from '~/components/hero/svg/ScrollIconSmall';

export default {
  name: 'ScrollDown',
  components: {
    ScrollIcon,
    ScrollIconSmall,
  },
  props: {
    ellipseComponentId: {
      type: String,
      required: true,
    },
    arrowComponentId: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
</style>
