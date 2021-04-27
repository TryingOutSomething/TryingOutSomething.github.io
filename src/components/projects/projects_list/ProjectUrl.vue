<template>
  <v-overlay v-if="onHover" absolute>
    <v-col>
      <v-row :class="hasDemoUrlAddPadding" justify="center">
        <a :href="gitUrl" target="_blank">
          <base-button class="py-6 align-center">
            <template v-slot:text>
              <base-icon icon="mdi-github" class="mr-2"/>

              <span class="hover-button-text">View on Github</span>
            </template>
          </base-button>
        </a>
      </v-row>

      <v-row v-if="projectUrl" class="mt-4" justify="center">
        <a :href="projectUrl" target="_blank">
          <base-button class="px-9 py-6" :color="yellow">
            <template v-slot:text>
              <span class="custom-black hover-button-text">View Project</span>
            </template>
          </base-button>
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
