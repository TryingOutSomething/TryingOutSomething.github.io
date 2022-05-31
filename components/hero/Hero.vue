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
        <h1 class="mb-5 sm:mb-10 text-5xl md:text-7xl lg:text-8xl font-bold">
          Hello There!
          <span class="hidden sm:inline">👋🏻</span>
        </h1>

        <div class="text-4xl mb-10 sm:hidden block">👋🏻</div>

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
  components: { ScrollDown }
};
</script>

