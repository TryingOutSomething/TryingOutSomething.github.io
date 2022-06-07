<template>
  <div id="about" class="bg-p-white flex min-h-screen flex-col items-center justify-center">
    <div class="space-y-10 sm:space-y-24">
      <h1
        class="text-center uppercase font-black
        text-4xl mt-20
        sm:text-5xl md:mt-10"
      >
        about me
      </h1>

      <p class="px-12 sm:px-20 xl:px-72 2xl:px-96 sm:text-xl text-center sm:text-left">
        I’m a computer science student at Nanyang Technological University
        that does random projects during my free time. I love to try out new technologies that increase my work
        productivity and reading blog articles about tech-related implementations. I am eager to gain practical
        experience and apply the theory techniques learnt in school to build software.
      </p>

      <div class="px-12 sm:px-20 xl:px-80 2xl:px-128">
        <h2 class="my-10 text-xl sm:text-2xl text-center sm:text-left font-bold">Skills accumulated:</h2>

        <div
          class="mb-24 lg:mb-0 xl:mb-5 2xl:mb-0
          grid place-items-center gap-3
          grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        >
          <img
            v-for="(logo, i) in logoNames"
            :key="i"
            :alt="logo.alt"
            :src="require(`~/assets/images/${logo.name}`)"
            class="max-h-24 lg:max-h-20 xl:max-h-24"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtAbout',
  data() {
    return {
      logoNames: [
        { name: 'python_logo.png', alt: 'Python Logo' },
        { name: 'js_logo.png', alt: 'Javascript Logo' },
        { name: 'java_logo.png', alt: 'Java Logo' },
        { name: 'nodejs_logo.png', alt: 'NodeJS Logo' },
        { name: 'spring_logo.svg', alt: 'Spring Logo' },
        { name: 'vuejs_logo.png', alt: 'VueJS Logo' },
        { name: 'firebase_logo.png', alt: 'Firebase Logo' },
        { name: 'mysql_logo.png', alt: 'MySQL Logo' },
        { name: 'mongodb_logo.png', alt: 'MongoDB Logo' },
        { name: 'git_logo.png', alt: 'Git Logo' }
      ]
    };
  }
};
</script>

<style scoped>

</style>
