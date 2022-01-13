import type {GetStaticProps, NextPage} from "next";
import NextHead from "@components/Layout/NextHead";
import GifSearchComponent from "@components/GifSearch";
import ListOfGifs from "@components/ListOfGifs/ListOfGifs";
import TrendingTerms from "@components/TrendingTerms/TrendingTerms";
import styles from "@styles/pages/index.module.scss";
import TitleNeon from "@components/Layout/TitleNeon";
import NeonSeparateBar from "@components/Layout/NeonSeparateBar";

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
      <NextHead title="Home" />
      <main className={`${styles.home} container`}>
        <GifSearchComponent />
        <NeonSeparateBar />
        <section className={styles.trending}>
          <TitleNeon color="#00d0ff" tag="h2" title="Trending" />
          <ListOfGifs gifs={trendingGifs} masonry={false} priority={true} />
          <TrendingTerms trendingTerms={trendingTerms} />
        </section>
      </main>
    </div>
  );
};

export default Home;
