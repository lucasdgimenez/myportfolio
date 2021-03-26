import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from "next/head"
import {theme} from "../src/theme"

const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio Boot</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
