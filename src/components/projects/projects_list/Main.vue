<template>
  <v-col xl="7" lg="8" md="9" sm="11" cols="11">
    <v-row>
      <v-col v-for="i in 10" :key="i" sm="4">
        <project-card
          class="mb-sm-3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          language="Language"
          title="Project 1"
          git-url="https://google.com.sg"
          project-url="https://google.com.sg"
        />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'ProjectList',
  components: { ProjectCard: () => import('./ProjectCard') }
}
</script>
