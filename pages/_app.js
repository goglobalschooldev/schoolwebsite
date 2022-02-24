import '../styles/globals.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Layout from '../components/Layout'
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Router from "next/router"
import { useState, useEffect } from "react"
import Loader from "../components/Loader"
import Head from "next/head"
import NProgress from "nprogress"
import Aos from 'aos';
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { AuthProvider } from '../Context/AuthContext'
import { initReactI18next } from 'react-i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next'
import EN from '../locale/en/translation.json'
import KH from '../locale/kh/translation.json'

NProgress.configure({ showSpinner: false });
i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(I18nextBrowserLanguageDetector)
  .use(HttpApi)
  .init({
    resources: {
      en: {
        translation: EN
      },
      kh: {
        translation: KH
      }
    },
    supportedLngs: ['en', 'kh'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },

    react: {
      useSuspense: false
    }
  });

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    NProgress.start()
    setLoading(true)
  });
  Router.events.on('routeChangeComplete', (url) => {
    console.log("Route is completed...")
    NProgress.done()
    setLoading(false)
  })

  const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  })

  const theme = extendTheme({ breakpoints })

  const colortheme = extendTheme({
    colors: {
      brand: {
        100: "#0F81C2",
        101: "#707070",
        102: "#7750F8",
        signav: "#E9E9E9",
        200: "#0983C4",
      },
    },
  })

  return (

    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {loading && <Loader />}

      <AuthProvider>
        <ChakraProvider theme={theme, colortheme} >
          <Layout>
            <Component {...pageProps} />
            <MessengerCustomerChat
              pageId="1586031671709848"
              appId="292640049631112"
            />
          </Layout>
        </ChakraProvider>
      </AuthProvider>
    </div>
  )
}

export default MyApp
