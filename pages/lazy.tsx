import type {NextPage} from "next";
import Head from "next/head";

import GifSearchComponent from "../components/GifSearch";
import LazyTrending from "../components/LazyTrending/LazyTrending";
import styles from "../styles/pages/Home.module.css";

const Lazy: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Giphy By Juanma</title>
        <meta content="App Giphy creado por Juan Manuel Ibarzabal" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <h1>Giphy Next App</h1>
        <GifSearchComponent />

        <div style={{height: "2000px", backgroundColor: "red"}} />
        <LazyTrending />
      </main>
    </div>
  );
};

export default Lazy;
