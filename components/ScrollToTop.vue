<template>
  <client-only>
    <div
      class="fixed bottom-5 right-5 hidden lg:block"
    >
      <Transition name="inflate">
        <button
          v-show="hasScrolledDown"
          class="flex items-center justify-center
          rounded-full text-white
          shadow-md hover:shadow-lg
          bg-p-gray hover:bg-gray-400
          w-16 h-16"
          @click="scrollToTop"
        >
          <chevron-up-icon :size="iconSize"/>
        </button>
      </Transition>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      iconSize: 32,
      hasScrolledDown: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.watchScrollDistance);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.watchScrollDistance);
  },
  methods: {
    watchScrollDistance() {
      if (window === undefined) {
        return;
      }

      const yScrollDistance = window.scrollY || document.documentElement.offsetTop || 0;

      this.hasScrolledDown = yScrollDistance > 200;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
.inflate-enter-active {
  animation: ease-in inflate 0.1s;
}

.inflate-leave-active {
  animation: ease-in inflate 0.1s reverse;
}

@keyframes inflate {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(100%);
  }
}
</style>
