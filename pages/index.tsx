import type {NextPage} from "next";
import Head from "next/head";
import {useState} from "react";

import ListOfGifs from "../components/ListOfGifs";
import Search from "../components/Search";
import styles from "../styles/Home.module.css";
import {StatusSearch} from "../types/StatusSearch";

const Home: NextPage = () => {
  const [searchedGifs, setSearchedGifs] = useState<StatusSearch>({
    loading: false,
    gifs: [],
    historySearch: [],
    lastSearch: null,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Giphy By Juanma</title>
        <meta content="App Giphy creado por Juan Manuel Ibarzabal" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <h1>Giphy Next App</h1>
        <Search setSearched={setSearchedGifs} />

        {searchedGifs.gifs.length > 0 && (
          <div>
            {searchedGifs.loading && <div>Cargando..</div>}
            <ListOfGifs gifs={searchedGifs.gifs} keyword={searchedGifs.lastSearch} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
