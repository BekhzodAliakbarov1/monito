import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { createGlobalStyle } from 'styled-components';
import { Hydrate, QueryClientProvider } from 'react-query';
import reactQueryClient from 'config/react-query-config';
import { Provider } from 'react-redux';
import { store } from 'redux-state/store';

const GlobalStyle = createGlobalStyle`
    /* @font-face {
      font-family: "SF Pro Text Regular";
      src: url("/font/SF Pro Text Regular.ttf");
    }
    *{
      font-family: "SF Pro Text Regular";
    } */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const [queryClient] = useState(() => reactQueryClient);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps}>
          <Provider store={store}>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
              <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                <NotificationsProvider autoClose={4000}>
                  <Component {...pageProps} />
                </NotificationsProvider>
              </MantineProvider>
            </ColorSchemeProvider>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
