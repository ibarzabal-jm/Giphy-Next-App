import React, {useEffect, useRef, useState} from "react";
import {GetServerSideProps, NextPage} from "next";

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
  const [noMoreGifs, setNoMoreGifs] = useState(false);
  const externalRef = useRef(null);
  const {gifs: newgifs, nextPage, status} = useFetchGif({keyword, immediate: false});
  const {isNearScreen} = useNearScreen({
    distance: "100px",
    externalRef: status === "pending" ? null : externalRef,
    once: noMoreGifs,
  });

  useEffect(() => {
    isNearScreen && nextPage();
  }, [isNearScreen]);

  useEffect(() => {
    newgifs.length === 0 && setNoMoreGifs(true);
    setGifsArray((prev) => [...prev, ...newgifs]);
  }, [newgifs]);

  return (
    <section className={styles.landing}>
      <h1>{keyword}</h1>
      <main>
        <ListOfGifs gifs={gifsArray} masonry={true} />
        {status === "pending" && <div style={{background: "red", height: "200px"}}>Cargandooo</div>}
        {noMoreGifs && "Fin"}
      </main>
      <div ref={externalRef} />
    </section>
  );
};

export default SearchPage;
