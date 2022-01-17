import "../styles/globals.scss";
import type {AppProps} from "next/app";
import {FavProvider} from "context/FavContext";

import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <FavProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </FavProvider>
  );
}

export default MyApp;
