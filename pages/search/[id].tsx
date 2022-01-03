import React, {useEffect, useRef, useState} from "react";
import {GetServerSideProps, NextPage} from "next";
import Loading from "@components/Loading/Loading";

import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import {api} from "../../api/api";
import {Gif} from "../../types/ApiResponse";
import {useNearScreen} from "../../hooks/useNearScreen";
import {useFetchGif} from "../../hooks/useFetchGifs";
import styles from "../../styles/pages/search.module.scss";

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const keyword = params?.id as string;
  const gifs = await api.getListGif(keyword, 12);

  return {
    props: {keyword, gifs},
  };
};

interface Props {
  gifs: Gif[];
  keyword: string;
}

const SearchPage: NextPage<Props> = ({gifs, keyword}) => {
  const [gifsArray, setGifsArray] = useState([...gifs]);
  const externalRef = useRef(null);
  const {gifs: newgifs, nextPage, status, isEnd} = useFetchGif({keyword, immediate: false});
  const {isNearScreen} = useNearScreen({
    distance: "100px",
    externalRef: status === "pending" ? null : externalRef,
    once: isEnd,
  });

  useEffect(() => {
    isNearScreen && nextPage();
  }, [isNearScreen]);

  useEffect(() => {
    setGifsArray((prev) => [...prev, ...newgifs]);
  }, [newgifs]);

  return (
    <section>
      <main className={styles.landing + " container"}>
        <h1 aria-label={keyword} className={styles.title} role="heading">
          {keyword.split("").map((char, index) => (
            <span
              key={index}
              aria-hidden="false"
              className={index % 2 === 0 ? "" : index % 3 === 0 ? styles.blink2 : styles.blink3}
            >
              {char}
            </span>
          ))}
        </h1>
        <ListOfGifs gifs={gifsArray} masonry={true} />
        {status === "pending" && (
          <div className={styles.loadingContainer}>
            <Loading />
          </div>
        )}
        {isEnd && "Fin"}
        <div ref={externalRef} />
      </main>
    </section>
  );
};

export default SearchPage;
