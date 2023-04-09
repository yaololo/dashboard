import { createGlobalStyle } from 'styled-components'

import { themeVariable } from './variables'
import { avatarCss } from './avatar'

const GlobalStyle = createGlobalStyle`
  :root {
    ${themeVariable}
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: overlay;
    font-size: 1.6rem;
    overflow: auto;
    background-color: var(--bg-primary);
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
  }

  ${avatarCss}

  .flex { display: flex; }
  .justify-center { justify-content: center; }
  .justify-left { justify-content: left; }
  .justify-right { justify-content: right; }
  .justify-space-between { justify-content: space-between; }
  .justify-space-even { justify-content: space-even; }
  .align-center { align-items: center; }
  .align-left { align-items: left; }
  .align-right { align-items: right; }
  .flex-direction-col { flex-direction: column; }
  .flex-direction-row-reverse { flex-direction: row-reverse; }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default GlobalStyle
