import {GetServerSideProps, NextPage} from "next/types";
import NextHead from "@components/Layout/NextHead";
import TitleNeon from "@components/Layout/TitleNeon";
import {api} from "api/api";
import Image from "next/image";
import ListOfGifs from "@components/ListOfGifs/ListOfGifs";
import styles from "@styles/pages/gif.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as faRegHeart} from "@fortawesome/free-regular-svg-icons";

import {Gif} from "../types/ApiResponse";
import {useFavs} from "../hooks/useFavs";
import TrendingTerms from "../components/TrendingTerms/TrendingTerms";

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const id = params?.id as string;
  const gif = await api.getSingleGif(id);

  // redirect to 404 if gif not found
  if (!gif.id) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  const [relatedGifs, suggestions] = await Promise.allSettled([
    api.getRelatedGifs(gif.id),
    api.getSearchSuggestions(gif.title),
  ]);

  return {
    props: {
      gif,
      relatedGifs: relatedGifs.status === "fulfilled" ? relatedGifs.value : [],
      suggestions: suggestions.status === "fulfilled" ? suggestions.value : [],
    },
  };
};

const GifLandingPage: NextPage<{
  gif: Gif;
  relatedGifs: Gif[];
  suggestions: string[];
}> = ({gif, relatedGifs, suggestions}) => {
  const {images, title} = gif;

  const {isFavorite, toggleFav} = useFavs();

  return (
    <div>
      <NextHead title={title} />
      <div className={styles.landing + " container"}>
        <main className={styles.mainGif}>
          <TitleNeon color="#ffaaff" size="3.5rem" tag="h1" textTransform="none" title={title} />
          <div className={styles.mainImage}>
            <Image
              unoptimized
              alt={title}
              height={images.original.height}
              src={images.original.webp}
              width={500}
            />
            <button className={styles.favButton} onClick={() => toggleFav(gif)}>
              {isFavorite(gif) ? (
                <FontAwesomeIcon aria-label="Fav" color="#f00" icon={faHeart} size="lg" />
              ) : (
                <FontAwesomeIcon aria-label="NoFavorite" icon={faRegHeart} size="lg" />
              )}
            </button>
          </div>
        </main>

        <TrendingTerms trendingTerms={suggestions} />
        <div className="related">
          <TitleNeon size="3rem" tag="h3" title="Related Gif" />
          <ListOfGifs gifs={relatedGifs} masonry={false} />
        </div>
      </div>
    </div>
  );
};

export default GifLandingPage;
