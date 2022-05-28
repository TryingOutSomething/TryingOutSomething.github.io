<template>
  <div>
    <scroll-icon class="hidden sm:block"/>
    <scroll-icon-small class="block sm:hidden mt-12"/>
  </div>
</template>

<script>
import ScrollIcon from '~/components/hero/svg/ScrollIcon';
import ScrollIconSmall from '~/components/hero/svg/ScrollIconSmall';

export default {
  name: 'ScrollDown',
  components: {
    ScrollIcon,
    ScrollIconSmall
  }
};
</script>

<style scoped>

</style>
