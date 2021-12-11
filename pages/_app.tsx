import "../styles/globals.scss";
import type {AppProps} from "next/app";
import {Fragment} from "react";

import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
