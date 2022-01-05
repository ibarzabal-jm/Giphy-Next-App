import type {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import GifSearchComponent from "@components/GifSearch";
import ListOfGifs from "@components/ListOfGifs/ListOfGifs";

import {api} from "../api/api";
import {Gif} from "../types/ApiResponse";

export const getStaticProps: GetStaticProps = async () => {
  const trendingGifs = await api.getTrendingGif(12);

  return {
    props: {trendingGifs},
    revalidate: 60,
  };
};

const Home: NextPage<{trendingGifs: Gif[]}> = ({trendingGifs}) => {
  return (
    <div>
      <Head>
        <title>Giphy By Juanma</title>
        <meta content="App Giphy creado por Juan Manuel Ibarzabal" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="container">
        <GifSearchComponent />
        <ListOfGifs gifs={trendingGifs} masonry={false} />
      </main>
    </div>
  );
};

export default Home;
