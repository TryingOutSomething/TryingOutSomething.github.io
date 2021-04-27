export const palette = {
  data () {
    return {
      white: '#f9f9f9',
      gray: '#8a938c',
      brown: '#af5936',
      black: '#19191a',
      yellow: '#f9c410'
    }
  }
}

export const designProps = {
  props: {
    bgColour: {
      type: String,
      default: 'white'
    },

    txtColour: {
      type: String,
      default: 'black'
    }
  }
}
