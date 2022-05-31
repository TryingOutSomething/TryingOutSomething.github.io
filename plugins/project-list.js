import Projects from '~/assets/list_of_projects_done.json';
import ColourMap from '~/assets/language_colour_map.json';

export default ({ app }, inject) => {
  inject('getProjectList', () => {
    // eslint-disable-next-line no-unused-vars
    for (const [_, value] of Object.entries(Projects)) {
      const { language } = value;

      value.language_colour = ColourMap[language] || ColourMap.default;
      value.language = value.language[0].toUpperCase() + value.language.slice(1);
    }

    return Projects;
  });
}
