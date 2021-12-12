import React, {useEffect, useRef, useState} from "react";
import {GetServerSideProps, NextPage} from "next";

import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import {api} from "../../api/api";
import {Gif} from "../../types/ApiResponse";
import {useNearScreen} from "../../hooks/useNearScreen";
import {useFetchGif} from "../../hooks/useFetchGifs";

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const keyword = params?.id as string;
  const gifs = await api.getListGif(keyword, 10);

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
  const {gifs: newgifs, nextPage, status} = useFetchGif({keyword, immediate: false});
  const {isNearScreen} = useNearScreen({
    distance: "100px",
    externalRef: status === "pending" ? null : externalRef,
  });

  useEffect(() => {
    isNearScreen && nextPage();
  }, [isNearScreen]);

  useEffect(() => {
    setGifsArray((prev) => [...prev, ...newgifs]);
  }, [newgifs]);

  return (
    <div>
      <h1>{keyword}</h1>
      <ListOfGifs gifs={gifsArray} masonry={false} />
      {status === "pending" && <div style={{background: "red", height: "200px"}}>Cargandooo</div>}
      <div ref={externalRef} />
    </div>
  );
};

export default SearchPage;
