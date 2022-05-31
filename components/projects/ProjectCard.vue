<template>
  <div class="bg-p-white flex flex-col px-5 md:max-w-sm rounded">
    <h3 class="py-7 capitalize text-lg sm:text-xl">{{ projectTitle }}</h3>
    <p class="font-light text-sm sm:text-base flex-grow">{{ projectDescription }}</p>
    <!-- language -->
    <div class="flex flex-row justify-between pt-12 pb-5 items-center">
      <div class="flex flex-row space-x-2.5 items-center">
        <language-icon :fill-colour="projectLanguageColour"/>
        <span class="font-light text-xs sm:text-sm">{{ projectLanguage }}</span>
      </div>

      <client-only>
        <div class="flex flex-row space-x-3 items-center">
          <clickable-icon :link="projectGitUrl">
            <github-icon v-if="hasGitUrl" :fill-color="linkFillColor" :size="iconSize"/>
          </clickable-icon>

          <clickable-icon :link="projectDemoUrl">
            <web-icon v-if="hasProjectDemoUrl" :fill-color="linkFillColor"/>
          </clickable-icon>
        </div>
      </client-only>
    </div>
  </div>
</template>
<script>
import LanguageIcon from '~/components/projects/svg/LanguageIcon';

export default {
  name: 'ProjectCard',
  components: { LanguageIcon },
  props: {
    projectInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      iconSize: 24,
      linkFillColor: '#19191a'
    };
  },
  computed: {
    projectTitle() {
      return this.projectInfo.project_name;
    },
    projectDescription() {
      return this.projectInfo.description;
    },
    projectLanguage() {
      return this.projectInfo.language;
    },
    projectLanguageColour() {
      return this.projectInfo.language_colour;
    },
    projectGitUrl() {
      return this.projectInfo.github_url;
    },
    projectDemoUrl() {
      return this.projectInfo.demo_url;
    },
    hasProjectDemoUrl() {
      return this.projectInfo.demo_url !== null &&
        this.projectInfo.demo_url !== undefined;
    },
    hasGitUrl() {
      return this.projectInfo.github_url !== null &&
        this.projectInfo.github_url !== undefined;
    }
  },
};
</script>
