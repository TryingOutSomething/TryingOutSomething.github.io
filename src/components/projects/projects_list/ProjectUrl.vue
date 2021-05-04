<template>
  <v-overlay v-if="false" absolute opacity="0.7">
    <v-col>
      <v-row :class="hasDemoUrlAddPadding" justify="center">
        <a :href="gitUrl" target="_blank">
          <text-button
            class="py-6 align-center"
            icon-name="mdi-github"
            text="View on Github"
            text-classes="hover-button-text"
          />
        </a>
      </v-row>

      <v-row v-if="projectUrl" class="mt-4" justify="center">
        <a :href="projectUrl" target="_blank">
          <text-button
            class="px-9 py-6" :color="yellow"
            text="View Project"
            text-classes="custom-black hover-button-text"
          />
        </a>
      </v-row>
    </v-col>
  </v-overlay>
</template>
<script>
import { palette } from '@/mixins/design'

export default {
  name: 'ProjectUrl',
  mixins: [palette],
  props: {
    onHover: {
      type: Boolean,
      required: true
    },

    gitUrl: {
      type: String,
      required: true
    },

    projectUrl: {
      type: String
    }
  },

  computed: {
    hasDemoUrlAddPadding () {
      return this.projectUrl ? 'mb-4' : ''
    }
  }
}
</script>
