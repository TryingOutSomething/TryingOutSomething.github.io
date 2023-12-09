<template>
  <!-- Mobile -->
  <div class="text-p-white">
    <client-only>
      <div class="sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-3">
        <p class="text-lg">Connect with me:</p>

        <div class="flex flex-row space-x-3 justify-center my-5">
          <clickable-icon :aria-label="snsLinks.email.ariaLabel" :link="snsLinks.email.url">
            <email-icon/>
          </clickable-icon>
          <clickable-icon :aria-label="snsLinks.github.ariaLabel" :link="snsLinks.github.url">
            <github-icon/>
          </clickable-icon>
          <clickable-icon :aria-label="snsLinks.linkedIn.ariaLabel" :link="snsLinks.linkedIn.url">
            <linkedin-icon/>
          </clickable-icon>
        </div>
      </div>
    </client-only>

    <div class="sm:hidden">
      <div class="text-center text-sm mb-1">{{ credits }}</div>
      <div class="text-center text-sm">{{ location }}</div>
    </div>

    <div class="text-center text-sm hidden sm:block">{{ credits }} | {{ location }}</div>

    <client-only>
      <div class="mt-5 sm:mt-3 text-xs flex flex-row items-center justify-center space-x-2">
        <p class="capitalize">created with:</p>
        <nuxt-icon :size="toolsIconSize"/>
        <tailwind-icon :size="toolsIconSize"/>
      </div>
    </client-only>
  </div>

</template>

<script>
export default {
  name: 'MobileFooter',
  props: {
    snsLinks: {
      type: Object,
      required: true
    },
    toolsIconSize: {
      type: Number,
      default: 24
    },
    credits: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>

</style>
