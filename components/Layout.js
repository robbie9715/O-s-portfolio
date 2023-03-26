import Head from 'next/head'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const THEME = createTheme({
  typography: {
    fontFamily: `"Mulish","Roboto", "Helvetica", "Arial", sans-serif`,
  },
})

export default function Layout({ title, keywords, description, children }) {
  return (
    <ThemeProvider theme={THEME}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>

      <div style={{ backgroundColor: '#0A192F' }}>{children}</div>
    </ThemeProvider>
  )
}

Layout.defaultProps = {
  title: 'Milos Zivkovic | Web Developer',
  description:
    "I'm Milos Zivkovic. I'm working as a web developer and this is my portfolio",
  keywords: 'Milos Zivkovic, web developer, freelance, designer',
}
