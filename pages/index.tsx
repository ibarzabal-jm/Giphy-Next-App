import type {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import GifSearchComponent from "@components/GifSearch";
import ListOfGifs from "@components/ListOfGifs/ListOfGifs";
import TrendingTerms from "@components/TrendingTerms/TrendingTerms";

import {api} from "../api/api";
import {Gif} from "../types/ApiResponse";

export const getStaticProps: GetStaticProps = async () => {
  const trendingGifs = await api.getTrendingGif(12);
  const trendingTerms = await api.getTredingTerms();

  return {
    props: {trendingGifs, trendingTerms},
    revalidate: 60,
  };
};

const Home: NextPage<{trendingGifs: Gif[]; trendingTerms: Array<string>}> = ({
  trendingGifs,
  trendingTerms,
}) => {
  return (
    <div>
      <Head>
        <title>Giphy By Juanma</title>
        <meta content="App Giphy creado por Juan Manuel Ibarzabal" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="container">
        <GifSearchComponent />
        <section>
          <ListOfGifs gifs={trendingGifs} masonry={false} />
          <TrendingTerms trendingTerms={trendingTerms} />
        </section>
      </main>
    </div>
  );
};

export default Home;
