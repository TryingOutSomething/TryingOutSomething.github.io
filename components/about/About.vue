<template>
  <div class="bg-p-white flex min-h-screen flex-col items-center justify-center">
    <div>
      <h1 class="my-10 text-center uppercase">about me</h1>
      <p class="px-20 xl:px-72">I’m a computer science student at Nanyang Technological University that does random
        projects during my free time. I love to try out new technologies that increase my work productivity and reading
        blog articles about tech-related implementations. I am eager to gain practical experience and apply the theory
        techniques learnt in school to build software.</p>

      <div class="px-20 xl:px-96 border">
        <h2 class="mt-10 mb-5">Skills accumulated:</h2>
        <div
          class="grid place-items-center gap-3
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-8">
          <img alt="Python Logo" class="h-24 border-2 border-2" src="~/assets/images/python_logo.png"/>
          <img alt="Javascript Logo" class="h-24 border-2" src="~/assets/images/js_logo.png"/>
          <img alt="Java Logo" class="h-24 border-2" src="~/assets/images/java_logo.png"/>
          <img alt="NodeJS Logo" class="h-24 border-2" src="~/assets/images/nodejs_logo.png"/>
          <img alt="Spring Logo" class="h-24 border-2" src="~/assets/images/spring_logo.svg"/>
          <img alt="VueJS Logo" class="h-24 border-2" src="~/assets/images/vuejs_logo.png"/>
          <img alt="Firebase Logo" class="h-24 border-2" src="~/assets/images/firebase_logo.png"/>
          <img alt="MySQL Logo" class="h-24 border-2" src="~/assets/images/mysql_logo.png"/>
          <img alt="MongoDB Logo" class="h-24 border-2" src="~/assets/images/mongodb_logo.png"/>
          <img alt="Git Logo" class="h-24 border-2" src="~/assets/images/git_logo.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtAbout'
};
</script>

<style scoped>

</style>
