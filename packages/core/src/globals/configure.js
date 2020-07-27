import SomaDS from '@lego-ds/design-tokens';
// import { ThemeProvider } from 'chameleon';
import { importFonts } from "./font";
/*
SomaDS.on('change', (theme) => {
  ThemeProvider.setValue(theme)
});

const shouldSetDefaultTheme = true;
*/

export default () => {
  /*
  if(shouldSetDefaultTheme) {
    SomaDS.use('placeholder');
  }
  */ 
  importFonts();
}

