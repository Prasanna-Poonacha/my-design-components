// import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';

// addons.setConfig({
//   theme: themes.light
// });

import { addons } from '@storybook/addons';
import customTheme from './customTheme';

addons.setConfig({
  theme: customTheme
});

