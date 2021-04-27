export const screenSizeIdentifier = {
  computed: {
    isMobileScreen () {
      return this.$vuetify.breakpoint.xs
    },

    isMobileDevice () {
      return this.$vuetify.breakpoint.mobile
    },

    isTabletScreen () {
      return this.$vuetify.breakpoint.smAndUp
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
