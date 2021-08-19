const theme = {
  white: '#e8e8e8',
  green: '#0FD990',
  greenDark: '#1A8E64',
  blue: '#0B213F',
  blueDark: '#051325',
  blueLight: '#1A3A65',
  blueStrong: '#2d79e0',
};

// generates type ThemeType from theme object
export type ThemeType = typeof theme;

// declaration of DefaultTheme for further use in styled components
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}

export default theme;
