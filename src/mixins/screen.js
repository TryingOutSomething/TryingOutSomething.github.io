export const screenSizeIdentifier = {
  computed: {
    isMobileDevice () {
      return this.$vuetify.breakpoint.mobile
    },

    isMobileScreen () {
      return this.$vuetify.breakpoint.xsOnly
    },

    isTabletScreen () {
      return this.$vuetify.breakpoint.smOnly
    },

    isMediumDeviceScreen () {
      return this.$vuetify.breakpoint.mdOnly
    },

    isLargeDeviceScreen () {
      return this.$vuetify.breakpoint.lgOnly
    },

    isTabletAndMobileScreen () {
      return this.$vuetify.breakpoint.smAndDown
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
