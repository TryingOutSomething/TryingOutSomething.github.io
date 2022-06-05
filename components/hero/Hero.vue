<template>
  <div
    class="bg-p-black flex flex-col
    min-h-screen md:min-h-screen-80 xl:min-h-screen"
  >
    <nav-bar class="bg-p-black"/>

    <div
      class="flex flex-col items-center justify-center
      h-screen md:h-screen-80 xl:h-screen"
    >

      <div class="text-center text-p-white">
        <div class="flex flex-col items-center justify-center sm:flex-row">
          <h1 class="mb-5 sm:mb-10 text-5xl md:text-7xl lg:text-8xl font-bold">
            Hello There!
          </h1>

          <div
            ref="handEmoji"
            class="mb-10
            w-11 sm:w-24 lg:w-32
            text-4xl md:text-7xl lg:text-8xl"
          >
            👋🏻
          </div>
        </div>

        <div class="text-xl md:text-3xl lg:text-4xl">I'm Jan Owyeong!</div>
      </div>

      <scroll-down class="text-p-white flex justify-center mt-10 md:mt-32"/>
    </div>
  </div>
</template>

<script>
import ScrollDown from '~/components/hero/svg/ScrollDown';

export default {
  name: 'NuxtHero',
  components: { ScrollDown },
  data() {
    return {
      animationClassName: 'wave-hand',
      observerOptions: {
        root: null,
        rootMargin: '0px',
        threshold: 0.75
      },
      observer: null
    };
  },
  mounted() {
    const observer = new IntersectionObserver(this.handleAnimationDisplay, this.observerOptions);
    observer.observe(this.$refs.handEmoji);

    this.observer = observer;
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    handleAnimationDisplay(entries, _) {
      entries.forEach(entry => {
        const element = entry.target;

        if (entry.isIntersecting) {
          element.classList.add(this.animationClassName);
        } else {
          element.classList.remove(this.animationClassName);
        }
      });
    }
  }
};
</script>

<style>
.wave-hand {
  animation-name: wave-hand-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
}

@keyframes wave-hand-animation {
  0% {
    transform: rotate(0.0deg)
  }
  10% {
    transform: rotate(14.0deg)
  }
  20% {
    transform: rotate(-8.0deg)
  }
  30% {
    transform: rotate(14.0deg)
  }
  40% {
    transform: rotate(-4.0deg)
  }
  50% {
    transform: rotate(10.0deg)
  }
  60% {
    transform: rotate(0.0deg)
  }
  100% {
    transform: rotate(0.0deg)
  }
}
</style>

