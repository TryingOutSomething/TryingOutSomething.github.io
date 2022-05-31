<template>
  <div>
    <!--    <scroll-icon class="hidden sm:block mt-36"/>-->
    <scroll-icon class="hidden md:block"/>
    <scroll-icon-small class="block md:hidden"/>
    <!--    <scroll-icon-small class="block sm:hidden mt-12"/>-->
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
