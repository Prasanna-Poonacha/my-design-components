import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  brandTitle: 'Fabric Catalog',
  // brandUrl: '',
  // brandImage: '',

  // UI
  appBg: 'white',
  appContentBg: 'smokewhite',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: 'black',
});