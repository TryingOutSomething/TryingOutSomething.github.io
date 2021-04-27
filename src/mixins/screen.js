export const screenSizeIdentifier = {
  computed: {
    isMobileScreen () {
      return this.$vuetify.breakpoint.smAndDown
    },

    isTabletScreen () {
      return this.$vuetify.breakpoint.mdAndDown
    }
  }
}

export const determineElementViewport = {
  data () {
    return {
      elementIsVisible: true
    }
  },

  computed: {
    trackViewportVisibilityConfig () {
      return {
        callback: this.setElementVisibilityInViewport,
        throttle: 1000
      }
    }
  },

  methods: {
    setElementVisibilityInViewport (isVisible) {
      this.elementIsVisible = isVisible
    },

    toggleAnimationInView (animationIdentifier) {
      return this.elementIsVisible ? animationIdentifier : ''
    }
  }
}

export const navbarScrollIds = {
  methods: {
    async scrollToAbout () {
      await this.$vuetify.goTo('#about')
    },
    async scrollToProjects () {
      await this.$vuetify.goTo('#projects')
    },
    async scrollToResume () {
      await this.$vuetify.goTo('#resume')
    }
  }
}
