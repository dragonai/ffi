import { createGlobalStyle } from 'styled-components'

// put styles here

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`
