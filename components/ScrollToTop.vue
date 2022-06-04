<template>
  <client-only>
    <div class="fixed bottom-5 right-5">
      <button
        class="flex items-center justify-center
        rounded-full text-white
        shadow-md hover:shadow-lg
        bg-p-gray hover:bg-gray-400
        w-16 h-16">
        <chevron-up-icon :size="iconSize"/>
      </button>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      iconSize: 32
    };
  }
};
</script>

<style scoped>

</style>
