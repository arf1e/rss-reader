import i18next from 'i18next';
import ru from './locales/ru';
import FORM_STAGES from './constants';
import { getElements } from './dom';

const init = () => {
  const state = {
    feeds: [],
    posts: [],
    message: null,
    form: {
      isValid: true,
      stage: FORM_STAGES.idle,
      error: null,
    },
    ui: {
      visitedPosts: [],
    },
  };

  return i18next
    .init({
      lng: 'ru',
      debug: true,
      resources: {
        ru,
      },
    })
    .then(() => {
      const elements = getElements();
      return { state, elements };
    });
};

export default init;
