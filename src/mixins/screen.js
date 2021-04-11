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
