<template>
  <div class="text-p-white text-xs">
    <client-only>
      <div class="flex flex-row space-x-2.5 items-center justify-center">
        <div class="capitalize font-light">created with:</div>
        <nuxt-icon title="Nuxt"/>
        <tailwind-icon title="TailWind"/>
      </div>
    </client-only>

    <div>{{ credits }} | {{ location }}</div>

    <client-only>
      <div class="flex flex-row space-x-2.5 items-center justify-center">
        <div>Connect with me:</div>
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
    </client-only>
  </div>
</template>
<script>
export default {
  name: 'DesktopFooter',
  props: {
    snsLinks: {
      type: Object,
      required: true
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
