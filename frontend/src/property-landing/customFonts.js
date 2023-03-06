import { Global } from '@mantine/core';
import regular from '../fonts/Poppins-Black.ttf';
import bold from '../fonts/Poppins-Bold.ttf';
import light from '../fonts/Poppins-Light.ttf';
import italic from '../fonts/Poppins-Italic.ttf';

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${regular}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${bold}') format("woff2")`,
            fontWeight: 900,
            fontStyle: 'bold',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${light}') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${italic}') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'italic',
          },
        },
      ]}
    />
  );
}