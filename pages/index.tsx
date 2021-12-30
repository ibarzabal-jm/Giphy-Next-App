import type {NextPage} from "next";
import Head from "next/head";
import GifSearchComponent from "@components/GifSearch";

// import styles from "../styles/pages/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Giphy By Juanma</title>
        <meta content="App Giphy creado por Juan Manuel Ibarzabal" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="container">
        <GifSearchComponent />
      </main>
    </div>
  );
};

export default Home;
