export const palette = {
  data () {
    return {
      white: '#f9f9f9',
      gray: '#8a938c',
      brown: '#af5936',
      black: '#19191a'
    }
  }
}

export const designProps = {
  props: {
    bgColour: {
      type: String,
      default: 'blue'
    },

    txtColour: {
      type: String,
      default: 'black'
    }
  }
}
