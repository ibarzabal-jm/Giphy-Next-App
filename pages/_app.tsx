import "../styles/globals.css";
import type {AppProps} from "next/app";
import {Fragment} from "react";

import Footer from "../components/Layout/Footer";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Fragment>
      <nav>Hola Soy un navbar</nav>
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
