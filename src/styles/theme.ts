import { createTheme } from '@mui/material';
import fontFace from './fonts';

declare module '@mui/material/styles' {
  interface Palette {
    greyBlue: Palette['grey'];
  }
  interface PaletteOptions {
    greyBlue: PaletteOptions['grey'];
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ['SUITE', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => `
                ${fontFace}
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                html, body {
                    font-family: 'SUITE', sans-serif
                }
                img {
                    max-width: 100%;
                    width: 100%;
                    vertical-align: top;
                    display: block;
                }
                a {
                  text-decoration: none;
                  color: inherit;
                }
                ul {
                  list-style: none;
                }

                *::-webkit-scrollbar {
                  width: 12px;
                  height: 12px;
                }
                
                *::-webkit-scrollbar-track {
                  background-color: transparent;
                }
                
                *::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    border: 4px solid transparent;
                    box-shadow: inset 10px 10px 0 ${theme.palette.grey[300]};
                },
                
                *::-webkit-scrollbar-thumb:hover {
                    box-shadow: inset 10px 10px 0 ${theme.palette.grey[400]};
                },
            `,
    },
  },
  palette: {
    greyBlue: {
      100: '#F3F4F7',
      200: '#E8EBF3',
      300: '#CAD2E8',
      400: '#B5BDD6',
      500: '#9BA5C3',
    },
  },
});

export default theme;
