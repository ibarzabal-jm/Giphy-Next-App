import type {NextPage} from "next";
import Head from "next/head";
import {useState} from "react";

import ListOfGifs from "../components/ListOfGifs";
import Search from "../components/Search";
import {useFetchGif} from "../hooks/useFetchGifs";
import styles from "../styles/Home.module.css";
import {Gif} from "../types/ApiResponse";
import {StatusFetch} from "../types/StatusFetch";

const Home: NextPage = () => {
  const [gifsSearched, setGifsSearched] = useState<StatusFetch[]>([]);

  console.log(gifsSearched);

  return (
    <div className={styles.container}>
      <Head>
        <title>Giphy By Juanma</title>
        <meta content="App Giphy creado por Juan Manuel Ibarzabal" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <h1>Giphy Next App</h1>
        <Search setSearchs={setGifsSearched} />
        {gifsSearched.map((listSearch) =>
          listSearch.loading ? null : (
            <ListOfGifs
              key={listSearch.keyword}
              gifs={listSearch.gifs}
              keyword={listSearch.keyword}
            />
          ),
        )}
      </main>
    </div>
  );
};

export default Home;
