import Projects from '../assets/list_of_projects_done.json'

const defaultLanguageColour = '#C4C4C4'

const languageColourMap = {
  vue: '#2c3e50',
  node: '#f1e05a',
  javascript: '#f1e05a',
  python: '#3572a5',
  dart: '#00b4ab',
  flutter: '#00b4ab'
}

export const getProjectList = () => {
  for (const [_, value] of Object.entries(Projects)) {
    const { language } = value

    value.language_colour = languageColourMap[language] || defaultLanguageColour
    value.language = value.language[0].toUpperCase() + value.language.slice(1)
  }

  return Projects
}
