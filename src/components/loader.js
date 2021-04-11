// Globally register all components. They are registered using the
// PascalCased version of their file name.

import Vue from 'vue'

const vueComponents = require.context(
  // Look for files in the specified directory
  './common',
  // Look in subdirectories
  false,
  // Only include prefixed .vue files
  /[\w-]+\.vue$/
)

const relativePathRegex = /^\.\//
const filenameToRemoveRegex = /\.\w+$/

vueComponents.keys().forEach(filename => {
  const component = vueComponents(filename)
  const componentName = filename
    // Remove the "./" from the beginning
    .replace(relativePathRegex, '')
    // Remove the \Index.vue from the end
    .replace(filenameToRemoveRegex, '')
    // Split up kebabs
    .split('-')
    // Upper case
    .map(kebabWords => kebabWords.charAt(0).toUpperCase() + kebabWords.slice(1))
    .join('')

  // Globally register the component
  Vue.component(componentName, component.default || component)
})
