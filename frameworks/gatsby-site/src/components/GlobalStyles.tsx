import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    --size-1: 4px;
    --size-2: 8px;
    --size-3: 16px;
    --size-4: 24px;
    --size-5: 32px;
    --size-6: 48px;
    --size-7: 64px;

    --color-fg-base:         0deg, 15%;
    --color-fg:              hsl(var(--color-fg-base), 20%);
    --color-fg-calm:         hsl(var(--color-fg-base), 45%);
    --color-fg-on-emphasis:  #ffffff;

    --color-bg:              #ffffff;
    --color-bg-rgb:          255, 255, 255;
    --color-bg-muted:        hsl(var(--color-fg-base), 97%);
    --color-bg-calm:         hsl(var(--color-fg-base), 98.5%);

    --color-accent-base:     270deg, 100%;
    --color-accent:          hsl(var(--color-accent-base), 65%);
    --color-accent-muted:    hsl(var(--color-accent-base), 97%);

    --font-sans: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    
    --lineheight-00: 1;
    --lineheight-0: 1.1;
    --lineheight-1: 1.25;
    --lineheight-2: 1.375;
    --lineheight-3: 1.5;
    --lineheight-4: 1.75;
    --lineheight-5: 2;

    --font-size-00: .5rem;
    --font-size-0: .75rem;
    --font-size-1: .875rem;
    --font-size-2: 1rem;
    --font-size-3: 1.125rem;
    --font-size-4: 1.25rem;
    --font-size-5: 1.5rem;
    --font-size-6: 2rem;

    --font-weight-1: 100;
    --font-weight-2: 200;
    --font-weight-3: 300;
    --font-weight-4: 400;
    --font-weight-5: 500;
    --font-weight-6: 600;
    --font-weight-7: 700;
    --font-weight-8: 800;
    --font-weight-9: 900;

    --radius-1: 2px;
    --radius-2: 4px;
    --radius-3: 6px;
    --radius-4: 8px;
    --radius-5: 16px;
    --radius-100: 9999px;

    --shadow-color: 0deg 0% 80%;
    --shadow-elevation-low:
      0px 0.2px 0.2px hsl(var(--shadow-color) / 0.16),
      0px 0.3px 0.3px -1.2px hsl(var(--shadow-color) / 0.16),
      0px 0.7px 0.8px -2.4px hsl(var(--shadow-color) / 0.17);
    --shadow-elevation-medium:
      0px 0.2px 0.2px hsl(var(--shadow-color) / 0.17),
      0px 0.6px 0.7px -0.8px hsl(var(--shadow-color) / 0.17),
      0px 1.5px 1.7px -1.6px hsl(var(--shadow-color) / 0.18),
      0px 3.5px 4px -2.4px hsl(var(--shadow-color) / 0.18);
    --shadow-elevation-high:
      0px 0.2px 0.2px hsl(var(--shadow-color) / 0.16),
      0px 0.8px 0.9px -0.3px hsl(var(--shadow-color) / 0.16),
      0px 1.4px 1.6px -0.7px hsl(var(--shadow-color) / 0.16),
      0px 2.2px 2.5px -1px hsl(var(--shadow-color) / 0.16),
      0px 3.5px 4px -1.4px hsl(var(--shadow-color) / 0.16),
      -0.1px 5.3px 6px -1.7px hsl(var(--shadow-color) / 0.16),
      -0.1px 8px 9.1px -2.1px hsl(var(--shadow-color) / 0.17),
      -0.1px 11.7px 13.3px -2.4px hsl(var(--shadow-color) / 0.17);

    color: var(--color-fg);
    font-family: var(--font-sans);
    line-height: var(--lineheight-3);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  input,
  button {
    color: var(--color-fg);
    font-family: var(--font-sans);
    font-size: 1rem;
  }

  input::placeholder {
    color: var(--color-fg-calm);
  }
`;

export default GlobalStyles;
