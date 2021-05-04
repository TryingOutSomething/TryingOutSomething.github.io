<template>
  <v-btn v-on="$listeners" v-bind="$attrs">
    <base-icon
      v-if="iconName"
      :icon="iconName"
      :class="iconClasses"/>

    <span :class="textClasses">{{ text }}</span>
  </v-btn>
</template>

<script>
export default {
  name: 'TextButton',
  props: {
    iconClasses: {
      type: String,
      default: 'mr-2'
    },
    iconName: {
      type: String,
      default: undefined
    },
    textClasses: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
