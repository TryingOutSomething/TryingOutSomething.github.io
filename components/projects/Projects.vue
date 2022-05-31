<template>
  <div id="projects" class="bg-p-black flex min-h-screen flex-col items-center justify-center">
    <div class="space-y-20 my-20">
      <h1 class="text-p-white text-center uppercase font-black text-4xl sm:text-5xl">
        projects created
      </h1>

      <div class="px-10 2xl:px-96">
        <div class="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <project-card v-for="i in 8" :key="i" :project-info="project"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '~/components/projects/ProjectCard';

export default {
  name: 'NuxtProjects',
  components: {
    ProjectCard
  },
  data() {
    return {
      project: {
        title: 'multi-disciplinary projects',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        language: 'language',
        languageColour: '#c4c4c4',
        gitUrl: 'https://www.google.com.sg',
        projectUrl: 'https://www.github.com'
      }
    };
  }
};
</script>

